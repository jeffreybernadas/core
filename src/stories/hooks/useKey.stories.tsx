import React, { useState, useRef } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useKey } from "../../hooks";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useKey` is a hook that handles keyboard events with a simple and flexible API.
 * It supports key filtering, event types, and target elements.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useKey } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useKey } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = () => {
 *   useKey("Escape", () => {
 *     console.log("Escape key pressed!");
 *   });
 *
 *   return <div>Press Escape to see the console log</div>;
 * };
 * ```
 *
 * ### Advanced Usage
 * ```tsx
 * const CustomKeyHandler = () => {
 *   const inputRef = useRef(null);
 *
 *   useKey(
 *     (event) => event.key === "Enter" && event.ctrlKey,
 *     () => console.log("Ctrl+Enter pressed!"),
 *     {
 *       event: "keydown",
 *       target: inputRef,
 *       options: { passive: true }
 *     }
 *   );
 *
 *   return <input ref={inputRef} />;
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * key: KeyFilter // String key name or predicate function
 * fn?: Handler // Event handler function
 * opts?: UseKeyOptions<T> // Options object
 * deps?: DependencyList // Dependencies array
 * ```
 *
 * ### Returns
 * ```tsx
 * void
 * ```
 *
 * ### Browser Compatibility
 * Uses standard keyboard events:
 * - keydown
 * - keypress
 * - keyup
 * Supported in all modern browsers.
 *
 * ### Related Resources
 * - [MDN: KeyboardEvent](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent)
 * - [MDN: KeyboardEvent.key](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key)
 */

const meta = {
  title: "Hooks/Event & Interaction/useKey",
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
    // Example 1: Simple key press logger
    const [lastKey, setLastKey] = useState<string>("");
    useKey(
      (e) => true, // Accept all keys
      (e) => setLastKey(e.key),
      { event: "keydown" },
    );

    // Example 2: Specific key handler
    const [escapeCount, setEscapeCount] = useState(0);
    useKey("Escape", () => setEscapeCount((c) => c + 1));

    // Example 3: Custom key combination
    const [ctrlEnterCount, setCtrlEnterCount] = useState(0);
    useKey(
      (e) => e.key === "Enter" && e.ctrlKey,
      () => setCtrlEnterCount((c) => c + 1),
    );

    // Example 4: Input-specific handler
    const inputRef = useRef<HTMLInputElement>(null);
    const [inputKeyCount, setInputKeyCount] = useState(0);
    useKey(
      (e) => true,
      () => setInputKeyCount((c) => c + 1),
      {
        event: "keydown",
        target: inputRef.current as HTMLElement | null | undefined,
      },
    );

    return (
      <div className="w-[400px]">
        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg space-y-6">
          {/* Global Key Logger */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Global Key Logger
            </h3>
            <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded text-center">
              <div className="text-sm text-slate-500 dark:text-slate-400">
                Last key pressed:
              </div>
              <div className="text-2xl font-mono mt-1 text-slate-700 dark:text-slate-300">
                {lastKey || "None"}
              </div>
            </div>
          </div>

          {/* Escape Key Counter */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Escape Key Counter
            </h3>
            <div className="bg-green-100 dark:bg-green-900/20 p-4 rounded text-center">
              <div className="text-sm text-green-600 dark:text-green-400">
                Times Escape pressed:
              </div>
              <div className="text-2xl font-mono mt-1 text-green-700 dark:text-green-300">
                {escapeCount}
              </div>
            </div>
          </div>

          {/* Ctrl+Enter Counter */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Ctrl+Enter Counter
            </h3>
            <div className="bg-purple-100 dark:bg-purple-900/20 p-4 rounded text-center">
              <div className="text-sm text-purple-600 dark:text-purple-400">
                Times Ctrl+Enter pressed:
              </div>
              <div className="text-2xl font-mono mt-1 text-purple-700 dark:text-purple-300">
                {ctrlEnterCount}
              </div>
            </div>
          </div>

          {/* Input-specific Key Counter */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Input-specific Keys
            </h3>
            <div className="space-y-2">
              <input
                ref={inputRef}
                type="text"
                placeholder="Type here..."
                className="w-full px-4 py-2 rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
              />
              <div className="text-center text-sm text-slate-500 dark:text-slate-400">
                Keys pressed in input: {inputKeyCount}
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
            <p className="text-sm text-blue-600 dark:text-blue-400">
              Try different keyboard interactions! Press any key to see it
              logged, hit Escape to increment its counter, use Ctrl+Enter for a
              special count, or type in the input to see input-specific events!
              ⌨️
            </p>
          </div>
        </div>
      </div>
    );
  },
};
