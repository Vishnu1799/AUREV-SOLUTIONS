"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/SocialIcons";
import { Mail, Phone, Copy, Check, MessageSquare, ExternalLink, Inbox } from "lucide-react";

export default function ContactPage() {
  const [isCopied, setIsCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("aurevsolutions@gmail.com");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  const gmailComposeUrl =
    "https://mail.google.com/mail/?view=cm&fs=1&to=aurevsolutions@gmail.com&su=Project%20Proposal%20-%20AUREV%20SOLUTIONS&body=Hello%20AUREV%20SOLUTIONS%20Team%2C%0A%0AI%20would%20like%20to%20propose%20a%20project%20collaboration.%0A%0AProject%20Scope%20%2F%20Requirements%3A%0A%0AMy%20Contact%20Details%3A%0AName%3A%0APhone%20Number%3A%0A";

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF8]">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="pt-14 pb-12 sm:pt-20 sm:pb-16 bg-blueprint-grid border-b border-[#10243A]/05">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center sm:text-left">
            <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-[#10243A]">
              Send Us Your Proposal
            </h1>

            <p className="text-base sm:text-lg text-[#20252D]/80 max-w-2xl leading-relaxed">
              We do not ask you to fill long website forms. Simply send your project brief directly via email to our team at{" "}
              <strong className="text-[#10243A] font-bold">aurevsolutions@gmail.com</strong> or call us directly.
            </p>
          </div>
        </section>

        {/* Primary Direct Actions */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* Two Primary Action Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Card 1: Mail Us (Gmail Direct Compose) */}
              <div className="tactile-card rounded-3xl p-8 sm:p-10 flex flex-col justify-between border-2 border-[#2457D6]/20 shadow-xl bg-white space-y-6">
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#2457D6] text-white flex items-center justify-center shadow-md">
                    <Mail className="w-7 h-7" />
                  </div>
                  
                  <div>
                    <span className="font-mono-tech text-xs uppercase tracking-widest text-[#8DA8CC] font-bold block">
                      Mail Us
                    </span>
                    <h2 className="font-heading text-2xl font-black text-[#10243A] mt-1">
                      Send Proposal via Email
                    </h2>
                  </div>

                  <p className="text-sm text-[#20252D]/80 leading-relaxed">
                    Clicking below directly launches your Gmail with a prepared project proposal draft addressed to our team inbox.
                  </p>

                  <div className="p-3.5 rounded-2xl bg-[#FAFAF8] border border-black/5 font-mono-tech text-xs sm:text-sm font-bold text-[#10243A] select-all flex items-center justify-between">
                    <span>aurevsolutions@gmail.com</span>
                    <button
                      type="button"
                      onClick={copyEmail}
                      className="inline-flex items-center gap-1 px-3 py-1 text-xs font-mono-tech rounded-lg bg-white border border-black/10 hover:bg-[#F0F2F5] transition-colors"
                      aria-label="Copy email"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700 font-bold">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-slate-500" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <a
                    href={gmailComposeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 w-full py-4 rounded-2xl bg-[#2457D6] hover:bg-[#1A44B0] text-white font-extrabold text-base transition-all shadow-md hover:shadow-xl group"
                  >
                    <span>Open in Gmail</span>
                    <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>

                  <a
                    href="mailto:aurevsolutions@gmail.com?subject=Project%20Proposal%20-%20AUREV%20SOLUTIONS"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-2xl bg-[#F0F2F5] hover:bg-black/5 text-[#10243A] font-bold text-xs uppercase tracking-wider transition-colors"
                  >
                    <span>Open Default Mail Client</span>
                  </a>
                </div>
              </div>

              {/* Card 2: Contact (Direct Phone Call) */}
              <div className="tactile-card rounded-3xl p-8 sm:p-10 flex flex-col justify-between border-2 border-[#E5A93C]/30 shadow-xl bg-white space-y-6">
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#E5A93C] text-[#10243A] flex items-center justify-center shadow-md">
                    <Phone className="w-7 h-7" />
                  </div>
                  
                  <div>
                    <span className="font-mono-tech text-xs uppercase tracking-widest text-[#8DA8CC] font-bold block">
                      Contact
                    </span>
                    <h2 className="font-heading text-2xl font-black text-[#10243A] mt-1">
                      Direct Phone Call
                    </h2>
                  </div>

                  <p className="text-sm text-[#20252D]/80 leading-relaxed">
                    Have an urgent technical inquiry or immediate requirement? Tap below to call our official company line directly from your phone.
                  </p>

                  <div className="p-3.5 rounded-2xl bg-[#FAFAF8] border border-black/5 font-mono-tech text-base sm:text-lg font-black text-[#10243A] select-all">
                    +91 9600561199
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="tel:+919600561199"
                    className="inline-flex items-center justify-center gap-2.5 w-full py-4 rounded-2xl bg-[#10243A] hover:bg-[#2457D6] text-white font-extrabold text-base transition-all shadow-md hover:shadow-xl group"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call +91 9600561199</span>
                  </a>
                </div>
              </div>

            </div>

            {/* How Proposals Reach the Team (Clear & Transparent) */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#FAFAF8] border border-black/5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Inbox className="w-5 h-5" />
              </div>
              <div className="space-y-1 text-xs sm:text-sm text-[#20252D]/80 leading-relaxed">
                <strong className="block text-[#10243A] font-bold text-sm sm:text-base">
                  How Inquiries Reach Our Inbox
                </strong>
                <p>
                  Every email sent goes straight to our official inbox at{" "}
                  <strong className="text-[#10243A]">aurevsolutions@gmail.com</strong>. The company owner and team simply log in to Gmail with that address to view, organize, and reply directly to client emails.
                </p>
              </div>
            </div>

            {/* Social Channels */}
            <div className="tactile-card rounded-3xl p-6 sm:p-8 bg-white border border-black/5 space-y-4">
              <div className="flex items-center gap-2 text-sm font-heading font-extrabold text-[#10243A]">
                <MessageSquare className="w-4 h-4 text-[#2457D6]" />
                <span>Founder Social & Code Channels</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a
                  href="https://github.com/Vishnu1799"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-[#FAFAF8] hover:bg-[#F0F2F5] transition-colors border border-black/5"
                >
                  <div className="flex items-center gap-2.5">
                    <GithubIcon className="w-5 h-5 text-[#10243A]" />
                    <span className="font-bold text-xs text-[#10243A]">GitHub</span>
                  </div>
                  <span className="font-mono-tech text-xs text-[#8DA8CC]">@Vishnu1799</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/vishnu-prashanth-s-576937382/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-[#FAFAF8] hover:bg-[#F0F2F5] transition-colors border border-black/5"
                >
                  <div className="flex items-center gap-2.5">
                    <LinkedinIcon className="w-5 h-5 text-[#2457D6]" />
                    <span className="font-bold text-xs text-[#10243A]">LinkedIn</span>
                  </div>
                  <span className="font-mono-tech text-xs text-[#8DA8CC]">Profile</span>
                </a>

                <a
                  href="https://www.instagram.com/vishnuu.prime/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-[#FAFAF8] hover:bg-[#F0F2F5] transition-colors border border-black/5"
                >
                  <div className="flex items-center gap-2.5">
                    <InstagramIcon className="w-5 h-5 text-pink-600" />
                    <span className="font-bold text-xs text-[#10243A]">Instagram</span>
                  </div>
                  <span className="font-mono-tech text-xs text-[#8DA8CC]">@vishnuu.prime</span>
                </a>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
