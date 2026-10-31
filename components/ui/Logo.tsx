import Link from "next/link";

interface LogoProps {
  className?: string;
  isDark?: boolean;
}

export function Logo({ className = "", isDark = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 group select-none ${className}`}
      aria-label="AUREV SOLUTIONS Home"
    >
      {/* Precision Geometric Origami Delta Symbol matching the reference mark */}
      <div className="relative w-8 h-8 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
        >
          {/* Facet 1: Primary warm amber facet */}
          <path
            d="M18 3L4 29L18 22L18 3Z"
            fill="#E5A93C"
            className="transition-colors duration-300 group-hover:fill-[#F59E0B]"
          />
          {/* Facet 2: High-contrast gold facet */}
          <path
            d="M18 3L32 29L18 22L18 3Z"
            fill="#D97706"
            className="transition-colors duration-300 group-hover:fill-[#B45309]"
          />
          {/* Facet 3: Inner shadow depth facet */}
          <path
            d="M18 22L4 29L18 33L18 22Z"
            fill="#B45309"
            opacity="0.85"
          />
          {/* Facet 4: Bottom right reflection */}
          <path
            d="M18 22L32 29L18 33L18 22Z"
            fill="#92400E"
            opacity="0.9"
          />
          {/* Central architectural vertex highlight */}
          <circle cx="18" cy="22" r="1.5" fill="#FFFFFF" />
        </svg>
      </div>

      {/* Typography: "Aurev SOLUTIONS" matching the reference branding */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-heading text-xl font-extrabold tracking-tight transition-colors ${
            isDark ? "text-white" : "text-[#10243A] group-hover:text-[#2457D6]"
          }`}
        >
          Aurev
        </span>
        <span
          className={`font-mono-tech text-[9px] font-semibold tracking-[0.24em] uppercase ${
            isDark ? "text-slate-300" : "text-[#8DA8CC]"
          }`}
        >
          SOLUTIONS
        </span>
      </div>
    </Link>
  );
}
