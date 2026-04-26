export type CapabilityArea = {
  id: string;
  title: string;
  items: string[];
};

export const capabilityTitle =
  "DevOps, Kubernetes, SRE and Platform Engineering Capabilities" as const;

export const capabilityIntro =
  "Leveraging cutting-edge technologies to build intelligent, scalable, and cost-effective solutions." as const;

export const capabilityAreas: CapabilityArea[] = [
  {
    id: "devops",
    title: "DevOps",
    items: [
      "End-to-End CI/CD Framework Design",
      "DevSecOps & Security Integration",
      "DevOps Maturity Assessment & Roadmap",
      "Team Enablement & Operational Excellence",
      "Toolchain Selection & Best-Practice Adoption",
    ],
  },
  {
    id: "sre",
    title: "SRE",
    items: [
      "Reliability Engineering (SLIs, SLOs & Error Budgets)",
      "Observability & Incident Management",
      "Performance Optimization & Cost Efficiency",
    ],
  },
  {
    id: "kubernetes",
    title: "Kubernetes",
    items: [
      "Production-Ready Kubernetes Cluster Setup",
      "Application Modernization & Cloud-Native Deployments",
      "Kubernetes Security & Governance",
    ],
  },
  {
    id: "platform",
    title: "Platform Engineering",
    items: [
      "Internal Developer Platform (IDP) Design",
      "Standardized Tooling & Golden Templates",
      "Multi-Cloud & Hybrid Platform Enablement",
    ],
  },
];
