"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { getPublicProjects } from "@/data/projects";
import { Search, RotateCcw, ArrowUpRight, Filter } from "lucide-react";

export default function ProjectsPage() {
  const allProjects = useMemo(() => getPublicProjects(), []);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedStatus, setSelectedStatus] = useState<string>("All");

  const categories = useMemo(() => {
    const cats = new Set(allProjects.map((p) => p.category));
    return ["All", ...Array.from(cats)];
  }, [allProjects]);

  const statuses = useMemo(() => {
    const stats = new Set(allProjects.map((p) => p.status));
    return ["All", ...Array.from(stats)];
  }, [allProjects]);

  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) => {
      const matchesSearch =
        searchQuery.trim() === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.problem.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;

      const matchesStatus =
        selectedStatus === "All" || project.status === selectedStatus;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [allProjects, searchQuery, selectedCategory, selectedStatus]);

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSelectedStatus("All");
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF8]">
      <Navbar />

      <main className="flex-1">
        {/* Page Hero */}
        <section className="pt-12 pb-12 sm:pt-16 sm:pb-16 bg-blueprint-grid border-b border-[#10243A]/05">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#10243A]/10 text-xs font-mono-tech font-bold text-[#10243A]">
              <span>Index of Engineering Initiatives</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-[#10243A]">
              Complete Project Portfolio
            </h1>

            <p className="text-base sm:text-lg text-[#20252D]/80 max-w-3xl leading-relaxed">
              Explore our comprehensive portfolio across software applications, intelligent AI automation, sustainable hardware, IoT sensor systems, and cultural platforms.
            </p>
          </div>
        </section>

        {/* Filter and Search Bar */}
        <section className="py-6 bg-white border-b border-[#10243A]/08 sticky top-[68px] z-30 shadow-2xs backdrop-blur-md bg-white/95">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
              {/* Search Field */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search projects by keyword, domain, or problem..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-sm rounded-full bg-[#FAFAF8] border border-black/10 focus:border-[#2457D6] focus:outline-none focus:ring-2 focus:ring-[#2457D6]/20 transition-all font-medium"
                  aria-label="Search projects"
                />
              </div>

              {/* Status Filter Dropdown */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-slate-400" />
                  <span className="text-xs font-mono-tech text-[#8DA8CC] uppercase font-bold">
                    Filter Status:
                  </span>
                </div>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="text-xs font-mono-tech font-bold rounded-full px-3 py-2 bg-[#FAFAF8] border border-black/10 focus:border-[#2457D6] focus:outline-none"
                  aria-label="Filter by project status"
                >
                  {statuses.map((st) => (
                    <option key={st} value={st}>
                      {st}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? "bg-[#10243A] text-white shadow-xs"
                      : "bg-[#F0F2F5] text-[#20252D]/80 hover:bg-black/5"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Project Grid */}
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#10243A]/08">
              <span className="font-mono-tech text-xs text-[#8DA8CC] font-bold">
                Showing {filteredProjects.length} of {allProjects.length} initiatives
              </span>

              {(searchQuery !== "" ||
                selectedCategory !== "All" ||
                selectedStatus !== "All") && (
                <button
                  onClick={handleResetFilters}
                  className="inline-flex items-center gap-1.5 text-xs font-mono-tech font-bold text-[#2457D6] hover:underline"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset All Filters</span>
                </button>
              )}
            </div>

            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    className="tactile-card rounded-3xl p-7 flex flex-col justify-between group hover:border-[#2457D6]/30 shadow-md hover:shadow-xl transition-all"
                  >
                    <div>
                      {/* Top Row */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className="font-mono-tech text-[11px] font-bold text-[#8DA8CC] uppercase">
                          {project.category}
                        </span>
                        <StatusBadge status={project.status} size="sm" />
                      </div>

                      {/* Title */}
                      <h2 className="font-heading text-2xl font-bold text-[#10243A] group-hover:text-[#2457D6] transition-colors mb-2">
                        {project.title}
                      </h2>

                      {/* Tagline */}
                      <p className="text-xs font-semibold text-[#2457D6] mb-3">
                        {project.tagline}
                      </p>

                      {/* Summary */}
                      <p className="text-sm text-[#20252D]/80 leading-relaxed mb-6">
                        {project.summary}
                      </p>
                    </div>

                    {/* Footer Link */}
                    <div className="pt-4 border-t border-[#10243A]/05 flex items-center justify-between">
                      <span className="font-mono-tech text-xs text-[#8DA8CC] font-bold">
                        {project.id}
                      </span>
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#10243A] group-hover:text-[#2457D6] transition-colors"
                      >
                        <span>View Detailed Study</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 px-4 max-w-md mx-auto space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#F0F2F5] mx-auto flex items-center justify-center text-slate-400">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-[#10243A]">
                  No Matching Initiatives Found
                </h3>
                <p className="text-sm text-[#20252D]/75">
                  Try adjusting your search query or reset the filters.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="px-5 py-2.5 rounded-full bg-[#10243A] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#2457D6] transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
