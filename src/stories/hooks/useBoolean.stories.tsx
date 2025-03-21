import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useBoolean } from "../../hooks";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useBoolean` is a hook that manages boolean state with convenient toggle functionality.
 * It's an alias for useToggle, providing a simple way to handle boolean states and their transitions.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useBoolean } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useBoolean } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = () => {
 *   const [isOpen, setIsOpen] = useBoolean(false);
 *
 *   return (
 *     <div>
 *       <button onClick={() => setIsOpen()}>Toggle Modal</button>
 *       {isOpen && <div>Modal Content</div>}
 *     </div>
 *   );
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * useBoolean(
 *   initialValue: boolean // Initial boolean state
 * ): [boolean, (nextValue?: boolean | undefined) => void]
 * ```
 *
 * ### Returns
 * A tuple containing:
 * - state: boolean - Current boolean state
 * - setState: (nextValue?: boolean | undefined) => void
 *   - When called with no arguments, toggles the state
 *   - When called with a boolean, sets the state to that value
 *
 * ### Browser Compatibility
 * Uses standard React hooks, supported in all modern browsers.
 */

const meta = {
  title: "Hooks/State Management/useBoolean",
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
    const [isModalOpen, setIsModalOpen] = useBoolean(false);
    const [isDarkMode, setIsDarkMode] = useBoolean(false);
    const [isNotificationsEnabled, setIsNotificationsEnabled] =
      useBoolean(true);

    return (
      <div className="space-y-6 max-w-lg">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">
            Boolean State Examples
          </h3>
          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <div className="space-y-6">
              {/* Modal Example */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Modal
                  </span>
                  <button
                    onClick={() => setIsModalOpen()}
                    className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors"
                  >
                    {isModalOpen ? "Close Modal" : "Open Modal"}
                  </button>
                </div>
                {isModalOpen && (
                  <div className="bg-white dark:bg-slate-700 rounded-md p-4 shadow-lg border border-slate-200 dark:border-slate-600">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-sm font-medium text-slate-900 dark:text-slate-100">
                        Modal Content
                      </h4>
                      <button
                        onClick={() => setIsModalOpen(false)}
                        className="text-slate-400 hover:text-slate-500 dark:text-slate-500 dark:hover:text-slate-400"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      This is a simple modal example using useBoolean.
                    </p>
                  </div>
                )}
              </div>

              {/* Notifications Toggle Example */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  Notifications
                </span>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setIsNotificationsEnabled()}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      isNotificationsEnabled
                        ? "bg-green-500"
                        : "bg-slate-300 dark:bg-slate-600"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        isNotificationsEnabled
                          ? "translate-x-6"
                          : "translate-x-1"
                      }`}
                    />
                  </button>
                  <span className="text-sm text-slate-700 dark:text-slate-300">
                    {isNotificationsEnabled ? "Enabled" : "Disabled"}
                  </span>
                </div>
              </div>

              {/* Force Value Example */}
              <div className="space-y-2">
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Force Value Controls
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setIsNotificationsEnabled(true)}
                    className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white text-sm rounded"
                  >
                    Force Enable
                  </button>
                  <button
                    onClick={() => setIsNotificationsEnabled(false)}
                    className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-sm rounded"
                  >
                    Force Disable
                  </button>
                </div>
              </div>

              {/* Instructions */}
              <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
                <p className="text-sm text-blue-600 dark:text-blue-400">
                  Play around the boolean state with the buttons/ modal above.
                  🟢-🔴
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
};
