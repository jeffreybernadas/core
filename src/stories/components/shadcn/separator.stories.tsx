import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Separator } from "../../../components/shadcn/separator";
import { ThemeProvider } from "../../../themes/shadcn";

type SeparatorProps = React.ComponentProps<typeof Separator>;

const meta = {
  title: "Components/Shadcn/Separator",
  component: Separator,
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
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default horizontal separator.
 */
export const Default: StoryObj<SeparatorProps> = {
  render: () => (
    <div>
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
        <p className="text-sm text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  ),
};

/**
 * Horizontal separator with different styles.
 */
export const HorizontalVariants: StoryObj<SeparatorProps> = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h4 className="mb-2 text-sm font-medium">Default</h4>
        <Separator />
      </div>
      <div>
        <h4 className="mb-2 text-sm font-medium">Thicker</h4>
        <Separator className="h-[2px]" />
      </div>
      <div>
        <h4 className="mb-2 text-sm font-medium">Custom Color</h4>
        <Separator className="bg-primary" />
      </div>
      <div>
        <h4 className="mb-2 text-sm font-medium">Dashed</h4>
        <div className="h-[1px] w-full border-t border-dashed border-border" />
      </div>
      <div>
        <h4 className="mb-2 text-sm font-medium">Dotted</h4>
        <div className="h-[1px] w-full border-t border-dotted border-border" />
      </div>
      <div>
        <h4 className="mb-2 text-sm font-medium">Gradient</h4>
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-foreground to-transparent" />
      </div>
    </div>
  ),
};

/**
 * Vertical separator with different styles.
 */
export const VerticalVariants: StoryObj<SeparatorProps> = {
  render: () => (
    <div className="flex h-32 items-center space-x-8">
      <div className="space-y-2">
        <h4 className="text-sm font-medium">Default</h4>
        <div className="flex h-20 items-center">
          <Separator orientation="vertical" />
        </div>
      </div>
      <div className="space-y-2">
        <h4 className="text-sm font-medium">Thicker</h4>
        <div className="flex h-20 items-center">
          <Separator orientation="vertical" className="w-[2px]" />
        </div>
      </div>
      <div className="space-y-2">
        <h4 className="text-sm font-medium">Custom Color</h4>
        <div className="flex h-20 items-center">
          <Separator orientation="vertical" className="bg-primary" />
        </div>
      </div>
      <div className="space-y-2">
        <h4 className="text-sm font-medium">Dashed</h4>
        <div className="flex h-20 items-center">
          <div className="h-full w-[1px] border-l border-dashed border-border" />
        </div>
      </div>
      <div className="space-y-2">
        <h4 className="text-sm font-medium">Dotted</h4>
        <div className="flex h-20 items-center">
          <div className="h-full w-[1px] border-l border-dotted border-border" />
        </div>
      </div>
      <div className="space-y-2">
        <h4 className="text-sm font-medium">Gradient</h4>
        <div className="flex h-20 items-center">
          <div className="h-full w-[1px] bg-gradient-to-b from-transparent via-foreground to-transparent" />
        </div>
      </div>
    </div>
  ),
};

/**
 * Separator used in a content layout.
 */
export const ContentLayout: StoryObj<SeparatorProps> = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h2 className="text-lg font-bold">Account Settings</h2>
        <p className="text-sm text-muted-foreground">
          Manage your account settings and preferences.
        </p>
      </div>
      <Separator />
      <div className="space-y-4">
        <div>
          <h3 className="text-md font-medium">Profile</h3>
          <p className="text-sm text-muted-foreground">
            Update your personal information.
          </p>
        </div>
        <Separator className="bg-muted" />
        <div>
          <h3 className="text-md font-medium">Appearance</h3>
          <p className="text-sm text-muted-foreground">
            Customize the look and feel of the interface.
          </p>
        </div>
        <Separator className="bg-muted" />
        <div>
          <h3 className="text-md font-medium">Notifications</h3>
          <p className="text-sm text-muted-foreground">
            Configure how you receive notifications.
          </p>
        </div>
      </div>
    </div>
  ),
};

/**
 * Separator with text in the middle.
 */
export const WithText: StoryObj<SeparatorProps> = {
  render: () => (
    <div className="space-y-4">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <Separator className="w-full" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-background px-2 text-sm text-muted-foreground">
            OR
          </span>
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <Separator className="w-full" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-background px-2 text-sm font-medium">
            SECTION DIVIDER
          </span>
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-dashed border-border" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-background px-2 text-sm text-muted-foreground">
            DASHED WITH TEXT
          </span>
        </div>
      </div>
    </div>
  ),
};
