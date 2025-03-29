import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../../components/shadcn/button";
import { Mail } from "lucide-react";

/**
 * Displays a button or a component that looks like a button.
 *
 * See the [Shadcn docs](https://ui.shadcn.com/docs/components/button) for more information.
 */
const meta = {
  title: "Components/Shadcn/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "stable", "version:2.3.0"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
      description: "The visual style of the button",
      table: {
        type: {
          summary: "default | destructive | outline | secondary | ghost | link",
        },
        defaultValue: { summary: "default" },
      },
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
      description: "The size of the button",
      table: {
        type: { summary: "default | sm | lg | icon" },
        defaultValue: { summary: "default" },
      },
    },
    asChild: {
      control: "boolean",
      description: "Whether to render the button as a child component",
    },
    disabled: {
      control: "boolean",
      description: "Whether the button is disabled",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    className: {
      control: "text",
      description: "Additional CSS classes to apply",
      table: {
        type: { summary: "string" },
      },
    },
    children: {
      control: "text",
      description: "The content to display inside the button",
      table: {
        type: { summary: "React.ReactNode" },
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * The default button style.
 */
export const Default: Story = {
  args: {
    children: "Button",
  },
};

/**
 * The destructive variant is used for actions that are destructive or dangerous.
 */
export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Delete",
  },
};

/**
 * The outline variant is used for secondary actions.
 */
export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline",
  },
};

/**
 * The secondary variant is used for secondary actions.
 */
export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
};

/**
 * The ghost variant is used for less prominent actions.
 */
export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost",
  },
};

/**
 * The link variant makes the button look like a link.
 */
export const Link: Story = {
  args: {
    variant: "link",
    children: "Link",
  },
};

/**
 * Button with an icon.
 */
export const WithIcon: Story = {
  args: {
    children: (
      <>
        <Mail className="mr-2" />
        Login with Email
      </>
    ),
  },
};

/**
 * Icon-only button.
 */
export const IconOnly: Story = {
  args: {
    size: "icon",
    children: <Mail />,
    "aria-label": "Send email",
  },
};

/**
 * Small-sized button.
 */
export const Small: Story = {
  args: {
    size: "sm",
    children: "Small",
  },
};

/**
 * Large-sized button.
 */
export const Large: Story = {
  args: {
    size: "lg",
    children: "Large",
  },
};

/**
 * Disabled state of the button.
 */
export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled",
  },
};

/**
 * Loading state of the button.
 */
export const Loading: Story = {
  args: {
    children: (
      <>
        <svg
          className="mr-2 h-4 w-4 animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
        Loading
      </>
    ),
    disabled: true,
  },
};
