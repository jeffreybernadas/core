import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import useMethods from "../../hooks/useMethods";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useMethods` is a hook that provides a simpler alternative to useReducer by allowing you to define state updates as methods.
 * It automatically wraps your methods to dispatch actions, eliminating the need for action types and switch statements.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useMethods } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useMethods } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * interface CounterState {
 *   count: number;
 * }
 *
 * interface CounterMethods {
 *   increment: () => void;
 *   decrement: () => void;
 * }
 *
 * const Component = () => {
 *   const [state, methods] = useMethods<CounterMethods, CounterState>(
 *     (state) => ({
 *       increment: () => ({ count: state.count + 1 }),
 *       decrement: () => ({ count: state.count - 1 }),
 *     }),
 *     { count: 0 }
 *   );
 *
 *   return (
 *     <div>
 *       <p>Count: {state.count}</p>
 *       <button onClick={methods.increment}>+1</button>
 *       <button onClick={methods.decrement}>-1</button>
 *     </div>
 *   );
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * useMethods<M extends Record<string, unknown>, T>(
 *   createMethods: (state: T) => MethodsMap<M, T>, // Function that creates state update methods
 *   initialState: T                                // Initial state value
 * ): [T, WrappedMethods<M>]
 * ```
 *
 * ### Returns
 * ```tsx
 * [
 *   state: T,                    // Current state
 *   methods: WrappedMethods<M>   // Object containing wrapped methods that update state
 * ]
 * ```
 *
 * ### Browser Compatibility
 * Uses standard React hooks (useReducer, useMemo).
 * Supported in all modern browsers.
 *
 * ### Related Resources
 * - [React useReducer](https://react.dev/reference/react/useReducer)
 * - [React useMemo](https://react.dev/reference/react/useMemo)
 */

const meta = {
  title: "Hooks/State Management/useMethods",
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

interface CounterState {
  count: number;
}

type CounterMethods = {
  increment: () => CounterState;
  decrement: () => CounterState;
};

const CounterExample = () => {
  const [state, methods] = useMethods<CounterMethods, CounterState>(
    (state) => ({
      increment: () => ({ count: state.count + 1 }),
      decrement: () => ({ count: state.count - 1 }),
    }),
    { count: 0 },
  );

  return (
    <div className="w-[400px]">
      <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg space-y-6">
        {/* Counter Display */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            Counter Example
          </h3>
          <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded text-center">
            <p className="text-3xl font-bold text-slate-900 dark:text-slate-100">
              {state.count}
            </p>
            <div className="mt-4 flex justify-center space-x-2">
              <button
                onClick={methods.decrement}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
              >
                -1
              </button>
              <button
                onClick={methods.increment}
                className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
              >
                +1
              </button>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
          <p className="text-sm text-blue-600 dark:text-blue-400">
            Try the increment and decrement buttons! Notice how useMethods
            simplifies state management by handling the action dispatching for
            you. No need for action types or switch statements! 🔄
          </p>
        </div>
      </div>
    </div>
  );
};

export const Example: Story = {
  render: () => <CounterExample />,
};
