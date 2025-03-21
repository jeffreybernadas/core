import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import useVibrate from "../../hooks/useVibrate";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useVibrate` is a hook that provides a way to control device vibration with patterns and looping.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useVibrate } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useVibrate } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = () => {
 *   const [isVibrating, setIsVibrating] = useState(false);
 *
 *   useVibrate(isVibrating, [200, 100, 200], false);
 *
 *   return (
 *     <button onClick={() => setIsVibrating(true)}>
 *       Vibrate Notification
 *     </button>
 *   );
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * useVibrate(
 *   enabled: boolean,       // Whether vibration is enabled
 *   pattern: number | number[], // Vibration pattern in milliseconds
 *   loop?: boolean = false  // Whether to loop the pattern
 * ): void
 * ```
 *
 * ### Returns
 * - No return value (void)
 *
 * ### Features
 * - Single or pattern vibration
 * - Optional pattern looping
 * - Pattern visualization
 * - SSR compatible
 * - Type-safe
 *
 * ### Browser Compatibility
 * Compatible with browsers and devices that support:
 * - Vibration API (navigator.vibrate)
 *
 * ### Related Resources
 * - [Vibration API](https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API)
 * - [Navigator.vibrate()](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/vibrate)
 */

const meta = {
  title: "Hooks/Browser API/useVibrate",
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

const VibrateExample = () => {
  const [isVibrating, setIsVibrating] = useState(false);
  const [selectedPattern, setSelectedPattern] = useState<
    "single" | "sos" | "heartbeat" | "notification"
  >("single");

  // Different vibration patterns
  const patterns = {
    single: 1000, // Simple 1-second vibration
    sos: [
      100, 100, 100, 100, 100, 200, 200, 100, 200, 100, 200, 100, 100, 100, 100,
      100,
    ], // SOS in Morse code
    heartbeat: [200, 400, 200, 800], // Heartbeat pattern
    notification: [200, 100, 200], // Standard notification
  };

  // Use the hook with the selected pattern
  useVibrate(isVibrating, patterns[selectedPattern], false);

  const patternDescriptions = {
    single: "One second continuous vibration",
    sos: "SOS pattern in Morse code",
    heartbeat: "Simulated heartbeat pattern",
    notification: "Standard notification pattern",
  };

  return (
    <div className="w-[500px]">
      <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            Vibration Patterns Demo
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Explore different vibration patterns on your device
          </p>
        </div>

        <div className="space-y-4">
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded">
            <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
              ⚠️ Device Support Notice
            </h4>
            <p className="text-sm text-yellow-700 dark:text-yellow-300">
              This demo requires a device that supports the Vibration API. Most
              mobile devices support vibration, but desktop computers typically
              don't.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {(Object.keys(patterns) as Array<keyof typeof patterns>).map(
              (pattern) => (
                <button
                  key={pattern}
                  onClick={() => {
                    setSelectedPattern(pattern);
                    setIsVibrating(true);
                    // Automatically stop after pattern completes
                    const duration = Array.isArray(patterns[pattern])
                      ? (patterns[pattern] as number[]).reduce(
                          (a, b) => a + b,
                          0,
                        )
                      : (patterns[pattern] as number);
                    setTimeout(() => setIsVibrating(false), duration);
                  }}
                  className={`p-4 rounded transition-colors ${
                    selectedPattern === pattern
                      ? "bg-blue-500 text-white"
                      : "bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-900 dark:text-slate-100"
                  }`}
                >
                  <div className="font-medium mb-1">
                    {pattern.charAt(0).toUpperCase() + pattern.slice(1)}
                  </div>
                  <div className="text-sm opacity-80">
                    {patternDescriptions[pattern]}
                  </div>
                </button>
              ),
            )}
          </div>

          <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded">
            <h4 className="font-medium text-slate-900 dark:text-slate-100 mb-2">
              Pattern Visualization
            </h4>
            <div className="flex items-center gap-2 h-8 overflow-hidden">
              {Array.isArray(patterns[selectedPattern]) ? (
                (patterns[selectedPattern] as number[]).map(
                  (duration, index) => (
                    <div
                      key={index}
                      className={`h-full rounded transition-opacity ${
                        index % 2 === 0 ? "bg-blue-500" : "bg-transparent"
                      } ${isVibrating ? "opacity-100" : "opacity-50"}`}
                      style={{
                        width: `${Math.max(duration / 20, 4)}px`,
                      }}
                    />
                  ),
                )
              ) : (
                <div
                  className={`h-full bg-blue-500 rounded transition-opacity ${isVibrating ? "opacity-100" : "opacity-50"}`}
                  style={{
                    width: `${Math.max((patterns[selectedPattern] as number) / 20, 4)}px`,
                  }}
                />
              )}
            </div>
          </div>

          <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded space-y-2">
            <h4 className="font-medium text-slate-900 dark:text-slate-100">
              Pattern Types:
            </h4>
            <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-300 space-y-1">
              <li>Single number: Duration in milliseconds</li>
              <li>Array of numbers: Alternating vibrate/pause durations</li>
              <li>Vibration stops automatically after pattern completes</li>
              <li>Not all devices support vibration</li>
            </ul>
          </div>

          {/* Instructions */}
          <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
            <p className="text-sm text-blue-600 dark:text-blue-400">
              Select a pattern to feel different vibration effects on your
              device! 📳
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Example: Story = {
  render: () => <VibrateExample />,
};
