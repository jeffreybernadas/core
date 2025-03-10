import type { StorybookConfig } from "@storybook/react-webpack5";
import postcss from "postcss";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "storybook-addon-tag-badges",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: { implementation: postcss },
      },
    },
  ],
  framework: { name: "@storybook/react-webpack5", options: {} },
};
export default config;
