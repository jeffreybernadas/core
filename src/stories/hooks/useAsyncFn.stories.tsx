import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useAsyncFn } from "../../hooks";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useAsyncFn` is a hook that manages async function state with manual execution control.
 * It's useful for handling API calls, data fetching, and other async operations that should be triggered manually.
 * Unlike useAsync, this hook doesn't execute the async function immediately.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useAsyncFn } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useAsyncFn } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = () => {
 *   const [query, setQuery] = useState("");
 *   const [state, search] = useAsyncFn(async (q: string) => {
 *     const response = await fetch(`/api/search?q=${q}`);
 *     const data = await response.json();
 *     return data;
 *   }, []);
 *
 *   const handleSearch = () => {
 *     search(query);
 *   };
 *
 *   return (
 *     <div>
 *       <input value={query} onChange={(e) => setQuery(e.target.value)} />
 *       <button onClick={handleSearch} disabled={state.loading}>
 *         {state.loading ? "Searching..." : "Search"}
 *       </button>
 *       {state.value && <div>Results: {state.value.length}</div>}
 *     </div>
 *   );
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * useAsyncFn<T>(
 *   fn: (...args: any[]) => Promise<T>, // Async function to execute
 *   deps?: DependencyList = [], // Dependencies array for memoization
 *   initialState?: AsyncState<T> = { loading: false } // Initial state
 * ): [AsyncState<T>, (...args: any[]) => Promise<T>]
 * ```
 *
 * ### Returns
 * - [state, callback]: A tuple containing:
 *   - state: AsyncState<T>
 *     - loading: boolean - Whether the async function is currently executing
 *     - error: Error | undefined - Error object if the async function failed
 *     - value: T | undefined - Result value if the async function succeeded
 *   - callback: The memoized async function to execute
 *
 * ### Browser Compatibility
 * Uses standard Promise API, supported in all modern browsers.
 *
 * ### Related Resources
 * - [MDN: Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
 * - [MDN: async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
 */

const meta = {
  title: "Hooks/State Management/useAsyncFn",
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
    // Simulated async function that resolves or rejects based on input
    const validateEmail = async (email: string) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (!email) throw new Error("Email is required");
      if (!email.includes("@")) throw new Error("Invalid email format");

      return {
        valid: true,
        email,
        domain: email.split("@")[1],
        suggestions: [
          `${email.split("@")[0]}@gmail.com`,
          `${email.split("@")[0]}@outlook.com`,
          `${email.split("@")[0]}@yahoo.com`,
        ],
      };
    };

    const [email, setEmail] = React.useState("");
    const [state, validate] = useAsyncFn(validateEmail);

    const handleValidate = () => {
      validate(email);
    };

    return (
      <div className="space-y-6 max-w-lg">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">
            Email Validation Example
          </h3>
          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
                  placeholder="Enter email to validate"
                />
              </div>

              <button
                onClick={handleValidate}
                disabled={state.loading}
                className={`w-full px-4 py-2 rounded-md text-white transition-colors ${
                  state.loading
                    ? "bg-blue-400 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600"
                }`}
              >
                {state.loading ? "Validating..." : "Validate Email"}
              </button>

              {state.error && (
                <div className="text-red-500 text-sm bg-red-50 dark:bg-red-900/20 p-2 rounded">
                  {state.error.message}
                </div>
              )}

              {state.value && (
                <div className="bg-white dark:bg-slate-700 rounded p-3 space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <div className="text-sm text-green-600 dark:text-green-400">
                      Email is valid
                    </div>
                  </div>

                  <div className="text-sm">
                    <div className="text-slate-500 dark:text-slate-400">
                      Domain:{" "}
                      <span className="text-slate-700 dark:text-slate-300">
                        {state.value.domain}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="text-sm text-slate-500 dark:text-slate-400">
                      Suggested alternatives:
                    </div>
                    <div className="space-y-1">
                      {state.value.suggestions.map((suggestion) => (
                        <div
                          key={suggestion}
                          className="text-sm text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-600 p-1 rounded"
                        >
                          {suggestion}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Instructions */}
            <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
              <p className="text-sm text-blue-600 dark:text-blue-400">
                Type in email and click validate to see the loading state is
                managed independently! 🔄
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  },
};
