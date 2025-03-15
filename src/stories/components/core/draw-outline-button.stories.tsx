import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import DrawOutlineButton from "../../../components/core/draw-outline-button";

const meta = {
  title: "Components/Core/DrawOutlineButton",
  component: DrawOutlineButton,
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
} satisfies Meta<typeof DrawOutlineButton>;

export default meta;
type Story = StoryObj<typeof DrawOutlineButton>;

export const Default: Story = {
  args: {
    children: "Hover Me",
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
    buttonClassName:
      "text-rose-500 hover:text-rose-700 [&>span:not(:first-child)]:bg-rose-500",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
  },
};
