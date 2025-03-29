import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar, SidebarProvider } from "../../../components/shadcn/sidebar";
import { ThemeProvider } from "../../../themes/shadcn";
import { Button } from "../../../components/shadcn/button";
import {
  Home,
  Settings,
  User,
  FileText,
  Mail,
  Bell,
  Calendar,
  BarChart,
  Menu,
  X,
} from "lucide-react";
import { Separator } from "../../../components/shadcn/separator";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../components/shadcn/avatar";

type SidebarProps = React.ComponentProps<typeof Sidebar>;

/**
 * A composable, themeable and customizable sidebar component.
 *
 * See the [Shadcn docs](https://ui.shadcn.com/docs/components/sidebar) for more information.
 */
const meta = {
  title: "Components/Shadcn/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs", "stable", "version:2.3.0"],
  argTypes: {
    children: {
      control: false,
      description: "The content of the sidebar",
      table: { type: { summary: "React.ReactNode" } },
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
      table: { type: { summary: "string" } },
    },
    side: {
      control: "select",
      options: ["left", "right"],
      description: "The side of the sidebar",
      table: { type: { summary: "string" } },
    },
    variant: {
      control: "select",
      options: ["sidebar", "floating", "inset"],
      description: "The variant of the sidebar",
      table: { type: { summary: "string" } },
    },
    collapsible: {
      control: "select",
      options: ["none", "offcanvas", "icon"],
      description: "The collapsible state of the sidebar",
      table: { type: { summary: "string" } },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <SidebarProvider>
          <div className="h-screen">
            <Story />
          </div>
        </SidebarProvider>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default sidebar with navigation items.
 */
export const Default: StoryObj<SidebarProps> = {
  render: (args) => (
    <div className="flex h-full">
      <Sidebar className="border-r" {...args}>
        <div className="p-4">
          <h2 className="text-lg font-semibold">Dashboard</h2>
        </div>
        <Separator />
        <div className="p-4">
          <nav className="space-y-2">
            <Button variant="ghost" className="w-full justify-start">
              <Home className="mr-2 h-4 w-4" />
              Home
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <FileText className="mr-2 h-4 w-4" />
              Documents
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <User className="mr-2 h-4 w-4" />
              Profile
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </nav>
        </div>
      </Sidebar>
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold">Main Content</h1>
        <p className="mt-4">
          This is the main content area of the application.
        </p>
      </div>
    </div>
  ),
};

/**
 * Collapsible sidebar that can be toggled.
 */
export const Collapsible: Story = {
  render: function CollapsibleSidebar() {
    const [collapsed, setCollapsed] = useState(false);

    return (
      <div className="flex h-full">
        <Sidebar
          className={`border-r transition-all duration-300 ${collapsed ? "w-16" : "w-64"}`}
        >
          <div className="p-4 flex justify-between items-center">
            {!collapsed && <h2 className="text-lg font-semibold">Dashboard</h2>}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setCollapsed(!collapsed)}
              className={collapsed ? "mx-auto" : ""}
            >
              {collapsed ? (
                <Menu className="h-4 w-4" />
              ) : (
                <X className="h-4 w-4" />
              )}
            </Button>
          </div>
          <Separator />
          <div className="p-4">
            <nav className="space-y-2">
              <Button variant="ghost" className="w-full justify-start">
                <Home className="h-4 w-4" />
                {!collapsed && <span className="ml-2">Home</span>}
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <FileText className="h-4 w-4" />
                {!collapsed && <span className="ml-2">Documents</span>}
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <User className="h-4 w-4" />
                {!collapsed && <span className="ml-2">Profile</span>}
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Settings className="h-4 w-4" />
                {!collapsed && <span className="ml-2">Settings</span>}
              </Button>
            </nav>
          </div>
        </Sidebar>
        <div className="flex-1 p-8">
          <h1 className="text-2xl font-bold">Main Content</h1>
          <p className="mt-4">
            Click the button in the sidebar to collapse or expand it.
          </p>
        </div>
      </div>
    );
  },
};

/**
 * Sidebar with nested navigation groups.
 */
export const NestedNavigation: Story = {
  render: () => (
    <div className="flex h-full">
      <Sidebar className="border-r w-64">
        <div className="p-4">
          <h2 className="text-lg font-semibold">Dashboard</h2>
        </div>
        <Separator />
        <div className="p-4">
          <div className="space-y-4">
            <div>
              <h3 className="mb-2 text-sm font-medium text-muted-foreground">
                Main
              </h3>
              <nav className="space-y-1">
                <Button variant="ghost" className="w-full justify-start">
                  <Home className="mr-2 h-4 w-4" />
                  Home
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <BarChart className="mr-2 h-4 w-4" />
                  Analytics
                </Button>
              </nav>
            </div>
            <Separator />
            <div>
              <h3 className="mb-2 text-sm font-medium text-muted-foreground">
                Personal
              </h3>
              <nav className="space-y-1">
                <Button variant="ghost" className="w-full justify-start">
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Mail className="mr-2 h-4 w-4" />
                  Messages
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Calendar className="mr-2 h-4 w-4" />
                  Calendar
                </Button>
              </nav>
            </div>
            <Separator />
            <div>
              <h3 className="mb-2 text-sm font-medium text-muted-foreground">
                System
              </h3>
              <nav className="space-y-1">
                <Button variant="ghost" className="w-full justify-start">
                  <Bell className="mr-2 h-4 w-4" />
                  Notifications
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Button>
              </nav>
            </div>
          </div>
        </div>
      </Sidebar>
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold">Main Content</h1>
        <p className="mt-4">This sidebar has nested navigation groups.</p>
      </div>
    </div>
  ),
};

/**
 * Sidebar with user profile section.
 */
export const WithUserProfile: Story = {
  render: () => (
    <div className="flex h-full">
      <Sidebar className="border-r w-64 flex flex-col">
        <div className="p-4">
          <h2 className="text-lg font-semibold">Dashboard</h2>
        </div>
        <Separator />
        <div className="p-4 flex-1">
          <nav className="space-y-2">
            <Button variant="ghost" className="w-full justify-start">
              <Home className="mr-2 h-4 w-4" />
              Home
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <FileText className="mr-2 h-4 w-4" />
              Documents
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <User className="mr-2 h-4 w-4" />
              Profile
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </nav>
        </div>
        <Separator />
        <div className="p-4">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-muted-foreground">john@example.com</p>
            </div>
          </div>
        </div>
      </Sidebar>
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold">Main Content</h1>
        <p className="mt-4">
          This sidebar includes a user profile section at the bottom.
        </p>
      </div>
    </div>
  ),
};

/**
 * Mobile responsive sidebar.
 */
export const MobileResponsive: Story = {
  render: function MobileResponsiveSidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="h-full">
        {/* Mobile header */}
        <div className="md:hidden flex items-center border-b p-4">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)}>
            <Menu className="h-5 w-5" />
          </Button>
          <h1 className="ml-4 text-lg font-semibold">Dashboard</h1>
        </div>

        <div className="flex h-full">
          {/* Mobile overlay */}
          {isOpen && (
            <div
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
          )}

          {/* Sidebar */}
          <Sidebar
            className={`
              fixed inset-y-0 left-0 z-50 w-64 border-r bg-background
              transform transition-transform duration-300 ease-in-out
              md:relative md:translate-x-0
              ${isOpen ? "translate-x-0" : "-translate-x-full"}
            `}
          >
            <div className="p-4 flex justify-between items-center">
              <h2 className="text-lg font-semibold">Dashboard</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="md:hidden"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <Separator />
            <div className="p-4">
              <nav className="space-y-2">
                <Button variant="ghost" className="w-full justify-start">
                  <Home className="mr-2 h-4 w-4" />
                  Home
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <FileText className="mr-2 h-4 w-4" />
                  Documents
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Button>
              </nav>
            </div>
          </Sidebar>

          {/* Main content */}
          <div className="flex-1 p-8 md:p-8 pt-4">
            <h1 className="text-2xl font-bold hidden md:block">Main Content</h1>
            <p className="mt-4">
              This sidebar is responsive for mobile devices. Resize the window
              to see the effect.
            </p>
          </div>
        </div>
      </div>
    );
  },
};
