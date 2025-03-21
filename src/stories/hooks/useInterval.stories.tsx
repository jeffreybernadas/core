import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useInterval } from "../../hooks";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useInterval` is a hook that provides a declarative way to handle setInterval with automatic cleanup.
 * It's useful for creating timers, animations, or any recurring task with a fixed time interval.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useInterval } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useInterval } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = () => {
 *   const [count, setCount] = useState(0);
 *   const { start, stop } = useInterval(
 *     () => setCount(c => c + 1),
 *     1000
 *   );
 *
 *   return (
 *     <div>
 *       Count: {count}
 *       <button onClick={start}>Start</button>
 *       <button onClick={stop}>Stop</button>
 *     </div>
 *   );
 * };
 * ```
 *
 * ### Advanced Usage
 * ```tsx
 * const AutoStartTimer = () => {
 *   const [time, setTime] = useState(new Date());
 *   useInterval(
 *     () => setTime(new Date()),
 *     1000,
 *     { autoInvoke: true }
 *   );
 *
 *   return <div>Current time: {time.toLocaleTimeString()}</div>;
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * fn: () => void // Function to be called at each interval
 * interval: number // Interval duration in milliseconds
 * options?: {
 *   autoInvoke?: boolean // Start interval automatically on mount
 * }
 * ```
 *
 * ### Returns
 * ```tsx
 * {
 *   start: () => void // Start the interval
 *   stop: () => void // Stop the interval
 *   toggle: () => void // Toggle between start and stop
 *   active: boolean // Current interval state
 * }
 * ```
 *
 * ### Browser Compatibility
 * Uses standard Web APIs:
 * - setInterval
 * - clearInterval
 * Supported in all modern browsers.
 *
 * ### Related Resources
 * - [MDN: setInterval](https://developer.mozilla.org/en-US/docs/Web/API/setInterval)
 * - [MDN: clearInterval](https://developer.mozilla.org/en-US/docs/Web/API/clearInterval)
 */

const meta = {
  title: "Hooks/Utility/useInterval",
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
    // Counter example
    const [count, setCount] = useState(0);
    const {
      start: startCounter,
      stop: stopCounter,
      active: counterActive,
    } = useInterval(() => setCount((c) => c + 1), 1000);

    // Color cycle example
    const [hue, setHue] = useState(0);
    const {
      start: startColor,
      stop: stopColor,
      active: colorActive,
    } = useInterval(() => setHue((h) => (h + 1) % 360), 50);

    // Digital clock example
    const [time, setTime] = useState(new Date());
    useInterval(() => setTime(new Date()), 1000, { autoInvoke: true });

    // Progress bar example
    const [progress, setProgress] = useState(0);
    const {
      start: startProgress,
      stop: stopProgress,
      active: progressActive,
    } = useInterval(() => setProgress((p) => (p >= 100 ? 0 : p + 1)), 50);

    return (
      <div className="w-[400px]">
        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg space-y-6">
          {/* Counter Example */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Basic Counter
            </h3>
            <div className="flex items-center justify-between bg-slate-100 dark:bg-slate-700 p-4 rounded">
              <div className="text-2xl font-mono text-slate-700 dark:text-slate-300">
                {count}
              </div>
              <div className="space-x-2">
                <button
                  onClick={counterActive ? stopCounter : startCounter}
                  className={`px-4 py-2 rounded ${
                    counterActive
                      ? "bg-red-500 hover:bg-red-600"
                      : "bg-green-500 hover:bg-green-600"
                  } text-white transition-colors`}
                >
                  {counterActive ? "Stop" : "Start"}
                </button>
              </div>
            </div>
          </div>

          {/* Color Cycle Example */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Color Cycle
            </h3>
            <div
              className="h-16 rounded transition-colors cursor-pointer"
              style={{ backgroundColor: `hsl(${hue}, 70%, 50%)` }}
              onClick={colorActive ? stopColor : startColor}
            >
              <div className="h-full flex items-center justify-center text-white font-medium">
                {colorActive ? "Click to Stop" : "Click to Start"}
              </div>
            </div>
          </div>

          {/* Digital Clock Example */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Auto-starting Clock
            </h3>
            <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded text-center">
              <div className="text-2xl font-mono text-slate-700 dark:text-slate-300">
                {time.toLocaleTimeString()}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Updates automatically
              </div>
            </div>
          </div>

          {/* Progress Bar Example */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Progress Bar
            </h3>
            <div className="space-y-2">
              <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded overflow-hidden">
                <div
                  className="h-full bg-blue-500 transition-all duration-100"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  {progress}%
                </span>
                <button
                  onClick={progressActive ? stopProgress : startProgress}
                  className={`px-3 py-1 rounded text-sm ${
                    progressActive
                      ? "bg-red-500 hover:bg-red-600"
                      : "bg-blue-500 hover:bg-blue-600"
                  } text-white transition-colors`}
                >
                  {progressActive ? "Stop" : "Start"}
                </button>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
            <p className="text-sm text-blue-600 dark:text-blue-400">
              Try each example! Start/stop the counter, watch the color cycle,
              check the auto-updating clock, and control the progress bar. Each
              demonstrates a different way to use intervals! ⏱️
            </p>
          </div>
        </div>
      </div>
    );
  },
};
