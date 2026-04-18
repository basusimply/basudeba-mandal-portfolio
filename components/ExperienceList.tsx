import { experience } from "@/lib/experience";

export function ExperienceList() {
  return (
    <div className="space-y-10">
      {experience.map((role) => (
        <div
          key={`${role.org}-${role.period}`}
          className="relative border-l border-surface-border pl-6"
        >
          <span className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-accent" />
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <h3 className="text-base font-semibold text-white">{role.org}</h3>
              <p className="text-sm text-white/80">{role.title}</p>
              {role.subtitle ? (
                <p className="mt-0.5 text-xs text-[var(--muted)]">{role.subtitle}</p>
              ) : null}
            </div>
            <p className="mt-1 font-mono text-xs text-[var(--muted)] sm:mt-0">
              {role.period}
            </p>
          </div>
          <ul className="mt-4 list-disc space-y-2 pl-4 text-sm leading-relaxed text-[var(--muted)] marker:text-accent/80">
            {role.bullets.map((b, i) => (
              <li key={`${role.org}-${i}`}>{b}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
