/**
 * Data for the Microfrontend Benefits documentation
 */

export interface BenefitSection {
  title: string;
  items: string[];
}

export const microfrontendBenefitsData: BenefitSection[] = [
  {
    title: "Independent Development & Deployment",
    items: [
      "Teams can work autonomously on different features",
      "Each microfrontend can be deployed independently.",
      "No need to coordinate releases across the entire application",
      "Faster time-to-market for new features",
      "Reduced deployment risks with smaller, focused updates",
    ],
  },
  {
    title: "Technology Freedom",
    items: [
      "Teams can choose their preferred tech stack within agreed constraints",
      "Easier to adopt new technologies gradually",
      "Legacy code can be modernized piece by piece",
      "Framework-agnostic approach possible through Module Federation",
    ],
  },
  {
    title: "Scalability & Maintenance",
    items: [
      "Smaller, more manageable codebases",
      "Easier to understand and maintain",
      "Reduced risk of breaking changes",
      "Better fault isolation",
      "Simplified debugging and testing",
    ],
  },
  {
    title: "Team Organization",
    items: [
      "Align teams with business domains (e.g., cart team, checkout team)",
      "Clear ownership and responsibilities",
      "Reduced merge conflicts",
      "More efficient code reviews",
      "Better team autonomy and accountability",
    ],
  },
  {
    title: "Development Experience",
    items: [
      "Faster local development (only run needed MFEs)",
      "Independent testing environments",
      "Easier debugging and troubleshooting",
      "Simplified CI/CD pipelines per microfrontend",
      "Improved development velocity",
    ],
  },
  {
    title: "Business Benefits",
    items: [
      "Faster feature delivery",
      "Reduced time-to-market",
      "Better resource allocation",
      "Improved team productivity",
      "More flexible scaling of development teams",
    ],
  },
];
