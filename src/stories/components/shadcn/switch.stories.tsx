import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "../../../components/shadcn/switch";
import { ThemeProvider } from "../../../themes/shadcn";
import { Label } from "../../../components/shadcn/label";

type SwitchProps = React.ComponentProps<typeof Switch>;

/**
 * A control that allows the user to toggle between checked and not checked.
 *
 * See the [Shadcn docs](https://ui.shadcn.com/docs/components/switch) for more information.
 */
const meta = {
  title: "Components/Shadcn/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "stable", "version:2.3.0"],
  argTypes: {
    checked: {
      control: "boolean",
      description: "Whether the switch is checked",
      table: { type: { summary: "boolean" } },
    },
    disabled: {
      control: "boolean",
      description: "Whether the switch is disabled",
      table: { type: { summary: "boolean" } },
    },
    onCheckedChange: {
      control: false,
      description: "The callback function when the switch is checked",
      table: { type: { summary: "function" } },
    },
    defaultChecked: {
      control: "boolean",
      description: "Whether the switch is checked by default",
      table: { type: { summary: "boolean" } },
    },
    className: {
      control: "text",
      description: "The class name of the switch",
      table: { type: { summary: "string" } },
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
} satisfies Meta<typeof Switch>;

export default meta;

/**
 * Default switch without a label.
 */
export const Default: StoryObj<SwitchProps> = {
  args: {},
};

/**
 * Switch with a label.
 */
export const WithLabel: StoryObj<SwitchProps> = {
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" {...args} />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  ),
};

/**
 * Checked switch.
 */
export const Checked: StoryObj<SwitchProps> = {
  args: {
    checked: true,
  },
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Switch id="checked-switch" {...args} />
      <Label htmlFor="checked-switch">Enabled</Label>
    </div>
  ),
};

/**
 * Disabled switch.
 */
export const Disabled: StoryObj<SwitchProps> = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Switch id="disabled-switch" {...args} />
      <Label htmlFor="disabled-switch" className="text-muted-foreground">
        Disabled
      </Label>
    </div>
  ),
};

/**
 * Disabled and checked switch.
 */
export const DisabledChecked: StoryObj<SwitchProps> = {
  args: {
    disabled: true,
    checked: true,
  },
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Switch id="disabled-checked-switch" {...args} />
      <Label
        htmlFor="disabled-checked-switch"
        className="text-muted-foreground"
      >
        Disabled & Checked
      </Label>
    </div>
  ),
};

/**
 * Switch with description.
 */
export const WithDescription: StoryObj<SwitchProps> = {
  render: (args) => (
    <div className="grid gap-1.5">
      <div className="flex items-center space-x-2">
        <Switch id="notifications" {...args} />
        <Label htmlFor="notifications">Enable notifications</Label>
      </div>
      <p className="text-sm text-muted-foreground ml-6">
        You will receive notifications when someone mentions you.
      </p>
    </div>
  ),
};

/**
 * Multiple switches in a form.
 */
export const SwitchGroup: StoryObj<SwitchProps> = {
  render: () => (
    <div className="grid gap-5 w-full max-w-sm">
      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <Label htmlFor="wifi">Wi-Fi</Label>
          <p className="text-sm text-muted-foreground">
            Connect to Wi-Fi networks
          </p>
        </div>
        <Switch id="wifi" defaultChecked />
      </div>
      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <Label htmlFor="bluetooth">Bluetooth</Label>
          <p className="text-sm text-muted-foreground">
            Connect to Bluetooth devices
          </p>
        </div>
        <Switch id="bluetooth" />
      </div>
      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <Label htmlFor="airplane">Airplane Mode</Label>
          <p className="text-sm text-muted-foreground">
            Disable all wireless connections
          </p>
        </div>
        <Switch id="airplane" />
      </div>
    </div>
  ),
};

/**
 * Switch with custom styling.
 */
export const CustomStyling: StoryObj<SwitchProps> = {
  args: {
    className: "bg-blue-200 data-[state=checked]:bg-blue-500",
  },
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Switch id="custom-switch" {...args} />
      <Label htmlFor="custom-switch">Custom Styled Switch</Label>
    </div>
  ),
};
