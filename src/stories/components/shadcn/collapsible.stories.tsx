import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../../components/shadcn/collapsible";
import { ThemeProvider } from "../../../themes/shadcn";
import { Button } from "../../../components/shadcn/button";
import { ChevronsUpDown, Plus, Minus, ChevronUp } from "lucide-react";

type CollapsibleProps = React.ComponentProps<typeof Collapsible>;

/**
 * An interactive component which expands/collapses a panel.
 *
 * See the [Shadcn docs](https://ui.shadcn.com/docs/components/collapsible) for more information.
 */
const meta = {
  title: "Components/Shadcn/Collapsible",
  component: Collapsible,
  parameters: { layout: "centered" },
  tags: ["autodocs", "stable", "version:2.3.0"],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div className="w-full max-w-md">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default collapsible with a trigger and content.
 */
export const Default: StoryObj<CollapsibleProps> = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-full space-y-2"
      >
        <div className="flex items-center justify-between space-x-4 px-4">
          <h4 className="text-sm font-semibold">
            What is a collapsible component?
          </h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-9 p-0">
              <ChevronsUpDown className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="space-y-2">
          <div className="rounded-md border px-4 py-3 text-sm">
            A collapsible is a component that can be opened and closed. It's
            useful for hiding content that is not immediately relevant to the
            user.
          </div>
        </CollapsibleContent>
      </Collapsible>
    );
  },
};

/**
 * Collapsible with a custom trigger.
 */
export const CustomTrigger: StoryObj<CollapsibleProps> = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-full space-y-2"
      >
        <div className="flex items-center justify-between space-x-4">
          <h4 className="text-sm font-semibold">Expandable Section</h4>
          <CollapsibleTrigger asChild>
            <Button variant="outline" size="sm">
              {isOpen ? (
                <>
                  <Minus className="h-4 w-4 mr-2" />
                  Hide
                </>
              ) : (
                <>
                  <Plus className="h-4 w-4 mr-2" />
                  Show
                </>
              )}
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="space-y-2">
          <div className="rounded-md border px-4 py-3 text-sm">
            <p>This content can be shown or hidden.</p>
            <p className="mt-2">It's useful for FAQs, details, and more.</p>
          </div>
        </CollapsibleContent>
      </Collapsible>
    );
  },
};

/**
 * Multiple collapsibles in an accordion-like pattern.
 */
export const MultipleCollapsibles: StoryObj<CollapsibleProps> = {
  render: () => {
    const [openItems, setOpenItems] = React.useState<Record<string, boolean>>({
      item1: false,
      item2: false,
      item3: false,
    });

    const toggleItem = (item: string) => {
      setOpenItems((prev) => ({ ...prev, [item]: !prev[item] }));
    };

    return (
      <div className="space-y-4">
        {[
          {
            id: "item1",
            title: "Section 1",
            content: "Content for section 1 goes here.",
          },
          {
            id: "item2",
            title: "Section 2",
            content: "Content for section 2 goes here.",
          },
          {
            id: "item3",
            title: "Section 3",
            content: "Content for section 3 goes here.",
          },
        ].map((item) => (
          <Collapsible
            key={item.id}
            open={openItems[item.id]}
            onOpenChange={() => toggleItem(item.id)}
            className="w-full border rounded-md"
          >
            <div className="flex items-center justify-between p-4">
              <h4 className="text-sm font-medium">{item.title}</h4>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm" className="w-9 p-0">
                  <ChevronUp className="h-4 w-4" />
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent>
              <div className="border-t px-4 py-3 text-sm">{item.content}</div>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    );
  },
};

/**
 * Collapsible with animation.
 */
export const WithAnimation: StoryObj<CollapsibleProps> = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-full space-y-2"
      >
        <div className="flex items-center justify-between space-x-4 px-4">
          <h4 className="text-sm font-semibold">Animated Collapsible</h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm">
              {isOpen ? "Hide" : "Show"}
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden">
          <div className="rounded-md border px-4 py-3 text-sm">
            <p>This collapsible has a custom animation.</p>
            <p className="mt-2">The content slides up and down smoothly.</p>
          </div>
        </CollapsibleContent>
      </Collapsible>
    );
  },
};

/**
 * Nested collapsibles.
 */
export const NestedCollapsibles: StoryObj<CollapsibleProps> = {
  render: () => {
    const [isOuterOpen, setIsOuterOpen] = React.useState(false);
    const [isInnerOpen, setIsInnerOpen] = React.useState(false);

    return (
      <Collapsible
        open={isOuterOpen}
        onOpenChange={setIsOuterOpen}
        className="w-full space-y-2"
      >
        <div className="flex items-center justify-between space-x-4 px-4">
          <h4 className="text-sm font-semibold">Outer Collapsible</h4>
          <CollapsibleTrigger asChild>
            <Button variant="outline" size="sm">
              {isOuterOpen ? "Close" : "Open"}
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="space-y-2">
          <div className="rounded-md border px-4 py-3 text-sm">
            <p>This is the outer collapsible content.</p>

            <Collapsible
              open={isInnerOpen}
              onOpenChange={setIsInnerOpen}
              className="mt-4 space-y-2"
            >
              <div className="flex items-center justify-between space-x-4">
                <h5 className="text-sm font-medium">Inner Collapsible</h5>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    {isInnerOpen ? (
                      <Minus className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </Button>
                </CollapsibleTrigger>
              </div>
              <CollapsibleContent className="space-y-2">
                <div className="rounded-md bg-muted px-4 py-3 text-sm">
                  <p>This is the inner collapsible content.</p>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </CollapsibleContent>
      </Collapsible>
    );
  },
};
