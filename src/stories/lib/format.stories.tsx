import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { formatNumber } from "../../lib/format";

interface DemoProps {
  children: React.ReactNode;
}

const Demo = ({ children }: DemoProps) => (
  <div className="space-y-2">{children}</div>
);

const meta = {
  title: "Lib/Format",
  component: Demo,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Utility function to format numbers with K/M suffixes.",
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
        <p>formatNumber(1234) → {formatNumber(1234)}</p>
        <p>formatNumber(1234567) → {formatNumber(1234567)}</p>
        <p>formatNumber(999) → {formatNumber(999)}</p>
        <p>formatNumber(10500) → {formatNumber(10500)}</p>
        <p>formatNumber(2400000) → {formatNumber(2400000)}</p>
      </>
    ),
  },
};
