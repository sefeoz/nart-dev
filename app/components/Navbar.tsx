'use client';

import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { loginWithRedirect } = useAuth0();

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'py-4 bg-white/10 backdrop-blur-md border-b border-white/10' 
                : 'py-6 bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative group">
            <span className="text-2xl font-bold text-white">
              Nart Developer
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white/50
                         group-hover:w-full transition-all duration-300"></span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {[
              { title: 'Ana Sayfa', href: '/' },
              { title: 'Projelerimiz', href: '/products' },
              { title: 'Hakkımızda', href: '/about' },
              { title: 'İletişim', href: '/contact' },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white rounded-full
                         hover:bg-white/10 transition-all duration-300"
              >
                {item.title}
              </Link>
            ))}
            <button 
              onClick={() => loginWithRedirect()}
              className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white rounded-full
                       hover:bg-white/10 transition-all duration-300 ml-2"
            >
              Giriş Yap
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full
                     bg-white/10 hover:bg-white/20 transition-colors duration-300"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden absolute left-0 right-0 px-4 pt-2 pb-4 mt-2
                     bg-white/10 backdrop-blur-md border-t border-white/10
                     transition-all duration-300
                     ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
        >
          <div className="space-y-1">
            {[
              { title: 'Ana Sayfa', href: '/' },
              { title: 'Ürünlerimiz', href: '/products' },
              { title: 'Hakkımızda', href: '/about' },
              { title: 'İletişim', href: '/contact' },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="block px-4 py-3 text-base font-medium text-white/80 hover:text-white
                         hover:bg-white/10 rounded-lg transition-all duration-300"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
} 