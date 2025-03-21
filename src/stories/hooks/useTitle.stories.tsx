import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import useTitle from "../../hooks/useTitle";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useTitle` is a hook that updates the document title and optionally restores it when the component unmounts.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useTitle } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useTitle } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = () => {
 *   const [count, setCount] = useState(0);
 *   useTitle(`Notifications (${count})`);
 *
 *   return (
 *     <button onClick={() => setCount(c => c + 1)}>
 *       Increment Notifications
 *     </button>
 *   );
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * useTitle(
 *   title: string,
 *   options?: {
 *     restoreOnUnmount?: boolean // Whether to restore the previous title on unmount
 *   }
 * ): void
 * ```
 *
 * ### Returns
 * - No return value (void)
 *
 * ### Features
 * - Updates document title dynamically
 * - Optional title restoration on unmount
 * - Handles cleanup automatically
 * - Zero dependencies
 * - SSR compatible
 *
 * ### Browser Compatibility
 * Compatible with all browsers that support document.title.
 *
 * ### Related Resources
 * - [MDN: Document Title](https://developer.mozilla.org/en-US/docs/Web/API/Document/title)
 * - [React Effects](https://react.dev/learn/synchronizing-with-effects)
 */

const meta = {
  title: "Hooks/Browser API/useTitle",
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

const NotificationsComponent = ({
  count,
  setCount,
}: {
  count: number;
  setCount: (n: number) => void;
}) => {
  useTitle(`(${count}) Notifications | My App`, { restoreOnUnmount: true });

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Add Notification
        </button>
        <div className="text-lg text-slate-700 dark:text-slate-200">
          Notifications: <span className="font-bold">{count}</span>
        </div>
      </div>
    </div>
  );
};

const MessagesComponent = ({
  count,
  setCount,
}: {
  count: number;
  setCount: (n: number) => void;
}) => {
  useTitle(`(${count}) Messages | My App`);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        >
          Add Message
        </button>
        <div className="text-lg text-slate-700 dark:text-slate-200">
          Messages: <span className="font-bold">{count}</span>
        </div>
      </div>
    </div>
  );
};

const TitleExample = () => {
  const [notifications, setNotifications] = useState(0);
  const [messages, setMessages] = useState(0);
  const [showNotifications, setShowNotifications] = useState(true);

  return (
    <div className="w-[500px]">
      <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            Dynamic Document Title
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Watch how the document title updates based on component state
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex gap-4">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className={`px-4 py-2 rounded transition-colors ${
                showNotifications
                  ? "bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300"
                  : "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300"
              }`}
            >
              Switch to {showNotifications ? "Messages" : "Notifications"}
            </button>
          </div>

          {showNotifications ? (
            <NotificationsComponent
              count={notifications}
              setCount={setNotifications}
            />
          ) : (
            <MessagesComponent count={messages} setCount={setMessages} />
          )}

          <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded">
            <h4 className="font-medium text-slate-900 dark:text-slate-100 mb-2">
              Current State
            </h4>
            <div className="space-y-2 text-sm">
              <div className="text-slate-600 dark:text-slate-300">
                Showing:{" "}
                <span className="font-medium">
                  {showNotifications ? "Notifications" : "Messages"}
                </span>
              </div>
              <div className="text-slate-600 dark:text-slate-300">
                Document Title:{" "}
                <span className="font-mono">{document.title}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded space-y-2">
          <h4 className="font-medium text-slate-900 dark:text-slate-100">
            Component Features:
          </h4>
          <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-300 space-y-1">
            <li>Notifications restore title on unmount</li>
            <li>Messages don't restore previous title</li>
            <li>Title updates in real-time</li>
            <li>Counts are preserved when switching</li>
          </ul>
        </div>

        {/* Instructions */}
        <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
          <p className="text-sm text-blue-600 dark:text-blue-400">
            Try switching between components and adding notifications/messages.
            Watch your browser tab title change! 📝
          </p>
        </div>
      </div>
    </div>
  );
};

export const Example: Story = {
  render: () => <TitleExample />,
};
