import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";

export function ContactCta() {
  return (
    <section className="py-20 md:py-24 bg-white border-t border-[#10243A]/05">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#10243A] text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-xl">
          {/* Subtle blueprint grid overlay */}
          <div className="absolute inset-0 opacity-10 bg-blueprint-grid pointer-events-none" />

          <div className="relative z-10 max-w-2xl space-y-6">
            <span className="font-mono-tech text-xs font-semibold tracking-widest uppercase text-[#8DA8CC]">
              Collaboration & Inquiry
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Have a Problem Worth Solving?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Whether you need dependable administrative software, an AI verification prototype, or custom engineering research, we welcome conversations around practical technology.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#2457D6] hover:bg-[#1A44B0] text-white text-sm font-semibold transition-all shadow-md group"
              >
                <span>Initiate Collaboration</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href="mailto:aurevsolutions@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/20 text-sm font-semibold transition-all"
              >
                <Mail className="w-4 h-4 text-slate-300" />
                <span>aurevsolutions@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
