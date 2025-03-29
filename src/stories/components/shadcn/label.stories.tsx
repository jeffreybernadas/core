import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "../../../components/shadcn/label";
import { ThemeProvider } from "../../../themes/shadcn";
import { Checkbox } from "../../../components/shadcn/checkbox";
import { Input } from "../../../components/shadcn/input";
import {
  RadioGroup,
  RadioGroupItem,
} from "../../../components/shadcn/radio-group";

type LabelProps = React.ComponentProps<typeof Label>;

/**
 * Renders an accessible label associated with controls.
 *
 * See the [Shadcn docs](https://ui.shadcn.com/docs/components/label) for more information.
 */
const meta = {
  title: "Components/Shadcn/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "stable", "version:2.3.0"],
  argTypes: {
    children: {
      control: "text",
      description: "The content of the label",
      table: { type: { summary: "React.ReactNode" } },
    },
    htmlFor: {
      control: "text",
      description: "The id of the associated input",
      table: { type: { summary: "string" } },
    },
    className: {
      control: "text",
      description: "The class name of the label",
      table: { type: { summary: "string" } },
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
} satisfies Meta<typeof Label>;

export default meta;

/**
 * Default label with text.
 */
export const Default: StoryObj<LabelProps> = {
  args: {
    children: "Label Text",
    htmlFor: "input",
  },
};

/**
 * Label with an input.
 */
export const WithInput: StoryObj<LabelProps> = {
  render: (args) => (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="email" {...args}>
        Email
      </Label>
      <Input id="email" type="email" placeholder="Enter your email" />
    </div>
  ),
};

/**
 * Label with a checkbox.
 */
export const WithCheckbox: StoryObj<LabelProps> = {
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms" {...args}>
        Accept terms and conditions
      </Label>
    </div>
  ),
};

/**
 * Label with radio buttons.
 */
export const WithRadioGroup: StoryObj<LabelProps> = {
  render: () => (
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="option-one" />
        <Label htmlFor="option-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="option-two" />
        <Label htmlFor="option-two">Option Two</Label>
      </div>
    </RadioGroup>
  ),
};

/**
 * Label with disabled input.
 */
export const WithDisabledInput: StoryObj<LabelProps> = {
  args: {
    children: "Disabled Input",
    htmlFor: "disabled-input",
    className: "text-muted-foreground",
  },
  render: (args) => (
    <div className="grid w-full gap-1.5">
      <Label {...args} />
      <Input id="disabled-input" disabled placeholder="Disabled input" />
    </div>
  ),
};

/**
 * Required label.
 */
export const Required: StoryObj<LabelProps> = {
  render: () => (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="required-input">
        Required Field <span className="text-destructive">*</span>
      </Label>
      <Input id="required-input" required placeholder="Required input" />
    </div>
  ),
};

/**
 * Label with custom styling.
 */
export const CustomStyling: StoryObj<LabelProps> = {
  args: {
    className: "text-blue-500 font-bold",
    children: "Custom Styled Label",
    htmlFor: "custom-input",
  },
  render: (args) => (
    <div className="grid w-full gap-1.5">
      <Label {...args} />
      <Input
        id="custom-input"
        className="border-blue-500 focus-visible:ring-blue-500"
        placeholder="Custom input"
      />
    </div>
  ),
};
