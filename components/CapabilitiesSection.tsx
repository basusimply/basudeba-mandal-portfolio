import {
  capabilityAreas,
  capabilityIntro,
  capabilityTitle,
} from "@/lib/capabilities";
import type { LucideIcon } from "lucide-react";
import { Workflow, LineChart, Boxes, Layers } from "lucide-react";

const areaIcons: Record<string, LucideIcon> = {
  devops: Workflow,
  sre: LineChart,
  kubernetes: Boxes,
  platform: Layers,
};

export function CapabilitiesSection() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          {capabilityTitle}
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-ink-muted sm:text-xl">
          {capabilityIntro}
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 sm:gap-7">
        {capabilityAreas.map((area) => {
          const Icon = areaIcons[area.id] ?? Workflow;
          return (
            <article
              key={area.id}
              className="group relative flex flex-col text-left [transform-style:preserve-3d]"
            >
              {/* 3D card: layered shadow + bevel + lift on hover */}
              <div
                className="relative h-full overflow-hidden rounded-2xl border border-slate-200/90 bg-gradient-to-b from-white via-slate-50/90 to-slate-100/80 p-6 shadow-[0_1px_0_0_rgba(255,255,255,0.85)_inset,0_3px_0_0_#e2e8f0,0_10px_28px_-6px_rgba(15,23,42,0.14),0_0_0_1px_rgba(15,23,42,0.04)] transition duration-300 ease-out before:pointer-events-none before:absolute before:inset-x-3 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/90 before:to-transparent after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-slate-200/60 group-hover:-translate-y-1.5 group-hover:shadow-[0_1px_0_0_rgba(255,255,255,0.9)_inset,0_4px_0_0_#cbd5e1,0_20px_38px_-8px_rgba(15,23,42,0.2),0_0_0_1px_rgba(13,148,136,0.06)]"
              >
                <div className="relative z-[1] flex items-start gap-4">
                  {/* Icon “logo” plate */}
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-b from-white to-slate-100/95 text-accent shadow-[0_2px_0_0_#e2e8f0,0_5px_14px_rgba(15,23,42,0.1),inset_0_1px_0_0_rgba(255,255,255,0.95)] ring-1 ring-slate-200/70"
                    aria-hidden
                  >
                    <Icon
                      className="h-6 w-6 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]"
                      strokeWidth={1.9}
                    />
                  </div>
                  <h3 className="pt-1.5 text-lg font-bold text-ink">
                    {area.title}
                  </h3>
                </div>
                <ul className="relative z-[1] mt-4 space-y-2.5 border-t border-slate-200/60 pt-4 text-sm leading-relaxed text-ink-muted">
                  {area.items.map((item) => (
                    <li key={item} className="flex gap-2.5 pl-0.5">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_0_1px_rgba(13,148,136,0.25)]"
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
