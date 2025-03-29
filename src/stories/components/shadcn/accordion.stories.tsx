import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within, expect, screen } from "@storybook/test";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/shadcn/accordion";
import { ThemeProvider } from "../../../themes/shadcn";
type AccordionProps = React.ComponentProps<typeof Accordion>;

/**
 * A vertically stacked set of interactive headings that each reveal a section of content.
 *
 * See the [Shadcn docs](https://ui.shadcn.com/docs/components/accordion) for more information.
 */
const meta = {
  title: "Components/Shadcn/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "stable", "version:2.3.0"],
  argTypes: {
    type: {
      control: "select",
      options: ["single", "multiple"],
      description:
        "Whether the accordion allows single or multiple items to be open",
    },
    collapsible: {
      control: "boolean",
      description: "Whether the open item can be closed",
    },
    children: {
      control: false,
      description: "The content to display inside the accordion",
      table: {
        type: { summary: "React.ReactNode" },
      },
    },
    className: {
      control: "text",
      description: "Additional CSS classes to apply",
      type: "string",
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div className="w-[400px]">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<AccordionProps>;

export default meta;
type Story = StoryObj<AccordionProps>;

/**
 * Default single-item accordion that allows only one section to be open at a time.
 */
export const Default: Story = {
  args: {
    type: "single",
    collapsible: true,
    children: (
      <>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that match your theme.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </>
    ),
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const collapsibleOne = canvas.getByRole("button", {
      name: "Is it accessible?",
    });
    const collapsibleTwo = canvas.getByRole("button", {
      name: "Is it styled?",
    });
    const collapsibleThree = canvas.getByRole("button", {
      name: "Is it animated?",
    });
    await userEvent.click(collapsibleOne);
    const contentOne = canvas.getByText(
      "Yes. It adheres to the WAI-ARIA design pattern.",
    );
    await expect(contentOne).toBeInTheDocument();
    await userEvent.click(collapsibleTwo);
    const contentTwo = canvas.getByText(
      "Yes. It comes with default styles that match your theme.",
    );
    await expect(contentTwo).toBeInTheDocument();
    await userEvent.click(collapsibleThree);
    const contentThree = canvas.getByText(
      "Yes. It's animated by default, but you can disable it if you prefer.",
    );
    await expect(contentThree).toBeInTheDocument();
  },
};

/**
 * Multiple-item accordion that allows multiple sections to be open simultaneously.
 */
export const Multiple: Story = {
  args: {
    type: "multiple",
    children: (
      <>
        <AccordionItem value="item-1">
          <AccordionTrigger>First Section</AccordionTrigger>
          <AccordionContent>
            This can be open along with other sections.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Second Section</AccordionTrigger>
          <AccordionContent>
            Try opening this while the first section is open.
          </AccordionContent>
        </AccordionItem>
      </>
    ),
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const collapsibleOne = canvas.getByRole("button", {
      name: "First Section",
    });
    const collapsibleTwo = canvas.getByRole("button", {
      name: "Second Section",
    });
    await userEvent.click(collapsibleOne);
    const contentOne = canvas.getByText(
      "This can be open along with other sections.",
    );
    await expect(contentOne).toBeInTheDocument();
    await userEvent.click(collapsibleTwo);
    const contentTwo = canvas.getByText(
      "Try opening this while the first section is open.",
    );
    await expect(contentTwo).toBeInTheDocument();
    await expect(contentOne).toBeInTheDocument();
  },
};

/**
 * Non-collapsible accordion where at least one item must remain open.
 */
export const NonCollapsible: Story = {
  args: {
    type: "single",
    collapsible: false,
    children: (
      <>
        <AccordionItem value="item-1">
          <AccordionTrigger>Always One Open</AccordionTrigger>
          <AccordionContent>
            This item cannot be closed if it's the only one open.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Try Closing All</AccordionTrigger>
          <AccordionContent>
            You'll notice you can't close the last open item.
          </AccordionContent>
        </AccordionItem>
      </>
    ),
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const collapsibleOne = canvas.getByRole("button", {
      name: "Always One Open",
    });
    const collapsibleTwo = canvas.getByRole("button", {
      name: "Try Closing All",
    });
    await userEvent.click(collapsibleOne);
    const contentOne = canvas.getByText(
      "This item cannot be closed if it's the only one open.",
    );
    await expect(contentOne).toBeInTheDocument();
    await userEvent.click(collapsibleTwo);
    const contentTwo = canvas.getByText(
      "You'll notice you can't close the last open item.",
    );
    await expect(contentTwo).toBeInTheDocument();
    await expect(collapsibleOne.ariaExpanded).toBe("false");
  },
};
