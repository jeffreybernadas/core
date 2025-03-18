/**
 * Data for the changelog page
 */

export interface ChangelogEntry {
  version: string;
  date: string;
  changes: string[];
  type: "Major" | "Minor" | "Patch";
}

/**
 * Changelog data
 */
export const changelogData: ChangelogEntry[] = [
  {
    version: "0.0.2",
    date: "2024-10-30",
    changes: [
      "Initial stable release",
      "NPM package and Module Federation setup",
      "Linting, formatting, and testing setup",
      "TypeScript support",
    ],
    type: "Patch",
  },
  {
    version: "0.0.3",
    date: "2024-10-31",
    changes: [
      "Fixed stylesheets and tailwindcss issues in NPM package",
      "Added shadcn/ui components support",
    ],
    type: "Patch",
  },
  {
    version: "0.0.4",
    date: "2024-11-16",
    changes: [
      "Exposed remoteEntry for Module Federation consumption",
      "Fixed stylesheets and tailwindcss issues in Module Federation consumption",
      "Created a landing page and storybook for documentation",
      "Added basic component implementation",
      "Responsive design",
    ],
    type: "Patch",
  },
  {
    version: "0.0.5",
    date: "2025-03-17",
    changes: [
      "Bumped project dependencies",
      "Support React 19",
      "Support Tailwind CSS 4",
      "Added all shadcn/ui components available",
      "Added ThemeProvider for shadcn/ui components",
      "Added dark mode support for shadcn/ui components",
      "Added stories for each shadcn/ui components",
      "Improve Storybook documentation",
      "Added Introduction page in Storybook",
      "Added FAQ page in Storybook",
      "Added Changelog page in Storybook",
      "Added Light/Dark mode in Storybook",
      "Added version release tags for each component (stable, v1, etc.)",
      "Better importing of components (Barrel, Index, etc.)",
      "Deployed to own server",
      "Created sample custom components and add stories for them",
      "Added version tagging to components in Storybook",
      "Added sample hooks and utilities stories in Storybook",
    ],
    type: "Patch",
  },
  {
    version: "0.0.6",
    date: "2025-03-17",
    changes: [
      "Hotfix for build issues",
      "Updated README.md",
    ],
    type: "Patch",
  },
];

/**
 * Version type descriptions
 */
export const versionTypes = [
  {
    type: "Major",
    description: "Breaking changes that require major version bump",
  },
  {
    type: "Minor",
    description: "New features and enhancements with backward compatibility",
  },
  { type: "Patch", description: "Bug fixes and minor improvements" },
];
