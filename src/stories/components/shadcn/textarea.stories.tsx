import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "../../../components/shadcn/textarea";
import { ThemeProvider } from "../../../themes/shadcn";
import { Label } from "../../../components/shadcn/label";
import { Button } from "../../../components/shadcn/button";

type TextareaProps = React.ComponentProps<typeof Textarea>;

const meta = {
  title: "Components/Shadcn/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "stable", "version:2.3.0"],
  argTypes: {
    disabled: {
      control: "boolean",
      description: "Whether the textarea is disabled",
    },
    placeholder: {
      control: "text",
      description: "The placeholder text",
    },
    rows: {
      control: { type: "number", min: 1, max: 20 },
      description: "The number of rows",
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
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default textarea with placeholder.
 */
export const Default: StoryObj<TextareaProps> = {
  args: {
    placeholder: "Type your message here.",
  },
};

/**
 * Textarea with a label.
 */
export const WithLabel: StoryObj<TextareaProps> = {
  render: (args) => (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message">Your message</Label>
      <Textarea id="message" placeholder="Type your message here." {...args} />
    </div>
  ),
};

/**
 * Disabled textarea.
 */
export const Disabled: StoryObj<TextareaProps> = {
  args: {
    disabled: true,
    placeholder: "You cannot type here...",
    value: "This textarea is disabled",
  },
};

/**
 * Textarea with different number of rows.
 */
export const CustomRows: StoryObj<TextareaProps> = {
  args: {
    rows: 10,
    placeholder: "This textarea has 10 rows...",
  },
};

/**
 * Textarea with validation state.
 */
export const WithValidation: StoryObj<TextareaProps> = {
  render: () => (
    <div className="grid gap-4">
      <div className="grid gap-1.5">
        <Label htmlFor="valid-textarea" className="text-green-500">
          Valid input
        </Label>
        <Textarea
          id="valid-textarea"
          className="border-green-500 focus-visible:ring-green-500"
          placeholder="Valid textarea"
          defaultValue="This is a valid message."
        />
        <p className="text-xs text-green-500">This input is valid.</p>
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="invalid-textarea" className="text-destructive">
          Invalid input
        </Label>
        <Textarea
          id="invalid-textarea"
          className="border-destructive focus-visible:ring-destructive"
          placeholder="Invalid textarea"
          defaultValue="This message is too short."
        />
        <p className="text-xs text-destructive">
          Message must be at least 20 characters.
        </p>
      </div>
    </div>
  ),
};

/**
 * Textarea with character count.
 */
export const WithCharacterCount: StoryObj<TextareaProps> = {
  render: () => {
    const [value, setValue] = React.useState("");
    const maxLength = 100;

    return (
      <div className="grid w-full gap-1.5">
        <Label htmlFor="character-count">Your message</Label>
        <Textarea
          id="character-count"
          placeholder="Type your message here."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          maxLength={maxLength}
        />
        <div className="text-xs text-muted-foreground text-right">
          {value.length}/{maxLength} characters
        </div>
      </div>
    );
  },
};

/**
 * Textarea in a form.
 */
export const InForm: StoryObj<TextareaProps> = {
  render: () => (
    <form className="grid gap-4">
      <div className="grid gap-1.5">
        <Label htmlFor="name">Name</Label>
        <input
          id="name"
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Your name"
        />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="email">Email</Label>
        <input
          id="email"
          type="email"
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Your email"
        />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="message-form">Message</Label>
        <Textarea
          id="message-form"
          placeholder="Type your message here."
          className="min-h-[120px]"
        />
      </div>
      <Button type="submit">Send message</Button>
    </form>
  ),
};
