import { useState } from "react";
import processDiscovery from "@/assets/process-discovery.jpg";
import processResearch from "@/assets/process-research.jpg";
import processStrategy from "@/assets/process-strategy.jpg";
import processCreation from "@/assets/process-creation.jpg";
import processFeedback from "@/assets/process-feedback.jpg";
import processOptimization from "@/assets/process-optimization.jpg";

const steps = [
  {
    number: "1",
    title: "Onboarding & Discovery",
    description: "We start by understanding your business, goals, challenges, and vision through in-depth discovery sessions.",
    image: processDiscovery,
  },
  {
    number: "2",
    title: "Deep Research & Competitive Audit",
    description: "We analyze your market, competitors, and audience to identify opportunities and inform our strategy.",
    image: processResearch,
  },
  {
    number: "3",
    title: "Strategy & Roadmap Development",
    description: "We create a clear, actionable roadmap that aligns with your business objectives and timeline.",
    image: processStrategy,
  },
  {
    number: "4",
    title: "Content Creation & Delivery",
    description: "Our team crafts and delivers high-quality design, development, and content assets.",
    image: processCreation,
  },
  {
    number: "5",
    title: "Feedback & Approvals",
    description: "We work closely with you through structured feedback loops to ensure everything meets your standards.",
    image: processFeedback,
  },
  {
    number: "6",
    title: "Performance Tracking & Optimization",
    description: "We monitor results, analyze data, and continuously optimize for better performance.",
    image: processOptimization,
  },
];

function ProcessCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="glow-card glow-border p-8 lg:p-10 opacity-0 animate-slide-up group"
      style={{ animationDelay: `${0.1 * (index + 1)}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Step Badge */}
      <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-lg bg-secondary border border-border text-sm font-medium mb-6">
        Step {step.number}
      </div>

      {/* Title */}
      <h3 className="heading-sm mb-3">{step.title}</h3>

      {/* Description */}
      <p className="body-md mb-8">{step.description}</p>

      {/* Interactive Image */}
      <div className="relative overflow-hidden rounded-xl">
        {/* Glow effect on hover */}
        <div
          className={`absolute -inset-1 rounded-xl transition-opacity duration-500 blur-lg ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background: "radial-gradient(circle at 50% 50%, hsl(var(--glow-primary) / 0.2), transparent 70%)",
          }}
        />
        
        {/* Image Container */}
        <div className="relative overflow-hidden rounded-xl border border-border/50">
          <img
            src={step.image}
            alt={step.title}
            className={`w-full h-auto object-cover transition-transform duration-700 ${
              isHovered ? "scale-105" : "scale-100"
            }`}
          />
          
          {/* Subtle overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-background/30 to-transparent transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>
    </div>
  );
}

export function Process() {
  return (
    <section id="process" className="section-padding bg-secondary/30">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Our Process
          </span>
          <h2 className="heading-lg mb-4">
            A Simple, Smart, and Scalable Way to Build
          </h2>
          <p className="body-lg">
            We design, develop, and implement solutions that help you work smarter, not harder.
          </p>
        </div>

        {/* 2-Column Process Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <ProcessCard key={step.number} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
