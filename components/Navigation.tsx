'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, Video, User, Mail, Briefcase } from 'lucide-react';
import Image from 'next/image';
import Logo from '../app/images/logo.png';
import { useRole } from '@/context/RoleContext';

type NavigationProps = {
  className?: string;
};

export function Navigation({ className = '' }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [navVisible, setNavVisible] = useState(false); // NEW: fade-in on mount
  const pathname = usePathname();
  const router = useRouter();
  const { role, setRole } = useRole();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mount fade-in (slight delay to sync with page)
  useEffect(() => {
    const t = setTimeout(() => setNavVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const handleRoleChange = (newRole: 'creator' | 'brand') => {
    setRole(newRole);
    if (newRole === 'creator') {
      router.push('/');
    } else {
      router.push('/dashboard');
    }
  };

  const creatorNavItems = [
    { href: '/', label: 'Home', icon: Video },
    { href: '/services', label: 'Services', icon: Briefcase },
    { href: '/about', label: 'About', icon: User },
    { href: '/contact', label: 'Join Us', icon: Mail },
  ];

  const brandNavItems = [
    { href: '/dashboard', label: 'Overview', icon: Video },
    { href: '/campaigns', label: 'Benefits', icon: Briefcase },
    { href: '/partners', label: 'About Us', icon: User },
    { href: '/support', label: 'Partner Support', icon: Mail },
  ];

  const navItems = role === 'creator' ? creatorNavItems : brandNavItems;
  const isActive = (href: string) => pathname === href;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-primary-dark/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      } ${navVisible ? 'animate-fade-in' : 'opacity-0'} ${className}`}
    >
      <div className="container-max">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-20 h-20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <Image
                src={Logo}
                alt="logo"
                width={80}
                height={80}
                priority
                className={`rounded-lg ${navVisible ? 'animate-pulse-once' : ''}`}
              />
              <Video className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-baloo2 font-bold text-white">
              fruit.
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(({ href, label, icon: Icon }, idx) => (
              <Link
                key={href}
                href={href}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-sub-background/20 ${
                  isActive(href)
                    ? role === 'creator'
                      ? 'text-primary-orange bg-sub-background/20'
                      : 'text-secondary-green bg-sub-background/20'
                    : role === 'creator'
                      ? 'text-white hover:text-primary-orange'
                      : 'text-white hover:text-secondary-green'
                } ${navVisible ? 'animate-slide-up' : ''}`}
                style={{ animationDelay: `${idx * 80}ms` }} // stagger
              >
                <Icon className="w-4 h-4" />
                <span className="font-medium">{label}</span>
              </Link>
            ))}

            {/* Role Switch */}
            <div
              className={`relative flex bg-sub-background rounded-full p-1 w-48 ${
                navVisible ? 'animate-slide-up' : ''
              }`}
              style={{ animationDelay: `${navItems.length * 80}ms` }}
            >
              <span
                className={`absolute top-1 bottom-1 w-1/2 rounded-full transition-all duration-300
                  ${role === 'creator' ? 'left-1 bg-primary-orange' : 'right-1 bg-secondary-green'}`}
              />
              <button
                onClick={() => handleRoleChange('creator')}
                className={`relative z-10 flex-1 px-4 py-2 rounded-full text-sm font-medium transition ${
                  role === 'creator' ? 'text-white' : 'text-text-gray'
                }`}
              >
                Creator
              </button>
              <button
                onClick={() => handleRoleChange('brand')}
                className={`relative z-10 flex-1 px-4 py-2 rounded-full text-sm font-medium transition ${
                  role === 'brand' ? 'text-white' : 'text-text-gray'
                }`}
              >
                Brand
              </button>
            </div>
          </div>

          {/* CTA */}
          <div className={`hidden md:block ${navVisible ? 'animate-slide-up' : ''}`} style={{ animationDelay: '240ms' }}>
            <Link
              href={role === 'creator' ? '/contact' : '/support'}
              className={`btn-primary ${
                role === 'creator'
                  ? 'bg-primary-orange hover:bg-primary-orange/90'
                  : 'bg-secondary-green hover:bg-secondary-green/90'
              }`}
            >
              {role === 'creator' ? 'Get Started' : 'Book a call'}
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
          <div className="md:hidden absolute top-full left-0 right-0 bg-primary-dark/95 backdrop-blur-md border-t border-sub-background/30 animate-fade-in">
            <div className="py-4 space-y-2">
              {navItems.map(({ href, label, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 mx-4 rounded-lg transition-all duration-300 ${
                    isActive(href)
                      ? role === 'creator'
                        ? 'text-primary-orange bg-sub-background/20'
                        : 'text-secondary-green bg-sub-background/20'
                      : role === 'creator'
                        ? 'text-white hover:text-primary-orange hover:bg-sub-background/20'
                        : 'text-white hover:text-secondary-green hover:bg-sub-background/20'
                  } animate-slide-up`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{label}</span>
                </Link>
              ))}

              {/* Role Switch (Mobile) */}
              <div className="px-4">
                <div className="relative flex bg-sub-background rounded-full p-1 w-full animate-slide-up">
                  <span
                    className={`absolute top-1 bottom-1 w-1/2 rounded-full transition-all duration-300
                      ${role === 'creator' ? 'left-1 bg-primary-orange' : 'right-1 bg-secondary-green'}`}
                  />
                  <button
                    onClick={() => {
                      handleRoleChange('creator');
                      setIsOpen(false);
                    }}
                    className={`relative z-10 flex-1 px-4 py-2 rounded-full text-sm font-medium transition ${
                      role === 'creator' ? 'text-white' : 'text-text-gray'
                    }`}
                  >
                    Creator
                  </button>
                  <button
                    onClick={() => {
                      handleRoleChange('brand');
                      setIsOpen(false);
                    }}
                    className={`relative z-10 flex-1 px-4 py-2 rounded-full text-sm font-medium transition ${
                      role === 'brand' ? 'text-white' : 'text-text-gray'
                    }`}
                  >
                    Brand
                  </button>
                </div>
              </div>

              <div className="px-4 pt-2 animate-slide-up">
                <Link
                  href={role === 'creator' ? '/contact' : '/support'}
                  onClick={() => setIsOpen(false)}
                  className={`btn-primary w-full text-center block ${
                    role === 'creator'
                      ? 'bg-primary-orange hover:bg-primary-orange/90'
                      : 'bg-secondary-green hover:bg-secondary-green/90'
                  }`}
                >
                  {role === 'creator' ? 'Get Started' : 'Book a call'}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
