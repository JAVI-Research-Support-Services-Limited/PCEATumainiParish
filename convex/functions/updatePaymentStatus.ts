import { mutation } from "../_generated/server";
import { v } from "convex/values";

export const updatePaymentStatus = mutation({
  args: {
    checkoutRequestId: v.string(),
    status: v.union(
      v.literal("pending"),
      v.literal("SUCCESS"), 
      v.literal("FAILED")
    ),
    mpesaReceiptNumber: v.optional(v.string()),
    transactionDate: v.optional(v.string()),
    resultDesc: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const now = Date.now();

    const payment = await ctx.db
      .query("payments")
      .withIndex("by_checkout_request", (q) => 
        q.eq("checkoutRequestId", args.checkoutRequestId)
      )
      .first();

    if (!payment) {
      throw new Error(`Payment with checkoutRequestId ${args.checkoutRequestId} not found`);
    }

    await ctx.db.patch(payment._id, {
      status: args.status,
      mpesaReceiptNumber: args.mpesaReceiptNumber,
      transactionDate: args.transactionDate,
      resultDesc: args.resultDesc,
      updatedAt: now,
    });

    return { 
      success: true, 
      paymentId: payment._id,
      status: args.status 
    };
  },
});