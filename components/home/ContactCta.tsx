import Link from "next/link";
import { Mail, ArrowRight, Phone } from "lucide-react";

export function ContactCta() {
  return (
    <section className="py-20 md:py-24 bg-white border-t border-[#10243A]/05">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#10243A] text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-10 bg-blueprint-grid pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="font-mono-tech text-xs font-semibold tracking-widest uppercase text-[#E5A93C]">
              Collaboration & Inquiry
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Have a Problem Worth Solving?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Whether you need dependable administrative software, an AI verification prototype, institutional academic systems, or custom engineering research, we welcome conversations around practical technology.
            </p>

            {/* Direct hotline & action buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-[#2457D6] hover:bg-[#1A44B0] text-white text-sm font-semibold transition-all shadow-md group"
              >
                <span>Send Proposal</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=aurevsolutions@gmail.com&su=Project%20Proposal%20-%20AUREV%20SOLUTIONS"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 text-sm font-semibold transition-all"
              >
                <Mail className="w-4 h-4 text-[#E5A93C]" />
                <span>Mail Us</span>
              </a>

              <a
                href="tel:+919600561199"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-[#E5A93C] hover:bg-[#D97706] text-[#10243A] text-sm font-bold transition-all shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>Contact +91 9600561199</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
