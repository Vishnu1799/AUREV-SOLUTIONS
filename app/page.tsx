import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { PurposeCards } from "@/components/home/PurposeCards";
import { AreasOfWork } from "@/components/home/AreasOfWork";
import { ApproachSection } from "@/components/home/ApproachSection";
import { TeamPreview } from "@/components/home/TeamPreview";
import { ContactCta } from "@/components/home/ContactCta";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF8]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <PurposeCards />
        <AreasOfWork />
        <ApproachSection />
        <TeamPreview />
        <ContactCta />
      </main>
      <Footer />
    </div>
  );
}
