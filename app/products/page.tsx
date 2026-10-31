import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { products } from "@/data/products";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Layers, Bot } from "lucide-react";

export default function ProductsPage() {
  const businessProducts = products.filter((p) => p.category === "Business & Financial");
  const aiProducts = products.filter((p) => p.category === "AI-Powered Systems");
  const digitalPlatforms = products.filter((p) => p.category === "Digital Platforms");

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF8]">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="pt-12 pb-12 sm:pt-16 sm:pb-16 bg-blueprint-grid border-b border-[#10243A]/05">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#10243A]/10 text-xs font-mono-tech font-semibold text-[#10243A]">
              <span>Defined Solutions & Platforms</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-[#10243A]">
              Products & Digital Systems
            </h1>

            <p className="text-base sm:text-lg text-[#20252D]/80 max-w-3xl leading-relaxed">
              Software products and architectural solutions engineered with specific target users, concrete operational goals, and verified development statuses.
            </p>
          </div>
        </section>

        {/* Catalog Content */}
        <section className="py-16 space-y-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
            {/* Section 1: Business and Financial Solutions */}
            <div className="space-y-8">
              <div className="flex items-center gap-3 pb-4 border-b border-[#10243A]/08">
                <div className="w-9 h-9 rounded-xl bg-[#2457D6] text-white flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-heading text-2xl font-bold text-[#10243A]">
                    Business & Financial Solutions
                  </h2>
                  <p className="text-xs font-mono-tech text-[#8DA8CC]">
                    Administrative ledgers, accounting documentation, and receivables monitoring.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {businessProducts.map((prod) => (
                  <ProductCard key={prod.id} product={prod} />
                ))}
              </div>
            </div>

            {/* Section 2: AI-Powered Solutions */}
            <div className="space-y-8">
              <div className="flex items-center gap-3 pb-4 border-b border-[#10243A]/08">
                <div className="w-9 h-9 rounded-xl bg-[#10243A] text-white flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-heading text-2xl font-bold text-[#10243A]">
                    AI-Powered Systems & Verification
                  </h2>
                  <p className="text-xs font-mono-tech text-[#8DA8CC]">
                    Autonomous verification engines, transaction safety, and agentic assistants.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {aiProducts.map((prod) => (
                  <ProductCard key={prod.id} product={prod} />
                ))}
              </div>
            </div>

            {/* Section 3: Digital Platforms */}
            <div className="space-y-8">
              <div className="flex items-center gap-3 pb-4 border-b border-[#10243A]/08">
                <div className="w-9 h-9 rounded-xl bg-cyan-700 text-white flex items-center justify-center">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-heading text-2xl font-bold text-[#10243A]">
                    Digital Platforms & Portals
                  </h2>
                  <p className="text-xs font-mono-tech text-[#8DA8CC]">
                    E-commerce checkout platforms and institutional portals.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {digitalPlatforms.map((prod) => (
                  <ProductCard key={prod.id} product={prod} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function ProductCard({ product }: { product: (typeof products)[0] }) {
  const getAvailabilityBadge = (avail: string) => {
    switch (avail) {
      case "Delivered Solution":
        return "bg-emerald-50 text-emerald-800 border-emerald-200";
      case "Functional Prototype":
        return "bg-cyan-50 text-cyan-900 border-cyan-200";
      case "In Active Development":
        return "bg-amber-50 text-amber-900 border-amber-200";
      default:
        return "bg-slate-100 text-slate-700 border-slate-200";
    }
  };

  return (
    <div className="tactile-card rounded-3xl p-8 flex flex-col justify-between group">
      <div className="space-y-5">
        {/* Availability Badge */}
        <div className="flex items-center justify-between">
          <span className="font-mono-tech text-xs text-[#8DA8CC] uppercase">
            {product.id}
          </span>
          <span
            className={`px-3 py-1 text-xs font-mono-tech font-medium rounded-full border ${getAvailabilityBadge(
              product.availability
            )}`}
          >
            {product.availability}
          </span>
        </div>

        {/* Title & Tagline */}
        <div>
          <h3 className="font-heading text-2xl font-bold text-[#10243A] group-hover:text-[#2457D6] transition-colors mb-1">
            {product.name}
          </h3>
          <p className="text-xs font-medium text-[#2457D6]">
            {product.tagline}
          </p>
        </div>

        {/* Target Users & Problem Solved */}
        <div className="space-y-2 p-4 rounded-2xl bg-[#FAFAF8] border border-black/5 text-xs text-[#20252D]/85">
          <div>
            <span className="font-semibold text-[#10243A] block">Intended User:</span>
            <span>{product.intendedUsers}</span>
          </div>
          <div>
            <span className="font-semibold text-[#10243A] block">Problem Addressed:</span>
            <span>{product.problemSolved}</span>
          </div>
        </div>

        {/* Confirmed Capabilities */}
        <div className="space-y-2">
          <span className="font-mono-tech text-xs font-semibold text-[#10243A] uppercase tracking-wide">
            Confirmed Capabilities
          </span>
          <ul className="space-y-1.5">
            {product.confirmedCapabilities.map((cap, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-[#20252D]/80 leading-relaxed">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2457D6] flex-shrink-0 mt-0.5" />
                <span>{cap}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Card Action */}
      <div className="pt-6 border-t border-[#10243A]/05 mt-6 flex items-center justify-between">
        <Link
          href={`/projects/${product.projectSlug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#10243A] group-hover:text-[#2457D6] transition-colors"
        >
          <span>View Comprehensive Case Study</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  );
}
