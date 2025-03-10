import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../../../components/shadcn/checkbox";
import { ThemeProvider } from "../../../themes/shadcn";
import { Label } from "../../../components/shadcn/label";

type CheckboxProps = React.ComponentProps<typeof Checkbox>;

const meta = {
  title: "Components/Shadcn/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: "boolean",
      description: "Whether the checkbox is checked",
    },
    disabled: {
      control: "boolean",
      description: "Whether the checkbox is disabled",
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div className="flex items-center space-x-2">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default checkbox without a label.
 */
export const Default: StoryObj<CheckboxProps> = {
  args: {},
};

/**
 * Checkbox with a label.
 */
export const WithLabel: StoryObj<CheckboxProps> = {
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" {...args} />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
};

/**
 * Disabled checkbox.
 */
export const Disabled: StoryObj<CheckboxProps> = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox id="disabled" {...args} />
      <Label htmlFor="disabled" className="text-muted-foreground">
        Disabled checkbox
      </Label>
    </div>
  ),
};

/**
 * Checked checkbox.
 */
export const Checked: StoryObj<CheckboxProps> = {
  args: {
    checked: true,
  },
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox id="checked" {...args} />
      <Label htmlFor="checked">Checked checkbox</Label>
    </div>
  ),
};

/**
 * Checkbox with help text.
 */
export const WithHelpText: StoryObj<CheckboxProps> = {
  render: (args) => (
    <div className="grid gap-1.5">
      <div className="flex items-center space-x-2">
        <Checkbox id="help-text" {...args} />
        <Label htmlFor="help-text">Send me marketing emails</Label>
      </div>
      <p className="text-sm text-muted-foreground">
        We'll send you updates about our products and services.
      </p>
    </div>
  ),
};

/**
 * Group of checkboxes.
 */
export const Group: StoryObj<CheckboxProps> = {
  render: () => (
    <div className="grid gap-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="option-1" />
        <Label htmlFor="option-1">Option 1</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="option-2" defaultChecked />
        <Label htmlFor="option-2">Option 2</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="option-3" />
        <Label htmlFor="option-3">Option 3</Label>
      </div>
    </div>
  ),
};

/**
 * Checkbox with custom styling.
 */
export const CustomStyling: StoryObj<CheckboxProps> = {
  args: {
    className:
      "data-[state=checked]:bg-blue-500 data-[state=checked]:text-white border-blue-500",
  },
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox id="custom" {...args} />
      <Label htmlFor="custom">Custom styled checkbox</Label>
    </div>
  ),
};
