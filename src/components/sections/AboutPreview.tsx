import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Lightbulb, Zap, Heart, ArrowRight } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Creativity",
    description: "We believe in pushing creative boundaries and exploring unique gameplay concepts.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimized experiences that run smoothly on all devices without compromising quality.",
  },
  {
    icon: Heart,
    title: "User Experience",
    description: "Player satisfaction is at the heart of everything we create.",
  },
];

export const AboutPreview = () => {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <p className="text-primary font-medium mb-3">About Us</p>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-4">
                Building the Future of Mobile Gaming
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Bakes and Takes is an independent creative game studio founded with a singular vision: 
                to craft innovative games and interactive experiences that captivate players worldwide.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Based in Kolkata, India, we combine passion with cutting-edge technology to create 
                polished mobile experiences with unique gameplay concepts.
              </p>
            </div>

            <Button variant="outline-glow" asChild>
              <Link to="/about" className="gap-2">
                Learn More About Us
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>

          {/* Values Grid */}
          <div className="grid gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="glass p-6 rounded-xl hover-lift group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
