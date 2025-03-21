import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useAsync } from "../../hooks";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useAsync` is a hook that manages async function state with automatic execution.
 * It's useful for handling API calls, data fetching, and other async operations that should run immediately.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useAsync } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useAsync } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = ({ userId }: { userId: string }) => {
 *   const state = useAsync(async () => {
 *     const response = await fetch(`/api/users/${userId}`);
 *     const data = await response.json();
 *     return data;
 *   }, [userId]);
 *
 *   if (state.loading) return <div>Loading...</div>;
 *   if (state.error) return <div>Error: {state.error.message}</div>;
 *   return <div>User: {state.value?.name}</div>;
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * useAsync<T>(
 *   fn: () => Promise<T>, // Async function to execute
 *   deps?: DependencyList = [] // Dependencies array that triggers re-execution
 * ): AsyncState<T>
 * ```
 *
 * ### Returns
 * - AsyncState<T>:
 *   - loading: boolean - Whether the async function is currently executing
 *   - error: Error | undefined - Error object if the async function failed
 *   - value: T | undefined - Result value if the async function succeeded
 *
 * ### Browser Compatibility
 * Uses standard Promise API, supported in all modern browsers.
 *
 * ### Related Resources
 * - [MDN: Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
 * - [MDN: async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
 */

const meta = {
  title: "Hooks/State Management/useAsync",
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
    // Simulated async function that resolves after a delay
    const fetchUserData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      return {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        role: "Admin",
      };
    };

    const state = useAsync(fetchUserData);

    return (
      <div className="space-y-6 max-w-lg">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">
            Async Data Fetching Example
          </h3>
          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full flex-shrink-0">
                  {state.loading ? (
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                  ) : state.error ? (
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                  ) : (
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                  )}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  {state.loading
                    ? "Fetching user data..."
                    : state.error
                      ? "Error fetching data"
                      : "Data fetched successfully"}
                </div>
              </div>

              {state.error && (
                <div className="text-red-500 text-sm">
                  Error: {state.error.message}
                </div>
              )}

              {state.value && (
                <div className="bg-white dark:bg-slate-700 rounded p-3 space-y-2">
                  <div className="grid grid-cols-[100px_1fr] gap-2 text-sm">
                    <div className="text-slate-500 dark:text-slate-400">
                      Name:
                    </div>
                    <div className="text-slate-900 dark:text-slate-100">
                      {state.value.name}
                    </div>
                    <div className="text-slate-500 dark:text-slate-400">
                      Email:
                    </div>
                    <div className="text-slate-900 dark:text-slate-100">
                      {state.value.email}
                    </div>
                    <div className="text-slate-500 dark:text-slate-400">
                      Role:
                    </div>
                    <div className="text-slate-900 dark:text-slate-100">
                      {state.value.role}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Instructions */}
            <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
              <p className="text-sm text-blue-600 dark:text-blue-400">
                See the loading, success, and error states in action! Try
                toggling your network connection to see error handling. ⚡
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  },
};
