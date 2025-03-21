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
 * const Component = () => {
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
  title: "Hooks/Browser API/useSize",
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

const SizeExample = () => {
  const [sized, { width, height }] = useSize(
    <div
      style={{
        resize: "both",
        overflow: "auto",
        minWidth: "200px",
        minHeight: "100px",
        border: "2px solid #e2e8f0",
        borderRadius: "8px",
        padding: "16px",
      }}
    >
      <div className="h-full w-full flex items-center justify-center">
        Resize me from the bottom-right corner!
      </div>
    </div>,
  );

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Resizable Container</h3>
        {sized}
      </div>

      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-semibold mb-2">Current Dimensions</h4>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-3 rounded shadow-sm">
            <div className="text-sm text-gray-600">Width</div>
            <div className="text-2xl font-mono">{Math.round(width)}px</div>
          </div>
          <div className="bg-white p-3 rounded shadow-sm">
            <div className="text-sm text-gray-600">Height</div>
            <div className="text-2xl font-mono">{Math.round(height)}px</div>
          </div>
        </div>
      </div>

      <div className="text-sm text-gray-600">
        <h4 className="font-semibold mb-1">Usage Instructions:</h4>
        <ul className="list-disc list-inside space-y-1">
          <li>Grab the bottom-right corner of the container above</li>
          <li>Drag to resize the container</li>
          <li>Watch the dimensions update in real-time</li>
          <li>The container has a minimum size of 200×100px</li>
        </ul>
      </div>
    </div>
  );
};

export const Example: Story = {
  render: () => <SizeExample />,
};
