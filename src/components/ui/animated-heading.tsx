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
  staggerDelay = 40,
}: AnimatedHeadingProps) {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef<HTMLHeadingElement>(null);

  React.useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const words = children.split(" ");

  return (
    <Component ref={ref} className={cn(className)}>
      {words.map((word, index) => (
        <span
          key={index}
          className={cn(
            "inline-block",
            isVisible
              ? "animate-[word-reveal_0.3s_ease-out_forwards]"
              : "opacity-0"
          )}
          style={{
            animationDelay: isVisible ? `${index * staggerDelay}ms` : "0ms",
          }}
        >
          {word}
          {index < words.length - 1 && "\u00A0"}
        </span>
      ))}
    </Component>
  );
}
