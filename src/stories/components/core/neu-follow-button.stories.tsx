import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import NeuFollowButton, {
  NeuButtonProps,
} from "../../../components/core/neu-follow-button";

const meta = {
  title: "Components/Core/NeuFollowButton",
  component: NeuFollowButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "alpha"],
  argTypes: {
    children: {
      control: "text",
      description: "The text content of the button",
    },
    showArrow: {
      control: "boolean",
      description: "Whether to show the arrow icon",
    },
    buttonClassName: {
      control: "text",
      description: "Additional classes for the button element",
    },
    arrowClassName: {
      control: "text",
      description: "Additional classes for the arrow element",
    },
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-4xl">
        <Story />
      </div>
    ),
  ],
} as Meta<NeuButtonProps>;

export default meta;
type Story = StoryObj<NeuButtonProps>;

/**
 * Default button with hover animation.
 */
export const Default: Story = {
  args: {
    children: "Hover Me!",
  },
};

/**
 * Button without arrow icon.
 */
export const WithoutArrow: Story = {
  args: {
    children: "No Arrow",
    showArrow: false,
  },
};

/**
 * Button with custom styling.
 */
export const CustomStyling: Story = {
  args: {
    children: "Custom Style",
    buttonClassName: "text-2xl font-bold",
    arrowClassName: "text-blue-500",
  },
};

/**
 * Interactive button with click handler.
 */
export const Interactive: Story = {
  args: {
    children: "Click Me!",
    onClick: () => alert("Button clicked!"),
  },
};

/**
 * Disabled button state.
 */
export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
  },
};
