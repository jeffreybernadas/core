import React, { useState, useEffect, useRef } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import useMeasure from "../../hooks/useMeasure";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useMeasure` is a hook that measures DOM elements using ResizeObserver.
 * It provides real-time measurements of an element's size and position.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useMeasure } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useMeasure } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = () => {
 *   const [ref, { width, height }] = useMeasure();
 *
 *   return (
 *     <div ref={ref}>
 *       Width: {width}px, Height: {height}px
 *     </div>
 *   );
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * useMeasure<E extends Element = Element>(): [
 *   ref: (element: E) => void,
 *   rect: {
 *     x: number;
 *     y: number;
 *     width: number;
 *     height: number;
 *     top: number;
 *     left: number;
 *     bottom: number;
 *     right: number;
 *   }
 * ]
 * ```
 *
 * ### Returns
 * ```tsx
 * [
 *   ref: (element: E) => void,  // Ref callback to attach to element
 *   rect: {                     // Element measurements
 *     x: number;               // X position relative to viewport
 *     y: number;               // Y position relative to viewport
 *     width: number;           // Element width
 *     height: number;          // Element height
 *     top: number;             // Distance from top of viewport
 *     left: number;            // Distance from left of viewport
 *     bottom: number;          // Distance from bottom of viewport
 *     right: number;           // Distance from right of viewport
 *   }
 * ]
 * ```
 *
 * ### Features
 * - Real-time measurements using ResizeObserver
 * - SSR compatible with fallback
 * - Type-safe with TypeScript
 * - Zero dependencies
 * - Handles cleanup automatically
 *
 * ### Browser Compatibility
 * Uses ResizeObserver API.
 * Falls back gracefully when ResizeObserver is not available.
 *
 * ### Related Resources
 * - [MDN: ResizeObserver](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver)
 * - [MDN: Element.getBoundingClientRect()](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)
 */

const meta = {
  title: "Hooks/Utility/useMeasure",
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
    // State for resizable element
    const [size, setSize] = useState({ width: 200, height: 150 });
    const [ref, rect] = useMeasure<HTMLDivElement>();
    const resizableRef = useRef<HTMLDivElement>(null);

    // Update measurements on animation frame
    useEffect(() => {
      let rafId: number;
      const updateMeasurements = () => {
        if (resizableRef.current) {
          ref(resizableRef.current);
        }
        rafId = requestAnimationFrame(updateMeasurements);
      };

      rafId = requestAnimationFrame(updateMeasurements);
      return () => cancelAnimationFrame(rafId);
    }, [ref]);

    return (
      <div className="w-[500px]">
        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg space-y-8">
          {/* Resizable Element */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Resizable Element
            </h3>
            <div className="relative">
              <div
                ref={resizableRef}
                style={{
                  width: size.width,
                  height: size.height,
                }}
                className="bg-blue-100 dark:bg-blue-900/20 rounded-lg p-4 relative"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-blue-600 dark:text-blue-400 text-sm">
                    Resize me using the handles!
                  </p>
                </div>
                {/* Resize handles */}
                <div
                  className="absolute right-0 inset-y-0 w-2 cursor-ew-resize hover:bg-blue-300 dark:hover:bg-blue-700 rounded"
                  onMouseDown={(e) => {
                    const startX = e.clientX;
                    const startWidth = size.width;

                    const handleMouseMove = (e: MouseEvent) => {
                      const delta = e.clientX - startX;
                      setSize((prev) => ({
                        ...prev,
                        width: Math.max(50, startWidth + delta),
                      }));
                    };

                    const handleMouseUp = () => {
                      document.removeEventListener(
                        "mousemove",
                        handleMouseMove,
                      );
                      document.removeEventListener("mouseup", handleMouseUp);
                    };

                    document.addEventListener("mousemove", handleMouseMove);
                    document.addEventListener("mouseup", handleMouseUp);
                  }}
                />
                <div
                  className="absolute bottom-0 inset-x-0 h-2 cursor-ns-resize hover:bg-blue-300 dark:hover:bg-blue-700 rounded"
                  onMouseDown={(e) => {
                    const startY = e.clientY;
                    const startHeight = size.height;

                    const handleMouseMove = (e: MouseEvent) => {
                      const delta = e.clientY - startY;
                      setSize((prev) => ({
                        ...prev,
                        height: Math.max(50, startHeight + delta),
                      }));
                    };

                    const handleMouseUp = () => {
                      document.removeEventListener(
                        "mousemove",
                        handleMouseMove,
                      );
                      document.removeEventListener("mouseup", handleMouseUp);
                    };

                    document.addEventListener("mousemove", handleMouseMove);
                    document.addEventListener("mouseup", handleMouseUp);
                  }}
                />
              </div>
            </div>
            <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded space-y-2">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Width:
                  </p>
                  <p className="font-mono text-slate-700 dark:text-slate-300">
                    {Math.round(rect.width)}px
                  </p>
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Height:
                  </p>
                  <p className="font-mono text-slate-700 dark:text-slate-300">
                    {Math.round(rect.height)}px
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Position:
                  </p>
                  <p className="font-mono text-slate-700 dark:text-slate-300">
                    x: {Math.round(rect.x)}px, y: {Math.round(rect.y)}px
                  </p>
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Bounds:
                  </p>
                  <p className="font-mono text-slate-700 dark:text-slate-300">
                    {Math.round(rect.left)}px, {Math.round(rect.top)}px,{" "}
                    {Math.round(rect.right)}px, {Math.round(rect.bottom)}px
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
            <p className="text-sm text-blue-600 dark:text-blue-400">
              Try resizing the blue box using the right and bottom handles!
              Watch how the measurements update in real-time as you interact
              with the element! 📏
            </p>
          </div>
        </div>
      </div>
    );
  },
};
