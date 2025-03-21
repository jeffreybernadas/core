import React, { useRef } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import useMouseHovered from "../../hooks/useMouseHovered";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useMouseHovered` is a hook that combines mouse position tracking with hover state detection.
 * It extends `useMouse` with additional options for hover-dependent tracking and coordinate bounding.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useMouseHovered } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useMouseHovered } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = () => {
 *   const ref = useRef(null);
 *   const { elX, elY } = useMouseHovered(ref, {
 *     whenHovered: true,  // Only track when hovered
 *     bound: true,        // Keep coordinates within element bounds
 *   });
 *
 *   return (
 *     <div ref={ref}>
 *       Mouse at ({elX}, {elY})
 *     </div>
 *   );
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * useMouseHovered(
 *   ref: RefObject<Element>,           // Reference to the element to track
 *   options?: {
 *     whenHovered?: boolean;           // Only track when element is hovered
 *     bound?: boolean;                 // Keep coordinates within element bounds
 *   }
 * ): {
 *   docX: number;  // Mouse X position in document
 *   docY: number;  // Mouse Y position in document
 *   posX: number;  // Element's left position
 *   posY: number;  // Element's top position
 *   elX: number;   // Mouse X position relative to element
 *   elY: number;   // Mouse Y position relative to element
 *   elH: number;   // Element height
 *   elW: number;   // Element width
 * }
 * ```
 *
 * ### Returns
 * ```tsx
 * {
 *   docX: number;  // Mouse X position in document
 *   docY: number;  // Mouse Y position in document
 *   posX: number;  // Element's left position
 *   posY: number;  // Element's top position
 *   elX: number;   // Mouse X position relative to element (bounded if option set)
 *   elY: number;   // Mouse Y position relative to element (bounded if option set)
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
 */

const meta = {
  title: "Hooks/Event & Interaction/useMouseHovered",
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

const MouseHoveredExample = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [whenHovered, setWhenHovered] = React.useState(true);
  const [bound, setBound] = React.useState(true);

  const mouseState = useMouseHovered(ref as React.RefObject<Element>, {
    whenHovered,
    bound,
  });

  return (
    <div className="w-[400px] space-y-4">
      {/* Controls */}
      <div className="flex gap-2 justify-center">
        <button
          onClick={() => setWhenHovered(!whenHovered)}
          className={`px-4 py-2 rounded transition-colors ${
            whenHovered
              ? "bg-blue-500 text-white"
              : "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
          }`}
        >
          Track {whenHovered ? "When Hovered" : "Always"}
        </button>
        <button
          onClick={() => setBound(!bound)}
          className={`px-4 py-2 rounded transition-colors ${
            bound
              ? "bg-blue-500 text-white"
              : "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
          }`}
        >
          Coordinates {bound ? "Bounded" : "Unbounded"}
        </button>
      </div>

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
          Move mouse here
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
          Move your mouse over the tracking area and toggle the options to see
          how they affect mouse tracking! 🖱️
        </p>
      </div>
    </div>
  );
};

export const Example: Story = {
  render: () => <MouseHoveredExample />,
};
