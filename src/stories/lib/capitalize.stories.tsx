import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { capitalize } from "../../lib/capitalize";

interface DemoProps {
  children: React.ReactNode;
}

const Demo = ({ children }: DemoProps) => (
  <div className="space-y-2">{children}</div>
);

const meta = {
  title: "Lib/Capitalize",
  component: Demo,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Utility function to capitalize the first letter of a string.",
      },
    },
    controls: { exclude: ["children"] },
  },
} satisfies Meta<typeof Demo>;

export default meta;
type Story = StoryObj<typeof Demo>;

export const Default: Story = {
  args: {
    children: (
      <>
        <p>capitalize("hello") → {capitalize("hello")}</p>
        <p>capitalize("world") → {capitalize("world")}</p>
        <p>capitalize("openAI") → {capitalize("openAI")}</p>
      </>
    ),
  },
};
