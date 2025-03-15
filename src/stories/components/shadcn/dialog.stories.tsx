import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../components/shadcn/dialog";
import { Button } from "../../../components/shadcn/button";
import { Input } from "../../../components/shadcn/input";
import { Label } from "../../../components/shadcn/label";
import { ThemeProvider } from "../../../themes/shadcn";

type DialogProps = React.ComponentProps<typeof Dialog>;

const meta = {
  title: "Components/Shadcn/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "stable", "version:2.3.0"],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div className="flex items-center justify-center">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default dialog with a trigger button, title, description, and close button.
 */
export const Default: StoryObj<DialogProps> = {
  args: {
    children: (
      <>
        <DialogTrigger asChild>
          <Button variant="outline">Open Dialog</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                defaultValue="Pedro Duarte"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input
                id="username"
                defaultValue="@peduarte"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </>
    ),
  },
};

/**
 * Dialog with a form.
 */
export const FormDialog: StoryObj<DialogProps> = {
  args: {
    children: (
      <>
        <DialogTrigger asChild>
          <Button>Create Account</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create account</DialogTitle>
            <DialogDescription>
              Fill in the information below to create your account.
            </DialogDescription>
          </DialogHeader>
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
          </form>
          <DialogFooter>
            <Button type="submit">Create Account</Button>
          </DialogFooter>
        </DialogContent>
      </>
    ),
  },
};

/**
 * Dialog with destructive action.
 */
export const DestructiveDialog: StoryObj<DialogProps> = {
  args: {
    children: (
      <>
        <DialogTrigger asChild>
          <Button variant="destructive">Delete Account</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Delete Account</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete your account? This action cannot
              be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex flex-col sm:flex-row sm:justify-between sm:space-x-2">
            <DialogTrigger asChild>
              <Button variant="outline">Cancel</Button>
            </DialogTrigger>
            <Button variant="destructive">Delete Account</Button>
          </DialogFooter>
        </DialogContent>
      </>
    ),
  },
};

/**
 * Dialog with custom content.
 */
export const CustomContent: StoryObj<DialogProps> = {
  args: {
    children: (
      <>
        <DialogTrigger asChild>
          <Button variant="outline">Show Details</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[525px]">
          <DialogHeader>
            <DialogTitle>Product Details</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-1/3">
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
                alt="Product"
                className="w-full h-auto rounded-md"
              />
            </div>
            <div className="md:w-2/3 space-y-4">
              <h3 className="text-lg font-semibold">Premium Watch</h3>
              <p className="text-sm text-muted-foreground">
                This premium watch features a stainless steel case, leather
                strap, and precision movement. Water-resistant up to 50 meters.
              </p>
              <div className="flex items-center">
                <span className="text-lg font-bold mr-2">$299.99</span>
                <span className="text-sm text-muted-foreground line-through">
                  $399.99
                </span>
              </div>
            </div>
          </div>
          <DialogFooter className="mt-4">
            <Button>Add to Cart</Button>
          </DialogFooter>
        </DialogContent>
      </>
    ),
  },
};
