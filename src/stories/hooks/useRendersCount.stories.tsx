import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useRendersCount } from "../../hooks/useRendersCount";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useRendersCount` is a hook that tracks the number of times a component has rendered.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useRendersCount } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useRendersCount } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = () => {
 *   const renders = useRendersCount();
 *   return <div>Rendered {renders} times</div>;
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * useRendersCount(): number
 * ```
 *
 * ### Returns
 * - Returns a number representing the count of renders
 *
 * ### Features
 * - Tracks initial and subsequent renders
 * - Uses useRef internally to persist count
 * - Zero dependencies
 * - Handles cleanup automatically
 *
 * ### Browser Compatibility
 * Compatible with all browsers that support React.
 *
 * ### Related Resources
 * - [React Rendering](https://react.dev/learn/render-and-commit)
 * - [useRef Hook](https://react.dev/reference/react/useRef)
 */

const meta = {
  title: "Hooks/Utility/useRendersCount",
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

const RendersCountExample = () => {
  const renders = useRendersCount();
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <div className="w-[500px]">
      <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            Render Counter Demo
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Watch how state changes trigger re-renders
          </p>
        </div>

        <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            {renders} renders
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <button
              onClick={() => setCount((c) => c + 1)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Increment Counter: {count}
            </button>
          </div>

          <div>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Type to trigger re-renders..."
              className="w-full px-4 py-2 rounded border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder:text-slate-400"
            />
          </div>
        </div>

        <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded space-y-2">
          <h4 className="font-medium text-slate-900 dark:text-slate-100">
            Render Triggers:
          </h4>
          <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-300 space-y-1">
            <li>Initial mount</li>
            <li>Counter state updates</li>
            <li>Text input changes</li>
            <li>Parent re-renders</li>
          </ul>
        </div>

        {/* Instructions */}
        <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
          <p className="text-sm text-blue-600 dark:text-blue-400">
            Try the counter and input to see how different actions affect the
            render count! 🔄
          </p>
        </div>
      </div>
    </div>
  );
};

export const Example: Story = {
  render: () => <RendersCountExample />,
};
