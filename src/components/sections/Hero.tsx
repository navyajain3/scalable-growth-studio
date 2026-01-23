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

        {/* Animated Scroll Indicator */}
        <div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in"
          style={{ animationDelay: "1s" }}
        >
          <a 
            href="#who-we-help" 
            className="flex flex-col items-center gap-2 text-muted-foreground/60 hover:text-muted-foreground transition-colors duration-300 group"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-5 h-8 rounded-full border border-muted-foreground/30 flex items-start justify-center p-1.5 group-hover:border-muted-foreground/50 transition-colors">
              <div className="w-1 h-1.5 rounded-full bg-muted-foreground/60 animate-[bounce_1.5s_ease-in-out_infinite] group-hover:bg-muted-foreground transition-colors" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
