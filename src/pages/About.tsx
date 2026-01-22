import { Layout } from "@/components/layout/Layout";
import { 
  Lightbulb, 
  Zap, 
  Heart, 
  Target, 
  Users, 
  Rocket 
} from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Creativity",
    description: "We believe in pushing creative boundaries and exploring unique gameplay concepts that haven't been done before.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Every game we build is optimized to run smoothly on all devices without compromising on visual quality or gameplay.",
  },
  {
    icon: Heart,
    title: "User Experience",
    description: "Player satisfaction is at the heart of everything we create. We obsess over every interaction and feedback.",
  },
  {
    icon: Target,
    title: "Originality",
    description: "We don't follow trends blindly. We create unique experiences that stand out in the crowded mobile gaming market.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We value our players' feedback and actively engage with our community to improve our games.",
  },
  {
    icon: Rocket,
    title: "Innovation",
    description: "We constantly explore new technologies and mechanics to deliver cutting-edge gaming experiences.",
  },
];

const timeline = [
  {
    year: "2024",
    title: "Studio Founded",
    description: "Bakes and Takes was established as an independent game studio in Kolkata, India.",
  },
  {
    year: "2024",
    title: "First Project",
    description: "Started development on Reverse Time Puzzle, our flagship time-manipulation puzzle game.",
  },
  {
    year: "2025",
    title: "Growing Forward",
    description: "Expanding our team and portfolio with new innovative game concepts.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium mb-3">About Us</p>
            <h1 className="text-4xl sm:text-5xl font-bold font-display text-foreground mb-6">
              Building the Future of{" "}
              <span className="text-gradient">Mobile Gaming</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Bakes and Takes is an independent creative game studio founded with a singular vision: 
              to craft innovative games and interactive experiences that captivate players worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="glass rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At Bakes and Takes, we're driven by a passion for creating games that matter. 
                We believe mobile gaming deserves the same level of innovation, creativity, and 
                polish as any other gaming platform.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Founded in Kolkata, India, we combine local talent with global ambition to 
                deliver experiences that push the boundaries of what's possible on mobile devices. 
                Every game we create is built with care, optimized for performance, and designed 
                to provide hours of engaging gameplay.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-3">What Drives Us</p>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground">
              Our Core Values
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="glass p-6 rounded-xl hover-lift group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-3">Our Journey</p>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground">
              Studio Timeline
            </h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />
              
              {timeline.map((item, index) => (
                <div
                  key={item.year + item.title}
                  className={`relative flex items-start gap-8 mb-12 last:mb-0 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1.5 md:-translate-x-2 mt-1.5" />
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"
                  }`}>
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
                      {item.year}
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
