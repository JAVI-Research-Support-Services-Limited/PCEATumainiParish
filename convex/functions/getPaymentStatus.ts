import { query } from "../_generated/server";
import { v } from "convex/values";

export const getPaymentStatus = query({
  args: {
    checkoutRequestId: v.string(),
  },
  handler: async (ctx, args) => {
    const payment = await ctx.db
      .query("payments")
      .withIndex("by_checkout_request", (q) => 
        q.eq("checkoutRequestId", args.checkoutRequestId)
      )
      .first();

    if (!payment) {
      return { 
        success: false, 
        message: "Payment not found" 
      };
    }

    return {
      success: true,
      status: payment.status,
      mpesaReceiptNumber: payment.mpesaReceiptNumber,
      transactionDate: payment.transactionDate,
      amount: payment.amount,
      phoneNumber: payment.phoneNumber,
      fullName: payment.fullName,
      givingType: payment.givingType,
      group: payment.group,
      district: payment.district,
    };
  },
});