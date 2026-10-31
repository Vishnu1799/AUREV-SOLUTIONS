"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/SocialIcons";
import { Mail, Send, CheckCircle2, MessageSquare, AlertCircle } from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    // Direct authentic email client invocation
    const emailSubject = encodeURIComponent(
      `[AUREV Inquiry] ${subject || "Project Collaboration"}`
    );
    const emailBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\nSent via AUREV SOLUTIONS digital portal.`
    );

    window.location.href = `mailto:aurevsolutions@gmail.com?subject=${emailSubject}&body=${emailBody}`;
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("aurevsolutions@gmail.com");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF8]">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="pt-12 pb-12 sm:pt-16 sm:pb-16 bg-blueprint-grid border-b border-[#10243A]/05">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#10243A]/10 text-xs font-mono-tech font-semibold text-[#10243A]">
              <span>Direct Channels</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-[#10243A]">
              Contact & Collaboration
            </h1>

            <p className="text-base sm:text-lg text-[#20252D]/80 max-w-3xl leading-relaxed">
              Have an operational challenge, a software architecture need, or an innovative research concept? Reach out directly to founder Vishnu Prashanth S.
            </p>
          </div>
        </section>

        {/* Contact Form and Details Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left Column: Form */}
              <div className="lg:col-span-7">
                <div className="tactile-card rounded-3xl p-8 space-y-6">
                  <div>
                    <h2 className="font-heading text-2xl font-bold text-[#10243A]">
                      Send an Inquiry
                    </h2>
                    <p className="text-xs sm:text-sm text-[#20252D]/75 mt-1">
                      Fill out your requirements. Submitting opens your verified email client directly addressed to our engineering inbox.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label
                          htmlFor="name"
                          className="font-mono-tech text-xs font-semibold text-[#10243A] uppercase"
                        >
                          Your Name *
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Anand Kumar"
                          className="w-full px-4 py-2.5 rounded-2xl bg-[#FAFAF8] border border-black/10 text-sm focus:border-[#2457D6] focus:outline-none focus:ring-2 focus:ring-[#2457D6]/20 transition-all"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label
                          htmlFor="email"
                          className="font-mono-tech text-xs font-semibold text-[#10243A] uppercase"
                        >
                          Your Email *
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="anand@example.com"
                          className="w-full px-4 py-2.5 rounded-2xl bg-[#FAFAF8] border border-black/10 text-sm focus:border-[#2457D6] focus:outline-none focus:ring-2 focus:ring-[#2457D6]/20 transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="subject"
                        className="font-mono-tech text-xs font-semibold text-[#10243A] uppercase"
                      >
                        Subject / Domain
                      </label>
                      <input
                        id="subject"
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="e.g. Temple Accounting System / AI Verification Prototype"
                        className="w-full px-4 py-2.5 rounded-2xl bg-[#FAFAF8] border border-black/10 text-sm focus:border-[#2457D6] focus:outline-none focus:ring-2 focus:ring-[#2457D6]/20 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="message"
                        className="font-mono-tech text-xs font-semibold text-[#10243A] uppercase"
                      >
                        Message / Project Brief *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Describe the problem, objectives, and any technical parameters..."
                        className="w-full px-4 py-2.5 rounded-2xl bg-[#FAFAF8] border border-black/10 text-sm focus:border-[#2457D6] focus:outline-none focus:ring-2 focus:ring-[#2457D6]/20 transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-[#2457D6] hover:bg-[#1A44B0] text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg"
                    >
                      <Send className="w-4 h-4" />
                      <span>Prepare & Dispatch Email</span>
                    </button>
                  </form>
                </div>
              </div>

              {/* Right Column: Direct Channels & Verified Details */}
              <div className="lg:col-span-5 space-y-6">
                {/* Primary Email Card */}
                <div className="tactile-card rounded-3xl p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-[#2457D6] text-white flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-heading text-sm font-bold text-[#10243A]">
                        Official Email
                      </span>
                      <div className="font-mono-tech text-xs text-[#8DA8CC]">
                        Direct Inquiries
                      </div>
                    </div>
                  </div>

                  <p className="text-sm font-mono-tech text-[#10243A] select-all bg-[#FAFAF8] p-3 rounded-2xl border border-black/5">
                    aurevsolutions@gmail.com
                  </p>

                  <div className="flex items-center gap-3">
                    <a
                      href="mailto:aurevsolutions@gmail.com"
                      className="flex-1 py-2 text-center text-xs font-semibold rounded-full bg-[#10243A] text-white hover:bg-[#2457D6] transition-colors"
                    >
                      Open Email App
                    </a>
                    <button
                      type="button"
                      onClick={copyEmail}
                      className="px-4 py-2 text-xs font-mono-tech rounded-full border border-black/10 hover:bg-[#F0F2F5] transition-colors"
                    >
                      {isCopied ? "Copied!" : "Copy"}
                    </button>
                  </div>
                </div>

                {/* Social Profiles */}
                <div className="tactile-card rounded-3xl p-6 space-y-4">
                  <div className="flex items-center gap-2 text-sm font-heading font-bold text-[#10243A]">
                    <MessageSquare className="w-4 h-4 text-[#2457D6]" />
                    <span>Founder Social & Code Channels</span>
                  </div>

                  <div className="space-y-2 text-sm">
                    <a
                      href="https://github.com/Vishnu1799"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-2xl hover:bg-[#FAFAF8] transition-colors border border-black/5"
                    >
                      <div className="flex items-center gap-3">
                        <GithubIcon className="w-5 h-5 text-[#10243A]" />
                        <span className="font-medium text-xs text-[#10243A]">GitHub Profile</span>
                      </div>
                      <span className="font-mono-tech text-xs text-[#8DA8CC]">@Vishnu1799</span>
                    </a>

                    <a
                      href="https://www.linkedin.com/in/vishnu-prashanth-s-576937382/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-2xl hover:bg-[#FAFAF8] transition-colors border border-black/5"
                    >
                      <div className="flex items-center gap-3">
                        <LinkedinIcon className="w-5 h-5 text-[#2457D6]" />
                        <span className="font-medium text-xs text-[#10243A]">LinkedIn</span>
                      </div>
                      <span className="font-mono-tech text-xs text-[#8DA8CC]">Vishnu Prashanth S</span>
                    </a>

                    <a
                      href="https://www.instagram.com/vishnuu.prime/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-2xl hover:bg-[#FAFAF8] transition-colors border border-black/5"
                    >
                      <div className="flex items-center gap-3">
                        <InstagramIcon className="w-5 h-5 text-pink-600" />
                        <span className="font-medium text-xs text-[#10243A]">Instagram</span>
                      </div>
                      <span className="font-mono-tech text-xs text-[#8DA8CC]">@vishnuu.prime</span>
                    </a>
                  </div>
                </div>

                {/* Direct Telephone Notice */}
                <div className="p-4 rounded-3xl bg-[#F0F2F5] border border-black/5 text-xs text-[#20252D]/75 space-y-1">
                  <span className="font-semibold text-[#10243A] block">
                    Direct Phone Policy
                  </span>
                  <p>
                    Direct telephone communications (+91 9600561199) are reserved for verified project clients and authorized institutional partners. Please reach out via email first to schedule a technical call.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
