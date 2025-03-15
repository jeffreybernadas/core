import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useWindowSize } from "../../hooks/useWindowSize";

interface HookDemoProps {
  children: React.ReactNode;
}

const HookDemo = ({ children }: HookDemoProps) => (
  <div className="space-y-4">{children}</div>
);

const WindowSizeDemo = () => {
  const { width, height } = useWindowSize();
  return (
    <>
      <p>Current window dimensions:</p>
      <ul className="list-disc list-inside space-y-2">
        <li>
          Width: <strong>{width}px</strong>
        </li>
        <li>
          Height: <strong>{height}px</strong>
        </li>
      </ul>
      <p className="text-sm text-muted-foreground">
        Resize your browser window to see the values change.
      </p>
    </>
  );
};

const meta = {
  title: "Hooks/useWindowSize",
  component: HookDemo,
  tags: ["autodocs"],
} satisfies Meta<typeof HookDemo>;

export default meta;
type Story = StoryObj<typeof HookDemo>;

export const Example: Story = {
  name: "useWindowSize()",
  parameters: {
    docs: {
      description: {
        story:
          "A hook that returns the current window dimensions (width and height).",
      },
    },
    controls: { exclude: ["children"] },
  },
  args: {
    children: <WindowSizeDemo />,
  },
};
