import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useWindowEvent } from "../../hooks";
import { ThemeProvider } from "../../themes/shadcn";
/**
 * `useWindowEvent` is a hook that manages window event listeners with automatic cleanup.
 * It's useful for handling global events like keyboard shortcuts, window resizing, or scroll tracking.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useWindowEvent } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useWindowEvent } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const KeyboardShortcuts = () => {
 *   const [lastKey, setLastKey] = useState('');
 *
 *   useWindowEvent('keydown', (e) => {
 *     setLastKey(e.key);
 *   });
 *
 *   return (
 *     <div>
 *       <div>Press any key</div>
 *       <div>Last key pressed: {lastKey}</div>
 *     </div>
 *   );
 * };
 * ```
 *
 * ### Advanced Usage
 * ```tsx
 * const ScrollTracker = () => {
 *   const [scrollInfo, setScrollInfo] = useState({
 *     x: window.scrollX,
 *     y: window.scrollY,
 *     direction: ''
 *   });
 *
 *   useWindowEvent('scroll', () => {
 *     const newY = window.scrollY;
 *     setScrollInfo(prev => ({
 *       x: window.scrollX,
 *       y: newY,
 *       direction: newY > prev.y ? 'down' : 'up'
 *     }));
 *   });
 *
 *   return (
 *     <div>
 *       <div>Scroll Position: ({scrollInfo.x}, {scrollInfo.y})</div>
 *       <div>Direction: {scrollInfo.direction}</div>
 *     </div>
 *   );
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * useWindowEvent(
 *   event: string,      // Event name to listen for
 *   handler: Function,  // Event handler function
 *   options?: {        // Optional event listener options
 *     capture?: boolean;
 *     passive?: boolean;
 *     once?: boolean;
 *   }
 * ): void
 * ```
 *
 * ### Returns
 * void
 *
 * ### Browser Compatibility
 * Uses standard Web APIs:
 * - window.addEventListener
 * - window.removeEventListener
 * Supported in all modern browsers.
 *
 * ### Related Resources
 * - [MDN: EventTarget.addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
 * - [MDN: Window](https://developer.mozilla.org/en-US/docs/Web/API/Window)
 */
const meta = {
  title: "Hooks/useWindowEvent",
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

export const KeyboardExample: Story = {
  render: () => {
    const [lastKey, setLastKey] = useState("");
    const [modifiers, setModifiers] = useState<string[]>([]);

    useWindowEvent("keydown", (e: KeyboardEvent) => {
      setLastKey(e.key);
      const mods = [];
      if (e.ctrlKey) mods.push("Ctrl");
      if (e.shiftKey) mods.push("Shift");
      if (e.altKey) mods.push("Alt");
      if (e.metaKey) mods.push("Meta");
      setModifiers(mods);
    });

    return (
      <div className="space-y-6 max-w-lg">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">
            Keyboard Events
          </h3>
          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg space-y-4">
            <div className="text-center text-slate-700 dark:text-slate-300">
              Press any key
            </div>
            <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <div>Last key: {lastKey || "None"}</div>
              <div>
                Modifiers:{" "}
                {modifiers.length > 0 ? modifiers.join(" + ") : "None"}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
};
