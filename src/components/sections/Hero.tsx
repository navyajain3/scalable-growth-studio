import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { AnimatedHeading } from "@/components/ui/animated-heading";
import { ArrowRight } from "lucide-react";
import { useHeroParallax } from "@/hooks/useGSAPScrollAnimations";

export function Hero() {
  useHeroParallax();

  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Dot Grid and Purple Gradients */}
      <div className="absolute inset-0 bg-background">
        {/* Dot Grid Pattern */}
        <div className="absolute inset-0 dot-grid" />
        
        {/* Main purple gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(280_50%_70%/0.15)] via-transparent to-[hsl(260_45%_65%/0.1)] dark:from-[hsl(280_50%_50%/0.2)] dark:to-[hsl(260_45%_45%/0.15)]" />
        
        {/* Soft center purple glow */}
        <div className="hero-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] opacity-30 dark:opacity-20">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[hsl(280_60%_65%/0.35)] via-[hsl(270_50%_60%/0.25)] to-[hsl(260_55%_65%/0.35)] blur-3xl animate-glow-pulse" />
        </div>
        
        {/* Accent gradient top-right - purple */}
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] opacity-25 dark:opacity-15">
          <div className="absolute inset-0 rounded-full bg-gradient-to-bl from-[hsl(260_55%_65%)] to-transparent blur-3xl" />
        </div>
        
        {/* Accent gradient bottom-left - deeper purple */}
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] opacity-25 dark:opacity-15">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[hsl(280_50%_60%)] to-transparent blur-3xl" />
        </div>
        
        {/* Additional subtle purple accent - bottom right */}
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] opacity-15 dark:opacity-10">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tl from-[hsl(270_45%_55%)] to-transparent blur-3xl" />
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
