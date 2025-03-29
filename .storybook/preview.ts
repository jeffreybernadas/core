import type { Preview } from "@storybook/react";
import "../src/index.css";
import darkTheme from "./darkTheme";
import lightTheme from "./lightTheme";

const currentTheme = window.localStorage.getItem("theme") ?? "light";

const preview: Preview = {
  parameters: {
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    layout: "centered",
    docs: { theme: currentTheme === "dark" ? darkTheme : lightTheme },
    backgrounds: {
      values: [
        { name: "Dark", value: "#07203C" },
        { name: "Light", value: "#e3ebec" },
      ],
      default: currentTheme === "dark" ? "Dark" : "Light",
    },
    options: {
      storySort: {
        order: [
          "Introduction",
          "FAQ",
          "Changelog",
          "Documentation",
          "Components",
          "Hooks",
          "Lib",
        ],
      },
    },
  },
};

export default preview;
