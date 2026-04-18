import { WorkGrid } from "@/components/WorkGrid";
import { ExperienceList } from "@/components/ExperienceList";
import { ContactSection } from "@/components/ContactSection";
import { Hero } from "@/components/Hero";

export default function HomePage() {
  return (
    <>
      <Hero />
      <section
        id="about"
        className="mx-auto max-w-5xl scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20"
      >
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          About
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-white/90">
          I focus on platforms that teams can actually operate: CI/CD that scales
          across services, Kubernetes delivery models, observability tied to
          customer journeys, and security embedded in the pipeline—not bolted on
          at the end.
        </p>
      </section>

      <section
        id="work"
        className="border-y border-surface-border bg-surface-elevated/30"
      >
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Selected work
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-[var(--muted)]">
            Outcomes and architecture from recent engagements at SLB—pipelines,
            cost, reliability, and DevSecOps.
          </p>
          <div className="mt-10">
            <WorkGrid />
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="mx-auto max-w-5xl scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20"
      >
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          Experience
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-[var(--muted)]">
          Full-time roles and a focused freelance period—most recent first.
        </p>
        <div className="mt-10">
          <ExperienceList />
        </div>
      </section>

      <section
        id="contact"
        className="border-t border-surface-border bg-gradient-radial"
      >
        <div className="mx-auto max-w-5xl scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Contact
          </h2>
          <div className="mt-8">
            <ContactSection />
          </div>
        </div>
      </section>
    </>
  );
}
