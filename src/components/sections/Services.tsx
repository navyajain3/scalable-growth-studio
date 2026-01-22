import { useState } from "react";
import { useServicesParallax } from "@/hooks/useGSAPScrollAnimations";
import serviceWebDev from "@/assets/service-web-dev.jpg";
import serviceUiUx from "@/assets/service-ui-ux.jpg";
import serviceBranding from "@/assets/service-branding.jpg";
import serviceContent from "@/assets/service-content.jpg";
import serviceStrategy from "@/assets/service-strategy.jpg";
import serviceVideo from "@/assets/service-video.jpg";

const services = [
  {
    badge: "Development",
    title: "Web & App Development",
    description:
      "Custom websites, web apps, and mobile applications built for performance and scale. We use modern technologies to create fast, secure, and scalable digital products.",
    tags: ["React", "Next.js", "Mobile Apps"],
    image: serviceWebDev,
  },
  {
    badge: "Design",
    title: "UI/UX Design",
    description:
      "User-centered design that creates intuitive, engaging digital experiences. Every pixel is crafted to delight users and drive conversions.",
    tags: ["Wireframes", "Prototypes", "User Testing"],
    image: serviceUiUx,
  },
  {
    badge: "Brand Identity",
    title: "Branding & Marketing",
    description:
      "Strategic brand identity and marketing campaigns that build lasting recognition. We help you stand out in crowded markets with distinctive visual identities.",
    tags: ["Logo Design", "Brand Guidelines", "Campaigns"],
    image: serviceBranding,
  },
  {
    badge: "Content",
    title: "Content Writing",
    description:
      "Compelling copy and content that resonates with your audience and drives action. From website copy to blog posts, we craft words that convert.",
    tags: ["Copywriting", "SEO Content", "Blog Posts"],
    image: serviceContent,
  },
  {
    badge: "Growth",
    title: "Strategy & Growth",
    description:
      "Data-driven strategies that accelerate your business growth and market position. We analyze, plan, and execute to maximize your ROI.",
    tags: ["Analytics", "Marketing & Outreach Strategy", "Performance"],
    image: serviceStrategy,
  },
  {
    badge: "Media",
    title: "Video Production",
    description:
      "Professional video content that tells your story and engages your audience. From concept to final cut, we handle every aspect of video creation.",
    tags: ["Brand Films", "Social Ads", "Explainers"],
    image: serviceVideo,
  },
];

function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const isEven = index % 2 === 0;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <div
      className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center opacity-0 animate-slide-up`}
      style={{ animationDelay: `${0.1 * (index + 1)}s` }}
    >
      {/* Text Content */}
      <div className={`space-y-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
        <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-foreground text-sm font-medium">
          {service.badge}
        </span>
        <h3 className="heading-md">{service.title}</h3>
        <p className="body-md">{service.description}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 rounded-xl bg-secondary text-secondary-foreground text-sm font-medium border border-border"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Interactive Image */}
      <div className={`${isEven ? "lg:order-2" : "lg:order-1"}`}>
        <div
          className="relative group"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setMousePosition({ x: 50, y: 50 })}
        >
          {/* Glow Effect */}
          <div
            className="absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, hsl(var(--glow-primary) / 0.3), transparent 60%)`,
            }}
          />

          {/* Image Container */}
          <div className="relative glow-card overflow-hidden rounded-2xl transition-transform duration-500 group-hover:scale-[1.02]">
            <img
              src={service.image}
              alt={service.title}
              className="service-image w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Floating animation indicator */}
            <div className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Interactive
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Services() {
  useServicesParallax();

  return (
    <section id="services" className="section-padding">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-foreground text-sm font-medium mb-6">
            Our Services
          </span>
          <h2 className="heading-lg mb-4">From idea to execution, we've got you covered.</h2>
          <p className="body-lg">
            Everything your brand needs to design, launch, and grow, delivered by one aligned team.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-24 lg:space-y-32">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
