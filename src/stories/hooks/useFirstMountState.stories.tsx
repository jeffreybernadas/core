import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useFirstMountState } from "../../hooks/useFirstMountState";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useFirstMountState` is a hook that returns true only during component's first render.
 * It's useful for handling logic that should only run on the first mount of a component.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useFirstMountState } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useFirstMountState } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = () => {
 *   const isFirstMount = useFirstMountState();
 *   return <div>{isFirstMount ? "First Mount!" : "Not First Mount"}</div>;
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * useFirstMountState(): boolean
 * ```
 *
 * ### Returns
 * ```tsx
 * boolean // true if component is mounting for the first time, false otherwise
 * ```
 */

const meta = {
  title: "Hooks/Lifecycle/useFirstMountState",
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

const DemoComponent = () => {
  const isFirstMount = useFirstMountState();
  const [renderCount, setRenderCount] = useState(1);

  return (
    <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded">
      <p className="text-sm text-slate-500 dark:text-slate-400">
        Is First Mount?
      </p>
      <p className="text-lg font-mono mt-1 text-slate-700 dark:text-slate-300">
        {isFirstMount ? "Yes" : "No"}
      </p>
      <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
        Render Count: {renderCount}
      </p>
      <button
        onClick={() => setRenderCount((c) => c + 1)}
        className="mt-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
      >
        Force Re-render
      </button>
    </div>
  );
};

export const Example: Story = {
  render: () => {
    const [mountCount, setMountCount] = useState(1);
    const [showComponent, setShowComponent] = useState(true);

    return (
      <div className="w-[400px]">
        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg space-y-6">
          {/* Component Mount State */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Component Mount State
            </h3>
            {showComponent && <DemoComponent />}
          </div>

          {/* Mount Controls */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Mount Controls
            </h3>
            <div className="bg-green-100 dark:bg-green-900/20 p-4 rounded">
              <p className="text-sm text-green-600 dark:text-green-400">
                Component Mount Count: {mountCount}
              </p>
              <button
                onClick={() => {
                  setShowComponent(false);
                  setTimeout(() => {
                    setShowComponent(true);
                    setMountCount((c) => c + 1);
                  }, 500);
                }}
                className="mt-2 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
              >
                Unmount & Remount Component
              </button>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
            <p className="text-sm text-blue-600 dark:text-blue-400">
              Try the different buttons! "Force Re-render" will update state but
              keep the same mount, while "Unmount & Remount" will create a fresh
              mount of the component. Notice how isFirstMount is only true/
              "Yes" on the first render of each mount! 🔄
            </p>
          </div>
        </div>
      </div>
    );
  },
};
