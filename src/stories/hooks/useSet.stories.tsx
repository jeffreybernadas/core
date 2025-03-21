import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import useSet from "../../hooks/useSet";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useSet` is a hook that provides a stateful Set with a stable API for adding, removing, and toggling items.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useSet } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useSet } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = () => {
 *   const [selectedTags, { add, remove, toggle, has }] = useSet(new Set(['react']));
 *
 *   return (
 *     <div>
 *       {tags.map(tag => (
 *         <button
 *           onClick={() => toggle(tag)}
 *           style={{ background: has(tag) ? 'blue' : 'gray' }}
 *         >
 *           {tag}
 *         </button>
 *       ))}
 *     </div>
 *   );
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * useSet<K>(
 *   initialSet?: Set<K> // Optional initial Set value
 * ): [
 *   Set<K>,
 *   {
 *     add: (value: K) => void,
 *     remove: (value: K) => void,
 *     toggle: (value: K) => void,
 *     has: (value: K) => boolean,
 *     clear: () => void,
 *     reset: () => void
 *   }
 * ]
 * ```
 *
 * ### Returns
 * - Returns a tuple containing:
 *   - Current Set value
 *   - Object with Set manipulation methods
 *
 * ### Features
 * - Type-safe Set operations
 * - Stable API methods
 * - Reset to initial state
 * - Immutable updates
 * - Zero dependencies
 *
 * ### Browser Compatibility
 * Compatible with all browsers that support ES6 Set.
 *
 * ### Related Resources
 * - [MDN: Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
 * - [React State Management](https://react.dev/learn/managing-state)
 */

const meta = {
  title: "Hooks/State Management/useSet",
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

const SetExample = () => {
  const [selectedFruits, { add, remove, toggle, has, reset, clear }] =
    useSet<string>(new Set(["apple"]));

  const allFruits = [
    "apple",
    "banana",
    "orange",
    "grape",
    "mango",
    "pineapple",
    "strawberry",
    "blueberry",
  ];

  return (
    <div className="w-[500px]">
      <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            Set Operations Demo
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Manage a collection of fruits using Set operations
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium text-slate-900 dark:text-slate-100 mb-2">
              Selected Fruits
            </h4>
            <div className="flex flex-wrap gap-2 min-h-[2.5rem]">
              {Array.from(selectedFruits).map((fruit) => (
                <div
                  key={fruit}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full flex items-center gap-2"
                >
                  {fruit}
                  <button
                    onClick={() => remove(fruit)}
                    className="text-blue-500 dark:text-blue-400 hover:text-red-500 dark:hover:text-red-400"
                  >
                    ×
                  </button>
                </div>
              ))}
              {selectedFruits.size === 0 && (
                <div className="text-slate-500 dark:text-slate-400 italic text-sm">
                  No fruits selected
                </div>
              )}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-slate-900 dark:text-slate-100 mb-2">
              Available Fruits
            </h4>
            <div className="flex flex-wrap gap-2">
              {allFruits.map((fruit) => (
                <button
                  key={fruit}
                  onClick={() => toggle(fruit)}
                  className={`px-3 py-1 rounded-full border transition-colors ${
                    has(fruit)
                      ? "bg-blue-500 text-white border-blue-500 dark:bg-blue-600 dark:border-blue-600"
                      : "bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border-slate-300 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-500"
                  }`}
                >
                  {fruit}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => clear()}
              className="px-3 py-1.5 bg-red-500 text-white rounded hover:bg-red-600 text-sm transition-colors"
            >
              Clear All
            </button>
            <button
              onClick={() => reset()}
              className="px-3 py-1.5 bg-slate-500 text-white rounded hover:bg-slate-600 text-sm transition-colors"
            >
              Reset to Initial
            </button>
            <button
              onClick={() => allFruits.forEach(add)}
              className="px-3 py-1.5 bg-green-500 text-white rounded hover:bg-green-600 text-sm transition-colors"
            >
              Select All
            </button>
          </div>
        </div>

        <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded space-y-2">
          <h4 className="font-medium text-slate-900 dark:text-slate-100">
            Set Operations:
          </h4>
          <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-300 space-y-1">
            <li>Click a fruit to toggle selection</li>
            <li>Click × to remove a selected fruit</li>
            <li>Use buttons below for bulk operations</li>
            <li>Initial set: ["apple"]</li>
            <li>Current set size: {selectedFruits.size}</li>
          </ul>
        </div>

        {/* Instructions */}
        <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
          <p className="text-sm text-blue-600 dark:text-blue-400">
            Try different Set operations to manage the fruit collection! Toggle
            items, use bulk actions, and watch the Set update in real-time! 🍎
          </p>
        </div>
      </div>
    </div>
  );
};

export const Example: Story = {
  render: () => <SetExample />,
};
