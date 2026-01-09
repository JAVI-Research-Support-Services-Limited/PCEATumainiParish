import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Menu, ChevronRight, Search } from "lucide-react";
import { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import "./Header.css";

const menu = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Ministries",
    href: "/ministries",
  },
  {
    label: "Worship",
    href: "/worship",
  },
  {
    label: "Events",
    href: "/events",
  },
  {
    label: "Resources",
    href: "/resources",
  },
];

interface HeaderProps {
  showNav?: boolean;
  logoText?: string;
  logoSubtext?: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function Header({
  showNav = true,
  logoText,
  logoSubtext,
  ctaText = "Give to St Luke",
  ctaLink = "/st-luke/give"
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect which section is currently in view
      const sections = document.querySelectorAll('section[id], div[id]');
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId || '');
        }
      });

      // If at the very top, set home as active
      if (window.scrollY < 100) {
        setActiveSection('home');
      }
    };

    handleScroll(); // Run once on mount
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Handle navigation click - scroll if on homepage, navigate if not
  const handleNavClick = (e: React.MouseEvent, href: string, label: string) => {
    // Map nav labels to section IDs
    const sectionMap: { [key: string]: string } = {
      'Home': 'home',
      'About Us': 'about',
      'Ministries': 'ministries',
      'Worship': 'worship',
      'Events': 'events',
      'Resources': 'resources'
    };

    const sectionId = sectionMap[label];

    // If we're on the homepage and clicking a section that exists on homepage
    if (location.pathname === '/' && sectionId && ['home', 'about', 'ministries'].includes(sectionId)) {
      e.preventDefault();
      scrollToSection(sectionId);
    }
    // If clicking "Home" from another page, navigate to homepage
    else if (href === '/' && location.pathname !== '/') {
      // Let the default navigation happen
      return;
    }
  };

  return (
    <header className={`header-navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="flex h-16 items-center px-4 lg:px-6 xl:px-8 w-full">
        <NavLink
          to="/"
          className="flex items-center gap-3 flex-shrink-0 mr-auto"
          aria-label="PCEA Home"
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
        </NavLink>

        {showNav && <div className="hidden lg:flex flex-1 justify-end header-nav">
          <nav className="flex items-center gap-1 header-nav-menu">
            {menu.map((m) => {
              // Map sections on homepage to their corresponding nav items
              const isCurrentSection =
                (m.href === '/' && (activeSection === 'home' || activeSection === 'hero' || !activeSection)) ||
                (m.label === 'About Us' && activeSection === 'about') ||
                (m.label === 'Ministries' && activeSection === 'ministries') ||
                (m.label === 'Worship' && activeSection === 'worship') ||
                (m.label === 'Events' && activeSection === 'events') ||
                (m.label === 'Resources' && activeSection === 'resources');

              return (
                <NavLink
                  key={m.label}
                  to={m.href}
                  onClick={(e) => handleNavClick(e, m.href, m.label)}
                  className={({ isActive }) =>
                    `relative inline-flex h-9 w-max items-center justify-center px-4 py-2 text-sm font-normal text-white transition-all focus:outline-none
                    after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-white after:transition-all after:duration-300
                    ${isActive || isCurrentSection ? 'after:opacity-100' : 'after:opacity-0 hover:after:opacity-100'}`
                  }
                >
                  {m.label}
                </NavLink>
              );
            })}
          </nav>
        </div>}

        {showNav && <div className="hidden lg:flex items-center gap-3">
          <Button asChild size="sm" className="font-normal bg-white text-foreground hover:bg-white/90">
            <NavLink to={ctaLink}>{ctaText}</NavLink>
          </Button>
        </div>}

        {showNav && <div className="lg:hidden ml-auto flex items-center gap-2">
          {/* mobile slide-over menu */}
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
                {menu.map((m) => (
                  <Link
                    key={m.label}
                    to={m.href}
                    onClick={(e) => handleNavClick(e, m.href, m.label)}
                    className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-accent/50 rounded-md transition-colors"
                  >
                    {m.label}
                  </Link>
                ))}
                <div className="pt-4 mt-4 border-t flex flex-col gap-2">
                  <Button asChild className="w-full">
                    <Link to={ctaLink}>{ctaText}</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>}
      </div>
    </header>
  );
}
