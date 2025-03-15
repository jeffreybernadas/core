import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../components/shadcn/popover";
import { ThemeProvider } from "../../../themes/shadcn";
import { Button } from "../../../components/shadcn/button";
import { Input } from "../../../components/shadcn/input";
import { Label } from "../../../components/shadcn/label";
import { Settings, Calendar, Bell, X } from "lucide-react";

type PopoverProps = React.ComponentProps<typeof Popover>;

const meta = {
  title: "Components/Shadcn/Popover",
  component: Popover,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "stable", "version:2.3.0"],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div className="flex items-center justify-center p-10">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default popover with a button trigger and simple content.
 */
export const Default: StoryObj<PopoverProps> = {
  args: {
    children: (
      <>
        <PopoverTrigger asChild>
          <Button variant="outline">Open Popover</Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Dimensions</h4>
              <p className="text-sm text-muted-foreground">
                Set the dimensions for the layer.
              </p>
            </div>
            <div className="grid gap-2">
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="width">Width</Label>
                <Input
                  id="width"
                  defaultValue="100%"
                  className="col-span-2 h-8"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="maxWidth">Max. width</Label>
                <Input
                  id="maxWidth"
                  defaultValue="300px"
                  className="col-span-2 h-8"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="height">Height</Label>
                <Input
                  id="height"
                  defaultValue="25px"
                  className="col-span-2 h-8"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="maxHeight">Max. height</Label>
                <Input
                  id="maxHeight"
                  defaultValue="none"
                  className="col-span-2 h-8"
                />
              </div>
            </div>
          </div>
        </PopoverContent>
      </>
    ),
  },
};

/**
 * Popover with an icon button trigger.
 */
export const WithIconTrigger: StoryObj<PopoverProps> = {
  args: {
    children: (
      <>
        <PopoverTrigger asChild>
          <Button variant="outline" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="grid gap-4">
            <div className="flex items-center justify-between">
              <h4 className="font-medium leading-none">Settings</h4>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon" className="h-6 w-6">
                  <X className="h-4 w-4" />
                </Button>
              </PopoverTrigger>
            </div>
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <Label
                  htmlFor="notifications"
                  className="flex items-center gap-2"
                >
                  <Bell className="h-4 w-4" />
                  Notifications
                </Label>
                <Input
                  id="notifications"
                  type="checkbox"
                  className="h-4 w-8"
                  defaultChecked
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="theme" className="flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  Dark Mode
                </Label>
                <Input id="theme" type="checkbox" className="h-4 w-8" />
              </div>
            </div>
          </div>
        </PopoverContent>
      </>
    ),
  },
};

/**
 * Popover with a date picker.
 */
export const DatePicker: StoryObj<PopoverProps> = {
  args: {
    children: (
      <>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-[240px] justify-start text-left font-normal"
          >
            <Calendar className="mr-2 h-4 w-4" />
            <span>Pick a date</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <div className="p-4 text-center">
            <div className="text-sm font-medium">January 2023</div>
            <div className="mt-3 grid grid-cols-7 gap-2 text-xs">
              <div className="text-muted-foreground">Mo</div>
              <div className="text-muted-foreground">Tu</div>
              <div className="text-muted-foreground">We</div>
              <div className="text-muted-foreground">Th</div>
              <div className="text-muted-foreground">Fr</div>
              <div className="text-muted-foreground">Sa</div>
              <div className="text-muted-foreground">Su</div>
              {Array.from({ length: 31 }, (_, i) => (
                <div
                  key={i}
                  className="flex h-8 w-8 items-center justify-center rounded-md hover:bg-accent"
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
        </PopoverContent>
      </>
    ),
  },
};

/**
 * Popover with custom positioning.
 */
export const CustomPosition: StoryObj<PopoverProps> = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Top</Button>
        </PopoverTrigger>
        <PopoverContent side="top" className="w-40">
          <div className="text-center">
            <p>This popover appears on top</p>
          </div>
        </PopoverContent>
      </Popover>
      <div className="flex gap-4">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Left</Button>
          </PopoverTrigger>
          <PopoverContent side="left" className="w-40">
            <div className="text-center">
              <p>This popover appears on the left</p>
            </div>
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Right</Button>
          </PopoverTrigger>
          <PopoverContent side="right" className="w-40">
            <div className="text-center">
              <p>This popover appears on the right</p>
            </div>
          </PopoverContent>
        </Popover>
      </div>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Bottom</Button>
        </PopoverTrigger>
        <PopoverContent side="bottom" className="w-40">
          <div className="text-center">
            <p>This popover appears on the bottom</p>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  ),
};
