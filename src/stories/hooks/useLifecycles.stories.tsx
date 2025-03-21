import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import useLifecycles from "../../hooks/useLifecycles";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useLifecycles` is a hook that provides a convenient way to handle component mount and unmount lifecycle events.
 * It's useful for setting up subscriptions, event listeners, or any other side effects that need cleanup.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useLifecycles } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useLifecycles } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = () => {
 *   useLifecycles(
 *     () => console.log('Component mounted'),
 *     () => console.log('Component unmounted')
 *   );
 *
 *   return <div>Check console for lifecycle logs</div>;
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * useLifecycles(
 *   mount: () => void,    // Function to run on component mount
 *   unmount?: () => void  // Optional function to run on component unmount
 * ): void
 * ```
 *
 * ### Returns
 * ```tsx
 * void // This hook doesn't return anything
 * ```
 *
 * ### Browser Compatibility
 * Uses standard React useEffect hook.
 * Supported in all modern browsers.
 *
 * ### Related Resources
 * - [React useEffect Hook](https://react.dev/reference/react/useEffect)
 * - [React Component Lifecycle](https://react.dev/learn/lifecycle-of-reactive-effects)
 */

const meta = {
  title: "Hooks/Lifecycle/useLifecycles",
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

const LifecycleChild = () => {
  useLifecycles(
    () => {
      console.log("🟢 Child component mounted");
      // Add a visual notification
      const notification = document.createElement("div");
      notification.className =
        "fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg";
      notification.textContent = "Component Mounted!";
      document.body.appendChild(notification);
      setTimeout(() => notification.remove(), 2000);
    },
    () => {
      console.log("🔴 Child component unmounted");
      // Add a visual notification
      const notification = document.createElement("div");
      notification.className =
        "fixed top-4 right-4 bg-red-500 text-white px-4 py-2 rounded shadow-lg";
      notification.textContent = "Component Unmounted!";
      document.body.appendChild(notification);
      setTimeout(() => notification.remove(), 2000);
    },
  );

  return (
    <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
      <p className="text-slate-900 dark:text-slate-100">
        I'm the child component! Unmount me to see the cleanup effect.
      </p>
    </div>
  );
};

const LifecycleExample = () => {
  const [showChild, setShowChild] = React.useState(true);

  return (
    <div className="w-[400px] space-y-4">
      {/* Controls */}
      <div className="flex justify-center">
        <button
          onClick={() => setShowChild(!showChild)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          {showChild ? "Unmount Child" : "Mount Child"}
        </button>
      </div>

      {/* Child Component */}
      <div className="min-h-[100px] flex items-center justify-center">
        {showChild && <LifecycleChild />}
      </div>

      {/* Console Output */}
      <div className="bg-slate-900 text-slate-300 p-4 rounded-lg font-mono text-sm">
        <p className="text-slate-500">// Check the console for logs:</p>
        <p>
          <span className="text-green-400">console.log</span>
          ("🟢 Child component mounted");
        </p>
        <p>
          <span className="text-red-400">console.log</span>
          ("🔴 Child component unmounted");
        </p>
      </div>

      {/* Instructions */}
      <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
        <p className="text-sm text-blue-600 dark:text-blue-400">
          Click the button to mount/unmount the child component. Watch for the
          notifications and check the console for lifecycle logs! 🔄
        </p>
      </div>
    </div>
  );
};

export const Example: Story = {
  render: () => <LifecycleExample />,
};
