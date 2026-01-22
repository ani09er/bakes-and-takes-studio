import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Gamepad2, 
  Smartphone, 
  Palette, 
  Gauge, 
  Upload, 
  TestTube,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const services = [
  {
    icon: Gamepad2,
    title: "Game Development",
    description: "Full-cycle game development from initial concept and design to final launch and beyond.",
    features: [
      "2D and 3D game development",
      "Unity and custom engine solutions",
      "Cross-platform development",
      "Game mechanics design",
      "Monetization strategy",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications built for performance and user experience.",
    features: [
      "Android native development",
      "React Native solutions",
      "App Store optimization",
      "Backend integration",
      "Analytics implementation",
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful and intuitive interfaces that enhance player engagement and retention.",
    features: [
      "Game UI design",
      "User experience research",
      "Interactive prototyping",
      "Animation design",
      "Accessibility optimization",
    ],
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description: "Making your games and apps run smoothly across all devices and specifications.",
    features: [
      "Code optimization",
      "Memory management",
      "Load time reduction",
      "Battery optimization",
      "Device compatibility",
    ],
  },
  {
    icon: Upload,
    title: "Publishing Services",
    description: "End-to-end publishing support for Google Play and other platforms.",
    features: [
      "Store listing optimization",
      "Screenshot and video creation",
      "Compliance review",
      "Launch strategy",
      "Update management",
    ],
  },
  {
    icon: TestTube,
    title: "QA Testing",
    description: "Comprehensive testing to ensure your game is polished and bug-free.",
    features: [
      "Functional testing",
      "Performance testing",
      "Compatibility testing",
      "User acceptance testing",
      "Regression testing",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium mb-3">What We Offer</p>
            <h1 className="text-4xl sm:text-5xl font-bold font-display text-foreground mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From concept to launch, we provide comprehensive game development services 
              to bring your vision to life. Partner with us to create something amazing.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="glass rounded-2xl p-8 hover-lift group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold font-display text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 size={14} className="text-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center glass rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let's discuss your ideas and find out how we can help bring your game or app to life.
            </p>
            <Button variant="glow" size="lg" asChild>
              <Link to="/contact" className="gap-2">
                Get in Touch
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
