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

        <div className="space-y-10 text-text-gray leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl font-heading font-bold text-white">
              1.0 Introduction and Acceptance of Terms
            </h2>
            <p>
              These Terms of Service (the "Terms") govern your use of the Fruit Studio website, including all subdomains, pages, and content (the "Website"). The Website is operated by Fruit Studio Ltd (the "Company," "we," "us," or "our"). By accessing, browsing, or using the Website in any way, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you must not use the Website.
            </p>
            <p>
              These Terms apply to all visitors and users (collectively, "Users," "you," or "your"), whether registered or not, and supersede any prior version of these Terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-heading font-bold text-white">
              2. Use of Services
            </h2>
            <p>
              You agree to use our services only for lawful purposes and in accordance with these terms.
            </p>
            <p>
              You must not misuse or interfere with the proper functioning of the site, attempt unauthorized access, or engage in any activity that could harm our platform or users.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-heading font-bold text-white">
              3. Intellectual Property
            </h2>
            <p>
              All content, branding, and materials on this site are the property of Fruit Studio unless otherwise stated.
            </p>
            <p>
              You may not reproduce, distribute, or create derivative works from our content without prior written permission.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-heading font-bold text-white">
              4. Privacy
            </h2>
            <p>
              Your privacy is important to us. We are committed to protecting your personal information and using it only in accordance with our Privacy Policy.
            </p>
            <p>
              Please review our Privacy Policy to understand how we collect, use, and safeguard your data.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-heading font-bold text-white">
              5. Changes to Terms
            </h2>
            <p>
              We reserve the right to update these terms at any time. Changes will be effective immediately upon posting.
            </p>
            <p>
              Continued use of the site after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-heading font-bold text-white">
              6. Contact
            </h2>
            <p>
              If you have any questions about these terms, feel free to reach out to us.
            </p>
            <p>
              Email us at{" "}
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
