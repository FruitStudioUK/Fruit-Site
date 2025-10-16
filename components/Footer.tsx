"use client";

import Image from "next/image";
import Logo from "../app/images/logo.png";
import Link from "next/link";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";
import { useRole } from "@/context/RoleContext";

type FooterProps = {
  className?: string;
};

export function Footer({ className = "" }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const { role } = useRole();

  // --- FIX: fallback to localStorage if role is null ---
  let effectiveRole: "creator" | "brand" | null = role;
  if (!effectiveRole && typeof window !== "undefined") {
    const stored = localStorage.getItem("userRole") as "creator" | "brand" | null;
    if (stored) effectiveRole = stored;
  }

  // Role‑specific content
  const tagline =
    effectiveRole === "creator"
      ? "Empowering content creators with professional creative services and meaningful brand partnerships."
      : "Helping brands connect with creators through impactful campaigns and strategic partnerships.";

  const quickLinks =
    effectiveRole === "creator"
      ? [
          { href: "/", label: "Home" },
          { href: "/services", label: "Services" },
          { href: "/about", label: "About" },
          { href: "/contact", label: "Join Us" },
        ]
      : [
          { href: "/overview", label: "Overview" },
          { href: "/benefits", label: "Benefits" },
          { href: "/about-us", label: "About Us" },
          { href: "/partner-support", label: "Partner Support" },
        ];

  const services =
    effectiveRole === "creator"
      ? [
          "Sponsorship Management",
          "Monetisation Support",
          "Video Editing",
          "SEO Optimisation",
          "Growth Strategy",
        ]
      : [
          "Campaign Management",
          "Influencer Discovery",
          "Performance Analytics",
          "Partnership Strategy",
          "Creative Direction",
        ];

  return (
    <footer
      className={`bg-primary-dark border-t border-sub-background/30 ${className}`}
    >
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-20 h-20 flex items-center justify-center">
                <Image
                  src={Logo}
                  alt="Fruit logo"
                  width={80}
                  height={80}
                  className="rounded-lg"
                />
              </div>
              <span className="text-2xl font-baloo2 font-bold text-white">
                fruit.
              </span>
            </div>
            <p className="text-text-gray leading-relaxed">{tagline}</p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/fruit.uk"
                className="text-text-gray hover:text-primary-orange transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-baloo2 font-bold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-text-gray hover:text-primary-orange transition-colors duration-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-baloo2 font-bold text-white mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-text-gray">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-baloo2 font-bold text-white mb-4">
              Contact
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-orange" />
                <span className="text-text-gray">hey@thisisfruit.co.uk</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-orange" />
                <span className="text-text-gray">+447691227509</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary-orange" />
                <span className="text-text-gray">London, UK</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-sub-background/30 mt-12 pt-8 text-center">
          <p className="text-text-gray">
            © {currentYear} Fruit. All rights reserved. |
            <Link
              href="/privacy"
              className="hover:text-primary-orange transition-colors duration-300 ml-1"
            >
              Privacy Policy
            </Link>{" "}
            |
            <Link
              href="/terms"
              className="hover:text-primary-orange transition-colors duration-300 ml-1"
            >
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
