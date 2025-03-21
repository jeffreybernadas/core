import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import useMountedState from "../../hooks/useMountedState";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useMountedState` is a hook that returns a function which tells you if the component is currently mounted.
 * It's particularly useful for preventing state updates on unmounted components in async operations.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useMountedState } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useMountedState } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = () => {
 *   const isMounted = useMountedState();
 *
 *   useEffect(() => {
 *     fetchData().then(data => {
 *       // Only update state if component is still mounted
 *       if (isMounted()) {
 *         setData(data);
 *       }
 *     });
 *   }, []);
 *
 *   return <div>Safe async updates!</div>;
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * useMountedState(): () => boolean
 * ```
 *
 * ### Returns
 * ```tsx
 * () => boolean // Function that returns true if component is mounted, false otherwise
 * ```
 *
 * ### Browser Compatibility
 * Uses standard React hooks (useCallback, useEffect, useRef).
 * Supported in all modern browsers.
 *
 * ### Related Resources
 * - [React useEffect Hook](https://react.dev/reference/react/useEffect)
 * - [React Component Lifecycle](https://react.dev/learn/lifecycle-of-reactive-effects)
 */

const meta = {
  title: "Hooks/Lifecycle/useMountedState",
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

const AsyncChild = () => {
  const isMounted = useMountedState();
  const [data, setData] = React.useState<string | null>(null);
  const [status, setStatus] = React.useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  // Simulated API call
  const fetchData = async () => {
    setStatus("loading");
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate delay

      // Only update state if component is still mounted
      if (isMounted()) {
        setData("🎉 Data loaded successfully!");
        setStatus("success");
      }
    } catch (error) {
      if (isMounted()) {
        setStatus("error");
      }
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
      <div className="space-y-2">
        <p className="text-slate-900 dark:text-slate-100">
          Mounted Status: <span className="text-green-500">true</span>
        </p>
        <p className="text-slate-900 dark:text-slate-100">
          Loading Status:{" "}
          {status === "loading" && (
            <span className="text-blue-500">Loading...</span>
          )}
          {status === "success" && (
            <span className="text-green-500">Success!</span>
          )}
          {status === "error" && <span className="text-red-500">Error!</span>}
        </p>
        {data && (
          <p className="text-slate-900 dark:text-slate-100">Data: {data}</p>
        )}
      </div>
    </div>
  );
};

const MountedStateExample = () => {
  const [showChild, setShowChild] = React.useState(false);

  return (
    <div className="w-[400px] space-y-4">
      {/* Controls */}
      <div className="flex flex-col items-center gap-2">
        <button
          onClick={() => setShowChild(true)}
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

      {/* Child Component */}
      <div className="min-h-[100px] flex items-center justify-center">
        {showChild && <AsyncChild />}
      </div>

      {/* Instructions */}
      <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
        <p className="text-sm text-blue-600 dark:text-blue-400">
          Mount the component and watch it load data. Try unmounting while
          loading - the state won't update after unmount! 🛡️
        </p>
      </div>
    </div>
  );
};

export const Example: Story = {
  render: () => <MountedStateExample />,
};
