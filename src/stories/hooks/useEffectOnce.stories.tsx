import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useEffectOnce } from "../../hooks";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useEffectOnce` is a hook that runs an effect only once when a component mounts.
 * It's useful for one-time initializations, data fetching, or subscriptions that should only happen once.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useEffectOnce } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useEffectOnce } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = () => {
 *   useEffectOnce(() => {
 *     console.log('Component mounted');
 *     // Cleanup function (optional)
 *     return () => console.log('Component will unmount');
 *   });
 *
 *   return <div>Check console for mount log</div>;
 * };
 * ```
 *
 * ### Advanced Usage
 * ```tsx
 * const DataFetcher = () => {
 *   const [data, setData] = useState(null);
 *
 *   useEffectOnce(() => {
 *     const controller = new AbortController();
 *
 *     fetch('/api/data', { signal: controller.signal })
 *       .then(res => res.json())
 *       .then(setData);
 *
 *     return () => controller.abort();
 *   });
 *
 *   return <div>Data: {JSON.stringify(data)}</div>;
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * useEffectOnce(
 *   effect: EffectCallback  // Effect function to run once
 * ): void
 * ```
 *
 * ### Returns
 * void
 *
 * ### Browser Compatibility
 * Uses standard React features, supported in all modern browsers.
 *
 * ### Related Resources
 * - [React useEffect](https://react.dev/reference/react/useEffect)
 * - [React Component Lifecycle](https://react.dev/learn/lifecycle-of-reactive-effects)
 */

const meta = {
  title: "Hooks/Lifecycle/useEffectOnce",
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

// Child component moved outside render function
const Child = ({ onLog }: { onLog: (event: string) => void }) => {
  useEffectOnce(() => {
    onLog("Child component mounted");
    return () => onLog("Child component unmounted");
  });

  return (
    <div className="p-3 bg-white dark:bg-slate-700 rounded">
      <p className="text-sm text-slate-600 dark:text-slate-400">
        Child Component
      </p>
    </div>
  );
};

export const Example: Story = {
  render: () => {
    const [mountTime, setMountTime] = useState("");
    const [eventLog, setEventLog] = useState<string[]>([]);
    const [showChild, setShowChild] = useState(true);

    // Log events with timestamps
    const logEvent = (event: string) => {
      const time = new Date().toLocaleTimeString();
      setEventLog((prev) => [...prev, `${time}: ${event}`]);
    };

    // Parent effect runs once
    useEffectOnce(() => {
      const time = new Date().toLocaleTimeString();
      setMountTime(time);
      logEvent("Parent component mounted");
    });

    return (
      <div className="space-y-6 max-w-lg">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">
            Effect Once Demo
          </h3>
          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg space-y-4">
            {/* Mount Time Display */}
            <div className="text-sm text-slate-600 dark:text-slate-400">
              Parent Mounted at: {mountTime}
            </div>

            {/* Toggle Child Button */}
            <div>
              <button
                onClick={() => setShowChild((prev) => !prev)}
                className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                {showChild ? "Unmount Child" : "Mount Child"}
              </button>
            </div>

            {/* Child Component */}
            {showChild && <Child onLog={logEvent} />}

            {/* Event Log */}
            <div className="space-y-2">
              <div className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Event Log:
              </div>
              <div className="bg-white dark:bg-slate-700 p-3 rounded max-h-40 overflow-auto">
                {eventLog.map((log, index) => (
                  <div
                    key={index}
                    className="text-xs text-slate-600 dark:text-slate-400"
                  >
                    {log}
                  </div>
                ))}
              </div>
            </div>

            {/* Instructions */}
            <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
              <p className="text-sm text-blue-600 dark:text-blue-400">
                Toggle the child component to see mount/unmount effects! Notice
                how the parent's effect runs only once! ⚡
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  },
};
