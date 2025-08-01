import Link from "next/link";
import {
  Video,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark border-t border-sub-background/30">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary-orange rounded-lg flex items-center justify-center">
                <Video className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-baloo2 font-bold text-white">
                CreatorHub
              </span>
            </div>
            <p className="text-text-gray leading-relaxed">
              Empowering content creators with professional creative services
              and meaningful brand partnerships.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-text-gray hover:text-primary-orange transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-text-gray hover:text-primary-orange transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-text-gray hover:text-primary-orange transition-colors duration-300"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-text-gray hover:text-primary-orange transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-baloo2 font-bold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-text-gray hover:text-primary-orange transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-text-gray hover:text-primary-orange transition-colors duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-text-gray hover:text-primary-orange transition-colors duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-text-gray hover:text-primary-orange transition-colors duration-300"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-text-gray hover:text-primary-orange transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-baloo2 font-bold text-white mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <span className="text-text-gray">Video Editing</span>
              </li>
              <li>
                <span className="text-text-gray">Audio Enhancement</span>
              </li>
              <li>
                <span className="text-text-gray">Color Correction</span>
              </li>
              <li>
                <span className="text-text-gray">Brand Partnerships</span>
              </li>
              <li>
                <span className="text-text-gray">Content Strategy</span>
              </li>
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
                <span className="text-text-gray">hello@creatorhub.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-orange" />
                <span className="text-text-gray">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary-orange" />
                <span className="text-text-gray">Los Angeles, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-sub-background/30 mt-12 pt-8 text-center">
          <p className="text-text-gray">
            © {currentYear} CreatorHub. All rights reserved. |
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
