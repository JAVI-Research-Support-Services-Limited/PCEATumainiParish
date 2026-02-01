// client/lib/convexClient.ts
import { ConvexReactClient } from "convex/react";

// Convex client instance for React 
export const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL!);
