import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "../../../components/shadcn/slider";
import { ThemeProvider } from "../../../themes/shadcn";
import { Volume2, VolumeX, Sun, Moon } from "lucide-react";
import { Label } from "../../../components/shadcn/label";

type SliderProps = React.ComponentProps<typeof Slider>;

/**
 * An input where the user selects a value from within a given range.
 *
 * See the [Shadcn docs](https://ui.shadcn.com/docs/components/slider) for more information.
 */
const meta = {
  title: "Components/Shadcn/Slider",
  component: Slider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "stable", "version:2.3.0"],
  argTypes: {
    children: {
      control: false,
      description: "The content of the slider",
      table: { type: { summary: "React.ReactNode" } },
    },
    defaultValue: {
      // @ts-expect-error - This is a workaround to allow the defaultValue to be an array
      control: "array",
      description: "The default value of the slider",
      table: { type: { summary: "number[]" } },
    },
    max: {
      control: "number",
      description: "The maximum value of the slider",
      table: { type: { summary: "number" } },
    },
    min: {
      control: "number",
      description: "The minimum value of the slider",
      table: { type: { summary: "number" } },
    },
    step: {
      control: "number",
      description: "The step value of the slider",
      table: { type: { summary: "number" } },
    },
    value: {
      // @ts-expect-error - This is a workaround to allow the value to be an array
      control: "array",
      description: "The value of the slider",
      table: { type: { summary: "number[]" } },
    },
    disabled: {
      control: "boolean",
      description: "Whether the slider is disabled",
      table: { type: { summary: "boolean" } },
    },
    onValueChange: {
      action: "onValueChange",
      description: "The callback function when the slider value changes",
      table: { type: { summary: "function" } },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div className="w-[400px] max-w-md">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default slider with a single value.
 */
export const Default: StoryObj<SliderProps> = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
    className: "w-full",
  },
  render: (args) => <Slider {...args} />,
};

/**
 * Slider with different default values.
 */
export const DifferentValues: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="space-y-2">
        <Label>0%</Label>
        <Slider defaultValue={[0]} max={100} step={1} className="w-full" />
      </div>
      <div className="space-y-2">
        <Label>25%</Label>
        <Slider defaultValue={[25]} max={100} step={1} className="w-full" />
      </div>
      <div className="space-y-2">
        <Label>50%</Label>
        <Slider defaultValue={[50]} max={100} step={1} className="w-full" />
      </div>
      <div className="space-y-2">
        <Label>75%</Label>
        <Slider defaultValue={[75]} max={100} step={1} className="w-full" />
      </div>
      <div className="space-y-2">
        <Label>100%</Label>
        <Slider defaultValue={[100]} max={100} step={1} className="w-full" />
      </div>
    </div>
  ),
};

/**
 * Slider with a range of values.
 */
export const RangeSlider: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Price Range</Label>
        <Slider defaultValue={[25, 75]} max={100} step={1} className="w-full" />
        <div className="flex justify-between">
          <span className="text-sm text-muted-foreground">$25</span>
          <span className="text-sm text-muted-foreground">$75</span>
        </div>
      </div>
      <div className="space-y-2">
        <Label>Date Range</Label>
        <Slider defaultValue={[20, 40]} max={100} step={1} className="w-full" />
        <div className="flex justify-between">
          <span className="text-sm text-muted-foreground">Jan 20</span>
          <span className="text-sm text-muted-foreground">Jan 40</span>
        </div>
      </div>
    </div>
  ),
};

/**
 * Slider with step values.
 */
export const StepValues: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="space-y-2">
        <Label>Step 1</Label>
        <Slider defaultValue={[50]} max={100} step={1} className="w-full" />
      </div>
      <div className="space-y-2">
        <Label>Step 5</Label>
        <Slider defaultValue={[50]} max={100} step={5} className="w-full" />
        <div className="flex justify-between">
          {[0, 25, 50, 75, 100].map((value) => (
            <span key={value} className="text-sm text-muted-foreground">
              {value}
            </span>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <Label>Step 10</Label>
        <Slider defaultValue={[50]} max={100} step={10} className="w-full" />
        <div className="flex justify-between">
          {[0, 20, 40, 60, 80, 100].map((value) => (
            <span key={value} className="text-sm text-muted-foreground">
              {value}
            </span>
          ))}
        </div>
      </div>
    </div>
  ),
};

/**
 * Slider with a volume control.
 */
export const VolumeControl: Story = {
  render: function VolumeControlExample() {
    const [volume, setVolume] = useState(50);

    return (
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setVolume(0)}
            className="p-2 rounded-md hover:bg-muted"
          >
            {volume === 0 ? (
              <VolumeX className="h-4 w-4" />
            ) : (
              <Volume2 className="h-4 w-4" />
            )}
          </button>
          <Slider
            value={[volume]}
            max={100}
            step={1}
            className="w-full"
            onValueChange={(value) => setVolume(value[0])}
          />
          <div className="w-12 text-center">
            <span className="text-sm">{volume}%</span>
          </div>
        </div>
      </div>
    );
  },
};

/**
 * Slider with a brightness control.
 */
export const BrightnessControl: Story = {
  render: function BrightnessControlExample() {
    const [brightness, setBrightness] = useState(50);

    return (
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Moon className="h-4 w-4 text-muted-foreground" />
          <Slider
            value={[brightness]}
            max={100}
            step={1}
            className="w-full"
            onValueChange={(value) => setBrightness(value[0])}
          />
          <Sun className="h-4 w-4 text-muted-foreground" />
        </div>
        <div className="text-center">
          <span className="text-sm">Brightness: {brightness}%</span>
        </div>
      </div>
    );
  },
};

/**
 * Slider with custom styling.
 */
export const CustomStyling: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="space-y-2">
        <Label>Default</Label>
        <Slider defaultValue={[50]} max={100} step={1} className="w-full" />
      </div>
      <div className="space-y-2">
        <Label>Custom Track</Label>
        <Slider
          defaultValue={[50]}
          max={100}
          step={1}
          className="w-full [&>span]:h-2 [&>span]:bg-muted"
        />
      </div>
      <div className="space-y-2">
        <Label>Custom Range</Label>
        <Slider
          defaultValue={[50]}
          max={100}
          step={1}
          className="w-full [&>span>span]:bg-green-500"
        />
      </div>
      <div className="space-y-2">
        <Label>Custom Thumb</Label>
        <Slider
          defaultValue={[50]}
          max={100}
          step={1}
          className="w-full [&>span>span>span]:h-5 [&>span>span>span]:w-5 [&>span>span>span]:bg-primary"
        />
      </div>
      <div className="space-y-2">
        <Label>Gradient Track</Label>
        <Slider
          defaultValue={[50]}
          max={100}
          step={1}
          className="w-full [&>span]:bg-gradient-to-r [&>span]:from-muted [&>span]:to-muted-foreground/20"
        />
      </div>
    </div>
  ),
};

/**
 * Disabled slider.
 */
export const Disabled: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Disabled</Label>
        <Slider
          defaultValue={[50]}
          max={100}
          step={1}
          disabled
          className="w-full"
        />
      </div>
    </div>
  ),
};
