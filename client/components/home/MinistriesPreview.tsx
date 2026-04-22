import { Link, useLocation } from "react-router-dom";
import {
  ArrowRight,
  Newspaper,
  Calendar,
  MessageSquare,
  Video,
  HandCoins,
  Users,
} from "lucide-react";

export function MinistriesPreview() {
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
    <section id="ministries" className="w-full bg-white py-24 lg:py-32">
      <div className="max-w-7xl px-8 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
          {/* Main content area */}
          <div className="lg:col-span-3">
            <span className="font-sans text-sm font-bold text-[#003366] uppercase tracking-[0.3em] mb-4 block">
              Our Ministries
            </span>

            <h2 className="text-[#003366] font-display text-5xl md:text-7xl font-bold leading-[1.1] mb-12 text-left">
              There's a place for you in what God is doing in our house.
            </h2>

            <Link
              to={`${churchPrefix}/ministries`}
              className="font-sans inline-flex items-center justify-center bg-[#003366] text-white hover:bg-[#002244] active:bg-[#001122] h-12 px-8 text-base transition-colors rounded-sm shadow-md border-b-2 border-[#c05621]"
            >
              Explore Ministries
            </Link>
          </div>

          {/* Quick Links Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-white border border-neutral-100 rounded-md p-8 shadow-xl">
              <h3 className="text-[#003366] font-display text-xl font-bold mb-6 border-b-2 border-[#c05621] pb-2 uppercase tracking-wider">
                Quick Links
              </h3>
              <ul className="space-y-4">
                {[
                  {
                    title: "Church News",
                    href: `${churchPrefix}/news`,
                    icon: Newspaper,
                  },
                  {
                    title: "Upcoming Events",
                    href: `${churchPrefix}/events`,
                    icon: Calendar,
                  },
                  {
                    title: "Prayer Request",
                    href: `${churchPrefix}/prayer`,
                    icon: MessageSquare,
                  },
                  {
                    title: "Sermon Archive",
                    href: `${churchPrefix}/sermons`,
                    icon: Video,
                  },
                  {
                    title: "Online Giving",
                    href: `${churchPrefix}/give`,
                    icon: HandCoins,
                  },
                  {
                    title: "Get Involved",
                    href: `${churchPrefix}/get-involved`,
                    icon: Users,
                  },
                ].map((link, idx) => (
                  <li key={idx}>
                    <Link
                      to={link.href}
                      className="flex items-center gap-3 text-neutral-600 hover:text-[#c05621] font-sans font-medium transition-colors group"
                    >
                      <link.icon className="w-5 h-5 text-[#003366] group-hover:scale-110 transition-transform" />
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-8 border-t border-neutral-100">
                <p className="text-xs text-neutral-500 italic mb-4 leading-relaxed">
                  "Commit your work to the LORD, and your plans will be
                  established."
                </p>
                <p className="text-[10px] font-bold text-[#003366] uppercase">
                  Proverbs 16:3
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default MinistriesPreview;
