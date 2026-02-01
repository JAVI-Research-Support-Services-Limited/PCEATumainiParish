console.log('MPESA CONTROLLER FILE IS LOADING');

import {
  getMpesaAccessToken,
  initiateStkPush
} from '../services/mpesa.service.js';

import { ConvexHttpClient } from 'convex/browser';
import { api } from '../../../convex/_generated/api.js';

/* ======================================================
   CONVEX – LAZY, SAFE INITIALIZATION
   ====================================================== */

let convexClient = null;

function getConvexClient() {
  if (convexClient) return convexClient;

  const convexUrl = process.env.CONVEX_URL;

  if (!convexUrl) {
    throw new Error('❌ CONVEX_URL is not set. Check .env and dotenv load order.');
  }

  console.log('Initializing Convex with URL:', convexUrl);
  convexClient = new ConvexHttpClient(convexUrl);
  console.log('Convex client initialized successfully');

  return convexClient;
}

/* ======================================================
   TEST MPESA TOKEN
   ====================================================== */

export const testMpesaToken = async (req, res) => {
  try {
    const token = await getMpesaAccessToken();
    res.json({ success: true, token });
  } catch (error) {
    console.error('MPESA TOKEN ERROR:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

/* ======================================================
   STK PUSH CONTROLLER
   ====================================================== */

export const stkPush = async (req, res) => {
  console.log('\n========================================');
  console.log('RECEIVED STK PUSH REQUEST');
  console.log('========================================');
  console.log('Request Body:', JSON.stringify(req.body, null, 2));

  try {
    const {
      phoneNumber,
      amount,
      fullName,
      district,
      group,
      accountReference,
      transactionDesc
    } = req.body;

    /* ---------- Validation ---------- */
    if (!phoneNumber || !amount || !fullName) {
      return res.status(400).json({
        success: false,
        message: 'Phone number, amount, and full name are required'
      });
    }

    /* ---------- Phone Formatting ---------- */
    let formattedPhone = phoneNumber.replace(/\s+/g, '');
    if (formattedPhone.startsWith('0')) {
      formattedPhone = '254' + formattedPhone.slice(1);
    }
    if (formattedPhone.startsWith('+254')) {
      formattedPhone = formattedPhone.slice(1);
    }

    console.log('Formatted phone:', formattedPhone);
    console.log('Amount:', amount);

    /* ---------- Initiate STK Push ---------- */
    const result = await initiateStkPush({
      phone: formattedPhone,
      amount,
      accountReference: accountReference || 'Donation',
      transactionDesc: transactionDesc || 'STK Push Payment'
    });

    console.log('M-Pesa Response:', JSON.stringify(result, null, 2));

    /* ---------- Save Pending Payment ---------- */
    if (result.ResponseCode === '0') {
      const convex = getConvexClient();

      const paymentData = {
        checkoutRequestId: result.CheckoutRequestID,
        merchantRequestId: result.MerchantRequestID,
        phoneNumber: formattedPhone,
        amount: Number(amount),
        fullName,
        district: district || undefined,
        group: group || undefined,
        givingType: accountReference || 'Donation',
        accountReference: accountReference || 'Donation',
        transactionDesc: transactionDesc || 'STK Push Payment',
        status: 'pending' // MUST be allowed in Convex schema
      };

      try {
        await convex.mutation(
          api.functions.createPayment.createPayment,
          paymentData
        );
        console.log('Payment saved to Convex (pending)');
      } catch (convexError) {
        console.error('CONVEX CREATE ERROR:', convexError);
        console.warn('Continuing – STK Push already sent');
      }

      return res.json({
        success: true,
        data: result,
        message: 'STK Push sent. Please check your phone.'
      });
    }

    /* ---------- STK Push Failed ---------- */
    return res.status(400).json({
      success: false,
      message: result.ResponseDescription || 'STK Push failed',
      data: result
    });

  } catch (error) {
    console.error('STK PUSH ERROR:', error);
    res.status(500).json({
      success: false,
      error: error.response?.data || error.message
    });
  } finally {
    console.log('========================================\n');
  }
};

/* ======================================================
   MPESA CALLBACK HANDLER (IDEMPOTENT)
   ====================================================== */

export const stkCallback = async (req, res) => {
  console.log('\n========================================');
  console.log('MPESA CALLBACK RECEIVED');
  console.log('========================================');
  console.log('Callback Body:', JSON.stringify(req.body, null, 2));

  try {
    const { Body } = req.body;

    if (!Body?.stkCallback) {
      return res.json({ ResultCode: 0, ResultDesc: 'Accepted' });
    }

    const {
      CheckoutRequestID,
      ResultCode,
      ResultDesc,
      CallbackMetadata
    } = Body.stkCallback;

    const status = ResultCode === 0 ? 'SUCCESS' : 'FAILED';

    let mpesaReceiptNumber;
    let transactionDate;

    if (ResultCode === 0 && CallbackMetadata?.Item) {
      const items = CallbackMetadata.Item;
      mpesaReceiptNumber = items.find(i => i.Name === 'MpesaReceiptNumber')?.Value;
      transactionDate = items
        .find(i => i.Name === 'TransactionDate')
        ?.Value?.toString();
    }

    const convex = getConvexClient();

    try {
      await convex.mutation(
        api.functions.updatePaymentStatus.updatePaymentStatus,
        {
          checkoutRequestId: CheckoutRequestID,
          status,
          mpesaReceiptNumber,
          transactionDate,
          resultDesc: ResultDesc
        }
      );

      console.log('Payment updated:', CheckoutRequestID, status);
    } catch (convexError) {
      console.error('CONVEX UPDATE ERROR:', convexError);
    }

    return res.json({ ResultCode: 0, ResultDesc: 'Accepted' });

  } catch (error) {
    console.error('CALLBACK ERROR:', error);
    return res.json({ ResultCode: 0, ResultDesc: 'Accepted' });
  } finally {
    console.log('========================================\n');
  }
};

/* ======================================================
   PAYMENT STATUS QUERY (FRONTEND POLLING)
   ====================================================== */

export const getPaymentStatus = async (req, res) => {
  const { checkoutRequestId } = req.params;

  try {
    const convex = getConvexClient();

    const result = await convex.query(
      api.functions.getPaymentStatus.getPaymentStatus,
      { checkoutRequestId }
    );

    res.json(result);
  } catch (error) {
    console.error('GET PAYMENT STATUS ERROR:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching payment status'
    });
  }
};
