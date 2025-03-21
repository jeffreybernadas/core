import React, { useCallback } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import useLocation from "../../hooks/useLocation";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useLocation` is a hook that tracks browser location and history state changes.
 * It provides real-time updates when the URL or history state changes.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useLocation } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useLocation } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = () => {
 *   const location = useLocation();
 *
 *   return (
 *     <div>
 *       <p>Current Path: {location.pathname}</p>
 *       <p>Search Query: {location.search}</p>
 *       <p>Hash: {location.hash}</p>
 *     </div>
 *   );
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * useLocation(): LocationSensorState
 * ```
 *
 * ### Returns
 * ```tsx
 * {
 *   trigger: string; // What triggered the location change
 *   state?: any; // History state
 *   length?: number; // History length
 *   hash?: string; // URL hash
 *   host?: string; // Host with port
 *   hostname?: string; // Host without port
 *   href?: string; // Full URL
 *   origin?: string; // Protocol and host
 *   pathname?: string; // URL path
 *   port?: string; // Port number
 *   protocol?: string; // Protocol
 *   search?: string; // Query string
 * }
 * ```
 *
 * ### Browser Compatibility
 * Uses standard Web APIs:
 * - window.history
 * - window.location
 * - History API
 * Supported in all modern browsers.
 *
 * ### Related Resources
 * - [MDN: History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API)
 * - [MDN: Location](https://developer.mozilla.org/en-US/docs/Web/API/Location)
 */

const meta = {
  title: "Hooks/Browser API/useLocation",
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

export const Example: Story = {
  render: () => {
    const location = useLocation();

    // Example functions to modify history
    const pushNewState = useCallback(() => {
      const newState = { page: "example", time: Date.now() };
      window.history.pushState(newState, "", "?page=example");
    }, []);

    const replaceState = useCallback(() => {
      const newState = { page: "replaced", time: Date.now() };
      window.history.replaceState(newState, "", "?page=replaced");
    }, []);

    const addHash = useCallback(() => {
      window.location.hash = `section-${Date.now()}`;
    }, []);

    return (
      <div className="w-[500px]">
        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg space-y-6">
          {/* Current Location Info */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Current Location
            </h3>
            <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded space-y-3">
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Pathname:
                </p>
                <p className="text-lg font-mono text-slate-700 dark:text-slate-300">
                  {location.pathname || "/"}
                </p>
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Search:
                </p>
                <p className="text-lg font-mono text-slate-700 dark:text-slate-300">
                  {location.search || "(none)"}
                </p>
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Hash:
                </p>
                <p className="text-lg font-mono text-slate-700 dark:text-slate-300">
                  {location.hash || "(none)"}
                </p>
              </div>
            </div>
          </div>

          {/* History State */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              History State
            </h3>
            <div className="bg-purple-100 dark:bg-purple-900/20 p-4 rounded space-y-3">
              <div>
                <p className="text-sm text-purple-600 dark:text-purple-400">
                  Trigger:
                </p>
                <p className="text-lg font-mono text-purple-700 dark:text-purple-300">
                  {location.trigger}
                </p>
              </div>
              <div>
                <p className="text-sm text-purple-600 dark:text-purple-400">
                  History Length:
                </p>
                <p className="text-lg font-mono text-purple-700 dark:text-purple-300">
                  {location.length}
                </p>
              </div>
              <div>
                <p className="text-sm text-purple-600 dark:text-purple-400">
                  Current State:
                </p>
                <p className="text-lg font-mono text-purple-700 dark:text-purple-300">
                  {location.state ? JSON.stringify(location.state) : "(none)"}
                </p>
              </div>
            </div>
          </div>

          {/* URL Components */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              URL Components
            </h3>
            <div className="bg-green-100 dark:bg-green-900/20 p-4 rounded space-y-3">
              <div>
                <p className="text-sm text-green-600 dark:text-green-400">
                  Host:
                </p>
                <p className="text-lg font-mono text-green-700 dark:text-green-300">
                  {location.host}
                </p>
              </div>
              <div>
                <p className="text-sm text-green-600 dark:text-green-400">
                  Protocol:
                </p>
                <p className="text-lg font-mono text-green-700 dark:text-green-300">
                  {location.protocol}
                </p>
              </div>
              <div>
                <p className="text-sm text-green-600 dark:text-green-400">
                  Origin:
                </p>
                <p className="text-lg font-mono text-green-700 dark:text-green-300">
                  {location.origin}
                </p>
              </div>
            </div>
          </div>

          {/* History Controls */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              History Controls
            </h3>
            <div className="bg-blue-100 dark:bg-blue-900/20 p-4 rounded space-y-3">
              <div className="space-x-2">
                <button
                  onClick={pushNewState}
                  className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
                >
                  Push New State
                </button>
                <button
                  onClick={replaceState}
                  className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
                >
                  Replace State
                </button>
                <button
                  onClick={addHash}
                  className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
                >
                  Add Hash
                </button>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
            <p className="text-sm text-blue-600 dark:text-blue-400">
              Try the different buttons to modify the browser history and URL!
              Watch how the location information updates in real-time. You can
              also use the browser's back/forward buttons to see the history
              navigation in action! 🌐
            </p>
          </div>
        </div>
      </div>
    );
  },
};
