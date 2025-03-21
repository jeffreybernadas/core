import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useToast } from "../../hooks/useToast";
import { ThemeProvider } from "../../themes/shadcn";
import { Button } from "../../components/shadcn/button";
import { Toaster } from "../../components/shadcn/toaster";

/**
 * `useToast` is a hook that provides a toast notification system inspired by react-hot-toast.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useToast } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useToast } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = () => {
 *   const { toast } = useToast();
 *
 *   const showToast = () => {
 *     toast({
 *       title: "Success",
 *       description: "Operation completed successfully!",
 *     });
 *   };
 *
 *   return <button onClick={showToast}>Show Toast</button>;
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * useToast(): {
 *   toast: (props: {
 *     title?: ReactNode,
 *     description?: ReactNode,
 *     action?: ToastActionElement,
 *     variant?: "default" | "destructive",
 *     duration?: number
 *   }) => { id: string, dismiss: () => void, update: (props) => void },
 *   dismiss: (toastId?: string) => void,
 *   toasts: ToasterToast[]
 * }
 * ```
 *
 * ### Returns
 * - Returns an object containing:
 *   - toast: Function to show a new toast
 *   - dismiss: Function to dismiss toast(s)
 *   - toasts: Array of current toasts
 */

const meta = {
  title: "Hooks/Utility/useToast",
  parameters: {
    layout: "centered",
    docs: {
      canvas: {
        sourceState: "none",
      },
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
        <Toaster />
      </ThemeProvider>
    ),
  ],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const ToastExample = () => {
  const { toast } = useToast();

  const showDefaultToast = () => {
    toast({
      title: "Default Toast",
      description: "This is a default toast notification",
    });
  };

  const showDestructiveToast = () => {
    toast({
      variant: "destructive",
      title: "Error",
      description: "Something went wrong!",
    });
  };

  const showToastWithAction = () => {
    toast({
      title: "Action Required",
      description: "Please confirm your action",
      action: (
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            toast({
              title: "Confirmed",
              description: "Action was confirmed",
            });
          }}
        >
          Confirm
        </Button>
      ),
    });
  };

  const showUpdatingToast = () => {
    const { id, update } = toast({
      title: "Loading...",
      description: "Please wait while we process your request",
    });

    // Simulate an async operation
    setTimeout(() => {
      update({
        id,
        title: "Success",
        description: "Your request has been processed!",
        variant: "default",
      });
    }, 2000);
  };

  return (
    <div className="space-y-6 w-[500px]">
      <h3 className="text-lg font-semibold">Toast Notification Demo</h3>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Basic Toasts</h4>
            <div className="space-y-2">
              <Button
                onClick={showDefaultToast}
                className="w-full"
                variant="outline"
              >
                Show Default Toast
              </Button>
              <Button
                onClick={showDestructiveToast}
                className="w-full"
                variant="destructive"
              >
                Show Error Toast
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-medium">Advanced Toasts</h4>
            <div className="space-y-2">
              <Button
                onClick={showToastWithAction}
                className="w-full"
                variant="outline"
              >
                Toast with Action
              </Button>
              <Button
                onClick={showUpdatingToast}
                className="w-full"
                variant="outline"
              >
                Updating Toast
              </Button>
            </div>
          </div>
        </div>

        <div className="p-4 bg-muted rounded-md">
          <h4 className="text-sm font-medium mb-2">Toast Features</h4>
          <ul className="space-y-1 text-sm">
            <li>• Automatic dismissal</li>
            <li>• Custom actions</li>
            <li>• Different variants</li>
            <li>• Updating content</li>
            <li>• Stacking and limit control</li>
          </ul>
        </div>
      </div>

      <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
        <p className="text-sm text-blue-600 dark:text-blue-400">
          Try the different toast types to see the notification system in
          action! 🔔
        </p>
      </div>
    </div>
  );
};

export const Example: Story = {
  render: () => <ToastExample />,
};
