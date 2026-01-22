import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useHeroParallax } from "@/hooks/useGSAPScrollAnimations";

export function Hero() {
  useHeroParallax();

  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle Gradient Background */}
      <div className="absolute inset-0 bg-background">
        {/* Main gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--hero-gradient-start))] via-transparent to-[hsl(var(--hero-gradient-end))] opacity-40 dark:opacity-30" />
        
        {/* Soft center glow */}
        <div className="hero-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] opacity-25 dark:opacity-15">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[hsl(280_40%_70%/0.3)] via-[hsl(220_30%_70%/0.2)] to-[hsl(190_50%_70%/0.3)] blur-3xl animate-glow-pulse" />
        </div>
        
        {/* Accent gradient top-right */}
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] opacity-20 dark:opacity-10">
          <div className="absolute inset-0 rounded-full bg-gradient-to-bl from-[hsl(190_60%_70%)] to-transparent blur-3xl" />
        </div>
        
        {/* Accent gradient bottom-left */}
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] opacity-20 dark:opacity-10">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[hsl(280_40%_70%)] to-transparent blur-3xl" />
        </div>
      </div>

      <div className="container-wide relative z-10 text-center pt-20">
        <div className="hero-content max-w-4xl mx-auto space-y-8">
          {/* Headline */}
          <h1 className="heading-xl opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            A Complete Digital Growth System for Brands Ready to Scale.
          </h1>

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
            <Button variant="hero-outline" size="lg" asChild>
              <a href="#services">View Services</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
