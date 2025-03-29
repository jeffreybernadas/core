import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../components/shadcn/avatar";
import { ThemeProvider } from "../../../themes/shadcn";

type AvatarProps = React.ComponentProps<typeof Avatar>;

/**
 * An image element with a fallback for representing the user.
 *
 * See the [Shadcn docs](https://ui.shadcn.com/docs/components/avatar) for more information.
 */
const meta = {
  title: "Components/Shadcn/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "stable", "version:2.3.0"],
  argTypes: {
    className: {
      control: "text",
      description: "Additional CSS classes for custom styling",
      type: "string",
    },
    children: {
      control: false,
      description: "The content to display within the avatar",
      table: {
        type: { summary: "React.ReactNode" },
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Avatar>;

export default meta;

/**
 * Default avatar with an image and fallback.
 */
export const Default: StoryObj<AvatarProps> = {
  args: {
    children: (
      <>
        <AvatarImage
          src="https://avatars.githubusercontent.com/u/49061484?v=4"
          alt="@jb"
        />
        <AvatarFallback>JB</AvatarFallback>
      </>
    ),
  },
};

/**
 * Avatar with a fallback when image fails to load.
 */
export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    children: (
      <>
        <AvatarImage src="https://invalid-image-url.png" alt="@user" />
        <AvatarFallback>JB</AvatarFallback>
      </>
    ),
  },
};

/**
 * Avatar with custom size.
 */
export const CustomSize: StoryObj<AvatarProps> = {
  args: {
    className: "h-16 w-16",
    children: (
      <>
        <AvatarImage
          src="https://avatars.githubusercontent.com/u/49061484?v=4"
          alt="@jb"
        />
        <AvatarFallback className="text-lg">JB</AvatarFallback>
      </>
    ),
  },
};

/**
 * Avatar with colored fallback.
 */
export const ColoredFallback: StoryObj<AvatarProps> = {
  args: {
    children: (
      <>
        <AvatarImage src="https://invalid-image-url.png" alt="@user" />
        <AvatarFallback className="bg-primary text-primary-foreground">
          JB
        </AvatarFallback>
      </>
    ),
  },
};

/**
 * Avatar with square shape.
 */
export const Square: StoryObj<AvatarProps> = {
  args: {
    className: "rounded-md",
    children: (
      <>
        <AvatarImage
          className="rounded-md"
          src="https://avatars.githubusercontent.com/u/49061484?v=4"
          alt="@jb"
        />
        <AvatarFallback className="rounded-md">JB</AvatarFallback>
      </>
    ),
  },
};

/**
 * Group of avatars.
 */
export const Group: StoryObj<AvatarProps> = {
  args: {
    children: (
      <div className="flex -space-x-4">
        <Avatar className="border-2 border-background">
          <AvatarImage
            src="https://avatars.githubusercontent.com/u/49061484?v=4"
            alt="@jb"
          />
          <AvatarFallback>JB</AvatarFallback>
        </Avatar>
        <Avatar className="border-2 border-background">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>D3</AvatarFallback>
        </Avatar>
        <Avatar className="border-2 border-background">
          <AvatarFallback className="bg-primary text-primary-foreground">
            +2
          </AvatarFallback>
        </Avatar>
      </div>
    ),
  },
};
