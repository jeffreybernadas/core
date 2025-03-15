import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../../../components/shadcn/badge";
import { ThemeProvider } from "../../../themes/shadcn";

type BadgeProps = React.ComponentProps<typeof Badge>;

const meta = {
  title: "Components/Shadcn/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "stable", "version:2.3.0"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive", "outline"],
      description: "The visual style of the badge",
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default badge with primary styling.
 */
export const Default: StoryObj<BadgeProps> = {
  args: {
    children: "Badge",
  },
};

/**
 * Secondary badge with muted styling.
 */
export const Secondary: StoryObj<BadgeProps> = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
};

/**
 * Destructive badge for error or warning states.
 */
export const Destructive: StoryObj<BadgeProps> = {
  args: {
    variant: "destructive",
    children: "Destructive",
  },
};

/**
 * Outline badge with a border and transparent background.
 */
export const Outline: StoryObj<BadgeProps> = {
  args: {
    variant: "outline",
    children: "Outline",
  },
};

/**
 * Badge with an icon.
 */
export const WithIcon: StoryObj<BadgeProps> = {
  args: {
    children: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-1"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
        Verified
      </>
    ),
  },
};

/**
 * Multiple badges in a group.
 */
export const Group: StoryObj<BadgeProps> = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
};

/**
 * Badge with custom styling.
 */
export const CustomStyling: StoryObj<BadgeProps> = {
  args: {
    className: "bg-blue-500 hover:bg-blue-600 text-white",
    children: "Custom",
  },
};
