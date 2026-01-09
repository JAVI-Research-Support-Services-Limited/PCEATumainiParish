import { PropsWithChildren, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps extends PropsWithChildren {
  showNav?: boolean;
}

export default function Layout({ children, showNav }: LayoutProps) {
  const location = useLocation();
  const [churchContext, setChurchContext] = useState<string | null>(null);

  useEffect(() => {
    // Detect church context from URL
    if (location.pathname.includes("/st-luke")) {
      setChurchContext("st-luke");
      sessionStorage.setItem("churchContext", "st-luke");
    } else if (location.pathname.includes("/mwihoko")) {
      setChurchContext("mwihoko");
      sessionStorage.setItem("churchContext", "mwihoko");
    } else if (location.pathname.includes("/emmanuel")) {
      setChurchContext("emmanuel");
      sessionStorage.setItem("churchContext", "emmanuel");
    } else if (location.pathname === "/") {
      setChurchContext(null);
      sessionStorage.removeItem("churchContext");
    } else {
      // If we're on a sub-page (like /events) that doesn't have the church in path,
      // check if we have a saved context in sessionStorage
      const savedContext = sessionStorage.getItem("churchContext");
      if (savedContext) {
        setChurchContext(savedContext);
      }
    }
  }, [location.pathname]);

  // Determine logo and CTA text based on context
  let logoText = "P.C.E.A";
  let logoSubtext = "Tumaini Parish (UTAWALA)";
  let ctaText = "Give to Tumaini Parish";
  let ctaLink = "/give";

  if (!churchContext && location.pathname === "/") {
    logoText = "P.C.E.A Tumaini Parish";
    logoSubtext = "(UTAWALA)";
    ctaText = "Give to Tumaini Parish";
    ctaLink = "/give";
  } else if (churchContext === "st-luke") {
    logoText = "P.C.E.A";
    logoSubtext = "St Luke Church (UTAWALA)";
    ctaText = "Give to St Luke";
    ctaLink = "/st-luke/give";
  } else if (churchContext === "mwihoko") {
    logoText = "P.C.E.A";
    logoSubtext = "Mwihoko Church";
    ctaText = "Give to Mwihoko";
    ctaLink = "/mwihoko/give";
  } else if (churchContext === "emmanuel") {
    logoText = "P.C.E.A";
    logoSubtext = "Emmanuel Church";
    ctaText = "Give to Emmanuel";
    ctaLink = "/emmanuel/give";
  }

  // Show header on all individual church pages, but hide navigation menu on the first main page (/)
  const isMainPage = location.pathname === "/";
  const isGivePage = location.pathname.includes("/give");
  const shouldShowNav = !isMainPage;
  const shouldShowHeader = !isMainPage;

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      {!isMainPage && (
        <Header
          showNav={shouldShowNav}
          logoText={logoText}
          logoSubtext={logoSubtext}
          ctaText={ctaText}
          ctaLink={ctaLink}
        />
      )}
      <main className={shouldShowHeader ? "flex-1 -mt-16" : "flex-1"}>{children}</main>
      <Footer />
    </div>
  );
}
