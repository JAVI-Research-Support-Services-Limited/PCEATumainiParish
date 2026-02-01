import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import "./Header.css";

interface HeaderProps {
  showNav?: boolean;
  logoText?: string;
  logoSubtext?: string;
  ctaText?: string;
  ctaLink?: string;
  homeLink?: string;
  forceSolid?: boolean;
}

export default function Header({
  showNav = true,
  logoText,
  logoSubtext,
  ctaText = "Give to St Luke",
  ctaLink = "/st-luke/give",
  homeLink = "/",
  forceSolid = false,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Detect church context from URL
  const churchPrefix = location.pathname.includes('/st-luke') 
    ? '/st-luke' 
    : location.pathname.includes('/mwihoko')
    ? '/mwihoko'
    : location.pathname.includes('/emmanuel')
    ? '/emmanuel'
    : '';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header-navbar ${isScrolled || forceSolid ? 'scrolled' : ''}`}>
      <div className="flex h-16 items-center px-4 lg:px-6 xl:px-8 w-full relative z-10">
        <Link
          to={homeLink}
          className="flex items-center gap-3 flex-shrink-0 mr-auto relative z-10"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Ff2c3895639d34fd699cdd52f72dfb85a%2F5bc7acc520744af8988a410d72ee472c?format=webp&width=200"
            alt="PCEA logo"
            className="h-10 w-10 object-contain"
          />
          <div className="flex flex-col leading-none text-left">
            <span className="font-semibold tracking-tight font-sans header-logo text-white">
              {logoText || "PCEA"}
            </span>
            <span className="text-[8px] text-white/80 hidden sm:block font-sans leading-[8px]">
              {logoSubtext || "PCEA St Luke Church Tumaini Parish"}
              {!logoSubtext && (
                <>
                  <br />
                  &nbsp;(UTAWALA)
                </>
              )}
            </span>
          </div>
        </Link>

        {showNav && (
          <div className="hidden lg:flex flex-1 justify-end header-nav relative z-10">
            <nav className="flex items-center gap-1 header-nav-menu">
              <Link
                to={churchPrefix || "/"}
                className="relative inline-flex h-9 w-max items-center justify-center px-4 py-2 text-sm font-normal text-white transition-all z-10"
              >
                Home
              </Link>
              <Link
                to={`${churchPrefix}/about`}
                className="relative inline-flex h-9 w-max items-center justify-center px-4 py-2 text-sm font-normal text-white transition-all z-10"
              >
                About Us
              </Link>
              <Link
                to={`${churchPrefix}/ministries`}
                className="relative inline-flex h-9 w-max items-center justify-center px-4 py-2 text-sm font-normal text-white transition-all z-10"
              >
                Ministries
              </Link>
              <Link
                to={`${churchPrefix}/worship`}
                className="relative inline-flex h-9 w-max items-center justify-center px-4 py-2 text-sm font-normal text-white transition-all z-10"
              >
                Worship
              </Link>
              <Link
                to={`${churchPrefix}/events`}
                className="relative inline-flex h-9 w-max items-center justify-center px-4 py-2 text-sm font-normal text-white transition-all z-10"
              >
                Events
              </Link>
            </nav>
          </div>
        )}

        {showNav && (
          <div className="hidden lg:flex items-center gap-3 relative z-10">
            <Button asChild size="sm" className="font-normal bg-white text-foreground hover:bg-white/90">
              <Link to={ctaLink}>{ctaText}</Link>
            </Button>
          </div>
        )}

        {showNav && (
          <div className="lg:hidden ml-auto flex items-center gap-2 relative z-10">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu" className="h-9 w-9 text-white hover:bg-white/10">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:max-w-sm">
                <SheetHeader>
                  <SheetTitle className="text-left">Menu</SheetTitle>
                </SheetHeader>
                <div className="mt-6 space-y-1">
                  <Link to={churchPrefix || "/"} className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-accent/50 rounded-md">
                    Home
                  </Link>
                  <Link to={`${churchPrefix}/about`} className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-accent/50 rounded-md">
                    About Us
                  </Link>
                  <Link to={`${churchPrefix}/ministries`} className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-accent/50 rounded-md">
                    Ministries
                  </Link>
                  <Link to={`${churchPrefix}/worship`} className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-accent/50 rounded-md">
                    Worship
                  </Link>
                  <Link to={`${churchPrefix}/events`} className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-accent/50 rounded-md">
                    Events
                  </Link>
                  <div className="pt-4 mt-4 border-t flex flex-col gap-2">
                    <Button asChild className="w-full">
                      <Link to={ctaLink}>{ctaText}</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        )}
      </div>
    </header>
  );
}
