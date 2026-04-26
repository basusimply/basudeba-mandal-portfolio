import { caseStudiesSectionIntro } from "@/lib/case-studies";

type Props = {
  className?: string;
  size?: "default" | "compact";
  /** Semantic level for the main title (Selected work). Use h1 on /work, h2 in home work section, p on case detail. */
  titleAs?: "p" | "h1" | "h2";
};

const pTitleDefault = "text-lg font-semibold leading-snug text-ink sm:text-xl";
const pTitleCompact = "text-base font-semibold leading-snug text-ink";
const h1Title = "text-3xl font-bold tracking-tight text-ink sm:text-4xl";
const h2Title = "text-lg font-semibold leading-snug text-ink sm:text-xl";

export function CaseStudiesIntro({
  className = "",
  size = "default",
  titleAs = "p",
}: Props) {
  const isCompact = size === "compact";
  const pClass = isCompact ? pTitleCompact : pTitleDefault;
  const titleEl =
    titleAs === "h1" ? (
      <h1 className={h1Title}>{caseStudiesSectionIntro.title}</h1>
    ) : titleAs === "h2" ? (
      <h2 className={h2Title}>{caseStudiesSectionIntro.title}</h2>
    ) : (
      <p className={pClass}>{caseStudiesSectionIntro.title}</p>
    );

  return (
    <div className={className}>
      <p
        className={
          isCompact
            ? "font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-accent"
            : "font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent"
        }
      >
        {caseStudiesSectionIntro.eyebrow}
      </p>
      <div
        className={isCompact ? "mt-2" : "mt-3"}
      >
        {titleEl}
      </div>
      <p
        className={
          isCompact
            ? "mt-1.5 font-mono text-xs uppercase tracking-[0.14em] text-ink-muted"
            : "mt-2 font-mono text-sm uppercase tracking-[0.12em] text-ink-muted"
        }
      >
        {caseStudiesSectionIntro.line2}
      </p>
    </div>
  );
}
