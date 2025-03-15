import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "../../../components/shadcn/context-menu";
import { ThemeProvider } from "../../../themes/shadcn";

type ContextMenuProps = React.ComponentProps<typeof ContextMenu>;

const meta = {
  title: "Components/Shadcn/ContextMenu",
  component: ContextMenu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "stable", "version:2.3.0"],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div className="w-full max-w-3xl">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof ContextMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default context menu with basic items.
 */
export const Default: StoryObj<ContextMenuProps> = {
  args: {
    children: (
      <>
        <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
          Right click here
        </ContextMenuTrigger>
        <ContextMenuContent className="w-64">
          <ContextMenuItem>
            Back
            <ContextMenuShortcut>⌘[</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            Forward
            <ContextMenuShortcut>⌘]</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            Reload
            <ContextMenuShortcut>⌘R</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem>
            Save As...
            <ContextMenuShortcut>⌘S</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            Print...
            <ContextMenuShortcut>⌘P</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem>
            View Source
            <ContextMenuShortcut>⌘U</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuContent>
      </>
    ),
  },
};

/**
 * Context menu with checkbox items.
 */
export const WithCheckboxItems: StoryObj<ContextMenuProps> = {
  render: () => {
    const [showStatusBar, setShowStatusBar] = React.useState(true);
    const [showActivityBar, setShowActivityBar] = React.useState(false);
    const [showPanel, setShowPanel] = React.useState(false);

    return (
      <ContextMenu>
        <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
          Right click here
        </ContextMenuTrigger>
        <ContextMenuContent className="w-64">
          <ContextMenuLabel>View</ContextMenuLabel>
          <ContextMenuSeparator />
          <ContextMenuCheckboxItem
            checked={showStatusBar}
            onCheckedChange={setShowStatusBar}
          >
            Status Bar
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem
            checked={showActivityBar}
            onCheckedChange={setShowActivityBar}
          >
            Activity Bar
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem
            checked={showPanel}
            onCheckedChange={setShowPanel}
          >
            Panel
          </ContextMenuCheckboxItem>
        </ContextMenuContent>
      </ContextMenu>
    );
  },
};

/**
 * Context menu with radio items.
 */
export const WithRadioItems: StoryObj<ContextMenuProps> = {
  render: () => {
    const [position, setPosition] = React.useState("bottom");

    return (
      <ContextMenu>
        <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
          Right click here
        </ContextMenuTrigger>
        <ContextMenuContent className="w-64">
          <ContextMenuLabel>Panel Position</ContextMenuLabel>
          <ContextMenuSeparator />
          <ContextMenuRadioGroup value={position} onValueChange={setPosition}>
            <ContextMenuRadioItem value="top">Top</ContextMenuRadioItem>
            <ContextMenuRadioItem value="right">Right</ContextMenuRadioItem>
            <ContextMenuRadioItem value="bottom">Bottom</ContextMenuRadioItem>
            <ContextMenuRadioItem value="left">Left</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuContent>
      </ContextMenu>
    );
  },
};

/**
 * Context menu with submenu.
 */
export const WithSubmenu: StoryObj<ContextMenuProps> = {
  args: {
    children: (
      <>
        <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
          Right click here
        </ContextMenuTrigger>
        <ContextMenuContent className="w-64">
          <ContextMenuItem>
            Back
            <ContextMenuShortcut>⌘[</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            Forward
            <ContextMenuShortcut>⌘]</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            Reload
            <ContextMenuShortcut>⌘R</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-48">
              <ContextMenuItem>
                Save Page As...
                <ContextMenuShortcut>⌘S</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>Create Shortcut...</ContextMenuItem>
              <ContextMenuItem>Name Window...</ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem>Developer Tools</ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuItem>
            Print...
            <ContextMenuShortcut>⌘P</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuContent>
      </>
    ),
  },
};

/**
 * Context menu on an image.
 */
export const OnImage: StoryObj<ContextMenuProps> = {
  args: {
    children: (
      <>
        <ContextMenuTrigger>
          <div className="overflow-hidden rounded-md border">
            <img
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1064&auto=format&fit=crop"
              alt="Colorful abstract art"
              className="h-auto w-[400px] object-cover"
            />
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent className="w-64">
          <ContextMenuItem>View Image</ContextMenuItem>
          <ContextMenuItem>Copy Image</ContextMenuItem>
          <ContextMenuItem>Copy Image Address</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem>Save Image As...</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem>Share Image</ContextMenuItem>
        </ContextMenuContent>
      </>
    ),
  },
};

/**
 * Context menu with disabled items.
 */
export const WithDisabledItems: StoryObj<ContextMenuProps> = {
  args: {
    children: (
      <>
        <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
          Right click here
        </ContextMenuTrigger>
        <ContextMenuContent className="w-64">
          <ContextMenuItem>
            Back
            <ContextMenuShortcut>⌘[</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem disabled>
            Forward
            <ContextMenuShortcut>⌘]</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            Reload
            <ContextMenuShortcut>⌘R</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem disabled>
            Save As...
            <ContextMenuShortcut>⌘S</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            Print...
            <ContextMenuShortcut>⌘P</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuContent>
      </>
    ),
  },
};
