import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import processDiscovery from "@/assets/process-discovery.jpg";
import processResearch from "@/assets/process-research.jpg";
import processStrategy from "@/assets/process-strategy.jpg";
import processCreation from "@/assets/process-creation.jpg";
import processFeedback from "@/assets/process-feedback.jpg";
import processOptimization from "@/assets/process-optimization.jpg";

const steps = [
  {
    number: "1",
    label: "Discovery",
    title: "Onboarding & Discovery",
    description:
      "We start by understanding your business, goals, challenges, and vision through in-depth discovery sessions.",
    image: processDiscovery,
  },
  {
    number: "2",
    label: "Research",
    title: "Deep Research & Competitive Audit",
    description: "We analyze your market, competitors, and audience to identify opportunities and inform our strategy.",
    image: processResearch,
  },
  {
    number: "3",
    label: "Strategy",
    title: "Strategy & Roadmap Development",
    description: "We create a clear, actionable roadmap that aligns with your business objectives and timeline.",
    image: processStrategy,
  },
  {
    number: "4",
    label: "Creation",
    title: "Content Creation & Delivery",
    description: "Our team crafts and delivers high-quality design, development, and content assets.",
    image: processCreation,
  },
  {
    number: "5",
    label: "Feedback",
    title: "Feedback & Approvals",
    description:
      "We work closely with you through structured feedback loops to ensure everything meets your standards.",
    image: processFeedback,
  },
  {
    number: "6",
    label: "Optimize",
    title: "Performance Tracking & Optimization",
    description: "We monitor results, analyze data, and continuously optimize for better performance.",
    image: processOptimization,
  },
];

export function Process() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % steps.length);
  }, []);

  const goToPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + steps.length) % steps.length);
  }, []);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, goToNext]);

  const activeStep = steps[activeIndex];

  return (
    <section id="process" className="section-padding bg-secondary/30">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-foreground text-sm font-medium mb-6">
            Our Process
          </span>
          <h2 className="heading-lg mb-4">A Simple, Smart, and Scalable Way to Build</h2>
          <p className="body-lg">
            Everything your brand needs to design, launch, and grow, delivered by one aligned team.
          </p>
        </div>

        {/* Timeline Navigation */}
        <div className="relative mb-12">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-border -translate-y-1/2" />
          
          {/* Timeline Steps */}
          <div className="relative flex justify-between items-center max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <button
                key={step.number}
                onClick={() => setActiveIndex(index)}
                className="relative flex flex-col items-center gap-2 group"
              >
                {/* Step Label */}
                <span
                  className={`text-sm md:text-base font-medium transition-all duration-300 ${
                    index === activeIndex
                      ? "text-foreground text-lg md:text-xl"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {step.label}
                </span>
                
                {/* Timeline Dot */}
                <div
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-foreground scale-150"
                      : "bg-muted-foreground group-hover:bg-foreground"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 text-muted-foreground hover:text-foreground transition-colors hidden md:block"
            aria-label="Previous step"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 text-muted-foreground hover:text-foreground transition-colors hidden md:block"
            aria-label="Next step"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Main Image */}
          <div className="max-w-4xl mx-auto px-12 md:px-16">
            <div className="relative overflow-hidden rounded-2xl border border-border/50">
              <img
                src={activeStep.image}
                alt={activeStep.title}
                className="w-full h-auto object-cover aspect-video transition-opacity duration-500"
              />
            </div>
          </div>

          {/* Description */}
          <div className="text-center max-w-2xl mx-auto mt-8">
            <p className="body-lg">{activeStep.description}</p>
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-center gap-4 mt-6 md:hidden">
            <button
              onClick={goToPrev}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Previous step"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Next step"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
