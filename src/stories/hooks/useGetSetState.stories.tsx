import React, { useCallback } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import useGetSetState from "../../hooks/useGetSetState";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useGetSetState` is a hook that provides get and set functions for managing object state.
 * Similar to useGetSet but specifically designed for object states with partial updates.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useGetSetState } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useGetSetState } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = () => {
 *   const [getState, setState] = useGetSetState({
 *     name: "John",
 *     age: 25,
 *   });
 *
 *   const updateAge = () => {
 *     setState({ age: getState().age + 1 });
 *   };
 *
 *   return (
 *     <div>
 *       <p>Name: {getState().name}</p>
 *       <p>Age: {getState().age}</p>
 *       <button onClick={updateAge}>Increment Age</button>
 *     </div>
 *   );
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * useGetSetState<T extends object>(
 *   initialState: T = {} as T // Initial object state
 * ): [
 *   () => T, // Function to get current state
 *   (patch: Partial<T>) => void // Function to merge patch with current state
 * ]
 * ```
 *
 * ### Returns
 * ```tsx
 * [
 *   get: () => T, // Function to get current state
 *   set: (patch: Partial<T>) => void // Function to merge patch with current state
 * ]
 * ```
 */

const meta = {
  title: "Hooks/State Management/useGetSetState",
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

interface UserProfile {
  name: string;
  age: number;
  email: string;
  preferences: {
    theme: "light" | "dark";
    notifications: boolean;
  };
  lastUpdated: Date;
}

export const Example: Story = {
  render: () => {
    // Initialize with a complex object state
    const [getProfile, setProfile] = useGetSetState<UserProfile>({
      name: "John Doe",
      age: 25,
      email: "john@example.com",
      preferences: {
        theme: "light",
        notifications: true,
      },
      lastUpdated: new Date(),
    });

    // Example 1: Update a single field
    const updateAge = useCallback(() => {
      setProfile({ age: getProfile().age + 1 });
    }, []);

    // Example 2: Update multiple fields
    const updateNameAndEmail = useCallback(() => {
      setProfile({
        name: "Jane Doe",
        email: "jane@example.com",
        lastUpdated: new Date(),
      });
    }, []);

    // Example 3: Update nested object
    const toggleTheme = useCallback(() => {
      const currentTheme = getProfile().preferences.theme;
      setProfile({
        preferences: {
          ...getProfile().preferences,
          theme: currentTheme === "light" ? "dark" : "light",
        },
        lastUpdated: new Date(),
      });
    }, []);

    // Example 4: Toggle notifications
    const toggleNotifications = useCallback(() => {
      const currentPreferences = getProfile().preferences;
      setProfile({
        preferences: {
          ...currentPreferences,
          notifications: !currentPreferences.notifications,
        },
        lastUpdated: new Date(),
      });
    }, []);

    return (
      <div className="w-[400px]">
        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg space-y-6">
          {/* Basic Info */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Basic Information
            </h3>
            <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded space-y-2">
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Name:
                </p>
                <p className="text-lg font-mono text-slate-700 dark:text-slate-300">
                  {getProfile().name}
                </p>
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Age:
                </p>
                <p className="text-lg font-mono text-slate-700 dark:text-slate-300">
                  {getProfile().age}
                </p>
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Email:
                </p>
                <p className="text-lg font-mono text-slate-700 dark:text-slate-300">
                  {getProfile().email}
                </p>
              </div>
              <div className="space-x-2 mt-3">
                <button
                  onClick={updateAge}
                  className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
                >
                  Increment Age
                </button>
                <button
                  onClick={updateNameAndEmail}
                  className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
                >
                  Update Name & Email
                </button>
              </div>
            </div>
          </div>

          {/* Preferences */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Preferences
            </h3>
            <div className="bg-purple-100 dark:bg-purple-900/20 p-4 rounded space-y-3">
              <div>
                <p className="text-sm text-purple-600 dark:text-purple-400">
                  Theme:
                </p>
                <p className="text-lg font-mono text-purple-700 dark:text-purple-300">
                  {getProfile().preferences.theme}
                </p>
              </div>
              <div>
                <p className="text-sm text-purple-600 dark:text-purple-400">
                  Notifications:
                </p>
                <p className="text-lg font-mono text-purple-700 dark:text-purple-300">
                  {getProfile().preferences.notifications
                    ? "Enabled"
                    : "Disabled"}
                </p>
              </div>
              <div className="space-x-2">
                <button
                  onClick={toggleTheme}
                  className="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600 text-sm"
                >
                  Toggle Theme
                </button>
                <button
                  onClick={toggleNotifications}
                  className="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600 text-sm"
                >
                  Toggle Notifications
                </button>
              </div>
            </div>
          </div>

          {/* Last Updated */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Last Updated
            </h3>
            <div className="bg-orange-100 dark:bg-orange-900/20 p-4 rounded">
              <p className="text-sm text-orange-600 dark:text-orange-400">
                Timestamp:
              </p>
              <p className="text-lg font-mono text-orange-700 dark:text-orange-300">
                {getProfile().lastUpdated.toLocaleString()}
              </p>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
            <p className="text-sm text-blue-600 dark:text-blue-400">
              Try the different buttons! Notice how each update only modifies
              the specified fields while preserving others. The lastUpdated
              timestamp updates automatically with each change! 🔄
            </p>
          </div>
        </div>
      </div>
    );
  },
};
