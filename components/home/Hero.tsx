"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, Layers, ShieldCheck, Mail, Phone } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-10 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-blueprint-grid">
      {/* Ambient background energy glows */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-amber-200/30 via-blue-200/25 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[350px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bold Headline & Vision */}
          <div className="lg:col-span-7 space-y-7 text-left">
            {/* Architectural Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-[#10243A]/10 shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E5A93C] ring-4 ring-amber-100 animate-pulse" />
              <span className="font-mono-tech text-xs font-bold tracking-wider text-[#10243A] uppercase">
                Technology & Applied Innovation
              </span>
            </div>

            {/* Main Architectural Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#10243A] leading-[1.06]">
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
                <span>Explore Our Portfolio</span>
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

            {/* Creative & Professional Technical Metrics */}
            <div className="pt-6 border-t border-[#10243A]/10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-xl">
              <div className="space-y-1">
                <span className="block font-heading text-2xl font-black text-[#10243A]">Applied Rigor</span>
                <span className="text-xs text-[#20252D]/70 block leading-snug">Purpose-built software & automation architecture</span>
              </div>
              <div className="space-y-1">
                <span className="block font-heading text-2xl font-black text-[#2457D6]">Real Utility</span>
                <span className="text-xs text-[#20252D]/70 block leading-snug">Engineered to eliminate actual operational friction</span>
              </div>
              <div className="space-y-1">
                <span className="block font-heading text-2xl font-black text-[#D97706]">Founder-Led</span>
                <span className="text-xs text-[#20252D]/70 block leading-snug">Hands-on systems architecture & execution</span>
              </div>
            </div>

            {/* Prominently Highlighted Direct Contact Bar */}
            <div className="p-4 rounded-2xl bg-white/90 border-2 border-[#2457D6]/20 shadow-sm flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#2457D6] text-white flex items-center justify-center shadow-xs">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono-tech uppercase font-bold text-[#8DA8CC] tracking-wider block">
                    Direct Official Hotline
                  </span>
                  <a
                    href="tel:+919600561199"
                    className="font-heading text-base font-extrabold text-[#10243A] hover:text-[#2457D6] transition-colors"
                  >
                    +91 9600561199
                  </a>
                </div>
              </div>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=aurevsolutions@gmail.com&su=Project%20Inquiry%20-%20AUREV%20SOLUTIONS"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F0F2F5] hover:bg-[#2457D6] text-[#10243A] hover:text-white text-xs font-semibold transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Open in Gmail</span>
              </a>
            </div>
          </div>

          {/* Right Column: Editorial Founder Showcase (Dignified & Prominent) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm sm:max-w-md group">
              {/* Gold & Blue Architectural Glow Behind Portrait */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#E5A93C] via-[#2457D6] to-[#10243A] rounded-3xl blur-xl opacity-25 group-hover:opacity-40 transition-opacity duration-500 -z-10" />

              {/* Founder Editorial Portrait Card */}
              <div className="relative rounded-3xl overflow-hidden bg-[#10243A] border-2 border-white/20 shadow-2xl">
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src="/vishnu-prashanth.jpg"
                    alt="Vishnu Prashanth S — Founder & Chief Technology Officer, AUREV SOLUTIONS"
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  {/* Subtle gradient vignette at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10243A] via-[#10243A]/20 to-transparent" />
                </div>

                {/* Editorial Label Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-6 text-white space-y-1.5 backdrop-blur-xs bg-[#10243A]/60 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <span className="font-mono-tech text-[10px] font-bold uppercase tracking-widest text-[#E5A93C]">
                      Founder & CTO
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  <h2 className="font-heading text-2xl font-black text-white tracking-wide">
                    Vishnu Prashanth S.
                  </h2>
                  <p className="text-xs text-slate-300 leading-snug">
                    Directing technical architecture, software engineering, and applied innovation at AUREV SOLUTIONS.
                  </p>
                </div>
              </div>

              {/* Floating Tech Badge (Maximalism Touch) */}
              <div className="absolute -bottom-4 -left-4 bg-white border border-[#10243A]/10 rounded-2xl p-3 shadow-xl flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-[#D97706] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-heading text-xs font-bold text-[#10243A] block">AUREV Core</span>
                  <span className="font-mono-tech text-[10px] text-[#8DA8CC]">Engineering Directorate</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
