import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  RadioGroup,
  RadioGroupItem,
} from "../../../components/shadcn/radio-group";
import { ThemeProvider } from "../../../themes/shadcn";
import { Label } from "../../../components/shadcn/label";

type RadioGroupProps = React.ComponentProps<typeof RadioGroup>;

const meta = {
  title: "Components/Shadcn/RadioGroup",
  component: RadioGroup,
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
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default radio group with simple options.
 */
export const Default: StoryObj<RadioGroupProps> = {
  args: {
    defaultValue: "option-one",
    children: (
      <>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-one" id="option-one" />
          <Label htmlFor="option-one">Option One</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-two" id="option-two" />
          <Label htmlFor="option-two">Option Two</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-three" id="option-three" />
          <Label htmlFor="option-three">Option Three</Label>
        </div>
      </>
    ),
  },
};

/**
 * Radio group with descriptions.
 */
export const WithDescriptions: StoryObj<RadioGroupProps> = {
  args: {
    defaultValue: "comfortable",
    className: "grid gap-4",
    children: (
      <>
        <div className="flex items-start space-x-2">
          <RadioGroupItem value="default" id="default" className="mt-1" />
          <div>
            <Label htmlFor="default" className="font-medium">
              Default
            </Label>
            <p className="text-sm text-muted-foreground">
              The default system settings.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-2">
          <RadioGroupItem
            value="comfortable"
            id="comfortable"
            className="mt-1"
          />
          <div>
            <Label htmlFor="comfortable" className="font-medium">
              Comfortable
            </Label>
            <p className="text-sm text-muted-foreground">
              Optimized for comfort with larger text and controls.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-2">
          <RadioGroupItem value="compact" id="compact" className="mt-1" />
          <div>
            <Label htmlFor="compact" className="font-medium">
              Compact
            </Label>
            <p className="text-sm text-muted-foreground">
              Optimized for density with smaller text and controls.
            </p>
          </div>
        </div>
      </>
    ),
  },
};

/**
 * Radio group with disabled items.
 */
export const WithDisabledItems: StoryObj<RadioGroupProps> = {
  args: {
    defaultValue: "option-one",
    children: (
      <>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-one" id="r-option-one" />
          <Label htmlFor="r-option-one">Option One</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-two" id="r-option-two" disabled />
          <Label htmlFor="r-option-two" className="text-muted-foreground">
            Option Two (Disabled)
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-three" id="r-option-three" />
          <Label htmlFor="r-option-three">Option Three</Label>
        </div>
      </>
    ),
  },
};

/**
 * Radio group with horizontal layout.
 */
export const HorizontalLayout: StoryObj<RadioGroupProps> = {
  args: {
    defaultValue: "option-one",
    className: "flex space-x-4",
    children: (
      <>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-one" id="h-option-one" />
          <Label htmlFor="h-option-one">Option One</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-two" id="h-option-two" />
          <Label htmlFor="h-option-two">Option Two</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-three" id="h-option-three" />
          <Label htmlFor="h-option-three">Option Three</Label>
        </div>
      </>
    ),
  },
};

/**
 * Radio group with custom styling.
 */
export const CustomStyling: StoryObj<RadioGroupProps> = {
  args: {
    defaultValue: "option-one",
    className: "grid gap-2",
    children: (
      <>
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="option-one"
            id="c-option-one"
            className="text-blue-500 border-blue-500 data-[state=checked]:bg-blue-500 data-[state=checked]:text-white"
          />
          <Label htmlFor="c-option-one" className="text-blue-500 font-medium">
            Blue Option
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="option-two"
            id="c-option-two"
            className="text-green-500 border-green-500 data-[state=checked]:bg-green-500 data-[state=checked]:text-white"
          />
          <Label htmlFor="c-option-two" className="text-green-500 font-medium">
            Green Option
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="option-three"
            id="c-option-three"
            className="text-purple-500 border-purple-500 data-[state=checked]:bg-purple-500 data-[state=checked]:text-white"
          />
          <Label
            htmlFor="c-option-three"
            className="text-purple-500 font-medium"
          >
            Purple Option
          </Label>
        </div>
      </>
    ),
  },
};

/**
 * Radio group in a form.
 */
export const InForm: StoryObj<RadioGroupProps> = {
  render: () => (
    <form className="grid gap-6">
      <div className="space-y-2">
        <h4 className="font-medium text-sm">Notification preferences</h4>
        <RadioGroup defaultValue="all" className="grid gap-2">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="all" id="notification-all" />
            <Label htmlFor="notification-all">All notifications</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="important" id="notification-important" />
            <Label htmlFor="notification-important">Important only</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="none" id="notification-none" />
            <Label htmlFor="notification-none">No notifications</Label>
          </div>
        </RadioGroup>
      </div>
      <div className="space-y-2">
        <h4 className="font-medium text-sm">Email frequency</h4>
        <RadioGroup defaultValue="daily" className="grid gap-2">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="daily" id="email-daily" />
            <Label htmlFor="email-daily">Daily digest</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="weekly" id="email-weekly" />
            <Label htmlFor="email-weekly">Weekly digest</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="none" id="email-none" />
            <Label htmlFor="email-none">No emails</Label>
          </div>
        </RadioGroup>
      </div>
    </form>
  ),
};
