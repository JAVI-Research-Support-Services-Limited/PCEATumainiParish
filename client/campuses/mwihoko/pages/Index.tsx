import { Link } from "react-router-dom";
import { useParallax } from "@/hooks/use-parallax.js";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function Index() {
  const { elementRef: heroRef } = useParallax({ speed: 0.5 });

  return (
    <div>
      {/* Hero with video background + overlay */}
      <section
        ref={heroRef}
        className="relative w-full h-screen flex items-end justify-start text-white pb-12 md:pb-20 lg:pb-28 z-10 overflow-hidden"
        aria-label="Commit your work - Proverbs 16:3"
      >
        {/* Image background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Ff2c3895639d34fd699cdd52f72dfb85a%2F954d42974e774ef38abe8b66a0ae97bf?format=webp&width=1600"
            alt="Worship background"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </div>

        {/* Dark overlay for legibility */}
        <div
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0)_100%,rgba(0,0,0,0.5)_33%,rgba(0,0,0,0.8)_0%)] z-10"
          aria-hidden
        />

        {/* Content (left-aligned to page) */}
        <div className="relative z-20 w-full px-4 sm:px-6">
          <div className="ml-4 md:ml-8 lg:ml-12 max-w-3xl text-left">
            <p className="font-sans text-sm md:text-lg mb-4 text-white font-medium">
              Commit your work to the LORD, and your plans will be established
            </p>

            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl tracking-tight leading-tight text-white">
              <div className="mr-auto">Commit your work to the LORD,</div>
              <div className="block font-normal">
                and your plans will be established
              </div>
            </h1>

            <p className="mt-4 font-sans text-sm font-light text-white opacity-90">
              Proverbs 16:3
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="font-sans bg-white text-[#003366] hover:bg-neutral-300 active:bg-neutral-400 h-12 px-8 text-base transition-colors rounded-sm">
                    Explore Your Parish <ChevronDown className="ml-2 h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="min-w-[220px] bg-black text-white border-white/20 backdrop-blur-md">
                  <DropdownMenuItem
                    asChild
                    className="focus:bg-white/20 focus:text-white cursor-pointer py-3"
                  >
                    <Link to="/st-luke">St Luke Church</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    asChild
                    className="focus:bg-white/20 focus:text-white cursor-pointer py-3"
                  >
                    <Link to="/mwihoko">Mwihoko Church</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    asChild
                    className="focus:bg-white/20 focus:text-white cursor-pointer py-3"
                  >
                    <Link to="/emmanuel">Emmanuel Church</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button
                asChild
                className="font-sans bg-[#003366] text-white hover:bg-[#002244] active:bg-[#001122] h-12 px-8 text-base transition-colors rounded-sm shadow-md"
              >
                <Link to="/give">Give</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
