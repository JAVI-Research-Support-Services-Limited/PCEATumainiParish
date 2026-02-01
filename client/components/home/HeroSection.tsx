import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  verse?: string;
  verseRef?: string;
  videoSrc?: string;
  showDropdown?: boolean;
}

export default function HeroSection({
  title = "Welcome to Our Parish Community",
  subtitle = "Commit your work to the LORD, and your plans will be established.",
  verse = "For where two or three gather in my name, there am I with them.",
  verseRef = "Matthew 18:20",
  videoSrc,
  showDropdown = true,
}: HeroSectionProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Detect church context from URL
  const churchPrefix = location.pathname.includes('/st-luke') 
    ? '/st-luke' 
    : location.pathname.includes('/mwihoko')
    ? '/mwihoko'
    : location.pathname.includes('/emmanuel')
    ? '/emmanuel'
    : '';

  const handleParishClick = (parish: string) => {
    setIsDropdownOpen(false);
    navigate(`/${parish}`);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-visible">
        <div className="absolute inset-0">
          {videoSrc ? (
            <video
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1920&q=80"
              alt="Prayer background"
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
        </div>

        <div className="relative z-40 h-full flex flex-col">
          <div className="flex-1 flex items-center">
            <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
              <div className="max-w-2xl">
                <p className="text-white text-xs md:text-xs mb-3 tracking-wide">
                  {subtitle}
                </p>
                <h1 className="text-white text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 font-serif">
                  {title}
                </h1>
                <p className="text-white text-sm md:text-base mb-4">
                  Join us in worship, fellowship, and service as we grow together in faith
                </p>
                <p className="text-white text-xs md:text-sm mb-6">
                  {verseRef}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  {/* Show dropdown ONLY on landing page (showDropdown = true) */}
                  {showDropdown ? (
                    <div className="relative z-20">
                      <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="flex items-center gap-2 px-6 py-3.5 bg-black border border-white rounded text-white text-sm hover:bg-white hover:text-black transition-colors"
                      >
                        Explore Your Parish
                        <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 0L6 6L12 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>

                      {isDropdownOpen && (
                        <div className="absolute top-full mt-2 w-full flex flex-col bg-black rounded overflow-hidden shadow-lg z-30">
                          <button 
                            onClick={() => handleParishClick('st-luke')}
                            className="px-6 py-3.5 text-white text-sm text-center hover:bg-white/10 transition-colors"
                          >
                            St Luke Church
                          </button>
                          <button 
                            onClick={() => handleParishClick('mwihoko')}
                            className="px-6 py-3.5 text-white text-sm text-center hover:bg-white/10 transition-colors"
                          >
                            Mwihoko Church
                          </button>
                          <button 
                            onClick={() => handleParishClick('emmanuel')}
                            className="px-6 py-3.5 text-white text-sm text-center hover:bg-white/10 transition-colors"
                          >
                            Emmanuel Church
                          </button>
                        </div>
                      )}
                    </div>
                  ) : (
                    /* Show Join buttons on church-specific pages (showDropdown = false) */
                    <>
                      <button 
                        onClick={() => scrollToSection('location')}
                        className="px-6 py-3.5 bg-black border border-white rounded text-white text-sm hover:bg-white hover:text-black transition-colors"
                      >
                        Join Us In Person
                      </button>
                      <button 
                        onClick={() => scrollToSection('video')}
                        className="px-6 py-3.5 bg-transparent border border-white rounded text-white text-sm hover:bg-white hover:text-black transition-colors"
                      >
                        Join Us Online
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}