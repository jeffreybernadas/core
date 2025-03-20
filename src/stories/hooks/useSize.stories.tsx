import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useSize } from "../../hooks";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useSize` is a hook that tracks an element's dimensions using an iframe-based approach.
 * It's useful for responsive layouts, dynamic sizing, and element measurements.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useSize } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useSize } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const ResponsiveBox = () => {
 *   const [sized, size] = useSize(
 *     <div>Resize me!</div>
 *   );
 *
 *   return (
 *     <div>
 *       {sized}
 *       <div>
 *         Width: {size.width}px
 *         Height: {size.height}px
 *       </div>
 *     </div>
 *   );
 * };
 * ```
 *
 * ### Advanced Usage
 * ```tsx
 * const ResponsiveGrid = () => {
 *   const containerRef = useRef(null);
 *   const size = useSize(containerRef);
 *
 *   const columns = Math.max(1, Math.floor((size?.width ?? 0) / 100));
 *
 *   return (
 *     <div ref={containerRef}>
 *       <div>
 *         {Array.from({ length: columns }, (_, i) => (
 *           <div key={i}>Column {i + 1}</div>
 *         ))}
 *       </div>
 *       <div>
 *         Container width: {size?.width}px
 *         Columns: {columns}
 *       </div>
 *     </div>
 *   );
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * useSize(
 *   ref: RefObject<HTMLElement> // Reference to the element to observe
 * ): { width: number; height: number } | undefined
 * ```
 *
 * ### Returns
 * - An object containing:
 *   - width (number): Element's width in pixels
 *   - height (number): Element's height in pixels
 * - undefined if the element is not yet mounted
 *
 * ### Browser Compatibility
 * Uses ResizeObserver API, supported in all modern browsers.
 * Consider using a polyfill for older browsers.
 *
 * ### Related Resources
 * - [MDN: ResizeObserver](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver)
 */
const meta = {
  title: "Hooks/useSize",
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

export const ResizableBox: Story = {
  render: () => {
    const [sized, size] = useSize(
      <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg resize overflow-auto min-w-[200px] min-h-[100px]">
        Resize me using the handle at the bottom right!
      </div>,
    );

    return (
      <div className="space-y-6 max-w-lg">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">
            Resizable Box
          </h3>
          <div className="space-y-4">
            {sized}
            <div className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
              <div>Width: {size.width}px</div>
              <div>Height: {size.height}px</div>
            </div>
          </div>
        </div>
      </div>
    );
  },
};
