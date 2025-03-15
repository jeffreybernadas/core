/**
 * Data for the Introduction page
 */

export interface FeatureSection {
  title: string;
  icon?: string;
  description?: string;
  items: string[];
  bulletType?: "dot" | "arrow";
}

/**
 * Main features data
 */
export const mainFeatures: FeatureSection[] = [
  {
    title: "Component Library",
    description:
      "Built on top of several component libraries, offering a beautiful and consistent design language across all components. Features include:",
    items: [
      "Dark/Light mode support for each library (shadcn/ui, etc.)",
      "Customizable themes",
      "Extended components (shadcn/ui, etc.)",
      "Accessible components",
      "Custom hooks and utilities",
      "Installable as npm package",
    ],
  },
  {
    title: "Module Federation",
    description: "Leverages Microfrontend architecture for:",
    items: [
      "Independent deployment",
      "Team scalability",
      "Technology flexibility",
      "Modular development",
      "Decoupled concerns",
    ],
  },
];

/**
 * Core technologies data
 */
export const coreTechnologies: FeatureSection[] = [
  {
    title: "Frontend",
    items: ["React 19", "TypeScript", "Tailwind CSS", "Shadcn UI"],
  },
  {
    title: "Build Tools",
    items: ["Webpack 5", "Module Federation", "Storybook", "Rollup.js"],
  },
  {
    title: "Testing",
    items: ["Jest", "React Testing Library", "Storybook Testing"],
  },
  {
    title: "CI/CD",
    items: [
      "GitHub Actions",
      "Automated Testing",
      "NPM Publishing",
      "Version Control",
    ],
  },
];
