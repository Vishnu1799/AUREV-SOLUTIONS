import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { getProjectBySlug, getPublicProjects } from "@/data/projects";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Cpu,
  Layers,
  FileCheck,
  Calendar,
  MapPin,
  Users,
} from "lucide-react";

interface CaseStudyProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const projects = getPublicProjects();
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export default async function CaseStudyPage({ params }: CaseStudyProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const allProjects = getPublicProjects();
  const currentIndex = allProjects.findIndex((p) => p.slug === slug);
  const nextProject =
    allProjects[(currentIndex + 1) % allProjects.length];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF8]">
      <Navbar />

      <main className="flex-1">
        {/* Breadcrumb Header */}
        <section className="pt-8 pb-4 bg-white border-b border-[#10243A]/05">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-xs font-mono-tech text-[#8DA8CC] hover:text-[#10243A] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Projects Catalogue</span>
            </Link>
          </div>
        </section>

        {/* Project Header Banner */}
        <section className="py-12 sm:py-16 bg-blueprint-grid border-b border-[#10243A]/08">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="font-mono-tech text-xs font-semibold text-[#8DA8CC] uppercase tracking-wider">
                {project.id} • {project.category}
              </span>
              <StatusBadge status={project.status} size="md" />
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#10243A]">
              {project.title}
            </h1>

            <p className="text-lg sm:text-xl font-medium text-[#2457D6] max-w-3xl leading-snug">
              {project.tagline}
            </p>

            <p className="text-base text-[#20252D]/80 max-w-3xl leading-relaxed">
              {project.summary}
            </p>
          </div>
        </section>

        {/* Main Case Study Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left Column: Problem, Objectives, Features */}
              <div className="lg:col-span-8 space-y-12">
                {/* 1. Problem Statement */}
                <div className="tactile-card rounded-3xl p-8 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="font-heading text-lg font-bold text-[#10243A]">
                      The Problem Statement
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-[#20252D]/85 leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                {/* 2. Project Objectives */}
                <div className="tactile-card rounded-3xl p-8 space-y-4">
                  <h2 className="font-heading text-lg font-bold text-[#10243A]">
                    Key Objectives
                  </h2>
                  <ul className="space-y-2.5">
                    {project.objectives.map((obj, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[#20252D]/85 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#2457D6] flex-shrink-0 mt-0.5" />
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 3. Confirmed & Implemented Features */}
                <div className="tactile-card rounded-3xl p-8 space-y-4 border-l-4 border-l-emerald-500">
                  <div className="flex items-center justify-between">
                    <h2 className="font-heading text-lg font-bold text-[#10243A]">
                      Confirmed & Verified Capabilities
                    </h2>
                    <span className="px-2.5 py-0.5 text-[11px] font-mono-tech bg-emerald-50 text-emerald-800 rounded-full border border-emerald-200">
                      Verified Implemented
                    </span>
                  </div>
                  <ul className="space-y-2.5">
                    {project.implementedFeatures.map((feat, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[#20252D]/85 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 4. Planned / Conceptual Features (Strict Separation) */}
                {project.plannedFeatures && project.plannedFeatures.length > 0 && (
                  <div className="tactile-card rounded-3xl p-8 space-y-4 border-l-4 border-l-amber-500 bg-amber-50/20">
                    <div className="flex items-center justify-between">
                      <h2 className="font-heading text-lg font-bold text-[#10243A]">
                        Planned / Architectural Roadmap
                      </h2>
                      <span className="px-2.5 py-0.5 text-[11px] font-mono-tech bg-amber-50 text-amber-900 rounded-full border border-amber-200">
                        Planned Roadmap
                      </span>
                    </div>
                    <p className="text-xs text-[#20252D]/70 italic">
                      The following capabilities represent planned features or conceptual developments, not claims of active deployment:
                    </p>
                    <ul className="space-y-2.5">
                      {project.plannedFeatures.map((feat, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-[#20252D]/85 leading-relaxed">
                          <Clock className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Right Column: Technical Metadata, Commercial / Event Details */}
              <div className="lg:col-span-4 space-y-6">
                {/* Commercial Release Box (If delivered) */}
                {project.commercialDetails && (
                  <div className="tactile-card rounded-3xl p-6 bg-emerald-50/50 border border-emerald-200/80 space-y-4">
                    <div className="flex items-center gap-2 text-emerald-800 font-heading font-bold text-sm">
                      <FileCheck className="w-4 h-4" />
                      <span>Commercial Delivery Record</span>
                    </div>
                    <div className="space-y-2 text-xs font-mono-tech text-emerald-950">
                      <div>
                        <span className="text-emerald-700 block">Invoice Reference:</span>
                        <span className="font-semibold text-sm">{project.commercialDetails.invoiceNumber}</span>
                      </div>
                      <div>
                        <span className="text-emerald-700 block">Delivery Value:</span>
                        <span className="font-semibold text-sm">{project.commercialDetails.saleValue}</span>
                      </div>
                      <div>
                        <span className="text-emerald-700 block">Invoice Date:</span>
                        <span>{project.commercialDetails.invoiceDate}</span>
                      </div>
                      <div className="pt-2 border-t border-emerald-200/60 text-[11px] text-emerald-800">
                        Delivered for {project.commercialDetails.deliveredFor}
                      </div>
                    </div>
                  </div>
                )}

                {/* Competition / Event Box (If applicable) */}
                {project.eventDetails && (
                  <div className="tactile-card rounded-3xl p-6 bg-blue-50/50 border border-blue-200/80 space-y-4">
                    <div className="flex items-center gap-2 text-blue-900 font-heading font-bold text-sm">
                      <Calendar className="w-4 h-4 text-[#2457D6]" />
                      <span>Event & Challenge Record</span>
                    </div>
                    <div className="space-y-2 text-xs font-mono-tech text-blue-950">
                      <div>
                        <span className="text-blue-700 block">Event:</span>
                        <span className="font-semibold">{project.eventDetails.eventName}</span>
                      </div>
                      <div>
                        <span className="text-blue-700 block flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> Location:
                        </span>
                        <span>{project.eventDetails.location}</span>
                      </div>
                      <div>
                        <span className="text-blue-700 block">Dates:</span>
                        <span>{project.eventDetails.dates}</span>
                      </div>
                      {project.eventDetails.role && (
                        <div className="pt-2 border-t border-blue-200/60 text-[11px] text-blue-900">
                          {project.eventDetails.role}
                        </div>
                      )}
                      {project.eventDetails.teamMembers && (
                        <div className="pt-2 border-t border-blue-200/60">
                          <span className="text-blue-700 block mb-1 flex items-center gap-1">
                            <Users className="w-3 h-3" /> Project Team:
                          </span>
                          <ul className="list-disc list-inside space-y-0.5 text-[11px]">
                            {project.eventDetails.teamMembers.map((tm, idx) => (
                              <li key={idx}>{tm}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Verified Tech Stack (Only when verified) */}
                {project.techStack && (
                  <div className="tactile-card rounded-3xl p-6 space-y-3">
                    <div className="flex items-center gap-2 text-[#10243A] font-heading font-bold text-sm">
                      <Cpu className="w-4 h-4 text-[#2457D6]" />
                      <span>Verified Technical Stack</span>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-full bg-[#F0F2F5] text-xs font-mono-tech text-[#10243A] border border-black/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Next Project Card */}
                {nextProject && (
                  <div className="tactile-card rounded-3xl p-6 space-y-3 bg-[#10243A] text-white">
                    <span className="font-mono-tech text-[10px] text-slate-400 uppercase tracking-widest block">
                      Next Initiative in Registry
                    </span>
                    <h3 className="font-heading text-lg font-bold text-white">
                      {nextProject.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                      {nextProject.tagline}
                    </p>
                    <Link
                      href={`/projects/${nextProject.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8DA8CC] hover:text-white pt-2 group"
                    >
                      <span>Explore Next Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
