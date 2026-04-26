/**
 * Case studies (Selected work). Shown on `/` and `/work` with
 * `caseStudiesSectionIntro`. Add any number of entries, typically 1–15; each
 * has a page at `/work/[slug]`. Do not name employers in public copy; use
 * `company: ""` when not applicable.
 *
 * **What to provide (author-friendly names → field):**
 * - **Heading** → `title`
 * - **Brief description** → `summary` (card + intro on detail page)
 * - **Context and problem** → `problem` (section label on page: "Context & problem")
 * - **Ownership** → `ownership`
 *
 * **Also set for each new study:** `slug` (unique, `kebab-case`, stable URL),
 * `company`, `role`, `outcome`, `stack` (tags), and SEO `metaTitle` +
 * `metaDescription`.
 *
 * Author fields: Heading, brief description, context/problem, ownership, outcome,
 * stack/tools — map to the `CaseStudy` fields above.
 */
export type CaseStudy = {
  /** URL segment, e.g. `my-study-name` → `/work/my-study-name` */
  slug: string;
  /** Heading */
  title: string;
  /** Brief description */
  summary: string;
  company: string;
  role: string;
  /** Context and problem */
  problem: string;
  /** Ownership */
  ownership: string;
  /**
   * Result / business impact (section "Outcome"). Use a `string` for a short
   * paragraph, or a `string[]` for bullet-style outcomes.
   */
  outcome: string | string[];
  stack: string[];
  metaTitle: string;
  metaDescription: string;
};

/**
 * Shown at the top of the case study list, home work grid, and each study page.
 * Eyebrow = context; title = section name; line2 = domain scope.
 */
export const caseStudiesSectionIntro = {
  eyebrow: "Independent consulting",
  title: "Selected work",
  line2: "DevOps • SRE • Kubernetes • Platform Engineering",
} as const;

/*
  Paste template (fill and append to `caseStudies`):
  outcome can be a single string, or a string array for bulleted results.
  {
    slug: "your-slug",
    title: "",
    summary: "",
    company: "",
    role: "",
    problem: "",
    ownership: "",
    outcome: "",
    stack: [""],
    metaTitle: "… | Your name",
    metaDescription: "…",
  },
*/

export const caseStudies: CaseStudy[] = [
  {
    slug: "standardized-cicd-platform-5x",
    title:
      "Designing a Standardized CI/CD Platform to Accelerate Software Delivery by 5×",
    summary:
      "Designed and implemented a standardized CI/CD platform to enable faster, safer, and repeatable software delivery across multiple teams and applications. The solution replaced fragmented pipelines with a unified, scalable framework, significantly improving deployment velocity and consistency across environments.",
    company: "",
    role: "Lead DevOps Engineer",
    problem:
      "The organization had multiple teams building and deploying applications using inconsistent CI/CD approaches. Pipelines were manually crafted, duplicated across repositories, and tightly coupled to individual environments. This resulted in slow release cycles, frequent deployment failures, and heavy operational dependency on a few key engineers. There was no standardized promotion strategy across environments, making releases error-prone and difficult to scale.",
    ownership:
      "Led the end-to-end design and implementation of the CI/CD framework, including pipeline architecture, reusable templates, environment promotion strategy, and integration with target deployment platforms. Collaborated with application teams to onboard workloads and establish best practices.",
    outcome: [
      "Enabled 5× faster release cycles by eliminating manual steps and standardizing deployments",
      "Improved deployment reliability through repeatable, version-controlled pipelines",
      "Reduced onboarding time for new applications and teams",
      "Provided a scalable CI/CD foundation that supported future growth without increasing operational overhead",
      "Directly improved time-to-market while increasing confidence in production releases",
    ],
    stack: [
      "Azure DevOps",
      "GitLab CI",
      "Kubernetes",
      "Argo CD",
      "Helm",
      "Terraform",
      "Azure",
      "GCP",
    ],
    metaTitle: "Standardized CI/CD platform—5× faster delivery | Basudeba Mandal",
    metaDescription:
      "End-to-end CI/CD framework, reusable templates, and promotion across Azure DevOps, GitLab, Kubernetes, and Terraform.",
  },
  {
    slug: "devsecops-embedding-security-compliance-cicd",
    title:
      "Embedding Security and Compliance into CI/CD Pipelines (DevSecOps Transformation)",
    summary:
      "Implemented DevSecOps practices by integrating automated security and compliance controls directly into CI/CD pipelines. This ensured that applications were continuously validated for vulnerabilities, policy violations, and compliance risks without slowing down software delivery.",
    company: "",
    role: "Lead DevOps Engineer",
    problem:
      "Security checks were traditionally performed late in the release cycle or manually by separate teams. This caused frequent last-minute delays, audit failures, and growing security risks in production. Developers lacked visibility into vulnerabilities introduced during development, and security teams struggled to scale reviews as application velocity increased.",
    ownership:
      "Drove the DevSecOps initiative, designing security-first pipeline patterns and leading the integration of security tools into existing CI/CD workflows. Partnered with security and compliance teams to define policies, quality gates, and audit requirements.",
    outcome: [
      "Shifted security left by enforcing automated checks at every pipeline stage",
      "Reduced security risks and audit surprises by ensuring continuous compliance",
      "Enabled faster approvals by providing automated audit evidence",
      "Improved collaboration between development, security, and operations teams",
      "Organizations benefited from secure software delivery without sacrificing speed",
    ],
    stack: [
      "Azure DevOps",
      "Kubesec",
      "Unit Test",
      "SonarQube",
      "Mend",
      "Trivy",
      "OPA",
      "Vault",
      "OWASP",
      "Chainguard",
    ],
    metaTitle: "DevSecOps: security in CI/CD | Basudeba Mandal",
    metaDescription:
      "DevSecOps transformation: automated security and compliance in Azure DevOps and GitLab pipelines with SonarQube, Trivy, OPA, Vault, and more.",
  },
  {
    slug: "infrastructure-as-code-provisioning",
    title:
      "Automating Infrastructure Provisioning Using Infrastructure as Code (IaC)",
    summary:
      "Implemented Infrastructure as Code (IaC) to automate the provisioning and management of cloud infrastructure across multiple environments. This approach replaced manual, error-prone processes with version-controlled, repeatable infrastructure deployments.",
    company: "",
    role: "Lead DevOps Engineer",
    problem:
      "Infrastructure provisioning was largely manual and inconsistent across environments. Teams relied on ad-hoc scripts or console-based changes, which led to configuration drift, deployment delays, and difficulty reproducing environments. Scaling infrastructure or spinning up new environments required significant manual effort and operational involvement, slowing down development and increasing the risk of misconfigurations.",
    ownership:
      "Led the design and implementation of Infrastructure as Code, defining modular, reusable infrastructure patterns and standards. Worked closely with development and operations teams to migrate existing infrastructure and enable self-service provisioning workflows.",
    outcome: [
      "Reduced environment creation time from days to minutes",
      "Eliminated configuration drift through version-controlled infrastructure",
      "Improved infrastructure reliability and auditability",
      "Enabled teams to scale environments consistently without increasing operational overhead",
      "Faster delivery, safer infrastructure changes, and improved confidence in cloud operations",
    ],
    stack: [
      "Terraform",
      "Azure",
      "GCP",
      "Azure DevOps",
      "Remote state backends",
      "Git",
    ],
    metaTitle: "IaC: automated cloud infrastructure | Basudeba Mandal",
    metaDescription:
      "Terraform, modular patterns, and self-service provisioning across Azure and GCP.",
  },
  {
    slug: "cloud-cost-optimization-nonprod",
    title: "Optimizing Dev/Test Environments to Reduce Cloud Costs by 80%",
    summary:
      "Optimized non-production cloud environments through automation, scheduling, and right-sizing strategies to significantly reduce infrastructure costs while maintaining developer productivity and deployment velocity.",
    company: "",
    role: "Lead DevOps Engineer",
    problem:
      "Dev and test environments were running continuously regardless of usage, leading to excessive cloud spending. CI/CD infrastructure, build agents, and Kubernetes clusters were over-provisioned and rarely utilized at full capacity. There was limited visibility into resource utilization, and cost optimization was handled reactively rather than proactively.",
    ownership:
      "Led the cost optimization initiative, designing automation strategies for environment lifecycle management and implementing resource optimization across non-production infrastructure. Collaborated with engineering teams to ensure cost reductions did not impact delivery workflows.",
    outcome: [
      "Achieved 80% reduction in non-production cloud costs",
      "Improved infrastructure utilization without affecting developer velocity",
      "Introduced visibility and accountability into cloud spending",
      "Established sustainable cost-optimization practices as part of DevOps workflows",
      "Reinvested savings into innovation while maintaining operational efficiency",
    ],
    stack: [
      "Azure",
      "GCP",
      "Azure DevOps",
      "Custom scripts",
      "OpenCost",
    ],
    metaTitle: "Dev/test cloud cost reduction (~80%) | Basudeba Mandal",
    metaDescription:
      "Non-prod cost optimization: automation, OpenCost, visibility, and DevOps practices that cut dev/test spend.",
  },
  {
    slug: "slo-reliability-99-95-production-availability",
    title:
      "Improving Production Availability to 99.95% Using SLO-Driven Reliability Engineering",
    summary:
      "Improved system reliability by introducing Site Reliability Engineering (SRE) practices centered around Service Level Objectives (SLOs) and error budgets. This helped align engineering efforts with business expectations for availability and performance.",
    company: "",
    role: "Lead DevOps Engineer",
    problem:
      "The organization lacked a clear definition of reliability targets. Teams reacted to incidents but had no measurable reliability goals, leading to inconsistent availability and conflicting priorities between speed and stability. Production incidents were frequent, and reliability improvements were reactive rather than systematic.",
    ownership:
      "Led the definition and implementation of SRE fundamentals, including SLIs, SLOs, and error budgets. Worked with application and platform teams to embed reliability targets into delivery and operational workflows.",
    outcome: [
      "Achieved 99.95% availability for critical production services",
      "Created a shared understanding of reliability across engineering and business teams",
      "Enabled data-driven decision-making using error budgets",
      "Reduced firefighting by focusing on sustained reliability improvements",
      "Predictable system behavior with room for teams to innovate safely",
    ],
    stack: [
      "Prometheus",
      "Grafana",
      "Alertmanager",
      "Azure",
      "GCP",
      "PagerDuty",
    ],
    metaTitle: "SRE & SLOs: 99.95% availability | Basudeba Mandal",
    metaDescription:
      "SLO-driven reliability: SLIs, error budgets, Prometheus, Grafana, and operational alignment.",
  },
  {
    slug: "full-stack-observability-mttd-60",
    title:
      "Reducing Incident Detection Time by 60% Through Full-Stack Observability",
    summary:
      "Designed and implemented end-to-end observability covering metrics, logs, and traces to enable rapid detection of production issues and reduce mean time to detect (MTTD).",
    company: "",
    role: "Lead DevOps Engineer",
    problem:
      "Production monitoring was fragmented and alert-heavy, leading to alert fatigue and delayed incident detection. Logs were siloed, and there was no unified view to correlate metrics, traces, and logs. Engineers often discovered issues through customer reports rather than proactive alerts.",
    ownership:
      "Led the observability strategy, selecting tools, defining signal standards, and implementing dashboards and alerting best practices. Guided teams on how to instrument applications and interpret telemetry effectively.",
    outcome: [
      "Reduced incident detection time by 60%",
      "Improved signal-to-noise ratio in alerts",
      "Enabled faster root cause analysis through correlation of telemetry",
      "Increased confidence in monitoring coverage across production systems",
      "More proactive operations and less reactive firefighting",
    ],
    stack: [
      "Prometheus",
      "Grafana",
      "Alertmanager",
      "PagerDuty",
      "Splunk",
      "Kiali",
    ],
    metaTitle: "Observability: 60% faster incident detection | Basudeba Mandal",
    metaDescription:
      "Full-stack metrics, logs, and traces: MTTD reduction with Prometheus, Grafana, Splunk, and Kiali.",
  },
  {
    slug: "proactive-reliability-mission-critical-systems",
    title:
      "Implementing Proactive Reliability Engineering for Mission-Critical Systems",
    summary:
      "Introduced proactive reliability practices such as capacity planning, load testing, and failure modeling to prevent incidents before they occurred.",
    company: "",
    role: "Lead DevOps Engineer",
    problem:
      "Production systems were scaled reactively, often failing during traffic spikes or unexpected load. There was little understanding of system limits, and reliability improvements were driven by outages rather than preparedness.",
    ownership:
      "Led proactive reliability initiatives, including capacity modeling, resilience testing, and performance benchmarking. Worked with application and infrastructure teams to address systemic risks identified through testing.",
    outcome: [
      "Significantly reduced incident frequency during peak traffic periods",
      "Improved confidence in system scalability and performance",
      "Enabled informed capacity planning and investment decisions",
      "Shifted the organization from reactive to preventive reliability practices",
      "More stable systems under growth and unexpected demand",
    ],
    stack: [
      "Load testing frameworks",
      "Prometheus",
      "Grafana",
      "Capacity planning models",
      "Azure",
      "GCP",
    ],
    metaTitle: "Proactive reliability for mission-critical systems | Basudeba Mandal",
    metaDescription:
      "Load testing, capacity planning, and failure modeling with cloud platforms and observability.",
  },
  {
    slug: "kubernetes-platform-high-traffic-applications",
    title:
      "Designing a Production-Grade Kubernetes Platform for High-Traffic Applications",
    summary:
      "Designed and implemented a production-ready Kubernetes platform to reliably run high-traffic, business-critical applications. The platform was built with scalability, security, and operational resilience as core design principles.",
    company: "",
    role: "Lead DevOps Engineer",
    problem:
      "The existing container setup lacked a standardized Kubernetes foundation and was not designed for production traffic. Scaling issues, inconsistent configurations, and weak security controls resulted in frequent operational challenges during peak loads. Teams struggled with cluster stability, upgrades, and operational best practices, limiting confidence in Kubernetes as a production platform.",
    ownership:
      "Led the end-to-end Kubernetes platform design and implementation, including cluster architecture, networking, security baselines, and operational best practices. Collaborated with application and infrastructure teams to onboard production workloads.",
    outcome: [
      "Enabled stable operation of high-traffic applications on Kubernetes",
      "Improved cluster scalability and operational reliability",
      "Established standardized Kubernetes patterns across teams",
      "Increased confidence in Kubernetes as a long-term production platform",
      "A strong foundation for scalable, cloud-native application delivery",
    ],
    stack: [
      "Kubernetes",
      "Azure AKS",
      "GKE (GCP)",
      "NGINX ingress controllers",
      "RBAC",
      "Helm",
      "Terraform",
    ],
    metaTitle: "Production Kubernetes platform: AKS, GKE | Basudeba Mandal",
    metaDescription:
      "High-traffic K8s on Azure AKS and GKE: networking, security, Helm, and Terraform.",
  },
  {
    slug: "kubernetes-zero-downtime-deployment-strategies",
    title: "Achieving Zero-Downtime Deployments Using Kubernetes Deployment Strategies",
    summary:
      "Implemented Kubernetes deployment strategies to enable seamless application releases without service interruption, ensuring continuous availability during deployments.",
    company: "",
    role: "Lead DevOps Engineer",
    problem:
      "Application deployments often caused service downtime or degraded performance due to tightly coupled release processes and lack of Kubernetes-native deployment strategies. Rolling back failed releases was slow and risky, impacting user experience and business operations.",
    ownership:
      "Designed and implemented Kubernetes-native deployment patterns, including rolling updates, health checks, and safe rollback mechanisms. Worked with application teams to adapt workloads to Kubernetes best practices.",
    outcome: [
      "Achieved zero-downtime deployments for production workloads",
      "Reduced release-related incidents and customer impact",
      "Enabled faster and safer rollbacks",
      "Increased release confidence across engineering teams",
      "Teams could deploy more frequently without fear of disruption",
    ],
    stack: [
      "Kubernetes",
      "Rolling updates",
      "Canary patterns",
      "GitOps workflows",
    ],
    metaTitle: "Zero-downtime K8s deployments | Basudeba Mandal",
    metaDescription:
      "Rolling updates, canary patterns, and GitOps for seamless releases and rollbacks on Kubernetes.",
  },
  {
    slug: "kubernetes-resource-optimization-40",
    title:
      "Optimizing Kubernetes Resource Utilization to Reduce Infrastructure Waste by 40%",
    summary:
      "Optimized Kubernetes cluster resource usage to significantly reduce infrastructure waste while maintaining application performance and reliability.",
    company: "",
    role: "Lead DevOps Engineer",
    problem:
      "Kubernetes workloads were over-provisioned due to lack of visibility into actual resource consumption. CPU and memory requests were inflated to avoid performance issues, resulting in low utilization and increased infrastructure costs. There was no systematic approach to capacity planning or resource optimization.",
    ownership:
      "Led the Kubernetes resource optimization initiative, analyzing workload usage patterns and implementing right-sizing strategies. Guided teams on defining appropriate resource requests and limits for their applications.",
    outcome: [
      "Achieved 40% reduction in infrastructure resource waste",
      "Improved cluster utilization and cost efficiency",
      "Prevented resource contention through balanced scheduling",
      "Established sustainable resource management best practices",
      "Cost savings while preserving application stability",
    ],
    stack: [
      "Kubernetes resource management",
      "HPA",
      "Prometheus",
      "Grafana",
    ],
    metaTitle: "K8s resource optimization (~40% waste) | Basudeba Mandal",
    metaDescription:
      "Right-sizing, HPA, and observability to cut K8s waste while keeping performance.",
  },
  {
    slug: "legacy-migration-cloud-native-kubernetes",
    title:
      "Migrating Legacy Applications to Scalable Cloud-Native Kubernetes Workloads",
    summary:
      "Migrated legacy and monolithic applications to Kubernetes-based, cloud-native architectures to improve scalability, maintainability, and operational efficiency.",
    company: "",
    role: "Lead DevOps Engineer",
    problem:
      "Legacy applications were tightly coupled to underlying infrastructure and lacked scalability and fault tolerance. Deployments were manual, environments were inconsistent, and scaling required significant operational effort. This limited the organization's ability to respond to growth and change.",
    ownership:
      "Led the application modernization and Kubernetes migration effort, defining migration strategies, containerization workflows, and Kubernetes deployment models in collaboration with development teams.",
    outcome: [
      "Enabled horizontal scalability and self-healing capabilities",
      "Reduced deployment complexity and manual intervention",
      "Improved application resilience and portability",
      "Accelerated adoption of cloud-native practices",
      "Modernized legacy systems and prepared teams for future growth",
    ],
    stack: [
      "Docker",
      "containerd",
      "Kubernetes",
      "Helm",
      "GitOps",
      "Argo CD",
      "Azure",
      "GCP",
    ],
    metaTitle: "Legacy apps to K8s & cloud-native | Basudeba Mandal",
    metaDescription:
      "Containerization, Helm, Argo CD, and GitOps to migrate monoliths to Azure and GCP.",
  },
  {
    slug: "self-service-cloud-platform-multi-team",
    title:
      "Designing a Self-Service Cloud Platform for Multi-Team Environments",
    summary:
      "Designed and implemented a self-service cloud platform that enabled multiple teams to independently provision infrastructure and deploy applications while maintaining governance, security, and operational standards.",
    company: "",
    role: "Lead DevOps Engineer",
    problem:
      "Engineering teams depended heavily on central operations teams to provision infrastructure and manage environments. This created bottlenecks, delayed deliveries, and inconsistent implementations across teams. While teams needed autonomy, the organization also required centralized control over security, compliance, and cost management. Existing tooling lacked standardization and offered no clear self-service model.",
    ownership:
      "Led the design and implementation of the self-service platform, defining platform architecture, self-service workflows, and guardrails. Worked closely with development, security, and operations teams to balance team autonomy with organizational governance.",
    outcome: [
      "Enabled teams to provision infrastructure and deploy applications without operational dependency",
      "Reduced environment setup time from days to hours",
      "Improved consistency and compliance through standardized templates and workflows",
      "Increased developer productivity while maintaining control and visibility",
      "Shifted toward a platform-as-a-product operating model",
    ],
    stack: [
      "Terraform",
      "GitOps-based workflows",
      "Azure",
      "GCP",
      "Cloud IAM",
      "RBAC",
      "Developer portals",
      "Workflow automation",
      "Prometheus",
      "Grafana",
    ],
    metaTitle: "Self-service cloud platform for teams | Basudeba Mandal",
    metaDescription:
      "Terraform, GitOps, guardrails, and developer portals for governed self-service on Azure and GCP.",
  },
  {
    slug: "multi-cloud-platform-engineering",
    title: "Enabling Scalable Multi-Cloud Operations Through Platform Engineering",
    summary:
      "Built a platform engineering solution to standardize and scale operations across multiple cloud providers, enabling consistent application deployment, governance, and operational visibility in a multi-cloud environment.",
    company: "",
    role: "Lead DevOps Engineer",
    problem:
      "The organization operated workloads across multiple cloud providers due to business and regulatory requirements. Each environment was managed differently, leading to operational complexity, duplicated effort, inconsistent security controls, and increased maintenance overhead. Teams lacked a unified way to deploy and operate applications across clouds.",
    ownership:
      "Led the multi-cloud platform strategy and execution, defining cloud-agnostic abstractions, standardized deployment patterns, and centralized governance models. Coordinated with multiple teams to onboard workloads and align cloud operations.",
    outcome: [
      "Enabled consistent application delivery across multiple cloud providers",
      "Reduced operational complexity through standardized platforms and tooling",
      "Improved visibility, governance, and security across environments",
      "Allowed teams to scale workloads without being locked into a single cloud",
      "Greater flexibility, resilience, and long-term scalability across cloud ecosystems",
    ],
    stack: [
      "Azure",
      "GCP",
      "Kubernetes",
      "Terraform",
      "Argo CD",
      "IAM",
      "Prometheus",
      "Grafana",
    ],
    metaTitle: "Multi-cloud platform engineering | Basudeba Mandal",
    metaDescription:
      "Platform engineering across Azure and GCP: Kubernetes, Terraform, Argo CD, and unified governance.",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
