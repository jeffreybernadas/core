import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import usePreviousDistinct from "../../hooks/usePreviousDistinct";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `usePreviousDistinct` is a hook that returns the previous distinct value of a state variable.
 * It only updates the previous value when the current value is different based on a comparison function.
 *
 * ### Module Federation Import
 * ```tsx
 * import { usePreviousDistinct } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { usePreviousDistinct } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = () => {
 *   const [count, setCount] = useState(0);
 *   const prevCount = usePreviousDistinct(count);
 *
 *   return (
 *     <div>
 *       <p>Current: {count}</p>
 *       <p>Previous: {prevCount ?? "No previous value"}</p>
 *       <button onClick={() => setCount(c => c + 1)}>Increment</button>
 *     </div>
 *   );
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * usePreviousDistinct<T>(
 *   value: T, // Current value to track
 *   compare: (prev: T | undefined, next: T) => boolean = strictEquals // Optional comparison function
 * ): T | undefined
 * ```
 *
 * ### Returns
 * ```tsx
 * T | undefined // Previous distinct value or undefined if no previous value exists
 * ```
 *
 * ### Browser Compatibility
 * Uses standard React hooks.
 * Compatible with all modern browsers.
 *
 * ### Related Resources
 * - [React useRef Hook](https://react.dev/reference/react/useRef)
 * - [React State Management](https://react.dev/learn/managing-state)
 */

const meta = {
  title: "Hooks/Utility/usePreviousDistinct",
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

interface NumberState {
  value: number;
  isEven: boolean;
}

const PreviousDistinctExample = () => {
  // State with a complex object to demonstrate custom comparison
  const [state, setState] = useState<NumberState>({ value: 0, isEven: true });

  // Track previous state with different comparison functions
  const prevValue = usePreviousDistinct(state.value);
  const prevState = usePreviousDistinct(state);
  const prevStateCustomCompare = usePreviousDistinct(
    state,
    (prev, next) => prev?.isEven === next.isEven,
  );

  // Update state with new value
  const updateValue = (newValue: number) => {
    setState({
      value: newValue,
      isEven: newValue % 2 === 0,
    });
  };

  return (
    <div className="w-[400px] space-y-6">
      {/* Value Display */}
      <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-6">
        <div className="text-center">
          <div className="text-6xl font-bold mb-2">{state.value}</div>
          <div className="text-sm text-slate-500">
            {state.isEven ? "Even Number" : "Odd Number"}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="grid grid-cols-3 gap-2">
        <button
          onClick={() => updateValue(state.value - 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          -1
        </button>
        <button
          onClick={() => updateValue(state.value)}
          className="px-4 py-2 bg-slate-500 text-white rounded hover:bg-slate-600 transition-colors"
        >
          Same
        </button>
        <button
          onClick={() => updateValue(state.value + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          +1
        </button>
      </div>

      {/* Previous Values Panel */}
      <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4 space-y-4">
        <h3 className="text-lg font-semibold mb-3">Previous Values</h3>

        {/* Simple Value Tracking */}
        <div className="space-y-1">
          <div className="text-sm font-medium">Value Only</div>
          <div className="flex items-center space-x-2 text-sm">
            <span className="text-slate-500">Previous:</span>
            <span className="font-mono">{prevValue ?? "undefined"}</span>
          </div>
        </div>

        {/* Full State Tracking */}
        <div className="space-y-1">
          <div className="text-sm font-medium">
            Full State (Default Compare)
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <span className="text-slate-500">Previous:</span>
            <span className="font-mono">
              {prevState ? JSON.stringify(prevState) : "undefined"}
            </span>
          </div>
        </div>

        {/* Custom Compare Tracking */}
        <div className="space-y-1">
          <div className="text-sm font-medium">Even/Odd State Only</div>
          <div className="flex items-center space-x-2 text-sm">
            <span className="text-slate-500">Previous:</span>
            <span className="font-mono">
              {prevStateCustomCompare
                ? JSON.stringify(prevStateCustomCompare)
                : "undefined"}
            </span>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
        <p className="text-sm text-blue-600 dark:text-blue-400">
          Try the controls! Notice how different comparison methods affect when
          the previous value updates 🔄
        </p>
      </div>
    </div>
  );
};

export const Example: Story = {
  render: () => <PreviousDistinctExample />,
};
