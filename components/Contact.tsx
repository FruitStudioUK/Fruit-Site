"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", service: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
                  <p className="text-text-gray">contact.fruitstudio@gmail.com</p>
                  <a
                    href="mailto:contact.fruitstudio@gmail.com"
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
                  <p className="text-text-gray">+1 (555) 123-4567</p>
                  <a
                    href="tel:+15551234567"
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
                  <p className="text-text-gray">London, United Kingdom</p>
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

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <form onSubmit={handleSubmit} className="card">
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-white font-medium mb-2"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-sub-background/30 border border-sub-background/50 rounded-lg text-white placeholder-text-gray focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-white font-medium mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-sub-background/30 border border-sub-background/50 rounded-lg text-white placeholder-text-gray focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-white font-medium mb-2"
                  >
                    Service Interest *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-sub-background/30 border border-sub-background/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a service</option>
                    <option value="video-editing">Video Editing</option>
                    <option value="audio-enhancement">Audio Enhancement</option>
                    <option value="color-correction">Color Correction</option>
                    <option value="brand-partnerships">
                      Brand Partnerships
                    </option>
                    <option value="growth-strategy">Growth Strategy</option>
                    <option value="full-package">Full Package</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-white font-medium mb-2"
                  >
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-sub-background/30 border border-sub-background/50 rounded-lg text-white placeholder-text-gray focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                    isSubmitted
                      ? "bg-secondary-green text-white"
                      : "btn-primary"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="loading-spinner"></div>
                      <span>Sending...</span>
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
