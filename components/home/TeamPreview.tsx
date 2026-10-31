import Link from "next/link";
import { teamMembers } from "@/data/team";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/SocialIcons";

export function TeamPreview() {
  return (
    <section className="py-20 md:py-28 bg-[#FAFAF8] border-t border-[#10243A]/05">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-xl">
            <span className="font-mono-tech text-xs font-semibold tracking-widest uppercase text-[#2457D6]">
              Founding Leadership
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-[#10243A]">
              The Team Driving Innovation
            </h2>
            <p className="text-base text-[#20252D]/75 leading-relaxed">
              Guiding our software engineering, creative problem-solving, and strategic product innovation.
            </p>
          </div>

          <Link
            href="/team"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2457D6] hover:text-[#1A44B0] group"
          >
            <span>Learn More About Our Team</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="tactile-card rounded-3xl p-6 flex flex-col justify-between"
            >
              <div>
                {/* Header: Monogram Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#10243A] text-white flex items-center justify-center font-heading text-lg font-bold shadow-sm">
                    {member.initials}
                  </div>
                  <span className="font-mono-tech text-[11px] text-[#8DA8CC] uppercase">
                    Core Leader
                  </span>
                </div>

                {/* Name & Designation */}
                <h3 className="font-heading text-xl font-bold text-[#10243A] mb-1">
                  {member.name}
                </h3>
                <div className="font-mono-tech text-xs font-semibold text-[#2457D6] mb-4">
                  {member.designation}
                </div>

                {/* Primary Responsibility Highlights */}
                <ul className="space-y-1.5 text-xs text-[#20252D]/80 leading-relaxed mb-6">
                  {member.responsibilities.slice(0, 3).map((r, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-[#2457D6] font-bold">•</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social Links Footer */}
              <div className="pt-4 border-t border-[#10243A]/05 flex items-center justify-between">
                <span className="text-xs font-medium text-[#10243A]">Connect:</span>
                <div className="flex items-center gap-2">
                  {member.links.github && (
                    <a
                      href={member.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-full text-[#10243A] hover:text-[#2457D6] hover:bg-black/5 transition-colors"
                      aria-label={`${member.name} GitHub`}
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                  {member.links.linkedin && (
                    <a
                      href={member.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-full text-[#10243A] hover:text-[#2457D6] hover:bg-black/5 transition-colors"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <LinkedinIcon className="w-4 h-4" />
                    </a>
                  )}
                  {member.links.instagram && (
                    <a
                      href={member.links.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-full text-[#10243A] hover:text-[#2457D6] hover:bg-black/5 transition-colors"
                      aria-label={`${member.name} Instagram`}
                    >
                      <InstagramIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
