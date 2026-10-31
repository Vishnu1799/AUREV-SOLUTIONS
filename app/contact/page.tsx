"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/SocialIcons";
import { Mail, Send, CheckCircle2, Phone, MessageSquare } from "lucide-react";

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

    // Construct direct Gmail Web URL
    const emailSubject = encodeURIComponent(
      `[Project Proposal] ${subject || "New Collaboration Inquiry"}`
    );
    const emailBody = encodeURIComponent(
      `PROPOSAL DETAILS FOR AUREV SOLUTIONS:\n\nClient Name: ${name}\nClient Email: ${email}\nClient Phone: ${phone}\nProject Domain / Subject: ${
        subject || "General Inquiry"
      }\n\nProject Scope & Message:\n${message}\n\nSent directly via AUREV SOLUTIONS Digital Portal.`
    );

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=aurevsolutions@gmail.com&su=${emailSubject}&body=${emailBody}`;

    setIsSubmitted(true);
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
            <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-[#10243A]">
              Connect & Collaborate With Us
            </h1>

            <p className="text-base sm:text-lg text-[#20252D]/80 max-w-3xl leading-relaxed">
              Have an operational challenge, software project, or innovative technical concept? Send your proposal directly to our team.
            </p>
          </div>
        </section>

        {/* Separate Contact & Mail Us Cards */}
        <section className="py-8 bg-white border-b border-[#10243A]/08">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl">
              
              {/* Card 1: Contact (Phone) -> Direct Call Trigger */}
              <a
                href="tel:+919600561199"
                className="flex items-center gap-4 p-5 rounded-3xl bg-[#FAFAF8] border-2 border-[#10243A]/10 hover:border-[#2457D6] hover:shadow-lg transition-all group"
                aria-label="Call +91 9600561199"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#E5A93C] text-[#10243A] flex items-center justify-center font-black shadow-md flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <span className="font-mono-tech text-xs uppercase tracking-widest text-[#8DA8CC] block font-bold">
                    Contact
                  </span>
                  <span className="font-heading text-xl sm:text-2xl font-black text-[#10243A] group-hover:text-[#2457D6] transition-colors truncate block">
                    +91 9600561199
                  </span>
                </div>
              </a>

              {/* Card 2: Mail Us (Gmail) -> Direct Gmail Web Trigger */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=aurevsolutions@gmail.com&su=Project%20Proposal%20-%20AUREV%20SOLUTIONS"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-3xl bg-[#FAFAF8] border-2 border-[#10243A]/10 hover:border-[#2457D6] hover:shadow-lg transition-all group"
                aria-label="Email aurevsolutions@gmail.com"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#2457D6] text-white flex items-center justify-center font-black shadow-md flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <span className="font-mono-tech text-xs uppercase tracking-widest text-[#8DA8CC] block font-bold">
                    Mail Us
                  </span>
                  <span className="font-heading text-base sm:text-lg font-black text-[#10243A] group-hover:text-[#2457D6] transition-colors truncate block">
                    aurevsolutions@gmail.com
                  </span>
                </div>
              </a>

            </div>
          </div>
        </section>

        {/* Proposal Form Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Left Column: Proposal Form */}
              <div className="lg:col-span-8">
                <div className="tactile-card rounded-3xl p-8 sm:p-10 space-y-6 border-2 border-[#10243A]/08 shadow-xl">
                  <div>
                    <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#10243A]">
                      Send a Project Proposal
                    </h2>
                    <p className="text-xs sm:text-sm text-[#20252D]/75 mt-1 leading-relaxed">
                      All fields marked with an asterisk (<span className="text-rose-500 font-bold">*</span>) are mandatory.
                    </p>
                  </div>

                  {/* Submission Confirmation Notification Banner */}
                  {isSubmitted && (
                    <div className="p-4 rounded-2xl bg-emerald-50 border-2 border-emerald-400 text-emerald-900 flex items-start gap-3 animate-in fade-in duration-300">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div className="text-xs sm:text-sm space-y-1">
                        <strong className="block font-bold">Proposal Prepared & Gmail Launched!</strong>
                        <p>
                          Your proposal details have been formatted and dispatched to <strong>aurevsolutions@gmail.com</strong>.
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

              {/* Right Column: Copy Email & Social Channels */}
              <div className="lg:col-span-4 space-y-6">
                
                {/* Copy Email Box */}
                <div className="tactile-card rounded-3xl p-6 space-y-3 bg-white border border-[#10243A]/08 shadow-sm">
                  <span className="font-heading text-sm font-extrabold text-[#10243A] block">
                    Copy Email Address
                  </span>
                  <p className="text-xs font-mono-tech font-bold text-[#10243A] select-all bg-[#FAFAF8] p-3 rounded-2xl border border-black/5">
                    aurevsolutions@gmail.com
                  </p>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="w-full py-2.5 text-xs font-mono-tech font-bold rounded-full border border-black/15 hover:bg-[#F0F2F5] transition-colors"
                  >
                    {isCopied ? "Copied to Clipboard!" : "Copy Address"}
                  </button>
                </div>

                {/* Social Channels */}
                <div className="tactile-card rounded-3xl p-6 space-y-4 bg-white border border-black/5">
                  <div className="flex items-center gap-2 text-sm font-heading font-extrabold text-[#10243A]">
                    <MessageSquare className="w-4 h-4 text-[#2457D6]" />
                    <span>Social Channels</span>
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
