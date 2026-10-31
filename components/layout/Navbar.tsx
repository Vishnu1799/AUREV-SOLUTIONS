"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import { ArrowUpRight, Menu, X, Phone } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/products", label: "Products" },
  { href: "/team", label: "Our Team" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full pt-3 px-3 sm:px-6 lg:px-8 transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto rounded-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#FAFAF8]/95 backdrop-blur-md border border-[#10243A]/10 shadow-lg py-2 px-4 sm:px-6"
            : "bg-white/90 backdrop-blur-sm border border-[#10243A]/08 shadow-sm py-2.5 px-4 sm:px-6"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo with Official Company Emblem */}
          <Logo />

          {/* Center Floating Pill Navigation (Desktop) */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 bg-[#F0F2F5] p-1.5 rounded-full border border-[#10243A]/08"
          >
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-1.5 text-xs font-bold rounded-full transition-all duration-200 uppercase tracking-wider ${
                    isActive
                      ? "bg-[#10243A] text-white shadow-xs"
                      : "text-[#20252D]/80 hover:text-[#10243A] hover:bg-black/[0.04]"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Group: Hotline & Send Proposal CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+919600561199"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-extrabold text-[#10243A] hover:text-[#2457D6] transition-colors"
              aria-label="Call +91 9600561199"
            >
              <Phone className="w-3.5 h-3.5 text-[#E5A93C]" />
              <span>+91 9600561199</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white bg-[#2457D6] hover:bg-[#1A44B0] rounded-full transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <span>Send Proposal</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button with Word Label */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#10243A]/15 bg-[#F0F2F5] text-[#10243A] hover:bg-black/5 active:scale-95 transition-all text-xs font-bold uppercase tracking-wider shadow-2xs"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            <span>{mobileMenuOpen ? "Close" : "Menu"}</span>
            {mobileMenuOpen ? (
              <X className="w-4 h-4 text-[#2457D6]" />
            ) : (
              <Menu className="w-4 h-4 text-[#10243A]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-4 top-[84px] bg-white border border-[#10243A]/10 rounded-3xl p-6 shadow-2xl z-50 animate-in fade-in slide-in-from-top-3 duration-200 space-y-4">
          <nav className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-2xl text-base font-bold transition-colors ${
                    isActive
                      ? "bg-[#10243A] text-white"
                      : "text-[#20252D] hover:bg-[#F0F2F5]"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-slate-100 space-y-3">
            <a
              href="tel:+919600561199"
              className="flex items-center justify-center gap-2 w-full py-3 text-sm font-black text-[#10243A] bg-[#F0F2F5] rounded-2xl"
            >
              <Phone className="w-4 h-4 text-[#D97706]" />
              <span>Call +91 9600561199</span>
            </a>

            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 w-full py-3.5 text-sm font-extrabold text-white bg-[#2457D6] rounded-2xl shadow-md"
            >
              <span>Send Proposal</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
