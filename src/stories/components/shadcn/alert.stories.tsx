import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "../../../components/shadcn/alert";
import { ThemeProvider } from "../../../themes/shadcn";
import { Terminal, AlertCircle, Info } from "lucide-react";

type AlertProps = React.ComponentProps<typeof Alert>;

const meta = {
  title: "Components/Shadcn/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive"],
      description: "The visual style of the alert",
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div className="w-full max-w-md">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default alert with title and description.
 */
export const Default: StoryObj<AlertProps> = {
  args: {
    children: (
      <>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </>
    ),
  },
};

/**
 * Destructive alert for error messages.
 */
export const Destructive: StoryObj<AlertProps> = {
  args: {
    variant: "destructive",
    children: (
      <>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Your session has expired. Please log in again.
        </AlertDescription>
      </>
    ),
  },
};

/**
 * Informational alert with just a title.
 */
export const TitleOnly: StoryObj<AlertProps> = {
  args: {
    children: (
      <>
        <Info className="h-4 w-4" />
        <AlertTitle>Information</AlertTitle>
      </>
    ),
  },
};

/**
 * Alert with just a description.
 */
export const DescriptionOnly: StoryObj<AlertProps> = {
  args: {
    children: (
      <>
        <Info className="h-4 w-4" />
        <AlertDescription>
          This is a simple alert with only a description.
        </AlertDescription>
      </>
    ),
  },
};

/**
 * Alert with custom styling.
 */
export const CustomStyling: StoryObj<AlertProps> = {
  args: {
    className: "border-blue-500 bg-blue-50 text-blue-900",
    children: (
      <>
        <Info className="h-4 w-4 text-blue-500" />
        <AlertTitle className="text-blue-700">Custom Alert</AlertTitle>
        <AlertDescription className="text-blue-600">
          This alert has custom styling applied to it.
        </AlertDescription>
      </>
    ),
  },
};
