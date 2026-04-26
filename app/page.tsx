import { WorkGrid } from "@/components/WorkGrid";
import { CaseStudiesIntro } from "@/components/CaseStudiesIntro";
import { ContactSection } from "@/components/ContactSection";
import { Hero } from "@/components/Hero";
import { SectionLabel } from "@/components/SectionLabel";
import { HeroStats } from "@/components/HeroStats";
import { RoleBlurb } from "@/components/RoleBlurb";
import { ProvenImpactRow } from "@/components/ProvenImpactRow";
import { ImpactByNumbers } from "@/components/ImpactByNumbers";
import { CapabilitiesSection } from "@/components/CapabilitiesSection";
import { BlogTeaser } from "@/components/BlogTeaser";
import Link from "next/link";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="border-b border-surface-border bg-surface-elevated py-16 sm:py-20">
        <RoleBlurb />
        <div className="mt-12 sm:mt-14">
          <HeroStats />
        </div>
      </section>

      <section className="border-b border-surface-border bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Proven impact</SectionLabel>
            <p className="mt-3 text-ink-muted">
              Representative results from independent consulting and delivery in
              platform, reliability, and security—see case studies and metrics below
              for depth.
            </p>
          </div>
          <div className="mt-10">
            <ProvenImpactRow />
          </div>
        </div>
      </section>

      <section className="border-b border-surface-border bg-surface-muted/50 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel className="!text-base !font-semibold !tracking-[0.18em] sm:!text-lg sm:!tracking-[0.16em]">
              Impact by the numbers
            </SectionLabel>
            <p className="mt-3 text-lg leading-relaxed text-ink-muted sm:text-xl">
              Delivering measurable business impact through cloud, reliability, and
              automation.
            </p>
          </div>
          <div className="mt-12">
            <ImpactByNumbers />
          </div>
        </div>
      </section>

      <section
        id="capabilities"
        className="scroll-mt-24 border-b border-surface-border bg-surface py-16 sm:py-20"
      >
        <CapabilitiesSection />
      </section>

      <section
        id="about"
        className="scroll-mt-24 border-b border-surface-border bg-surface-elevated py-16 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionLabel>About</SectionLabel>
          <div className="mt-5 w-full space-y-4 text-lg leading-relaxed text-ink-muted">
            {site.about.paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="scroll-mt-24 border-b border-surface-border bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <CaseStudiesIntro
              className="mx-auto max-w-3xl text-center"
              titleAs="h2"
            />
          </div>
          <div className="mt-10">
            <WorkGrid />
          </div>
        </div>
      </section>

      <section className="border-b border-surface-border bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SectionLabel>Blog</SectionLabel>
              <p className="mt-3 max-w-2xl text-ink-muted">
                Notes on delivery, reliability, and platform engineering.
              </p>
            </div>
            <Link
              href="/blog"
              className="text-sm font-semibold text-accent hover:text-accent-hover"
            >
              View all posts →
            </Link>
          </div>
          <div className="mt-10">
            <BlogTeaser />
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-24 border-b border-surface-border bg-surface-muted/40 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionLabel>Contact</SectionLabel>
          <div className="mt-8">
            <ContactSection />
          </div>
        </div>
      </section>
    </>
  );
}
