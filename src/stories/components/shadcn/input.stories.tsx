import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../../../components/shadcn/input";
import { ThemeProvider } from "../../../themes/shadcn";
import { Label } from "../../../components/shadcn/label";
import { Button } from "../../../components/shadcn/button";
import { Search, Mail, Eye, EyeOff } from "lucide-react";

type InputProps = React.ComponentProps<typeof Input>;

const meta = {
  title: "Components/Shadcn/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "password", "email", "number", "search", "tel", "url"],
      description: "The type of the input",
    },
    disabled: {
      control: "boolean",
      description: "Whether the input is disabled",
    },
    placeholder: {
      control: "text",
      description: "The placeholder text",
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
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default input with placeholder.
 */
export const Default: StoryObj<InputProps> = {
  args: {
    placeholder: "Enter text here...",
  },
};

/**
 * Input with a label.
 */
export const WithLabel: StoryObj<InputProps> = {
  render: (args) => (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="Enter your email" {...args} />
    </div>
  ),
};

/**
 * Disabled input.
 */
export const Disabled: StoryObj<InputProps> = {
  args: {
    disabled: true,
    placeholder: "Disabled input",
    value: "You cannot edit this",
  },
};

/**
 * Input with an icon.
 */
export const WithIcon: StoryObj<InputProps> = {
  render: (args) => (
    <div className="relative">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input className="pl-8" type="search" placeholder="Search..." {...args} />
    </div>
  ),
};

/**
 * Input with a button.
 */
export const WithButton: StoryObj<InputProps> = {
  render: (args) => (
    <div className="flex w-full items-center space-x-2">
      <Input type="email" placeholder="Email" {...args} />
      <Button type="submit">Subscribe</Button>
    </div>
  ),
};

/**
 * Input with validation state.
 */
export const WithValidation: StoryObj<InputProps> = {
  render: () => (
    <div className="grid gap-4">
      <div className="grid gap-1.5">
        <Label htmlFor="valid-input" className="text-green-500">
          Valid input
        </Label>
        <Input
          id="valid-input"
          className="border-green-500 focus-visible:ring-green-500"
          placeholder="Valid input"
        />
        <p className="text-xs text-green-500">This input is valid.</p>
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="invalid-input" className="text-destructive">
          Invalid input
        </Label>
        <Input
          id="invalid-input"
          className="border-destructive focus-visible:ring-destructive"
          placeholder="Invalid input"
        />
        <p className="text-xs text-destructive">This input is invalid.</p>
      </div>
    </div>
  ),
};

/**
 * Password input with show/hide toggle.
 */
export const PasswordInput: StoryObj<InputProps> = {
  render: () => {
    const [showPassword, setShowPassword] = React.useState(false);

    return (
      <div className="relative">
        <Input
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-2 top-2.5 text-muted-foreground hover:text-foreground"
        >
          {showPassword ? (
            <EyeOff className="h-4 w-4" />
          ) : (
            <Eye className="h-4 w-4" />
          )}
        </button>
      </div>
    );
  },
};

/**
 * Input with different sizes.
 */
export const Sizes: StoryObj<InputProps> = {
  render: () => (
    <div className="grid gap-4">
      <Input className="h-8 text-sm" placeholder="Small input" />
      <Input placeholder="Default input" />
      <Input className="h-12 text-lg" placeholder="Large input" />
    </div>
  ),
};

/**
 * Input with form layout.
 */
export const FormLayout: StoryObj<InputProps> = {
  render: () => (
    <form className="grid gap-4">
      <div className="grid gap-1.5">
        <Label htmlFor="name">Name</Label>
        <Input id="name" placeholder="Enter your name" />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="email-form">Email</Label>
        <Input id="email-form" type="email" placeholder="Enter your email" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="grid gap-1.5">
          <Label htmlFor="city">City</Label>
          <Input id="city" placeholder="City" />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="zip">ZIP Code</Label>
          <Input id="zip" placeholder="ZIP Code" />
        </div>
      </div>
      <Button type="submit" className="w-full">
        Submit
      </Button>
    </form>
  ),
};
