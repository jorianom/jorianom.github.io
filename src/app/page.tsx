import { ProfileCard } from "@/ui/components/ProfileCard";
import { Navbar } from "@/ui/components/Navbar";
import { TechStack } from "@/ui/components/TechStack";
import { Projects } from "@/ui/components/Projects";
import { Services } from "@/ui/components/Services";
import { Experience } from "@/ui/components/Experience";
import { Education } from "@/ui/components/Education";
import { CtaSection } from "@/ui/components/CtaSection";
import { Footer } from "@/ui/components/Footer";
import Badge from "@/ui/components/Badge";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="pointer-events-none absolute -top-10 left-4 z-[70] inline-flex min-h-11 items-center rounded-lg bg-primary px-4 py-2 text-sm font-bold text-bg-dark opacity-0 shadow-lg shadow-primary/20 transition-all focus:pointer-events-auto focus:top-4 focus:opacity-100"
      >
        Saltar al contenido principal
      </a>
      <Navbar />
      <main id="main-content" className="mx-auto w-full max-w-7xl px-6">
        <ProfileCard />
        <TechStack />
        <Projects />
        <Services />
        <Experience />
        <Education />
        <Badge />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
