import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Toast, ToastAction } from "../../../components/shadcn/toast";
import { Toaster } from "../../../components/shadcn/toaster";
import { useToast } from "../../../hooks";
import { ThemeProvider } from "../../../themes/shadcn";
import { Button } from "../../../components/shadcn/button";
import { CheckCircle, AlertCircle, Info, XCircle } from "lucide-react";

/**
 * A succinct message that is displayed temporarily.
 *
 * See the [Shadcn docs](https://ui.shadcn.com/docs/components/toast) for more information.
 */
const meta = {
  title: "Components/Shadcn/Toast",
  component: Toast,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "stable", "version:2.3.0"],
  decorators: [
    (Story, { args }) => (
      <ThemeProvider>
        <div className="w-[300px] flex justify-center items-start max-w-md h-[200px]">
          <Story {...args} />
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
