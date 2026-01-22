import { Code, Palette, PenTool, FileText, Megaphone, TrendingUp, Video } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web & App Development",
    description: "Custom websites, web apps, and mobile applications built for performance and scale.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design that creates intuitive, engaging digital experiences.",
  },
  {
    icon: PenTool,
    title: "Graphic Design",
    description: "Visual assets that communicate your brand message with clarity and impact.",
  },
  {
    icon: FileText,
    title: "Content Writing",
    description: "Compelling copy and content that resonates with your audience and drives action.",
  },
  {
    icon: Megaphone,
    title: "Branding & Marketing",
    description: "Strategic brand identity and marketing campaigns that build lasting recognition.",
  },
  {
    icon: TrendingUp,
    title: "Strategy & Growth",
    description: "Data-driven strategies that accelerate your business growth and market position.",
  },
  {
    icon: Video,
    title: "Video Production",
    description: "Professional video content that tells your story and engages your audience.",
  },
];

export function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">
            From idea to execution, we've got you covered.
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glow-card glow-border p-6 hover-lift group opacity-0 animate-slide-up"
              style={{ animationDelay: `${0.05 * (index + 1)}s` }}
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
