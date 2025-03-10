import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "../../../components/shadcn/menubar";
import { ThemeProvider } from "../../../themes/shadcn";

type MenubarProps = React.ComponentProps<typeof Menubar>;

const meta = {
  title: "Components/Shadcn/Menubar",
  component: Menubar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div className="w-full max-w-3xl">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Menubar>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default menubar with File, Edit, View, and Help menus.
 */
export const Default: StoryObj<MenubarProps> = {
  args: {
    children: (
      <>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New Tab <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              New Window <MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled>New Incognito Window</MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>Share</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Email link</MenubarItem>
                <MenubarItem>Messages</MenubarItem>
                <MenubarItem>Notes</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarItem>
              Print... <MenubarShortcut>⌘P</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              Undo <MenubarShortcut>⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Cut <MenubarShortcut>⌘X</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Copy <MenubarShortcut>⌘C</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Paste <MenubarShortcut>⌘V</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Select All <MenubarShortcut>⌘A</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent>
            <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
            <MenubarCheckboxItem checked>
              Always Show Full URLs
            </MenubarCheckboxItem>
            <MenubarSeparator />
            <MenubarItem inset>
              Reload <MenubarShortcut>⌘R</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled inset>
              Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset>Toggle Fullscreen</MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset>Hide Sidebar</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Help</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>About</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Documentation <MenubarShortcut>F1</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>Keyboard Shortcuts</MenubarItem>
            <MenubarItem>Report an Issue</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </>
    ),
  },
};

/**
 * Menubar with radio groups for selecting options.
 */
export const WithRadioGroups: StoryObj<MenubarProps> = {
  args: {
    children: (
      <>
        <MenubarMenu>
          <MenubarTrigger>Format</MenubarTrigger>
          <MenubarContent>
            <MenubarSub>
              <MenubarSubTrigger>Font Family</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarRadioGroup value="system">
                  <MenubarRadioItem value="system">
                    System Default
                  </MenubarRadioItem>
                  <MenubarRadioItem value="arial">Arial</MenubarRadioItem>
                  <MenubarRadioItem value="helvetica">
                    Helvetica
                  </MenubarRadioItem>
                  <MenubarRadioItem value="times-new-roman">
                    Times New Roman
                  </MenubarRadioItem>
                  <MenubarRadioItem value="monospace">
                    Monospace
                  </MenubarRadioItem>
                </MenubarRadioGroup>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSub>
              <MenubarSubTrigger>Text Size</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarRadioGroup value="medium">
                  <MenubarRadioItem value="small">Small</MenubarRadioItem>
                  <MenubarRadioItem value="medium">Medium</MenubarRadioItem>
                  <MenubarRadioItem value="large">Large</MenubarRadioItem>
                  <MenubarRadioItem value="xl">Extra Large</MenubarRadioItem>
                </MenubarRadioGroup>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarItem>
              Bold <MenubarShortcut>⌘B</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Italic <MenubarShortcut>⌘I</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Underline <MenubarShortcut>⌘U</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent>
            <MenubarSub>
              <MenubarSubTrigger>Zoom</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarRadioGroup value="100%">
                  <MenubarRadioItem value="50%">50%</MenubarRadioItem>
                  <MenubarRadioItem value="75%">75%</MenubarRadioItem>
                  <MenubarRadioItem value="100%">100%</MenubarRadioItem>
                  <MenubarRadioItem value="125%">125%</MenubarRadioItem>
                  <MenubarRadioItem value="150%">150%</MenubarRadioItem>
                </MenubarRadioGroup>
                <MenubarSeparator />
                <MenubarItem>
                  Zoom In <MenubarShortcut>⌘+</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  Zoom Out <MenubarShortcut>⌘-</MenubarShortcut>
                </MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarContent>
        </MenubarMenu>
      </>
    ),
  },
};

/**
 * Menubar with checkbox items for toggling options.
 */
export const WithCheckboxItems: StoryObj<MenubarProps> = {
  args: {
    children: (
      <>
        <MenubarMenu>
          <MenubarTrigger>Options</MenubarTrigger>
          <MenubarContent>
            <MenubarCheckboxItem checked>Show Status Bar</MenubarCheckboxItem>
            <MenubarCheckboxItem>Show Activity Bar</MenubarCheckboxItem>
            <MenubarCheckboxItem checked>Show Panel</MenubarCheckboxItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>Appearance</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarCheckboxItem checked>
                  Show Line Numbers
                </MenubarCheckboxItem>
                <MenubarCheckboxItem>Show Minimap</MenubarCheckboxItem>
                <MenubarCheckboxItem>Show Breadcrumbs</MenubarCheckboxItem>
                <MenubarCheckboxItem checked>Wrap Text</MenubarCheckboxItem>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Window</MenubarTrigger>
          <MenubarContent>
            <MenubarCheckboxItem checked>Show Sidebar</MenubarCheckboxItem>
            <MenubarCheckboxItem>Show Terminal</MenubarCheckboxItem>
            <MenubarCheckboxItem>Show Explorer</MenubarCheckboxItem>
            <MenubarSeparator />
            <MenubarItem>
              Split Editor <MenubarShortcut>⌘\</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </>
    ),
  },
};

/**
 * Application menubar with a complete set of menus.
 */
export const ApplicationMenubar: StoryObj<MenubarProps> = {
  args: {
    className: "border rounded-md",
    children: (
      <>
        <MenubarMenu>
          <MenubarTrigger className="font-bold">App</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>About Application</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Preferences...</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Quit <MenubarShortcut>⌘Q</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New <MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Open... <MenubarShortcut>⌘O</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Save <MenubarShortcut>⌘S</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Save As... <MenubarShortcut>⇧⌘S</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Export... <MenubarShortcut>⌘E</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              Undo <MenubarShortcut>⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Cut <MenubarShortcut>⌘X</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Copy <MenubarShortcut>⌘C</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Paste <MenubarShortcut>⌘V</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent>
            <MenubarCheckboxItem checked>Show Toolbar</MenubarCheckboxItem>
            <MenubarCheckboxItem>Show Sidebar</MenubarCheckboxItem>
            <MenubarSeparator />
            <MenubarItem>
              Zoom In <MenubarShortcut>⌘+</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Zoom Out <MenubarShortcut>⌘-</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Reset Zoom <MenubarShortcut>⌘0</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Help</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Documentation</MenubarItem>
            <MenubarItem>Report an Issue</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Check for Updates</MenubarItem>
            <MenubarItem>About</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </>
    ),
  },
};
