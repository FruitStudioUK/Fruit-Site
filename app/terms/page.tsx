"use client";

export default function TermsAndServices() {
  return (
    <section className="section-padding bg-white text-black">
      <div className="container-max max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6">Terms & Services</h1>

        <p className="mb-4 text-lg text-gray-700">
          Last updated: November 4, 2025
        </p>

        {/* Replace below with your actual terms text */}
        <div className="space-y-6 text-gray-800 leading-relaxed">
          <h2 className="text-2xl font-semibold">1. Introduction</h2>
          <p>
            These Terms & Services govern your use of our website and services.
            By accessing or using our platform, you agree to be bound by these
            terms.
          </p>

          <h2 className="text-2xl font-semibold">2. Use of Services</h2>
          <p>
            You agree to use our services only for lawful purposes and in
            accordance with these terms. You must not misuse or interfere with
            the proper functioning of the site.
          </p>

          <h2 className="text-2xl font-semibold">3. Intellectual Property</h2>
          <p>
            All content, branding, and materials on this site are the property
            of Fruit Studio unless otherwise stated. You may not reproduce,
            distribute, or create derivative works without permission.
          </p>

          <h2 className="text-2xl font-semibold">4. Privacy</h2>
          <p>
            Your privacy is important to us. Please review our Privacy Policy
            for details on how we collect, use, and protect your data.
          </p>

          <h2 className="text-2xl font-semibold">5. Changes to Terms</h2>
          <p>
            We reserve the right to update these terms at any time. Continued
            use of the site after changes constitutes acceptance of the new
            terms.
          </p>

          <h2 className="text-2xl font-semibold">6. Contact</h2>
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
        </div>
      </div>
    </section>
  );
}
