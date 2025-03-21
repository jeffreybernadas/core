import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import useUnmount from "../../hooks/useUnmount";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useUnmount` is a hook that executes a callback function when a component unmounts.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useUnmount } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useUnmount } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = () => {
 *   useUnmount(() => {
 *     // Cleanup when leaving the chat room
 *     disconnectFromChat();
 *     saveMessages();
 *   });
 *
 *   return <div>Chat Room Content</div>;
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * useUnmount(
 *   fn: () => void // The callback function to execute on unmount
 * ): void
 * ```
 *
 * ### Returns
 * - No return value (void)
 *
 * ### Features
 * - Executes cleanup on unmount
 * - Handles async cleanup functions
 * - Zero dependencies
 * - SSR compatible
 * - Type-safe
 *
 * ### Browser Compatibility
 * Compatible with all browsers that support React.
 *
 * ### Related Resources
 * - [useEffect Cleanup](https://react.dev/learn/synchronizing-with-effects#how-to-handle-the-effect-firing-twice-in-development)
 * - [Component Lifecycle](https://react.dev/learn/lifecycle-of-reactive-effects)
 */

const meta = {
  title: "Hooks/Lifecycle/useUnmount",
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

const UnmountableComponent = ({
  onLog,
}: {
  onLog: (message: string) => void;
}) => {
  useUnmount(() => {
    onLog("🔴 Component unmounted - cleanup performed");
  });

  return (
    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded">
      <h4 className="font-medium text-blue-900 dark:text-blue-100">
        Active Component
      </h4>
      <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
        This component will perform cleanup when unmounted.
      </p>
    </div>
  );
};

const UnmountExample = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [logs, setLogs] = useState<string[]>([
    "🟢 Component mounted initially",
  ]);

  const addLog = (message: string) => {
    setLogs((prev) => [...prev, message]);
  };

  return (
    <div className="w-[500px]">
      <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            Component Unmount Demo
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Watch how the cleanup function executes on unmount
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                if (!isVisible) {
                  addLog("🟢 Component mounted");
                }
                setIsVisible(!isVisible);
              }}
              className={`px-4 py-2 rounded transition-colors ${
                isVisible
                  ? "bg-red-500 hover:bg-red-600 text-white"
                  : "bg-green-500 hover:bg-green-600 text-white"
              }`}
            >
              {isVisible ? "Unmount Component" : "Mount Component"}
            </button>
            <button
              onClick={() => setLogs([])}
              className="px-4 py-2 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 rounded transition-colors text-slate-700 dark:text-slate-200"
            >
              Clear Logs
            </button>
          </div>

          <div className="min-h-[100px]">
            {isVisible && <UnmountableComponent onLog={addLog} />}
          </div>

          <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded">
            <h4 className="font-medium text-slate-900 dark:text-slate-100 mb-2">
              Event Log
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
            Common Use Cases:
          </h4>
          <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-300 space-y-1">
            <li>Canceling subscriptions</li>
            <li>Clearing intervals/timeouts</li>
            <li>Disconnecting from services</li>
            <li>Cleaning up resources</li>
          </ul>
        </div>

        {/* Instructions */}
        <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
          <p className="text-sm text-blue-600 dark:text-blue-400">
            Try mounting and unmounting the component to see how the cleanup
            function is called! 🧹
          </p>
        </div>
      </div>
    </div>
  );
};

export const Example: Story = {
  render: () => <UnmountExample />,
};
