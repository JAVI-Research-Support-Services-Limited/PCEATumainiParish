import { Link, useLocation } from "react-router-dom";

export function MinistriesPreview() {
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
    <section id="ministries" className="w-full bg-white py-24 lg:py-32">
      <div className="max-w-7xl px-8 md:px-12 lg:px-20">
        <span className="font-sans text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4 block">
          Our Ministries
        </span>

        <h2
          className="text-black font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-12 max-w-5xl text-left"
        >
          There's a place for you in what God is doing in our house.
        </h2>

        <Link
          to={`${churchPrefix}/ministries`}
          className="font-sans inline-flex items-center justify-center bg-black text-white hover:bg-neutral-600 active:bg-neutral-800 h-12 px-8 text-base transition-colors rounded-sm"
        >
          Explore Ministries
        </Link>
      </div>
    </section>
  );
}