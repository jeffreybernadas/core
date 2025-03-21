import React, { useRef } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useIntersection } from "../../hooks";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useIntersection` is a hook that detects when an element enters or leaves the viewport using the Intersection Observer API.
 * It's useful for implementing infinite scroll, lazy loading images, or any feature that needs to respond to element visibility.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useIntersection } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useIntersection } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = ({ src, alt }) => {
 *   const ref = useRef(null);
 *   const intersection = useIntersection(ref, {
 *     threshold: 0.5,
 *   });
 *
 *   return (
 *     <img
 *       ref={ref}
 *       src={intersection?.isIntersecting ? src : ''}
 *       alt={alt}
 *     />
 *   );
 * };
 * ```
 *
 * ### Advanced Usage
 * ```tsx
 * const InfiniteScroll = () => {
 *   const loaderRef = useRef(null);
 *   const intersection = useIntersection(loaderRef, {
 *     root: null,
 *     rootMargin: '100px',
 *     threshold: 1.0,
 *   });
 *
 *   useEffect(() => {
 *     if (intersection?.isIntersecting) {
 *       loadMoreItems();
 *     }
 *   }, [intersection]);
 *
 *   return (
 *     <div>
 *       {items}
 *       <div ref={loaderRef}>Loading...</div>
 *     </div>
 *   );
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * ref: RefObject<HTMLElement> // Reference to the target element
 * options: IntersectionObserverInit // Intersection Observer options
 * ```
 *
 * ### Returns
 * ```tsx
 * IntersectionObserverEntry | null // Entry containing intersection data
 * ```
 *
 * ### Browser Compatibility
 * Uses the Intersection Observer API:
 * - Modern browsers: Full support
 * - IE: No support
 * - Polyfill available for older browsers
 *
 * ### Related Resources
 * - [MDN: Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
 * - [W3C: Intersection Observer](https://w3c.github.io/IntersectionObserver/)
 */

const meta = {
  title: "Hooks/Browser API/useIntersection",
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
    // Create refs for each section
    const refs = Array.from({ length: 5 }, () => useRef<HTMLDivElement>(null));

    // Create intersection observers for each section
    const intersections = refs.map((ref) =>
      useIntersection(ref as unknown as React.RefObject<HTMLElement>, {
        threshold: 0.5,
        rootMargin: "0px",
      }),
    );

    // Generate random colors for sections
    const colors = [
      "bg-blue-500",
      "bg-green-500",
      "bg-purple-500",
      "bg-yellow-500",
      "bg-red-500",
    ];

    return (
      <div className="w-[400px]">
        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg space-y-4">
          {/* Fixed status display */}
          <div className="sticky top-0 bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md z-10">
            <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">
              Intersection Status
            </h3>
            <div className="grid grid-cols-5 gap-2">
              {intersections.map((intersection, index) => (
                <div
                  key={index}
                  className={`text-center p-2 rounded transition-colors ${
                    intersection?.isIntersecting
                      ? "bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300"
                      : "bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400"
                  }`}
                >
                  {index + 1}
                </div>
              ))}
            </div>
          </div>

          {/* Scrollable container */}
          <div className="h-[400px] overflow-y-auto rounded-lg">
            {refs.map((ref, index) => (
              <div
                key={index}
                ref={ref}
                className={`${
                  colors[index]
                } p-8 min-h-[200px] flex items-center justify-center transition-transform ${
                  intersections[index]?.isIntersecting
                    ? "scale-100 opacity-100"
                    : "scale-95 opacity-50"
                }`}
              >
                <div className="text-center text-white">
                  <div className="text-3xl font-bold mb-2">
                    Section {index + 1}
                  </div>
                  <div className="text-sm opacity-75">
                    {intersections[index]?.isIntersecting
                      ? "👁️ Visible"
                      : "👻 Hidden"}
                  </div>
                  <div className="text-xs mt-2">
                    Intersection ratio:{" "}
                    {Math.round(
                      (intersections[index]?.intersectionRatio || 0) * 100,
                    )}
                    %
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Instructions */}
          <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
            <p className="text-sm text-blue-600 dark:text-blue-400">
              Scroll through the colored sections and watch how the intersection
              status changes! Each section becomes fully visible when it's 50%
              in view 🔍
            </p>
          </div>
        </div>
      </div>
    );
  },
};
