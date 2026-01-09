import { useEffect, useState } from "react";

interface WritingTextProps {
  text: string;
  className?: string;
  spacing?: number;
  speed?: number;
}

export function WritingText({
  text,
  className = "",
  spacing = 0,
  speed = 50,
}: WritingTextProps) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length) {
        const char = text.charAt(index);
        const spaceBefore = " ".repeat(spacing);
        setDisplayedText((prev) => {
          // Add spacing before each character
          return prev + char + spaceBefore;
        });
        index++;
      } else {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, spacing, speed]);

  return <span className={className}>{displayedText}</span>;
}
