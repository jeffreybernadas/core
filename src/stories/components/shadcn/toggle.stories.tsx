import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "../../../components/shadcn/toggle";
import { ThemeProvider } from "../../../themes/shadcn";
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Palette,
  Bell,
  BellOff,
  Sun,
  Moon,
} from "lucide-react";

type ToggleProps = React.ComponentProps<typeof Toggle>;

/**
 * A two-state button that can be either on or off.
 *
 * See the [Shadcn docs](https://ui.shadcn.com/docs/components/toggle) for more information.
 */
const meta = {
  title: "Components/Shadcn/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
    docs: {
      controls: {
        exclude: ["aria-label"],
      },
    },
  },
  tags: ["autodocs", "stable", "version:2.3.0"],
  argTypes: {
    children: {
      control: false,
      description: "The content of the toggle",
      table: { type: { summary: "React.ReactNode" } },
    },
    className: {
      control: false,
      description: "The class name of the toggle",
      table: { type: { summary: "string" } },
    },
    variant: {
      control: "select",
      options: ["default", "outline"],
      description: "The variant of the toggle",
      table: { type: { summary: "string" } },
    },
    size: {
      control: "select",
      options: ["sm", "default", "lg"],
      description: "The size of the toggle",
      table: { type: { summary: "string" } },
    },
    pressed: {
      control: "boolean",
      description: "Whether the toggle is pressed",
      table: { type: { summary: "boolean" } },
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
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default toggle with an icon.
 */
export const Default: StoryObj<ToggleProps> = {
  args: {
    "aria-label": "Toggle bold",
    children: <Bold className="h-4 w-4" />,
  },
};

/**
 * Toggle with text.
 */
export const WithText: StoryObj<ToggleProps> = {
  args: {
    "aria-label": "Toggle italic",
    children: (
      <>
        <Italic className="mr-2 h-4 w-4" />
        Italic
      </>
    ),
  },
};

/**
 * Toggle with different variants.
 */
export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <Toggle variant="default" aria-label="Toggle bold">
          <Bold className="h-4 w-4" />
        </Toggle>
        <Toggle variant="outline" aria-label="Toggle italic">
          <Italic className="h-4 w-4" />
        </Toggle>
      </div>
      <div className="flex gap-2">
        <Toggle variant="default" aria-label="Toggle bold">
          <Bold className="mr-2 h-4 w-4" />
          Bold
        </Toggle>
        <Toggle variant="outline" aria-label="Toggle italic">
          <Italic className="mr-2 h-4 w-4" />
          Italic
        </Toggle>
      </div>
    </div>
  ),
};

/**
 * Toggle with different sizes.
 */
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 items-center">
        <Toggle size="sm" aria-label="Toggle small">
          <Bold className="h-3 w-3" />
        </Toggle>
        <Toggle size="default" aria-label="Toggle default">
          <Bold className="h-4 w-4" />
        </Toggle>
        <Toggle size="lg" aria-label="Toggle large">
          <Bold className="h-5 w-5" />
        </Toggle>
      </div>
      <div className="flex gap-2 items-center">
        <Toggle size="sm" aria-label="Toggle small">
          <Bold className="mr-1 h-3 w-3" />
          Small
        </Toggle>
        <Toggle size="default" aria-label="Toggle default">
          <Bold className="mr-2 h-4 w-4" />
          Default
        </Toggle>
        <Toggle size="lg" aria-label="Toggle large">
          <Bold className="mr-2 h-5 w-5" />
          Large
        </Toggle>
      </div>
    </div>
  ),
};

/**
 * Toggle with disabled state.
 */
export const Disabled: StoryObj<ToggleProps> = {
  args: {
    "aria-label": "Toggle bold",
    disabled: true,
    children: <Bold className="h-4 w-4" />,
  },
};

/**
 * Toggle with pressed state.
 */
export const Pressed: StoryObj<ToggleProps> = {
  args: {
    "aria-label": "Toggle bold",
    pressed: true,
    children: <Bold className="h-4 w-4" />,
  },
};

/**
 * Toggle group for text formatting.
 */
export const TextFormatting: Story = {
  render: () => (
    <div className="space-y-4">
      <h3 className="text-sm font-medium">Text Formatting</h3>
      <div className="flex gap-2">
        <Toggle aria-label="Toggle bold">
          <Bold className="h-4 w-4" />
        </Toggle>
        <Toggle aria-label="Toggle italic">
          <Italic className="h-4 w-4" />
        </Toggle>
        <Toggle aria-label="Toggle underline">
          <Underline className="h-4 w-4" />
        </Toggle>
      </div>
    </div>
  ),
};

/**
 * Toggle group for text alignment.
 */
export const TextAlignment: Story = {
  render: () => (
    <div className="space-y-4">
      <h3 className="text-sm font-medium">Text Alignment</h3>
      <div className="flex gap-2">
        <Toggle aria-label="Align left">
          <AlignLeft className="h-4 w-4" />
        </Toggle>
        <Toggle aria-label="Align center">
          <AlignCenter className="h-4 w-4" />
        </Toggle>
        <Toggle aria-label="Align right">
          <AlignRight className="h-4 w-4" />
        </Toggle>
        <Toggle aria-label="Justify">
          <AlignJustify className="h-4 w-4" />
        </Toggle>
      </div>
    </div>
  ),
};

/**
 * Toggle for theme switching.
 */
export const ThemeToggle: Story = {
  render: function ThemeToggleExample() {
    const [isDark, setIsDark] = React.useState(false);

    return (
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Theme Toggle</h3>
        <Toggle
          aria-label="Toggle theme"
          pressed={isDark}
          onPressedChange={setIsDark}
        >
          {isDark ? (
            <Moon className="h-4 w-4 mr-2" />
          ) : (
            <Sun className="h-4 w-4 mr-2" />
          )}
          {isDark ? "Dark" : "Light"}
        </Toggle>
      </div>
    );
  },
};

/**
 * Toggle for notifications.
 */
export const NotificationToggle: Story = {
  render: function NotificationToggleExample() {
    const [enabled, setEnabled] = React.useState(true);

    return (
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Notifications</h3>
        <Toggle
          aria-label="Toggle notifications"
          pressed={enabled}
          onPressedChange={setEnabled}
          variant={enabled ? "default" : "outline"}
        >
          {enabled ? (
            <Bell className="h-4 w-4 mr-2" />
          ) : (
            <BellOff className="h-4 w-4 mr-2" />
          )}
          {enabled ? "Enabled" : "Disabled"}
        </Toggle>
      </div>
    );
  },
};

/**
 * Toggle with custom styling.
 */
export const CustomStyling: Story = {
  render: () => (
    <div className="space-y-4">
      <h3 className="text-sm font-medium">Custom Styling</h3>
      <div className="flex gap-2">
        <Toggle
          aria-label="Toggle color"
          className="bg-blue-100 hover:bg-blue-200 data-[state=on]:bg-blue-500 data-[state=on]:text-white text-blue-400"
        >
          <Palette className="h-4 w-4 mr-2" />
          Blue
        </Toggle>
        <Toggle
          aria-label="Toggle color"
          className="bg-green-100 hover:bg-green-200 data-[state=on]:bg-green-500 data-[state=on]:text-white text-green-400"
        >
          <Palette className="h-4 w-4 mr-2" />
          Green
        </Toggle>
        <Toggle
          aria-label="Toggle color"
          className="bg-red-100 hover:bg-red-200 data-[state=on]:bg-red-500 data-[state=on]:text-white text-red-400"
        >
          <Palette className="h-4 w-4 mr-2" />
          Red
        </Toggle>
      </div>
    </div>
  ),
};
