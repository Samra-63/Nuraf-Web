"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Footer() {
  const pathname = usePathname();
  const isLightPage = true;

  return (
    <footer
      className={`border-t py-16 transition-colors duration-300 ${
        isLightPage
          ? "bg-slate-50 border-slate-200 text-slate-600"
          : "bg-slate-950 border-white/5 text-slate-400"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo Column */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2.5">
              <img
                src="/logos/nuraf_icon_cropped.png"
                alt="NURAF Icon"
                className="h-8 w-auto object-contain"
              />
              <span className="text-xl font-black tracking-[0.2em] bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent font-sans">
                NURAF
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              Empowering your vision with premium artificial intelligence, web/mobile architectures, and intelligent workflows.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3
              className={`text-sm font-semibold uppercase tracking-wider mb-4 ${
                isLightPage ? "text-slate-800" : "text-white"
              }`}
            >
              Company
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-purple-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-purple-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-purple-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-purple-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Corporate Column */}
          <div>
            <h3
              className={`text-sm font-semibold uppercase tracking-wider mb-4 ${
                isLightPage ? "text-slate-800" : "text-white"
              }`}
            >
              Resources
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/roadmap" className="hover:text-purple-500 transition-colors">
                  Evolution & Roadmap
                </Link>
              </li>
              <li>
                <Link href="/roadmap#resources" className="hover:text-purple-500 transition-colors">
                  Technical Papers
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-purple-500 transition-colors">
                  Client Success
                </Link>
              </li>
              <li>
                <span className="cursor-not-allowed opacity-50">Careers</span>
              </li>
            </ul>
          </div>

          {/* Follow Us Column */}
          <div>
            <h3
              className={`text-sm font-semibold uppercase tracking-wider mb-4 ${
                isLightPage ? "text-slate-800" : "text-white"
              }`}
            >
              Follow Us
            </h3>
            <div className="flex gap-4">
              <a
                href="#"
                className={`p-2.5 rounded-full transition-colors ${
                  isLightPage
                    ? "bg-slate-200/50 hover:bg-slate-200 text-slate-700"
                    : "bg-white/5 hover:bg-white/10 text-white"
                }`}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a
                href="#"
                className={`p-2.5 rounded-full transition-colors ${
                  isLightPage
                    ? "bg-slate-200/50 hover:bg-slate-200 text-slate-700"
                    : "bg-white/5 hover:bg-white/10 text-white"
                }`}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a
                href="#"
                className={`p-2.5 rounded-full transition-colors ${
                  isLightPage
                    ? "bg-slate-200/50 hover:bg-slate-200 text-slate-700"
                    : "bg-white/5 hover:bg-white/10 text-white"
                }`}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a
                href="#"
                className={`p-2.5 rounded-full transition-colors ${
                  isLightPage
                    ? "bg-slate-200/50 hover:bg-slate-200 text-slate-700"
                    : "bg-white/5 hover:bg-white/10 text-white"
                }`}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/><path d="m10 15 5-3-5-3z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div
          className={`mt-16 pt-8 border-t text-center text-xs flex flex-col md:flex-row justify-between items-center gap-4 ${
            isLightPage ? "border-slate-200 text-slate-400" : "border-white/5 text-slate-600"
          }`}
        >
          <p>© {new Date().getFullYear()} NURAF. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-purple-500 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-purple-500 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
