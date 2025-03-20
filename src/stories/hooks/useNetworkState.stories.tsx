import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useNetworkState } from "../../hooks";
import { ThemeProvider } from "next-themes";

/**
 * `useNetworkState` is a hook that tracks the browser's network connection state.
 * It's useful for implementing offline-first functionality and network-aware features.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useNetworkState } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useNetworkState } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const NetworkStatus = () => {
 *   const state = useNetworkState();
 *
 *   return (
 *     <div>
 *       <div>Online: {state.online ? 'Yes' : 'No'}</div>
 *       {state.online && (
 *         <div>
 *           <div>Downlink: {state.downlink} Mbps</div>
 *           <div>Effective Type: {state.effectiveType}</div>
 *         </div>
 *       )}
 *     </div>
 *   );
 * };
 * ```
 *
 * ### Advanced Usage
 * ```tsx
 * const NetworkAwareComponent = () => {
 *   const state = useNetworkState();
 *
 *   const getImageQuality = () => {
 *     if (!state.online) return 'low';
 *     if (state.effectiveType === '4g') return 'high';
 *     if (state.downlink > 1) return 'medium';
 *     return 'low';
 *   };
 *
 *   return (
 *     <div>
 *       <div>Connection Status: {state.online ? 'Connected' : 'Offline'}</div>
 *       <div>Loading images in {getImageQuality()} quality</div>
 *     </div>
 *   );
 * };
 * ```
 *
 * ### Parameters
 * None
 *
 * ### Returns
 * ```tsx
 * {
 *   online: boolean;
 *   since?: Date;
 *   downlink?: number;
 *   downlinkMax?: number;
 *   effectiveType?: '2g' | '3g' | '4g';
 *   rtt?: number;
 *   saveData?: boolean;
 *   type?: 'bluetooth' | 'cellular' | 'ethernet' | 'none' | 'wifi' | 'wimax' | 'other' | 'unknown';
 * }
 * ```
 *
 * ### Browser Compatibility
 * - Network Information API is not fully supported in all browsers
 * - Basic online/offline status is widely supported
 * - Advanced metrics (downlink, effectiveType) may be undefined in some browsers
 *
 * ### Related Resources
 * - [MDN: Network Information API](https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API)
 * - [MDN: Navigator.onLine](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/onLine)
 */
const meta = {
  title: "Hooks/useNetworkState",
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

export const BasicExample: Story = {
  render: () => {
    const state = useNetworkState();

    return (
      <div className="space-y-6 max-w-lg">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">
            Network Status
          </h3>
          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg space-y-4">
            <div className="flex items-center space-x-2">
              <div
                className={`w-3 h-3 rounded-full ${state.online ? "bg-green-500" : "bg-red-500"}`}
              />
              <span className="text-slate-700 dark:text-slate-300">
                {state.online ? "Online" : "Offline"}
              </span>
            </div>
            {state.online && (
              <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                {state.effectiveType && (
                  <div>Connection: {state.effectiveType.toUpperCase()}</div>
                )}
                {state.downlink && <div>Speed: {state.downlink} Mbps</div>}
                {state.type && <div>Type: {state.type}</div>}
                {state.rtt && <div>Latency: {state.rtt}ms</div>}
                {state.saveData !== undefined && (
                  <div>Data Saver: {state.saveData ? "On" : "Off"}</div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  },
};
