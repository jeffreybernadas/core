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
    items: ["React 19", "TypeScript", "Tailwind CSS v4", "Shadcn UI"],
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

/**
 * Credits and acknowledgments data
 */
export const creditsData: FeatureSection[] = [
  {
    title: "Libraries/Tools",
    items: [
      "[shadcn/ui](https://ui.shadcn.com) - Beautiful, reusable components built with Radix UI and Tailwind CSS",
      "[Framer Motion](https://www.framer.com/motion) - Production-ready animation library for React",
      "[Lucide Icons](https://lucide.dev) - Beautiful & consistent icons",
    ],
  },
  {
    title: "Special Thanks",
    items: [
      "[Jack Herrington](https://github.com/jherr) - For the amazing Module Federation tutorials and tools",
      "[Mantine.dev](https://mantine.dev) - For the beautiful components, hooks, utilities and documentations that plays a big part in this project",
      "[react-use](https://github.com/streamich/react-use) - For the amazing open source and free to copy code react hooks",
      "All the open-source contributors who make the web development ecosystem amazing - especially Module Federation",
    ],
  },
];
