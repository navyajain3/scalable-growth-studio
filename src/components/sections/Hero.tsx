import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { AnimatedHeading } from "@/components/ui/animated-heading";
import { ArrowRight } from "lucide-react";
import { useHeroParallax } from "@/hooks/useGSAPScrollAnimations";

export function Hero() {
  useHeroParallax();

  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background with Floating Orbs */}
      <div className="absolute inset-0 bg-background overflow-hidden">
        {/* Subtle Purple Aurora Wave */}
        <div className="absolute inset-0 aurora-bg opacity-40 dark:opacity-30" />

        {/* Animated Morphing Blob */}
        <div className="absolute top-1/2 right-[5%] lg:right-[10%] -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] opacity-60 dark:opacity-40">
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full animate-blob-morph"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(280, 80%, 75%)" />
                <stop offset="50%" stopColor="hsl(260, 70%, 85%)" />
                <stop offset="100%" stopColor="hsl(190, 70%, 80%)" />
              </linearGradient>
              <filter id="blobGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="8" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path
              fill="url(#blobGradient)"
              filter="url(#blobGlow)"
              className="animate-blob-path"
            >
              <animate
                attributeName="d"
                dur="12s"
                repeatCount="indefinite"
                values="
                  M45.3,-58.2C57.9,-49.5,66.5,-34.3,71.2,-17.6C75.9,-0.9,76.7,17.3,69.8,32.1C62.9,46.9,48.3,58.3,32.2,65.1C16.1,71.9,-1.5,74.1,-18.9,70.6C-36.3,67.1,-53.5,57.9,-64.1,44.1C-74.7,30.3,-78.7,11.9,-76.3,-5.4C-73.9,-22.7,-65.1,-38.9,-52.1,-47.6C-39.1,-56.3,-21.9,-57.5,-3.8,-52.9C14.3,-48.3,32.7,-66.9,45.3,-58.2Z;
                  M39.9,-51.6C52.1,-43.6,62.8,-31.8,68.1,-17.4C73.4,-3,73.3,14,66.8,28.2C60.3,42.4,47.4,53.8,32.8,60.5C18.2,67.2,1.9,69.2,-14.6,66.8C-31.1,64.4,-47.8,57.6,-58.9,45.3C-70,33,-75.5,15.2,-74.1,-1.9C-72.7,-19,-64.4,-35.4,-52.3,-43.5C-40.2,-51.6,-24.3,-51.4,-10.1,-52.8C4.1,-54.2,27.7,-59.6,39.9,-51.6Z;
                  M42.7,-54.8C54.3,-47.3,62.1,-33.4,66.4,-18.2C70.7,-3,71.5,13.5,65.8,27.8C60.1,42.1,47.9,54.2,33.5,61.5C19.1,68.8,2.5,71.3,-14.2,68.8C-30.9,66.3,-47.7,58.8,-59.3,46.1C-70.9,33.4,-77.3,15.5,-76.1,-1.6C-74.9,-18.7,-66.1,-35,-53.5,-42.7C-40.9,-50.4,-24.5,-49.5,-9.5,-48.5C5.5,-47.5,31.1,-62.3,42.7,-54.8Z;
                  M45.3,-58.2C57.9,-49.5,66.5,-34.3,71.2,-17.6C75.9,-0.9,76.7,17.3,69.8,32.1C62.9,46.9,48.3,58.3,32.2,65.1C16.1,71.9,-1.5,74.1,-18.9,70.6C-36.3,67.1,-53.5,57.9,-64.1,44.1C-74.7,30.3,-78.7,11.9,-76.3,-5.4C-73.9,-22.7,-65.1,-38.9,-52.1,-47.6C-39.1,-56.3,-21.9,-57.5,-3.8,-52.9C14.3,-48.3,32.7,-66.9,45.3,-58.2Z
                "
              />
            </path>
          </svg>
        </div>

        {/* Floating Orb 1 - Large center orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] animate-float-slow">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500/15 via-[hsl(277_100%_66%/0.10)] to-purple-500/15 dark:from-violet-500/5 dark:via-[hsl(277_100%_66%/0.03)] dark:to-purple-500/5 blur-3xl" />
        </div>

        {/* Floating Orb 2 - Top right (magenta-leaning) */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] animate-float-medium">
          <div className="absolute inset-0 rounded-full bg-gradient-to-bl from-purple-500/12 to-transparent dark:from-purple-500/4 blur-3xl" />
        </div>

        {/* Floating Orb 3 - Bottom left (violet-leaning) */}
        <div className="absolute -bottom-32 -left-32 w-[450px] h-[450px] animate-float-slower">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-violet-500/12 to-transparent dark:from-violet-500/4 blur-3xl" />
        </div>

        {/* Floating Orb 4 - Bottom right accent */}
        <div
          className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] animate-float-medium"
          style={{ animationDelay: "-5s" }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tl from-[hsl(277_100%_66%/0.10)] to-transparent dark:from-[hsl(277_100%_66%/0.03)] blur-3xl" />
        </div>
      </div>

      <div className="container-wide relative z-10 text-center pt-20">
        <div className="hero-content max-w-4xl mx-auto space-y-8">
          {/* Headline */}
          <AnimatedHeading as="h1" className="heading-xl mb-6">
            A Complete Digital Growth System for Brands Ready to Scale
          </AnimatedHeading>

          {/* Subtext */}
          <p className="body-lg max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Using our extensive knowledge of design, technology, and strategy, we build brands that grow with clarity,
            consistency, and long-term impact.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <Button variant="hero" size="lg" asChild>
              <a href="#contact">
                Book a Call
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <ShimmerButton href="#services">View Services</ShimmerButton>
          </div>
        </div>
      </div>
    </section>
  );
}
