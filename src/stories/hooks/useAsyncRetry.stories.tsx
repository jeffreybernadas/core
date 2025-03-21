import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useAsyncRetry } from "../../hooks";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useAsyncRetry` is a hook that extends useAsync with retry functionality.
 * It's useful for handling retryable async operations, like API calls that might fail temporarily.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useAsyncRetry } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useAsyncRetry } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = () => {
 *   const state = useAsyncRetry(async () => {
 *     const response = await fetch('/api/data');
 *     if (!response.ok) throw new Error('Failed to fetch');
 *     return response.json();
 *   });
 *
 *   if (state.loading) return <div>Loading...</div>;
 *   if (state.error) {
 *     return (
 *       <div>
 *         Error: {state.error.message}
 *         <button onClick={state.retry}>Retry</button>
 *       </div>
 *     );
 *   }
 *   return <div>Data: {JSON.stringify(state.value)}</div>;
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * useAsyncRetry<T>(
 *   fn: () => Promise<T>, // Async function to execute
 *   deps?: DependencyList = [] // Dependencies array that triggers re-execution
 * ): AsyncStateRetry<T>
 * ```
 *
 * ### Returns
 * - AsyncStateRetry<T>: Extends AsyncState with retry functionality
 *   - loading: boolean - Whether the async function is currently executing
 *   - error: Error | undefined - Error object if the async function failed
 *   - value: T | undefined - Result value if the async function succeeded
 *   - retry: () => void - Function to retry the async operation
 *
 * ### Browser Compatibility
 * Uses standard Promise API, supported in all modern browsers.
 *
 * ### Related Resources
 * - [MDN: Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
 * - [MDN: Error handling](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
 */

const meta = {
  title: "Hooks/State Management/useAsyncRetry",
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
    // Simulated flaky API that fails randomly
    const fetchWeatherData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Randomly fail 50% of the time
      if (Math.random() > 0.5) {
        throw new Error("Failed to fetch weather data. Please try again.");
      }

      return {
        temperature: Math.round(Math.random() * 30 + 10), // 10-40°C
        condition: ["Sunny", "Cloudy", "Rainy", "Stormy"][
          Math.floor(Math.random() * 4)
        ],
        humidity: Math.round(Math.random() * 50 + 30), // 30-80%
        windSpeed: Math.round(Math.random() * 30), // 0-30 km/h
      };
    };

    const state = useAsyncRetry(fetchWeatherData);

    return (
      <div className="space-y-6 max-w-lg">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">
            Weather Data Fetcher
          </h3>
          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  {state.loading
                    ? "Fetching weather data..."
                    : "Last update: just now"}
                </div>
                <button
                  onClick={state.retry}
                  disabled={state.loading}
                  className={`px-3 py-1 rounded text-sm transition-colors ${
                    state.loading
                      ? "bg-blue-400 cursor-not-allowed text-white"
                      : "bg-blue-500 hover:bg-blue-600 text-white"
                  }`}
                >
                  {state.loading ? "Fetching..." : "Refresh"}
                </button>
              </div>

              {state.error ? (
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded space-y-3">
                  <div className="flex items-center text-red-600 dark:text-red-400">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span>{state.error.message}</span>
                  </div>
                  <button
                    onClick={state.retry}
                    className="w-full px-4 py-2 bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 rounded hover:bg-red-200 dark:hover:bg-red-900/60 transition-colors"
                  >
                    Try Again
                  </button>
                </div>
              ) : state.value ? (
                <div className="bg-white dark:bg-slate-700 rounded p-4 space-y-3">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <div className="text-3xl font-bold text-slate-900 dark:text-slate-100">
                        {state.value.temperature}°C
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        {state.value.condition}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-500 dark:text-slate-400">
                          Humidity
                        </span>
                        <span className="text-slate-900 dark:text-slate-100">
                          {state.value.humidity}%
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-500 dark:text-slate-400">
                          Wind Speed
                        </span>
                        <span className="text-slate-900 dark:text-slate-100">
                          {state.value.windSpeed} km/h
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}

              <div className="text-xs text-slate-500 dark:text-slate-400 italic">
                Note: This example simulates a flaky API that fails 50% of the
                time to demonstrate retry functionality.
              </div>
            </div>

            {/* Instructions */}
            <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
              <p className="text-sm text-blue-600 dark:text-blue-400">
                Trigger error by hitting the refresh button, then use the try
                again button to attempt the request again! 🔁
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  },
};
