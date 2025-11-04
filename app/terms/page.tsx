"use client";

export default function TermsAndServices() {
  return (
    <section className="section-padding bg-primary-dark text-text-white font-body">
      <div className="container-max max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-heading font-bold mb-6 text-white">
          Terms & Services
        </h1>

        <p className="mb-8 text-lg text-text-gray">
          Last updated: November 4, 2025
        </p>

        <div className="space-y-8 text-text-gray leading-relaxed">
          <section>
            <h2 className="text-2xl font-heading font-bold text-white mb-2">
              1. Introduction
            </h2>
            <p>
              These Terms & Services govern your use of our website and services.
              By accessing or using our platform, you agree to be bound by these
              terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-white mb-2">
              2. Use of Services
            </h2>
            <p>
              You agree to use our services only for lawful purposes and in
              accordance with these terms. You must not misuse or interfere with
              the proper functioning of the site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-white mb-2">
              3. Intellectual Property
            </h2>
            <p>
              All content, branding, and materials on this site are the property
              of Fruit Studio unless otherwise stated. You may not reproduce,
              distribute, or create derivative works without permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-white mb-2">
              4. Privacy
            </h2>
            <p>
              Your privacy is important to us. Please review our Privacy Policy
              for details on how we collect, use, and protect your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-white mb-2">
              5. Changes to Terms
            </h2>
            <p>
              We reserve the right to update these terms at any time. Continued
              use of the site after changes constitutes acceptance of the new
              terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-white mb-2">
              6. Contact
            </h2>
            <p>
              If you have any questions about these terms, contact us at{" "}
              <a
                href="mailto:hey@thisisfruit.co.uk"
                className="text-primary-orange underline"
              >
                hey@thisisfruit.co.uk
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
