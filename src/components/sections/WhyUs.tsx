import { Users, Lightbulb, Target, Handshake, Zap, Award, Sparkles } from "lucide-react";
import { AnimatedHeading } from "@/components/ui/animated-heading";
import { useWhyUsParallax } from "@/hooks/useGSAPScrollAnimations";
import { ShimmerBadge } from "@/components/ui/shimmer-badge";

const reasons = [
  {
    icon: Users,
    title: "End-to-End Expertise, One Aligned Team",
    description:
      "Design, content, development, and strategy work together seamlessly. Our cross-functional team aligns every decision around growth, conversion, and long-term brand strength.",
  },
  {
    icon: Lightbulb,
    title: "Strategy Before Execution",
    description:
      "We don't jump straight into design or content. Every project begins with clarity, defining direction, positioning, and priorities. If the strategy isn't right, we pause, refine, or say no.",
  },
  {
    icon: Target,
    title: "We Don't Do Generic Growth",
    description:
      "We don't chase vanity metrics or short-term spikes. Our work is built around sustainable growth, brand clarity first, performance second, scale third.",
  },
  {
    icon: Handshake,
    title: "Fewer Clients, Deeper Partnerships",
    description:
      "We intentionally limit active projects so every brand gets senior attention, fast decision-making, and consistent quality, not hand-offs or junior-led execution.",
  },
  {
    icon: Zap,
    title: "Fast, Transparent & Truly Collaborative",
    description:
      "Clear scopes, honest timelines, and direct communication. We work like a partner, not a vendor, keeping you involved and informed from idea to launch and beyond.",
  },
  {
    icon: Award,
    title: "Results That Speak for Themselves",
    description:
      "Every project is tied to real business goals. We track performance, refine continuously, and focus on long-term growth and measurable impact.",
  },
];

export function WhyUs() {
  // Initialize parallax
  useWhyUsParallax();

  return (
    <section id="why-us" className="section-padding bg-secondary/30">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-header">
          <ShimmerBadge className="mb-6">Why Us</ShimmerBadge>
          <AnimatedHeading as="h2" className="heading-lg mb-4">
            We Don't Just Work for Your Brand, We Grow It with You
          </AnimatedHeading>
          <p className="body-lg text-muted-foreground">
            Our approach is built on clarity, partnership, and measurable outcomes, not shortcuts or surface-level
            growth.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 reveal-cards auto-rows-fr">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="glow-card glow-border p-7 hover-lift why-us-card reveal-card flex flex-col h-full"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-[#501ed4]/10 to-[#7e56e2]/10 border border-[#501ed4]/20 flex items-center justify-center mb-5 shrink-0">
                <reason.icon className="w-5 h-5 text-foreground" />
              </div>
              <h3 className="text-lg font-medium mb-2">{reason.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}