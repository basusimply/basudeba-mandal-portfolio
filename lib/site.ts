export const site = {
  name: "Basudeba Mandal",
  title: "Lead DevOps and SRE",
  credentials: "CNCF Kubestronaut",
  location: "Pune, India",
  tagline:
    "Architecting cloud-native platforms that enable fast, reliable, and secure software delivery across multi-cloud environments.",
  email: "basudevmandal075@gmail.com",
  linkedIn: "https://www.linkedin.com/in/basudeba-mandal-03b7a9119/",
  /** Optional: set to `/headshot.jpg` if you add a photo under `public/`. */
  headshotSrc: "/headshot-placeholder.svg",
  /**
   * About section: credibility, independent engagement framing, and how you
   * work with client teams (single source of truth for home “About” block).
   */
  about: {
    paragraphs: [
      "I have spent 13+ years designing, building, and operating at the intersection of DevOps, SRE, Kubernetes, and cloud platform engineering—where release velocity has to coexist with reliability, security, and cost awareness across complex, often multi-cloud estates.",
      "I take on independent consulting and select engagements with teams that need to assess and strengthen their platform and delivery posture, stand up or mature CI/CD and GitOps practices, improve observability and incident response, or embed security and compliance sensibly in the software path.",
      "My bias is toward outcomes teams can sustain: measurable reliability, predictable releases, telemetry that shortens time to understand production, and pragmatic attention to platform and non-prod cost. I work closely with application and platform owners, standardize with intent, and use the case studies on this site as concrete examples of how that shows up in practice.",
    ],
  },
} as const;
