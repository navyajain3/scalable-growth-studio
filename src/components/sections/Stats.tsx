import { Star, Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { AnimatedHeading } from "@/components/ui/animated-heading";
import { useStatsParallax } from "@/hooks/useGSAPScrollAnimations";
import { ShimmerBadge } from "@/components/ui/shimmer-badge";

const stats = [
  { value: 85, suffix: "+", label: "Brands scaled with us" },
  { value: 215, suffix: "+", label: "Projects successfully delivered" },
  { value: 88, suffix: "%", label: "Client retention rate" },
];

function useCountUp(end: number, duration: number = 2000, startOnView: boolean = true) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnView) {
      setHasStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted, startOnView]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth deceleration
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [hasStarted, end, duration]);

  return { count, ref };
}

function StatItem({ stat, index }: { stat: (typeof stats)[0]; index: number }) {
  const { count, ref } = useCountUp(stat.value, 2000);

  return (
    <div
      ref={ref}
      className="text-center reveal-card"
    >
      <div className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-2">
        {count}
        {stat.suffix}
      </div>
      <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "ScalKit truly brought my vision to life with such care and creativity. They built a website that feels warm, elegant, and perfectly me. I felt heard every step of the way, and the end result couldn't have been more beautiful.",
    author: "Dr. Andrea Herschorn",
    role: "Founder & CEO",
    rating: 5,
  },
  {
    quote:
      "ScalKit has been an incredible partner to work with. They brought our vision to life with such thoughtfulness and precision. Their design sense, attention to detail, and commitment to excellence made the entire process a joy.",
    author: "Pranav",
    role: "Co-Founder",
    rating: 5,
  },
  {
    quote:
      "Navya was a pleasure to work with. She quickly understood the vision and delivered clear, engaging scripts on time. Professional, creative, and easy to collaborate with.",
    author: "Jugadveer Singh",
    role: "Managing Director",
    rating: 5,
  },
  {
    quote:
      "Navya and her entire team have been incredibly easy to work with. The results exceeded our expectations, and her design sense is truly commendable. I haven't worked with a more cooperative, understanding, and skilled team. Highly recommend their services!",
    author: "Rahul K",
    role: "Founder",
    rating: 5,
  },
];

export function Stats() {
  // Initialize parallax
  useStatsParallax();

  return (
    <section className="section-padding bg-background stats-section">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-header">
          <ShimmerBadge className="mb-6">Testimonials</ShimmerBadge>
          <AnimatedHeading as="h2" className="heading-lg mb-4">
            Trusted by Ambitious Brands Worldwide
          </AnimatedHeading>
          <p className="body-lg text-muted-foreground">Real feedback from founders and teams we've partnered with.</p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-8 mb-20 stats-row reveal-cards">
          {stats.map((stat, index) => (
            <StatItem key={stat.label} stat={stat} index={index} />
          ))}
        </div>

        {/* Testimonials Marquee */}
        <div className="overflow-hidden">
          <div className="flex w-fit animate-marquee-fast md:animate-marquee">
            {/* First set */}
            <div className="flex gap-6 pr-6">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.author}
                  className="glow-card glow-border p-7 w-[280px] md:w-[320px] flex-shrink-0"
                >
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#7e56e2] text-[#7e56e2]" />
                    ))}
                  </div>
                  <p className="text-foreground leading-relaxed mb-6">"{testimonial.quote}"</p>
                  <div>
                    <div className="font-medium text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
            {/* Second set (duplicate for seamless loop) */}
            <div className="flex gap-6 pr-6">
              {testimonials.map((testimonial) => (
                <div
                  key={`${testimonial.author}-dup`}
                  className="glow-card glow-border p-7 w-[280px] md:w-[320px] flex-shrink-0"
                >
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#7e56e2] text-[#7e56e2]" />
                    ))}
                  </div>
                  <p className="text-foreground leading-relaxed mb-6">"{testimonial.quote}"</p>
                  <div>
                    <div className="font-medium text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}