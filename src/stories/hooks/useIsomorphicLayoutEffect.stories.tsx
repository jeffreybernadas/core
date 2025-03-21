import React, { useRef, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useIsomorphicLayoutEffect } from "../../hooks";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useIsomorphicLayoutEffect` is a hook that provides a safe way to use `useLayoutEffect` in both browser and server environments.
 * It automatically uses `useLayoutEffect` in the browser and falls back to `useEffect` during server-side rendering.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useIsomorphicLayoutEffect } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useIsomorphicLayoutEffect } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = () => {
 *   const elementRef = useRef(null);
 *   const [width, setWidth] = useState(0);
 *
 *   useIsomorphicLayoutEffect(() => {
 *     setWidth(elementRef.current.offsetWidth);
 *   }, []);
 *
 *   return <div ref={elementRef}>Width: {width}px</div>;
 * };
 * ```
 *
 * ### Advanced Usage
 * ```tsx
 * const AnimatedList = ({ items }) => {
 *   const listRef = useRef(null);
 *
 *   useIsomorphicLayoutEffect(() => {
 *     // Measure and update layout before browser paint
 *     const items = listRef.current.children;
 *     const heights = Array.from(items).map(item => item.offsetHeight);
 *     // Apply measurements synchronously
 *     items.forEach((item, i) => {
 *       item.style.top = `${heights.slice(0, i).reduce((a, b) => a + b, 0)}px`;
 *     });
 *   }, [items]);
 *
 *   return <div ref={listRef}>{items}</div>;
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * effect: EffectCallback // Effect function to run
 * deps?: DependencyList // Optional array of dependencies
 * ```
 *
 * ### Returns
 * ```tsx
 * void
 * ```
 *
 * ### Browser Compatibility
 * Uses React's built-in hooks:
 * - useLayoutEffect (browser)
 * - useEffect (server)
 * Supported in all environments where React runs.
 *
 * ### Related Resources
 * - [React: useLayoutEffect](https://react.dev/reference/react/useLayoutEffect)
 * - [React: useEffect](https://react.dev/reference/react/useEffect)
 */

const meta = {
  title: "Hooks/Lifecycle/useIsomorphicLayoutEffect",
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
    // Example 1: Measure and display element dimensions
    const MeasureExample = () => {
      const boxRef = useRef<HTMLDivElement>(null);
      const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

      useIsomorphicLayoutEffect(() => {
        if (boxRef.current) {
          setDimensions({
            width: boxRef.current.offsetWidth,
            height: boxRef.current.offsetHeight,
          });
        }
      }, []);

      return (
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            Element Measurement
          </h3>
          <div ref={boxRef} className="bg-blue-500 text-white p-4 rounded">
            Dimensions measured on mount:
            <div className="font-mono mt-1">
              {dimensions.width}px × {dimensions.height}px
            </div>
          </div>
        </div>
      );
    };

    // Example 2: Smooth height transition
    const TransitionExample = () => {
      const [expanded, setExpanded] = useState(false);
      const contentRef = useRef<HTMLDivElement>(null);
      const [height, setHeight] = useState<number | "auto">("auto");

      useIsomorphicLayoutEffect(() => {
        if (contentRef.current) {
          const newHeight = contentRef.current.scrollHeight;
          setHeight(expanded ? newHeight : 48);
        }
      }, [expanded]);

      return (
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            Smooth Height Transition
          </h3>
          <div className="bg-slate-100 dark:bg-slate-700 rounded overflow-hidden">
            <div
              ref={contentRef}
              style={{
                height: typeof height === "number" ? `${height}px` : height,
              }}
              className="transition-all duration-300 ease-in-out"
            >
              <div className="p-4">
                <p className="text-slate-700 dark:text-slate-300">
                  This is a long text that demonstrates smooth height
                  transitions. When you click the button below, this container
                  will smoothly expand or collapse to show or hide the full
                  content.
                </p>
                {expanded && (
                  <p className="mt-4 text-slate-600 dark:text-slate-400">
                    This additional content appears and disappears with a smooth
                    height animation. The transition is handled by measuring the
                    content height before the browser paints the changes.
                  </p>
                )}
              </div>
            </div>
            <button
              onClick={() => setExpanded(!expanded)}
              className="w-full p-2 bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-500 transition-colors"
            >
              {expanded ? "Show Less ↑" : "Show More ↓"}
            </button>
          </div>
        </div>
      );
    };

    return (
      <div className="w-[400px]">
        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg space-y-6">
          <MeasureExample />
          <TransitionExample />

          {/* Instructions */}
          <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
            <p className="text-sm text-blue-600 dark:text-blue-400">
              Check out how measurements are taken instantly! Click "Show More"
              to see smooth height transitions powered by
              useIsomorphicLayoutEffect! 📏
            </p>
          </div>
        </div>
      </div>
    );
  },
};
