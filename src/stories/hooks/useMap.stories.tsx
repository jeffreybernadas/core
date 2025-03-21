import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import useMap from "../../hooks/useMap";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useMap` is a hook that provides a Map-like state management with a convenient API.
 * It's useful for managing key-value pairs with stable actions and type safety.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useMap } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useMap } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = () => {
 *   const [map, { set, get, remove, reset }] = useMap({
 *     name: "John",
 *     age: 30,
 *   });
 *
 *   return (
 *     <div>
 *       <p>Name: {get("name")}</p>
 *       <button onClick={() => set("age", 31)}>
 *         Increment Age
 *       </button>
 *     </div>
 *   );
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * useMap<T extends object>(
 *   initialMap: T = {} as T
 * ): [T, Actions<T>]
 * ```
 *
 * ### Returns
 * ```tsx
 * [
 *   map: T,                                    // Current map state
 *   actions: {
 *     get: <K extends keyof T>(key: K) => T[K],    // Get value by key
 *     set: <K extends keyof T>(key: K, value: T[K]) => void,   // Set value by key
 *     setAll: (newMap: T) => void,            // Replace entire map
 *     remove: <K extends keyof T>(key: K) => void,  // Remove key from map
 *     reset: () => void                       // Reset to initial map
 *   }
 * ]
 * ```
 *
 * ### Features
 * - Type-safe: Fully typed with TypeScript
 * - Stable actions: Actions are memoized
 * - Immutable updates: State updates preserve immutability
 * - Familiar API: Similar to native Map interface
 * - Reset capability: Can reset to initial state
 *
 * ### Browser Compatibility
 * Uses standard JavaScript object operations.
 * Works in all modern browsers.
 *
 * ### Related Resources
 * - [MDN: Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
 * - [React State Management](https://reactjs.org/docs/hooks-state.html)
 */

const meta = {
  title: "Hooks/State Management/useMap",
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

interface User {
  name: string;
  age: number;
  email: string;
  preferences: {
    theme: "light" | "dark";
    notifications: boolean;
  };
}

export const Example: Story = {
  render: () => {
    // Initialize map with user data
    const [map, { get, set, setAll, remove, reset }] = useMap<User>({
      name: "John Doe",
      age: 30,
      email: "john@example.com",
      preferences: {
        theme: "light",
        notifications: true,
      },
    });

    // Form state
    const [newKey, setNewKey] = useState<keyof User>("name");
    const [newValue, setNewValue] = useState("");

    // Helper to safely set value based on key type
    const handleSetValue = () => {
      switch (newKey) {
        case "name":
        case "email":
          set(newKey, newValue);
          break;
        case "age":
          set(newKey, parseInt(newValue) || 0);
          break;
        case "preferences":
          try {
            const preferences = JSON.parse(newValue);
            set(newKey, preferences);
          } catch {
            alert("Invalid JSON for preferences");
          }
          break;
      }
      setNewValue("");
    };

    return (
      <div className="w-[600px]">
        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg space-y-6">
          {/* Current State */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Current State
            </h3>
            <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded">
              <pre className="text-sm text-slate-700 dark:text-slate-300">
                {JSON.stringify(map, null, 2)}
              </pre>
            </div>
          </div>

          {/* Set Value Form */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Set Value
            </h3>
            <div className="space-y-2">
              <select
                value={newKey}
                onChange={(e) => setNewKey(e.target.value as keyof User)}
                className="w-full px-3 py-2 border rounded text-slate-900 dark:text-slate-100 dark:bg-slate-700"
              >
                <option value="name">name</option>
                <option value="age">age</option>
                <option value="email">email</option>
                <option value="preferences">preferences</option>
              </select>
              <input
                type={newKey === "age" ? "number" : "text"}
                value={newValue}
                onChange={(e) => setNewValue(e.target.value)}
                placeholder={
                  newKey === "preferences"
                    ? '{"theme": "dark", "notifications": true}'
                    : `Enter new ${newKey}`
                }
                className="w-full px-3 py-2 border rounded text-slate-900 dark:text-slate-100 dark:bg-slate-700"
              />
              <button
                onClick={handleSetValue}
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
              >
                Set Value
              </button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Quick Actions
            </h3>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => set("age", get("age") + 1)}
                className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
              >
                Increment Age
              </button>
              <button
                onClick={() =>
                  set("preferences", {
                    ...get("preferences"),
                    theme:
                      get("preferences").theme === "light" ? "dark" : "light",
                  })
                }
                className="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600 text-sm"
              >
                Toggle Theme
              </button>
              <button
                onClick={() => remove("email")}
                className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 text-sm"
              >
                Remove Email
              </button>
              <button
                onClick={() =>
                  setAll({
                    name: "Jane Doe",
                    age: 25,
                    email: "jane@example.com",
                    preferences: {
                      theme: "dark",
                      notifications: false,
                    },
                  })
                }
                className="px-3 py-1 bg-indigo-500 text-white rounded hover:bg-indigo-600 text-sm"
              >
                Set All (New User)
              </button>
              <button
                onClick={reset}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
              >
                Reset
              </button>
            </div>
          </div>

          {/* Get Value Display */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Get Values
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Name:
                </p>
                <p className="font-mono text-slate-700 dark:text-slate-300">
                  {get("name")}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Age:
                </p>
                <p className="font-mono text-slate-700 dark:text-slate-300">
                  {get("age")}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Email:
                </p>
                <p className="font-mono text-slate-700 dark:text-slate-300">
                  {get("email")}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Theme:
                </p>
                <p className="font-mono text-slate-700 dark:text-slate-300">
                  {get("preferences").theme}
                </p>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
            <p className="text-sm text-blue-600 dark:text-blue-400">
              Try out the different map operations above! You can set individual
              values, update nested objects, remove keys, or reset to the
              initial state. Watch how the current state updates in real-time!
              🗺️
            </p>
          </div>
        </div>
      </div>
    );
  },
};
