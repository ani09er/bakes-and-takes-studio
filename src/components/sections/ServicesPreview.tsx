import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Gamepad2, 
  Smartphone, 
  Palette, 
  Gauge, 
  Upload, 
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Gamepad2,
    title: "Game Development",
    description: "End-to-end game development from concept to launch.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile application development.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful and intuitive interface design for games and apps.",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description: "Making your games run smooth on all devices.",
  },
  {
    icon: Upload,
    title: "Publishing & QA",
    description: "Store optimization and quality assurance testing.",
  },
];

export const ServicesPreview = () => {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-3">What We Offer</p>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From concept to launch, we provide comprehensive game development services 
            to bring your vision to life.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass p-6 rounded-xl hover-lift group text-center"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline-glow" size="lg" asChild>
            <Link to="/services" className="gap-2">
              Explore All Services
              <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
