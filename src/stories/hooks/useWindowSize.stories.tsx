import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useWindowSize } from "../../hooks/useWindowSize";

const meta = {
  title: "Hooks/useWindowSize",
  parameters: {
    layout: "centered",
    docs: {
      canvas: {
        sourceState: "none",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj;

/**
 * A hook that returns the current window dimensions and updates when the window is resized.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useWindowSize } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useWindowSize } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const MyComponent = () => {
 *   const { width, height } = useWindowSize();
 *
 *   return (
 *     <div>
 *       Window size: {width}px x {height}px
 *     </div>
 *   );
 * };
 * ```
 *
 * ### Example with Responsive Behavior
 * ```tsx
 * const ResponsiveComponent = () => {
 *   const { width } = useWindowSize();
 *   const isMobile = width < 768;
 *
 *   return (
 *     <div>
 *       {isMobile ? (
 *         <MobileLayout />
 *       ) : (
 *         <DesktopLayout />
 *       )}
 *     </div>
 *   );
 * };
 * ```
 *
 * ### Returns
 * ```tsx
 * {
 *   width: number;  // Current window width in pixels
 *   height: number; // Current window height in pixels
 * }
 * ```
 *
 * ### Browser Compatibility
 * This hook uses the following Web APIs:
 * - [Window.innerWidth](https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth)
 * - [Window.innerHeight](https://developer.mozilla.org/en-US/docs/Web/API/Window/innerHeight)
 * - [Window: resize event](https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event)
 *
 * Supported in all modern browsers. For IE support, consider using a polyfill.
 */
export const Example: Story = {
  render: () => {
    const { width, height } = useWindowSize();

    return (
      <div className="space-y-6 max-w-lg">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">
            Current Window Size
          </h3>
          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <p className="text-slate-700 dark:text-slate-300">
              Width: {width}px
            </p>
            <p className="text-slate-700 dark:text-slate-300">
              Height: {height}px
            </p>
          </div>
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
            Try resizing your browser window!
          </p>
        </div>
      </div>
    );
  },
};
