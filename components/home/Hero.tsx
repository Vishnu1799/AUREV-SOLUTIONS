"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Phone, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden bg-blueprint-grid">
      {/* Ambient background energy glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-amber-200/20 via-blue-200/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-8 text-left">
          
          {/* Main Architectural Headline */}
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#10243A] leading-[1.05]">
            ENGINEERING IDEAS INTO{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2457D6] via-[#1A44B0] to-[#E5A93C] inline-block">
              INTELLIGENT
            </span>{" "}
            SOLUTIONS.
          </h1>

          {/* Core Brand Narrative */}
          <p className="text-lg sm:text-xl text-[#20252D]/85 leading-relaxed max-w-3xl font-normal">
            AUREV SOLUTIONS explores and develops practical technology products through software engineering, artificial intelligence, intelligent automation, and engineering innovation.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#10243A] hover:bg-[#2457D6] text-white text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-xl group"
            >
              <span>Explore Our Work</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white hover:bg-[#F0F2F5] text-[#10243A] border border-[#10243A]/15 text-sm font-semibold transition-all duration-200 shadow-xs"
            >
              <Sparkles className="w-4 h-4 text-[#D97706]" />
              <span>Send Proposal</span>
            </Link>
          </div>

          {/* Contact & Mail Us Cards (Clean, separate, direct actions) */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 max-w-xl">
            {/* Contact (Phone) -> Direct Call Trigger */}
            <a
              href="tel:+919600561199"
              className="flex-1 flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#10243A]/10 hover:border-[#2457D6]/40 hover:shadow-md transition-all group"
              aria-label="Call +91 9600561199"
            >
              <div className="w-12 h-12 rounded-xl bg-[#E5A93C]/15 text-[#D97706] flex items-center justify-center flex-shrink-0 group-hover:bg-[#2457D6] group-hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="font-mono-tech text-[10px] font-bold uppercase tracking-wider text-[#8DA8CC] block">
                  Contact
                </span>
                <span className="font-heading text-base font-extrabold text-[#10243A] group-hover:text-[#2457D6] transition-colors truncate block">
                  +91 9600561199
                </span>
              </div>
            </a>

            {/* Mail Us (Gmail) -> Direct Gmail Web Trigger */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=aurevsolutions@gmail.com&su=Project%20Inquiry%20-%20AUREV%20SOLUTIONS"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#10243A]/10 hover:border-[#2457D6]/40 hover:shadow-md transition-all group"
              aria-label="Email aurevsolutions@gmail.com"
            >
              <div className="w-12 h-12 rounded-xl bg-[#2457D6]/10 text-[#2457D6] flex items-center justify-center flex-shrink-0 group-hover:bg-[#2457D6] group-hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="font-mono-tech text-[10px] font-bold uppercase tracking-wider text-[#8DA8CC] block">
                  Mail Us
                </span>
                <span className="font-heading text-sm sm:text-base font-extrabold text-[#10243A] group-hover:text-[#2457D6] transition-colors truncate block">
                  aurevsolutions@gmail.com
                </span>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
