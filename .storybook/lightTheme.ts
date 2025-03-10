import { create } from "@storybook/theming";

import Logo from "../src/assets/images/sb-logo-light.png";

export default create({
  base: "light",
  colorPrimary: "#003152",
  colorSecondary: "#003152",
  appBg: "#e3ebec",
  appContentBg: "#e3ebec",

  barTextColor: "#A2BDDB",
  barSelectedColor: "#A2BDDB",
  barBg: "#003152",

  brandTitle: "Core Components",
  brandUrl: "https://core.jeffreybernadas.com",
  brandImage: Logo,
  brandTarget: "_blank",
});
