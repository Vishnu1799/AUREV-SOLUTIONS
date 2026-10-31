import { ProjectStatus } from "@/types/project";

interface StatusBadgeProps {
  status: ProjectStatus;
  size?: "sm" | "md";
  className?: string;
}

export function StatusBadge({
  status,
  size = "md",
  className = "",
}: StatusBadgeProps) {
  const getStatusStyles = () => {
    switch (status) {
      case "Commercially Delivered":
        return {
          dot: "bg-emerald-500 ring-emerald-500/20",
          badge: "bg-emerald-50 text-emerald-800 border-emerald-200/80",
        };
      case "Developed":
        return {
          dot: "bg-blue-500 ring-blue-500/20",
          badge: "bg-blue-50 text-blue-800 border-blue-200/80",
        };
      case "Working Prototype":
        return {
          dot: "bg-cyan-500 ring-cyan-500/20 animate-pulse",
          badge: "bg-cyan-50 text-cyan-900 border-cyan-200/80",
        };
      case "In Development":
        return {
          dot: "bg-amber-500 ring-amber-500/20",
          badge: "bg-amber-50 text-amber-900 border-amber-200/80",
        };
      case "Design / Demonstration":
        return {
          dot: "bg-purple-500 ring-purple-500/20",
          badge: "bg-purple-50 text-purple-900 border-purple-200/80",
        };
      case "Concept":
        return {
          dot: "bg-slate-400 ring-slate-400/20",
          badge: "bg-slate-100 text-slate-700 border-slate-200",
        };
      case "Internal Review":
      default:
        return {
          dot: "bg-rose-400 ring-rose-400/20",
          badge: "bg-rose-50 text-rose-800 border-rose-200",
        };
    }
  };

  const { dot, badge } = getStatusStyles();
  const padding = size === "sm" ? "px-2 py-0.5 text-[11px]" : "px-2.5 py-1 text-xs";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border font-mono-tech font-medium tracking-wide ${padding} ${badge} ${className}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ring-2 ${dot}`} />
      <span>{status}</span>
    </span>
  );
}
