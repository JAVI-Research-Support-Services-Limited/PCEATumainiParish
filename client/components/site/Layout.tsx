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
  let homeLink = "/st-luke"; // Default to St. Luke if no context
  let currentLogoText = "P.C.E.A Tumaini Parish";
  let currentLogoSubtext = "(UTAWALA)";
  let currentCtaText = "Give to Tumaini Parish";
  let currentCtaLink = "/give";

  if (churchContext === "st-luke") {
    currentLogoText = "P.C.E.A";
    currentLogoSubtext = "St Luke Church (UTAWALA)";
    currentCtaText = "Give to St Luke";
    currentCtaLink = "/st-luke/give";
    homeLink = "/st-luke";
  } else if (churchContext === "mwihoko") {
    currentLogoText = "P.C.E.A";
    currentLogoSubtext = "Mwihoko Church";
    currentCtaText = "Give to Mwihoko";
    currentCtaLink = "/mwihoko/give";
    homeLink = "/mwihoko";
  } else if (churchContext === "emmanuel") {
    currentLogoText = "P.C.E.A";
    currentLogoSubtext = "Emmanuel Church";
    currentCtaText = "Give to Emmanuel";
    currentCtaLink = "/emmanuel/give";
    homeLink = "/emmanuel";
  }

  // If no specific church context is found, use the overall Tumaini Parish defaults.
  // This implicitly covers the case of being on the root path ("/") without a stored context.
  // No need for a separate else if (location.pathname === "/") block for homeLink.

  // Show header on all individual church pages, but hide navigation menu on the first main page (/)
  const isMainPage = location.pathname === "/";
  const isGivePage = location.pathname.includes("/give");
  const shouldShowNav = !isMainPage;
  const shouldShowHeader = !isMainPage;

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <Header
        showNav={!isMainPage}
        logoText={currentLogoText}
        logoSubtext={currentLogoSubtext}
        ctaText={currentCtaText}
        ctaLink={currentCtaLink}
        homeLink={homeLink}
        forceSolid={isGivePage}
      />
      <main className="flex-1">{children}</main>
      {!isMainPage && <Footer size="default" />}
    </div>
  );
}
