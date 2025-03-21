import React, { useState, useEffect } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useDeepCompareEffect } from "../../hooks";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useDeepCompareEffect` is a hook that performs a deep comparison of dependencies for React's useEffect.
 * It's useful when dealing with object or array dependencies that need deep equality checks rather than reference equality.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useDeepCompareEffect } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useDeepCompareEffect } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = ({ config }) => {
 *   useDeepCompareEffect(() => {
 *     // Effect runs only when config deeply changes
 *     console.log('Config changed:', config);
 *   }, [config]);
 *
 *   return <div>Check console for effect logs</div>;
 * };
 * ```
 *
 * ### Advanced Usage
 * ```tsx
 * const ComplexDataComponent = () => {
 *   const [data, setData] = useState({
 *     user: { name: 'John', settings: { theme: 'dark' } },
 *     preferences: ['music', 'sports']
 *   });
 *
 *   useDeepCompareEffect(() => {
 *     // Only runs when data deeply changes
 *     saveToDatabase(data);
 *   }, [data]);
 *
 *   return <div>Data: {JSON.stringify(data)}</div>;
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * useDeepCompareEffect(
 *   effect: EffectCallback,  // Effect function to run
 *   deps: DependencyList    // Dependencies array to compare deeply
 * ): void
 * ```
 *
 * ### Returns
 * void
 *
 * ### Browser Compatibility
 * Uses standard JavaScript features, supported in all modern browsers.
 *
 * ### Related Resources
 * - [React useEffect](https://react.dev/reference/react/useEffect)
 * - [Deep equality in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)
 */

const meta = {
  title: "Hooks/Lifecycle/useDeepCompareEffect",
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
    // Complex object state
    const [config, setConfig] = useState({
      theme: {
        primary: "#3B82F6",
        secondary: "#1E40AF",
        mode: "light",
      },
      user: {
        preferences: {
          notifications: true,
          language: "en",
        },
      },
    });

    // Counter for regular effect
    const [regularEffectCount, setRegularEffectCount] = useState(0);
    // Counter for deep compare effect
    const [deepEffectCount, setDeepEffectCount] = useState(0);

    // Regular useEffect for comparison
    useEffect(() => {
      setRegularEffectCount((prev) => prev + 1);
    }, [config]);

    // Deep compare effect
    useDeepCompareEffect(() => {
      setDeepEffectCount((prev) => prev + 1);
    }, [config]);

    // Function to update theme mode
    const toggleTheme = () => {
      setConfig({
        ...config,
        theme: {
          ...config.theme,
          mode: config.theme.mode === "light" ? "dark" : "light",
        },
      });
    };

    // Function to create a new object with same values
    const recreateObject = () => {
      setConfig({
        ...config,
      });
    };

    return (
      <div className="space-y-6 max-w-lg">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">
            Deep Compare Effect Demo
          </h3>
          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg space-y-4">
            {/* Configuration Display */}
            <div className="bg-white dark:bg-slate-700 p-3 rounded">
              <pre className="text-xs text-slate-600 dark:text-slate-400 overflow-auto">
                {JSON.stringify(config, null, 2)}
              </pre>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <button
                onClick={toggleTheme}
                className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Toggle Theme
              </button>
              <button
                onClick={recreateObject}
                className="px-3 py-2 bg-slate-500 text-white rounded hover:bg-slate-600"
              >
                Recreate Object
              </button>
            </div>

            {/* Effect Counters */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">
                  Regular Effect Triggers:
                </span>
                <span className="text-slate-900 dark:text-slate-100">
                  {regularEffectCount}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">
                  Deep Effect Triggers:
                </span>
                <span className="text-slate-900 dark:text-slate-100">
                  {deepEffectCount}
                </span>
              </div>
            </div>

            {/* Instructions */}
            <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
              <p className="text-sm text-blue-600 dark:text-blue-400">
                Try both buttons to see the difference! 'Toggle Theme' changes
                values (both effects trigger), while 'Recreate Object' only
                triggers the regular effect since the values remain the same! 🔍
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  },
};
