import { useState, useEffect } from "react";

const steps = [
  {
    title: "Onboarding & Discovery",
    description:
      "We start by understanding your business, goals, challenges, and vision through in-depth discovery sessions.",
  },
  {
    title: "Deep Research & Competitive Audit",
    description:
      "We analyze your market, competitors, and audience to identify opportunities and inform our strategy.",
  },
  {
    title: "Strategy & Roadmap Development",
    description:
      "We create a clear, actionable roadmap that aligns with your business objectives and timeline.",
  },
  {
    title: "Content Creation & Delivery",
    description:
      "Our team crafts and delivers high-quality design, development, and content assets.",
  },
  {
    title: "Feedback & Approvals",
    description:
      "We work closely with you through structured feedback loops to ensure everything meets your standards.",
  },
  {
    title: "Performance Tracking & Optimization",
    description:
      "We monitor results, analyze data, and continuously optimize for better performance.",
  },
];

export function Process() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section id="process" className="section-padding bg-secondary/30">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-foreground text-sm font-medium mb-6">
            Our Process
          </span>
          <h2 className="heading-lg mb-4">
            A Simple, Smart, and Scalable Way to Build
          </h2>
          <p className="body-lg">
            Everything your brand needs to design, launch, and grow, delivered
            by one aligned team.
          </p>
        </div>

        {/* Timeline Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Horizontal Line */}
          <div className="absolute top-[7px] left-[8%] right-[8%] h-px bg-border hidden md:block" />

          {/* Steps Grid */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 md:gap-4">
            {steps.map((step, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                {/* Dot */}
                <div
                  className={`rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "w-4 h-4 bg-foreground ring-2 ring-foreground ring-offset-2 ring-offset-background"
                      : "w-3 h-3 bg-muted-foreground group-hover:bg-foreground"
                  }`}
                />

                {/* Title */}
                <h3
                  className={`mt-6 text-sm md:text-base font-semibold transition-colors duration-300 ${
                    index === activeIndex
                      ? "text-foreground"
                      : "text-muted-foreground group-hover:text-foreground"
                  }`}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  className={`mt-2 text-xs md:text-sm transition-colors duration-300 leading-relaxed ${
                    index === activeIndex
                      ? "text-muted-foreground"
                      : "text-muted-foreground/60"
                  }`}
                >
                  {step.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
