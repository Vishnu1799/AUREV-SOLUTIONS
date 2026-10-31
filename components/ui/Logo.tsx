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
      className={`inline-flex items-center gap-3 group select-none ${className}`}
      aria-label="AUREV SOLUTIONS Home"
    >
      <div className="relative h-10 w-auto flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
        <Image
          src="/aurev-logo.jpg"
          alt="AUREV SOLUTIONS Logo"
          width={180}
          height={48}
          className={`h-10 w-auto object-contain ${
            isDark ? "brightness-110 contrast-125" : ""
          }`}
          priority
        />
      </div>
    </Link>
  );
}
