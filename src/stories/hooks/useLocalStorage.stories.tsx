import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useLocalStorage } from "../../hooks";
import { ThemeProvider } from "../../themes/shadcn";
/**
 * `useLocalStorage` is a hook that synchronizes state with localStorage, providing persistent storage across page reloads.
 * It's useful for saving user preferences, form data, or any other state that needs to persist.
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
 * const ThemePreference = () => {
 *   const [theme, setTheme] = useLocalStorage('theme', 'light');
 *
 *   return (
 *     <div>
 *       <div>Current theme: {theme}</div>
 *       <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
 *         Toggle Theme
 *       </button>
 *     </div>
 *   );
 * };
 * ```
 *
 * ### Advanced Usage
 * ```tsx
 * const UserSettings = () => {
 *   const [settings, setSettings] = useLocalStorage('userSettings', {
 *     notifications: true,
 *     fontSize: 14,
 *     language: 'en'
 *   });
 *
 *   const updateSetting = (key: keyof typeof settings, value: any) => {
 *     setSettings({ ...settings, [key]: value });
 *   };
 *
 *   return (
 *     <div>
 *       <div>
 *         <input
 *           type="checkbox"
 *           checked={settings.notifications}
 *           onChange={(e) => updateSetting('notifications', e.target.checked)}
 *         />
 *         Enable Notifications
 *       </div>
 *       <div>
 *         <select
 *           value={settings.language}
 *           onChange={(e) => updateSetting('language', e.target.value)}
 *         >
 *           <option value="en">English</option>
 *           <option value="es">Spanish</option>
 *         </select>
 *       </div>
 *     </div>
 *   );
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * useLocalStorage<T>(
 *   key: string,     // localStorage key to store the value
 *   initialValue: T  // Initial value if no value exists in localStorage
 * ): [T, (value: T | ((val: T) => T)) => void]
 * ```
 *
 * ### Returns
 * A tuple containing:
 * - state (T): Current state value
 * - setState: Function to update state, accepts either a new value or an updater function
 *
 * ### Browser Compatibility
 * Uses the Web Storage API (localStorage), supported in all modern browsers.
 *
 * ### Related Resources
 * - [MDN: Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)
 * - [MDN: Window.localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
 */
const meta = {
  title: "Hooks/useLocalStorage",
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

export const ColorPreferenceExample: Story = {
  render: () => {
    const [favoriteColor, setFavoriteColor] = useState("");
    const [savedColors, setSavedColors] = useLocalStorage<string[]>(
      "favoriteColors",
      [],
    );

    const colors = ["red", "blue", "green", "purple", "orange"];

    const saveColor = () => {
      if (favoriteColor && !savedColors?.includes(favoriteColor)) {
        setSavedColors([...(savedColors || []), favoriteColor]);
        setFavoriteColor("");
      }
    };

    const removeColor = (color: string) => {
      setSavedColors(savedColors?.filter((c) => c !== color) || []);
    };

    return (
      <div className="space-y-6 max-w-lg">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">
            Color Preferences
          </h3>
          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg space-y-4">
            <div className="flex gap-2">
              <select
                value={favoriteColor}
                onChange={(e) => setFavoriteColor(e.target.value)}
                className="px-3 py-2 border rounded"
              >
                <option value="">Select a color</option>
                {colors.map((color) => (
                  <option key={color} value={color}>
                    {color}
                  </option>
                ))}
              </select>
              <button
                onClick={saveColor}
                disabled={!favoriteColor}
                className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
              >
                Save
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {savedColors?.map((color) => (
                <div
                  key={color}
                  className="flex items-center gap-2 px-3 py-1 bg-white dark:bg-slate-700 rounded"
                >
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                  <span className="text-sm">{color}</span>
                  <button
                    onClick={() => removeColor(color)}
                    className="text-red-500 hover:text-red-700"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  },
};
