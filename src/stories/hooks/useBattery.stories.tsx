import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useBattery } from "../../hooks";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useBattery` is a hook that provides access to the Battery Status API.
 * It's useful for monitoring device battery status and implementing power-aware features.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useBattery } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useBattery } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = () => {
 *   const battery = useBattery();
 *
 *   if (!battery.isSupported) {
 *     return <div>Battery API is not supported</div>;
 *   }
 *
 *   if (!battery.fetched) {
 *     return <div>Loading battery status...</div>;
 *   }
 *
 *   return (
 *     <div>
 *       <div>Level: {battery.level * 100}%</div>
 *       <div>Charging: {battery.charging ? "Yes" : "No"}</div>
 *     </div>
 *   );
 * };
 * ```
 *
 * ### Returns
 * - UseBatteryState: One of three possible states:
 *   1. { isSupported: false } - Battery API is not supported
 *   2. { isSupported: true, fetched: false } - API supported but not fetched yet
 *   3. {
 *        isSupported: true,
 *        fetched: true,
 *        level: number, // Battery level (0 to 1)
 *        charging: boolean, // Whether device is charging
 *        chargingTime: number, // Seconds until charged
 *        dischargingTime: number // Seconds until empty
 *      }
 *
 * ### Browser Compatibility
 * Battery Status API is supported in:
 * - Chrome 38+
 * - Firefox 31+
 * - Opera 25+
 * Not supported in Safari or IE.
 *
 * ### Related Resources
 * - [MDN: Battery Status API](https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API)
 * - [W3C: Battery Status API](https://w3c.github.io/battery/)
 */

const meta = {
  title: "Hooks/Browser API/useBattery",
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
    const battery = useBattery();

    return (
      <div className="space-y-6 max-w-lg">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">
            Battery Status Monitor
          </h3>
          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            {!battery.isSupported ? (
              <div className="flex items-center justify-center p-4 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 rounded">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                Battery API is not supported in your browser
              </div>
            ) : !battery.fetched ? (
              <div className="flex items-center justify-center p-4">
                <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
                <span className="ml-2 text-slate-600 dark:text-slate-400">
                  Loading battery status...
                </span>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Battery Level Indicator */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-400">
                    <span>Battery Level</span>
                    <span>{Math.round(battery.level * 100)}%</span>
                  </div>
                  <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-300 rounded-full ${
                        battery.level > 0.2
                          ? battery.charging
                            ? "bg-green-500"
                            : "bg-blue-500"
                          : "bg-red-500"
                      }`}
                      style={{ width: `${battery.level * 100}%` }}
                    />
                  </div>
                </div>

                {/* Charging Status */}
                <div className="flex items-center space-x-2 text-sm">
                  <div
                    className={`w-3 h-3 rounded-full ${battery.charging ? "bg-green-500" : "bg-slate-400"}`}
                  />
                  <span className="text-slate-700 dark:text-slate-300">
                    {battery.charging ? "Charging" : "Not Charging"}
                  </span>
                </div>

                {/* Time Estimates */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <div className="text-sm text-slate-500 dark:text-slate-400">
                      Time until charged
                    </div>
                    <div className="text-slate-700 dark:text-slate-300">
                      {battery.charging
                        ? battery.chargingTime === Infinity
                          ? "Calculating..."
                          : formatTime(battery.chargingTime)
                        : "Not charging"}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-slate-500 dark:text-slate-400">
                      Time until empty
                    </div>
                    <div className="text-slate-700 dark:text-slate-300">
                      {!battery.charging
                        ? battery.dischargingTime === Infinity
                          ? "Calculating..."
                          : formatTime(battery.dischargingTime)
                        : "Plugged in"}
                    </div>
                  </div>
                </div>

                {/* Power Saving Tips */}
                {battery.level <= 0.2 && !battery.charging && (
                  <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded text-sm text-red-600 dark:text-red-400">
                    <div className="font-medium">Low Battery Warning</div>
                    <div className="mt-1">
                      Consider enabling power saving mode or connecting your
                      charger.
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
          <p className="text-sm text-blue-600 dark:text-blue-400">
            Connect/disconnect your device's charger to see the battery status
            update in real-time! Note: This feature requires browser support for
            the Battery API. 🔋
          </p>
        </div>
      </div>
    );
  },
};

// Helper function to format time in HH:MM
const formatTime = (seconds: number) => {
  if (!Number.isFinite(seconds) || seconds === 0) return "Unknown";
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  return `${hours}h ${minutes}m`;
};
