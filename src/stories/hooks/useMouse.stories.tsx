import React, { useRef } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import useMouse from "../../hooks/useMouse";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useMouse` is a hook that tracks detailed mouse position information relative to both the document and a specific element.
 * It provides coordinates, element dimensions, and relative positions using requestAnimationFrame for smooth updates.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useMouse } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useMouse } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = () => {
 *   const ref = useRef(null);
 *   const { docX, docY, elX, elY } = useMouse(ref);
 *
 *   return (
 *     <div ref={ref}>
 *       Mouse at ({docX}, {docY}) in document
 *       Mouse at ({elX}, {elY}) in element
 *     </div>
 *   );
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * useMouse(
 *   ref: RefObject<Element>  // Reference to the element to track mouse position against
 * ): {
 *   docX: number;  // Mouse X position in the document
 *   docY: number;  // Mouse Y position in the document
 *   posX: number;  // Element's left position
 *   posY: number;  // Element's top position
 *   elX: number;   // Mouse X position relative to the element
 *   elY: number;   // Mouse Y position relative to the element
 *   elH: number;   // Element height
 *   elW: number;   // Element width
 * }
 * ```
 *
 * ### Returns
 * ```tsx
 * {
 *   docX: number;  // Mouse X position in the document
 *   docY: number;  // Mouse Y position in the document
 *   posX: number;  // Element's left position
 *   posY: number;  // Element's top position
 *   elX: number;   // Mouse X position relative to the element
 *   elY: number;   // Mouse Y position relative to the element
 *   elH: number;   // Element height
 *   elW: number;   // Element width
 * }
 * ```
 *
 * ### Browser Compatibility
 * Uses standard DOM APIs (mousemove event, getBoundingClientRect).
 * Uses requestAnimationFrame for smooth updates.
 * Supported in all modern browsers.
 *
 * ### Related Resources
 * - [MDN: mousemove event](https://developer.mozilla.org/en-US/docs/Web/API/Element/mousemove_event)
 * - [MDN: getBoundingClientRect](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)
 * - [MDN: requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)
 */

const meta = {
  title: "Hooks/Event & Interaction/useMouse",
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

const MouseTracker = () => {
  const ref = useRef<HTMLDivElement>(null);
  const mouseState = useMouse(ref as React.RefObject<Element>);

  return (
    <div className="w-[400px] space-y-4">
      {/* Interactive Area */}
      <div
        ref={ref}
        className="relative h-64 bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden"
      >
        {/* Mouse Position Indicator */}
        <div
          className="absolute w-6 h-6 bg-blue-500 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            left: mouseState.elX,
            top: mouseState.elY,
            opacity: mouseState.elX > 0 && mouseState.elY > 0 ? 0.5 : 0,
          }}
        />

        {/* Crosshair Lines */}
        <div
          className="absolute w-full h-[1px] bg-blue-500 pointer-events-none"
          style={{
            top: mouseState.elY,
            opacity: mouseState.elY > 0 ? 0.2 : 0,
          }}
        />
        <div
          className="absolute h-full w-[1px] bg-blue-500 pointer-events-none"
          style={{
            left: mouseState.elX,
            opacity: mouseState.elX > 0 ? 0.2 : 0,
          }}
        />

        {/* Center Text */}
        <div className="absolute inset-0 flex items-center justify-center text-slate-400 dark:text-slate-500 pointer-events-none">
          Move your mouse!
        </div>
      </div>

      {/* Coordinates Display */}
      <div className="space-y-2 font-mono text-sm">
        <div className="bg-slate-900 text-slate-300 p-4 rounded-lg space-y-2">
          <p>
            <span className="text-slate-500">Document Position:</span>{" "}
            <span className="text-blue-400">
              ({mouseState.docX}, {mouseState.docY})
            </span>
          </p>
          <p>
            <span className="text-slate-500">Element Position:</span>{" "}
            <span className="text-green-400">
              ({Math.round(mouseState.elX)}, {Math.round(mouseState.elY)})
            </span>
          </p>
          <p>
            <span className="text-slate-500">Element Dimensions:</span>{" "}
            <span className="text-purple-400">
              {mouseState.elW} × {mouseState.elH}
            </span>
          </p>
        </div>
      </div>

      {/* Instructions */}
      <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
        <p className="text-sm text-blue-600 dark:text-blue-400">
          Move your mouse over the tracking area to see real-time coordinates
          and a visual indicator! 🎯
        </p>
      </div>
    </div>
  );
};

export const Example: Story = {
  render: () => <MouseTracker />,
};
