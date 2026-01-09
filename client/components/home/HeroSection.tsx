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
      <div className="relative z-20 h-full flex flex-col justify-end pb-12 md:pb-20 lg:pb-32 px-8 md:px-12 lg:px-20 max-w-5xl space-y-6">
        {/* Main Title */}
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] max-w-4xl tracking-tight">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-lg md:text-xl lg:text-2xl font-medium text-white/90 max-w-2xl leading-relaxed">
          {subtitle}
        </p>

        {/* Verse Reference */}
        <div className="space-y-1 pt-2">
          <p className="font-sans text-base md:text-lg font-light text-white/80 italic max-w-2xl leading-relaxed">
            "{verse}"
          </p>
          <p className="font-sans text-xs md:text-sm font-bold tracking-[0.3em] text-white/60 uppercase pt-1">
            {verseRef}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 pt-6 items-center">
          <Button
            onClick={scrollToLocation}
            className="font-sans bg-white text-black hover:bg-neutral-300 active:bg-neutral-400 h-14 px-8 text-base transition-colors rounded-sm cursor-pointer"
          >
            {ctaText}
          </Button>

          <Button asChild className="font-sans bg-transparent text-white hover:bg-white/10 active:bg-white/20 h-14 px-8 text-base transition-colors rounded-sm border border-white/30">
            <Link to="/worship#live">Join Us Online</Link>
          </Button>

          {showDropdown && (
            <div className="relative">
              <Button
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
                className="font-sans bg-primary text-white hover:bg-primary/90 active:bg-primary/80 h-14 px-8 text-base transition-colors rounded-sm flex items-center gap-2"
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
        </div>
      </div>
    </section>
  );
}
