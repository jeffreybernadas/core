import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ScrollArea, ScrollBar } from "../../../components/shadcn/scroll-area";
import { ThemeProvider } from "../../../themes/shadcn";
import { Separator } from "../../../components/shadcn/separator";

type ScrollAreaProps = React.ComponentProps<typeof ScrollArea>;

interface Artwork {
  artist: string;
  art: string;
}

const works: Artwork[] = [
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Tom Byrom",
    art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
  },
];

/**
 * Augments native scroll functionality for custom, cross-browser styling.
 *
 * See the [Shadcn docs](https://ui.shadcn.com/docs/components/scroll-area) for more information.
 */
const meta = {
  title: "Components/Shadcn/ScrollArea",
  component: ScrollArea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "stable", "version:2.3.0"],
  argTypes: {
    children: {
      control: false,
      description: "The content of the scroll area",
      table: { type: { summary: "React.ReactNode" } },
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
      table: { type: { summary: "string" } },
    },
  },
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
    className: "h-[450px] w-80 rounded-md border",
    children: (
      <>
        <div className="flex w-max space-x-4 p-4">
          {works.map((artwork) => (
            <figure key={artwork.artist} className="shrink-0">
              <div className="overflow-hidden rounded-md">
                <img
                  src={artwork.art}
                  alt={`${artwork.artist}`}
                  className="aspect-[3/4] h-fit w-fit object-cover"
                  width={300}
                  height={400}
                />
              </div>
              <figcaption className="pt-2 text-xs text-muted-foreground">
                Photo by{" "}
                <span className="font-semibold text-foreground">
                  {artwork.artist}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </>
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
