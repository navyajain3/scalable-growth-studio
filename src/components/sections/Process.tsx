const steps = [
  {
    number: "01",
    title: "Onboarding & Discovery",
    description: "We start by understanding your business, goals, challenges, and vision through in-depth discovery sessions.",
  },
  {
    number: "02",
    title: "Deep Research & Competitive Audit",
    description: "We analyze your market, competitors, and audience to identify opportunities and inform our strategy.",
  },
  {
    number: "03",
    title: "Strategy & Roadmap Development",
    description: "We create a clear, actionable roadmap that aligns with your business objectives and timeline.",
  },
  {
    number: "04",
    title: "Content Creation & Delivery",
    description: "Our team crafts and delivers high-quality design, development, and content assets.",
  },
  {
    number: "05",
    title: "Feedback & Approvals",
    description: "We work closely with you through structured feedback loops to ensure everything meets your standards.",
  },
  {
    number: "06",
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
          <h2 className="heading-lg mb-4">
            A Simple, Smart, and Scalable Way to Build
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="glow-card glow-border p-7 hover-lift opacity-0 animate-slide-up"
              style={{ animationDelay: `${0.08 * (index + 1)}s` }}
            >
              <div className="inline-flex items-center justify-center px-3 py-1 rounded-lg bg-primary/10 text-primary text-sm font-medium mb-5">
                Step {step.number}
              </div>
              <h3 className="text-lg font-medium mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
