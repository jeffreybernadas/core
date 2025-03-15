import React from "react";
import { addons, types } from "@storybook/manager-api";
import { IconButton } from "@storybook/components";
import { Moon, Sun } from "lucide-react";
const ADDON_ID = "myAddonId";

addons.register(ADDON_ID, () => {
  addons.add(ADDON_ID, {
    title: "Theme Toggler",
    type: types.TOOL,
    match: ({ viewMode }) => !!viewMode?.match(/^(story|docs)$/),
    render: ({ active }) => {
      const currentTheme = window.localStorage.getItem("theme");
      const theme = currentTheme === "dark" ? "light" : "dark";
      function toggleTheme() {
        window.localStorage.setItem("theme", theme);
        window.localStorage.setItem("shadcn-core-theme", theme);
        location.reload();
      }
      return (
        <IconButton
          active={active}
          title={`Toggle to ${currentTheme === "dark" ? "Light" : "Dark"} Mode`}
          onClick={() => toggleTheme()}
        >
          {currentTheme === "light" ? (
            <Moon
              style={{
                color: "white",
                width: "25px !important",
                height: "25px",
              }}
            />
          ) : (
            <Sun
              style={{
                color: "#fccf3e",
                width: "25px !important",
                height: "25px",
              }}
            />
          )}
        </IconButton>
      );
    },
  });
});
