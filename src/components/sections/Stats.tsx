import { Star } from "lucide-react";

const stats = [
  { value: "85+", label: "Brands scaled with us" },
  { value: "215+", label: "Projects delivered" },
  { value: "88%", label: "Client retention" },
];

const testimonials = [
  {
    quote: "ScalKit transformed our digital presence completely. Their strategic approach and execution excellence helped us achieve 3x growth in just 6 months.",
    author: "Dr. Andrea Herschorn",
    role: "Founder & CEO",
    rating: 5,
  },
  {
    quote: "Working with ScalKit felt like having an extended team. They understood our vision instantly and delivered beyond expectations.",
    author: "Pranav",
    role: "Co-Founder",
    rating: 5,
  },
  {
    quote: "The attention to detail and commitment to quality is unmatched. ScalKit doesn't just deliver projects—they build partnerships.",
    author: "Jugadveer Singh",
    role: "Managing Director",
    rating: 5,
  },
  {
    quote: "From branding to development, every deliverable was polished and professional. ScalKit is now our go-to digital partner.",
    author: "Rahul K",
    role: "Founder",
    rating: 5,
  },
];

export function Stats() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center opacity-0 animate-slide-up"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="glow-card glow-border p-7 opacity-0 animate-slide-up"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground leading-relaxed mb-6">"{testimonial.quote}"</p>

              {/* Author */}
              <div>
                <div className="font-medium text-foreground">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
