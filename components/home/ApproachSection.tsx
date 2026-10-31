import { Search, Compass, PenTool, CheckCircle } from "lucide-react";

export function ApproachSection() {
  const steps = [
    {
      num: "01",
      title: "Understand the Problem",
      icon: Search,
      desc: "Analyze root-cause operational friction through first-hand inquiry—whether in temple bookkeeping or checkout payment dropoffs.",
    },
    {
      num: "02",
      title: "Explore the Solution",
      icon: Compass,
      desc: "Architect lightweight, reliable intervention pathways without over-engineering or introducing unnecessary dependencies.",
    },
    {
      num: "03",
      title: "Design and Develop",
      icon: PenTool,
      desc: "Build functional software systems or physical prototypes using disciplined modern stacks and verified hardware components.",
    },
    {
      num: "04",
      title: "Test and Improve",
      icon: CheckCircle,
      desc: "Iterate against real usage scenarios to eliminate edge-case failure modes and confirm operational reliability.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-t border-[#10243A]/05">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-16">
          <span className="font-mono-tech text-xs font-semibold tracking-widest uppercase text-[#2457D6]">
            Engineering Methodology
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-[#10243A]">
            From Real Problems to Practical Solutions
          </h2>
          <p className="text-sm sm:text-base text-[#20252D]/75 leading-relaxed">
            Our systematic framework guides how we evaluate, architect, and refine our initiatives from raw observation to functional implementation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.num}
                className="relative p-6 rounded-3xl bg-[#FAFAF8] border border-[#10243A]/06 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading text-2xl font-extrabold text-[#2457D6]">
                      {s.num}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white border border-[#10243A]/10 flex items-center justify-center text-[#10243A]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="font-heading text-base font-bold text-[#10243A] mb-2">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#20252D]/75 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <p className="font-mono-tech text-xs text-[#8DA8CC]">
            * Note: This lifecycle guides active technical work; early-stage concepts are actively in exploratory phases.
          </p>
        </div>
      </div>
    </section>
  );
}
