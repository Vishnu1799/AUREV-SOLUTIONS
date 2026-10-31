"use client";

import Link from "next/link";
import { ArrowRight, Layers, ShieldCheck, Cpu, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden bg-blueprint-grid">
      {/* Ambient gradient glow in background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Messaging */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Live Status Pill Tag (Matching Reference) */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#10243A]/10 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono-tech text-[11px] font-semibold tracking-wider text-[#10243A] uppercase">
                Founder-Led Engineering & Innovation
              </span>
            </div>

            {/* Main Architectural Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#10243A] leading-[1.08]">
              ENGINEERING IDEAS INTO{" "}
              <span className="text-[#2457D6] inline-block">INTELLIGENT</span>{" "}
              SOLUTIONS.
            </h1>

            {/* Subtitle / Positioning Statement */}
            <p className="text-base sm:text-lg text-[#20252D]/80 leading-relaxed max-w-2xl">
              AUREV SOLUTIONS explores and develops practical technology products through software engineering, artificial intelligence, intelligent automation, and engineering innovation.
            </p>

            {/* Call to Actions (Matching Reference Buttons) */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#2457D6] hover:bg-[#1A44B0] text-white text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg group"
              >
                <span>Explore Our Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#F0F2F5] text-[#10243A] border border-[#10243A]/15 text-sm font-semibold transition-all duration-200 shadow-xs"
              >
                <Layers className="w-4 h-4 text-[#2457D6]" />
                <span>Discover Products</span>
              </Link>
            </div>

            {/* Credibility highlights */}
            <div className="pt-6 border-t border-[#10243A]/08 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <span className="block font-heading text-2xl font-bold text-[#10243A]">11</span>
                <span className="font-mono-tech text-xs text-[#8DA8CC]">Engineered Initiatives</span>
              </div>
              <div>
                <span className="block font-heading text-2xl font-bold text-[#10243A]">100%</span>
                <span className="font-mono-tech text-xs text-[#8DA8CC]">Truthful Statuses</span>
              </div>
              <div>
                <span className="block font-heading text-2xl font-bold text-[#10243A]">Zero</span>
                <span className="font-mono-tech text-xs text-[#8DA8CC]">Fabricated Claims</span>
              </div>
            </div>
          </div>

          {/* Right Column: Tactile Engineering Visual Anchor (Matching Reference Composition) */}
          <div className="lg:col-span-5 relative">
            {/* Outer Tactile Container */}
            <div className="relative mx-auto max-w-md bg-white border border-[#10243A]/10 rounded-3xl p-6 shadow-[0_20px_50px_rgba(16,36,58,0.08)] space-y-5">
              {/* Top Bar with Live Telemetry Metric (99% Metric Card from Reference) */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#F0F2F5]/70 border border-[#10243A]/05">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#2457D6] flex items-center justify-center text-white shadow-xs">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-heading text-xs font-bold text-[#10243A]">AUREV AI Verification</div>
                    <div className="font-mono-tech text-[10px] text-[#8DA8CC]">Payment Safety Engine</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-heading text-lg font-extrabold text-[#2457D6]">99.8%</div>
                  <div className="font-mono-tech text-[9px] text-emerald-600 font-medium">Verified Consistency</div>
                </div>
              </div>

              {/* Central Interactive Engineering Flow Display */}
              <div className="p-4 rounded-2xl bg-[#FAFAF8] border border-[#10243A]/08 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono-tech font-semibold text-[#10243A] uppercase tracking-wider text-[10px]">
                    System Architecture Rule
                  </span>
                  <span className="inline-flex items-center gap-1 font-mono-tech text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3" /> Active Protocol
                  </span>
                </div>
                <p className="text-xs font-medium text-[#10243A] italic bg-white p-3 rounded-xl border border-black/5 shadow-2xs">
                  &ldquo;Never retry a payment blindly. Verify the previous transaction before initiating another payment attempt.&rdquo;
                </p>
                
                {/* Visual Pipeline Steps */}
                <div className="grid grid-cols-3 gap-2 pt-1 font-mono-tech text-[10px]">
                  <div className="bg-white p-2 rounded-lg border border-black/5 text-center">
                    <span className="block text-slate-400">Step 01</span>
                    <span className="font-semibold text-[#10243A]">Detect Drop</span>
                  </div>
                  <div className="bg-[#2457D6]/10 p-2 rounded-lg border border-[#2457D6]/20 text-center">
                    <span className="block text-[#2457D6]">Step 02</span>
                    <span className="font-semibold text-[#2457D6]">Interrogate</span>
                  </div>
                  <div className="bg-emerald-50 p-2 rounded-lg border border-emerald-200 text-center">
                    <span className="block text-emerald-600">Step 03</span>
                    <span className="font-semibold text-emerald-800">Safe Action</span>
                  </div>
                </div>
              </div>

              {/* Bottom Tactile Metallic Badge (Matching "Decided Quality" in Reference) */}
              <div className="flex items-center justify-between pt-1">
                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-gradient-to-r from-slate-100 to-slate-200 border border-slate-300 shadow-2xs">
                  <Cpu className="w-4 h-4 text-[#10243A]" />
                  <span className="font-heading text-xs font-bold text-[#10243A]">
                    Engineered Precision
                  </span>
                </div>
                <div className="font-mono-tech text-[11px] text-[#8DA8CC]">
                  Ref: #2894 Delivered
                </div>
              </div>
            </div>

            {/* Subtle decorative floating badges */}
            <div className="hidden sm:block absolute -top-4 -right-4 px-3.5 py-2 bg-white rounded-2xl border border-black/10 shadow-lg font-mono-tech text-xs font-semibold text-[#10243A]">
              ⚡ React 19 + Next.js
            </div>
            <div className="hidden sm:block absolute -bottom-4 -left-4 px-3.5 py-2 bg-[#10243A] text-white rounded-2xl shadow-xl font-mono-tech text-xs font-medium">
              ★ Commercially Verified
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
