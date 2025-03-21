import React, { useRef, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import useFullscreen from "../../hooks/useFullscreen";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useFullscreen` is a hook that enables fullscreen mode for any element or video.
 * It provides a cross-browser solution for handling fullscreen functionality.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useFullscreen } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useFullscreen } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = () => {
 *   const ref = useRef(null);
 *   const [enabled, setEnabled] = useState(false);
 *   const isFullscreen = useFullscreen(ref, enabled);
 *
 *   return (
 *     <div ref={ref}>
 *       <button onClick={() => setEnabled(!enabled)}>
 *         {isFullscreen ? "Exit" : "Enter"} Fullscreen
 *       </button>
 *     </div>
 *   );
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * useFullscreen(
 *   ref: RefObject<Element>, // Reference to the target element
 *   enabled: boolean, // Whether fullscreen should be enabled
 *   options?: {
 *     video?: RefObject<HTMLVideoElement>, // Optional video element reference
 *     onClose?: (error?: Error) => void // Callback when fullscreen is closed
 *   }
 * ): boolean // Whether the element is currently in fullscreen
 * ```
 *
 * ### Returns
 * ```tsx
 * boolean // Whether the element is currently in fullscreen mode
 * ```
 *
 * ### Browser Compatibility
 * Uses Screenfull.js for cross-browser compatibility:
 * - Modern browsers: requestFullscreen API
 * - Safari iOS: webkitEnterFullscreen for video
 * Supported in most modern browsers.
 *
 * ### Related Resources
 * - [MDN: Fullscreen API](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API)
 * - [Screenfull.js](https://github.com/sindresorhus/screenfull.js/)
 */

const meta = {
  title: "Hooks/Browser API/useFullscreen",
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
    // Example 1: Basic Element Fullscreen
    const elementRef = useRef<HTMLDivElement>(
      null,
    ) as React.RefObject<HTMLDivElement>;
    const [elementEnabled, setElementEnabled] = useState(false);
    const isElementFullscreen = useFullscreen(elementRef, elementEnabled);

    // Example 2: Video Fullscreen
    const videoRef = useRef<HTMLVideoElement>(
      null,
    ) as React.RefObject<HTMLVideoElement>;
    const [videoEnabled, setVideoEnabled] = useState(false);
    const isVideoFullscreen = useFullscreen(videoRef, videoEnabled, {
      video: videoRef,
      onClose: () => {
        setVideoEnabled(false);
        console.log("Video fullscreen closed");
      },
    });

    return (
      <div className="w-[400px]">
        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg space-y-6">
          {/* Element Fullscreen Example */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Element Fullscreen
            </h3>
            <div
              ref={elementRef}
              className={`bg-slate-100 dark:bg-slate-700 p-4 rounded transition-all ${
                isElementFullscreen
                  ? "fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-slate-900"
                  : ""
              }`}
            >
              <div className="text-center">
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                  {isElementFullscreen
                    ? "You're in fullscreen mode!"
                    : "Click the button below to enter fullscreen"}
                </p>
                <button
                  onClick={() => setElementEnabled(!elementEnabled)}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  {isElementFullscreen ? "Exit" : "Enter"} Fullscreen
                </button>
              </div>
            </div>
          </div>

          {/* Video Fullscreen Example */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Video Fullscreen
            </h3>
            <div className="bg-green-100 dark:bg-green-900/20 p-4 rounded">
              <video
                ref={videoRef}
                src="https://dn720407.ca.archive.org/0/items/rick-roll/Rick%20Roll.ia.mp4"
                controls
                className="w-full rounded"
              />
              <button
                onClick={() => setVideoEnabled(!videoEnabled)}
                className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 w-full"
              >
                {isVideoFullscreen ? "Exit" : "Enter"} Video Fullscreen
              </button>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
            <p className="text-sm text-blue-600 dark:text-blue-400">
              Try both fullscreen options! The element example shows how to make
              any div fullscreen, while the video example demonstrates native
              video fullscreen support. Press ESC or the buttons to exit
              fullscreen mode. 🖥️
            </p>
          </div>
        </div>
      </div>
    );
  },
};
