import React from "react";
import { Routes, Route } from "react-router-dom";
import Emmanuel from "@/congregations/emmanuel/pages/Emmanuel";
import Give from "@/congregations/emmanuel/pages/give";
import Events from "@/congregations/emmanuel/pages/events";
import About from "@/congregations/emmanuel/pages/about";
import Contact from "@/congregations/emmanuel/pages/contact";
import Ministries from "@/congregations/emmanuel/pages/ministries";
import Worship from "@/congregations/emmanuel/pages/worship";
import Prayer from "@/congregations/emmanuel/pages/prayer";
import BibleStudy from "@/congregations/emmanuel/pages/bible-study";
import News from "@/congregations/emmanuel/pages/news";
import Calendar from "@/congregations/emmanuel/pages/calendar";
import Sermons from "@/congregations/emmanuel/pages/sermons";
import GetInvolved from "@/congregations/emmanuel/pages/get-involved";

const EmmanuelRoutes = () => (
  <Routes>
    <Route path="/" element={<Emmanuel />} />
    <Route path="/about" element={<About />} />
    <Route path="/give" element={<Give />} />
    <Route path="/events" element={<Events />} />
    <Route path="/calendar" element={<Calendar />} />
    <Route path="/ministries" element={<Ministries />} />
    <Route path="/worship" element={<Worship />} />
    <Route path="/prayer" element={<Prayer />} />
    <Route path="/bible-study" element={<BibleStudy />} />
    <Route path="/news" element={<News />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/sermons" element={<Sermons />} />
    <Route path="/get-involved" element={<GetInvolved />} />
  </Routes>
);
export default EmmanuelRoutes;
