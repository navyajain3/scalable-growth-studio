import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { AnimatedHeading } from "@/components/ui/animated-heading";
import { useHeroParallax } from "@/hooks/useGSAPScrollAnimations";
import { ShimmerBadge } from "@/components/ui/shimmer-badge";
import heroGlobe from "@/assets/hero-globe.avif";

export function Hero() {
  useHeroParallax();

  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background overflow-hidden">
        {/* Subtle Aurora Wave */}
        <div className="absolute inset-0 aurora-bg opacity-40 dark:opacity-30" />
      </div>

      {/* Glowing Globe/Arc at Bottom - Like Reference */}
      <div className="absolute bottom-0 left-0 right-0 h-[60%] pointer-events-none">
        <img 
          src={heroGlobe} 
          alt="" 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[140%] max-w-[1800px] h-auto object-contain"
        />
        {/* Additional glow overlay */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] max-w-[1600px] h-[400px] bg-gradient-to-t from-primary/20 via-primary/10 to-transparent blur-3xl" />
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
