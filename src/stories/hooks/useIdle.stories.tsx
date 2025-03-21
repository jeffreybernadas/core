import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useIdle } from "../../hooks";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useIdle` is a hook that detects when a user becomes idle (no interaction) for a specified period.
 * It's useful for implementing auto-logout, screen savers, or any feature that needs to respond to user inactivity.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useIdle } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useIdle } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = () => {
 *   const isIdle = useIdle(5000); // 5 seconds
 *
 *   useEffect(() => {
 *     if (isIdle) {
 *       console.log('User is idle, logging out...');
 *     }
 *   }, [isIdle]);
 *
 *   return <div>{isIdle ? 'User is idle' : 'User is active'}</div>;
 * };
 * ```
 *
 * ### Advanced Usage
 * ```tsx
 * const CustomIdleMonitor = () => {
 *   const isIdle = useIdle(3000, {
 *     events: ['mousemove', 'click'], // Only monitor these events
 *     initialState: false, // Start as not idle
 *   });
 *
 *   return (
 *     <div className={isIdle ? 'dimmed' : ''}>
 *       {isIdle ? 'Wake up!' : 'Working...'}
 *     </div>
 *   );
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * timeout: number // Time in milliseconds before considering user idle
 * options?: {
 *   events?: (keyof DocumentEventMap)[] // Events to monitor
 *   initialState?: boolean // Initial idle state
 * }
 * ```
 *
 * ### Returns
 * ```tsx
 * boolean // True if user is idle, false otherwise
 * ```
 *
 * ### Browser Compatibility
 * Uses standard DOM events and setTimeout:
 * - keypress
 * - mousemove
 * - touchmove
 * - click
 * - scroll
 * Supported in all modern browsers.
 *
 * ### Related Resources
 * - [MDN: Document Events](https://developer.mozilla.org/en-US/docs/Web/API/Document#events)
 * - [MDN: setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)
 */

const meta = {
  title: "Hooks/Browser API/useIdle",
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
    const [idleTime, setIdleTime] = useState(5000); // 5 seconds default
    const [lastActivity, setLastActivity] = useState(new Date());
    const isIdle = useIdle(idleTime);

    // Update last activity timestamp when not idle
    React.useEffect(() => {
      if (!isIdle) {
        setLastActivity(new Date());
      }
    }, [isIdle]);

    return (
      <div className="space-y-6 w-[400px]">
        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg space-y-4">
          {/* Status Display */}
          <div
            className={`text-center p-4 rounded-lg transition-colors ${
              isIdle
                ? "bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300"
                : "bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300"
            }`}
          >
            <div className="text-2xl mb-2">
              {isIdle ? "😴 User is Idle" : "👋 User is Active"}
            </div>
            <div className="text-sm opacity-75">
              Last activity: {lastActivity.toLocaleTimeString()}
            </div>
          </div>

          {/* Idle Timer Control */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
              Idle Timeout: {idleTime / 1000}s
            </label>
            <input
              type="range"
              min="1000"
              max="10000"
              step="1000"
              value={idleTime}
              onChange={(e) => setIdleTime(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400">
              <span>1s</span>
              <span>10s</span>
            </div>
          </div>

          {/* Activity Monitor */}
          <div className="bg-slate-100 dark:bg-slate-700/50 rounded p-4 space-y-2">
            <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Monitored Events:
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {["keypress", "mousemove", "touchmove", "click", "scroll"].map(
                (event) => (
                  <div
                    key={event}
                    className="px-2 py-1 bg-white dark:bg-slate-600 rounded flex items-center gap-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    {event}
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
            <p className="text-sm text-blue-600 dark:text-blue-400">
              Stop moving your mouse and wait for the idle timer! Adjust the
              slider to change how quickly the idle state triggers. Any
              interaction will reset the timer! ⏰
            </p>
          </div>
        </div>
      </div>
    );
  },
};
