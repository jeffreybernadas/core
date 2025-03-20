import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useIsMobile } from "../../hooks/useIsMobile";
import { ThemeProvider } from "../../themes/shadcn";
const meta = {
  title: "Hooks/useIsMobile",
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
type Story = StoryObj;

/**
 * `useIsMobile` is a hook that detects whether the current viewport is mobile-sized.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useIsMobile } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useIsMobile } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const MyComponent = () => {
 *   const isMobile = useIsMobile();
 *
 *   return (
 *     <div>
 *       {isMobile ? (
 *         <MobileView />
 *       ) : (
 *         <DesktopView />
 *       )}
 *     </div>
 *   );
 * };
 * ```
 *
 * ### Advanced Usage with Custom Breakpoint
 * ```tsx
 * const MyComponent = () => {
 *   // Override default breakpoint (768px)
 *   const isMobile = useIsMobile(960);
 *
 *   return (
 *     <div>
 *       Current view: {isMobile ? "Mobile" : "Desktop"}
 *     </div>
 *   );
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * useIsMobile(
 *   breakpoint?: number // Mobile breakpoint in pixels (default: 768)
 * ): boolean
 * ```
 *
 * ### Browser Compatibility
 * This hook uses the following Web APIs:
 * - [Window.innerWidth](https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth)
 * - [Window: resize event](https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event)
 *
 * Supported in all modern browsers. For IE support, consider using a polyfill.
 */
export const Example: Story = {
  render: () => {
    const isMobile = useIsMobile();
    const isMobileCustom = useIsMobile(960);

    return (
      <div className="space-y-6 max-w-lg">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">
            Default Breakpoint (768px)
          </h3>
          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <p className="text-slate-700 dark:text-slate-300">
              Current view:{" "}
              <span className="font-semibold">
                {isMobile ? "Mobile" : "Desktop"}
              </span>
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">
            Custom Breakpoint (960px)
          </h3>
          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <p className="text-slate-700 dark:text-slate-300">
              Current view:{" "}
              <span className="font-semibold">
                {isMobileCustom ? "Mobile" : "Desktop"}
              </span>
            </p>
          </div>
        </div>

        <p className="text-sm text-slate-500 dark:text-slate-400">
          Try resizing your browser window to see the changes!
        </p>
      </div>
    );
  },
};
