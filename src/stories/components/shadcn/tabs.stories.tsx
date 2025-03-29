import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/shadcn/tabs";
import { ThemeProvider } from "../../../themes/shadcn";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/shadcn/card";
import { Button } from "../../../components/shadcn/button";
import { Input } from "../../../components/shadcn/input";
import { Label } from "../../../components/shadcn/label";

type TabsProps = React.ComponentProps<typeof Tabs>;

/**
 * A set of layered sections of content—known as tab panels—that are displayed one at a time.
 *
 * See the [Shadcn docs](https://ui.shadcn.com/docs/components/tabs) for more information.
 */
const meta = {
  title: "Components/Shadcn/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "stable", "version:2.3.0"],
  argTypes: {
    children: {
      control: false,
      description: "The content of the tabs",
      table: { type: { summary: "React.ReactNode" } },
    },
    defaultValue: {
      control: "text",
      description: "The value of the default tab",
      table: { type: { summary: "string" } },
    },
    className: {
      control: "text",
      description: "The class name of the tabs",
      table: { type: { summary: "string" } },
    },
  },
  decorators: [
    (Story, { args }) => (
      <ThemeProvider>
        <div className="w-full max-w-3xl">
          <Story {...args} />
        </div>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Tabs>;

export default meta;

/**
 * Default tabs with simple content.
 */
export const Default: StoryObj<TabsProps> = {
  args: {
    defaultValue: "account",
    className: "w-full",
    children: (
      <>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when you're done.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="Pedro Duarte" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Username</Label>
                <Input id="username" defaultValue="@peduarte" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Current password</Label>
                <Input id="current" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">New password</Label>
                <Input id="new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </>
    ),
  },
};

/**
 * Tabs with custom styling.
 */
export const CustomStyling: StoryObj<TabsProps> = {
  args: {
    defaultValue: "tab1",
    className: "w-full",
    children: (
      <>
        <TabsList className="bg-blue-50 dark:bg-blue-950 p-1 rounded-xl">
          <TabsTrigger
            value="tab1"
            className="rounded-lg data-[state=active]:bg-blue-500 data-[state=active]:text-white"
          >
            Tab 1
          </TabsTrigger>
          <TabsTrigger
            value="tab2"
            className="rounded-lg data-[state=active]:bg-blue-500 data-[state=active]:text-white"
          >
            Tab 2
          </TabsTrigger>
          <TabsTrigger
            value="tab3"
            className="rounded-lg data-[state=active]:bg-blue-500 data-[state=active]:text-white"
          >
            Tab 3
          </TabsTrigger>
        </TabsList>
        <TabsContent value="tab1" className="mt-4 p-4 border rounded-lg">
          <h3 className="text-lg font-medium">Tab 1 Content</h3>
          <p className="text-muted-foreground">
            This is the content for tab 1.
          </p>
        </TabsContent>
        <TabsContent value="tab2" className="mt-4 p-4 border rounded-lg">
          <h3 className="text-lg font-medium">Tab 2 Content</h3>
          <p className="text-muted-foreground">
            This is the content for tab 2.
          </p>
        </TabsContent>
        <TabsContent value="tab3" className="mt-4 p-4 border rounded-lg">
          <h3 className="text-lg font-medium">Tab 3 Content</h3>
          <p className="text-muted-foreground">
            This is the content for tab 3.
          </p>
        </TabsContent>
      </>
    ),
  },
};

/**
 * Tabs with disabled items.
 */
export const WithDisabledItems: StoryObj<TabsProps> = {
  args: {
    defaultValue: "active",
    className: "w-full",
    children: (
      <>
        <TabsList>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="cancelled" disabled>
            Cancelled
          </TabsTrigger>
        </TabsList>
        <TabsContent value="active" className="p-4">
          <p>Active tasks content</p>
        </TabsContent>
        <TabsContent value="pending" className="p-4">
          <p>Pending tasks content</p>
        </TabsContent>
        <TabsContent value="completed" className="p-4">
          <p>Completed tasks content</p>
        </TabsContent>
        <TabsContent value="cancelled" className="p-4">
          <p>Cancelled tasks content</p>
        </TabsContent>
      </>
    ),
  },
};
