"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Phone, Mail, CheckCircle2, ShieldCheck, Cpu } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-blueprint-grid">
      {/* Ambient background energy glows */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-amber-200/25 via-blue-200/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Bold Headline & Vision */}
          <div className="lg:col-span-7 space-y-7 text-left">
            {/* Main Architectural Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#10243A] leading-[1.08]">
              ENGINEERING IDEAS INTO{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2457D6] via-[#1A44B0] to-[#E5A93C] inline-block">
                INTELLIGENT
              </span>{" "}
              SOLUTIONS.
            </h1>

            {/* Core Brand Narrative */}
            <p className="text-base sm:text-lg text-[#20252D]/85 leading-relaxed max-w-2xl font-normal">
              AUREV SOLUTIONS explores and develops practical technology products through software engineering, artificial intelligence, intelligent automation, and engineering innovation.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-[#10243A] hover:bg-[#2457D6] text-white text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-xl group"
              >
                <span>Explore Our Work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white hover:bg-[#F0F2F5] text-[#10243A] border border-[#10243A]/15 text-sm font-semibold transition-all duration-200 shadow-xs"
              >
                <Sparkles className="w-4 h-4 text-[#D97706]" />
                <span>Send Proposal</span>
              </Link>
            </div>

            {/* Separate Contact & Mail Us Cards (Side-by-side, perfectly mobile responsive) */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 max-w-xl">
              {/* Card 1: Contact (Phone) -> Direct Call Trigger */}
              <a
                href="tel:+919600561199"
                className="flex-1 flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-[#10243A]/10 hover:border-[#2457D6]/40 hover:shadow-md transition-all group"
                aria-label="Call +91 9600561199"
              >
                <div className="w-11 h-11 rounded-xl bg-[#E5A93C]/15 text-[#D97706] flex items-center justify-center flex-shrink-0 group-hover:bg-[#2457D6] group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="font-mono-tech text-[10px] font-bold uppercase tracking-wider text-[#8DA8CC] block">
                    Contact
                  </span>
                  <span className="font-heading text-sm sm:text-base font-extrabold text-[#10243A] group-hover:text-[#2457D6] transition-colors truncate block">
                    +91 9600561199
                  </span>
                </div>
              </a>

              {/* Card 2: Mail Us (Gmail) -> Direct Gmail Web Trigger */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=aurevsolutions@gmail.com&su=Project%20Inquiry%20-%20AUREV%20SOLUTIONS"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-[#10243A]/10 hover:border-[#2457D6]/40 hover:shadow-md transition-all group"
                aria-label="Email aurevsolutions@gmail.com"
              >
                <div className="w-11 h-11 rounded-xl bg-[#2457D6]/10 text-[#2457D6] flex items-center justify-center flex-shrink-0 group-hover:bg-[#2457D6] group-hover:text-white transition-colors">
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

          {/* Right Column: Architectural Engineering Composition (Maximalist, Tactile, No Person Image) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md space-y-5">
              
              {/* Primary Tactile Card: Engineering Capabilities */}
              <div className="tactile-card rounded-3xl p-7 bg-white border-2 border-[#10243A]/08 shadow-xl space-y-6">
                
                {/* Header Badge */}
                <div className="flex items-center justify-between pb-4 border-b border-black/5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-[#10243A] text-white flex items-center justify-center">
                      <Cpu className="w-4 h-4 text-[#E5A93C]" />
                    </div>
                    <div>
                      <span className="font-heading text-xs font-bold text-[#10243A] block">
                        Core Systems
                      </span>
                      <span className="font-mono-tech text-[10px] text-[#8DA8CC]">
                        Applied Technology
                      </span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 font-mono-tech text-[10px] text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Active Pipeline
                  </span>
                </div>

                {/* Engineering Highlights */}
                <div className="space-y-3.5">
                  <div className="p-3.5 rounded-2xl bg-[#FAFAF8] border border-black/5 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#2457D6] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-heading text-xs font-bold text-[#10243A] block">
                        Institutional & Departmental Software
                      </span>
                      <p className="text-[11px] text-[#20252D]/75 leading-relaxed">
                        Data consistency, batch isolation, and administrative ledgers.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#FAFAF8] border border-black/5 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#2457D6] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-heading text-xs font-bold text-[#10243A] block">
                        Intelligent AI Systems & Automation
                      </span>
                      <p className="text-[11px] text-[#20252D]/75 leading-relaxed">
                        Transaction verification engines, agentic workflows, and safe state machines.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#FAFAF8] border border-black/5 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#2457D6] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-heading text-xs font-bold text-[#10243A] block">
                        Hardware Engineering & IoT
                      </span>
                      <p className="text-[11px] text-[#20252D]/75 leading-relaxed">
                        Microcontroller sensor telemetry and sustainable produce cooling chambers.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl bg-[#2457D6] hover:bg-[#1A44B0] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                  >
                    <span>Initiate Project Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
