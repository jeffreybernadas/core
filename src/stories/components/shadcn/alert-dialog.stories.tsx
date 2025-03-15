import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../../components/shadcn/alert-dialog";
import { Button } from "../../../components/shadcn/button";
import { ThemeProvider } from "../../../themes/shadcn";

type AlertDialogProps = React.ComponentProps<typeof AlertDialog>;

const meta = {
  title: "Components/Shadcn/AlertDialog",
  component: AlertDialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "stable", "version:2.3.0"],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div className="w-full max-w-md">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof AlertDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default alert dialog with a trigger button, title, description, and action buttons.
 */
export const Default: StoryObj<AlertDialogProps> = {
  args: {
    children: (
      <>
        <AlertDialogTrigger asChild>
          <Button variant="outline">Delete Account</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </>
    ),
  },
};

/**
 * Alert dialog with destructive action button.
 */
export const Destructive: StoryObj<AlertDialogProps> = {
  args: {
    children: (
      <>
        <AlertDialogTrigger asChild>
          <Button variant="destructive">Delete File</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete File</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this file? This action cannot be
              undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </>
    ),
  },
};

/**
 * Alert dialog with custom content layout.
 */
export const CustomLayout: StoryObj<AlertDialogProps> = {
  args: {
    children: (
      <>
        <AlertDialogTrigger asChild>
          <Button>Show Custom Dialog</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <div className="grid gap-4 py-4">
            <AlertDialogTitle className="text-center">
              Confirm Action
            </AlertDialogTitle>
            <div className="flex justify-center">
              <img
                src="https://via.placeholder.com/100"
                alt="Placeholder"
                className="rounded-full"
              />
            </div>
            <AlertDialogDescription className="text-center">
              This is a custom layout for the alert dialog content.
            </AlertDialogDescription>
          </div>
          <div className="flex flex-col gap-2">
            <AlertDialogAction>Confirm</AlertDialogAction>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
          </div>
        </AlertDialogContent>
      </>
    ),
  },
};
