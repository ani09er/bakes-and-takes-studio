import { Layout } from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "Introducing Bakes and Takes",
    excerpt: "Welcome to our studio blog! We're excited to share our journey as an indie game studio and give you a behind-the-scenes look at our development process.",
    date: "January 2025",
    readTime: "3 min read",
    category: "Announcement",
  },
  {
    id: 2,
    title: "The Making of Reverse Time Puzzle",
    excerpt: "Dive deep into the creative process behind our flagship game. Learn about the unique time-reversal mechanics and the challenges of implementing them.",
    date: "Coming Soon",
    readTime: "5 min read",
    category: "Dev Log",
  },
  {
    id: 3,
    title: "Optimizing Mobile Games for Performance",
    excerpt: "Tips and tricks we've learned about making games run smoothly on a wide range of Android devices.",
    date: "Coming Soon",
    readTime: "7 min read",
    category: "Technical",
  },
];

const Blog = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium mb-3">Stay Updated</p>
            <h1 className="text-4xl sm:text-5xl font-bold font-display text-foreground mb-6">
              Blog & <span className="text-gradient">Updates</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Studio news, development logs, patch notes, and insights into the world of indie game development.
            </p>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            {posts.map((post, index) => (
              <article
                key={post.id}
                className="glass rounded-2xl p-8 hover-lift group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <Badge variant="default">{post.category}</Badge>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {post.readTime}
                    </span>
                  </div>
                </div>
                <h2 className="text-xl md:text-2xl font-bold font-display text-foreground mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <Button variant="ghost" className="gap-2 p-0 h-auto font-medium text-primary hover:text-primary/80 hover:bg-transparent">
                  Read More
                  <ArrowRight size={16} />
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center glass rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold font-display text-foreground mb-4">
              Stay in the Loop
            </h3>
            <p className="text-muted-foreground mb-6">
              Follow us on social media to get the latest updates on our games and studio news.
            </p>
            <Button variant="outline-glow" asChild>
              <a href="/contact">Connect With Us</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
