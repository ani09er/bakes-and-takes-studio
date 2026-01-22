import { Layout } from "@/components/layout/Layout";

const Terms = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold font-display text-foreground mb-8">
              Terms of Service
            </h1>
            
            <div className="prose prose-invert max-w-none space-y-8">
              <p className="text-muted-foreground">
                Last updated: January 2025
              </p>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">1. Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using any services provided by Bakes and Takes, including our 
                  website and mobile applications, you agree to be bound by these Terms of Service. 
                  If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">2. Use of Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You agree to use our services only for lawful purposes and in accordance with 
                  these Terms. You agree not to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Use our services in any way that violates applicable laws</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with the proper functioning of our services</li>
                  <li>Reverse engineer or attempt to extract source code</li>
                  <li>Use our services to transmit harmful or malicious content</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">3. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content, features, and functionality of our services, including but not 
                  limited to games, graphics, logos, and software, are owned by Bakes and Takes 
                  and are protected by intellectual property laws.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">4. User Content</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Any content you submit through our services remains your property. However, 
                  by submitting content, you grant us a non-exclusive, royalty-free license 
                  to use, modify, and display such content in connection with our services.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">5. Disclaimers</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our services are provided "as is" without warranties of any kind. We do not 
                  guarantee that our services will be uninterrupted, error-free, or secure.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">6. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To the fullest extent permitted by law, Bakes and Takes shall not be liable 
                  for any indirect, incidental, special, consequential, or punitive damages 
                  arising from your use of our services.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">7. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these Terms at any time. Changes will be 
                  effective immediately upon posting. Your continued use of our services 
                  after changes constitutes acceptance of the modified Terms.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">8. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws 
                  of India, without regard to its conflict of law provisions.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">9. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these Terms, please contact us at:
                </p>
                <p className="text-muted-foreground">
                  Email: contact@bakesandtakes.com<br />
                  Location: Kolkata, India
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
