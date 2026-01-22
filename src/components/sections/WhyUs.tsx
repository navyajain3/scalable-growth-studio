import { Users, Lightbulb, Target, Handshake, Zap, Award } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "End-to-End Expertise, One Aligned Team",
    description: "Design, development, content, and strategy—all under one roof, working in sync.",
  },
  {
    icon: Lightbulb,
    title: "Strategy Before Execution",
    description: "We don't just build; we think. Every decision is grounded in business goals and user needs.",
  },
  {
    icon: Target,
    title: "We Don't Do Generic Growth",
    description: "Your brand is unique. Our solutions are custom-tailored to your specific challenges and opportunities.",
  },
  {
    icon: Handshake,
    title: "Fewer Clients, Deeper Partnerships",
    description: "We limit our client roster to ensure every brand gets the attention and dedication it deserves.",
  },
  {
    icon: Zap,
    title: "Fast, Transparent & Truly Collaborative",
    description: "Clear communication, quick turnarounds, and a partnership approach from day one.",
  },
  {
    icon: Award,
    title: "Results That Speak for Themselves",
    description: "Our work has helped brands grow revenue, increase engagement, and build lasting market presence.",
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="section-padding bg-secondary/30">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">
            We don't just work for your brand, we grow it with you.
          </h2>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="glow-card glow-border p-7 hover-lift opacity-0 animate-slide-up"
              style={{ animationDelay: `${0.08 * (index + 1)}s` }}
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <reason.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">{reason.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
