import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useKeyPressEvent } from "../../hooks";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useKeyPressEvent` is a hook that handles keydown and keyup events separately for a specific key.
 * It's useful for creating interactive keyboard controls that need different behaviors for press and release.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useKeyPressEvent } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useKeyPressEvent } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = () => {
 *   useKeyPressEvent(
 *     "Space",
 *     () => console.log("Space pressed down"),
 *     () => console.log("Space released")
 *   );
 *   return <div>Press and release the space bar</div>;
 * };
 * ```
 *
 * ### Advanced Usage
 * ```tsx
 * const GameControl = () => {
 *   const [position, setPosition] = useState({ x: 0, y: 0 });
 *   const speed = 5;
 *
 *   useKeyPressEvent(
 *     "ArrowRight",
 *     () => setPosition(p => ({ ...p, x: p.x + speed })),
 *     null
 *   );
 *
 *   return <div style={{ transform: `translate(${position.x}px, ${position.y}px)` }}>🐍</div>;
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * useKeyPressEvent(
 *   key: string | KeyFilter,     // Key to listen for
 *   keydown?: Handler | null,    // Handler for keydown event
 *   keyup?: Handler | null,      // Handler for keyup event
 *   useKeyPress?: Function       // Optional custom useKeyPress implementation
 * ): void
 * ```
 *
 * ### Returns
 * void
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
  title: "Hooks/Event & Interaction/useKeyPressEvent",
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
    // Example 1: Basic key press tracking
    const [spaceState, setSpaceState] = useState("idle");
    useKeyPressEvent(
      " ",
      () => setSpaceState("pressed"),
      () => setSpaceState("released"),
    );

    // Example 2: Character movement
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const speed = 10;

    useKeyPressEvent(
      "ArrowRight",
      () => setPosition((p) => ({ ...p, x: p.x + speed })),
      null,
    );

    useKeyPressEvent(
      "ArrowLeft",
      () => setPosition((p) => ({ ...p, x: p.x - speed })),
      null,
    );

    useKeyPressEvent(
      "ArrowUp",
      () => setPosition((p) => ({ ...p, y: p.y - speed })),
      null,
    );

    useKeyPressEvent(
      "ArrowDown",
      () => setPosition((p) => ({ ...p, y: p.y + speed })),
      null,
    );

    // Example 3: Key combination tracking
    const [shiftState, setShiftState] = useState("idle");
    useKeyPressEvent(
      (event) => event.key === "Shift",
      () => setShiftState("pressed"),
      () => setShiftState("released"),
    );

    return (
      <div className="space-y-8 max-w-lg">
        {/* Space Bar Example */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            Space Bar State
          </h3>
          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg text-center">
            <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">
              Press and hold the space bar
            </div>
            <div
              className={`text-xl font-mono ${
                spaceState === "pressed"
                  ? "text-green-600 dark:text-green-400"
                  : spaceState === "released"
                    ? "text-red-600 dark:text-red-400"
                    : "text-slate-600 dark:text-slate-400"
              }`}
            >
              {spaceState.toUpperCase()}
            </div>
          </div>
        </div>

        {/* Character Movement */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            Arrow Key Movement
          </h3>
          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <div className="text-sm text-slate-600 dark:text-slate-400 mb-4 text-center">
              Use arrow keys to move the character
            </div>
            <div className="relative h-32 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded">
              <div
                className="absolute transition-transform"
                style={{
                  transform: `translate(${position.x}px, ${position.y}px)`,
                }}
              >
                🐍
              </div>
            </div>
          </div>
        </div>

        {/* Shift Key Example */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            Shift Key State
          </h3>
          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg text-center">
            <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">
              Press and hold the Shift key
            </div>
            <div
              className={`text-xl font-mono ${
                shiftState === "pressed"
                  ? "text-blue-600 dark:text-blue-400"
                  : shiftState === "released"
                    ? "text-purple-600 dark:text-purple-400"
                    : "text-slate-600 dark:text-slate-400"
              }`}
            >
              {shiftState.toUpperCase()}
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
          <p className="text-sm text-blue-600 dark:text-blue-400">
            Try these keyboard interactions: press and hold the space bar to see
            state changes, use arrow keys to move the character around, and hold
            the shift key to track modifier key states! 🐍
          </p>
        </div>
      </div>
    );
  },
};
