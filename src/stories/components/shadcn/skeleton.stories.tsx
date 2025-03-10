import React, { useState, useEffect } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "../../../components/shadcn/skeleton";
import { ThemeProvider } from "../../../themes/shadcn";
import { Button } from "../../../components/shadcn/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../components/shadcn/avatar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../../../components/shadcn/card";

type SkeletonProps = React.ComponentProps<typeof Skeleton>;

const meta = {
  title: "Components/Shadcn/Skeleton",
  component: Skeleton,
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
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default skeleton with different shapes.
 */
export const Default: StoryObj<SkeletonProps> = {
  render: () => (
    <div className="space-y-4">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
      <Skeleton className="h-10 w-full" />
      <Skeleton className="h-20 w-full" />
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    </div>
  ),
};

/**
 * Skeleton for a card layout.
 */
export const CardSkeleton: Story = {
  render: () => (
    <Card>
      <CardHeader className="pb-2">
        <Skeleton className="h-5 w-1/2" />
        <Skeleton className="h-4 w-4/5" />
      </CardHeader>
      <CardContent className="pb-2">
        <Skeleton className="h-20 w-full" />
        <div className="space-y-2 mt-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-4/5" />
        </div>
      </CardContent>
      <CardFooter>
        <Skeleton className="h-10 w-28" />
      </CardFooter>
    </Card>
  ),
};

/**
 * Skeleton for a user profile.
 */
export const ProfileSkeleton: Story = {
  render: () => (
    <div className="flex items-start space-x-4">
      <Skeleton className="h-16 w-16 rounded-full" />
      <div className="space-y-3 flex-1">
        <Skeleton className="h-5 w-1/3" />
        <Skeleton className="h-4 w-1/4" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
        <div className="flex space-x-2">
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-8 w-20" />
        </div>
      </div>
    </div>
  ),
};

/**
 * Skeleton for a table layout.
 */
export const TableSkeleton: Story = {
  render: () => (
    <div className="border rounded-md">
      <div className="border-b p-4">
        <div className="flex justify-between">
          <Skeleton className="h-5 w-24" />
          <Skeleton className="h-5 w-32" />
        </div>
      </div>
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="border-b p-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Skeleton className="h-10 w-10 rounded-full" />
              <div className="space-y-1">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-24" />
              </div>
            </div>
            <Skeleton className="h-8 w-16" />
          </div>
        </div>
      ))}
    </div>
  ),
};

/**
 * Skeleton with loading state that transitions to content.
 */
export const LoadingState: Story = {
  render: function LoadingStateExample() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 3000);
      return () => clearTimeout(timer);
    }, []);

    return (
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium">User Profile</h3>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsLoading(true)}
          >
            Reload
          </Button>
        </div>

        {isLoading ? (
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-4 w-[150px]" />
            </div>
          </div>
        ) : (
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-sm text-muted-foreground">john@example.com</p>
            </div>
          </div>
        )}

        {isLoading ? (
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">
            Frontend developer with a passion for creating beautiful and
            functional user interfaces. Experienced in React, TypeScript, and
            Tailwind CSS.
          </p>
        )}
      </div>
    );
  },
};

/**
 * Skeleton with custom styling.
 */
export const CustomStyling: Story = {
  render: () => (
    <div className="space-y-4">
      <h3 className="text-sm font-medium">Default</h3>
      <Skeleton className="h-8 w-full" />

      <h3 className="text-sm font-medium">Custom Color</h3>
      <Skeleton className="h-8 w-full bg-primary/20" />

      <h3 className="text-sm font-medium">Rounded</h3>
      <Skeleton className="h-8 w-full rounded-full" />

      <h3 className="text-sm font-medium">With Animation</h3>
      <Skeleton className="h-8 w-full animate-pulse" />

      <h3 className="text-sm font-medium">Gradient</h3>
      <div className="h-8 w-full rounded-md bg-gradient-to-r from-muted via-background to-muted animate-pulse" />
    </div>
  ),
};
