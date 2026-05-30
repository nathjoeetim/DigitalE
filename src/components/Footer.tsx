"use client";

import Link from "next/link";
import { Mail, Phone, Link2, Globe, Linkedin, Instagram, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-deepspace border-t border-white/5 pt-16 pb-8 overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none" />
      <div className="absolute -top-[150px] left-1/2 -translate-x-1/2 w-[500px] h-[300px] ambient-glow-blue opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
        {/* Brand Column */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-cyan-electric flex items-center justify-center font-bold text-base text-white">
              D
            </div>
            <span className="font-bold text-lg text-white">Digital Equity Africa</span>
          </div>
          <p className="text-muted-text text-sm leading-relaxed">
            Strategic solutions for inclusive, equitable growth across governments, businesses, and communities. Closing the digital divide through scalable local innovation.
          </p>
        </div>

        {/* Quick Links Column */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-semibold text-sm tracking-wider uppercase">Navigation</h4>
          <ul className="flex flex-col gap-2.5 text-sm text-muted-text">
            <li>
              <Link href="/" className="hover:text-white transition-colors duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition-colors duration-200">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white transition-colors duration-200">
                Our Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition-colors duration-200">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Ecosystem Programs */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-semibold text-sm tracking-wider uppercase">Ecosystem Initiatives</h4>
          <ul className="flex flex-col gap-2.5 text-sm text-muted-text">
            <li>
              <a
                href="https://www.kidstechfest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200 flex items-center gap-1.5"
              >
                Kids Tech Fest <Link2 className="w-3.5 h-3.5" />
              </a>
            </li>
            <li>
              <a
                href="https://www.myfuturemindai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200 flex items-center gap-1.5"
              >
                My Future Mind AI <Link2 className="w-3.5 h-3.5" />
              </a>
            </li>
            <li>
              <a
                href="https://www.aicamp.africa"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200 flex items-center gap-1.5"
              >
                AI Camp Africa <Link2 className="w-3.5 h-3.5" />
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-semibold text-sm tracking-wider uppercase">Reach Out</h4>
          <div className="flex flex-col gap-3 text-sm text-muted-text">
            <a href="mailto:info@digitalequity.africa" className="hover:text-white transition-colors flex items-center gap-2">
              <Mail className="w-4 h-4 text-cyan-electric" />
              info@digitalequity.africa
            </a>
            <a href="tel:+2348028576034" className="hover:text-white transition-colors flex items-center gap-2">
              <Phone className="w-4 h-4 text-cyan-electric" />
              +234 802 857 6034
            </a>
            <div className="flex items-center gap-3 mt-2">
              <a href="#" className="p-2 rounded-lg bg-slate-surface hover:bg-primary/20 text-muted-text hover:text-white transition-all" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-surface hover:bg-primary/20 text-muted-text hover:text-white transition-all" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-surface hover:bg-primary/20 text-muted-text hover:text-white transition-all" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-text">
        <p>&copy; {new Date().getFullYear()} Digital Equity Africa. All Rights Reserved.</p>
        <p className="flex items-center gap-1">
          <Globe className="w-3.5 h-3.5 text-cyan-electric" /> Powered by Africa&apos;s Digital Operating System
        </p>
      </div>
    </footer>
  );
}
