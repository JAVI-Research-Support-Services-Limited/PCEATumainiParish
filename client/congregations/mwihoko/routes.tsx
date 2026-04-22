import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

/* ------------------ CAMPUS PAGES ------------------ */
const Home = React.lazy(() => import("./pages/Homepage"));
const About = React.lazy(() => import("./pages/about"));
const Worship = React.lazy(() => import("./pages/worship"));
const Give = React.lazy(() => import("./pages/give"));
const Events = React.lazy(() => import("./pages/events"));
const Ministries = React.lazy(() => import("./pages/ministries"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

/* ------------------ MINISTRY PAGES ------------------ */
const Brigade = React.lazy(() => import("./pages/ministries/Brigade"));
const Kids = React.lazy(() => import("./pages/ministries/Kids"));
const Youth = React.lazy(() => import("./pages/ministries/Youth"));
const WomensGuild = React.lazy(() => import("./pages/ministries/WomensGuild"));
const MensFellowship = React.lazy(() => import("./pages/ministries/MensFellowship"));
const Evangelism = React.lazy(() => import("./pages/ministries/Evangelism"));
const ChristianEducation = React.lazy(() => import("./pages/ministries/ChristianEducation"));
const Jprc = React.lazy(() => import("./pages/ministries/jprc"));
const HealthBoard = React.lazy(() => import("./pages/ministries/HealthBoard"));
const Choir = React.lazy(() => import("./pages/ministries/Choir"));

/* ------------------ ROUTES ------------------ */
export default function MwihokoRoutes() {
  return (
    <Suspense fallback={<div className="p-10">Loading...</div>}>
      <Routes>
        {/* Landing pages */}
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="worship" element={<Worship />} />
        <Route path="give" element={<Give />} />
        <Route path="events" element={<Events />} />

        {/* Ministries */}
        <Route path="ministries" element={<Ministries />} />
        <Route path="ministries/brigade" element={<Brigade />} />
        <Route path="ministries/kids" element={<Kids />} />
        <Route path="ministries/youth" element={<Youth />} />
        <Route path="ministries/womens-guild" element={<WomensGuild />} />
        <Route path="ministries/mens-fellowship" element={<MensFellowship />} />
        <Route path="ministries/evangelism" element={<Evangelism />} />
        <Route path="ministries/christian-education" element={<ChristianEducation />} />
        <Route path="ministries/jprc" element={<Jprc />} />
        <Route path="ministries/health-board" element={<HealthBoard />} />
        <Route path="ministries/choir" element={<Choir />} />

        {/* Fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
