import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import useMount from "../../hooks/useMount";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useMount` is a hook that executes a callback function only when a component mounts.
 * It's a simplified version of useEffect that only runs once on mount, similar to componentDidMount in class components.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useMount } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useMount } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = () => {
 *   useMount(() => {
 *     console.log('Component mounted!');
 *   });
 *
 *   return <div>Check console for mount log</div>;
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * useMount(
 *   fn: () => void  // Function to execute on mount
 * ): void
 * ```
 *
 * ### Returns
 * ```tsx
 * void // This hook doesn't return anything
 * ```
 *
 * ### Browser Compatibility
 * Uses standard React useEffect hook internally.
 * Supported in all modern browsers.
 *
 * ### Related Resources
 * - [React useEffect Hook](https://react.dev/reference/react/useEffect)
 * - [React Component Lifecycle](https://react.dev/learn/lifecycle-of-reactive-effects)
 */

const meta = {
  title: "Hooks/Lifecycle/useMount",
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

const MountChild = () => {
  useMount(() => {
    console.log("🟢 Component mounted");
    // Add a visual notification
    const notification = document.createElement("div");
    notification.className =
      "fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg";
    notification.textContent = "Component Mounted!";
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 2000);
  });

  return (
    <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
      <p className="text-slate-900 dark:text-slate-100">
        I'm mounted! Check the console and notification.
      </p>
    </div>
  );
};

const MountExample = () => {
  const [mountCount, setMountCount] = React.useState(0);
  const [showChild, setShowChild] = React.useState(false);

  return (
    <div className="w-[400px] space-y-4">
      {/* Controls */}
      <div className="flex flex-col items-center gap-2">
        <button
          onClick={() => {
            setShowChild(true);
            setMountCount((prev) => prev + 1);
          }}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          disabled={showChild}
        >
          Mount Component
        </button>
        <button
          onClick={() => setShowChild(false)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          disabled={!showChild}
        >
          Unmount Component
        </button>
      </div>

      {/* Mount Counter */}
      <div className="text-center text-sm text-slate-600 dark:text-slate-400">
        Components Mounted: {mountCount}
      </div>

      {/* Child Component */}
      <div className="min-h-[100px] flex items-center justify-center">
        {showChild && <MountChild />}
      </div>

      {/* Console Output */}
      <div className="bg-slate-900 text-slate-300 p-4 rounded-lg font-mono text-sm">
        <p className="text-slate-500">// Check the console for logs:</p>
        <p>
          <span className="text-green-400">console.log</span>
          ("🟢 Component mounted");
        </p>
      </div>

      {/* Instructions */}
      <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
        <p className="text-sm text-blue-600 dark:text-blue-400">
          Click the Mount button to create a new component. Notice how the mount
          effect runs only once when the component is created! 🚀
        </p>
      </div>
    </div>
  );
};

export const Example: Story = {
  render: () => <MountExample />,
};
