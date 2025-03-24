import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../../components/shadcn/breadcrumb";
import { ThemeProvider } from "../../../themes/shadcn";
import { HomeIcon, FileIcon, FolderIcon, Slash } from "lucide-react";

type BreadcrumbProps = React.ComponentProps<typeof Breadcrumb>;

/**
 * Displays the path to the current resource using a hierarchy of links.
 */
const meta = {
  title: "Components/Shadcn/Breadcrumb",
  component: Breadcrumb,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "stable", "version:2.3.0"],
  argTypes: {
    children: {
      control: false,
      description: "The content to display inside the breadcrumb",
      table: { type: { summary: "React.ReactNode" } },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div className="w-full max-w-3xl">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Breadcrumb>;

export default meta;

/**
 * Default breadcrumb with text links.
 */
export const Default: StoryObj<BreadcrumbProps> = {
  args: {
    children: (
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/?path=/docs/components-core-aibutton--docs">
            Components
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    ),
  },
};

/**
 * Breadcrumb with icons.
 */
export const WithIcons: StoryObj<BreadcrumbProps> = {
  args: {
    children: (
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">
            <HomeIcon className="h-4 w-4 mr-2" />
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/?path=/docs/components-core-aibutton--docs">
            <FolderIcon className="h-4 w-4 mr-2" />
            Components
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>
            <FileIcon className="h-4 w-4 mr-2" />
            Breadcrumb
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    ),
  },
};

/**
 * Use a custom component as `children` for `<BreadcrumbSeparator />` to create a custom separator.
 */
export const CustomSeparator: StoryObj<BreadcrumbProps> = {
  args: {
    children: (
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <Slash className="h-4 w-4" />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="/?path=/docs/components-core-aibutton--docs">
            Components
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <Slash className="h-4 w-4" />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="/?path=/docs/components-core-aibutton--docs">
            Navigation
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <Slash className="h-4 w-4" />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="/?path=/docs/components-core-aibutton--docs">
            Breadcrumb
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <Slash className="h-4 w-4" />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>Example</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    ),
  },
};

/**
 * Responsive breadcrumb that collapses on smaller screens.
 */
export const Responsive: StoryObj<BreadcrumbProps> = {
  args: {
    className: "hidden md:flex",
    children: (
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/?path=/docs/components-core-aibutton--docs">
            Components
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    ),
  },
};
