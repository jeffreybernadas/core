import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Toaster as Sonner } from "../../../components/shadcn/sonner";
import { ThemeProvider } from "../../../themes/shadcn";
import { Button } from "../../../components/shadcn/button";
import { toast } from "sonner";

const meta = {
  title: "Components/Shadcn/Sonner",
  component: Sonner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
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
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div className="w-full max-w-md">
          <Story />
          <Sonner />
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
    position: "top-right",
    expand: false,
    visibleToasts: 3,
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

/**
 * Toast with action buttons.
 */
export const WithActions: Story = {
  args: {
    position: "top-right",
    expand: false,
    visibleToasts: 3,
    closeButton: true,
  },
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Toast with Actions</h3>
      <div className="flex flex-col gap-2">
        <Button
          onClick={() => {
            toast("Undo Action", {
              description: "Your changes have been saved.",
              action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
              },
            });
          }}
        >
          With Undo Action
        </Button>
        <Button
          onClick={() => {
            toast("Multiple Actions", {
              description: "Would you like to continue?",
              action: {
                label: "Yes",
                onClick: () => console.log("Yes clicked"),
              },
              cancel: {
                label: "No",
                onClick: () => console.log("No clicked"),
              },
            });
          }}
        >
          With Multiple Actions
        </Button>
      </div>
    </div>
  ),
};

/**
 * Toast with custom duration.
 */
export const CustomDuration: Story = {
  args: {
    position: "top-right",
    expand: false,
    visibleToasts: 3,
    closeButton: true,
  },
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Custom Duration</h3>
      <div className="flex flex-col gap-2">
        <Button
          onClick={() => {
            toast("Short Duration", {
              description: "This toast will disappear in 2 seconds.",
              duration: 2000,
            });
          }}
        >
          Short Duration (2s)
        </Button>
        <Button
          onClick={() => {
            toast("Long Duration", {
              description: "This toast will disappear in 10 seconds.",
              duration: 10000,
            });
          }}
        >
          Long Duration (10s)
        </Button>
        <Button
          onClick={() => {
            toast("Persistent Toast", {
              description: "This toast will not disappear automatically.",
              duration: Infinity,
            });
          }}
        >
          Persistent
        </Button>
      </div>
    </div>
  ),
};

/**
 * Toast with custom styling.
 */
export const CustomStyling: Story = {
  render: function StylingToast() {
    return (
      <div className="flex flex-col gap-2">
        <Button
          onClick={() => {
            toast("Custom Style", {
              description: "This toast has custom styling.",
              className: "bg-blue-500 text-white border-blue-600",
            });
          }}
        >
          Custom Style
        </Button>
        <Button
          onClick={() => {
            toast("Custom Icon", {
              description: "This toast has a custom icon.",
              icon: "🚀",
            });
          }}
        >
          Custom Icon
        </Button>
      </div>
    );
  },
};

/**
 * Toast with promise handling.
 */
export const PromiseToast: Story = {
  args: {
    position: "top-right",
    expand: false,
    visibleToasts: 3,
    closeButton: true,
  },
  render: () => {
    const mockPromise = () => {
      return new Promise<{ name: string }>((resolve) => {
        setTimeout(() => {
          resolve({ name: "John Doe" });
        }, 2000);
      });
    };

    const mockFailedPromise = () => {
      return new Promise((_, reject) => {
        setTimeout(() => {
          reject(new Error("Failed to fetch data"));
        }, 2000);
      });
    };

    return (
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Promise Toast</h3>
        <div className="flex flex-col gap-2">
          <Button
            onClick={() => {
              toast.promise(mockPromise, {
                loading: "Loading user data...",
                success: (data) => `Successfully loaded ${data.name}`,
                error: "Failed to load user data",
              });
            }}
          >
            Success Promise
          </Button>
          <Button
            onClick={() => {
              toast.promise(mockFailedPromise, {
                loading: "Loading user data...",
                success: "Successfully loaded user data",
                error: (err) =>
                  `Error: ${err instanceof Error ? err.message : "Unknown error"}`,
              });
            }}
          >
            Failed Promise
          </Button>
        </div>
      </div>
    );
  },
};

/**
 * Multiple toasts stacked.
 */
export const MultipleToasts: Story = {
  args: {
    position: "top-right",
    expand: false,
    visibleToasts: 3,
    closeButton: true,
  },
  render: () => {
    const showMultipleToasts = () => {
      toast("First Toast", {
        description: "This is the first toast message.",
      });

      setTimeout(() => {
        toast.error("Second Toast", {
          description: "This is the second toast message.",
        });
      }, 1000);

      setTimeout(() => {
        toast.success("Third Toast", {
          description: "This is the third toast message.",
        });
      }, 2000);
    };

    return (
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Multiple Toasts</h3>
        <Button onClick={showMultipleToasts}>Show Multiple Toasts</Button>
      </div>
    );
  },
};

/**
 * Custom Sonner component with different positions.
 */
export const CustomPosition: Story = {
  render: function PositionToast() {
    return (
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Note: This example shows how to customize the Sonner component's
          position. The position is controlled by the Sonner component props.
        </p>
        <div className="flex flex-col gap-2">
          <Button
            onClick={() => {
              toast("Top Right Toast", {
                description: "This toast appears in the top right (default).",
              });
            }}
          >
            Show Toast
          </Button>
        </div>
        <div className="mt-8 border-t pt-4">
          <p className="text-sm font-medium mb-2">Different Positions:</p>
          <p className="text-xs text-muted-foreground mb-4">
            In a real application, you would set these props on the Sonner
            component.
          </p>
          <code className="text-sm bg-muted p-2 rounded-md block">
            {`<Sonner position="top-right" /> // default\n<Sonner position="top-left" />\n<Sonner position="bottom-right" />\n<Sonner position="bottom-left" />\n<Sonner position="top-center" />\n<Sonner position="bottom-center" />`}
          </code>
        </div>
      </div>
    );
  },
};
