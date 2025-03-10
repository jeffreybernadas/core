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
    question: "What is Shadcn UI?",
    answer:
      "Shadcn UI is not a component library, but rather a collection of reusable components that you can copy and paste into your applications. It's built on top of Radix UI and Tailwind CSS, offering accessible and customizable components.",
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
      text: "For now no, this is a hobby project of mine and is still currently in development. However, the components/ libraries used to build this project are all production ready. Microfrontends are also production ready and are used in many companies but there is a very high complexity to setup it and maintain.",
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
