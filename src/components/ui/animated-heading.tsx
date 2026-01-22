import * as React from "react";
import { cn } from "@/lib/utils";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface AnimatedHeadingProps {
  as?: HeadingLevel;
  children: string;
  className?: string;
  staggerDelay?: number; // ms between each word
}

export function AnimatedHeading({
  as: Component = "h2",
  children,
  className,
  staggerDelay = 60,
}: AnimatedHeadingProps) {
  const [visibleCount, setVisibleCount] = React.useState(0);
  const [hasStarted, setHasStarted] = React.useState(false);
  const ref = React.useRef<HTMLHeadingElement>(null);

  const words = children.split(" ");

  React.useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setVisibleCount(words.length);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted, words.length]);

  // Typewriter effect - reveal words one by one
  React.useEffect(() => {
    if (!hasStarted) return;

    if (visibleCount < words.length) {
      const timeout = setTimeout(() => {
        setVisibleCount((prev) => prev + 1);
      }, staggerDelay);

      return () => clearTimeout(timeout);
    }
  }, [hasStarted, visibleCount, words.length, staggerDelay]);

  return (
    <Component ref={ref} className={cn(className)}>
      {words.map((word, index) => (
        <span
          key={index}
          className={cn(
            "inline-block transition-colors duration-200",
            index < visibleCount 
              ? "text-foreground" 
              : "text-muted-foreground/20"
          )}
        >
          {word}
          {index < words.length - 1 && "\u00A0"}
        </span>
      ))}
    </Component>
  );
}
