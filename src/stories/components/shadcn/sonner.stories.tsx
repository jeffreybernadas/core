import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Toaster as Sonner } from "../../../components/shadcn/sonner";
import { ThemeProvider } from "../../../themes/shadcn";
import { Button } from "../../../components/shadcn/button";
import { toast } from "sonner";

/**
 * An opinionated toast component for React.
 *
 * See the [Shadcn docs](https://ui.shadcn.com/docs/components/sonner) for more information.
 */
const meta = {
  title: "Components/Shadcn/Sonner",
  component: Sonner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "stable", "version:2.3.0"],
  argTypes: {
    position: {
      control: "select",
      options: [
        "top-left",
        "top-right",
        "bottom-left",
        "bottom-right",
        "top-center",
        "bottom-center",
      ],
      description: "The position of the toasts",
    },
    expand: {
      control: "boolean",
      description: "Whether to expand the toasts to full width",
    },
    visibleToasts: {
      control: "number",
      description: "Maximum number of visible toasts",
    },
    closeButton: {
      control: "boolean",
      description: "Whether to show a close button",
    },
    theme: {
      control: "select",
      options: ["light", "dark", "system"],
      description: "The theme to use for the toasts",
    },
    richColors: {
      control: "boolean",
      description: "Whether to use rich colors for the toasts",
    },
    duration: {
      control: "number",
      description: "Default duration for the toasts in milliseconds",
    },
    onClose: {
      control: false,
      description: "The callback function when the toast is closed",
      table: { type: { summary: "function" } },
    },
  },
  decorators: [
    (Story, { args }) => (
      <ThemeProvider>
        <div className="w-full max-w-md">
          <Story />
          {/* @ts-expect-error - This is a workaround to allow the Sonner component to be used in the story */}
          <Sonner {...args} />
        </div>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof toast>;

export default meta;
type Story = StoryObj<typeof toast>;

/**
 * Default toast with a simple message.
 */
export const Default: Story = {
  args: {
    position: "top-right",
    expand: false,
    visibleToasts: 3,
    closeButton: true,
  },
  render: () => (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-medium">Default Toast</h3>
      <Button
        onClick={() => {
          toast("Event has been created", {
            description: "Friday, February 10, 2023 at 5:57 PM",
          });
        }}
      >
        Show Toast
      </Button>
    </div>
  ),
};

/**
 * Toast with different types.
 */
export const Types: Story = {
  args: {
    position: "bottom-left",
    expand: false,
    visibleToasts: 1,
    closeButton: true,
  },
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Toast Types</h3>
      <div className="flex flex-col gap-2">
        <Button
          onClick={() => {
            toast("Default Toast", {
              description: "This is a default toast message",
            });
          }}
        >
          Default
        </Button>
        <Button
          variant="destructive"
          onClick={() => {
            toast.error("Error Toast", {
              description: "This is an error toast message",
            });
          }}
        >
          Error
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            toast.success("Success Toast", {
              description: "This is a success toast message",
            });
          }}
        >
          Success
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            toast.info("Info Toast", {
              description: "This is an info toast message",
            });
          }}
        >
          Info
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            toast.warning("Warning Toast", {
              description: "This is a warning toast message",
            });
          }}
        >
          Warning
        </Button>
      </div>
    </div>
  ),
};
