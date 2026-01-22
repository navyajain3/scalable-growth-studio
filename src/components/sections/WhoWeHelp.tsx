import whoWeHelpVisual from "@/assets/who-we-help-visual.jpg";

const audiences = [
  {
    title: "Startups, Small Businesses & Emerging Brands",
    description:
      "We help young and growing brands turn ideas into real digital identities that grow fast and look sharp from day one.",
  },
  {
    title: "Established Businesses",
    description:
      "We partner with growing companies to bring their digital presence, design, and marketing to the level they deserve.",
  },
  {
    title: "E-commerce & D2C Brands",
    description:
      "We create experiences that attract customers, drive conversions, and strengthen long-term brand presence.",
  },
  {
    title: "Founders & CxOs",
    description:
      "We work directly with leaders to shape their personal brands, refine their online presence, and grow their influence through social media.",
  },
];

export function WhoWeHelp() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Left Column - Content */}
          <div className="space-y-0">
            {/* Section Label */}
            <span className="text-sm uppercase tracking-widest text-muted-foreground mb-4 block">
              Who We Help
            </span>

            {/* Main Heading */}
            <h2 className="heading-lg mb-6">
              Empowering bold ideas across industries.
            </h2>

            {/* Intro Text */}
            <p className="body-lg mb-12">
              We work with ambitious teams and individuals who want to build
              strong digital identities and scale with intention.
            </p>

            {/* Audience Blocks */}
            <div className="space-y-0">
              {audiences.map((item, index) => (
                <div
                  key={item.title}
                  className="py-6 border-b border-border last:border-b-0 group cursor-default opacity-0 animate-slide-up"
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                >
                  <h3 className="text-xl font-medium text-foreground mb-2 transition-colors duration-300 group-hover:text-primary">
                    {item.title}
                  </h3>
                  <p className="body-md transition-opacity duration-300 group-hover:opacity-80">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="lg:sticky lg:top-32 flex items-center justify-center">
            <div className="relative w-full max-w-lg opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 rounded-3xl blur-3xl" />
              
              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden border border-border/50">
                <img
                  src={whoWeHelpVisual}
                  alt="Abstract visual representing digital growth and transformation"
                  className="w-full h-auto object-cover"
                />
                
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
