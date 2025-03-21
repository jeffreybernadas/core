import React, { useRef, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useEvent } from "../../hooks";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useEvent` is a hook that manages event listeners with automatic cleanup.
 * It supports both standard DOM elements and custom event targets with addEventListener/removeEventListener or on/off methods.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useEvent } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useEvent } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = () => {
 *   useEvent('click', () => {
 *     console.log('Window clicked!');
 *   });
 *
 *   return <div>Click anywhere to see console log</div>;
 * };
 * ```
 *
 * ### Advanced Usage
 * ```tsx
 * const ElementEventTracker = () => {
 *   const buttonRef = useRef(null);
 *
 *   useEvent('mouseenter', () => {
 *     console.log('Mouse entered button');
 *   }, buttonRef.current);
 *
 *   useEvent('mouseleave', () => {
 *     console.log('Mouse left button');
 *   }, buttonRef.current);
 *
 *   return <button ref={buttonRef}>Hover me</button>;
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * useEvent<T extends UseEventTarget>(
 *   name: string,           // Event name to listen for
 *   handler: EventHandler,  // Event handler function
 *   target?: T | null,     // Event target (defaults to window)
 *   options?: EventOptions // Event listener options
 * ): void
 * ```
 *
 * ### Returns
 * void
 *
 * ### Browser Compatibility
 * Uses standard Web APIs:
 * - addEventListener/removeEventListener
 * - Custom event targets with on/off methods
 * Supported in all modern browsers.
 *
 * ### Related Resources
 * - [MDN: EventTarget.addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
 * - [MDN: Event reference](https://developer.mozilla.org/en-US/docs/Web/Events)
 */

const meta = {
  title: "Hooks/Event & Interaction/useEvent",
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
    const [events, setEvents] = useState<string[]>([]);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const boxRef = useRef<HTMLDivElement>(null);

    // Log events with timestamps
    const logEvent = (event: string) => {
      const time = new Date().toLocaleTimeString();
      setEvents((prev) => [`${time}: ${event}`, ...prev].slice(0, 5));
    };

    // Window events
    useEvent("keydown", ((e: KeyboardEvent) => {
      logEvent(`Key pressed: ${e.key}`);
    }) as EventListener);

    // Button events
    useEvent(
      "mouseenter",
      () => {
        logEvent("Mouse entered button");
      },
      buttonRef.current,
    );

    useEvent(
      "mouseleave",
      () => {
        logEvent("Mouse left button");
      },
      buttonRef.current,
    );

    // Box events
    useEvent(
      "dragenter",
      (e) => {
        e.preventDefault();
        logEvent("Drag entered box");
      },
      boxRef.current,
    );

    useEvent(
      "dragleave",
      (e) => {
        e.preventDefault();
        logEvent("Drag left box");
      },
      boxRef.current,
    );

    useEvent(
      "dragover",
      (e) => {
        e.preventDefault();
      },
      boxRef.current,
    );

    useEvent(
      "drop",
      (e) => {
        e.preventDefault();
        logEvent("Item dropped in box");
      },
      boxRef.current,
    );

    return (
      <div className="space-y-6 max-w-lg">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">
            Event Handling Demo
          </h3>
          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg space-y-4">
            {/* Button Example */}
            <div className="flex justify-center">
              <button
                ref={buttonRef}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Hover Me
              </button>
            </div>

            {/* Drop Zone */}
            <div
              ref={boxRef}
              className="h-24 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-400"
            >
              Drag and drop here
            </div>

            {/* Event Log */}
            <div className="space-y-2">
              <div className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Recent Events:
              </div>
              <div className="bg-white dark:bg-slate-700 p-3 rounded space-y-1">
                {events.map((event, index) => (
                  <div
                    key={index}
                    className="text-xs text-slate-600 dark:text-slate-400"
                  >
                    {event}
                  </div>
                ))}
                {events.length === 0 && (
                  <div className="text-xs text-slate-400 dark:text-slate-500 italic">
                    No events yet
                  </div>
                )}
              </div>
            </div>

            {/* Instructions */}
            <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
              <p className="text-sm text-blue-600 dark:text-blue-400">
                Try different events: hover over the button, press keys, or drag
                and drop items into the box! Watch the event log update in
                real-time! 🎯
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  },
};
