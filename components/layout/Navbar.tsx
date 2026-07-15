"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Roadmap & Resources", href: "/roadmap" },
    { name: "Contact", href: "/#contact" },
  ];

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("/#") && pathname === "/") {
      const id = href.substring(2);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const isLightPage = true;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isLightPage
            ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-200"
            : "bg-slate-950/80 backdrop-blur-md shadow-lg border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2.5">
              <img
                src="/logos/nuraf_icon_cropped.png"
                alt="NURAF Icon"
                className="h-10 w-auto object-contain"
              />
              <span className="text-2xl font-black tracking-[0.2em] bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent font-sans">
                NURAF
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-purple-500 ${
                  pathname === link.href
                    ? "text-purple-500 font-semibold"
                    : isLightPage
                    ? "text-slate-600 hover:text-slate-900"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => handleLinkClick("/#contact")}
              className="relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-medium text-white transition-all duration-300 bg-purple-600 rounded-full hover:bg-purple-700 active:scale-95 group shadow-lg shadow-purple-600/30"
            >
              <span className="absolute top-0 right-0 w-3 h-3 bg-purple-400 rounded-full animate-ping"></span>
              <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-purple-300 rounded-full"></span>
              <span className="relative flex items-center gap-1">
                Get a Demo <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isLightPage
                  ? "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  : "text-slate-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`md:hidden px-4 pt-2 pb-6 space-y-2 border-t shadow-2xl ${
            isLightPage
              ? "bg-white border-slate-200"
              : "bg-slate-950 border-white/5"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => handleLinkClick(link.href)}
              className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                pathname === link.href
                  ? "bg-purple-600/10 text-purple-500 font-semibold"
                  : isLightPage
                  ? "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  : "text-slate-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 px-4">
            <Link
              href="/#contact"
              onClick={() => handleLinkClick("/#contact")}
              className="w-full inline-flex items-center justify-center px-6 py-3 font-medium text-white bg-purple-600 rounded-xl hover:bg-purple-700 active:scale-98 shadow-lg shadow-purple-600/20"
            >
              Get a Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
