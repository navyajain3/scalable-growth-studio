import { Mail, Phone, Linkedin, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-xl font-semibold">ScalKit</span>
            <span className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} ScalKit. All rights reserved.
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="mailto:hello@scalkit.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a href="tel:+91 88822 17810" className="text-muted-foreground hover:text-foreground transition-colors">
              <Phone className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/navyaj/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/+918882217810"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
