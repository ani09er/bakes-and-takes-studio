import { Link } from "react-router-dom";
import { Youtube, Twitter, Instagram, Linkedin, Mail, MapPin } from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Games", href: "/games" },
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

const socialLinks = [
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
];

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={logoIcon}
                alt="Bakes and Takes Logo"
                className="h-10 w-10 rounded-lg"
              />
              <span className="text-xl font-bold font-display text-foreground">
                Bakes & Takes
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Crafting innovative games and interactive experiences that push the boundaries of mobile gaming.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail size={16} className="text-primary" />
                <a href="mailto:contact@bakesandtakes.com" className="hover:text-primary transition-colors">
                  contact@bakesandtakes.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin size={16} className="text-primary mt-0.5" />
                <span>Kolkata, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Bakes and Takes. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Crafted with passion in India
          </p>
        </div>
      </div>
    </footer>
  );
};
