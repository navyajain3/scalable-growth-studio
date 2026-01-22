const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Why Us", href: "#why-us" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

const services = [
  { label: "Web & App Development", href: "#services" },
  { label: "UI/UX Design", href: "#services" },
  { label: "Branding & Marketing", href: "#services" },
  { label: "Content Writing", href: "#services" },
  { label: "Strategy & Growth", href: "#services" },
  { label: "Video Production", href: "#services" },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-16 md:py-20">
      <div className="container-wide">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12 text-center md:text-left">
          {/* Brand Column */}
          <div>
            <span className="text-xl font-semibold block mb-3">ScalKit</span>
            <p className="text-muted-foreground text-sm">A Complete Digital Growth System For Brands Ready To Scale</p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:navya@scalkit.com"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  navya@scalkit.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+918882217810"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  +91 88822 17810
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/navyaj/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/+918882217810"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} ScalKit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
