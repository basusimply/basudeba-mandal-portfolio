/**
 * Impact by the numbers — quantified business outcomes (no client names).
 * Groups: DevOps (3) · SRE (3) · Kubernetes (3) · Platform Engineering (1) = 10
 */
export type ImpactCategory = "devops" | "sre" | "kubernetes" | "platform";

export type ImpactMetric = {
  id: string;
  category: ImpactCategory;
  /** Hero stat: percentage, multiplier, or keyword (large type). */
  value: string;
  /** Short outcome line under the value. */
  label: string;
  /** Supporting one-liner. */
  description: string;
};

export const impactMetrics: ImpactMetric[] = [
  {
    id: "d1",
    category: "devops",
    value: "80%",
    label: "Reduction in non-production cloud costs",
    description:
      "Achieved through environment automation, scheduling, and right-sizing of CI/CD and test workloads.",
  },
  {
    id: "d2",
    category: "devops",
    value: "5×",
    label: "Faster release cycles",
    description:
      "Enabled by standardized CI/CD pipelines and GitOps-based delivery workflows.",
  },
  {
    id: "d3",
    category: "devops",
    value: "70%",
    label: "Reduction in manual deployment effort",
    description:
      "Eliminated manual releases and configuration drift using Infrastructure as Code and automated deployment workflows.",
  },
  {
    id: "s1",
    category: "sre",
    value: "99.95%",
    label: "Service availability",
    description:
      "Improved uptime by implementing SLO-driven reliability engineering and proactive monitoring.",
  },
  {
    id: "s2",
    category: "sre",
    value: "60%",
    label: "Faster incident detection (MTTD)",
    description:
      "Reduced detection time using metrics, logs, and tracing-based observability.",
  },
  {
    id: "s3",
    category: "sre",
    value: "50%",
    label: "Reduction in incident recovery time (MTTR)",
    description:
      "Achieved through runbooks, alert tuning, and automated remediation.",
  },
  {
    id: "k1",
    category: "kubernetes",
    value: "3×",
    label: "Improvement in application scalability",
    description:
      "Enabled horizontal auto-scaling and cloud-native traffic handling using Kubernetes.",
  },
  {
    id: "k2",
    category: "kubernetes",
    value: "40–60%",
    label: "Reduction in resource waste",
    description:
      "Optimized CPU and memory utilization with right-sizing and scheduling best practices.",
  },
  {
    id: "k3",
    category: "kubernetes",
    value: "0",
    label: "Downtime in production",
    description:
      "Implemented rolling updates, probes, and safe deployment strategies for Kubernetes workloads.",
  },
  {
    id: "p1",
    category: "platform",
    value: "65%",
    label: "Faster developer onboarding time",
    description:
      "Internal developer platforms and golden paths that reduced environment setup from days to hours.",
  },
];
