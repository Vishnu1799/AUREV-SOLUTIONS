import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { products } from "@/data/products";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Check } from "lucide-react";

export default function ProductsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF8]">
      <Navbar />

      <main className="flex-1">
        {/* Hero with Top Left Status Callout */}
        <section className="pt-12 pb-12 sm:pt-16 sm:pb-16 bg-blueprint-grid border-b border-[#10243A]/05">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            {/* Top Left Status Callout matching user's instruction */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono-tech font-bold text-emerald-800 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>STATUS: FINISHED & DEPLOYED PRODUCTS ONLY</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-[#10243A]">
              Deployed Products
            </h1>

            <p className="text-base sm:text-lg text-[#20252D]/80 max-w-3xl leading-relaxed">
              Our products represent finished, commercially delivered, and actively operational software solutions. For active development prototypes and research concepts, visit our{" "}
              <Link href="/projects" className="text-[#2457D6] font-semibold underline">
                Projects Portfolio
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Finished Products Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
              {products.map((prod) => (
                <div
                  key={prod.id}
                  className="tactile-card rounded-3xl p-8 flex flex-col justify-between group border-2 border-emerald-500/20 shadow-xl"
                >
                  <div className="space-y-5">
                    {/* Top Row: Product ID and Deployed Badge */}
                    <div className="flex items-center justify-between">
                      <span className="font-mono-tech text-xs text-[#8DA8CC] uppercase font-bold">
                        {prod.id}
                      </span>
                      <span className="px-3 py-1 text-xs font-mono-tech font-semibold rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Commercially Deployed</span>
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <div>
                      <h2 className="font-heading text-2xl font-extrabold text-[#10243A] group-hover:text-[#2457D6] transition-colors mb-1">
                        {prod.name}
                      </h2>
                      <p className="text-xs font-semibold text-[#2457D6]">
                        {prod.tagline}
                      </p>
                    </div>

                    {/* Target Users & Problem Solved */}
                    <div className="space-y-2 p-4 rounded-2xl bg-[#FAFAF8] border border-black/5 text-xs text-[#20252D]/85">
                      <div>
                        <span className="font-semibold text-[#10243A] block">Target Users:</span>
                        <span>{prod.intendedUsers}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-[#10243A] block">Problem Solved:</span>
                        <span>{prod.problemSolved}</span>
                      </div>
                    </div>

                    {/* Confirmed Capabilities */}
                    <div className="space-y-2">
                      <span className="font-mono-tech text-xs font-semibold text-[#10243A] uppercase tracking-wide">
                        Operational Features
                      </span>
                      <ul className="space-y-1.5">
                        {prod.confirmedCapabilities.map((cap, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-[#20252D]/80 leading-relaxed">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Action */}
                  <div className="pt-6 border-t border-[#10243A]/05 mt-6 flex items-center justify-between">
                    <Link
                      href={`/projects/${prod.projectSlug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#10243A] group-hover:text-[#2457D6] transition-colors"
                    >
                      <span>View Full Implementation Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
