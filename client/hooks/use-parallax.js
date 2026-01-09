import { useEffect, useRef, useState } from "react";

/**
 * @typedef {Object} UseParallaxOptions
 * @property {number} [speed=0.5] - Speed multiplier for parallax effect
 * @property {number} [offset=0] - Initial offset value
 */

/**
 * Custom hook for parallax scroll effect
 * @param {UseParallaxOptions} options
 * @returns {{elementRef: React.RefObject, scrollProgress: number}}
 */
export function useParallax({ speed = 0.5, offset = 0 } = {}) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const scrolled = window.scrollY;
      const parallaxOffset = scrolled * speed + offset;

      setScrollProgress(parallaxOffset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed, offset]);

  return { elementRef, scrollProgress };
}
