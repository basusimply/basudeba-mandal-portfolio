export type Role = {
  org: string;
  title: string;
  subtitle?: string;
  period: string;
  bullets: string[];
};

export const experience: Role[] = [
  {
    org: "SLB",
    title: "Lead DevOps Engineer",
    subtitle: "Promoted from Senior DevOps Engineer",
    period: "March 2020 – Present",
    bullets: [
      "Architected and implemented end-to-end DevOps and CI/CD platforms using Azure DevOps, GitHub Actions, and GitLab, integrated with Kubernetes (AKS, GKE) for consistent multi-cloud deployments across Azure and GCP.",
      "Owned and scaled containerized application platforms using Docker and Kubernetes, establishing standardized deployment patterns and improving environment consistency across teams.",
      "Defined and operationalized SRE practices (SLIs, SLOs, error budgets) using Prometheus and Grafana, enabling data-driven reliability improvements aligned with customer impact.",
    ],
  },
  {
    org: "Accenture",
    title: "Senior Software Engineer – DevOps",
    period: "November 2016 – March 2020",
    bullets: [
      "Designed and implemented CI/CD and automation practices, reducing manual effort and improving deployment speed and consistency.",
      "Led adoption of containerized, scalable deployments for more resilient and portable application architectures.",
      "Drove large-scale infrastructure automation and security improvements, enhancing reliability, compliance, and operational efficiency across environments.",
    ],
  },
  {
    org: "Freelance (independent consulting)",
    title: "Senior Software Engineer – DevOps",
    subtitle: "Concurrent engagement alongside full-time role",
    period: "July 2019 – December 2019",
    bullets: [
      "As a DevOps consultant, enhanced customer CI/CD with DevSecOps: unit tests, coverage, static analysis, library analysis, and image scanning.",
      "Standardized and automated configuration management with Ansible across 30+ microservices, reducing deployment inconsistencies and improving release reliability.",
      "Implemented centralized logging and monitoring with Splunk and Dynatrace for real-time visibility, proactive alerting, and faster incident resolution.",
    ],
  },
  {
    org: "TCS",
    title: "IT Analyst",
    subtitle:
      "Progression from graduate hire through Systems Engineer to IT Analyst",
    period: "March 2012 – November 2016",
    bullets: [
      "Owned stabilization and operations of multi-environment landscapes (Dev, SIT, UAT, Prod), keeping releases unblocked and downstream teams on reliable systems.",
      "Reduced manual toil and recurring production issues by automating repetitive work and proactive checks, improving day-to-day reliability.",
      "Led end-to-end integration of a large, multi-component platform in a client-facing role across distributed teams, resolving cross-system dependencies for a high-visibility international project.",
    ],
  },
];
