import React, { useRef } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import useHoverDirty from "../../hooks/useHoverDirty";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useHoverDirty` is a hook that tracks whether a DOM element is being hovered over using native mouseenter/mouseleave events.
 * It's called "dirty" because it uses native events instead of React's synthetic events, making it useful for cases where you need direct DOM event handling.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useHoverDirty } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useHoverDirty } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = () => {
 *   const elementRef = useRef(null);
 *   const isHovered = useHoverDirty(elementRef);
 *
 *   return (
 *     <div ref={elementRef}>
 *       {isHovered ? 'Hovered!' : 'Hover me!'}
 *     </div>
 *   );
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * useHoverDirty(
 *   ref: RefObject<Element>,  // Reference to the DOM element to track
 *   enabled?: boolean = true  // Optional flag to enable/disable the hover tracking
 * ): boolean
 * ```
 *
 * ### Returns
 * ```tsx
 * boolean // True when the element is being hovered, false otherwise
 * ```
 *
 * ### Browser Compatibility
 * Uses standard DOM events (mouseover, mouseout).
 * Supported in all modern browsers.
 *
 * ### Related Resources
 * - [MDN: mouseover event](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event)
 * - [MDN: mouseout event](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseout_event)
 */

const meta = {
  title: "Hooks/Event & Interaction/useHoverDirty",
  parameters: {
    layout: "centered",
    docs: {
      canvas: {
        sourceState: "none",
      },
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const HoverExample = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isEnabled, setIsEnabled] = React.useState(true);

  const isHovered = useHoverDirty(
    elementRef as React.RefObject<Element>,
    isEnabled,
  );
  const isButtonHovered = useHoverDirty(
    buttonRef as React.RefObject<Element>,
    isEnabled,
  );

  return (
    <div className="space-y-8">
      {/* Interactive Element */}
      <div
        ref={elementRef}
        className={`
          w-64 h-32 rounded-lg transition-all duration-300 cursor-pointer
          flex items-center justify-center text-center p-4
          ${
            isHovered
              ? "bg-blue-500 text-white shadow-lg scale-105"
              : "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100"
          }
        `}
      >
        <div>
          <p className="font-medium">
            {isHovered ? "I'm being hovered! 🎉" : "Hover over me!"}
          </p>
          <p className="text-sm mt-2 opacity-80">
            {isHovered ? "Try moving your mouse away" : "See what happens"}
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="space-y-4">
        <button
          ref={buttonRef}
          onClick={() => setIsEnabled(!isEnabled)}
          className={`
            px-4 py-2 rounded transition-all duration-200
            ${isEnabled ? "bg-blue-600" : "bg-blue-100"}
            ${isEnabled ? "text-white" : "bg-opacity-50 text-slate-500"}
          `}
        >
          Hover Tracking: {isEnabled ? "Enabled" : "Disabled"}
        </button>

        {/* State Display */}
        <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg space-y-2">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Main Element Hover State:
            <span
              className={`ml-2 font-medium ${isHovered ? "text-green-500" : "text-red-500"}`}
            >
              {isHovered ? "true" : "false"}
            </span>
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Button Hover State:
            <span
              className={`ml-2 font-medium ${isButtonHovered ? "text-green-500" : "text-red-500"}`}
            >
              {isButtonHovered ? "true" : "false"}
            </span>
          </p>
        </div>
      </div>

      {/* Instructions */}
      <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
        <p className="text-sm text-blue-600 dark:text-blue-400">
          Try hovering over the box and button! Toggle the hover tracking to see
          how the hook can be enabled/disabled 🖱️
        </p>
      </div>
    </div>
  );
};

export const Example: Story = {
  render: () => <HoverExample />,
};
