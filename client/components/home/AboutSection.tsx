import { Link, useLocation } from "react-router-dom";

export function AboutSection() {
  const location = useLocation();
  
  // Detect church context from URL
  const churchPrefix = location.pathname.includes('/st-luke') 
    ? '/st-luke' 
    : location.pathname.includes('/mwihoko')
    ? '/mwihoko'
    : location.pathname.includes('/emmanuel')
    ? '/emmanuel'
    : '';

  return (
    <section id="about" className="w-full bg-black py-16 lg:py-24">
      <div className="max-w-7xl px-8 md:px-12 lg:px-20">
        <h2 className="text-white font-display text-4xl lg:text-6xl font-bold mb-10 leading-tight">
          In our church, we love and trust Jesus
        </h2>

        <p className="text-white text-lg md:text-2xl font-light text-white/90 leading-relaxed mb-10 max-w-4xl">
          At PCEA St. Luke Church – Tumaini Parish, we are a Christ-centered
          family rooted in God's love and guided by His Word. Here, you will
          always find a place to worship, grow, and serve together in Christ.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            to={`${churchPrefix}/about`}
            className="font-sans bg-white text-black hover:bg-neutral-300 active:bg-neutral-400 h-12 px-8 text-base transition-colors rounded-sm flex items-center justify-center"
          >
            Learn More About Us
          </Link>
          <Link
            to={`${churchPrefix}/events`}
            className="font-sans bg-transparent text-white hover:bg-white/10 active:bg-white/20 h-12 px-8 text-base transition-colors rounded-sm border border-white/30 flex items-center justify-center"
          >
            Event Calendar
          </Link>
        </div>
      </div>
    </section>
  );
}
