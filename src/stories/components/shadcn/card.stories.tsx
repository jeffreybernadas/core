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
import {
  Button,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Label,
  Input,
} from "../../../components/shadcn";
import { ThemeProvider } from "../../../themes/shadcn";
import { Badge } from "../../../components/shadcn/badge";

type CardProps = React.ComponentProps<typeof Card>;

/**
 * Displays a card with header, content, and footer.
 *
 * See the [Shadcn docs](https://ui.shadcn.com/docs/components/card) for more information.
 */
const meta = {
  title: "Components/Shadcn/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "stable", "version:2.3.0"],
  argTypes: {
    children: {
      control: false,
      description: "The content to display inside the card",
      table: {
        type: { summary: "React.ReactNode" },
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div className="w-[500px] max-w-md">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Card>;

export default meta;

/**
 * Default card with header, content, and footer.
 */
export const Default: StoryObj<CardProps> = {
  args: {
    children: (
      <>
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Name of your project" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Framework</Label>
                <Select>
                  <SelectTrigger id="framework" className="w-[400px]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="next">Next.js</SelectItem>
                    <SelectItem value="sveltekit">SvelteKit</SelectItem>
                    <SelectItem value="astro">Astro</SelectItem>
                    <SelectItem value="nuxt">Nuxt.js</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Deploy</Button>
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
