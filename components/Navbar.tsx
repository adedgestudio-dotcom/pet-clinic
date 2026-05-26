"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <span className="text-4xl">🐾</span>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-[#0D6E6E]">
                Krishna Pet
              </span>
              <span className="text-xs text-[#6B7280]">
                கிருஷ்ணா பெட் கிளினிக்
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#1C1C1E] hover:text-[#0D6E6E] transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/919444182357?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20for%20my%20pet"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F4A940] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#e09830] transition-all hover:scale-105"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#0D6E6E] p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[#1C1C1E] hover:text-[#0D6E6E] transition-colors font-medium py-2"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/919444182357?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20for%20my%20pet"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F4A940] text-white px-6 py-2.5 rounded-full font-semibold text-center hover:bg-[#e09830] transition-all"
              >
                Book Appointment
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
