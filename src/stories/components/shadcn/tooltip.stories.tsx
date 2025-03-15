import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../../components/shadcn/tooltip";
import { ThemeProvider } from "../../../themes/shadcn";
import { Button } from "../../../components/shadcn/button";
import { PlusCircle, Info, HelpCircle, Settings } from "lucide-react";

type TooltipProps = React.ComponentProps<typeof Tooltip>;

const meta = {
  title: "Components/Shadcn/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "stable", "version:2.3.0"],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <TooltipProvider>
          <Story />
        </TooltipProvider>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default tooltip with a button trigger.
 */
export const Default: StoryObj<TooltipProps> = {
  args: {
    children: (
      <>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover Me</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </>
    ),
  },
};

/**
 * Tooltip with an icon button trigger.
 */
export const WithIconButton: StoryObj<TooltipProps> = {
  args: {
    children: (
      <>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <PlusCircle className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add new item</p>
        </TooltipContent>
      </>
    ),
  },
};

/**
 * Tooltip with custom positioning.
 */
export const CustomPosition: StoryObj<TooltipProps> = {
  args: {
    children: (
      <div className="flex flex-col gap-4 items-center">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Top</Button>
          </TooltipTrigger>
          <TooltipContent side="top">
            <p>This tooltip appears on top</p>
          </TooltipContent>
        </Tooltip>
        <div className="flex gap-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Left</Button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>This tooltip appears on the left</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Right</Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>This tooltip appears on the right</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Bottom</Button>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p>This tooltip appears on the bottom</p>
          </TooltipContent>
        </Tooltip>
      </div>
    ),
  },
};

/**
 * Tooltip with rich content.
 */
export const RichContent: StoryObj<TooltipProps> = {
  args: {
    children: (
      <>
        <TooltipTrigger asChild>
          <Button variant="outline">
            <Info className="h-4 w-4 mr-2" />
            Information
          </Button>
        </TooltipTrigger>
        <TooltipContent className="max-w-xs">
          <div className="space-y-2">
            <h4 className="font-medium">Important Information</h4>
            <p className="text-sm text-muted-foreground">
              This action will permanently delete the selected items. This
              action cannot be undone.
            </p>
          </div>
        </TooltipContent>
      </>
    ),
  },
};

/**
 * Tooltip with a delay.
 */
export const WithDelay: StoryObj<TooltipProps> = {
  args: {
    delayDuration: 1000,
    children: (
      <>
        <TooltipTrigger asChild>
          <Button variant="outline">Delayed Tooltip</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>This tooltip appears after 1 second</p>
        </TooltipContent>
      </>
    ),
  },
};

/**
 * Multiple tooltips in a group.
 */
export const TooltipGroup: StoryObj<TooltipProps> = {
  args: {
    children: (
      <div className="flex gap-2">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="icon">
              <HelpCircle className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Help</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="icon">
              <Settings className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Settings</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="icon">
              <PlusCircle className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add</p>
          </TooltipContent>
        </Tooltip>
      </div>
    ),
  },
};
