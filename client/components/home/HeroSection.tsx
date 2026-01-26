import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  verse: string;
  verseRef: string;
  backgroundImage?: string;
  videoSrc?: string;
  showDropdown?: boolean;
  ctaText?: string;
  ctaLink?: string;
}

export function HeroSection({
  title,
  subtitle,
  verse,
  verseRef,
  backgroundImage,
  videoSrc,
  showDropdown = true,
  ctaText = "Join Us In Person",
  ctaLink = "#location",
}: HeroSectionProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const scrollToLocation = () => {
    if (ctaLink.startsWith("#")) {
      const element = document.getElementById(ctaLink.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section id="home" className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Background Video */}
      {videoSrc && (
        <div className="absolute inset-0 w-full h-full bg-black">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "top" }}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      )}

      {/* Background Image */}
      {!videoSrc && backgroundImage && (
        <img
          src={backgroundImage}
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 z-10" />

      {/* Content */}
      <div className="absolute z-20 bottom-12 sm:bottom-16 md:bottom-20 lg:bottom-24 left-4 sm:left-8 md:left-12 lg:left-16 max-w-full space-y-3 pointer-events-auto">
        {/* Main Title */}
        <h1 className="text-3xl md:text-4xl font-display font-medium leading-[1.1] tracking-tight text-white max-w-[28rem] break-words">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-sm md:text-base font-medium text-white/90 max-w-xl leading-relaxed break-words">
          {subtitle}
        </p>

        {/* Verse Reference */}
        <div className="space-y-1 pt-2">
          <p className="font-sans text-sm font-light text-white/80 italic max-w-xl leading-relaxed break-words">
            "{verse}"
          </p>
          <p className="font-sans text-xs font-bold tracking-[0.3em] text-white/60 uppercase pt-1">
            {verseRef}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 pt-3 items-center max-w-lg">
          {showDropdown && (
            <div className="relative">
              <Button
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
                className="font-sans bg-black text-white hover:bg-white hover:text-black active:bg-gray-100 active:text-gray-900 h-12 px-6 text-base font-semibold transition-all duration-200 rounded-sm flex items-center gap-2 shadow-lg hover:shadow-xl cursor-pointer border border-transparent hover:border-black/50"
              >
                <span>Explore Your Parish</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </Button>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div
                  className="absolute bottom-full left-0 mb-2 w-full bg-black/90 backdrop-blur-md rounded shadow-xl overflow-hidden z-50 border border-white/10"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <Link
                    to="/st-luke"
                    className="block px-4 py-3 text-white text-sm hover:bg-white/10 transition-colors border-b border-white/5"
                  >
                    St Luke Church
                  </Link>
                  <Link
                    to="/mwihoko"
                    className="block px-4 py-3 text-white text-sm hover:bg-white/10 transition-colors border-b border-white/5"
                  >
                    Mwihoko Church
                  </Link>
                  <Link
                    to="/emmanuel"
                    className="block px-4 py-3 text-white text-sm hover:bg-white/10 transition-colors"
                  >
                    Emmanuel Church
                  </Link>
                </div>
              )}
            </div>
          )}

          <Button asChild className="font-sans bg-white text-black hover:bg-neutral-300 active:bg-neutral-400 h-12 px-8 text-base transition-colors rounded-sm cursor-pointer">
            <Link to="/give">Give Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}