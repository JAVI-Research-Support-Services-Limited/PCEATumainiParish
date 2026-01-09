import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface HeaderProps {
  showNav?: boolean;
}

export function Header({ showNav = true }: HeaderProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <div className="flex items-start justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-start gap-3">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/5753b669a190efa8823f03f4d378b8b0c42bbeda?width=207"
              alt="PCEA Logo"
              className="w-24 h-16 object-contain"
            />
            <div className="flex flex-col pt-2">
              <span className="text-white text-sm font-normal leading-tight">
                PCEA St Luke Church Tumaini Parish
              </span>
              <span className="text-white text-sm font-normal leading-tight">
                (UTAWALA)
              </span>
            </div>
          </Link>

          {/* Navigation */}
          {showNav && <nav className="hidden lg:flex items-center gap-8 pt-4">
            <Link
              to="/"
              className="text-white text-xs font-medium hover:opacity-80 transition-opacity"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white text-xs font-medium hover:opacity-80 transition-opacity"
            >
              About Us
            </Link>
            <Link
              to="/ministries"
              className="text-white text-xs font-medium hover:opacity-80 transition-opacity"
            >
              Ministries
            </Link>
            <Link
              to="/worship"
              className="text-white text-xs font-medium hover:opacity-80 transition-opacity"
            >
              Worship
            </Link>
            <Link
              to="/events"
              className="text-white text-xs font-medium hover:opacity-80 transition-opacity"
            >
              Events
            </Link>
            <Link
              to="/next-steps"
              className="text-white text-xs font-medium hover:opacity-80 transition-opacity"
            >
              Get Involved
            </Link>
            <Link
              to="/resources"
              className="text-white text-xs font-medium hover:opacity-80 transition-opacity"
            >
              Resources
            </Link>
            <Link
              to="/outreach"
              className="text-white text-xs font-medium hover:opacity-80 transition-opacity"
            >
              Community & Outreach
            </Link>
            <a
              href="#give"
              className="text-white text-xs font-medium hover:opacity-80 transition-opacity"
            >
              Give / Support
            </a>
            <Link
              to="/contact"
              className="text-white text-xs font-medium hover:opacity-80 transition-opacity"
            >
              Contact Us
            </Link>
          </nav>}
        </div>
      </div>
    </header>
  );
}
