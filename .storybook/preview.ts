import type { Preview } from "@storybook/react";
import "../src/index.css";
import darkTheme from "./darkTheme";
import lightTheme from "./lightTheme";

const currentTheme = window.localStorage.getItem("theme");

const preview: Preview = {
  parameters: {
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    layout: "centered",
    docs: { theme: currentTheme === "dark" ? darkTheme : lightTheme },
    backgrounds: {
      values: [
        { name: "Dark", value: "#000000" },
        { name: "Light", value: "#ffffff" },
      ],
      default: currentTheme === "dark" ? "Dark" : "Light",
    },
    options: {
      storySort: {
        order: ["Introduction", "FAQ", "Changelog"],
      },
    },
  },
};

export default preview;
