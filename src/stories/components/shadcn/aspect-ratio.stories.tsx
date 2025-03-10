import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { AspectRatio } from "../../../components/shadcn/aspect-ratio";
import { ThemeProvider } from "../../../themes/shadcn";

type AspectRatioProps = React.ComponentProps<typeof AspectRatio>;

const meta = {
  title: "Components/Shadcn/AspectRatio",
  component: AspectRatio,
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
} satisfies Meta<typeof AspectRatio>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default aspect ratio of 16:9 with an image.
 */
export const Default: StoryObj<AspectRatioProps> = {
  args: {
    ratio: 16 / 9,
    className: "bg-muted rounded-md overflow-hidden",
    children: (
      <img
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        alt="Landscape"
        className="object-cover w-full h-full"
      />
    ),
  },
};

/**
 * Different aspect ratios with images.
 */
export const DifferentRatios: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">1:1 (Square)</h3>
        <AspectRatio
          ratio={1 / 1}
          className="bg-muted rounded-md overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
            alt="Landscape"
            className="object-cover w-full h-full"
          />
        </AspectRatio>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">16:9 (Widescreen)</h3>
        <AspectRatio
          ratio={16 / 9}
          className="bg-muted rounded-md overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
            alt="Landscape"
            className="object-cover w-full h-full"
          />
        </AspectRatio>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">4:3 (Standard)</h3>
        <AspectRatio
          ratio={4 / 3}
          className="bg-muted rounded-md overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
            alt="Landscape"
            className="object-cover w-full h-full"
          />
        </AspectRatio>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">2:3 (Portrait)</h3>
        <AspectRatio
          ratio={2 / 3}
          className="bg-muted rounded-md overflow-hidden max-w-[200px] mx-auto"
        >
          <img
            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
            alt="Landscape"
            className="object-cover w-full h-full"
          />
        </AspectRatio>
      </div>
    </div>
  ),
};

/**
 * Aspect ratio with different content types.
 */
export const DifferentContent: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Image</h3>
        <AspectRatio
          ratio={16 / 9}
          className="bg-muted rounded-md overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
            alt="Landscape"
            className="object-cover w-full h-full"
          />
        </AspectRatio>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Video</h3>
        <AspectRatio
          ratio={16 / 9}
          className="bg-muted rounded-md overflow-hidden"
        >
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </AspectRatio>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Map</h3>
        <AspectRatio
          ratio={16 / 9}
          className="bg-muted rounded-md overflow-hidden"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317718.69319292053!2d-0.3817765050863085!3d51.528307984912544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1647216017241!5m2!1sen!2sus"
            title="Google Maps"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </AspectRatio>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Custom Content</h3>
        <AspectRatio
          ratio={16 / 9}
          className="bg-muted rounded-md overflow-hidden"
        >
          <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 text-white">
            <div className="text-center">
              <h3 className="text-2xl font-bold">Custom Content</h3>
              <p>This is a custom content block with a fixed aspect ratio.</p>
            </div>
          </div>
        </AspectRatio>
      </div>
    </div>
  ),
};

/**
 * Aspect ratio with card layout.
 */
export const CardLayout: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="rounded-lg border overflow-hidden">
          <AspectRatio ratio={16 / 9}>
            <img
              src={`https://picsum.photos/seed/${i}/800/450`}
              alt={`Random image ${i}`}
              className="object-cover w-full h-full"
            />
          </AspectRatio>
          <div className="p-4">
            <h3 className="font-medium">Card Title {i}</h3>
            <p className="text-sm text-muted-foreground mt-1">
              This card uses an aspect ratio for the image to maintain
              consistency across different content.
            </p>
          </div>
        </div>
      ))}
    </div>
  ),
};

/**
 * Aspect ratio with responsive behavior.
 */
export const Responsive: Story = {
  render: () => (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        Resize the window to see how the aspect ratio maintains its proportions
        while the container width changes.
      </p>
      <AspectRatio
        ratio={16 / 9}
        className="bg-muted rounded-md overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Landscape"
          className="object-cover w-full h-full"
        />
      </AspectRatio>
    </div>
  ),
};
