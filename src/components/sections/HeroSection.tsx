import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Gamepad2, MessageSquare } from "lucide-react";
import { ParticleBackground } from "@/components/ParticleBackground";
import heroBg from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Particle Animation */}
      <ParticleBackground />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-50 pointer-events-none" />

      {/* Content */}
      <div className="container relative z-10 text-center py-20 pt-32">
        <div className="max-w-4xl mx-auto space-y-8 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Independent Game Studio
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-tight">
            <span className="text-foreground">Crafting </span>
            <span className="text-gradient">Innovative Games</span>
            <br />
            <span className="text-foreground">& Interactive Experiences</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Bakes and Takes — Where creativity meets cutting-edge technology. 
            We build immersive mobile experiences that push the boundaries of gameplay.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button variant="glow" size="xl" asChild>
              <Link to="/games" className="gap-3">
                <Gamepad2 size={22} />
                Our Games
              </Link>
            </Button>
            <Button variant="outline-glow" size="xl" asChild>
              <Link to="/contact" className="gap-3">
                <MessageSquare size={22} />
                Contact Us
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-lg mx-auto">
            {[
              { value: "1+", label: "Games" },
              { value: "2024", label: "Founded" },
              { value: "100%", label: "Passion" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
