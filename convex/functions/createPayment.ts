import { mutation } from "../_generated/server";
import { v } from "convex/values";

export const createPayment = mutation({
  args: {
    checkoutRequestId: v.string(),
    merchantRequestId: v.string(),
    phoneNumber: v.string(),
    amount: v.number(),
    fullName: v.string(),
    district: v.optional(v.string()),
    group: v.optional(v.string()),
    givingType: v.string(),
    accountReference: v.string(),
    transactionDesc: v.string(),
    status: v.union(
      v.literal("pending"),
      v.literal("SUCCESS"),
      v.literal("FAILED")
    ),
  },
  handler: async (ctx, args) => {
    const now = Date.now();

    return await ctx.db.insert("payments", {
      checkoutRequestId: args.checkoutRequestId,
      merchantRequestId: args.merchantRequestId,
      phoneNumber: args.phoneNumber,
      amount: args.amount,
      fullName: args.fullName,
      district: args.district,
      group: args.group,
      givingType: args.givingType,
      accountReference: args.accountReference,
      transactionDesc: args.transactionDesc,
      status: args.status,
      createdAt: now,
      updatedAt: now,
    });
  },
});
