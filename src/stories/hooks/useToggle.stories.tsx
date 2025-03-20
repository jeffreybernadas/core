import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useToggle } from "../../hooks";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useToggle` is a hook that manages a boolean toggle state with a simple API.
 * It's useful for implementing switches, show/hide functionality, or any binary state.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useToggle } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useToggle } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const ToggleComponent = () => {
 *   const [isVisible, toggle] = useToggle(false);
 *
 *   return (
 *     <div>
 *       <button onClick={() => toggle()}>
 *         {isVisible ? 'Hide Content' : 'Show Content'}
 *       </button>
 *
 *       {isVisible && (
 *         <div>This content can be toggled!</div>
 *       )}
 *     </div>
 *   );
 * };
 * ```
 *
 * ### Advanced Usage
 * ```tsx
 * const ControlledToggleComponent = () => {
 *   const [isActive, toggle] = useToggle(false);
 *
 *   return (
 *     <div>
 *       <div>
 *         <button onClick={() => toggle(true)}>Activate</button>
 *         <button onClick={() => toggle(false)}>Deactivate</button>
 *       </div>
 *       <div>Status: {isActive ? 'Active' : 'Inactive'}</div>
 *     </div>
 *   );
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * useToggle(
 *   initialValue?: boolean = false // Initial state value
 * ): [boolean, (nextValue?: boolean) => void]
 * ```
 *
 * ### Returns
 * - [state, toggle]: A tuple containing:
 *   - state (boolean): Current state
 *   - toggle ((nextValue?: boolean) => void): Function to toggle or set state
 *
 * ### Browser Compatibility
 * Uses React's useState hook, supported in all modern browsers.
 */
const meta = {
  title: "Hooks/useToggle",
  parameters: {
    layout: "centered",
    docs: {
      canvas: {
        sourceState: "none",
      },
    },
  },
  tags: ["autodocs"],
  decorators: [(Story) => <ThemeProvider>{Story()}</ThemeProvider>],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => {
    const [isOn, toggle] = useToggle(false);

    return (
      <div className="space-y-6 max-w-lg">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">
            Toggle Example
          </h3>
          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg space-y-4">
            <div className="text-slate-700 dark:text-slate-300">
              Current state: {isOn ? "ON" : "OFF"}
            </div>
            <div className="space-y-4">
              <button
                onClick={() => toggle()}
                className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                Toggle
              </button>
              <div className="flex gap-2">
                <button
                  onClick={() => toggle(true)}
                  className="flex-1 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                >
                  Turn ON
                </button>
                <button
                  onClick={() => toggle(false)}
                  className="flex-1 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                >
                  Turn OFF
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
};
