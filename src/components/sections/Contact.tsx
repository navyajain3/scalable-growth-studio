import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Send } from "lucide-react";
import { AnimatedHeading } from "@/components/ui/animated-heading";
import { useContactParallax } from "@/hooks/useGSAPScrollAnimations";
import { ShimmerBadge } from "@/components/ui/shimmer-badge";

export function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    phone: "",
    email: "",
    message: "",
  });

  // Initialize parallax
  useContactParallax();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="section-padding bg-secondary/30 contact-section">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left contact-content reveal-left">
            <ShimmerBadge className="mb-6">Get in Touch</ShimmerBadge>
            <AnimatedHeading as="h2" className="heading-lg mb-6">
              Let’s Build Something That Scales
            </AnimatedHeading>
            <p className="body-lg mb-10">
              Ready to transform your digital presence? Get in touch and let's discuss how we can help your brand grow.
            </p>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6">
              <a
                href="mailto:navya@scalkit.com"
                className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#501ed4]/10 to-[#7e56e2]/10 border border-[#501ed4]/20 flex items-center justify-center group-hover:from-[#501ed4]/20 group-hover:to-[#7e56e2]/20 transition-colors">
                  <Mail className="w-5 h-5 text-foreground" />
                </div>
                <span>navya@scalkit.com</span>
              </a>
              <a
                href="tel:+91 88822 17810"
                className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#501ed4]/10 to-[#7e56e2]/10 border border-[#501ed4]/20 flex items-center justify-center group-hover:from-[#501ed4]/20 group-hover:to-[#7e56e2]/20 transition-colors">
                  <Phone className="w-5 h-5 text-foreground" />
                </div>
                <span>+91 88822 17810</span>
              </a>
              <a
                href="https://www.linkedin.com/in/navyaj/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#501ed4]/10 to-[#7e56e2]/10 border border-[#501ed4]/20 flex items-center justify-center group-hover:from-[#501ed4]/20 group-hover:to-[#7e56e2]/20 transition-colors">
                  <Linkedin className="w-5 h-5 text-foreground" />
                </div>
                <span>LinkedIn</span>
              </a>
              <a
                href="https://wa.me/+918882217810"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#501ed4]/10 to-[#7e56e2]/10 border border-[#501ed4]/20 flex items-center justify-center group-hover:from-[#501ed4]/20 group-hover:to-[#7e56e2]/20 transition-colors">
                  <svg className="w-5 h-5 text-foreground" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="contact-form reveal-right">
            <div className="glow-card p-8 md:p-10">
              <h3 className="text-xl font-medium mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Full Name</label>
                    <Input
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="bg-background border-border"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Company Name</label>
                    <Input
                      placeholder="Your Company"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="bg-background border-border"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Phone Number</label>
                    <Input
                      placeholder="+91 88822 17810"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-background border-border"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email Address</label>
                    <Input
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-background border-border"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">How can we help you?</label>
                  <Textarea
                    placeholder="Tell us about your project..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-background border-border resize-none"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
                <p className="text-center text-sm text-muted-foreground">We'll get back to you within 48 hours.</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
