import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useWindowSize } from "../../hooks/useWindowSize";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useWindowSize` is a hook that tracks the dimensions of the browser window in real-time.
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
 * const Component = () => {
 *   const { width, height } = useWindowSize();
 *
 *   return (
 *     <div>
 *       Window size: {width}px × {height}px
 *     </div>
 *   );
 * };
 * ```
 *
 * ### Parameters
 * No parameters required.
 *
 * ### Returns
 * ```tsx
 * {
 *   width: number,  // Current window width in pixels
 *   height: number  // Current window height in pixels
 * }
 * ```
 *
 * ### Features
 * - Real-time window size tracking
 * - Debounced updates for performance
 * - SSR compatible
 * - Zero dependencies
 * - Type-safe
 *
 * ### Browser Compatibility
 * Compatible with all modern browsers that support:
 * - ResizeObserver
 * - window.innerWidth/Height
 *
 * ### Related Resources
 * - [Window Size](https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth)
 * - [ResizeObserver](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver)
 */

const meta = {
  title: "Hooks/Browser API/useWindowSize",
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

const WindowSizeExample = () => {
  const { width = 0, height = 0 } = useWindowSize();

  return (
    <div className="w-[500px]">
      <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            Window Size Monitor
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Watch how the dimensions update as you resize your browser window
          </p>
        </div>

        <div className="space-y-6">
          {/* Current Dimensions */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-lg text-white text-center">
            <div className="text-3xl font-bold mb-2">
              {width}px × {height}px
            </div>
            <div className="text-sm opacity-80">Current Window Size</div>
          </div>

          {/* Dimension Details */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded">
              <div className="text-sm text-slate-500 dark:text-slate-400">
                Width
              </div>
              <div className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
                {width}px
              </div>
            </div>
            <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded">
              <div className="text-sm text-slate-500 dark:text-slate-400">
                Height
              </div>
              <div className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
                {height}px
              </div>
            </div>
          </div>

          {/* Breakpoint Indicator */}
          <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded">
            <h4 className="font-medium text-slate-900 dark:text-slate-100 mb-2">
              Current Breakpoint
            </h4>
            <div className="space-y-2">
              <div
                className={`px-3 py-1 rounded ${width < 640 ? "bg-blue-500 text-white" : "bg-slate-200 dark:bg-slate-600 text-slate-600 dark:text-slate-300"}`}
              >
                sm (&lt; 640px)
              </div>
              <div
                className={`px-3 py-1 rounded ${width >= 640 && width < 768 ? "bg-blue-500 text-white" : "bg-slate-200 dark:bg-slate-600 text-slate-600 dark:text-slate-300"}`}
              >
                md (≥ 640px)
              </div>
              <div
                className={`px-3 py-1 rounded ${width >= 768 && width < 1024 ? "bg-blue-500 text-white" : "bg-slate-200 dark:bg-slate-600 text-slate-600 dark:text-slate-300"}`}
              >
                lg (≥ 768px)
              </div>
              <div
                className={`px-3 py-1 rounded ${width >= 1024 ? "bg-blue-500 text-white" : "bg-slate-200 dark:bg-slate-600 text-slate-600 dark:text-slate-300"}`}
              >
                xl (≥ 1024px)
              </div>
            </div>
          </div>

          {/* Common Use Cases */}
          <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded space-y-2">
            <h4 className="font-medium text-slate-900 dark:text-slate-100">
              Common Use Cases:
            </h4>
            <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-300 space-y-1">
              <li>Responsive layouts</li>
              <li>Conditional rendering</li>
              <li>Mobile/desktop detection</li>
              <li>Canvas resizing</li>
            </ul>
          </div>

          {/* Instructions */}
          <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
            <p className="text-sm text-blue-600 dark:text-blue-400">
              Try resizing your browser window to see the dimensions update in
              real-time! 📐
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Example: Story = {
  render: () => <WindowSizeExample />,
};
