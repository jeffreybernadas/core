import "./SBThemeToggler";
import { addons } from "@storybook/manager-api";
import darkTheme from "./darkTheme";
import lightTheme from "./lightTheme";

const theme = localStorage.getItem("theme") ?? "light";

addons.setConfig({ theme: theme === "light" ? lightTheme : darkTheme });
