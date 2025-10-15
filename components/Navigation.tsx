"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Video,
  User,
  Mail,
  Briefcase,
  RefreshCcw,
} from "lucide-react";
import Image from "next/image";
import Logo from "../app/images/logo.png";
import { useRole } from "@/context/RoleContext";

type NavigationProps = {
  className?: string; // ✅ allow external classes
};

export function Navigation({ className = "" }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { setRole } = useRole();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home", icon: Video },
    { href: "/services", label: "Services", icon: Briefcase },
    { href: "/about", label: "About", icon: User },
    { href: "/contact", label: "Contact", icon: Mail },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary-dark/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      } ${className}`}
    >
      <div className="container-max">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-20 h-20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Image
  src={Logo}
  alt="logo"
  width={80}
  height={80}
  priority
  className="rounded-lg"
/>

              <Video className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-baloo2 font-bold text-white">
              fruit.
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-sub-background/20 ${
                  isActive(href)
                    ? "text-primary-orange bg-sub-background/20"
                    : "text-white hover:text-primary-orange"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="font-medium">{label}</span>
              </Link>
            ))}

            {/* Switch Role Button */}
            <button
              onClick={() => setRole(null)}
              className="flex items-center space-x-1 px-3 py-2 rounded-lg border border-white text-white hover:bg-white hover:text-black transition"
            >
              <RefreshCcw className="w-4 h-4" />
              <span className="font-medium">Switch Role</span>
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/contact" className="btn-primary">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-sub-background/20 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-primary-dark/95 backdrop-blur-md border-t border-sub-background/30">
            <div className="py-4 space-y-2">
              {navItems.map(({ href, label, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 mx-4 rounded-lg transition-all duration-300 ${
                    isActive(href)
                      ? "text-primary-orange bg-sub-background/20"
                      : "text-white hover:text-primary-orange hover:bg-sub-background/20"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{label}</span>
                </Link>
              ))}

              {/* Switch Role Button (Mobile) */}
              <div className="px-4">
                <button
                  onClick={() => {
                    setRole(null);
                    setIsOpen(false);
                  }}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-lg border border-white text-white hover:bg-white hover:text-black transition"
                >
                  <RefreshCcw className="w-5 h-5" />
                  <span className="font-medium">Switch Role</span>
                </button>
              </div>

              <div className="px-4 pt-2">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary w-full text-center block"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
