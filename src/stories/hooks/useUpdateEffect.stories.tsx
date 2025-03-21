import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import useUpdateEffect from "../../hooks/useUpdateEffect";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useUpdateEffect` is a hook that works like useEffect but skips the first render. It's useful when you want to perform side effects only when a dependency updates, not on mount.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useUpdateEffect } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useUpdateEffect } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = () => {
 *   const [count, setCount] = useState(0);
 *
 *   useUpdateEffect(() => {
 *     console.log('Count updated:', count);
 *     // This won't run on mount, only on subsequent updates
 *   }, [count]);
 *
 *   return (
 *     <button onClick={() => setCount(c => c + 1)}>
 *       Increment
 *     </button>
 *   );
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * useUpdateEffect(
 *   effect: () => void | (() => void), // Effect callback
 *   deps?: any[] // Optional dependency array
 * ): void
 * ```
 *
 * ### Returns
 * - No return value (void)
 *
 * ### Features
 * - Skips first render
 * - Works like useEffect
 * - Supports cleanup function
 * - Dependency tracking
 * - Zero dependencies
 *
 * ### Browser Compatibility
 * Compatible with all browsers that support React.
 *
 * ### Related Resources
 * - [useEffect Hook](https://react.dev/reference/react/useEffect)
 * - [React Effects](https://react.dev/learn/synchronizing-with-effects)
 */

const meta = {
  title: "Hooks/Lifecycle/useUpdateEffect",
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

const UpdateEffectExample = () => {
  const [count, setCount] = useState(0);
  const [logs, setLogs] = useState<string[]>(["🟢 Component mounted"]);

  useUpdateEffect(() => {
    setLogs((prev) => [...prev, `🔄 Count updated to: ${count}`]);

    return () => {
      setLogs((prev) => [...prev, `🧹 Cleanup for count: ${count}`]);
    };
  }, [count]);

  return (
    <div className="w-[500px]">
      <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            Update Effect Demo
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Watch how the effect runs only on updates, not on mount
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setCount((c) => c + 1)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Increment Count
            </button>
            <div className="text-lg text-slate-700 dark:text-slate-200">
              Count: <span className="font-bold">{count}</span>
            </div>
          </div>

          <div className="flex items-center">
            <button
              onClick={() => setLogs([])}
              className="px-4 py-2 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 rounded transition-colors text-slate-700 dark:text-slate-200"
            >
              Clear Logs
            </button>
          </div>

          <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded">
            <h4 className="font-medium text-slate-900 dark:text-slate-100 mb-2">
              Effect Log
            </h4>
            <div className="space-y-1 font-mono text-sm">
              {logs.map((log, index) => (
                <div key={index} className="text-slate-700 dark:text-slate-300">
                  {log}
                </div>
              ))}
              {logs.length === 0 && (
                <div className="text-slate-500 dark:text-slate-400 italic">
                  No logs yet
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded space-y-2">
          <h4 className="font-medium text-slate-900 dark:text-slate-100">
            Key Behaviors:
          </h4>
          <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-300 space-y-1">
            <li>Effect skips the first render</li>
            <li>Cleanup runs before next effect</li>
            <li>Effect runs on dependency changes</li>
            <li>Similar to useEffect, but smarter</li>
          </ul>
        </div>

        {/* Instructions */}
        <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
          <p className="text-sm text-blue-600 dark:text-blue-400">
            Click the increment button to see how the effect runs only on
            updates! Notice how there's no effect log on mount! 🔄
          </p>
        </div>
      </div>
    </div>
  );
};

export const Example: Story = {
  render: () => <UpdateEffectExample />,
};
