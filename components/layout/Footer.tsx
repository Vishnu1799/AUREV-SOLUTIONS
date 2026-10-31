import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/SocialIcons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#10243A] text-white border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Logo isDark />
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              Engineering Ideas Into Intelligent Solutions. A founder-led technology and innovation initiative developing practical software, artificial intelligence, intelligent automation, and engineering solutions.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/Vishnu1799"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-slate-200 hover:text-white hover:bg-[#2457D6] transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/vishnu-prashanth-s-576937382/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-slate-200 hover:text-white hover:bg-[#2457D6] transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/vishnuu.prime/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-slate-200 hover:text-white hover:bg-[#2457D6] transition-colors"
                aria-label="Instagram Profile"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=aurevsolutions@gmail.com&su=Inquiry%20to%20AUREV%20SOLUTIONS"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-slate-200 hover:text-white hover:bg-[#2457D6] transition-colors"
                aria-label="Email AUREV SOLUTIONS via Gmail"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="font-heading text-xs font-semibold uppercase tracking-widest text-[#E5A93C]">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Project Portfolio
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Products & Platforms
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-white transition-colors">
                  Founding Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact & Collaborate
                </Link>
              </li>
            </ul>
          </div>

          {/* Selected Work */}
          <div className="space-y-3">
            <h3 className="font-heading text-xs font-semibold uppercase tracking-widest text-[#E5A93C]">
              Key Initiatives
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/projects/temple-finance-tracker" className="hover:text-white transition-colors">
                  Temple Finance Tracker
                </Link>
              </li>
              <li>
                <Link href="/projects/psna-student-feedback-portal" className="hover:text-white transition-colors">
                  PSNA Student Feedback Portal
                </Link>
              </li>
              <li>
                <Link href="/projects/aurev-ai-payment-recovery" className="hover:text-white transition-colors">
                  AUREV AI Payment Recovery
                </Link>
              </li>
              <li>
                <Link href="/projects/nivora" className="hover:text-white transition-colors">
                  NIVORA Platform
                </Link>
              </li>
              <li>
                <Link href="/projects/neochill" className="hover:text-white transition-colors">
                  NEOCHILL Cooling
                </Link>
              </li>
            </ul>
          </div>

          {/* Prominently Highlighted Direct Contact */}
          <div className="space-y-3">
            <h3 className="font-heading text-xs font-semibold uppercase tracking-widest text-[#E5A93C]">
              Direct Contact
            </h3>
            <div className="space-y-3 text-sm text-slate-300">
              <div>
                <span className="text-slate-400 block text-xs">Official Email:</span>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=aurevsolutions@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#E5A93C] transition-colors font-mono-tech text-xs"
                >
                  aurevsolutions@gmail.com
                </a>
              </div>

              <div>
                <span className="text-slate-400 block text-xs">Official Phone:</span>
                <a
                  href="tel:+919600561199"
                  className="text-[#E5A93C] hover:text-white font-heading font-bold text-base transition-colors flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>+91 9600561199</span>
                </a>
              </div>

              <div className="pt-2 text-xs text-slate-400">
                Founder & CTO: Vishnu Prashanth S.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {currentYear} AUREV SOLUTIONS. All rights reserved.</p>
          <p className="font-mono-tech text-[11px] text-slate-400">
            Founder-Led Technology & Engineering Initiative
          </p>
        </div>
      </div>
    </footer>
  );
}
