import { useState } from "react";
import { useServicesParallax } from "@/hooks/useGSAPScrollAnimations";
import { AnimatedHeading } from "@/components/ui/animated-heading";
import { ShimmerBadge } from "@/components/ui/shimmer-badge";
import { Layers } from "lucide-react";
import serviceWebDev from "@/assets/service-web-dev.svg";
import serviceUiUx from "@/assets/service-ui-ux.svg";
import serviceGraphicDesign from "@/assets/service-graphic-design.svg";
import serviceBranding from "@/assets/service-branding.svg";
import serviceContent from "@/assets/service-content.svg";
import serviceStrategy from "@/assets/service-strategy.svg";
import serviceVideo from "@/assets/service-video.svg";

const services = [
  {
    badge: "Development",
    title: "Web & App Development",
    description:
      "Custom websites, web apps, and mobile applications built for performance and scale. We use modern technologies to create fast, secure, and scalable digital products.",
    tags: ["Scalable Architecture", "Performance & Security", "Seamless Integrations"],
    image: serviceWebDev,
  },
  {
    badge: "Design",
    title: "UI/UX Design",
    description:
      "User-centered design that creates intuitive, engaging digital experiences. Every pixel is crafted to delight users and drive conversions.",
    tags: ["User Research", "Interface Design", "Conversion Optimization"],
    image: serviceUiUx,
  },
  {
    badge: "Graphics",
    title: "Graphic Design",
    description:
      "From social posts to pitch decks, we create designs that look stunning and speak your brand's language.",
    tags: ["Visual Systems", "Brand Assets", "Communication Design"],
    image: serviceGraphicDesign,
  },
  {
    badge: "Brand Identity",
    title: "Branding & Marketing",
    description:
      "Strategic brand identity and marketing campaigns that build lasting recognition. We help you stand out in crowded markets with distinctive visual identities.",
    tags: ["Brand Identity", "Messaging & Positioning", "Marketing Campaigns"],
    image: serviceBranding,
  },
  {
    badge: "Content",
    title: "Content Writing",
    description:
      "Compelling copy and content that resonates with your audience and drives action. From website copy to blog posts, we craft words that convert.",
    tags: ["Brand Voice", "Storytelling", "SEO-Driven Content"],
    image: serviceContent,
  },
  {
    badge: "Growth",
    title: "Strategy & Growth",
    description:
      "Data-driven strategies that accelerate your business growth and market position. We analyze, plan, and execute to maximize your ROI.",
    tags: ["Market Positioning", "Data-Led Decisions", "Sustainable Growth"],
    image: serviceStrategy,
  },
  {
    badge: "Media",
    title: "Video Production",
    description:
      "Professional video content that tells your story and engages your audience. From concept to final cut, we handle every aspect of video creation.",
    tags: ["Concept & Scripting", "Production & Editing", "Distribution-Ready Content"],
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
      className={`grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center reveal-item`}
    >
      {/* Text Content */}
      <div className={`space-y-5 md:space-y-6 ${isEven ? "md:order-1" : "md:order-2"}`}>
        <h3 className="heading-md">{service.title}</h3>
        <p className="body-md">{service.description}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 rounded-lg bg-primary/[0.09] dark:bg-primary/[0.12] text-foreground text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Interactive Image */}
      <div className={`${isEven ? "md:order-2" : "md:order-1"}`}>
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
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl transition-transform duration-500 group-hover:scale-[1.02]">
            <img
              src={service.image}
              alt={service.title}
              className="service-image w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
        <div className="text-center max-w-3xl mx-auto mb-20 reveal-header">
          <ShimmerBadge className="mb-6">Our Services</ShimmerBadge>
          <AnimatedHeading as="h2" className="heading-lg mb-4">
            From Idea to Execution, We’ve Got You Covered
          </AnimatedHeading>
          <p className="body-lg">
            Everything your brand needs to design, launch, and grow, delivered by one aligned team.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-20 md:space-y-24 lg:space-y-32">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
