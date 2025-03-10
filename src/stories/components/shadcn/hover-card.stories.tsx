import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../../../components/shadcn/hover-card";
import { ThemeProvider } from "../../../themes/shadcn";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../components/shadcn/avatar";
import { Button } from "../../../components/shadcn/button";
import { CalendarDays } from "lucide-react";

type HoverCardProps = React.ComponentProps<typeof HoverCard>;

const meta = {
  title: "Components/Shadcn/HoverCard",
  component: HoverCard,
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
} satisfies Meta<typeof HoverCard>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default hover card with user profile information.
 */
export const Default: StoryObj<HoverCardProps> = {
  args: {
    children: (
      <>
        <HoverCardTrigger asChild>
          <Button variant="link" className="text-blue-500">
            @nextjs
          </Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex justify-between space-x-4">
            <Avatar>
              <AvatarImage src="https://github.com/vercel.png" />
              <AvatarFallback>VC</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">@nextjs</h4>
              <p className="text-sm">
                The React Framework – created and maintained by @vercel.
              </p>
              <div className="flex items-center pt-2">
                <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                <span className="text-xs text-muted-foreground">
                  Joined December 2021
                </span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </>
    ),
  },
};

/**
 * Hover card with product information.
 */
export const ProductCard: StoryObj<HoverCardProps> = {
  args: {
    children: (
      <>
        <HoverCardTrigger asChild>
          <Button variant="link" className="text-blue-500">
            iPhone 15 Pro
          </Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex flex-col space-y-2">
            <img
              src="https://images.unsplash.com/photo-1695048133142-1a20484bce71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="iPhone 15 Pro"
              className="h-32 w-full object-cover rounded-md"
            />
            <h4 className="text-sm font-semibold">iPhone 15 Pro</h4>
            <p className="text-xs text-muted-foreground">
              The ultimate iPhone. Titanium. A17 Pro chip. Action button. 48MP
              camera.
            </p>
            <div className="flex justify-between items-center pt-2">
              <span className="font-bold">$999</span>
              <Button size="sm">View Details</Button>
            </div>
          </div>
        </HoverCardContent>
      </>
    ),
  },
};

/**
 * Hover card with custom positioning.
 */
export const CustomPosition: StoryObj<HoverCardProps> = {
  args: {
    openDelay: 200,
    closeDelay: 300,
    children: (
      <>
        <HoverCardTrigger asChild>
          <Button variant="outline">Hover Me (Top)</Button>
        </HoverCardTrigger>
        <HoverCardContent side="top" className="w-64">
          <div className="flex flex-col space-y-2">
            <h4 className="text-sm font-semibold">Custom Position</h4>
            <p className="text-xs text-muted-foreground">
              This hover card appears on top of the trigger element.
            </p>
          </div>
        </HoverCardContent>
      </>
    ),
  },
};

/**
 * Hover card with image gallery.
 */
export const ImageGallery: StoryObj<HoverCardProps> = {
  args: {
    children: (
      <>
        <HoverCardTrigger asChild>
          <Button variant="ghost" className="p-0 h-auto">
            <img
              src="https://images.unsplash.com/photo-1682687982501-1e58ab814714?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="Thumbnail"
              className="h-16 w-16 object-cover rounded-md"
            />
          </Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex flex-col space-y-2">
            <img
              src="https://images.unsplash.com/photo-1682687982501-1e58ab814714?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="Full size"
              className="w-full h-40 object-cover rounded-md"
            />
            <h4 className="text-sm font-semibold">Mountain Landscape</h4>
            <p className="text-xs text-muted-foreground">
              Beautiful mountain landscape with a lake and forest.
            </p>
          </div>
        </HoverCardContent>
      </>
    ),
  },
};

/**
 * Hover card with interactive content.
 */
export const InteractiveContent: StoryObj<HoverCardProps> = {
  args: {
    children: (
      <>
        <HoverCardTrigger asChild>
          <Button variant="outline">Interactive Card</Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex flex-col space-y-4">
            <h4 className="text-sm font-semibold">Interactive Content</h4>
            <p className="text-xs text-muted-foreground">
              This hover card contains interactive elements.
            </p>
            <div className="flex space-x-2">
              <Button size="sm" variant="default">
                Follow
              </Button>
              <Button size="sm" variant="outline">
                Message
              </Button>
              <Button size="sm" variant="secondary">
                Share
              </Button>
            </div>
          </div>
        </HoverCardContent>
      </>
    ),
  },
};
