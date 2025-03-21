import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import useLogger from "../../hooks/useLogger";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useLogger` is a hook that provides lifecycle logging for React components.
 * It logs when a component mounts, updates, and unmounts, making it useful for debugging and development.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useLogger } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useLogger } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = () => {
 *   const [count, setCount] = useState(0);
 *   useLogger('MyComponent', { count });
 *
 *   return (
 *     <button onClick={() => setCount(c => c + 1)}>
 *       Count: {count}
 *     </button>
 *   );
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * useLogger(
 *   componentName: string,  // Name of the component for logging
 *   ...rest: any[]         // Additional values to log
 * ): void
 * ```
 *
 * ### Features
 * - Logs component mount with initial values
 * - Logs component updates with latest values
 * - Logs component unmount
 * - Supports logging multiple values
 * - Useful for debugging component lifecycle
 *
 * ### Browser Compatibility
 * Uses standard console.log API.
 * Works in all environments that support console logging.
 *
 * ### Related Resources
 * - [MDN: Console API](https://developer.mozilla.org/en-US/docs/Web/API/Console)
 * - [React Component Lifecycle](https://reactjs.org/docs/react-component.html#the-component-lifecycle)
 */

const meta = {
  title: "Hooks/Utility/useLogger",
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

// Example component that will be mounted/unmounted
const LoggedComponent = ({ name, data }: { name: string; data: unknown }) => {
  const [count, setCount] = useState(0);
  useLogger(name, { count, data });

  return (
    <div className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
        {name}
      </h3>
      <div className="space-y-2">
        <p className="text-slate-600 dark:text-slate-400">Count: {count}</p>
        <button
          onClick={() => setCount((c) => c + 1)}
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export const Example: Story = {
  render: () => {
    const [showComponent, setShowComponent] = useState(true);
    const [showSecond, setShowSecond] = useState(false);
    const [userData, setUserData] = useState({ name: "John", age: 30 });

    return (
      <div className="w-[500px]">
        <div className="space-y-6">
          {/* Controls */}
          <div className="space-y-4">
            <div className="flex space-x-2">
              <button
                onClick={() => setShowComponent((prev) => !prev)}
                className="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600 text-sm"
              >
                {showComponent ? "Unmount" : "Mount"} First Component
              </button>
              <button
                onClick={() => setShowSecond((prev) => !prev)}
                className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
              >
                {showSecond ? "Unmount" : "Mount"} Second Component
              </button>
            </div>
            <button
              onClick={() =>
                setUserData((prev) => ({ ...prev, age: prev.age + 1 }))
              }
              className="px-3 py-1 bg-orange-500 text-white rounded hover:bg-orange-600 text-sm"
            >
              Update User Data
            </button>
          </div>

          {/* Components */}
          <div className="space-y-4">
            {showComponent && (
              <LoggedComponent name="FirstComponent" data={userData} />
            )}
            {showSecond && (
              <LoggedComponent name="SecondComponent" data={userData} />
            )}
          </div>

          {/* Console Instructions */}
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">
              Instructions
            </h4>
            <ul className="list-disc list-inside space-y-2 text-sm text-blue-600 dark:text-blue-400">
              <li>
                Open your browser&apos;s DevTools console (F12) to see the logs
                🔍
              </li>
              <li>
                Try mounting/unmounting components using the buttons above
              </li>
              <li>Increment the counter to see update logs</li>
              <li>Update user data to see how prop changes are logged</li>
              <li>
                Notice how each lifecycle event (mount, update, unmount) is
                logged
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  },
};
