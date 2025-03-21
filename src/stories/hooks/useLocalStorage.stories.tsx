import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { ThemeProvider } from "../../themes/shadcn";
/**
 * `useLocalStorage` is a hook that provides a way to persist state in the browser's localStorage.
 * It handles serialization/deserialization of values and provides a clean API similar to useState.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useLocalStorage } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useLocalStorage } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = () => {
 *   const [value, setValue, remove] = useLocalStorage("my-key", "initial value");
 *
 *   return (
 *     <div>
 *       <p>Value: {value}</p>
 *       <button onClick={() => setValue("new value")}>Update</button>
 *       <button onClick={remove}>Remove</button>
 *     </div>
 *   );
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * useLocalStorage<T>(
 *   key: string,
 *   initialValue?: T,
 *   options?: {
 *     raw: true;
 *   } | {
 *     raw: false;
 *     serializer: (value: T) => string;
 *     deserializer: (value: string) => T;
 *   }
 * ): [T | undefined, Dispatch<SetStateAction<T | undefined>>, () => void]
 * ```
 *
 * ### Returns
 * ```tsx
 * [
 *   state: T | undefined,           // Current value
 *   setState: (value: T) => void,   // Function to update value
 *   remove: () => void             // Function to remove value from localStorage
 * ]
 * ```
 *
 * ### Features
 * - Type-safe: Fully typed with TypeScript
 * - SSR compatible: Safe to use during server-side rendering
 * - Custom serialization: Support for custom serializer/deserializer
 * - Raw mode: Option to store values without JSON serialization
 * - Error handling: Gracefully handles storage errors (e.g. private browsing)
 *
 * ### Browser Compatibility
 * Uses the Web Storage API (localStorage).
 * Supported in all modern browsers.
 * Falls back gracefully when storage is not available.
 *
 * ### Related Resources
 * - [MDN: Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)
 * - [MDN: localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
 */
const meta = {
  title: "Hooks/Browser API/useLocalStorage",
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
    // Simple string example
    const [text, setText, removeText] = useLocalStorage<string>(
      "demo-text",
      "Hello World",
    );

    // Complex object example
    const [user, setUser, removeUser] = useLocalStorage<{
      name: string;
      age: number;
      preferences: { theme: string; notifications: boolean };
    }>("demo-user", {
      name: "John Doe",
      age: 30,
      preferences: { theme: "light", notifications: true },
    });

    // Raw storage example
    const [rawValue, setRawValue, removeRaw] = useLocalStorage<string>(
      "demo-raw",
      "raw-value",
      { raw: true },
    );

    // Custom serialization example
    const [date, setDate, removeDate] = useLocalStorage<Date>(
      "demo-date",
      new Date(),
      {
        raw: false,
        serializer: (v: Date) => v.toISOString(),
        deserializer: (v: string) => new Date(v),
      },
    );

    // Local state for form
    const [name, setName] = useState(user?.name || "");
    const [age, setAge] = useState(user?.age.toString() || "");

    return (
      <div className="w-[600px]">
        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg space-y-8">
          {/* Simple String Storage */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Simple String Storage
            </h3>
            <div className="space-y-2">
              <input
                type="text"
                value={text || ""}
                onChange={(e) => setText(e.target.value)}
                className="w-full px-3 py-2 border rounded text-slate-900 dark:text-slate-100 dark:bg-slate-700"
                placeholder="Enter text..."
              />
              <div className="flex space-x-2">
                <button
                  onClick={() => setText("Reset Value")}
                  className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
                >
                  Reset
                </button>
                <button
                  onClick={removeText}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>

          {/* Complex Object Storage */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Complex Object Storage
            </h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border rounded text-slate-900 dark:text-slate-100 dark:bg-slate-700"
                  placeholder="Name"
                />
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full px-3 py-2 border rounded text-slate-900 dark:text-slate-100 dark:bg-slate-700"
                  placeholder="Age"
                />
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() =>
                    setUser((prev) => ({
                      ...prev!,
                      name,
                      age: parseInt(age),
                    }))
                  }
                  className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
                >
                  Update User
                </button>
                <button
                  onClick={() =>
                    setUser((prev) => ({
                      ...prev!,
                      preferences: {
                        ...prev!.preferences,
                        theme:
                          prev!.preferences.theme === "light"
                            ? "dark"
                            : "light",
                      },
                    }))
                  }
                  className="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600 text-sm"
                >
                  Toggle Theme
                </button>
                <button
                  onClick={removeUser}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
                >
                  Remove User
                </button>
              </div>
              <div className="bg-slate-100 dark:bg-slate-700 p-3 rounded">
                <pre className="text-sm text-slate-700 dark:text-slate-300">
                  {JSON.stringify(user, null, 2)}
                </pre>
              </div>
            </div>
          </div>

          {/* Raw Storage */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Raw Storage
            </h3>
            <div className="space-y-2">
              <input
                type="text"
                value={rawValue || ""}
                onChange={(e) => setRawValue(e.target.value)}
                className="w-full px-3 py-2 border rounded text-slate-900 dark:text-slate-100 dark:bg-slate-700"
                placeholder="Raw value..."
              />
              <button
                onClick={removeRaw}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
              >
                Remove Raw
              </button>
            </div>
          </div>

          {/* Custom Serialization */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Custom Serialization (Date)
            </h3>
            <div className="space-y-2">
              <div className="bg-slate-100 dark:bg-slate-700 p-3 rounded">
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Stored Date: {date?.toLocaleString()}
                </p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => setDate(new Date())}
                  className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
                >
                  Update to Now
                </button>
                <button
                  onClick={removeDate}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
                >
                  Remove Date
                </button>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
            <p className="text-sm text-blue-600 dark:text-blue-400">
              Try the different storage examples above! The values persist even
              after page refresh. Open your browser&apos;s DevTools and check
              the &quot;Application&quot; tab {"->"} &quot;Local Storage&quot;
              to see the stored values. 🗄️
            </p>
          </div>
        </div>
      </div>
    );
  },
};
