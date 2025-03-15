import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useIsMobile } from "../../hooks/useIsMobile";

interface HookDemoProps {
  children: React.ReactNode;
}

const HookDemo = ({ children }: HookDemoProps) => (
  <div className="space-y-4">{children}</div>
);

const IsMobileDemo = () => {
  const isMobile = useIsMobile();
  return (
    <>
      <p>
        Current viewport is: <strong>{isMobile ? "Mobile" : "Desktop"}</strong>
      </p>
      <p className="text-sm text-muted-foreground">
        Resize your browser window to see the value change. Mobile breakpoint is
        768px.
      </p>
    </>
  );
};

const meta = {
  title: "Hooks/useIsMobile",
  component: HookDemo,
  tags: ["autodocs"],
} satisfies Meta<typeof HookDemo>;

export default meta;
type Story = StoryObj<typeof HookDemo>;

export const Example: Story = {
  name: "useIsMobile()",
  parameters: {
    docs: {
      description: {
        story:
          "A hook that returns true if the current viewport width is less than 768px.",
      },
    },
    controls: { exclude: ["children"] },
  },
  args: {
    children: <IsMobileDemo />,
  },
};
