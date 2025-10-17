"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { LeadCatcher } from "@/components/LeadCatcher";
import { InlineWidget } from "react-calendly";

export function Contact() {
  return (
    <section className="section-padding bg-primary-dark">
      <div className="container-max">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-baloo2 font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-text-gray max-w-3xl mx-auto">
            Ready to transform your content? Let&apos;s discuss your project and
            create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h3 className="text-3xl font-baloo2 font-bold text-white mb-6">
                Let&apos;s Start a Conversation
              </h3>
              <p className="text-text-gray leading-relaxed mb-8">
                Whether you&apos;re looking for professional creative services
                or want to explore brand partnership opportunities, we&apos;re
                here to help you take your content to the next level.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-primary-orange rounded-xl flex items-center justify-center">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-baloo2 font-bold text-white">
                    Email Us
                  </h4>
                  <p className="text-text-gray">hey@thisisfruit.co.uk</p>
                  <a
                    href="mailto:hey@thisisfruit.co.uk"
                    className="inline-block mt-2 py-2 px-4 bg-primary-orange text-white rounded-lg hover:bg-opacity-90 transition-all duration-300"
                  >
                    Send an Email
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-secondary-green rounded-xl flex items-center justify-center">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-baloo2 font-bold text-white">
                    Call Us
                  </h4>
                  <p className="text-text-gray">+447691227509</p>
                  <a
                    href="tel:+447691227509"
                    className="inline-block mt-2 py-2 px-4 bg-secondary-green text-white rounded-lg hover:bg-opacity-90 transition-all duration-300"
                  >
                    Call Now
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-sub-background rounded-xl flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-baloo2 font-bold text-white">
                    Visit Us
                  </h4>
                  <p className="text-text-gray">London, UK</p>
                  <a
                    href="https://maps.google.com/?q=London,+UK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 py-2 px-4 bg-sub-background text-white rounded-lg hover:bg-opacity-90 transition-all duration-300"
                  >
                    View on Map
                  </a>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="card">
              <h4 className="text-lg font-baloo2 font-bold text-white mb-2">
                ⚡ Quick Response Time
              </h4>
              <p className="text-text-gray">
                We typically respond within 24 hours and offer same-day
                consultations for urgent projects.
              </p>
            </div>
          </div>

          {/* Lead Catcher replaces old form */}
          <div className="space-y-8 animate-slide-in-right">
            <LeadCatcher
              variant="creator"
              bookingUrl="https://calendly.com/fruit/intro-call"
            />

            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="text-xl font-bold mb-4 text-black">
                Book a Call
              </h3>
              <InlineWidget url="https://calendly.com/contact-fruitstudio/30min" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
