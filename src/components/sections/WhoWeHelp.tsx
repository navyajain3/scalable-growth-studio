import { useState, useEffect } from "react";
import startupsVisual from "@/assets/who-we-help-startups.jpg";
import enterpriseVisual from "@/assets/who-we-help-enterprise.jpg";
import ecommerceVisual from "@/assets/who-we-help-ecommerce.jpg";
import foundersVisual from "@/assets/who-we-help-founders.jpg";
import defaultVisual from "@/assets/who-we-help-default.jpg";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { AnimatedHeading } from "@/components/ui/animated-heading";

const audiences = [
  {
    title: "Startups, Small Businesses & Emerging Brands",
    description:
      "We help young and growing brands turn ideas into real digital identities that grow fast and look sharp from day one.",
    image: startupsVisual,
  },
  {
    title: "Established Businesses",
    description:
      "We partner with growing companies to bring their digital presence, design, and marketing to the level they deserve.",
    image: enterpriseVisual,
  },
  {
    title: "E-commerce & D2C Brands",
    description:
      "We create experiences that attract customers, drive conversions, and strengthen long-term brand presence.",
    image: ecommerceVisual,
  },
  {
    title: "Founders & CxOs",
    description:
      "We work directly with leaders to shape their personal brands, refine their online presence, and grow their influence through social media.",
    image: foundersVisual,
  },
];

export function WhoWeHelp() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header - Centered */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex p-[1px] rounded-full bg-gradient-to-r from-violet-500 to-purple-500 mb-6">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-background text-foreground text-sm font-medium">
              Who We Help
            </span>
          </div>
          <AnimatedHeading as="h2" className="heading-lg mb-4">
            Empowering Bold Ideas Across Industries
          </AnimatedHeading>
          <p className="body-lg text-muted-foreground">
            We partner with ambitious teams and leaders to design digital identities that scale with intention,
            strategy, and long-term impact.
          </p>
        </div>

        {/* Mobile/Tablet: Swipeable Carousel */}
        <div className="lg:hidden">
          <Carousel setApi={setApi} opts={{ loop: true }} className="w-full">
            <CarouselContent>
              {audiences.map((item, index) => (
                <CarouselItem key={item.title}>
                  <div
                    className="rounded-2xl overflow-hidden border border-border/50 opacity-0 animate-slide-up"
                    style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                  >
                    <img
                      src={item.image}
                      alt={`Visual representing ${item.title}`}
                      className="w-full aspect-[4/3] object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-medium mb-2 text-foreground">{item.title}</h3>
                      <p className="body-md text-foreground">{item.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {audiences.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === index
                    ? "w-6 bg-gradient-to-r from-violet-500 to-purple-500"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: Side-by-side layout */}
        <div
          className="hidden lg:grid lg:grid-cols-2 gap-12 lg:gap-24 items-start"
          onMouseLeave={() => setActiveIndex(null)}
        >
          {/* Left Column - Audience Blocks */}
          <div>
            {audiences.map((item, index) => {
              const isActive = activeIndex === index;
              const isDefault = activeIndex === null;
              const isHighlighted = isActive || isDefault;

              return (
                <div
                  key={item.title}
                  className={`py-8 border-b border-border/30 last:border-b-0 cursor-pointer transition-all duration-300 opacity-0 animate-slide-up`}
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  <h3
                    className={`font-heading mb-3 transition-all duration-300 ${
                      isActive
                        ? "text-2xl font-medium text-foreground"
                        : isDefault
                          ? "text-xl font-normal text-foreground"
                          : "text-xl font-normal text-muted-foreground/40"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`text-base leading-relaxed transition-all duration-300 ${
                      isActive
                        ? "text-foreground/90"
                        : isDefault
                          ? "text-muted-foreground/80"
                          : "text-muted-foreground/30"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column - Visual */}
          <div className="sticky top-32 flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-transparent to-purple-500/10 rounded-3xl blur-3xl transition-opacity duration-500" />

              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden border border-border/50">
                {/* Default image when nothing is hovered */}
                <img
                  src={defaultVisual}
                  alt="Our services overview"
                  className={`w-full h-auto object-cover transition-opacity duration-500 ${
                    activeIndex === null ? "opacity-100 relative" : "opacity-0 absolute inset-0"
                  }`}
                />

                {/* Individual audience images */}
                {audiences.map((item, index) => (
                  <img
                    key={item.title}
                    src={item.image}
                    alt={`Visual representing ${item.title}`}
                    className={`w-full h-auto object-cover transition-opacity duration-500 ${
                      activeIndex === index ? "opacity-100 relative" : "opacity-0 absolute inset-0"
                    }`}
                  />
                ))}

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
