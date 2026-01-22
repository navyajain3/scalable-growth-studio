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
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/15 via-violet-400/10 to-purple-600/15 dark:from-purple-500/5 dark:via-violet-400/3 dark:to-purple-600/5 blur-3xl" />
        </div>
        
        {/* Floating Orb 2 - Top right */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] animate-float-medium">
          <div className="absolute inset-0 rounded-full bg-gradient-to-bl from-violet-500/12 to-transparent dark:from-violet-500/4 blur-3xl" />
        </div>
        
        {/* Floating Orb 3 - Bottom left */}
        <div className="absolute -bottom-32 -left-32 w-[450px] h-[450px] animate-float-slower">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600/12 to-transparent dark:from-purple-600/4 blur-3xl" />
        </div>
        
        {/* Floating Orb 4 - Bottom right accent */}
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] animate-float-medium" style={{ animationDelay: "-5s" }}>
          <div className="absolute inset-0 rounded-full bg-gradient-to-tl from-violet-400/10 to-transparent dark:from-violet-400/3 blur-3xl" />
        </div>
      </div>

      <div className="container-wide relative z-10 text-center pt-20">
        <div className="hero-content max-w-4xl mx-auto space-y-8">
          {/* Headline */}
          <AnimatedHeading as="h1" className="heading-xl mb-6">
            A Complete Digital Growth System for Brands Ready to Scale.
          </AnimatedHeading>

          {/* Subtext */}
          <p className="body-lg max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Using our extensive knowledge of design, technology, and strategy, we build brands that grow with clarity, consistency, and long-term impact.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <Button variant="hero" size="lg" asChild>
              <a href="#contact">
                Book a Call
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <ShimmerButton href="#services">
              View Services
            </ShimmerButton>
          </div>
        </div>
      </div>
    </section>
  );
}
