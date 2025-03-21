import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import useOrientation from "../../hooks/useOrientation";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useOrientation` is a hook that tracks the device's screen orientation.
 * It provides both the angle and type of orientation, useful for responsive design and mobile-first applications.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useOrientation } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useOrientation } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = () => {
 *   const { angle, type } = useOrientation();
 *
 *   return (
 *     <div>
 *       <div>Angle: {angle}°</div>
 *       <div>Type: {type}</div>
 *     </div>
 *   );
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * useOrientation(
 *   initialState?: OrientationState = { // Optional initial state
 *     angle: 0,
 *     type: "landscape-primary"
 *   }
 * ): OrientationState
 * ```
 *
 * ### Returns
 * ```tsx
 * {
 *   angle: number, // The angle of rotation (0, 90, 180, or 270)
 *   type: string // The orientation type (e.g., "landscape-primary", "portrait-secondary")
 * }
 * ```
 *
 * ### Browser Compatibility
 * Uses the Screen Orientation API and fallbacks.
 * - Screen Orientation API: Modern browsers
 * - window.orientation: Legacy support
 *
 * ### Related Resources
 * - [MDN: Screen Orientation API](https://developer.mozilla.org/en-US/docs/Web/API/Screen_Orientation_API)
 * - [MDN: Window.orientation](https://developer.mozilla.org/en-US/docs/Web/API/Window/orientation)
 */

const meta = {
  title: "Hooks/Utility/useOrientation",
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

const OrientationExample = () => {
  const { angle, type } = useOrientation();

  // Calculate rotation for the device frame
  const frameRotation = angle;

  // Determine if we're in portrait or landscape
  const isPortrait = type.includes("portrait");

  return (
    <div className="w-[400px] space-y-6">
      {/* Device Visualization */}
      <div className="relative h-80 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center">
        {/* Device Frame */}
        <div
          className="relative transition-transform duration-300"
          style={{ transform: `rotate(${frameRotation}deg)` }}
        >
          {/* Phone Frame */}
          <div
            className={`
              relative border-8 border-slate-300 dark:border-slate-600 rounded-[3rem] bg-white dark:bg-slate-700
              ${isPortrait ? "w-48 h-80" : "w-80 h-48"}
              transition-all duration-300
            `}
          >
            {/* Screen Content */}
            <div className="absolute inset-2 bg-slate-100 dark:bg-slate-800 rounded-[2rem] flex items-center justify-center">
              <div className="text-center space-y-2">
                <div className="text-4xl">📱</div>
                <div className="text-sm font-medium">{type}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Angle Indicator */}
        <div className="absolute bottom-4 left-4 bg-slate-200 dark:bg-slate-700 rounded-full px-3 py-1">
          <span className="font-mono text-sm">{angle}°</span>
        </div>
      </div>

      {/* Orientation Details */}
      <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-lg space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">Angle</span>
          <span className="font-mono">{angle}°</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">Type</span>
          <span className="font-mono">{type || "unknown"}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">Mode</span>
          <span className="font-mono">
            {isPortrait ? "Portrait" : "Landscape"}
          </span>
        </div>
      </div>

      {/* Instructions */}
      <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
        <p className="text-sm text-blue-600 dark:text-blue-400">
          Rotate your device or use device orientation controls to see the
          visualization update! 📱
        </p>
      </div>
    </div>
  );
};

export const Example: Story = {
  render: () => <OrientationExample />,
};
