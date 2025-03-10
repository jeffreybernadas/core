import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/shadcn/card";
import { Button } from "../../../components/shadcn/button";
import { ThemeProvider } from "../../../themes/shadcn";
import { Badge } from "../../../components/shadcn/badge";

type CardProps = React.ComponentProps<typeof Card>;

const meta = {
  title: "Components/Shadcn/Card",
  component: Card,
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
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default card with header, content, and footer.
 */
export const Default: StoryObj<CardProps> = {
  args: {
    children: (
      <>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <Button>Action</Button>
        </CardFooter>
      </>
    ),
  },
};

/**
 * Card with just content.
 */
export const ContentOnly: StoryObj<CardProps> = {
  args: {
    children: (
      <CardContent className="pt-6">
        <p>This card has only content without a header or footer.</p>
      </CardContent>
    ),
  },
};

/**
 * Card with multiple actions in the footer.
 */
export const MultipleActions: StoryObj<CardProps> = {
  args: {
    children: (
      <>
        <CardHeader>
          <CardTitle>Multiple Actions</CardTitle>
          <CardDescription>A card with multiple action buttons</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This card has multiple actions in the footer.</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Submit</Button>
        </CardFooter>
      </>
    ),
  },
};

/**
 * Card with a badge in the header.
 */
export const WithBadge: StoryObj<CardProps> = {
  args: {
    children: (
      <>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div className="space-y-1">
            <CardTitle>Card with Badge</CardTitle>
            <CardDescription>
              This card has a badge in the header
            </CardDescription>
          </div>
          <Badge>New</Badge>
        </CardHeader>
        <CardContent>
          <p>Card content with a badge in the header.</p>
        </CardContent>
        <CardFooter>
          <Button>Action</Button>
        </CardFooter>
      </>
    ),
  },
};

/**
 * Card with an image.
 */
export const WithImage: StoryObj<CardProps> = {
  args: {
    children: (
      <>
        <div className="aspect-video w-full overflow-hidden rounded-t-lg">
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
            alt="Product"
            className="h-full w-full object-cover"
          />
        </div>
        <CardHeader>
          <CardTitle>Product Name</CardTitle>
          <CardDescription>Product description goes here</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            This is a product card with an image at the top.
          </p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <p className="text-lg font-bold">$99.99</p>
          <Button>Add to Cart</Button>
        </CardFooter>
      </>
    ),
  },
};

/**
 * Card with custom styling.
 */
export const CustomStyling: StoryObj<CardProps> = {
  args: {
    className: "border-primary shadow-md",
    children: (
      <>
        <CardHeader className="bg-primary/10">
          <CardTitle className="text-primary">Custom Styled Card</CardTitle>
          <CardDescription>This card has custom styling</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <p>This card has custom border, shadow, and header background.</p>
        </CardContent>
        <CardFooter className="bg-muted/50">
          <Button variant="outline">Action</Button>
        </CardFooter>
      </>
    ),
  },
};
