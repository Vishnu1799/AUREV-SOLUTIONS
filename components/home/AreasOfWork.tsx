import Link from "next/link";
import { Code, Bot, Wrench, Radio, ArrowUpRight } from "lucide-react";

export function AreasOfWork() {
  const domains = [
    {
      title: "Software Engineering",
      icon: Code,
      description:
        "Building resilient web portals, institutional platforms, administrative ledgers, and database management systems with strict data isolation and transactional consistency.",
      sampleProject: "Temple Finance Tracker",
      href: "/projects/temple-finance-tracker",
    },
    {
      title: "AI & Intelligent Automation",
      icon: Bot,
      description:
        "Engineering autonomous payment verification engines and agentic assistants that verify previous transaction evidence before initiating secondary actions.",
      sampleProject: "AUREV AI Payment Recovery",
      href: "/projects/aurev-ai-payment-recovery",
    },
    {
      title: "Engineering Innovation",
      icon: Wrench,
      description:
        "Developing passive, zero-electricity evaporative cooling chambers and food-safe HDPE produce preservation solutions for micro-retailers.",
      sampleProject: "NEOCHILL Cooling",
      href: "/projects/neochill",
    },
    {
      title: "Smart Technology & IoT",
      icon: Radio,
      description:
        "Designing microcontroller sensor networks (ESP32), environmental air-quality gas monitoring, and automated high-pressure fluid actuation.",
      sampleProject: "Smart AI Sanitation System",
      href: "/projects/smart-ai-sanitation-system",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F0F2F5] border border-black/5">
              <span className="font-mono-tech text-xs font-semibold text-[#10243A]">
                Core Capabilities & Services
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-[#10243A]">
              Our Engineering Services
            </h2>
            <p className="text-base text-[#20252D]/75 leading-relaxed">
              We apply technical rigor across four complementary domains, solving multifaceted problems from cloud software down to hardware prototypes.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2457D6] hover:text-[#1A44B0] group"
          >
            <span>Explore All Projects in Detail</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* 4 Focus Area Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {domains.map((domain) => {
            const Icon = domain.icon;
            return (
              <div
                key={domain.title}
                className="p-6 rounded-3xl bg-[#FAFAF8] border border-[#10243A]/08 hover:border-[#2457D6]/30 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-[#10243A]/10 flex items-center justify-center text-[#2457D6] shadow-2xs group-hover:bg-[#10243A] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-[#10243A] group-hover:text-[#2457D6] transition-colors">
                    {domain.title}
                  </h3>
                  <p className="text-sm text-[#20252D]/75 leading-relaxed">
                    {domain.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#10243A]/05">
                  <span className="block font-mono-tech text-[10px] text-[#8DA8CC] uppercase">
                    Representative Project:
                  </span>
                  <Link
                    href={domain.href}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#10243A] hover:text-[#2457D6] mt-0.5 group/link"
                  >
                    <span>{domain.sampleProject}</span>
                    <ArrowUpRight className="w-3 h-3 transition-transform group-link-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
