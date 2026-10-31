import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { teamMembers } from "@/data/team";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/SocialIcons";

export default function TeamPage() {
  const vishnu = teamMembers[0];
  const otherMembers = teamMembers.slice(1);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF8]">
      <Navbar />

      <main className="flex-1">
        {/* Hero Banner */}
        <section className="pt-12 pb-12 sm:pt-16 sm:pb-16 bg-blueprint-grid border-b border-[#10243A]/05">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#10243A]/10 text-xs font-mono-tech font-bold text-[#10243A]">
              <span>Executive Leadership</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-[#10243A]">
              Leadership & Innovation Team
            </h1>

            <p className="text-base sm:text-lg text-[#20252D]/80 max-w-3xl leading-relaxed">
              Guiding technical architecture, software engineering, and strategic product innovation across AUREV SOLUTIONS.
            </p>
          </div>
        </section>

        {/* Featured Founder & Leadership Showcase */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            {/* Vishnu Prashanth S: Prominent Editorial Showcase */}
            <div className="tactile-card rounded-3xl p-8 sm:p-10 lg:p-12 overflow-hidden bg-white border-2 border-[#10243A]/10 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Large Editorial Portrait */}
                <div className="lg:col-span-5 relative">
                  <div className="relative mx-auto aspect-[3/4] max-w-md w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-[#10243A]/10 bg-[#10243A]">
                    <Image
                      src="/vishnu-prashanth.jpg"
                      alt="Vishnu Prashanth S — Founder & Chief Technology Officer"
                      fill
                      className="object-cover object-center"
                      priority
                    />
                  </div>
                </div>

                {/* Founder Details */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <span className="font-mono-tech text-xs font-bold uppercase tracking-widest text-[#E5A93C]">
                      Founder & Chief Technology Officer
                    </span>
                    <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#10243A] mt-1">
                      {vishnu.name}
                    </h2>
                    <p className="text-sm font-semibold text-[#2457D6] mt-1">
                      {vishnu.roleShort}
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <span className="font-mono-tech text-xs font-bold text-[#10243A] uppercase tracking-wide">
                      Core Responsibilities & Technical Direction
                    </span>
                    <ul className="space-y-2.5">
                      {vishnu.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-[#20252D]/85 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2457D6] mt-2 flex-shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Connect Links */}
                  <div className="pt-6 border-t border-[#10243A]/08 flex items-center gap-3">
                    <span className="text-xs font-bold text-[#10243A]">Direct Connect:</span>
                    {vishnu.links.github && (
                      <a
                        href={vishnu.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full text-[#10243A] hover:text-[#2457D6] hover:bg-black/5 transition-colors"
                        aria-label="Vishnu Prashanth GitHub"
                      >
                        <GithubIcon className="w-5 h-5" />
                      </a>
                    )}
                    {vishnu.links.linkedin && (
                      <a
                        href={vishnu.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full text-[#10243A] hover:text-[#2457D6] hover:bg-black/5 transition-colors"
                        aria-label="Vishnu Prashanth LinkedIn"
                      >
                        <LinkedinIcon className="w-5 h-5" />
                      </a>
                    )}
                    {vishnu.links.instagram && (
                      <a
                        href={vishnu.links.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full text-[#10243A] hover:text-[#2457D6] hover:bg-black/5 transition-colors"
                        aria-label="Vishnu Prashanth Instagram"
                      >
                        <InstagramIcon className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Other Leadership Team Members */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherMembers.map((member) => (
                <div
                  key={member.id}
                  className="tactile-card rounded-3xl p-8 flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="w-16 h-16 rounded-2xl bg-[#10243A] text-white flex items-center justify-center font-heading text-xl font-extrabold shadow-sm">
                        {member.initials}
                      </div>
                      <span className="font-mono-tech text-xs text-[#8DA8CC] uppercase font-bold">
                        Leadership
                      </span>
                    </div>

                    <div>
                      <h3 className="font-heading text-2xl font-bold text-[#10243A]">
                        {member.name}
                      </h3>
                      <div className="font-mono-tech text-xs font-semibold text-[#2457D6] mt-1">
                        {member.designation}
                      </div>
                      <p className="text-xs text-[#20252D]/70 font-medium mt-1">
                        {member.roleShort}
                      </p>
                    </div>

                    <div className="space-y-2.5 pt-2">
                      <span className="font-mono-tech text-xs font-bold text-[#10243A] uppercase tracking-wide">
                        Assigned Responsibilities
                      </span>
                      <ul className="space-y-2">
                        {member.responsibilities.map((resp, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-xs text-[#20252D]/85 leading-relaxed"
                          >
                            <span className="text-[#2457D6] font-bold">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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
