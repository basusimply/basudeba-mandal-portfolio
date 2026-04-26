"use client";

import { useEffect, useRef, useState } from "react";
import type { HeroRoleSlide } from "@/lib/hero-roles";

type Props = {
  slides: readonly HeroRoleSlide[];
  /** Time each slide (role + tagline) stays fully visible. */
  intervalMs?: number;
  /** Fade-out duration before advancing (ms). */
  fadeMs?: number;
};

export function HeroRotatingRoles({
  slides,
  intervalMs = 5500,
  fadeMs = 320,
}: Props) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const fadeAfterRef = useRef<number | null>(null);

  useEffect(() => {
    if (slides.length <= 1) return;

    const id = window.setInterval(() => {
      setVisible(false);
      if (fadeAfterRef.current != null) {
        window.clearTimeout(fadeAfterRef.current);
        fadeAfterRef.current = null;
      }
      fadeAfterRef.current = window.setTimeout(() => {
        setIndex((i) => (i + 1) % slides.length);
        setVisible(true);
        fadeAfterRef.current = null;
      }, fadeMs);
    }, intervalMs);

    return () => {
      window.clearInterval(id);
      if (fadeAfterRef.current != null) {
        window.clearTimeout(fadeAfterRef.current);
        fadeAfterRef.current = null;
      }
    };
  }, [slides.length, intervalMs, fadeMs]);

  if (slides.length === 0) return null;

  const current = slides[index];

  return (
    <div
      className="mx-auto w-full max-w-2xl"
      aria-live="polite"
      aria-atomic="true"
    >
      {/* min-height reserves space for longest role + tagline to limit layout shift */}
      <div
        className={`flex min-h-[12.5rem] flex-col items-center justify-start text-center transition-opacity duration-300 sm:min-h-[11.5rem] ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="text-balance text-lg font-semibold leading-snug text-accent sm:text-xl md:text-2xl">
          {current.role}
        </p>
        <p className="mt-3 text-balance text-sm leading-relaxed text-ink sm:mt-4 sm:text-base">
          {current.tagline}
        </p>
      </div>
    </div>
  );
}
