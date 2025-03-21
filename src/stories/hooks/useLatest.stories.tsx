import React, { useState, useCallback } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import useLatest from "../../hooks/useLatest";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useLatest` is a hook that returns a ref object with the latest value.
 * Unlike useRef, it automatically updates the ref when the value changes.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useLatest } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useLatest } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = () => {
 *   const [count, setCount] = useState(0);
 *   const latestCount = useLatest(count);
 *
 *   useEffect(() => {
 *     const timer = setInterval(() => {
 *       console.log("Latest count:", latestCount.current);
 *     }, 1000);
 *     return () => clearInterval(timer);
 *   }, []); // Empty deps array but still gets latest count
 *
 *   return (
 *     <button onClick={() => setCount(c => c + 1)}>
 *       Count: {count}
 *     </button>
 *   );
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * useLatest<T>(
 *   value: T // The value to keep up-to-date in the ref
 * ): { readonly current: T }
 * ```
 *
 * ### Returns
 * ```tsx
 * { readonly current: T } // A ref object that always has the latest value
 * ```
 */

const meta = {
  title: "Hooks/State Management/useLatest",
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
    // Example 1: Counter with Delayed Log
    const [count, setCount] = useState(0);
    const latestCount = useLatest(count);
    const [logs, setLogs] = useState<string[]>([]);

    // Simulate an async operation that needs the latest count
    const simulateAsyncOperation = useCallback(() => {
      const startCount = count; // Capture current count
      setTimeout(() => {
        setLogs((prevLogs) => [
          `After 2s - Start Count: ${startCount}, Latest Count: ${latestCount.current}`,
          ...prevLogs.slice(0, 4), // Keep only last 5 logs
        ]);
      }, 2000);
    }, [count]);

    // Example 2: Object State
    const [user, setUser] = useState({ name: "John", age: 25 });
    const latestUser = useLatest(user);
    const [userLogs, setUserLogs] = useState<string[]>([]);

    // Simulate an async operation that needs the latest user
    const simulateUserUpdate = useCallback(() => {
      const startUser = { ...user }; // Capture current user
      setTimeout(() => {
        setUserLogs((prevLogs) => [
          `After 2s - Start Age: ${startUser.age}, Latest Age: ${latestUser.current.age}`,
          ...prevLogs.slice(0, 4), // Keep only last 5 logs
        ]);
      }, 2000);
    }, [user]);

    return (
      <div className="w-[400px]">
        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg space-y-6">
          {/* Counter Example */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Counter Example
            </h3>
            <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded">
              <div className="text-center mb-3">
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Current Count:
                </p>
                <p className="text-2xl font-mono text-slate-700 dark:text-slate-300">
                  {count}
                </p>
              </div>
              <div className="space-x-2 flex justify-center">
                <button
                  onClick={() => setCount((c) => c + 1)}
                  className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
                >
                  Increment
                </button>
                <button
                  onClick={simulateAsyncOperation}
                  className="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600 text-sm"
                >
                  Start Async Operation
                </button>
              </div>
              {logs.length > 0 && (
                <div className="mt-3 space-y-1">
                  <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">
                    Async Operation Logs:
                  </p>
                  {logs.map((log, index) => (
                    <p
                      key={index}
                      className="text-xs text-slate-500 dark:text-slate-400"
                    >
                      {log}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Object State Example */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              User Object Example
            </h3>
            <div className="bg-green-100 dark:bg-green-900/20 p-4 rounded">
              <div className="text-center mb-3">
                <p className="text-sm text-green-600 dark:text-green-400">
                  Current User Age:
                </p>
                <p className="text-2xl font-mono text-green-700 dark:text-green-300">
                  {user.age}
                </p>
              </div>
              <div className="space-x-2 flex justify-center">
                <button
                  onClick={() => setUser((u) => ({ ...u, age: u.age + 1 }))}
                  className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
                >
                  Increment Age
                </button>
                <button
                  onClick={simulateUserUpdate}
                  className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
                >
                  Start Async Operation
                </button>
              </div>
              {userLogs.length > 0 && (
                <div className="mt-3 space-y-1">
                  <p className="text-sm font-semibold text-green-600 dark:text-green-300">
                    Async Operation Logs:
                  </p>
                  {userLogs.map((log, index) => (
                    <p
                      key={index}
                      className="text-xs text-green-500 dark:text-green-400"
                    >
                      {log}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
            <p className="text-sm text-blue-600 dark:text-blue-400">
              Try clicking the increment buttons multiple times and then click
              "Start Async Operation". After 2 seconds, you'll see how useLatest
              always provides access to the most current value, even in async
              callbacks! 🔄
            </p>
          </div>
        </div>
      </div>
    );
  },
};
