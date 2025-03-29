import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "../../../components/shadcn/toggle-group";
import { ThemeProvider } from "../../../themes/shadcn";
import {
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  LayoutGrid,
  LayoutList,
  Sun,
  Moon,
  Laptop,
} from "lucide-react";

/**
 * A set of two-state buttons that can be toggled on or off.
 *
 * See the [Shadcn docs](https://ui.shadcn.com/docs/components/toggle-group) for more information.
 */
const meta = {
  title: "Components/Shadcn/ToggleGroup",
  component: ToggleGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "stable", "version:2.3.0"],
  argTypes: {
    children: {
      control: false,
      description: "The content of the toggle group",
      table: { type: { summary: "React.ReactNode" } },
    },
    className: {
      control: "text",
      description: "The class name of the toggle group",
      table: { type: { summary: "string" } },
    },
    variant: {
      control: "select",
      options: ["default", "outline"],
      description: "The variant of the toggle group",
      table: { type: { summary: "string" } },
    },
    size: {
      control: "select",
      options: ["sm", "default", "lg"],
      description: "The size of the toggle group",
      table: { type: { summary: "string" } },
    },
    type: {
      control: "select",
      options: ["single", "multiple"],
      description: "The type of the toggle group",
      table: { type: { summary: "string" } },
    },
    defaultValue: {
      control: "text",
      description: "The value of the default toggle group item",
      table: { type: { summary: "string" } },
    },
  },
  decorators: [
    (Story, { args }) => (
      <ThemeProvider>
        <div className="w-full max-w-md">
          <Story {...args} />
        </div>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof ToggleGroup>;

export default meta;
type Story = StoryObj<typeof ToggleGroup>;

/**
 * Default toggle group with text alignment options.
 */
export const Default: Story = {
  args: {
    type: "single",
    defaultValue: "center",
  },
  render: (args) => (
    <ToggleGroup {...args}>
      <ToggleGroupItem value="left" aria-label="Align left">
        <AlignLeft className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <AlignCenter className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        <AlignRight className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="justify" aria-label="Justify">
        <AlignJustify className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

/**
 * Toggle group with multiple selection.
 */
export const MultipleSelection: Story = {
  render: () => (
    <ToggleGroup
      type="multiple"
      defaultValue={["bold"]}
      aria-label="Text formatting"
    >
      <ToggleGroupItem value="bold" aria-label="Bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Underline">
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

/**
 * Toggle group with text labels.
 */
export const WithLabels: Story = {
  render: () => (
    <ToggleGroup type="single" defaultValue="list" aria-label="View options">
      <ToggleGroupItem value="list" aria-label="List view">
        <LayoutList className="h-4 w-4 mr-2" />
        List
      </ToggleGroupItem>
      <ToggleGroupItem value="grid" aria-label="Grid view">
        <LayoutGrid className="h-4 w-4 mr-2" />
        Grid
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

/**
 * Toggle group with disabled items.
 */
export const DisabledItems: Story = {
  render: () => (
    <ToggleGroup type="single" defaultValue="list" aria-label="List type">
      <ToggleGroupItem value="list" aria-label="Unordered list">
        <List className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="ordered" aria-label="Ordered list">
        <ListOrdered className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="checklist" aria-label="Checklist" disabled>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
        >
          <path d="M8 6h13" />
          <path d="M8 12h13" />
          <path d="M8 18h13" />
          <path d="M3 6l1 1" />
          <path d="M3 12l1 1" />
          <path d="M3 18l1 1" />
        </svg>
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

/**
 * Toggle group with different sizes.
 */
export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="mb-2 text-sm font-medium">Small</h3>
        <ToggleGroup type="single" size="sm" defaultValue="center">
          <ToggleGroupItem value="left" aria-label="Align left">
            <AlignLeft className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="center" aria-label="Align center">
            <AlignCenter className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="right" aria-label="Align right">
            <AlignRight className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div>
        <h3 className="mb-2 text-sm font-medium">Default</h3>
        <ToggleGroup type="single" defaultValue="center">
          <ToggleGroupItem value="left" aria-label="Align left">
            <AlignLeft className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="center" aria-label="Align center">
            <AlignCenter className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="right" aria-label="Align right">
            <AlignRight className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div>
        <h3 className="mb-2 text-sm font-medium">Large</h3>
        <ToggleGroup type="single" size="lg" defaultValue="center">
          <ToggleGroupItem value="left" aria-label="Align left">
            <AlignLeft className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="center" aria-label="Align center">
            <AlignCenter className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="right" aria-label="Align right">
            <AlignRight className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  ),
};

/**
 * Toggle group with variants.
 */
export const Variants: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="mb-2 text-sm font-medium">Default</h3>
        <ToggleGroup type="single" defaultValue="center">
          <ToggleGroupItem value="left" aria-label="Align left">
            <AlignLeft className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="center" aria-label="Align center">
            <AlignCenter className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="right" aria-label="Align right">
            <AlignRight className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div>
        <h3 className="mb-2 text-sm font-medium">Outline</h3>
        <ToggleGroup type="single" variant="outline" defaultValue="center">
          <ToggleGroupItem value="left" aria-label="Align left">
            <AlignLeft className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="center" aria-label="Align center">
            <AlignCenter className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="right" aria-label="Align right">
            <AlignRight className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  ),
};

/**
 * Toggle group for theme selection.
 */
export const ThemeToggle: Story = {
  render: () => (
    <div className="space-y-4">
      <h3 className="text-sm font-medium">Theme</h3>
      <ToggleGroup type="single" defaultValue="system">
        <ToggleGroupItem value="light" aria-label="Light theme">
          <Sun className="h-4 w-4 mr-2" />
          Light
        </ToggleGroupItem>
        <ToggleGroupItem value="dark" aria-label="Dark theme">
          <Moon className="h-4 w-4 mr-2" />
          Dark
        </ToggleGroupItem>
        <ToggleGroupItem value="system" aria-label="System theme">
          <Laptop className="h-4 w-4 mr-2" />
          System
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  ),
};

/**
 * Toggle group with custom styling.
 */
export const CustomStyling: Story = {
  render: () => (
    <div className="space-y-4">
      <h3 className="text-sm font-medium">Custom Styling</h3>
      <ToggleGroup
        type="single"
        defaultValue="center"
        className="border-primary"
      >
        <ToggleGroupItem
          value="left"
          aria-label="Align left"
          className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
        >
          <AlignLeft className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem
          value="center"
          aria-label="Align center"
          className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
        >
          <AlignCenter className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem
          value="right"
          aria-label="Align right"
          className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
        >
          <AlignRight className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  ),
};
