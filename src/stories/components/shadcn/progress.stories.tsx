import React, { useEffect, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "../../../components/shadcn/progress";
import { ThemeProvider } from "../../../themes/shadcn";
import { Button } from "../../../components/shadcn/button";

type ProgressProps = React.ComponentProps<typeof Progress>;

const meta = {
  title: "Components/Shadcn/Progress",
  component: Progress,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div className="w-full max-w-md">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default progress bar with a static value.
 */
export const Default: StoryObj<ProgressProps> = {
  args: {
    value: 40,
    className: "w-full",
  },
};

/**
 * Progress bar with different values.
 */
export const DifferentValues: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-1.5">
        <label className="text-sm font-medium">0%</label>
        <Progress value={0} className="w-full" />
      </div>
      <div className="space-y-1.5">
        <label className="text-sm font-medium">25%</label>
        <Progress value={25} className="w-full" />
      </div>
      <div className="space-y-1.5">
        <label className="text-sm font-medium">50%</label>
        <Progress value={50} className="w-full" />
      </div>
      <div className="space-y-1.5">
        <label className="text-sm font-medium">75%</label>
        <Progress value={75} className="w-full" />
      </div>
      <div className="space-y-1.5">
        <label className="text-sm font-medium">100%</label>
        <Progress value={100} className="w-full" />
      </div>
    </div>
  ),
};

/**
 * Animated progress bar that simulates loading.
 */
export const Animated: Story = {
  render: function AnimatedProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const timer = setTimeout(() => {
        setProgress(100);
      }, 500);
      return () => clearTimeout(timer);
    }, []);

    return (
      <div className="space-y-2">
        <div className="flex justify-between">
          <label className="text-sm font-medium">Loading...</label>
          <span className="text-sm text-muted-foreground">{progress}%</span>
        </div>
        <Progress value={progress} className="w-full" />
      </div>
    );
  },
};

/**
 * Interactive progress bar with controls.
 */
export const Interactive: Story = {
  render: function InteractiveProgress() {
    const [progress, setProgress] = useState(40);

    const increment = () => {
      setProgress((prev) => Math.min(prev + 10, 100));
    };

    const decrement = () => {
      setProgress((prev) => Math.max(prev - 10, 0));
    };

    const reset = () => {
      setProgress(0);
    };

    return (
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between">
            <label className="text-sm font-medium">Progress</label>
            <span className="text-sm text-muted-foreground">{progress}%</span>
          </div>
          <Progress value={progress} className="w-full" />
        </div>
        <div className="flex space-x-2">
          <Button onClick={decrement} variant="outline" size="sm">
            Decrease
          </Button>
          <Button onClick={increment} variant="outline" size="sm">
            Increase
          </Button>
          <Button onClick={reset} variant="outline" size="sm">
            Reset
          </Button>
        </div>
      </div>
    );
  },
};

/**
 * Progress bar with custom styling.
 */
export const CustomStyling: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-1.5">
        <label className="text-sm font-medium">Default</label>
        <Progress value={60} className="w-full" />
      </div>
      <div className="space-y-1.5">
        <label className="text-sm font-medium">Thicker</label>
        <Progress value={60} className="w-full h-3" />
      </div>
      <div className="space-y-1.5">
        <label className="text-sm font-medium">Rounded</label>
        <Progress value={60} className="w-full rounded-full" />
      </div>
      <div className="space-y-1.5">
        <label className="text-sm font-medium">Custom Color</label>
        <Progress value={60} className="w-full [&>div]:bg-green-500" />
      </div>
      <div className="space-y-1.5">
        <label className="text-sm font-medium">Gradient</label>
        <Progress
          value={60}
          className="w-full [&>div]:bg-gradient-to-r [&>div]:from-indigo-500 [&>div]:to-purple-500"
        />
      </div>
    </div>
  ),
};

/**
 * Progress bar with indeterminate state.
 */
export const Indeterminate: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-1.5">
        <label className="text-sm font-medium">Indeterminate</label>
        <Progress className="w-full [&>div]:animate-pulse" value={33} />
      </div>
      <div className="space-y-1.5">
        <label className="text-sm font-medium">Loading Animation</label>
        <div className="relative w-full h-4 bg-secondary rounded-full overflow-hidden">
          <div className="absolute inset-0 w-1/3 bg-primary rounded-full animate-[progress_1.5s_ease-in-out_infinite]"></div>
        </div>
      </div>
    </div>
  ),
};
