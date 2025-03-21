import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useKeyPress } from "../../hooks";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useKeyPress` is a hook that tracks the pressed state of a specific key or key combination.
 * It's useful for implementing keyboard shortcuts, game controls, or any feature that needs to know if a key is currently pressed.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useKeyPress } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useKeyPress } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = () => {
 *   const [isPressed] = useKeyPress(" ");
 *
 *   return (
 *     <div>
 *       Spacebar is {isPressed ? "pressed" : "released"}
 *     </div>
 *   );
 * };
 * ```
 *
 * ### Advanced Usage
 * ```tsx
 * const GameControls = () => {
 *   const [isUp] = useKeyPress("ArrowUp");
 *   const [isDown] = useKeyPress("ArrowDown");
 *   const [isLeft] = useKeyPress("ArrowLeft");
 *   const [isRight] = useKeyPress("ArrowRight");
 *
 *   return (
 *     <div>
 *       <div>Up: {isUp ? "🔼" : "⬆️"}</div>
 *       <div>Down: {isDown ? "🔽" : "⬇️"}</div>
 *       <div>Left: {isLeft ? "◀️" : "⬅️"}</div>
 *       <div>Right: {isRight ? "▶️" : "➡️"}</div>
 *     </div>
 *   );
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * keyFilter: KeyFilter // String key name or predicate function
 * ```
 *
 * ### Returns
 * ```tsx
 * [boolean, KeyboardEvent | null] // [isPressed, event]
 * ```
 *
 * ### Browser Compatibility
 * Uses standard keyboard events:
 * - keydown
 * - keyup
 * Supported in all modern browsers.
 *
 * ### Related Resources
 * - [MDN: KeyboardEvent](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent)
 * - [MDN: KeyboardEvent.key](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key)
 */

const meta = {
  title: "Hooks/Event & Interaction/useKeyPress",
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
    // Example 1: Simple key press indicator
    const [isSpacePressed, spaceEvent] = useKeyPress(" ");
    const [isEnterPressed] = useKeyPress("Enter");
    const [isEscapePressed] = useKeyPress("Escape");

    // Example 2: Arrow key game controls
    const [isUpPressed] = useKeyPress("ArrowUp");
    const [isDownPressed] = useKeyPress("ArrowDown");
    const [isLeftPressed] = useKeyPress("ArrowLeft");
    const [isRightPressed] = useKeyPress("ArrowRight");

    // Example 3: Key combination tracking
    const [isCtrlPressed] = useKeyPress((e) => e.key === "Control");
    const [isShiftPressed] = useKeyPress((e) => e.key === "Shift");
    const [isAltPressed] = useKeyPress((e) => e.key === "Alt");

    // Example 4: Key press history
    const [history, setHistory] = useState<string[]>([]);
    React.useEffect(() => {
      if (spaceEvent) {
        const action = spaceEvent.type === "keydown" ? "pressed" : "released";
        setHistory((prev) => [
          `Space ${action} at ${new Date().toLocaleTimeString()}`,
          ...prev.slice(0, 4),
        ]);
      }
    }, [spaceEvent]);

    return (
      <div className="w-[400px]">
        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg space-y-6">
          {/* Basic Key Press Indicators */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Basic Keys
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {(
                [
                  ["Space", isSpacePressed],
                  ["Enter", isEnterPressed],
                  ["Escape", isEscapePressed],
                ] as const
              ).map(([key, isPressed]) => (
                <div
                  key={key}
                  className={`p-3 rounded text-center transition-colors ${
                    isPressed
                      ? "bg-green-500 text-white"
                      : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                  }`}
                >
                  {key}
                </div>
              ))}
            </div>
          </div>

          {/* Arrow Key Controls */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Arrow Keys
            </h3>
            <div className="grid grid-cols-3 gap-2 max-w-[180px] mx-auto">
              <div />
              <div
                className={`p-3 rounded text-center transition-colors ${
                  isUpPressed
                    ? "bg-blue-500 text-white"
                    : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                }`}
              >
                ↑
              </div>
              <div />
              <div
                className={`p-3 rounded text-center transition-colors ${
                  isLeftPressed
                    ? "bg-blue-500 text-white"
                    : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                }`}
              >
                ←
              </div>
              <div
                className={`p-3 rounded text-center transition-colors ${
                  isDownPressed
                    ? "bg-blue-500 text-white"
                    : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                }`}
              >
                ↓
              </div>
              <div
                className={`p-3 rounded text-center transition-colors ${
                  isRightPressed
                    ? "bg-blue-500 text-white"
                    : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                }`}
              >
                →
              </div>
            </div>
          </div>

          {/* Modifier Keys */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Modifier Keys
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {(
                [
                  ["Ctrl", isCtrlPressed],
                  ["Shift", isShiftPressed],
                  ["Alt", isAltPressed],
                ] as const
              ).map(([key, isPressed]) => (
                <div
                  key={key}
                  className={`p-3 rounded text-center transition-colors ${
                    isPressed
                      ? "bg-purple-500 text-white"
                      : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                  }`}
                >
                  {key}
                </div>
              ))}
            </div>
          </div>

          {/* Space Key History */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Space Key History
            </h3>
            <div className="bg-slate-100 dark:bg-slate-700 rounded p-3">
              {history.length > 0 ? (
                <div className="space-y-1">
                  {history.map((entry, index) => (
                    <div
                      key={index}
                      className="text-sm text-slate-600 dark:text-slate-400"
                    >
                      {entry}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-sm text-slate-500 dark:text-slate-400 italic text-center">
                  No history yet
                </div>
              )}
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
            <p className="text-sm text-blue-600 dark:text-blue-400">
              Press different keys to see them light up! Try the arrow keys for
              movement controls, modifier keys for combinations, and watch the
              space key's press history! 🎮
            </p>
          </div>
        </div>
      </div>
    );
  },
};
