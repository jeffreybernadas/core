/**
 * Data for the FAQ page
 */

export interface FAQItem {
  question: string;
  answer:
    | string
    | {
        text: string;
        list?: string[];
        additionalText?: string;
        bulletType?: "dot" | "arrow";
      };
}

/**
 * FAQ data
 */
export const faqData: FAQItem[] = [
  {
    question: "Why did you create this project?",
    answer: {
      text: "This project started as a journey of mine to learn NPM package development and its lifecycle/ workflow. Along the way, I found out about the microfrontend architecture and thought that they might be a good fit together as one project, where I have a centralised library of reusable components and utilities that can be used in a microfrontend architecture or as a package.",
      additionalText:
        "Beyond technical goals, I also hope that this will open up an oppurtunity to myself to start contributing to other open-source projects. I also think that this is a practical way to learn library maintenance while creating something useful for my projects.",
    },
  },
  {
    question: "Why Microfrontends?",
    answer:
      "Microfrontends allow us to break down a large frontend application into smaller, more manageable pieces. This enables independent development, deployment, and scaling of different parts of the application. It's particularly useful for large teams and complex applications.",
  },
  {
    question: "How do I customize themes?",
    answer:
      "You can customize colors, spacing, and other design tokens by modifying variables in your CSS. For shadcn/ui, you can directly pass tailwind classes to the components to customize them. A ThemeProvider is also available for each library to customize the theme for their corresponding components.",
  },
  {
    question: "Is it production-ready?",
    answer: {
      text: "Yes, kinda. This is a personal project of mine and is still currently in development. However, the components/ libraries used to build this project are all production ready. Microfrontends are also production ready and are used in many companies but there is a very high complexity to setup it and maintain. Regarding the remoteEntry.js, it is hosted on my own server which won't be taken down anytime in the next 5+ years.",
    },
  },
  {
    question: "How do I contribute?",
    answer: {
      text: "I welcome contributions! You can:",
      list: [
        "Submit bug reports",
        "Propose new features",
        "Create pull requests",
        "Improve documentation",
      ],
      additionalText:
        "I will be adding a contribution guidelines in the repository for more details. For now, you can contribute by doing the mentioned things above.",
    },
  },
  {
    question: "What about browser support?",
    answer:
      "These components support all modern browsers (Chrome, Firefox, Safari, Edge). I used PostCSS and Autoprefixer to ensure maximum compatibility. Internet Explorer, however, is not supported.",
  },
];
