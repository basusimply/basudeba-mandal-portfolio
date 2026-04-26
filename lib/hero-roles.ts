/**
 * Rotating hero: each slide pairs a role title with a niche tagline.
 * Keep role + tagline in one object — never duplicate elsewhere.
 */
export type HeroRoleSlide = {
  role: string;
  tagline: string;
};

export const heroRoleSlides: readonly HeroRoleSlide[] = [
  {
    role: "DevOps and SRE Consultant",
    tagline:
      "Transforming fragile delivery pipelines into reliable, automated, and SLO-driven production systems.",
  },
  {
    role: "Cloud Platform Engineer",
    tagline:
      "Building scalable cloud platforms that eliminate infrastructure chaos and enable developer self-service.",
  },
  {
    role: "Kubernetes Engineer (CNCF Kubernetes)",
    tagline:
      "Designing and operating production-grade Kubernetes platforms that are secure, scalable, and resilient.",
  },
];
