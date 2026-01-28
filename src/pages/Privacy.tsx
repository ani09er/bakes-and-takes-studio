import { Layout } from "@/components/layout/Layout";

const Privacy = () => {
  return (
    <Layout>
      <article className="pt-32 pb-20 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto prose prose-invert">
            <header className="mb-12">
              <h1 className="text-4xl font-bold font-display text-foreground mb-2">
                Privacy Policy for Causality
              </h1>
              <p className="text-muted-foreground">
                <time dateTime="2026-01-28">Last Updated: January 28, 2026</time> | Effective Date: January 28, 2026
              </p>
            </header>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Welcome to Causality ("we", "our", "us", or "the App"). This Privacy Policy explains how we handle information when you use our mobile game application.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Causality is developed by Sayan Mondal and is available on the Google Play Store.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Information We Collect</h2>
              <h3 className="text-xl font-medium text-foreground mb-2">We Do NOT Collect Any Personal Information</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Causality is a completely offline single-player game. We do not collect, store, transmit, or share any personal information.
              </p>
              <p className="text-muted-foreground mb-2">We do NOT collect:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Personal identification information (name, email, phone number)</li>
                <li>Location data</li>
                <li>Device identifiers</li>
                <li>Contact information</li>
                <li>Financial information</li>
                <li>Photos, videos, or media files</li>
                <li>Browsing history</li>
                <li>Usage analytics</li>
                <li>Advertising identifiers</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Data Storage</h2>
              <h3 className="text-xl font-medium text-foreground mb-2">Local Storage Only</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All game data is stored locally on your device only. This includes:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
                <li>Game progress (completed levels, stars earned)</li>
                <li>Player statistics (scores, accuracy, combos)</li>
                <li>Settings and preferences</li>
                <li>Match history</li>
              </ul>
              <p className="text-muted-foreground mb-2">This data:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Never leaves your device</li>
                <li>Is not transmitted over the internet</li>
                <li>Is not accessible to us or any third party</li>
                <li>Is stored using the device's local storage system</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Third-Party Services</h2>
              <h3 className="text-xl font-medium text-foreground mb-2">No Third-Party Data Collection</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Causality does NOT use any third-party services that collect user data:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>No analytics services (Google Analytics, Firebase, etc.)</li>
                <li>No advertising networks (AdMob, Facebook Ads, etc.)</li>
                <li>No crash reporting services</li>
                <li>No social media SDKs</li>
                <li>No tracking or attribution services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Internet Connection</h2>
              <h3 className="text-xl font-medium text-foreground mb-2">Fully Offline Game</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Causality is designed to work completely offline:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>No internet connection is required to play</li>
                <li>No data is sent to or received from servers</li>
                <li>The game functions identically with or without network access</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Permissions</h2>
              <h3 className="text-xl font-medium text-foreground mb-2">Minimal Permissions</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Causality requests no special permissions from your device:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>No camera access</li>
                <li>No microphone access</li>
                <li>No location access</li>
                <li>No contacts access</li>
                <li>No storage access (beyond app's own data)</li>
                <li>No phone access</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Children's Privacy</h2>
              <h3 className="text-xl font-medium text-foreground mb-2">Safe for All Ages</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Causality is suitable for users of all ages and complies with the Children's Online Privacy Protection Act (COPPA):
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>We do not knowingly collect information from children</li>
                <li>We do not require account creation</li>
                <li>We do not have chat or social features</li>
                <li>The game contains only mild cartoon violence</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Data Deletion</h2>
              <h3 className="text-xl font-medium text-foreground mb-2">How to Delete Your Data</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Since all data is stored locally on your device, you can delete all game data by:
              </p>
              <ol className="list-decimal pl-6 space-y-1 text-muted-foreground">
                <li><strong>Uninstalling the app</strong> - This removes all game data</li>
                <li><strong>Clearing app data</strong> - Go to Android Settings → Apps → Causality → Clear Data</li>
              </ol>
              <p className="text-muted-foreground mt-4">
                No request to us is necessary as we do not have access to your data.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Data Security</h2>
              <h3 className="text-xl font-medium text-foreground mb-2">Your Data is Secure</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Because all data is stored locally and never transmitted:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>There is no risk of data breaches from our servers (we have no servers)</li>
                <li>Your game progress cannot be accessed by anyone else</li>
                <li>No account credentials exist that could be compromised</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li><strong>Access your data</strong> - All your data is visible within the app</li>
                <li><strong>Delete your data</strong> - Uninstall the app or clear app data</li>
                <li><strong>Control your data</strong> - Your data stays on your device under your control</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be reflected in the "Last Updated" date at the top of this page. Continued use of the App after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or the App, please contact us:
              </p>
              <address className="not-italic text-muted-foreground">
                <p><strong>Developer:</strong> Sayan Mondal</p>
                <p><strong>Email:</strong> <a href="mailto:contact@bakesandtakes.com" className="text-primary hover:underline">contact@bakesandtakes.com</a></p>
                <p><strong>Location:</strong> India</p>
              </address>
            </section>

            <footer className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                This privacy policy is effective as of January 28, 2026.
              </p>
            </footer>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default Privacy;
