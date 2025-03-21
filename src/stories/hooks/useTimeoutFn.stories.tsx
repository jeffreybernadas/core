import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import useTimeoutFn from "../../hooks/useTimeoutFn";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useTimeoutFn` is a hook that provides a controlled way to handle delayed function execution with the ability to check status and cancel.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useTimeoutFn } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useTimeoutFn } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = () => {
 *   const [isReady, clear, set] = useTimeoutFn(() => {
 *     console.log('Executed after delay!');
 *   }, 1000);
 *
 *   return (
 *     <div>
 *       <button onClick={set}>Start Timer</button>
 *       <button onClick={clear}>Cancel</button>
 *       <div>Ready: {String(isReady())}</div>
 *     </div>
 *   );
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * useTimeoutFn(
 *   fn: Function,    // Function to execute after delay
 *   ms?: number = 0  // Delay in milliseconds
 * ): [
 *   () => boolean | null,  // Check if ready
 *   () => void,           // Clear timeout
 *   () => void            // Set/reset timeout
 * ]
 * ```
 *
 * ### Returns
 * - Returns a tuple containing:
 *   1. Function to check if timeout is ready
 *   2. Function to clear the timeout
 *   3. Function to set/reset the timeout
 *
 * ### Browser Compatibility
 * - Uses standard setTimeout API
 * - Works in all modern browsers
 *
 * ### Related Resources
 * - [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)
 */

const meta = {
  title: "Hooks/Utility/useTimeoutFn",
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

interface NotificationState {
  id: number;
  message: string;
  timestamp: number;
}

const TimeoutFnExample = () => {
  const [delay, setDelay] = useState(2000);
  const [notifications, setNotifications] = useState<NotificationState[]>([]);
  const [message, setMessage] = useState("This is a delayed notification!");

  const addNotification = (msg: string) => {
    const newNotification = {
      id: Date.now(),
      message: msg,
      timestamp: Date.now(),
    };
    setNotifications((prev) => [newNotification, ...prev.slice(0, 4)]);
  };

  const [isReady, clear, set] = useTimeoutFn(() => {
    addNotification(message);
  }, delay);

  const status = isReady();

  const startTimer = () => {
    addNotification("⏰ Timer started!");
    set();
  };

  const cancelTimer = () => {
    addNotification("❌ Timer cancelled!");
    clear();
  };

  return (
    <div className="space-y-6 w-[500px]">
      <h3 className="text-lg font-semibold">Delayed Notification Demo</h3>

      <div className="space-y-4">
        {/* Controls */}
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Notification Message</label>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Enter notification message..."
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Delay: {delay}ms</label>
            <input
              type="range"
              min="500"
              max="5000"
              step="500"
              value={delay}
              onChange={(e) => setDelay(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div className="flex gap-2">
            <button
              onClick={startTimer}
              className="px-4 py-2 text-sm font-semibold rounded-md bg-primary text-primary-foreground shadow hover:bg-primary/90"
            >
              Start Timer
            </button>
            <button
              onClick={cancelTimer}
              className="px-4 py-2 text-sm font-semibold rounded-md bg-destructive text-white shadow hover:bg-destructive/90"
            >
              Cancel
            </button>
          </div>
        </div>

        {/* Status */}
        <div className="p-4 bg-muted rounded-md">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Status:</span>
            <span className="text-sm">
              {status === true && "Ready ✅"}
              {status === false && "Pending ⏳"}
              {status === null && "Idle ⏸️"}
            </span>
          </div>
        </div>

        {/* Notification History */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Notification History</h4>
          <div className="space-y-2">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="p-3 bg-muted rounded-md text-sm"
              >
                <div className="flex justify-between items-start gap-2">
                  <p>{notification.message}</p>
                  <span className="text-xs text-muted-foreground">
                    {new Date(notification.timestamp).toLocaleTimeString()}
                  </span>
                </div>
              </div>
            ))}
            {notifications.length === 0 && (
              <p className="text-sm text-muted-foreground">
                No notifications yet...
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
        <p className="text-sm text-blue-600 dark:text-blue-400">
          Set a message and delay, then start the timer to see delayed
          notifications! ⏲️
        </p>
      </div>
    </div>
  );
};

export const Example: Story = {
  render: () => <TimeoutFnExample />,
};
