import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  payments: defineTable({
    amount: v.float64(),
    checkoutRequestId: v.string(),
    merchantRequestId: v.string(),
    phoneNumber: v.string(),
    status: v.string(),
    createdAt: v.float64(),
    updatedAt: v.float64(),
    
    // Add these missing fields
    accountReference: v.optional(v.string()),
    transactionDesc: v.optional(v.string()),
    fullName: v.optional(v.string()),
    givingType: v.optional(v.string()),
    group: v.optional(v.string()),
    district: v.optional(v.string()),
    
    // Optional M-Pesa response fields
    mpesaReceiptNumber: v.optional(v.string()),
    transactionDate: v.optional(v.string()),
    resultDesc: v.optional(v.string()),
    
    // Keep these if you still need them
    churchGroup: v.optional(v.string()),
    payerName: v.optional(v.string()),
  }).index("by_checkout_request", ["checkoutRequestId"]),
  
  // Add your other tables here if you have them
});