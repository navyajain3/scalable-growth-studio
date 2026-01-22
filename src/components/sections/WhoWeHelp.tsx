import { Building2, Rocket, ShoppingBag, User } from "lucide-react";

const audiences = [
  {
    icon: Rocket,
    title: "Startups, Small Businesses & Emerging Brands",
    description: "Early-stage companies looking to establish their digital presence and scale efficiently.",
  },
  {
    icon: Building2,
    title: "Established Businesses",
    description: "Organizations seeking to modernize their digital infrastructure and accelerate growth.",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce & D2C Brands",
    description: "Direct-to-consumer brands focused on conversion optimization and customer experience.",
  },
  {
    icon: User,
    title: "Founders & CxOs",
    description: "Leaders who need strategic partners to translate vision into digital reality.",
  },
];

export function WhoWeHelp() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">
            Empowering bold ideas across industries.
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {audiences.map((item, index) => (
            <div
              key={item.title}
              className="glow-card glow-border p-8 hover-lift opacity-0 animate-slide-up"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="heading-sm mb-2">{item.title}</h3>
                  <p className="body-md">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
