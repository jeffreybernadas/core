import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Toast, ToastAction } from "../../../components/shadcn/toast";
import { Toaster } from "../../../components/shadcn/toaster";
import { useToast } from "../../../hooks";
import { ThemeProvider } from "../../../themes/shadcn";
import { Button } from "../../../components/shadcn/button";
import { CheckCircle, AlertCircle, Info, XCircle } from "lucide-react";

const meta = {
  title: "Components/Shadcn/Toast",
  component: Toast,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "stable", "version:2.3.0"],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div className="w-full max-w-md">
          <Story />
          <Toaster />
        </div>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default toast with a simple message.
 */
export const Default: Story = {
  render: function DefaultToast() {
    const { toast } = useToast();

    return (
      <Button
        onClick={() => {
          toast({
            title: "Scheduled: Catch up",
            description: "Friday, February 10, 2023 at 5:57 PM",
          });
        }}
      >
        Show Toast
      </Button>
    );
  },
};

/**
 * Toast with an action button.
 */
export const WithAction: Story = {
  render: function ActionToast() {
    const { toast } = useToast();

    return (
      <Button
        onClick={() => {
          toast({
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          });
        }}
      >
        Show Toast with Action
      </Button>
    );
  },
};

/**
 * Toast with different variants.
 */
export const Variants: Story = {
  render: function VariantsToast() {
    const { toast } = useToast();

    return (
      <div className="flex flex-col gap-2">
        <Button
          onClick={() => {
            toast({
              title: "Default Toast",
              description: "This is a default toast message",
            });
          }}
        >
          Default
        </Button>
        <Button
          variant="destructive"
          onClick={() => {
            toast({
              variant: "destructive",
              title: "Error",
              description: "Something went wrong.",
              action: <ToastAction altText="Try again">Try again</ToastAction>,
            });
          }}
        >
          Destructive
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            toast({
              title: "Success",
              description: "Your changes have been saved.",
              className: "bg-green-500 text-white border-green-500",
            });
          }}
        >
          Success (Custom)
        </Button>
      </div>
    );
  },
};

/**
 * Toast with different icons.
 */
export const WithIcons: Story = {
  render: function IconsToast() {
    const { toast } = useToast();

    return (
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Toast with Icons</h3>
        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            onClick={() => {
              toast({
                title: "Success",
                description: "Your changes have been saved.",
                className: "bg-green-500 text-white border-green-500",
              });
            }}
          >
            <CheckCircle className="mr-2 h-4 w-4" />
            Success
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              toast({
                title: "Warning",
                description: "Your storage is almost full.",
                className: "bg-yellow-500 text-white border-yellow-500",
              });
            }}
          >
            <AlertCircle className="mr-2 h-4 w-4" />
            Warning
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              toast({
                title: "Info",
                description: "A new version is available.",
                className: "bg-blue-500 text-white border-blue-500",
              });
            }}
          >
            <Info className="mr-2 h-4 w-4" />
            Info
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              toast({
                title: "Error",
                description: "Something went wrong.",
                variant: "destructive",
              });
            }}
          >
            <XCircle className="mr-2 h-4 w-4" />
            Error
          </Button>
        </div>
      </div>
    );
  },
};

/**
 * Toast with custom duration.
 */
export const CustomDuration: Story = {
  render: function DurationToast() {
    const { toast } = useToast();

    return (
      <div className="flex flex-col gap-2">
        <Button
          onClick={() => {
            toast({
              title: "Short Duration",
              description: "This toast will disappear in 2 seconds.",
              duration: 2000,
            });
          }}
        >
          Short Duration (2s)
        </Button>
        <Button
          onClick={() => {
            toast({
              title: "Long Duration",
              description: "This toast will disappear in 10 seconds.",
              duration: 10000,
            });
          }}
        >
          Long Duration (10s)
        </Button>
        <Button
          onClick={() => {
            toast({
              title: "Infinite Duration",
              description: "This toast will not disappear automatically.",
              duration: Infinity,
            });
          }}
        >
          Infinite Duration
        </Button>
      </div>
    );
  },
};

/**
 * Multiple toasts stacked.
 */
export const MultipleToasts: Story = {
  render: function MultipleToastsExample() {
    const { toast } = useToast();

    const showMultipleToasts = () => {
      toast({
        title: "First Toast",
        description: "This is the first toast message.",
      });

      setTimeout(() => {
        toast({
          title: "Second Toast",
          description: "This is the second toast message.",
          variant: "destructive",
        });
      }, 1000);

      setTimeout(() => {
        toast({
          title: "Third Toast",
          description: "This is the third toast message.",
          className: "bg-green-500 text-white border-green-500",
        });
      }, 2000);
    };

    return <Button onClick={showMultipleToasts}>Show Multiple Toasts</Button>;
  },
};

/**
 * Toast with custom positioning.
 */
export const CustomPosition: Story = {
  render: function PositionToast() {
    const { toast } = useToast();

    return (
      <div className="flex flex-col gap-2">
        <Button
          onClick={() => {
            toast({
              title: "Top Right",
              description: "This is the default position.",
            });
          }}
        >
          Top Right (Default)
        </Button>
        <Button
          onClick={() => {
            toast({
              title: "Custom Position",
              description: "This toast has a custom position.",
              className: "top-center",
            });
          }}
        >
          Custom Position
        </Button>
        <p className="text-sm text-muted-foreground mt-2">
          Note: Position is controlled by the Toaster component. In a real
          application, you would customize the Toaster component to change the
          position.
        </p>
      </div>
    );
  },
};
