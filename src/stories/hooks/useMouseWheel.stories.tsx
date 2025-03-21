import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import useMouseWheel from "../../hooks/useMouseWheel";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useMouseWheel` is a hook that tracks the cumulative mouse wheel scroll value.
 * It's useful for creating custom scroll-based interactions or animations.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useMouseWheel } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useMouseWheel } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = () => {
 *   const scrollValue = useMouseWheel();
 *
 *   return (
 *     <div>
 *       Scroll Value: {scrollValue}
 *     </div>
 *   );
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * useMouseWheel(): number
 * ```
 *
 * ### Returns
 * ```tsx
 * number // Cumulative scroll value (positive for scroll down, negative for scroll up)
 * ```
 *
 * ### Browser Compatibility
 * Uses the standard wheel event.
 * Supported in all modern browsers.
 *
 * ### Related Resources
 * - [MDN: Wheel Event](https://developer.mozilla.org/en-US/docs/Web/API/Element/wheel_event)
 */

const meta = {
  title: "Hooks/Event & Interaction/useMouseWheel",
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

const MouseWheelExample = () => {
  const scrollValue = useMouseWheel();
  const normalizedValue = Math.min(Math.max(scrollValue / 1000, -1), 1);
  const hue = ((normalizedValue + 1) * 180).toFixed(0); // Map -1 to 1 to 0° to 360°

  return (
    <div className="w-[400px] space-y-4">
      {/* Visual Indicator */}
      <div className="relative h-64 bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden">
        {/* Color Bar */}
        <div
          className="absolute inset-0 transition-transform duration-200"
          style={{
            background: `hsl(${hue}deg 70% 60%)`,
            transform: `scaleY(${(normalizedValue + 1) / 2})`,
            transformOrigin: "bottom",
          }}
        />

        {/* Scroll Value */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-shadow">
          <div className="text-4xl font-bold">{scrollValue.toFixed(0)}</div>
          <div className="text-sm opacity-80">
            Normalized: {normalizedValue.toFixed(2)}
          </div>
        </div>

        {/* Grid Lines */}
        <div className="absolute inset-0 grid grid-rows-10 pointer-events-none">
          {Array.from({ length: 11 }).map((_, i) => (
            <div
              key={i}
              className="border-t border-black/10 dark:border-white/10"
              style={{ transform: "translateY(-0.5px)" }}
            />
          ))}
        </div>
      </div>

      {/* Value Display */}
      <div className="bg-slate-900 text-slate-300 p-4 rounded-lg space-y-2 font-mono text-sm">
        <p>
          <span className="text-slate-500">Raw Scroll:</span>{" "}
          <span className="text-blue-400">{scrollValue.toFixed(0)}</span>
        </p>
        <p>
          <span className="text-slate-500">Normalized:</span>{" "}
          <span className="text-green-400">{normalizedValue.toFixed(2)}</span>
        </p>
        <p>
          <span className="text-slate-500">Color Hue:</span>{" "}
          <span className="text-purple-400">{hue}°</span>
        </p>
      </div>

      {/* Instructions */}
      <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
        <p className="text-sm text-blue-600 dark:text-blue-400">
          Use your mouse wheel or trackpad to scroll! Watch how the color and
          height change based on the cumulative scroll value 🎨
        </p>
      </div>
    </div>
  );
};

export const Example: Story = {
  render: () => <MouseWheelExample />,
};
