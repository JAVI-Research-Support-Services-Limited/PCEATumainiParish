/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type * as functions_createPayment from "../functions/createPayment.js";
import type * as functions_getPaymentStatus from "../functions/getPaymentStatus.js";
import type * as functions_initiateStkPush from "../functions/initiateStkPush.js";
import type * as functions_updatePaymentStatus from "../functions/updatePaymentStatus.js";
import type * as payments from "../payments.js";

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";

declare const fullApi: ApiFromModules<{
  "functions/createPayment": typeof functions_createPayment;
  "functions/getPaymentStatus": typeof functions_getPaymentStatus;
  "functions/initiateStkPush": typeof functions_initiateStkPush;
  "functions/updatePaymentStatus": typeof functions_updatePaymentStatus;
  payments: typeof payments;
}>;

/**
 * A utility for referencing Convex functions in your app's public API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;

/**
 * A utility for referencing Convex functions in your app's internal API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = internal.myModule.myFunction;
 * ```
 */
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;

export declare const components: {};
