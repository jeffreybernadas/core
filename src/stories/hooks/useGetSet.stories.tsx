import React, { useCallback } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import useGetSet from "../../hooks/useGetSet";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useGetSet` is a hook that provides get and set functions for managing state.
 * Unlike useState, it ensures you always have access to the latest state value through the getter function.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useGetSet } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useGetSet } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = () => {
 *   const [get, set] = useGetSet(0);
 *
 *   const increment = () => {
 *     set(get() + 1);
 *   };
 *
 *   return (
 *     <div>
 *       <p>Count: {get()}</p>
 *       <button onClick={increment}>Increment</button>
 *     </div>
 *   );
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * useGetSet<S>(
 *   initialState: S | (() => S) // Initial state or initializer function
 * ): [() => S, (newState: S | ((prevState: S) => S)) => void]
 * ```
 *
 * ### Returns
 * ```tsx
 * [
 *   get: () => S, // Function to get current state
 *   set: (newState: S | ((prevState: S) => S)) => void // Function to set new state
 * ]
 * ```
 */

const meta = {
  title: "Hooks/State Management/useGetSet",
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

export const Example: Story = {
  render: () => {
    // Example 1: Simple Counter
    const [getCount, setCount] = useGetSet(0);

    // Example 2: Object State
    const [getUser, setUser] = useGetSet({
      name: "John Doe",
      age: 25,
      visits: 0,
    });

    // Example 3: Async Update
    const simulateAsyncOperation = useCallback(() => {
      // Start async operation
      setTimeout(() => {
        // After 1 second, increment the count using the latest value
        const currentCount = getCount();
        setCount(currentCount + 1);
      }, 1000);
    }, []);

    // Example 4: Complex Object Update
    const updateUserVisits = useCallback(() => {
      const currentUser = getUser();
      setUser({
        ...currentUser,
        visits: currentUser.visits + 1,
      });
    }, []);

    return (
      <div className="w-[400px]">
        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg space-y-6">
          {/* Simple Counter */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Simple Counter
            </h3>
            <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Current Count:
              </p>
              <p className="text-lg font-mono mt-1 text-slate-700 dark:text-slate-300">
                {getCount()}
              </p>
              <div className="mt-2 space-x-2">
                <button
                  onClick={() => setCount(getCount() + 1)}
                  className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
                >
                  Increment
                </button>
                <button
                  onClick={simulateAsyncOperation}
                  className="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600 text-sm"
                >
                  Async Increment
                </button>
              </div>
            </div>
          </div>

          {/* Object State */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              User Object State
            </h3>
            <div className="bg-green-100 dark:bg-green-900/20 p-4 rounded">
              <div className="space-y-2">
                <div>
                  <p className="text-sm text-green-600 dark:text-green-400">
                    Name:
                  </p>
                  <p className="text-lg font-mono text-green-700 dark:text-green-300">
                    {getUser().name}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-green-600 dark:text-green-400">
                    Age:
                  </p>
                  <p className="text-lg font-mono text-green-700 dark:text-green-300">
                    {getUser().age}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-green-600 dark:text-green-400">
                    Visits:
                  </p>
                  <p className="text-lg font-mono text-green-700 dark:text-green-300">
                    {getUser().visits}
                  </p>
                </div>
              </div>
              <button
                onClick={updateUserVisits}
                className="mt-3 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
              >
                Increment Visits
              </button>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
            <p className="text-sm text-blue-600 dark:text-blue-400">
              Try the different buttons! Notice how the async increment always
              uses the latest state value, and how object updates preserve other
              properties. The get function always returns the current state! 🔄
            </p>
          </div>
        </div>
      </div>
    );
  },
};
