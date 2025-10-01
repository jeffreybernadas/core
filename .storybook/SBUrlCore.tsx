import { ArrowUpRight } from "lucide-react";
import { IconButton } from "@storybook/components";
import { addons, types } from "@storybook/manager-api";
import React from "react";

addons.register("storybook/redirect", () => {
  addons.add("storybook/redirect", {
    title: "Go to Core Components",
    type: types.TOOL,
    match: ({ viewMode }) => !!viewMode?.match(/^(story|docs)$/),
    render: () => {
      const isDocs = window.location.search.includes("--docs");
      return (
        <IconButton
          key="redirect"
          title="Navigate to Core Components"
          onClick={async () =>
            window.open("https://core.thecodebit.online", "_blank")
          }
          style={{
            position: "absolute",
            right: isDocs ? "30px" : "100px",
          }}
        >
          Go to Core Components
          <ArrowUpRight
            style={{ color: "white", width: "0.75em", height: "0.75em" }}
          />
        </IconButton>
      );
    },
  });
});
