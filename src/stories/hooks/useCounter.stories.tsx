import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useCounter } from "../../hooks";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useCounter` is a hook that manages a numeric counter with increment, decrement, and reset functionality.
 * It supports min/max boundaries and provides a rich API for counter manipulation.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useCounter } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useCounter } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = () => {
 *   const [count, { inc, dec, reset }] = useCounter(0);
 *
 *   return (
 *     <div>
 *       <p>Count: {count}</p>
 *       <button onClick={() => inc()}>+1</button>
 *       <button onClick={() => dec()}>-1</button>
 *       <button onClick={() => reset()}>Reset</button>
 *     </div>
 *   );
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * useCounter(
 *   initialValue?: number | (() => number) = 0, // Initial counter value
 *   max?: number | null = null, // Maximum allowed value
 *   min?: number | null = null // Minimum allowed value
 * ): [
 *   number, // Current counter value
 *   {
 *     inc: (delta?: number) => void, // Increment by delta (default: 1)
 *     dec: (delta?: number) => void, // Decrement by delta (default: 1)
 *     get: () => number, // Get current value
 *     set: (value: number | ((prev: number) => number)) => void, // Set to value
 *     reset: (value?: number | ((prev: number) => number)) => void // Reset to value
 *   }
 * ]
 * ```
 *
 * ### Browser Compatibility
 * Uses standard JavaScript features, supported in all modern browsers.
 */

const meta = {
  title: "Hooks/State Management/useCounter",
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
type Story = StoryObj;

export const Example: Story = {
  render: () => {
    // Basic counter
    const [count, { inc, dec, reset }] = useCounter(0);

    // Bounded counter (0-10)
    const [boundedCount, boundedActions] = useCounter(5, 10, 0);

    // Custom step counter
    const [customCount, customActions] = useCounter(100);

    // Score counter with custom increment
    const [score, scoreActions] = useCounter(0);

    return (
      <div className="space-y-6 max-w-lg">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">
            Counter Examples
          </h3>
          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <div className="space-y-6">
              {/* Basic Counter */}
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Basic Counter
                </h4>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => dec()}
                    className="w-10 h-10 flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors"
                  >
                    -
                  </button>
                  <div className="w-20 text-center text-2xl font-semibold text-slate-900 dark:text-slate-100">
                    {count}
                  </div>
                  <button
                    onClick={() => inc()}
                    className="w-10 h-10 flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors"
                  >
                    +
                  </button>
                  <button
                    onClick={() => reset()}
                    className="px-3 py-2 bg-slate-500 hover:bg-slate-600 text-white text-sm rounded-md transition-colors ml-2"
                  >
                    Reset
                  </button>
                </div>
              </div>

              {/* Bounded Counter */}
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Bounded Counter (0-10)
                </h4>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => boundedActions.dec()}
                    className="w-10 h-10 flex items-center justify-center bg-green-500 hover:bg-green-600 text-white rounded-md transition-colors"
                  >
                    -
                  </button>
                  <div className="w-20 text-center text-2xl font-semibold text-slate-900 dark:text-slate-100">
                    {boundedCount}
                  </div>
                  <button
                    onClick={() => boundedActions.inc()}
                    className="w-10 h-10 flex items-center justify-center bg-green-500 hover:bg-green-600 text-white rounded-md transition-colors"
                  >
                    +
                  </button>
                  <div className="text-sm text-slate-500 dark:text-slate-400 ml-2">
                    Min: 0, Max: 10
                  </div>
                </div>
              </div>

              {/* Custom Step Counter */}
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Custom Step Counter
                </h4>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => customActions.dec(10)}
                    className="px-3 py-2 bg-purple-500 hover:bg-purple-600 text-white text-sm rounded-md transition-colors"
                  >
                    -10
                  </button>
                  <div className="w-24 text-center text-2xl font-semibold text-slate-900 dark:text-slate-100">
                    {customCount}
                  </div>
                  <button
                    onClick={() => customActions.inc(10)}
                    className="px-3 py-2 bg-purple-500 hover:bg-purple-600 text-white text-sm rounded-md transition-colors"
                  >
                    +10
                  </button>
                </div>
              </div>

              {/* Score Counter */}
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Score Counter
                </h4>
                <div className="space-y-2">
                  <div className="text-center text-3xl font-bold text-slate-900 dark:text-slate-100">
                    {score}
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      onClick={() => scoreActions.inc(1)}
                      className="px-3 py-2 bg-green-500 hover:bg-green-600 text-white text-sm rounded-md transition-colors"
                    >
                      +1 Point
                    </button>
                    <button
                      onClick={() => scoreActions.inc(2)}
                      className="px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded-md transition-colors"
                    >
                      +2 Points
                    </button>
                    <button
                      onClick={() => scoreActions.inc(3)}
                      className="px-3 py-2 bg-purple-500 hover:bg-purple-600 text-white text-sm rounded-md transition-colors"
                    >
                      +3 Points
                    </button>
                  </div>
                  <button
                    onClick={() => scoreActions.reset()}
                    className="w-full px-3 py-2 bg-red-500 hover:bg-red-600 text-white text-sm rounded-md transition-colors"
                  >
                    Reset Score
                  </button>
                </div>
              </div>

              {/* Instructions */}
              <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
                <p className="text-sm text-blue-600 dark:text-blue-400">
                  Try different counter variations and see how they handle
                  boundaries and custom steps! 🔢
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
};
