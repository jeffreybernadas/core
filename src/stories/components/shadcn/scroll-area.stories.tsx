import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ScrollArea } from "../../../components/shadcn/scroll-area";
import { ThemeProvider } from "../../../themes/shadcn";
import { Separator } from "../../../components/shadcn/separator";

type ScrollAreaProps = React.ComponentProps<typeof ScrollArea>;

const meta = {
  title: "Components/Shadcn/ScrollArea",
  component: ScrollArea,
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
} satisfies Meta<typeof ScrollArea>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default scroll area with a list of items.
 */
export const Default: StoryObj<ScrollAreaProps> = {
  args: {
    className: "h-72 w-48 rounded-md border",
    children: (
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {Array.from({ length: 50 }).map((_, i) => (
          <React.Fragment key={i}>
            <div className="text-sm">Tag {i + 1}</div>
            <Separator className="my-2" />
          </React.Fragment>
        ))}
      </div>
    ),
  },
};

/**
 * Scroll area with a long paragraph of text.
 */
export const LongText: StoryObj<ScrollAreaProps> = {
  args: {
    className: "h-72 w-80 rounded-md border",
    children: (
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Lorem Ipsum</h4>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, vitae
          aliquam nisl nunc vitae nisl. Nullam euismod, nisl eget aliquam
          ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl.
          Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc,
          vitae aliquam nisl nunc vitae nisl. Nullam euismod, nisl eget aliquam
          ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl.
          Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc,
          vitae aliquam nisl nunc vitae nisl. Nullam euismod, nisl eget aliquam
          ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl.
          Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc,
          vitae aliquam nisl nunc vitae nisl. Nullam euismod, nisl eget aliquam
          ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl.
          Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc,
          vitae aliquam nisl nunc vitae nisl. Nullam euismod, nisl eget aliquam
          ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl.
          Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc,
          vitae aliquam nisl nunc vitae nisl. Nullam euismod, nisl eget aliquam
          ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl.
          Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc,
          vitae aliquam nisl nunc vitae nisl. Nullam euismod, nisl eget aliquam
          ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl.
        </p>
      </div>
    ),
  },
};

/**
 * Scroll area with a grid of items.
 */
export const GridItems: StoryObj<ScrollAreaProps> = {
  args: {
    className: "h-72 w-80 rounded-md border",
    children: (
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Grid Items</h4>
        <div className="grid grid-cols-3 gap-4">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="flex h-20 w-20 items-center justify-center rounded-md border bg-muted"
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>
    ),
  },
};

/**
 * Horizontal scroll area.
 */
export const HorizontalScroll: StoryObj<ScrollAreaProps> = {
  args: {
    className: "h-32 w-80 rounded-md border",
    children: (
      <div className="flex p-4">
        <div className="flex gap-4">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="h-20 w-20 shrink-0 rounded-md bg-muted flex items-center justify-center"
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  render: (args) => <ScrollArea {...args}>{args.children}</ScrollArea>,
};

/**
 * Scroll area with custom styling.
 */
export const CustomStyling: StoryObj<ScrollAreaProps> = {
  args: {
    className: "h-72 w-80 rounded-md border bg-muted",
    children: (
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">
          Custom Scrollbar
        </h4>
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className="mt-2">
            <div className="text-sm">Item {i + 1}</div>
          </div>
        ))}
      </div>
    ),
  },
  render: (args) => (
    <ScrollArea {...args} scrollHideDelay={0}>
      {args.children}
    </ScrollArea>
  ),
};

/**
 * Scroll area with nested content.
 */
export const NestedContent: StoryObj<ScrollAreaProps> = {
  args: {
    className: "h-72 w-80 rounded-md border",
    children: (
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">
          Nested Content
        </h4>
        <div className="space-y-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="rounded-md border p-4">
              <h5 className="mb-2 text-sm font-medium">Section {i + 1}</h5>
              <p className="text-sm text-muted-foreground">
                This is a nested section with some content. You can scroll
                through all the sections.
              </p>
              <div className="mt-2">
                {Array.from({ length: 3 }).map((_, j) => (
                  <div key={j} className="mt-2 rounded-md bg-muted p-2 text-sm">
                    Nested item {j + 1}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
};
