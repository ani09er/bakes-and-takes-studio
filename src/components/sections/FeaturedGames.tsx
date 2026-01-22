import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Smartphone, Clock } from "lucide-react";
import gameReverseTime from "@/assets/game-reverse-time.jpg";

const games = [
  {
    id: "reverse-time-puzzle",
    title: "Reverse Time Puzzle",
    description: "A mind-bending time manipulation puzzle game where players solve events backward in time. Experience reality in reverse and unlock the secrets hidden in the flow of time.",
    image: gameReverseTime,
    platform: "Android",
    status: "In Development",
    featured: true,
  },
];

export const FeaturedGames = () => {
  return (
    <section className="py-24 bg-background relative">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-3">Our Games</p>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our portfolio of innovative games that push the boundaries of mobile gaming.
          </p>
        </div>

        {/* Featured Game */}
        <div className="max-w-5xl mx-auto mb-12">
          {games.filter(g => g.featured).map((game) => (
            <div
              key={game.id}
              className="glass rounded-2xl overflow-hidden hover-lift group"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative aspect-square md:aspect-auto overflow-hidden">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent md:bg-gradient-to-r" />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="default" className="gap-1">
                      <Smartphone size={12} />
                      {game.platform}
                    </Badge>
                    <Badge variant="secondary" className="gap-1">
                      <Clock size={12} />
                      {game.status}
                    </Badge>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-4">
                    {game.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {game.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="glow" asChild>
                      <Link to="/games">
                        Learn More
                        <ArrowRight size={18} className="ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline-glow" size="lg" asChild>
            <Link to="/games" className="gap-2">
              View All Projects
              <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
