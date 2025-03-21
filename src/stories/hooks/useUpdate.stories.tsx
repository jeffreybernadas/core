import React, { useRef } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import useUpdate from "../../hooks/useUpdate";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useUpdate` is a hook that returns a function that forces a component to re-render when called.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useUpdate } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useUpdate } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = () => {
 *   const update = useUpdate();
 *   const randomNumber = Math.random();
 *
 *   return (
 *     <div>
 *       <div>Random: {randomNumber}</div>
 *       <button onClick={update}>Generate New Number</button>
 *     </div>
 *   );
 * };
 * ```
 *
 * ### Parameters
 * No parameters required.
 *
 * ### Returns
 * ```tsx
 * () => void // A function that triggers a re-render when called
 * ```
 *
 * ### Features
 * - Forces component re-render
 * - Zero dependencies
 * - SSR compatible
 * - Type-safe
 * - Useful for development and debugging
 *
 * ### Browser Compatibility
 * Compatible with all browsers that support React.
 *
 * ### Related Resources
 * - [useReducer](https://react.dev/reference/react/useReducer)
 * - [Component Rendering](https://react.dev/learn/render-and-commit)
 */

const meta = {
  title: "Hooks/Lifecycle/useUpdate",
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

const UpdateExample = () => {
  const update = useUpdate();
  const renderCount = useRef(1);
  const now = new Date();
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  return (
    <div className="w-[500px]">
      <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            Force Re-render Demo
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Watch how values change with each re-render
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={update}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Force Re-render
          </button>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded">
              <div className="text-sm text-slate-500 dark:text-slate-400">
                Render Count
              </div>
              <div className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
                {renderCount.current++}
              </div>
            </div>

            <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded">
              <div className="text-sm text-slate-500 dark:text-slate-400">
                Current Time
              </div>
              <div className="font-mono text-slate-900 dark:text-slate-100">
                {now.toLocaleTimeString(undefined, {
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                  fractionalSecondDigits: 3,
                })}
              </div>
            </div>
          </div>

          <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded">
            <div className="text-sm text-slate-500 dark:text-slate-400 mb-2">
              Random Color
            </div>
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded shadow-sm"
                style={{ backgroundColor: randomColor }}
              />
              <code className="font-mono text-slate-900 dark:text-slate-100">
                {randomColor}
              </code>
            </div>
          </div>

          <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded">
            <div className="text-sm text-slate-500 dark:text-slate-400 mb-2">
              Random Number
            </div>
            <div className="font-mono text-lg text-slate-900 dark:text-slate-100">
              {Math.random().toFixed(8)}
            </div>
          </div>
        </div>

        <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded space-y-2">
          <h4 className="font-medium text-slate-900 dark:text-slate-100">
            What's Happening:
          </h4>
          <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-300 space-y-1">
            <li>Each click forces a complete re-render</li>
            <li>The render count increases</li>
            <li>The timestamp updates</li>
            <li>A new random color is generated</li>
            <li>A new random number is generated</li>
          </ul>
        </div>

        {/* Instructions */}
        <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
          <p className="text-sm text-blue-600 dark:text-blue-400">
            Click the button to force a re-render and watch all values update!
            ⚡
          </p>
        </div>
      </div>
    </div>
  );
};

export const Example: Story = {
  render: () => <UpdateExample />,
};
