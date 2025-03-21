import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import useSessionStorage from "../../hooks/useSessionStorage";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useSessionStorage` is a hook that manages state in sessionStorage, persisting data across page refreshes but clearing it when the browser session ends.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useSessionStorage } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useSessionStorage } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = () => {
 *   const [value, setValue] = useSessionStorage('my-key', 'default value');
 *   return (
 *     <div>
 *       <p>Stored value: {value}</p>
 *       <button onClick={() => setValue('new value')}>Update</button>
 *     </div>
 *   );
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * useSessionStorage<T>(
 *   key: string,      // Storage key to use
 *   initialValue?: T, // Initial value if no value exists
 *   raw?: boolean     // If true, values are stored as-is without JSON parsing
 * ): [T, (value: T) => void]
 * ```
 *
 * ### Returns
 * - Returns a tuple containing the current value and a setter function
 *
 * ### Browser Compatibility
 * - Uses Web Storage API (sessionStorage)
 * - Falls back gracefully in private browsing mode
 *
 * ### Related Resources
 * - [Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)
 * - [sessionStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage)
 */

const meta = {
  title: "Hooks/Browser API/useSessionStorage",
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

interface UserPreferences {
  theme: "light" | "dark";
  fontSize: number;
  notifications: boolean;
}

const initialPreferences: UserPreferences = {
  theme: "light",
  fontSize: 16,
  notifications: true,
};

const SessionStorageExample = () => {
  const [preferences, setPreferences] = useSessionStorage<UserPreferences>(
    "user-preferences",
    initialPreferences,
  );

  const [simpleValue, setSimpleValue] = useSessionStorage<string>(
    "simple-value",
    "",
    true, // Using raw mode for simple string storage
  );

  const updateTheme = () => {
    setPreferences({
      ...preferences,
      theme: preferences.theme === "light" ? "dark" : "light",
    });
  };

  const updateFontSize = (size: number) => {
    setPreferences({
      ...preferences,
      fontSize: size,
    });
  };

  const toggleNotifications = () => {
    setPreferences({
      ...preferences,
      notifications: !preferences.notifications,
    });
  };

  return (
    <div className="space-y-6 w-[500px]">
      <h3 className="text-lg font-semibold">Session Storage State Manager</h3>

      <div className="space-y-4">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">
            Simple String Storage (Raw)
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={simpleValue}
              onChange={(e) => setSimpleValue(e.target.value)}
              placeholder="Enter text..."
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-medium">Complex Object Storage (JSON)</p>

          <div className="flex items-center gap-4">
            <button
              onClick={updateTheme}
              className="px-4 py-2 text-sm font-semibold rounded-md bg-primary text-primary-foreground shadow hover:bg-primary/90"
            >
              Toggle Theme
            </button>
            <span className="text-sm">Current: {preferences.theme}</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => updateFontSize(preferences.fontSize - 1)}
                className="px-3 py-1 text-sm font-semibold rounded-md bg-secondary text-secondary-foreground shadow hover:bg-secondary/90"
              >
                -
              </button>
              <button
                onClick={() => updateFontSize(preferences.fontSize + 1)}
                className="px-3 py-1 text-sm font-semibold rounded-md bg-secondary text-secondary-foreground shadow hover:bg-secondary/90"
              >
                +
              </button>
            </div>
            <span className="text-sm">Font Size: {preferences.fontSize}px</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleNotifications}
              className="px-4 py-2 text-sm font-semibold rounded-md bg-primary text-primary-foreground shadow hover:bg-primary/90"
            >
              Toggle Notifications
            </button>
            <span className="text-sm">
              {preferences.notifications ? "Enabled" : "Disabled"}
            </span>
          </div>
        </div>

        <div className="p-4 bg-muted rounded-md">
          <p className="text-sm font-medium">Current Storage State:</p>
          <div className="mt-2 space-y-2">
            <pre className="text-sm">
              {JSON.stringify(preferences, null, 2)}
            </pre>
            <p className="text-sm">Simple Value: "{simpleValue}"</p>
          </div>
        </div>
      </div>

      <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
        <p className="text-sm text-blue-600 dark:text-blue-400">
          Try changing values and refresh the page - they'll persist in your
          session! 💾
        </p>
      </div>
    </div>
  );
};

export const Example: Story = {
  render: () => <SessionStorageExample />,
};
