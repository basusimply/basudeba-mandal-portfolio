export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  company: string;
  role: string;
  problem: string;
  ownership: string;
  outcome: string;
  stack: string[];
  metaTitle: string;
  metaDescription: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "ado-cicd-kubernetes-odf",
    title: "ADO CI/CD framework for ODF on Azure Kubernetes Service",
    summary:
      "Designed an Azure DevOps CI/CD framework so engineering teams can build their own pipelines to deploy to Kubernetes-backed development, staging, and production environments for the ODF data foundation product.",
    company: "SLB",
    role: "Lead DevOps Engineer",
    problem:
      "A new data foundation product (ODF) needed a repeatable way to deliver to the cloud and Kubernetes. Teams required a self-service CI/CD model that stayed consistent across environments without slowing delivery.",
    ownership:
      "Led end-to-end design and implementation of the framework, pipeline patterns, and integration with the target platform.",
    outcome:
      "Faster, more predictable deployments across dev, staging, and production; teams could stand up compliant pipelines without reinventing integration each time.",
    stack: [
      "Azure Kubernetes Service (AKS)",
      "Azure DevOps Pipelines",
      "Argo CD",
      "Terraform",
      "Cognite Toolkit",
    ],
    metaTitle: "ADO CI/CD for ODF on AKS | Basudeba Mandal",
    metaDescription:
      "Azure DevOps CI/CD framework for ODF: self-service pipelines to AKS across dev, staging, and production at SLB.",
  },
  {
    slug: "cloud-cost-optimization-nonprod",
    title: "Non-production cloud cost optimization (~80%)",
    summary:
      "Built governance and automation to right-size and scale non-production resources, cutting cloud spend by up to 80% in non-prod environments.",
    company: "SLB",
    role: "Lead DevOps Engineer",
    problem:
      "Non-production environments were expensive because workloads stayed running outside business hours and capacity was often oversized.",
    ownership:
      "Owned architecture and implementation of optimization patterns, autoscaling, and scheduling aligned with how teams actually used those environments.",
    outcome:
      "Up to approximately 80% reduction in non-production cloud cost while keeping environments available when engineering teams needed them.",
    stack: [
      "Azure Kubernetes Service (AKS)",
      "Azure DevOps Pipelines",
      "Terraform",
      "Azure Virtual Machines",
    ],
    metaTitle: "Non-prod cloud cost optimization | Basudeba Mandal",
    metaDescription:
      "How SLB non-prod cloud costs were reduced by up to 80% through resource optimization and autoscaling.",
  },
  {
    slug: "sli-slo-reliability",
    title: "Customer journey SLIs and SLOs",
    summary:
      "Introduced user-journey–specific SLIs and SLOs with error budgets and alerting so reliability and availability could be measured and improved in line with real customer impact.",
    company: "SLB",
    role: "Lead DevOps Engineer",
    problem:
      "Services were deployed, but stability was hard to reason about. There was no shared way to measure availability or steer investment using customer-centric signals.",
    ownership:
      "Led design and contributed to implementation of metrics, SLO definitions, error budgets, and alerting tied to critical journeys.",
    outcome:
      "Engineering gained clarity on where the product stood on reliability; teams could prioritize work against error budgets and reduce noisy, unactionable alerts.",
    stack: [
      "Azure Kubernetes Service (AKS)",
      "Prometheus",
      "Grafana",
      "SLI / SLO practice",
    ],
    metaTitle: "SLI & SLO for customer journeys | Basudeba Mandal",
    metaDescription:
      "Journey-based SLIs and SLOs with Prometheus and Grafana to improve reliability at SLB.",
  },
  {
    slug: "devsecops-sdlc",
    title: "DevSecOps in the software delivery lifecycle",
    summary:
      "Embedded security into the CI/CD path so vulnerabilities were caught during development—before software reached downstream environments.",
    company: "SLB",
    role: "Lead DevOps Engineer",
    problem:
      "The CI/CD framework lacked consistent security gates, which increased risk of shipping vulnerable artifacts toward production.",
    ownership:
      "Designed and implemented security checks across the pipeline—from code to images to policy—aligned with how teams shipped software.",
    outcome:
      "Stronger security posture; issues surfaced in the development cycle before deployment to shared environments, reducing late-stage surprises.",
    stack: [
      "Azure DevOps",
      "SonarQube",
      "Unit tests & coverage",
      "Mend",
      "Trivy",
      "OPA",
      "Chainguard",
      "OWASP",
    ],
    metaTitle: "DevSecOps in CI/CD | Basudeba Mandal",
    metaDescription:
      "DevSecOps practices: SonarQube, SCA, image scanning, and policy in Azure DevOps pipelines at SLB.",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
