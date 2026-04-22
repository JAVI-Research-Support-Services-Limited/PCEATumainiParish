import { Link, useLocation } from "react-router-dom";

export function NextStepsPreview() {
  const location = useLocation();

  // Detect church context from URL
  const churchPrefix = location.pathname.includes("/st-luke")
    ? "/st-luke"
    : location.pathname.includes("/mwihoko")
      ? "/mwihoko"
      : location.pathname.includes("/emmanuel")
        ? "/emmanuel"
        : "";

  return (
    <section className="relative w-full py-16 lg:py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/9ac61cc766589fbd3bf4f62a27201aead57a51ce?width=2990"
          alt="Next Steps background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl px-8 md:px-12 lg:px-20 text-left">
        <span className="font-sans text-xs font-bold uppercase tracking-[0.4em] mb-6 block opacity-80 text-white">
          Next Steps
        </span>
        <h2 className="text-white font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-none mb-10">
          Join to the <br /> Great Commission <br />
          <span className="font-normal italic font-display opacity-90 text-white">
            of Christ
          </span>
        </h2>

        <p className="text-white font-sans text-base md:text-lg font-light text-white/90 leading-relaxed mb-6 max-w-4xl">
          At PCEA St. Luke Church – Tumaini Parish, we are a Christ-centered
          family rooted in God's love and guided by His Word. We believe that
          faith was never meant to be lived in isolation.
        </p>

        <p className="text-white/80 font-sans text-sm md:text-lg font-light leading-relaxed mb-10 max-w-4xl italic border-l-2 border-white/20 pl-8">
          As a parish, we carry forward the Presbyterian heritage of faith and
          service while embracing the needs of today's community. From children
          to elders, from families to individuals, we walk together in Christ.
        </p>

        <Link
          to={`${churchPrefix}/worship`}
          className="font-sans bg-white text-[#003366] hover:bg-neutral-300 active:bg-neutral-400 h-10 px-6 text-sm transition-colors rounded-sm shadow-xl inline-flex items-center justify-center"
        >
          Get Involved Now
        </Link>
      </div>
    </section>
  );
}

export default NextStepsPreview;
