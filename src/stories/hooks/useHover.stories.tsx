import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useHover } from "../../hooks";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useHover` is a hook that detects when a mouse enters or leaves an element.
 * It provides a simple way to add hover interactions to any React element.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useHover } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useHover } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = () => {
 *   const [hoverable, isHovered] = useHover(
 *     <div className="p-4 border rounded">
 *       Hover me!
 *     </div>
 *   );
 *
 *   return hoverable;
 * };
 * ```
 *
 * ### Advanced Usage
 * ```tsx
 * const DynamicHover = () => {
 *   const [hoverable, isHovered] = useHover((hovered) => (
 *     <div className={`p-4 border rounded ${hovered ? 'bg-blue-500' : ''}`}>
 *       {hovered ? '🎉 Hovering!' : 'Hover me!'}
 *     </div>
 *   ));
 *
 *   return hoverable;
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * element: Element // React element or function returning a React element
 * ```
 *
 * ### Returns
 * ```tsx
 * [React.ReactElement, boolean] // [Enhanced element with hover handlers, hover state]
 * ```
 *
 * ### Browser Compatibility
 * Uses standard mouse events:
 * - mouseenter
 * - mouseleave
 * Supported in all modern browsers.
 *
 * ### Related Resources
 * - [MDN: mouseenter event](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseenter_event)
 * - [MDN: mouseleave event](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseleave_event)
 */

const meta = {
  title: "Hooks/Event & Interaction/useHover",
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
    // Basic hover example
    const createBasicElement = (isHovered: boolean) => (
      <div className="p-4 bg-white dark:bg-slate-700 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105">
        <h3 className="text-lg font-semibold mb-2">Basic Hover</h3>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          {isHovered ? "🎉 You're hovering!" : "Hover over me!"}
        </p>
      </div>
    );
    const [basicElement] = useHover(createBasicElement);

    // Interactive card example
    const [cardElement] = useHover((isHovered) => (
      <div
        className={`p-6 rounded-lg shadow-lg transition-all duration-300 ${
          isHovered
            ? "bg-blue-500 text-white transform -translate-y-1"
            : "bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
        }`}
      >
        <h3 className="text-lg font-semibold mb-2">Interactive Card</h3>
        <p className="text-sm opacity-90">
          {isHovered
            ? "✨ Wow! Such interactivity!"
            : "Hover to see the magic happen"}
        </p>
      </div>
    ));

    // Tooltip example
    const createTooltipElement = (isHovered: boolean) => (
      <div className="relative inline-block">
        <button className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
          Hover for Info
        </button>
        <div
          className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-black text-white text-sm rounded transition-opacity ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          Tooltip!
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black" />
        </div>
      </div>
    );
    const [tooltipElement] = useHover(createTooltipElement);

    // Image gallery example
    const [imageElement] = useHover((isHovered) => (
      <div className="relative overflow-hidden rounded-lg">
        <img
          src="https://picsum.photos/300/200"
          alt="Random"
          className={`transition-transform duration-500 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        <div
          className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        >
          <span className="text-white text-lg">View Image</span>
        </div>
      </div>
    ));

    return (
      <div className="space-y-8 w-[300px]">
        {basicElement}
        {cardElement}
        <div className="flex justify-center">{tooltipElement}</div>
        {imageElement}

        {/* Instructions */}
        <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
          <p className="text-sm text-blue-600 dark:text-blue-400">
            Hover over each element to see different hover effects! Each example
            shows a unique way to use the useHover hook 🖱️
          </p>
        </div>
      </div>
    );
  },
};
