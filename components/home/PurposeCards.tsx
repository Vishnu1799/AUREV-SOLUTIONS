import { Lightbulb, Cpu, Sparkles } from "lucide-react";

export function PurposeCards() {
  const cards = [
    {
      number: "01",
      title: "Practical Innovation",
      icon: Lightbulb,
      description:
        "We identify authentic, grounded friction points in administration, retail, and business operations, creating software that simplifies bookkeeping, tracking, and daily productivity.",
      tag: "Applied Engineering",
    },
    {
      number: "02",
      title: "Intelligent Engineering",
      icon: Cpu,
      description:
        "From payment failure verification engines to resilient distributed data pipelines, our focus is building automated systems that prevent costly real-world errors before they happen.",
      tag: "AI & Verification",
    },
    {
      number: "03",
      title: "Smart Technology",
      icon: Sparkles,
      description:
        "Expanding beyond pure software into hardware thermodynamics, IoT sensor networks, and sustainable produce storage concepts designed to solve tangible physical challenges.",
      tag: "Hardware & IoT",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FAFAF8] border-t border-b border-[#10243A]/05">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="font-mono-tech text-xs font-semibold tracking-widest uppercase text-[#2457D6]">
            Our Foundation
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-[#10243A]">
            Technology with a Purpose
          </h2>
          <p className="text-base text-[#20252D]/75 leading-relaxed">
            AUREV SOLUTIONS transforms complex problems into practical, intelligent solutions. We don&apos;t build for the sake of novelty; we engineer for measurable utility.
          </p>
        </div>

        {/* 3 Tactile Numbered Cards (Matching Reference Layout Exactly) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.number}
                className="tactile-card rounded-3xl p-8 flex flex-col justify-between relative group"
              >
                {/* Top Row: Numbering and Circular Badge Icon */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <span className="font-heading text-2xl font-extrabold text-[#10243A]">
                      {card.number}
                    </span>
                    <span className="w-6 h-[2px] bg-[#10243A]/20" />
                  </div>

                  {/* Circular Icon Container matching reference */}
                  <div className="w-12 h-12 rounded-full bg-[#F0F2F5] border border-[#10243A]/10 flex items-center justify-center text-[#2457D6] group-hover:bg-[#2457D6] group-hover:text-white transition-all duration-300 shadow-2xs">
                    <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                </div>

                {/* Card Body */}
                <div className="space-y-3">
                  <h3 className="font-heading text-xl font-bold text-[#10243A] group-hover:text-[#2457D6] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#20252D]/80 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Indicator Dot & Accent (Matching Reference) */}
                <div className="mt-8 pt-4 border-t border-[#10243A]/05 flex items-center justify-between">
                  <span className="font-mono-tech text-[11px] text-[#8DA8CC] uppercase tracking-wider">
                    {card.tag}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[#10243A]/20 group-hover:bg-[#2457D6] transition-colors" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
