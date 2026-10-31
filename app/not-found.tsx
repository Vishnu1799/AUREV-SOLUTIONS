import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF8]">
      <Navbar />

      <main className="flex-1 flex items-center justify-center py-24 px-4 bg-blueprint-grid">
        <div className="tactile-card rounded-3xl p-10 max-w-md w-full text-center space-y-6">
          <div className="w-16 h-16 rounded-3xl bg-[#F0F2F5] mx-auto flex items-center justify-center text-[#2457D6]">
            <Compass className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="font-mono-tech text-xs text-[#8DA8CC] uppercase">
              Error 404
            </span>
            <h1 className="font-heading text-3xl font-extrabold text-[#10243A]">
              Route Not Found
            </h1>
            <p className="text-xs sm:text-sm text-[#20252D]/75 leading-relaxed">
              The project or page you requested does not exist or has been restricted to internal review.
            </p>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#10243A] hover:bg-[#2457D6] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
