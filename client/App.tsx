import "./global.css";

import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import Layout from "@/components/site/Layout";

// ------------------ COMPONENTS ------------------
import HeroSection from "@/components/home/HeroSection";

// ------------------ PAGES ------------------

// Congregation route groups
const StLukeRoutes = React.lazy(() => import("./congregations/st-luke/routes"));
const MwihokoRoutes = React.lazy(
  () => import("./congregations/mwihoko/routes"),
);
const EmmanuelRoutes = React.lazy(
  () => import("./congregations/emmanuel/routes"),
);

// Fallback page
const NotFound = React.lazy(() => import("./NotFound"));

// ------------------ APP ------------------
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
          <Routes>
            {/* Landing page with dropdown */}
            <Route
              path="/"
              element={
                <HeroSection
                  title="Welcome to Our Parish Community"
                  subtitle="Commit your work to the LORD, and your plans will be established."
                  verse="For where two or three gather in my name, there am I with them."
                  verseRef="Matthew 18:20"
                  showDropdown={true}
                />
              }
            />

            {/* Congregations (shared Layout) */}
            <Route
              path="/st-luke/*"
              element={
                <Layout>
                  <StLukeRoutes />
                </Layout>
              }
            />
            <Route
              path="/mwihoko/*"
              element={
                <Layout>
                  <MwihokoRoutes />
                </Layout>
              }
            />
            <Route
              path="/emmanuel/*"
              element={
                <Layout>
                  <EmmanuelRoutes />
                </Layout>
              }
            />

            {/* Fallback */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
