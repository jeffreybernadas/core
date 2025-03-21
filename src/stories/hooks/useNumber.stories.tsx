import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import useNumber from "../../hooks/useNumber";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useNumber` is a hook that provides a stateful number value with increment, decrement, and reset capabilities.
 * It's an alias for `useCounter` and supports min/max bounds and custom step values.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useNumber } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useNumber } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Counter = () => {
 *   const [count, { inc, dec, reset }] = useNumber(0, 10, -10);
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
 * useNumber(
 *   initialValue?: number = 0, // Initial value
 *   max?: number | null = null, // Maximum allowed value
 *   min?: number | null = null // Minimum allowed value
 * ): [
 *   number, // Current value
 *   {
 *     inc: (delta?: number) => void, // Increment by delta (default: 1)
 *     dec: (delta?: number) => void, // Decrement by delta (default: 1)
 *     get: () => number, // Get current value
 *     set: (value: number | ((prev: number) => number)) => void, // Set value
 *     reset: (value?: number) => void // Reset to initial or specified value
 *   }
 * ]
 * ```
 *
 * ### Returns
 * ```tsx
 * [
 *   number, // Current value
 *   CounterActions // Object containing counter control functions
 * ]
 * ```
 *
 * ### Browser Compatibility
 * Uses standard JavaScript number operations.
 * Compatible with all modern browsers.
 *
 * ### Related Resources
 * - [MDN: Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
 * - [React State](https://react.dev/learn/managing-state)
 */

const meta = {
  title: "Hooks/State Management/useNumber",
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

const NumberExample = () => {
  const [number, { inc, dec, set, reset }] = useNumber(0, 10, -10);

  return (
    <div className="w-[400px] space-y-6">
      {/* Number Display */}
      <div className="relative h-40 bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden">
        {/* Progress Bar */}
        <div
          className="absolute bottom-0 left-0 right-0 bg-blue-500 transition-all duration-300"
          style={{
            height: `${((number + 10) / 20) * 100}%`,
          }}
        />

        {/* Number Value */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl font-bold text-slate-800 dark:text-white">
            {number}
          </div>
        </div>

        {/* Scale Lines */}
        <div className="absolute inset-y-4 right-4 w-1 bg-slate-200 dark:bg-slate-700">
          {Array.from({ length: 21 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-0.5 bg-slate-300 dark:bg-slate-600"
              style={{
                top: `${(i * 100) / 20}%`,
                right: 0,
                transform: "translateY(-50%)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          {/* Increment Controls */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => inc(1)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              +1
            </button>
            <button
              onClick={() => inc(5)}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              +5
            </button>
          </div>

          {/* Decrement Controls */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => dec(1)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              -1
            </button>
            <button
              onClick={() => dec(5)}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              -5
            </button>
          </div>
        </div>

        <div className="space-y-2">
          {/* Direct Value Controls */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => set(10)}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
            >
              Set Max
            </button>
            <button
              onClick={() => set(-10)}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
              Set Min
            </button>
          </div>

          {/* Reset Control */}
          <button
            onClick={() => reset()}
            className="w-full px-4 py-2 bg-slate-500 text-white rounded hover:bg-slate-600 transition-colors"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Bounds Info */}
      <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-lg">
        <div className="space-y-1 text-sm">
          <div>
            Current: <span className="font-mono">{number}</span>
          </div>
          <div>
            Minimum: <span className="font-mono">-10</span>
          </div>
          <div>
            Maximum: <span className="font-mono">10</span>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
        <p className="text-sm text-blue-600 dark:text-blue-400">
          Experiment with the number controls! The value is bounded between -10
          and 10, with a visual indicator showing the current position 📊
        </p>
      </div>
    </div>
  );
};

export const Example: Story = {
  render: () => <NumberExample />,
};
