import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "../../../components/shadcn/carousel";
import { ThemeProvider } from "../../../themes/shadcn";
import { Card, CardContent } from "../../../components/shadcn/card";
import { Button } from "../../../components/shadcn/button";

type CarouselProps = React.ComponentProps<typeof Carousel>;

const meta = {
  title: "Components/Shadcn/Carousel",
  component: Carousel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "stable", "version:2.3.0"],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div className="w-full max-w-3xl">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default carousel with simple items.
 */
export const Default: StoryObj<CarouselProps> = {
  args: {
    className: "w-full",
    children: (
      <>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </>
    ),
  },
};

/**
 * Carousel with images.
 */
export const WithImages: StoryObj<CarouselProps> = {
  args: {
    className: "w-full",
    children: (
      <>
        <CarouselContent>
          {[
            "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=1600&auto=format&fit=crop",
          ].map((src, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-video items-center justify-center p-0 overflow-hidden">
                    <img
                      src={src}
                      alt={`Landscape ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </>
    ),
  },
};

/**
 * Carousel with multiple items per view.
 */
export const MultipleItemsPerView: StoryObj<CarouselProps> = {
  args: {
    opts: {
      align: "start",
    },
    className: "w-full",
    children: (
      <>
        <CarouselContent className="-ml-1">
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </>
    ),
  },
};

/**
 * Carousel with API controls.
 */
export const WithApiControls: StoryObj<CarouselProps> = {
  render: () => {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
      if (!api) {
        return;
      }

      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap() + 1);

      api.on("select", () => {
        setCurrent(api.selectedScrollSnap() + 1);
      });
    }, [api]);

    return (
      <div className="space-y-4">
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center p-6">
                      <span className="text-4xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            Slide {current} of {count}
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => api?.scrollTo(0)}
              disabled={current === 1}
            >
              First
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => api?.scrollTo(count - 1)}
              disabled={current === count}
            >
              Last
            </Button>
          </div>
        </div>
      </div>
    );
  },
};

/**
 * Carousel with autoplay functionality.
 */
export const Autoplay: Story = {
  args: {
    opts: {
      loop: true,
      dragFree: true,
    },
    className: "w-full",
  },
  render: (args) => {
    const [api, setApi] = React.useState<CarouselApi>();

    React.useEffect(() => {
      if (!api) return;

      const interval = setInterval(() => {
        api.scrollNext();
      }, 2000);

      return () => clearInterval(interval);
    }, [api]);

    return (
      <Carousel {...args} setApi={setApi}>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <div className="flex aspect-square items-center justify-center rounded-md bg-muted p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    );
  },
};
