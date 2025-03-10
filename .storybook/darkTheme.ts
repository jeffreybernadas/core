import { create } from "@storybook/theming";

import Logo from "../src/assets/images/sb-logo.png";

export default create({
  base: "dark",
  colorPrimary: "#A2BDDB",
  colorSecondary: "#1162b9",
  appBg: "#07203C",
  appContentBg: "#07203C",
  appPreviewBg: "#07203C",

  barTextColor: "#A2BDDB",
  barSelectedColor: "#A2BDDB",
  barBg: "#001429",

  brandTitle: "Core Components",
  brandUrl: "https://core.jeffreybernadas.com",
  brandImage: Logo,
  brandTarget: "_blank",
});
