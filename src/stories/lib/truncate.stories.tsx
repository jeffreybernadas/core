import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { truncate } from "../../lib/truncate";

interface DemoProps {
  children: React.ReactNode;
}

const Demo = ({ children }: DemoProps) => (
  <div className="space-y-2">{children}</div>
);

const meta = {
  title: "Lib/Truncate",
  component: Demo,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Utility function to truncate text to a specified length with ellipsis.",
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
        <p>
          truncate("This is a long text", 10) →{" "}
          {truncate("This is a long text", 10)}
        </p>
        <p>truncate("Short", 10) → {truncate("Short", 10)}</p>
        <p>truncate("Exactly ten", 10) → {truncate("Exactly ten", 10)}</p>
      </>
    ),
  },
};
