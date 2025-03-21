import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import usePageLeave from "../../hooks/usePageLeave";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `usePageLeave` is a hook that detects when the user's mouse leaves the page.
 * It's useful for showing exit-intent popups, saving unsaved changes, or tracking user behavior.
 *
 * ### Module Federation Import
 * ```tsx
 * import { usePageLeave } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { usePageLeave } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = () => {
 *   usePageLeave(() => {
 *     console.log("User is leaving the page!");
 *   });
 *
 *   return <div>Move your mouse outside the page to trigger the callback</div>;
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * usePageLeave(
 *   onPageLeave: () => void, // Callback function when user leaves page
 *   args?: unknown[] = [] // Dependencies array for the effect
 * ): void
 * ```
 *
 * ### Returns
 * ```tsx
 * void
 * ```
 *
 * ### Browser Compatibility
 * Uses standard mouseout event.
 * Compatible with all modern browsers.
 *
 * ### Related Resources
 * - [MDN: mouseout event](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseout_event)
 * - [MDN: relatedTarget](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/relatedTarget)
 */

const meta = {
  title: "Hooks/Event & Interaction/usePageLeave",
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

const PageLeaveExample = () => {
  const [leaveCount, setLeaveCount] = useState(0);
  const [lastLeaveTime, setLastLeaveTime] = useState<Date | null>(null);
  const [showNotification, setShowNotification] = useState(false);

  usePageLeave(() => {
    setLeaveCount((prev) => prev + 1);
    setLastLeaveTime(new Date());
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  });

  return (
    <div className="w-[400px] space-y-6">
      {/* Main Content Area */}
      <div className="relative h-60 bg-slate-100 dark:bg-slate-800 rounded-lg p-6">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-2">
            <div className="text-6xl">🖱️</div>
            <div className="text-sm font-medium text-slate-600 dark:text-slate-400">
              Move your mouse outside this area
            </div>
          </div>
        </div>

        {/* Notification */}
        <div
          className={`
            absolute top-4 left-1/2 -translate-x-1/2 
            bg-blue-500 text-white px-4 py-2 rounded-full
            transition-all duration-300 transform
            ${showNotification ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}
          `}
        >
          🐁 left the page!
        </div>
      </div>

      {/* Stats Panel */}
      <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-3">Page Leave Stats</h3>
        <div className="space-y-2">
          {/* Leave Count */}
          <div className="flex justify-between items-center">
            <span className="text-sm text-slate-600 dark:text-slate-400">
              Times Left
            </span>
            <span className="font-mono text-lg font-bold text-blue-500">
              {leaveCount}
            </span>
          </div>

          {/* Last Leave Time */}
          <div className="flex justify-between items-center">
            <span className="text-sm text-slate-600 dark:text-slate-400">
              Last Leave
            </span>
            <span className="font-mono text-sm">
              {lastLeaveTime ? lastLeaveTime.toLocaleTimeString() : "Not yet"}
            </span>
          </div>
        </div>
      </div>

      {/* Border Indicators */}
      <div className="relative h-1">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />
      </div>

      {/* Instructions */}
      <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
        <p className="text-sm text-blue-600 dark:text-blue-400">
          Move your mouse cursor outside the browser window to see the page
          leave detection in action! 🚪
        </p>
      </div>
    </div>
  );
};

export const Example: Story = {
  render: () => <PageLeaveExample />,
};
