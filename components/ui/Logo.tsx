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
            ? "bg-white px-4 py-2 rounded-2xl shadow-sm border border-white/20 inline-flex items-center"
            : "inline-flex items-center py-1"
        }`}
      >
        <Image
          src="/aurev-logo.jpg"
          alt="AUREV SOLUTIONS"
          width={320}
          height={90}
          className={`h-12 sm:h-14 md:h-16 w-auto object-contain transition-all ${
            !isDark ? "mix-blend-multiply" : ""
          }`}
          priority
        />
      </div>
    </Link>
  );
}
