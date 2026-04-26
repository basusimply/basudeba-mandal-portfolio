import { caseStudies } from "./case-studies";

/**
 * Top hero stat row. Case study count follows `caseStudies` so it stays accurate.
 */
export const heroStats: readonly {
  value: string;
  label: string;
  hint: string;
}[] = [
  {
    value: "13+",
    label: "Years experience",
    hint: "From ops to lead platform roles",
  },
  {
    value: String(caseStudies.length),
    label: "Case studies",
    hint: "Narrated problems, ownership, and outcomes",
  },
  {
    value: "99.95%",
    label: "Availability focus",
    hint: "SLO-driven reliability for production services",
  },
];
