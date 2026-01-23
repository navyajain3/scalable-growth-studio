import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { AnimatedHeading } from "@/components/ui/animated-heading";
import { useHeroParallax } from "@/hooks/useGSAPScrollAnimations";
import { ShimmerBadge } from "@/components/ui/shimmer-badge";

export function Hero() {
  useHeroParallax();

  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background with Floating Orbs */}
      <div className="absolute inset-0 bg-background overflow-hidden">
        {/* Subtle Purple Aurora Wave */}
        <div className="absolute inset-0 aurora-bg opacity-40 dark:opacity-30" />

        {/* Floating Orb 1 - Large center orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] animate-float-slow">
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#501ed4]/15 via-[#6a3ad8]/10 to-[#7e56e2]/15 dark:from-[#501ed4]/10 dark:via-[#6a3ad8]/6 dark:to-[#7e56e2]/10 blur-3xl" />
        </div>

        {/* Floating Orb 2 - Top right */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] animate-float-medium">
          <div className="absolute inset-0 rounded-full bg-gradient-to-bl from-[#7e56e2]/12 to-transparent dark:from-[#7e56e2]/8 blur-3xl" />
        </div>

        {/* Floating Orb 3 - Bottom left */}
        <div className="absolute -bottom-32 -left-32 w-[450px] h-[450px] animate-float-slower">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#501ed4]/12 to-transparent dark:from-[#501ed4]/8 blur-3xl" />
        </div>

        {/* Floating Orb 4 - Bottom right accent */}
        <div
          className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] animate-float-medium"
          style={{ animationDelay: "-5s" }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tl from-[#6a3ad8]/10 to-transparent dark:from-[#6a3ad8]/6 blur-3xl" />
        </div>
      </div>

      <div className="container-wide relative z-10 text-center pt-20">
        <div className="hero-content max-w-4xl mx-auto space-y-8">
          {/* Year Pill Badge */}
          <div className="flex justify-center opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-card/80 border border-border/50 backdrop-blur-sm">
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#501ed4] to-[#7e56e2] text-white text-sm font-medium">
                2026
              </span>
              <span className="text-foreground/90 text-sm font-medium tracking-wide">
                Digital Growth Studio
              </span>
            </div>
          </div>

          {/* Headline */}
          <AnimatedHeading as="h1" className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-tight font-heading mb-6">
            A Complete Growth System for Scaling Brands
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
              <a href="#contact">Get in Touch</a>
            </Button>
            <ShimmerButton href="#services">View Services</ShimmerButton>
          </div>
        </div>
      </div>
    </section>
  );
}
