import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  isDark?: boolean;
}

export function Logo({ className = "", isDark = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center group select-none ${className}`}
      aria-label="AUREV SOLUTIONS Home"
    >
      <div
        className={`relative transition-transform duration-300 group-hover:scale-105 ${
          isDark
            ? "bg-white px-3.5 py-1.5 rounded-2xl shadow-sm border border-white/20 inline-flex items-center"
            : "inline-flex items-center"
        }`}
      >
        <Image
          src="/aurev-logo.jpg"
          alt="AUREV SOLUTIONS"
          width={260}
          height={70}
          className={`h-11 sm:h-13 md:h-14 w-auto object-contain transition-all ${
            !isDark ? "mix-blend-multiply" : ""
          }`}
          priority
        />
      </div>
    </Link>
  );
}
