import { Layout } from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Smartphone, Clock, ExternalLink } from "lucide-react";
import gameReverseTime from "@/assets/game-reverse-time.jpg";

const games = [
  {
    id: "reverse-time-puzzle",
    title: "Reverse Time Puzzle",
    description: "A mind-bending time manipulation puzzle game where players solve events backward in time. Experience reality in reverse and unlock the secrets hidden in the flow of time.",
    longDescription: "Reverse Time Puzzle challenges players to think differently about cause and effect. Instead of making things happen, you must undo them. Watch events unfold in reverse, piece together the timeline, and solve intricate puzzles that require you to see the world from a unique perspective. With intuitive touch controls optimized for mobile and a hauntingly beautiful soundtrack, this game offers a fresh take on the puzzle genre.",
    image: gameReverseTime,
    platform: "Android",
    status: "In Development",
    features: [
      "Unique time-reversal mechanics",
      "Handcrafted puzzle levels",
      "Atmospheric visuals and sound",
      "Intuitive touch controls",
      "No ads, no pay-to-win",
    ],
  },
];

const Games = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium mb-3">Our Portfolio</p>
            <h1 className="text-4xl sm:text-5xl font-bold font-display text-foreground mb-6">
              Games & <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Discover our portfolio of innovative games that push the boundaries of mobile gaming. 
              Each project is crafted with passion and attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* Games List */}
      <section className="py-20 bg-card">
        <div className="container">
          {games.map((game) => (
            <div
              key={game.id}
              className="max-w-5xl mx-auto glass rounded-2xl overflow-hidden mb-12 last:mb-0"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative aspect-square lg:aspect-auto overflow-hidden">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent lg:bg-gradient-to-r" />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
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
                  <h2 className="text-2xl lg:text-3xl font-bold font-display text-foreground mb-4">
                    {game.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {game.longDescription}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {game.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Button variant="glow" disabled>
                      Coming Soon
                    </Button>
                    <Button variant="outline" disabled className="gap-2">
                      <ExternalLink size={16} />
                      Google Play
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* More Coming */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center glass rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold font-display text-foreground mb-4">
              More Games Coming Soon
            </h3>
            <p className="text-muted-foreground mb-6">
              We're working on exciting new projects. Stay tuned for announcements 
              and follow us on social media to be the first to know!
            </p>
            <Button variant="outline-glow" asChild>
              <a href="/blog">Follow Our Dev Blog</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Games;
