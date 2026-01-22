import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageSquare, Mail } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial" />
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            <Mail size={16} />
            Let's Work Together
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-foreground">
            Ready to Create Something{" "}
            <span className="text-gradient">Amazing?</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Whether you have a game idea, need development services, or want to collaborate, 
            we'd love to hear from you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button variant="glow" size="xl" asChild>
              <Link to="/contact" className="gap-3">
                <MessageSquare size={22} />
                Get in Touch
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="mailto:contact@bakesandtakes.com" className="gap-3">
                <Mail size={22} />
                Email Us Directly
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
