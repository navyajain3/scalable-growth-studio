import { Telescope, Search, Map, Paintbrush, MessageSquare, Rocket } from "lucide-react";
import { AnimatedHeading } from "@/components/ui/animated-heading";

const steps = [
  {
    icon: Telescope,
    title: "Onboarding & Discovery",
    description:
      "We start by understanding your business, goals, challenges, and vision through in-depth discovery sessions.",
  },
  {
    icon: Search,
    title: "Deep Research & Competitive Audit",
    description: "We analyze your market, competitors, and audience to identify opportunities and inform our strategy.",
  },
  {
    icon: Map,
    title: "Strategy & Roadmap Development",
    description: "We create a clear, actionable roadmap that aligns with your business objectives and timeline.",
  },
  {
    icon: Paintbrush,
    title: "Content Creation & Delivery",
    description: "Our team crafts and delivers high-quality design, development, and content assets.",
  },
  {
    icon: MessageSquare,
    title: "Feedback & Approvals",
    description:
      "We work closely with you through structured feedback loops to ensure everything meets your standards.",
  },
  {
    icon: Rocket,
    title: "Performance Tracking & Optimization",
    description: "We monitor results, analyze data, and continuously optimize for better performance.",
  },
];

export function Process() {
  return (
    <section id="process" className="section-padding bg-secondary/30">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex p-[1px] rounded-full bg-gradient-to-r from-violet-500 to-purple-500 mb-6">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-background text-foreground text-sm font-medium">
              Our Process
            </span>
          </div>
          <AnimatedHeading as="h2" className="heading-lg mb-4">
            A Simple, Smart, and Scalable Way to Build
          </AnimatedHeading>
          <p className="body-lg">
            Everything your brand needs to design, launch, and grow, delivered by one aligned team.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-card border border-border/40 
                         transition-all duration-300 
                         hover:border-border/80 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]
                         animate-fade-in [animation-fill-mode:backwards]"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {/* Header: Icon + Number */}
              <div className="flex justify-between items-start mb-6">
                <step.icon className="w-8 h-8 text-foreground" strokeWidth={1.5} />
                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center">
                  <span className="text-sm font-medium text-foreground">{index + 1}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-medium text-foreground mb-2">{step.title}</h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
