import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import StLuke from "./pages/st-luke";
import Mwihoko from "./pages/Mwihoko";
import Emmanuel from "./pages/Emmanuel";
import StLukeGive from "./pages/st-luke-give";
import MwihokoGive from "./pages/mwihoko-give";
import EmmanuelGive from "./pages/emmanuel-give";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

import Layout from "@/components/site/Layout";
import About from "@/pages/about";
import Ministries from "@/pages/ministries";
import Worship from "@/pages/worship";
import Sermons from "@/pages/sermons";
import BibleStudy from "@/pages/bible-study";
import Prayer from "@/pages/prayer";
import StLukeWorship from "@/pages/st-luke-worship";
import MwihokoWorship from "@/pages/mwihoko-worship";
import EmmanuelWorship from "@/pages/emmanuel-worship";
import Events from "@/pages/events";
import GetInvolved from "@/pages/get-involved";
import Resources from "@/pages/resources";
import Community from "@/pages/community";
import Give from "@/pages/give";
import Contact from "@/pages/contact";
import Statement from "@/pages/Statement";
import News from "@/pages/news";
import Calendar from "@/pages/calendar";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/st-luke" element={<StLuke />} />
            <Route path="/st-luke/give" element={<StLukeGive />} />
            <Route path="/mwihoko" element={<Mwihoko />} />
            <Route path="/mwihoko/give" element={<MwihokoGive />} />
            <Route path="/emmanuel" element={<Emmanuel />} />
            <Route path="/emmanuel/give" element={<EmmanuelGive />} />
            <Route path="/about" element={<About />} />
            <Route path="/ministries" element={<Ministries />} />
            <Route path="/worship" element={<Worship />} />
            <Route path="/sermons" element={<Sermons />} />
            <Route path="/bible-study" element={<BibleStudy />} />
            <Route path="/prayer" element={<Prayer />} />
            <Route path="/st-luke/worship" element={<StLukeWorship />} />
            <Route path="/mwihoko/worship" element={<MwihokoWorship />} />
            <Route path="/emmanuel/worship" element={<EmmanuelWorship />} />
            <Route path="/events" element={<Events />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/community" element={<Community />} />
            <Route path="/give" element={<Give />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/statement" element={<Statement />} />
            <Route path="/news" element={<News />} />
            <Route path="/calendar" element={<Calendar />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
