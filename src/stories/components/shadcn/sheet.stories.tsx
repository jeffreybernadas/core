import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../../components/shadcn/sheet";
import { ThemeProvider } from "../../../themes/shadcn";
import { Button } from "../../../components/shadcn/button";
import { Input } from "../../../components/shadcn/input";
import { Label } from "../../../components/shadcn/label";
import { Separator } from "../../../components/shadcn/separator";

type SheetProps = React.ComponentProps<typeof Sheet>;

/**
 * Extends the Dialog component to display content that complements the main content of the screen.
 *
 * See the [Shadcn docs](https://ui.shadcn.com/docs/components/sheet) for more information.
 */
const meta = {
  title: "Components/Shadcn/Sheet",
  component: Sheet,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "stable", "version:2.3.0"],
  argTypes: {
    children: {
      control: false,
      description: "The content of the sheet",
      table: { type: { summary: "React.ReactNode" } },
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
} satisfies Meta<typeof Sheet>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default sheet with right side position.
 */
export const Default: StoryObj<SheetProps> = {
  args: {
    children: (
      <>
        <SheetTrigger asChild>
          <Button variant="outline">Open Sheet</Button>
        </SheetTrigger>
        <SheetContent className="p-5">
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" value="Pedro Duarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input id="username" value="@peduarte" className="col-span-3" />
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </>
    ),
  },
};

/**
 * Sheet with different positions.
 */
export const Positions: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-2">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Top</Button>
        </SheetTrigger>
        <SheetContent side="top" className="p-5">
          <SheetHeader>
            <SheetTitle>Top Sheet</SheetTitle>
            <SheetDescription>
              This sheet slides in from the top of the screen.
            </SheetDescription>
          </SheetHeader>
          <div className="py-4">
            <p>This is a sheet that appears from the top of the screen.</p>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button>Close</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Right</Button>
        </SheetTrigger>
        <SheetContent side="right" className="p-5">
          <SheetHeader>
            <SheetTitle>Right Sheet</SheetTitle>
            <SheetDescription>
              This sheet slides in from the right of the screen.
            </SheetDescription>
          </SheetHeader>
          <div className="py-4">
            <p>This is a sheet that appears from the right of the screen.</p>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button>Close</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Bottom</Button>
        </SheetTrigger>
        <SheetContent side="bottom" className="p-5">
          <SheetHeader>
            <SheetTitle>Bottom Sheet</SheetTitle>
            <SheetDescription>
              This sheet slides in from the bottom of the screen.
            </SheetDescription>
          </SheetHeader>
          <div className="py-4">
            <p>This is a sheet that appears from the bottom of the screen.</p>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button>Close</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Left</Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-5">
          <SheetHeader>
            <SheetTitle>Left Sheet</SheetTitle>
            <SheetDescription>
              This sheet slides in from the left of the screen.
            </SheetDescription>
          </SheetHeader>
          <div className="py-4">
            <p>This is a sheet that appears from the left of the screen.</p>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button>Close</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  ),
};

/**
 * Sheet with a form.
 */
export const WithForm: StoryObj<SheetProps> = {
  args: {
    children: (
      <>
        <SheetTrigger asChild>
          <Button>Create Account</Button>
        </SheetTrigger>
        <SheetContent className="sm:max-w-md p-5">
          <SheetHeader>
            <SheetTitle>Create account</SheetTitle>
            <SheetDescription>
              Fill in the information below to create your account.
            </SheetDescription>
          </SheetHeader>
          <form className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input id="confirm-password" type="password" />
            </div>
            <SheetFooter className="mt-4">
              <SheetClose asChild>
                <Button type="submit">Create Account</Button>
              </SheetClose>
            </SheetFooter>
          </form>
        </SheetContent>
      </>
    ),
  },
};

/**
 * Sheet with custom size.
 */
export const CustomSize: StoryObj<SheetProps> = {
  args: {
    children: (
      <>
        <SheetTrigger asChild>
          <Button variant="outline">Open Wide Sheet</Button>
        </SheetTrigger>
        <SheetContent className="sm:max-w-xl p-5">
          <SheetHeader>
            <SheetTitle>Wide Sheet</SheetTitle>
            <SheetDescription>
              This sheet has a custom width for larger content.
            </SheetDescription>
          </SheetHeader>
          <div className="py-6">
            <p className="mb-4">
              This sheet is wider than the default sheet, making it suitable for
              displaying more complex content or larger forms.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg border p-4">
                <h3 className="text-sm font-medium">Section One</h3>
                <p className="text-sm text-muted-foreground">
                  This is some content for the first section.
                </p>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="text-sm font-medium">Section Two</h3>
                <p className="text-sm text-muted-foreground">
                  This is some content for the second section.
                </p>
              </div>
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button>Close</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </>
    ),
  },
};

/**
 * Sheet with navigation menu.
 */
export const NavigationSheet: StoryObj<SheetProps> = {
  args: {
    children: (
      <>
        <SheetTrigger asChild>
          <Button variant="outline">Menu</Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-5">
          <SheetHeader>
            <SheetTitle>Navigation</SheetTitle>
          </SheetHeader>
          <div className="py-4">
            <nav className="grid gap-2">
              <Button variant="ghost" className="justify-start">
                Home
              </Button>
              <Button variant="ghost" className="justify-start">
                Products
              </Button>
              <Button variant="ghost" className="justify-start">
                About
              </Button>
              <Button variant="ghost" className="justify-start">
                Contact
              </Button>
              <Separator />
              <Button variant="ghost" className="justify-start">
                Settings
              </Button>
              <Button variant="ghost" className="justify-start">
                Help & Support
              </Button>
            </nav>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button variant="outline">Close</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </>
    ),
  },
};

/**
 * Sheet with nested sheets.
 */
export const NestedSheets: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open First Sheet</Button>
      </SheetTrigger>
      <SheetContent className="p-5">
        <SheetHeader>
          <SheetTitle>First Sheet</SheetTitle>
          <SheetDescription>
            This is the first sheet. You can open another sheet from here.
          </SheetDescription>
        </SheetHeader>
        <div className="py-6">
          <p className="mb-4">Click the button below to open a nested sheet.</p>
          <Sheet>
            <SheetTrigger asChild>
              <Button>Open Nested Sheet</Button>
            </SheetTrigger>
            <SheetContent className="p-5">
              <SheetHeader>
                <SheetTitle>Nested Sheet</SheetTitle>
                <SheetDescription>
                  This is a nested sheet that opens on top of the first sheet.
                </SheetDescription>
              </SheetHeader>
              <div className="py-6">
                <p>
                  You can stack multiple sheets on top of each other for complex
                  workflows.
                </p>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button>Close Nested Sheet</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Close First Sheet</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};
