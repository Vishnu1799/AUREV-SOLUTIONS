import Link from "next/link";
import { getFeaturedProjects } from "@/data/projects";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { ArrowUpRight } from "lucide-react";

export function FeaturedProjects() {
  const featured = getFeaturedProjects();

  return (
    <section className="py-20 md:py-28 bg-[#FAFAF8] border-t border-[#10243A]/05">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-xl">
            <span className="font-mono-tech text-xs font-semibold tracking-widest uppercase text-[#2457D6]">
              Verified Portfolio
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-[#10243A]">
              Featured Engineering Projects
            </h2>
            <p className="text-base text-[#20252D]/75 leading-relaxed">
              Every project accurately represents its verified developmental stage—distinguishing commercially delivered software from competitive prototypes and engineering concepts.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#10243A] hover:bg-[#2457D6] text-white text-xs font-semibold uppercase tracking-wider transition-all duration-200"
          >
            <span>View All Projects</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Featured Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featured.map((project, idx) => (
            <div
              key={project.id}
              className={`tactile-card rounded-3xl p-6 flex flex-col justify-between group ${
                idx === 0 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div>
                {/* Header: Category & Status */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="font-mono-tech text-[11px] font-semibold text-[#8DA8CC] uppercase tracking-wider">
                    {project.category}
                  </span>
                  <StatusBadge status={project.status} size="sm" />
                </div>

                {/* Project Title */}
                <h3 className="font-heading text-2xl font-bold text-[#10243A] group-hover:text-[#2457D6] transition-colors mb-2">
                  {project.title}
                </h3>

                {/* Tagline */}
                <p className="font-medium text-xs text-[#2457D6] mb-3">
                  {project.tagline}
                </p>

                {/* Summary */}
                <p className="text-sm text-[#20252D]/80 leading-relaxed mb-6">
                  {project.summary}
                </p>

                {/* Key Attributes / Commercial or Event Details */}
                {project.commercialDetails && (
                  <div className="p-3 rounded-2xl bg-emerald-50/60 border border-emerald-200/60 text-xs text-emerald-950 font-mono-tech mb-6 space-y-1">
                    <div className="font-semibold text-emerald-800">Commercial Record:</div>
                    <div>Value: {project.commercialDetails.saleValue} ({project.commercialDetails.invoiceNumber})</div>
                    <div className="text-[11px] text-emerald-700">{project.commercialDetails.deliveredFor}</div>
                  </div>
                )}

                {project.eventDetails && (
                  <div className="p-3 rounded-2xl bg-blue-50/60 border border-blue-200/60 text-xs text-blue-950 font-mono-tech mb-6 space-y-1">
                    <div className="font-semibold text-blue-800">{project.eventDetails.eventName}</div>
                    <div className="text-[11px] text-blue-700">{project.eventDetails.location}</div>
                  </div>
                )}
              </div>

              {/* Card Footer: Action Link */}
              <div className="pt-4 border-t border-[#10243A]/05 flex items-center justify-between">
                <span className="font-mono-tech text-[11px] text-[#8DA8CC]">
                  {project.id}
                </span>
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#10243A] group-hover:text-[#2457D6] transition-colors"
                >
                  <span>Explore Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
