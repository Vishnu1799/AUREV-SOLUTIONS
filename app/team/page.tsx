import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { teamMembers } from "@/data/team";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/SocialIcons";
import { ShieldCheck, UserCheck } from "lucide-react";

export default function TeamPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF8]">
      <Navbar />

      <main className="flex-1">
        {/* Hero Banner */}
        <section className="pt-12 pb-12 sm:pt-16 sm:pb-16 bg-blueprint-grid border-b border-[#10243A]/05">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#10243A]/10 text-xs font-mono-tech font-semibold text-[#10243A]">
              <span>Initiative Leadership</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-[#10243A]">
              Founding Team & Leadership
            </h1>

            <p className="text-base sm:text-lg text-[#20252D]/80 max-w-3xl leading-relaxed">
              AUREV SOLUTIONS is a founder-led engineering and innovation initiative. Our leadership drives technical architecture, creative problem-solving, and strategic product development.
            </p>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="tactile-card rounded-3xl p-8 flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    {/* Top Identity Block */}
                    <div className="flex items-center justify-between">
                      <div className="w-16 h-16 rounded-3xl bg-[#10243A] text-white flex items-center justify-center font-heading text-xl font-bold shadow-md">
                        {member.initials}
                      </div>
                      <span className="font-mono-tech text-xs text-[#8DA8CC] uppercase">
                        Core Leader
                      </span>
                    </div>

                    {/* Member Details */}
                    <div>
                      <h2 className="font-heading text-2xl font-bold text-[#10243A]">
                        {member.name}
                      </h2>
                      <div className="font-mono-tech text-xs font-semibold text-[#2457D6] mt-1">
                        {member.designation}
                      </div>
                      <p className="text-xs text-[#20252D]/70 font-medium mt-1">
                        {member.roleShort}
                      </p>
                    </div>

                    {/* Responsibilities */}
                    <div className="space-y-3 pt-2">
                      <span className="font-mono-tech text-xs font-semibold text-[#10243A] uppercase tracking-wide">
                        Assigned Responsibilities
                      </span>
                      <ul className="space-y-2">
                        {member.responsibilities.map((resp, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-xs text-[#20252D]/80 leading-relaxed"
                          >
                            <span className="text-[#2457D6] font-bold mt-0.5">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Connect Footer */}
                  <div className="pt-6 border-t border-[#10243A]/05 mt-8 flex items-center justify-between">
                    <span className="text-xs font-medium text-[#10243A]">Direct Connect:</span>
                    <div className="flex items-center gap-2">
                      {member.links.github && (
                        <a
                          href={member.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full text-[#10243A] hover:text-[#2457D6] hover:bg-black/5 transition-colors"
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
                          className="p-2 rounded-full text-[#10243A] hover:text-[#2457D6] hover:bg-black/5 transition-colors"
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
                          className="p-2 rounded-full text-[#10243A] hover:text-[#2457D6] hover:bg-black/5 transition-colors"
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

            {/* Transparency Disclosure */}
            <div className="p-6 rounded-3xl bg-white border border-[#10243A]/08 max-w-3xl mx-auto flex items-start gap-4 text-xs text-[#20252D]/75 leading-relaxed">
              <ShieldCheck className="w-5 h-5 text-[#2457D6] flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-[#10243A] block mb-1">
                  Transparency & Leadership Governance
                </span>
                <p>
                  Designations are proposed internal leadership designations. AUREV SOLUTIONS does not fabricate degrees, historical corporate tenures, or unverified accomplishments. Specific project contributions are documented accurately on each individual case study.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
