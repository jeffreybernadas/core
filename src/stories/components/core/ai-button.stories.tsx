import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import AIButton from "../../../components/core/ai-button";

const meta = {
  title: "Components/Core/AIButton",
  component: AIButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "alpha"],
  argTypes: {
    children: {
      control: "text",
      description: "The text content of the button",
    },
    buttonClassName: {
      control: "text",
      description:
        "Additional classes to be merged with the button's base styles",
    },
  },
} satisfies Meta<typeof AIButton>;

export default meta;
type Story = StoryObj<typeof AIButton>;

export const Default: Story = {
  args: {
    children: "Sign up free",
  },
};

export const WithClick: Story = {
  args: {
    children: "Click Me",
    onClick: () => alert("Button clicked!"),
  },
};

export const CustomStyles: Story = {
  args: {
    children: "Custom Styles",
    buttonClassName: "!bg-gradient-to-r from-emerald-400 to-cyan-400 text-lg",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
  },
};
