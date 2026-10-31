import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Mail, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF8]">
      <Navbar />

      <main className="flex-1 flex flex-col justify-center py-20 sm:py-28 bg-blueprint-grid">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-12">
          
          {/* Simple Clean Title */}
          <div className="text-center space-y-3">
            <h1 className="font-heading text-4xl sm:text-5xl font-black tracking-tight text-[#10243A]">
              Contact Us
            </h1>
          </div>

          {/* Just the Mail ID and Phone Number */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Phone Card */}
            <a
              href="tel:+919600561199"
              className="tactile-card rounded-3xl p-8 flex flex-col items-center justify-center text-center space-y-4 hover:border-[#2457D6] hover:shadow-xl transition-all group bg-white border border-[#10243A]/10"
              aria-label="Call +91 9600561199"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#E5A93C]/15 text-[#D97706] flex items-center justify-center group-hover:bg-[#2457D6] group-hover:text-white transition-colors">
                <Phone className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <span className="font-mono-tech text-xs uppercase tracking-widest text-[#8DA8CC] font-bold block">
                  Contact
                </span>
                <span className="font-heading text-xl sm:text-2xl font-black text-[#10243A] group-hover:text-[#2457D6] transition-colors block">
                  +91 9600561199
                </span>
              </div>
            </a>

            {/* Email Card */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=aurevsolutions@gmail.com&su=Project%20Proposal%20-%20AUREV%20SOLUTIONS"
              target="_blank"
              rel="noopener noreferrer"
              className="tactile-card rounded-3xl p-8 flex flex-col items-center justify-center text-center space-y-4 hover:border-[#2457D6] hover:shadow-xl transition-all group bg-white border border-[#10243A]/10"
              aria-label="Email aurevsolutions@gmail.com"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#2457D6]/10 text-[#2457D6] flex items-center justify-center group-hover:bg-[#2457D6] group-hover:text-white transition-colors">
                <Mail className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <span className="font-mono-tech text-xs uppercase tracking-widest text-[#8DA8CC] font-bold block">
                  Mail Us
                </span>
                <span className="font-heading text-sm sm:text-base font-black text-[#10243A] group-hover:text-[#2457D6] transition-colors break-all block">
                  aurevsolutions@gmail.com
                </span>
              </div>
            </a>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
