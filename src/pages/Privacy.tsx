import { Layout } from "@/components/layout/Layout";
import { Shield, Database, Globe, Lock, Users, Trash2, Mail, MapPin } from "lucide-react";

const Privacy = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-4">
                Privacy Policy for Causality
              </h1>
              <p className="text-muted-foreground">
                Last Updated: January 28, 2026 | Effective Date: January 28, 2026
              </p>
            </div>

            {/* Summary Card */}
            <div className="glass rounded-2xl p-6 mb-12">
              <h2 className="text-xl font-semibold text-foreground mb-4 text-center">Quick Summary</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="text-center p-3 rounded-lg bg-secondary/50">
                  <span className="text-destructive text-lg">❌</span>
                  <p className="text-muted-foreground mt-1">No Data Collected</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-secondary/50">
                  <span className="text-destructive text-lg">❌</span>
                  <p className="text-muted-foreground mt-1">No Third-Party Sharing</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-secondary/50">
                  <span className="text-destructive text-lg">❌</span>
                  <p className="text-muted-foreground mt-1">No Internet Required</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-secondary/50">
                  <span className="text-primary text-lg">✅</span>
                  <p className="text-muted-foreground mt-1">Safe for Children</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-10">
              {/* Introduction */}
              <section className="glass rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold text-foreground">Introduction</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Welcome to <span className="text-foreground font-medium">Causality</span> ("we", "our", "us", or "the App"). 
                  This Privacy Policy explains how we handle information when you use our mobile game application.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Causality is developed by <span className="text-foreground font-medium">Sayan Mondal</span> and is available on the Google Play Store.
                </p>
              </section>

              {/* Information We Collect */}
              <section className="glass rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Database className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold text-foreground">Information We Collect</h2>
                </div>
                <div className="p-4 rounded-lg bg-primary/10 border border-primary/20 mb-4">
                  <p className="text-foreground font-medium">We Do NOT Collect Any Personal Information</p>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Causality is a completely offline single-player game. We do not collect, store, transmit, or share any personal information.
                </p>
                <p className="text-muted-foreground font-medium mb-3">We do NOT collect:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-muted-foreground">
                  <li className="flex items-center gap-2"><span className="text-destructive">❌</span> Personal identification information</li>
                  <li className="flex items-center gap-2"><span className="text-destructive">❌</span> Location data</li>
                  <li className="flex items-center gap-2"><span className="text-destructive">❌</span> Device identifiers</li>
                  <li className="flex items-center gap-2"><span className="text-destructive">❌</span> Contact information</li>
                  <li className="flex items-center gap-2"><span className="text-destructive">❌</span> Financial information</li>
                  <li className="flex items-center gap-2"><span className="text-destructive">❌</span> Photos, videos, or media files</li>
                  <li className="flex items-center gap-2"><span className="text-destructive">❌</span> Browsing history</li>
                  <li className="flex items-center gap-2"><span className="text-destructive">❌</span> Usage analytics</li>
                  <li className="flex items-center gap-2"><span className="text-destructive">❌</span> Advertising identifiers</li>
                </ul>
              </section>

              {/* Data Storage */}
              <section className="glass rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Lock className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold text-foreground">Data Storage</h2>
                </div>
                <p className="text-foreground font-medium mb-3">Local Storage Only</p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  All game data is stored <span className="text-foreground font-medium">locally on your device only</span>. This includes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li>Game progress (completed levels, stars earned)</li>
                  <li>Player statistics (scores, accuracy, combos)</li>
                  <li>Settings and preferences</li>
                  <li>Match history</li>
                </ul>
                <p className="text-muted-foreground font-medium mb-3">This data:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2"><span className="text-primary">✓</span> Never leaves your device</li>
                  <li className="flex items-center gap-2"><span className="text-primary">✓</span> Is not transmitted over the internet</li>
                  <li className="flex items-center gap-2"><span className="text-primary">✓</span> Is not accessible to us or any third party</li>
                  <li className="flex items-center gap-2"><span className="text-primary">✓</span> Is stored using the device's local storage system</li>
                </ul>
              </section>

              {/* Third-Party Services */}
              <section className="glass rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold text-foreground">Third-Party Services</h2>
                </div>
                <p className="text-foreground font-medium mb-3">No Third-Party Data Collection</p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Causality does <span className="text-foreground font-medium">NOT</span> use any third-party services that collect user data:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2"><span className="text-destructive">❌</span> No analytics services (Google Analytics, Firebase, etc.)</li>
                  <li className="flex items-center gap-2"><span className="text-destructive">❌</span> No advertising networks (AdMob, Facebook Ads, etc.)</li>
                  <li className="flex items-center gap-2"><span className="text-destructive">❌</span> No crash reporting services</li>
                  <li className="flex items-center gap-2"><span className="text-destructive">❌</span> No social media SDKs</li>
                  <li className="flex items-center gap-2"><span className="text-destructive">❌</span> No tracking or attribution services</li>
                </ul>
              </section>

              {/* Internet Connection & Permissions */}
              <div className="grid md:grid-cols-2 gap-6">
                <section className="glass rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Internet Connection</h3>
                  <p className="text-foreground font-medium mb-3">Fully Offline Game</p>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li className="flex items-center gap-2"><span className="text-primary">✓</span> No internet connection required</li>
                    <li className="flex items-center gap-2"><span className="text-primary">✓</span> No data sent to or received from servers</li>
                    <li className="flex items-center gap-2"><span className="text-primary">✓</span> Works identically offline</li>
                  </ul>
                </section>

                <section className="glass rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Permissions</h3>
                  <p className="text-foreground font-medium mb-3">Minimal Permissions</p>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li className="flex items-center gap-2"><span className="text-destructive">❌</span> No camera access</li>
                    <li className="flex items-center gap-2"><span className="text-destructive">❌</span> No microphone access</li>
                    <li className="flex items-center gap-2"><span className="text-destructive">❌</span> No location access</li>
                    <li className="flex items-center gap-2"><span className="text-destructive">❌</span> No contacts access</li>
                  </ul>
                </section>
              </div>

              {/* Children's Privacy */}
              <section className="glass rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold text-foreground">Children's Privacy</h2>
                </div>
                <p className="text-foreground font-medium mb-3">Safe for All Ages</p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Causality is suitable for users of all ages and complies with the Children's Online Privacy Protection Act (COPPA):
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2"><span className="text-primary">✓</span> We do not knowingly collect information from children</li>
                  <li className="flex items-center gap-2"><span className="text-primary">✓</span> We do not require account creation</li>
                  <li className="flex items-center gap-2"><span className="text-primary">✓</span> We do not have chat or social features</li>
                  <li className="flex items-center gap-2"><span className="text-primary">✓</span> The game contains only mild cartoon violence</li>
                </ul>
              </section>

              {/* Data Deletion */}
              <section className="glass rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Trash2 className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold text-foreground">Data Deletion</h2>
                </div>
                <p className="text-foreground font-medium mb-3">How to Delete Your Data</p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Since all data is stored locally on your device, you can delete all game data by:
                </p>
                <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                  <li><span className="text-foreground font-medium">Uninstalling the app</span> - This removes all game data</li>
                  <li><span className="text-foreground font-medium">Clearing app data</span> - Go to Android Settings → Apps → Causality → Clear Data</li>
                </ol>
                <p className="text-muted-foreground mt-4 text-sm italic">
                  No request to us is necessary as we do not have access to your data.
                </p>
              </section>

              {/* Your Rights */}
              <section className="glass rounded-2xl p-6 md:p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">You have the right to:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2"><span className="text-primary">✓</span> <span className="text-foreground font-medium">Access your data</span> - All your data is visible within the app</li>
                  <li className="flex items-center gap-2"><span className="text-primary">✓</span> <span className="text-foreground font-medium">Delete your data</span> - Uninstall the app or clear app data</li>
                  <li className="flex items-center gap-2"><span className="text-primary">✓</span> <span className="text-foreground font-medium">Control your data</span> - Your data stays on your device under your control</li>
                </ul>
              </section>

              {/* Changes & Contact */}
              <section className="glass rounded-2xl p-6 md:p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. Any changes will be reflected in the "Last Updated" date at the top of this page. 
                  Continued use of the App after changes constitutes acceptance of the updated policy.
                </p>
              </section>

              {/* Contact */}
              <section className="glass rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold text-foreground">Contact Us</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or the App, please contact us:
                </p>
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    <span className="text-foreground font-medium">Developer:</span> Sayan Mondal
                  </p>
                  <p className="text-muted-foreground flex items-center gap-2">
                    <Mail size={16} className="text-primary" />
                    <a href="mailto:contact@bakesandtakes.com" className="hover:text-primary transition-colors">
                      contact@bakesandtakes.com
                    </a>
                  </p>
                  <p className="text-muted-foreground flex items-center gap-2">
                    <MapPin size={16} className="text-primary" />
                    India
                  </p>
                </div>
              </section>

              <p className="text-center text-sm text-muted-foreground italic">
                This privacy policy is effective as of January 28, 2026.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
