/**
 * Compact “Proven impact” row — headline themes; optional link to a case study.
 * Keep lighter than the full “Impact by the numbers” block.
 */
export type ProvenImpactItem = {
  value: string;
  label: string;
  detail: string;
  caseStudySlug?: string;
};

export const provenImpact: ProvenImpactItem[] = [
  {
    value: "5×",
    label: "Release cadence",
    detail: "Standardized CI/CD platforms and promotion paths",
    caseStudySlug: "standardized-cicd-platform-5x",
  },
  {
    value: "~80%",
    label: "Non-prod savings",
    detail: "Scheduling, right-sizing, and cost visibility in dev/test",
    caseStudySlug: "cloud-cost-optimization-nonprod",
  },
  {
    value: "Earlier",
    label: "Security signals",
    detail: "DevSecOps controls wired into the delivery pipeline",
    caseStudySlug: "devsecops-embedding-security-compliance-cicd",
  },
  {
    value: "99.95%",
    label: "SLO focus",
    detail: "Availability and error budgets for critical services",
    caseStudySlug: "slo-reliability-99-95-production-availability",
  },
];