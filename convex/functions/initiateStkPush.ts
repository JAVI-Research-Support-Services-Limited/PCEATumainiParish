import { action } from "../_generated/server";
import { v } from "convex/values";
import { api } from "../_generated/api";

export const initiateStkPush = action({
  args: {
    phoneNumber: v.string(),
    amount: v.number(),
    fullName: v.string(),
    district: v.optional(v.string()),
    group: v.optional(v.string()),       // matches schema
    givingType: v.string(),
    accountReference: v.string(),
    transactionDesc: v.string(),
  },
  handler: async (ctx, args): Promise<any> => {
    try {
      // M-Pesa API credentials from environment variables
      const consumerKey = process.env.MPESA_CONSUMER_KEY!;
      const consumerSecret = process.env.MPESA_CONSUMER_SECRET!;
      const shortCode = process.env.MPESA_SHORT_CODE!;
      const passkey = process.env.MPESA_PASSKEY!;
      const callbackUrl = process.env.MPESA_CALLBACK_URL!;

      // Step 1: Get OAuth token
      const authResponse = await fetch(
        'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials',
        {
          headers: {
            Authorization: `Basic ${Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64')}`,
          },
        }
      );

      if (!authResponse.ok) throw new Error('Failed to get M-Pesa OAuth token');

      const { access_token } = await authResponse.json();

      // Step 2: Generate timestamp and password
      const timestamp = new Date().toISOString().replace(/[^0-9]/g, '').slice(0, 14);
      const password = Buffer.from(`${shortCode}${passkey}${timestamp}`).toString('base64');

      // Step 3: Format phone number
      let formattedPhone = args.phoneNumber.replace(/\s+/g, '');
      if (formattedPhone.startsWith('0')) formattedPhone = '254' + formattedPhone.slice(1);
      if (formattedPhone.startsWith('+254')) formattedPhone = formattedPhone.slice(1);

      // Step 4: Initiate STK Push
      const stkResponse = await fetch(
        'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest',
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${access_token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            BusinessShortCode: shortCode,
            Password: password,
            Timestamp: timestamp,
            TransactionType: 'CustomerPayBillOnline',
            Amount: args.amount,
            PartyA: formattedPhone,
            PartyB: shortCode,
            PhoneNumber: formattedPhone,
            CallBackURL: callbackUrl,
            AccountReference: args.accountReference,   // use full value
            TransactionDesc: args.transactionDesc,     // use full value
          }),
        }
      );

      const stkData = await stkResponse.json();

      // Step 5: Save to Convex 
      if (stkData.ResponseCode === '0') {
        const paymentId = await ctx.runMutation(api.functions.createPayment.createPayment, {
          checkoutRequestId: stkData.CheckoutRequestID,
          merchantRequestId: stkData.MerchantRequestID,
          phoneNumber: formattedPhone,
          amount: args.amount,
          fullName: args.fullName,
          district: args.district,
          group: args.group,                 // ✅ matches schema
          givingType: args.givingType,
          accountReference: args.accountReference,
          transactionDesc: args.transactionDesc,
          status: 'pending',
        });

        return {
          success: true,
          checkoutRequestId: stkData.CheckoutRequestID,
          merchantRequestId: stkData.MerchantRequestID,
          paymentId,
          message: 'STK Push sent successfully. Please check your phone.',
        };
      } else {
        return {
          success: false,
          message: stkData.errorMessage || stkData.ResponseDescription || 'STK Push failed',
          errorCode: stkData.ResponseCode || stkData.errorCode,
        };
      }
    } catch (error) {
      console.error('STK Push Error:', error);
      return {
        success: false,
        message: error instanceof Error ? error.message : 'An unknown error occurred',
      };
    }
  },
});
