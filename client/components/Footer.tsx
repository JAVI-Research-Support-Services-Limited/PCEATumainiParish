import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="w-full border-t border-slate-200/40 bg-white/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-32 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Church Info */}
          <div>
            <h3 className="text-base font-semibold text-black mb-3">
              Presbyterian Church of East Africa
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              A welcoming community centered on faith, love, and service.
            </p>
          </div>

          {/* Worship Links */}
          <div>
            <h4 className="text-xs font-semibold text-black mb-3">Worship</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/events"
                  className="text-xs text-slate-600 hover:text-black"
                >
                  Service Times
                </Link>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-600 hover:text-black"
                >
                  Watch Online
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-600 hover:text-black"
                >
                  Sermon Archive
                </a>
              </li>
            </ul>
          </div>

          {/* Get Involved Links */}
          <div>
            <h4 className="text-xs font-semibold text-black mb-3">
              Get Involved
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/next-steps"
                  className="text-xs text-slate-600 hover:text-black"
                >
                  Volunteer
                </Link>
              </li>
              <li>
                <Link
                  to="/ministries"
                  className="text-xs text-slate-600 hover:text-black"
                >
                  Fellowship Groups
                </Link>
              </li>
              <li>
                <a
                  href="#give"
                  className="text-xs text-slate-600 hover:text-black"
                >
                  Give / Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 text-center">
          <p className="text-xs text-slate-600">
            © 2025 PCEA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
