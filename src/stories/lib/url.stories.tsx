import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { isValidURL } from "../../lib/url";

interface DemoProps {
  children: React.ReactNode;
}

const Demo = ({ children }: DemoProps) => (
  <div className="space-y-2">{children}</div>
);

const meta = {
  title: "Lib/URL",
  component: Demo,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Utility function to validate URLs.",
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
          isValidURL("https://google.com") →{" "}
          {String(isValidURL("https://google.com"))}
        </p>
        <p>isValidURL("not-a-url") → {String(isValidURL("not-a-url"))}</p>
        <p>
          isValidURL("http://localhost:3000") →{" "}
          {String(isValidURL("http://localhost:3000"))}
        </p>
        <p>
          isValidURL("ftp://files.example.com") →{" "}
          {String(isValidURL("ftp://files.example.com"))}
        </p>
      </>
    ),
  },
};
