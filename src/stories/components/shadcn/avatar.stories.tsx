import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../components/shadcn/avatar";
import { ThemeProvider } from "../../../themes/shadcn";

type AvatarProps = React.ComponentProps<typeof Avatar>;

const meta = {
  title: "Components/Shadcn/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "stable", "version:2.3.0"],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default avatar with an image and fallback.
 */
export const Default: StoryObj<AvatarProps> = {
  args: {
    children: (
      <>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
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
        <AvatarFallback>JD</AvatarFallback>
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
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback className="text-lg">CN</AvatarFallback>
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
          JD
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
          src="https://github.com/shadcn.png"
          alt="@shadcn"
        />
        <AvatarFallback className="rounded-md">CN</AvatarFallback>
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
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar className="border-2 border-background">
          <AvatarImage src="https://github.com/diego3g.png" alt="@diego3g" />
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
