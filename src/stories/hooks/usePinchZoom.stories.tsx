import React, { useRef, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import usePinchZoom, { ZoomState } from "../../hooks/usePinchZoom";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `usePinchZoom` is a hook that detects pinch-to-zoom gestures on touch devices.
 * It's useful for implementing zoom functionality in image viewers, maps, or any zoomable content.
 *
 * ### Module Federation Import
 * ```tsx
 * import { usePinchZoom } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { usePinchZoom } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = () => {
 *   const elementRef = useRef(null);
 *   const { zoomingState, pinchState } = usePinchZoom(elementRef);
 *
 *   return (
 *     <div ref={elementRef}>
 *       {zoomingState === ZoomState.ZOOMING_IN && "Zooming In"}
 *       {zoomingState === ZoomState.ZOOMING_OUT && "Zooming Out"}
 *     </div>
 *   );
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * usePinchZoom(
 *   ref: RefObject<HTMLElement> // Reference to the element to detect pinch gestures on
 * ): {
 *   zoomingState: ZoomState | null, // Current zooming state (ZOOMING_IN, ZOOMING_OUT, or null)
 *   pinchState: number // Current pinch distance
 * }
 * ```
 *
 * ### Returns
 * ```tsx
 * {
 *   zoomingState: ZoomState | null, // Current zooming state
 *   pinchState: number // Current pinch distance
 * }
 * ```
 *
 * ### Browser Compatibility
 * Uses the Pointer Events API.
 * - Pointer Events: Modern browsers
 * - Touch Events fallback: Mobile browsers
 *
 * ### Related Resources
 * - [MDN: Pointer Events](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events)
 * - [MDN: Touch Events](https://developer.mozilla.org/en-US/docs/Web/API/Touch_events)
 */

const meta = {
  title: "Hooks/Event & Interaction/usePinchZoom",
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

const PinchZoomExample = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const { zoomingState, pinchState } = usePinchZoom(
    containerRef as React.RefObject<HTMLElement>,
  );

  // Update scale based on pinch state
  React.useEffect(() => {
    if (zoomingState === ZoomState.ZOOMING_IN) {
      setScale((prev) => Math.min(2, prev + 0.02));
    } else if (zoomingState === ZoomState.ZOOMING_OUT) {
      setScale((prev) => Math.max(0.5, prev - 0.02));
    }
  }, [zoomingState, pinchState]);

  return (
    <div className="w-[400px] space-y-6">
      {/* Zoom Container */}
      <div
        ref={containerRef}
        className="relative h-80 bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden touch-none"
        style={{ touchAction: "none" }}
      >
        {/* Zoom Indicator */}
        <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          {scale.toFixed(2)}x
        </div>

        {/* Zoom State Indicator */}
        {zoomingState && (
          <div
            className={`
              absolute top-4 left-4 px-3 py-1 rounded-full text-sm
              ${zoomingState === ZoomState.ZOOMING_IN ? "bg-green-500" : "bg-blue-500"}
              text-white
            `}
          >
            {zoomingState === ZoomState.ZOOMING_IN
              ? "Zooming In"
              : "Zooming Out"}
          </div>
        )}

        {/* Zoomable Content */}
        <div
          className="absolute inset-0 flex items-center justify-center transition-transform duration-75"
          style={{ transform: `scale(${scale})` }}
        >
          {/* Grid Pattern */}
          <div className="relative w-48 h-48">
            <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-2">
              {Array.from({ length: 16 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-blue-500/20 dark:bg-blue-400/20 rounded-lg flex items-center justify-center"
                >
                  <span className="text-xs font-mono">{i + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Touch Points Visualization */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="relative w-full h-full">
            {pinchState > 0 && (
              <>
                <div className="absolute w-3 h-3 bg-yellow-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-ping" />
                <div className="absolute w-3 h-3 bg-yellow-500 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
              </>
            )}
          </div>
        </div>
      </div>

      {/* Scale Visualization */}
      <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Scale</span>
            <span className="font-mono">{scale.toFixed(2)}x</span>
          </div>
          <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 transition-all duration-75"
              style={{ width: `${((scale - 0.5) / 1.5) * 100}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-slate-500">
            <span>0.5x</span>
            <span>2.0x</span>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
        <p className="text-sm text-blue-600 dark:text-blue-400">
          Use two fingers to pinch and zoom on a touch device! The grid will
          scale between 0.5x and 2.0x 🔍
        </p>
      </div>
    </div>
  );
};

export const Example: Story = {
  render: () => <PinchZoomExample />,
};
