import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useThrottle } from "../../hooks";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useThrottle` is a hook that throttles state updates to improve performance.
 * It's useful for handling frequent updates like scroll events, window resizing, or real-time input.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useThrottle } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useThrottle } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = () => {
 *   const [searchTerm, setSearchTerm] = useState('');
 *   const throttledSearchTerm = useThrottle(searchTerm, 500);
 *
 *   // API call would only happen every 500ms
 *   React.useEffect(() => {
 *     if (throttledSearchTerm) {
 *       searchAPI(throttledSearchTerm);
 *     }
 *   }, [throttledSearchTerm]);
 *
 *   return (
 *     <div>
 *       <input
 *         type="text"
 *         value={searchTerm}
 *         onChange={(e) => setSearchTerm(e.target.value)}
 *         placeholder="Search..."
 *       />
 *       <div>Searching for: {throttledSearchTerm}</div>
 *     </div>
 *   );
 * };
 * ```
 *
 * ### Advanced Usage
 * ```tsx
 * const WindowSizeComponent = () => {
 *   const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });
 *   const throttledSize = useThrottle(size, 200);
 *
 *   React.useEffect(() => {
 *     const handleResize = () => {
 *       setSize({ width: window.innerWidth, height: window.innerHeight });
 *     };
 *
 *     window.addEventListener('resize', handleResize);
 *     return () => window.removeEventListener('resize', handleResize);
 *   }, []);
 *
 *   return (
 *     <div>
 *       Throttled Window Size: {throttledSize.width} x {throttledSize.height}
 *     </div>
 *   );
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * useThrottle<T>(
 *   value: T,        // The value to throttle
 *   ms?: number = 200 // Throttle delay in milliseconds
 * ): T
 * ```
 *
 * ### Returns
 * - T: The throttled value, updated at most once per specified time interval
 *
 * ### Browser Compatibility
 * Uses `setTimeout` which is supported in all modern browsers.
 *
 * ### Related Resources
 * - [MDN: setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)
 */
const meta = {
  title: "Hooks/Utility/useThrottle",
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

export const ThrottledInput: Story = {
  render: () => {
    const [value, setValue] = useState("");
    const throttledValue = useThrottle(value, 500);

    return (
      <div className="space-y-6 max-w-lg">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">
            Throttled Input
          </h3>
          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                Type something:
              </label>
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type here..."
              />
            </div>
            <div className="space-y-2">
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Immediate value: {value}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Throttled value (500ms): {throttledValue}
              </div>
            </div>

            {/* Instructions */}
            <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
              <p className="text-sm text-blue-600 dark:text-blue-400">
                Type quickly in the input and notice how the throttled value
                updates at a controlled rate! ⌛
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  },
};
