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
  FileCheck,
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
        {/* Navigation Breadcrumb */}
        <section className="pt-8 pb-4 bg-white border-b border-[#10243A]/05">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-xs font-mono-tech font-bold text-[#8DA8CC] hover:text-[#10243A] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Projects Index</span>
            </Link>
          </div>
        </section>

        {/* Project Header Banner with Top-Left Operational Status */}
        <section className="py-12 sm:py-16 bg-blueprint-grid border-b border-[#10243A]/08">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            
            {/* Prominent Top Status Tag */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#10243A]/15 text-xs font-mono-tech font-bold text-[#10243A] shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#2457D6] animate-pulse" />
                <span>CURRENT PHASE: {project.status.toUpperCase()}</span>
              </div>
              <StatusBadge status={project.status} size="md" />
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#10243A]">
              {project.title}
            </h1>

            <p className="text-lg sm:text-xl font-bold text-[#2457D6] max-w-3xl leading-snug">
              {project.tagline}
            </p>

            <p className="text-base text-[#20252D]/85 max-w-3xl leading-relaxed">
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
                  <h2 className="font-heading text-xl font-extrabold text-[#10243A]">
                    Problem Statement
                  </h2>
                  <p className="text-sm sm:text-base text-[#20252D]/85 leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                {/* 2. Project Objectives */}
                <div className="tactile-card rounded-3xl p-8 space-y-4">
                  <h2 className="font-heading text-xl font-extrabold text-[#10243A]">
                    Key Engineering Objectives
                  </h2>
                  <ul className="space-y-3">
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
                    <h2 className="font-heading text-xl font-extrabold text-[#10243A]">
                      Verified Features
                    </h2>
                    <span className="px-3 py-1 text-xs font-mono-tech font-bold bg-emerald-50 text-emerald-800 rounded-full border border-emerald-200">
                      Implemented
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {project.implementedFeatures.map((feat, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[#20252D]/85 leading-relaxed">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 4. Planned Features if applicable */}
                {project.plannedFeatures && project.plannedFeatures.length > 0 && (
                  <div className="tactile-card rounded-3xl p-8 space-y-4 border-l-4 border-l-amber-500 bg-amber-50/20">
                    <div className="flex items-center justify-between">
                      <h2 className="font-heading text-xl font-extrabold text-[#10243A]">
                        Architectural Roadmap
                      </h2>
                      <span className="px-3 py-1 text-xs font-mono-tech font-bold bg-amber-50 text-amber-900 rounded-full border border-amber-200">
                        Planned Development
                      </span>
                    </div>
                    <ul className="space-y-3">
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

              {/* Right Column: Metadata & Details */}
              <div className="lg:col-span-4 space-y-6">
                
                {/* Commercial Release Box (If delivered) */}
                {project.commercialDetails && (
                  <div className="tactile-card rounded-3xl p-6 bg-emerald-50/60 border border-emerald-200 space-y-4">
                    <div className="flex items-center gap-2 text-emerald-900 font-heading font-extrabold text-sm">
                      <FileCheck className="w-5 h-5 text-emerald-700" />
                      <span>Commercial Delivery Record</span>
                    </div>
                    <div className="space-y-2 text-xs font-mono-tech text-emerald-950">
                      <div>
                        <span className="text-emerald-700 block font-semibold">Delivery Value:</span>
                        <span className="font-extrabold text-base">{project.commercialDetails.saleValue}</span>
                      </div>
                      <div>
                        <span className="text-emerald-700 block font-semibold">Delivery Scope:</span>
                        <span>{project.commercialDetails.deliveredFor}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tech Stack */}
                {project.techStack && (
                  <div className="tactile-card rounded-3xl p-6 space-y-3">
                    <div className="flex items-center gap-2 text-[#10243A] font-heading font-bold text-sm">
                      <Cpu className="w-4 h-4 text-[#2457D6]" />
                      <span>Technical Architecture</span>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full bg-[#F0F2F5] text-xs font-mono-tech font-bold text-[#10243A] border border-black/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Next Project Card */}
                {nextProject && (
                  <div className="tactile-card rounded-3xl p-6 space-y-3 bg-[#10243A] text-white shadow-xl">
                    <span className="font-mono-tech text-[10px] text-[#E5A93C] uppercase tracking-widest block font-bold">
                      Next Project
                    </span>
                    <h3 className="font-heading text-lg font-bold text-white">
                      {nextProject.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                      {nextProject.tagline}
                    </p>
                    <Link
                      href={`/projects/${nextProject.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E5A93C] hover:text-white pt-2 group"
                    >
                      <span>Explore Next Study</span>
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
