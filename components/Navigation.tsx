"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, Video, User, Mail, Briefcase } from "lucide-react";
import Image from "next/image";
import Logo from "../app/images/logo.png";
import { useRole } from "@/context/RoleContext";

type NavigationProps = {
  className?: string;
};

export function Navigation({ className = "" }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { role, setRole } = useRole();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Redirect whenever role changes (including first selection)
  useEffect(() => {
    if (role === "brand" && pathname !== "/dashboard") {
      router.push("/dashboard");
    }
    if (role === "creator" && pathname !== "/") {
      router.push("/");
    }
  }, [role, pathname, router]);

  const creatorNavItems = [
    { href: "/", label: "Home", icon: Video },
    { href: "/services", label: "Services", icon: Briefcase },
    { href: "/about", label: "About", icon: User },
    { href: "/contact", label: "Contact", icon: Mail },
  ];

  const brandNavItems = [
    { href: "/dashboard", label: "Dashboard", icon: Video },
    { href: "/campaigns", label: "Campaigns", icon: Briefcase },
    { href: "/partners", label: "Partners", icon: User },
    { href: "/support", label: "Support", icon: Mail },
  ];

  const navItems
