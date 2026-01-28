import { Layout } from "@/components/layout/Layout";
import { Shield, Database, Globe, Lock, Users, Trash2, Mail, MapPin, Smartphone, Key, FileText } from "lucide-react";

const Privacy = () => {
  return (
    <Layout>
      <article className="pt-32 pb-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <header className="text-center mb-12 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-6">
                <FileText size={16} />
                <span>Legal Document</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-4">
                Privacy Policy for <span className="text-gradient">Causality</span>
              </h1>
              <p className="text-muted-foreground">
                <time dateTime="2026-01-28">Last Updated: January 28, 2026</time> | Effective Date: January 28, 2026
              </p>
            </header>

            {/* Quick Summary Card */}
            <div className="glass rounded-2xl p-6 mb-12 animate-fade-in">
              <h2 className="text-xl font-semibold text-foreground mb-6 text-center">Quick Summary</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: Database, label: "No Data Collected", status: false },
                  { icon: Globe, label: "No Third-Party Sharing", status: false },
                  { icon: Smartphone, label: "No Internet Required", status: false },
                  { icon: Users, label: "Safe for Children", status: true },
                ].map((item, i) => (
                  <div key={i} className="text-center p-4 rounded-xl bg-secondary/50 hover:bg-secondary/70 transition-colors">
                    <item.icon className={`w-8 h-8 mx-auto mb-2 ${item.status ? 'text-primary' : 'text-muted-foreground'}`} />
                    <span className={`text-2xl ${item.status ? 'text-primary' : 'text-destructive'}`}>
                      {item.status ? '✓' : '✗'}
                    </span>
                    <p className="text-sm text-muted-foreground mt-1">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              {/* Introduction */}
              <section className="glass rounded-2xl p-6 md:p-8 animate-fade-in">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold text-foreground">Introduction</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Welcome to <strong className="text-foreground">Causality</strong> ("we", "our", "us", or "the App"). This Privacy Policy explains how we handle information when you use our mobile game application.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Causality is developed by <strong className="text-foreground">Sayan Mondal</strong> and is available on the Google Play Store.
                </p>
              </section>

              {/* Information We Collect */}
              <section className="glass rounded-2xl p-6 md:p-8 animate-fade-in">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <Database className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold text-foreground">Information We Collect</h2>
                </div>
                <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 mb-6">
                  <h3 className="text-lg font-medium text-foreground">We Do NOT Collect Any Personal Information</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Causality is a completely offline single-player game. We do not collect, store, transmit, or share any personal information.
                </p>
                <p className="text-foreground font-medium mb-3">We do NOT collect:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {[
                    "Personal identification information",
                    "Location data",
                    "Device identifiers",
                    "Contact information",
                    "Financial information",
                    "Photos, videos, or media files",
                    "Browsing history",
                    "Usage analytics",
                    "Advertising identifiers"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-muted-foreground">
                      <span className="text-destructive">✗</span> {item}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Data Storage */}
              <section className="glass rounded-2xl p-6 md:p-8 animate-fade-in">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <Lock className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold text-foreground">Data Storage</h2>
                </div>
                <h3 className="text-lg font-medium text-foreground mb-3">Local Storage Only</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  All game data is stored <strong className="text-foreground">locally on your device only</strong>. This includes:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-6">
                  <li>Game progress (completed levels, stars earned)</li>
                  <li>Player statistics (scores, accuracy, combos)</li>
                  <li>Settings and preferences</li>
                  <li>Match history</li>
                </ul>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Never leaves your device",
                    "Not transmitted over the internet",
                    "Not accessible to us or third parties",
                    "Stored using device's local storage"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 p-3 rounded-lg bg-secondary/50 text-sm text-muted-foreground">
                      <span className="text-primary">✓</span> {item}
                    </div>
                  ))}
                </div>
              </section>

              {/* Third-Party Services */}
              <section className="glass rounded-2xl p-6 md:p-8 animate-fade-in">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold text-foreground">Third-Party Services</h2>
                </div>
                <h3 className="text-lg font-medium text-foreground mb-3">No Third-Party Data Collection</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Causality does <strong className="text-foreground">NOT</strong> use any third-party services that collect user data:
                </p>
                <ul className="space-y-2">
                  {[
                    "No analytics services (Google Analytics, Firebase, etc.)",
                    "No advertising networks (AdMob, Facebook Ads, etc.)",
                    "No crash reporting services",
                    "No social media SDKs",
                    "No tracking or attribution services"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-muted-foreground">
                      <span className="text-destructive">✗</span> {item}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Internet & Permissions Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                <section className="glass rounded-2xl p-6 animate-fade-in">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                      <Smartphone className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-xl font-semibold text-foreground">Internet Connection</h2>
                  </div>
                  <h3 className="text-base font-medium text-foreground mb-3">Fully Offline Game</h3>
                  <ul className="space-y-2">
                    {[
                      "No internet connection required",
                      "No data sent to or from servers",
                      "Works identically offline"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="text-primary">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="glass rounded-2xl p-6 animate-fade-in">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                      <Key className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-xl font-semibold text-foreground">Permissions</h2>
                  </div>
                  <h3 className="text-base font-medium text-foreground mb-3">Minimal Permissions</h3>
                  <ul className="space-y-2">
                    {[
                      "No camera access",
                      "No microphone access",
                      "No location access",
                      "No contacts access"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="text-destructive">✗</span> {item}
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              {/* Children's Privacy */}
              <section className="glass rounded-2xl p-6 md:p-8 animate-fade-in">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold text-foreground">Children's Privacy</h2>
                </div>
                <h3 className="text-lg font-medium text-foreground mb-3">Safe for All Ages</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Causality is suitable for users of all ages and complies with the Children's Online Privacy Protection Act (COPPA):
                </p>
                <ul className="space-y-2">
                  {[
                    "We do not knowingly collect information from children",
                    "We do not require account creation",
                    "We do not have chat or social features",
                    "The game contains only mild cartoon violence"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-muted-foreground">
                      <span className="text-primary">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Data Deletion */}
              <section className="glass rounded-2xl p-6 md:p-8 animate-fade-in">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <Trash2 className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold text-foreground">Data Deletion</h2>
                </div>
                <h3 className="text-lg font-medium text-foreground mb-3">How to Delete Your Data</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Since all data is stored locally on your device, you can delete all game data by:
                </p>
                <ol className="space-y-3">
                  <li className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50">
                    <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-medium shrink-0">1</span>
                    <div>
                      <strong className="text-foreground">Uninstalling the app</strong>
                      <p className="text-sm text-muted-foreground">This removes all game data</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50">
                    <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-medium shrink-0">2</span>
                    <div>
                      <strong className="text-foreground">Clearing app data</strong>
                      <p className="text-sm text-muted-foreground">Go to Android Settings → Apps → Causality → Clear Data</p>
                    </div>
                  </li>
                </ol>
                <p className="text-sm text-muted-foreground mt-4 italic">
                  No request to us is necessary as we do not have access to your data.
                </p>
              </section>

              {/* Your Rights */}
              <section className="glass rounded-2xl p-6 md:p-8 animate-fade-in">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">You have the right to:</p>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { title: "Access your data", desc: "All your data is visible within the app" },
                    { title: "Delete your data", desc: "Uninstall the app or clear app data" },
                    { title: "Control your data", desc: "Your data stays on your device" }
                  ].map((item, i) => (
                    <div key={i} className="p-4 rounded-xl bg-secondary/50 text-center">
                      <h3 className="font-medium text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Changes to Policy */}
              <section className="glass rounded-2xl p-6 md:p-8 animate-fade-in">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. Any changes will be reflected in the "Last Updated" date at the top of this page. Continued use of the App after changes constitutes acceptance of the updated policy.
                </p>
              </section>

              {/* Contact */}
              <section className="glass rounded-2xl p-6 md:p-8 animate-fade-in">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold text-foreground">Contact Us</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or the App, please contact us:
                </p>
                <address className="not-italic space-y-3">
                  <p className="flex items-center gap-3 text-muted-foreground">
                    <span className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                      <Users size={16} className="text-primary" />
                    </span>
                    <span><strong className="text-foreground">Developer:</strong> Sayan Mondal</span>
                  </p>
                  <p className="flex items-center gap-3 text-muted-foreground">
                    <span className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                      <Mail size={16} className="text-primary" />
                    </span>
                    <a href="mailto:contact@bakesandtakes.com" className="text-primary hover:underline">contact@bakesandtakes.com</a>
                  </p>
                  <p className="flex items-center gap-3 text-muted-foreground">
                    <span className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                      <MapPin size={16} className="text-primary" />
                    </span>
                    <span>India</span>
                  </p>
                </address>
              </section>

              {/* Footer */}
              <footer className="text-center pt-8">
                <p className="text-sm text-muted-foreground">
                  This privacy policy is effective as of January 28, 2026.
                </p>
              </footer>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default Privacy;
