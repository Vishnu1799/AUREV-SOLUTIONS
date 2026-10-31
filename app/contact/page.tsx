"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/SocialIcons";
import { Mail, Send, CheckCircle2, Phone, MessageSquare, Sparkles } from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !message) return;

    // Construct direct Gmail Web URL so it opens directly in Gmail, never Outlook
    const emailSubject = encodeURIComponent(
      `[Project Proposal] ${subject || "New Collaboration Inquiry"}`
    );
    const emailBody = encodeURIComponent(
      `PROPOSAL DETAILS FOR AUREV SOLUTIONS:\n\nClient Name: ${name}\nClient Email: ${email}\nClient Phone: ${phone}\nProject Domain / Subject: ${
        subject || "General Inquiry"
      }\n\nProject Scope & Message:\n${message}\n\nSent directly via AUREV SOLUTIONS Digital Portal.`
    );

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=aurevsolutions@gmail.com&su=${emailSubject}&body=${emailBody}`;

    // Show immediate on-screen confirmation notification
    setIsSubmitted(true);

    // Launch Gmail in new tab
    window.open(gmailUrl, "_blank");
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5A93C]/10 border border-[#E5A93C]/30 text-xs font-mono-tech font-bold text-[#D97706]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Project Proposals & Direct Inquiries</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-[#10243A]">
              Connect & Collaborate With Us
            </h1>

            <p className="text-base sm:text-lg text-[#20252D]/80 max-w-3xl leading-relaxed">
              Have an operational challenge, software project, or innovative technical concept? Send your proposal directly to our engineering leadership team.
            </p>
          </div>
        </section>

        {/* High-Impact Company Number & Quick Connect Banner */}
        <section className="py-6 bg-[#10243A] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-3xl bg-gradient-to-r from-[#10243A] via-[#1A44B0] to-[#10243A] border-2 border-[#E5A93C]/40 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#E5A93C] text-[#10243A] flex items-center justify-center font-black shadow-lg">
                  <Phone className="w-7 h-7" />
                </div>
                <div>
                  <span className="font-mono-tech text-xs uppercase tracking-widest text-slate-300 block font-bold">
                    Official Company Hotline:
                  </span>
                  <a
                    href="tel:+919600561199"
                    className="font-heading text-2xl sm:text-3xl font-black text-white hover:text-[#E5A93C] transition-colors tracking-wide"
                  >
                    +91 9600561199
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="tel:+919600561199"
                  className="px-6 py-3 rounded-full bg-[#E5A93C] hover:bg-[#D97706] text-[#10243A] font-extrabold text-sm transition-all shadow-md"
                >
                  Call Now
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=aurevsolutions@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-white/15 hover:bg-white/25 text-white font-bold text-sm transition-all border border-white/20"
                >
                  Open in Gmail
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Proposal Form and Direct Channels Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Left Column: Proposal Form */}
              <div className="lg:col-span-7">
                <div className="tactile-card rounded-3xl p-8 sm:p-10 space-y-6 border-2 border-[#10243A]/08 shadow-xl">
                  <div>
                    <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#10243A]">
                      Send a Project Proposal
                    </h2>
                    <p className="text-xs sm:text-sm text-[#20252D]/75 mt-1 leading-relaxed">
                      All fields marked with an asterisk (<span className="text-rose-500 font-bold">*</span>) are mandatory. When you click &ldquo;Send Proposal&rdquo;, your inquiry will be prepared and routed straight to our team&apos;s verified inbox (<strong className="text-[#10243A]">aurevsolutions@gmail.com</strong>).
                    </p>
                  </div>

                  {/* Submission Confirmation Notification Banner */}
                  {isSubmitted && (
                    <div className="p-4 rounded-2xl bg-emerald-50 border-2 border-emerald-400 text-emerald-900 flex items-start gap-3 animate-in fade-in duration-300">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div className="text-xs sm:text-sm space-y-1">
                        <strong className="block font-bold">Proposal Prepared & Gmail Launched!</strong>
                        <p>
                          Your proposal details have been formatted and dispatched to <strong>aurevsolutions@gmail.com</strong>. Founder Vishnu Prashanth S and our engineering team will review it and follow up promptly.
                        </p>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label
                          htmlFor="name"
                          className="font-mono-tech text-xs font-bold text-[#10243A] uppercase tracking-wide"
                        >
                          Your Full Name <span className="text-rose-500">*</span>
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full px-4 py-3 rounded-2xl bg-[#FAFAF8] border border-black/10 text-sm focus:border-[#2457D6] focus:outline-none focus:ring-2 focus:ring-[#2457D6]/20 transition-all font-medium"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-1.5">
                        <label
                          htmlFor="email"
                          className="font-mono-tech text-xs font-bold text-[#10243A] uppercase tracking-wide"
                        >
                          Your Email Address <span className="text-rose-500">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="rahul@example.com"
                          className="w-full px-4 py-3 rounded-2xl bg-[#FAFAF8] border border-black/10 text-sm focus:border-[#2457D6] focus:outline-none focus:ring-2 focus:ring-[#2457D6]/20 transition-all font-medium"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Mobile Number */}
                      <div className="space-y-1.5">
                        <label
                          htmlFor="phone"
                          className="font-mono-tech text-xs font-bold text-[#10243A] uppercase tracking-wide"
                        >
                          Mobile Number <span className="text-rose-500">*</span>
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-3 rounded-2xl bg-[#FAFAF8] border border-black/10 text-sm focus:border-[#2457D6] focus:outline-none focus:ring-2 focus:ring-[#2457D6]/20 transition-all font-medium"
                        />
                      </div>

                      {/* Subject */}
                      <div className="space-y-1.5">
                        <label
                          htmlFor="subject"
                          className="font-mono-tech text-xs font-bold text-[#10243A] uppercase tracking-wide"
                        >
                          Project Subject / Domain
                        </label>
                        <input
                          id="subject"
                          type="text"
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          placeholder="e.g. Custom ERP / AI Automation"
                          className="w-full px-4 py-3 rounded-2xl bg-[#FAFAF8] border border-black/10 text-sm focus:border-[#2457D6] focus:outline-none focus:ring-2 focus:ring-[#2457D6]/20 transition-all font-medium"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="message"
                        className="font-mono-tech text-xs font-bold text-[#10243A] uppercase tracking-wide"
                      >
                        Project Scope & Requirements <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Please describe the problem you want solved, target timelines, and any technical preferences..."
                        className="w-full px-4 py-3 rounded-2xl bg-[#FAFAF8] border border-black/10 text-sm focus:border-[#2457D6] focus:outline-none focus:ring-2 focus:ring-[#2457D6]/20 transition-all font-medium"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2.5 w-full py-4 rounded-2xl bg-[#2457D6] hover:bg-[#1A44B0] text-white font-extrabold text-sm sm:text-base transition-all shadow-lg hover:shadow-xl group"
                    >
                      <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                      <span>Send Proposal</span>
                    </button>
                  </form>
                </div>
              </div>

              {/* Right Column: Information for Team Communication */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Official Email Dispatch Info */}
                <div className="tactile-card rounded-3xl p-6 sm:p-8 space-y-4 bg-white border border-[#10243A]/08 shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#2457D6] text-white flex items-center justify-center shadow-xs">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="font-heading text-base font-extrabold text-[#10243A]">
                        Official Email Inbox
                      </span>
                      <div className="font-mono-tech text-xs text-[#8DA8CC]">
                        Monitored by Leadership Team
                      </div>
                    </div>
                  </div>

                  <p className="text-sm font-mono-tech font-bold text-[#10243A] select-all bg-[#FAFAF8] p-3.5 rounded-2xl border border-black/5">
                    aurevsolutions@gmail.com
                  </p>

                  <div className="flex items-center gap-3">
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=aurevsolutions@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 text-center text-xs font-bold rounded-full bg-[#10243A] text-white hover:bg-[#2457D6] transition-colors"
                    >
                      Direct Gmail Compose
                    </a>
                    <button
                      type="button"
                      onClick={copyEmail}
                      className="px-5 py-2.5 text-xs font-mono-tech font-bold rounded-full border border-black/15 hover:bg-[#F0F2F5] transition-colors"
                    >
                      {isCopied ? "Copied!" : "Copy"}
                    </button>
                  </div>
                </div>

                {/* Where Does the Team See It? Explanation Box */}
                <div className="tactile-card rounded-3xl p-6 space-y-3 bg-[#FAFAF8] border border-black/5">
                  <span className="font-heading text-sm font-extrabold text-[#10243A] block">
                    How Proposals Are Handled
                  </span>
                  <p className="text-xs text-[#20252D]/80 leading-relaxed">
                    When you click <strong>&ldquo;Send Proposal&rdquo;</strong>, your detailed project brief is delivered directly to our centralized executive inbox (<strong>aurevsolutions@gmail.com</strong>). Founder & CTO Vishnu Prashanth S and our senior innovation leads review every submission within 24–48 hours.
                  </p>
                </div>

                {/* Social Channels */}
                <div className="tactile-card rounded-3xl p-6 space-y-4 bg-white border border-black/5">
                  <div className="flex items-center gap-2 text-sm font-heading font-extrabold text-[#10243A]">
                    <MessageSquare className="w-4 h-4 text-[#2457D6]" />
                    <span>Founder Social & Code Repositories</span>
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
                        <span className="font-bold text-xs text-[#10243A]">GitHub</span>
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
                        <span className="font-bold text-xs text-[#10243A]">LinkedIn</span>
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
                        <span className="font-bold text-xs text-[#10243A]">Instagram</span>
                      </div>
                      <span className="font-mono-tech text-xs text-[#8DA8CC]">@vishnuu.prime</span>
                    </a>
                  </div>
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

