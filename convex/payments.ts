import { query } from "./_generated/server";
import { v } from "convex/values";

// Query to get a payment by checkoutRequestId
export const getByCheckoutRequestId = query({
  args: { checkoutRequestId: v.string() },
  handler: async (ctx, args) => {
    const payment = await ctx.db
      .query("payments")
      .withIndex("by_checkout_request", (q) =>
        q.eq("checkoutRequestId", args.checkoutRequestId)
      )
      .first();
    
    return payment;
  },
});

// Query to get all payments (optional - for admin dashboard)
export const getAllPayments = query({
  args: {},
  handler: async (ctx) => {
    const payments = await ctx.db
      .query("payments")
      .order("desc")
      .collect();
    
    return payments;
  },
});