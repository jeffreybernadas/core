import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import useDefault from "../../hooks/useDefault";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useDefault` is a hook that provides a default value when the state is undefined or null.
 * It's useful for handling cases where you want to ensure a fallback value when the state is empty.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useDefault } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useDefault } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = () => {
 *   const [value, setValue] = useDefault("Default Value", null);
 *   return <div>{value}</div>; // Shows "Default Value"
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * useDefault<T>(
 *   defaultValue: T, // The fallback value when state is null/undefined
 *   initialValue: T | (() => T) // Initial state value or initializer function
 * ): [T, React.Dispatch<React.SetStateAction<T | undefined | null>>]
 * ```
 *
 * ### Returns
 * ```tsx
 * [value, setValue] // Tuple of current value and state setter function
 * ```
 */

const meta = {
  title: "Hooks/State Management/useDefault",
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
    // Example 1: String with null initial value
    const [text, setText] = useDefault("Default Text", null);

    // Example 2: Number with undefined initial value
    const [count, setCount] = useDefault(10, undefined);

    // Example 3: Object with non-null initial value
    const [user, setUser] = useDefault(
      { name: "Default User", age: 0 },
      { name: "John Doe", age: 25 },
    );

    // Example 4: Array with empty initial array
    const [list, setList] = useDefault<string[]>(["Default Item"], []);

    return (
      <div className="w-[400px]">
        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg space-y-6">
          {/* String Example */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              String with null initial value
            </h3>
            <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Current value: (should show "Default Text" initially)
              </p>
              <p className="text-lg font-mono mt-1 text-slate-700 dark:text-slate-300">
                {text}
              </p>
              <div className="space-x-2">
                <button
                  onClick={() => setText("Custom Text")}
                  className="mt-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
                >
                  Set Custom Text
                </button>
                <button
                  onClick={() => setText(null)}
                  className="mt-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
                >
                  Set to null
                </button>
              </div>
            </div>
          </div>

          {/* Number Example */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Number with undefined initial value
            </h3>
            <div className="bg-green-100 dark:bg-green-900/20 p-4 rounded">
              <p className="text-sm text-green-600 dark:text-green-400">
                Current value: (should show 10 initially)
              </p>
              <p className="text-lg font-mono mt-1 text-green-700 dark:text-green-300">
                {count}
              </p>
              <div className="space-x-2">
                <button
                  onClick={() => setCount(20)}
                  className="mt-2 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
                >
                  Set to 20
                </button>
                <button
                  onClick={() => setCount(undefined)}
                  className="mt-2 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
                >
                  Set to undefined
                </button>
              </div>
            </div>
          </div>

          {/* Object Example */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Object with non-null initial value
            </h3>
            <div className="bg-purple-100 dark:bg-purple-900/20 p-4 rounded">
              <p className="text-sm text-purple-600 dark:text-purple-400">
                Current user: (should show John Doe initially)
              </p>
              <p className="text-lg font-mono mt-1 text-purple-700 dark:text-purple-300">
                {user.name}, {user.age}
              </p>
              <div className="space-x-2">
                <button
                  onClick={() => setUser({ name: "Jane Smith", age: 30 })}
                  className="mt-2 px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600 text-sm"
                >
                  Set New User
                </button>
                <button
                  onClick={() => setUser(null)}
                  className="mt-2 px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600 text-sm"
                >
                  Set to null
                </button>
              </div>
            </div>
          </div>

          {/* Array Example */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Array with empty initial array
            </h3>
            <div className="bg-orange-100 dark:bg-orange-900/20 p-4 rounded">
              <p className="text-sm text-orange-600 dark:text-orange-400">
                Current list: (should show empty array initially)
              </p>
              <p className="text-lg font-mono mt-1 text-orange-700 dark:text-orange-300">
                {list.length ? list.join(", ") : "(empty)"}
              </p>
              <div className="space-x-2">
                <button
                  onClick={() => setList(["Custom Item"])}
                  className="mt-2 px-3 py-1 bg-orange-500 text-white rounded hover:bg-orange-600 text-sm"
                >
                  Set Custom Item
                </button>
                <button
                  onClick={() => setList(null)}
                  className="mt-2 px-3 py-1 bg-orange-500 text-white rounded hover:bg-orange-600 text-sm"
                >
                  Set to null
                </button>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
            <p className="text-sm text-blue-600 dark:text-blue-400">
              The hook provides a default value when the state becomes
              null/undefined. Try the buttons to see how it works! 🎯
            </p>
          </div>
        </div>
      </div>
    );
  },
};
