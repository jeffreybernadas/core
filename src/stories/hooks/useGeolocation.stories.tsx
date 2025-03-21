import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import useGeolocation from "../../hooks/useGeolocation";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useGeolocation` is a hook that provides access to the browser's Geolocation API.
 * It returns the user's current position and updates in real-time.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useGeolocation } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useGeolocation } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = () => {
 *   const state = useGeolocation();
 *
 *   return (
 *     <div>
 *       {state.loading ? (
 *         "Loading..."
 *       ) : (
 *         <div>
 *           Latitude: {state.latitude}
 *           Longitude: {state.longitude}
 *         </div>
 *       )}
 *     </div>
 *   );
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * useGeolocation(
 *   options?: PositionOptions // Optional configuration for the geolocation request
 * ): GeoLocationSensorState
 * ```
 *
 * ### Returns
 * ```tsx
 * {
 *   loading: boolean;
 *   accuracy: number | null;
 *   altitude: number | null;
 *   altitudeAccuracy: number | null;
 *   heading: number | null;
 *   latitude: number | null;
 *   longitude: number | null;
 *   speed: number | null;
 *   timestamp: number | null;
 *   error?: Error | IGeolocationPositionError;
 * }
 * ```
 *
 * ### Browser Compatibility
 * Uses the Geolocation API:
 * - navigator.geolocation
 * - getCurrentPosition
 * - watchPosition
 * Supported in all modern browsers.
 *
 * ### Related Resources
 * - [MDN: Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
 * - [MDN: Using the Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
 */

const meta = {
  title: "Hooks/Browser API/useGeolocation",
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
    const state = useGeolocation({
      enableHighAccuracy: true,
      maximumAge: 0,
      timeout: 5000,
    });

    const formatCoordinate = (value: number | null): string => {
      if (value === null) return "N/A";
      return value.toFixed(6);
    };

    const formatSpeed = (value: number | null): string => {
      if (value === null) return "N/A";
      return `${(value * 3.6).toFixed(2)} km/h`; // Convert m/s to km/h
    };

    const formatTimestamp = (value: number | null): string => {
      if (value === null) return "N/A";
      return new Date(value).toLocaleString();
    };

    return (
      <div className="w-[400px]">
        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg space-y-6">
          {/* Loading State */}
          {state.loading && (
            <div className="bg-blue-100 dark:bg-blue-900/20 p-4 rounded text-center">
              <p className="text-blue-600 dark:text-blue-400">
                Requesting location access...
              </p>
            </div>
          )}

          {/* Error State */}
          {state.error && (
            <div className="bg-red-100 dark:bg-red-900/20 p-4 rounded">
              <h3 className="text-lg font-semibold text-red-600 dark:text-red-400">
                Error
              </h3>
              <p className="text-sm text-red-500 dark:text-red-300">
                {state.error.message}
              </p>
            </div>
          )}

          {/* Location Data */}
          {!state.loading && !state.error && (
            <>
              {/* Primary Coordinates */}
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  Primary Coordinates
                </h3>
                <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Latitude
                    </p>
                    <p className="text-lg font-mono text-slate-700 dark:text-slate-300">
                      {formatCoordinate(state.latitude)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Longitude
                    </p>
                    <p className="text-lg font-mono text-slate-700 dark:text-slate-300">
                      {formatCoordinate(state.longitude)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional Data */}
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  Additional Data
                </h3>
                <div className="bg-green-100 dark:bg-green-900/20 p-4 rounded space-y-3">
                  <div>
                    <p className="text-sm text-green-600 dark:text-green-400">
                      Accuracy
                    </p>
                    <p className="text-lg font-mono text-green-700 dark:text-green-300">
                      {state.accuracy
                        ? `±${state.accuracy.toFixed(2)}m`
                        : "N/A"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-green-600 dark:text-green-400">
                      Altitude
                    </p>
                    <p className="text-lg font-mono text-green-700 dark:text-green-300">
                      {state.altitude ? `${state.altitude.toFixed(2)}m` : "N/A"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-green-600 dark:text-green-400">
                      Speed
                    </p>
                    <p className="text-lg font-mono text-green-700 dark:text-green-300">
                      {formatSpeed(state.speed)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Timestamp */}
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  Last Update
                </h3>
                <div className="bg-purple-100 dark:bg-purple-900/20 p-4 rounded">
                  <p className="text-sm text-purple-600 dark:text-purple-400">
                    Timestamp
                  </p>
                  <p className="text-lg font-mono text-purple-700 dark:text-purple-300">
                    {formatTimestamp(state.timestamp)}
                  </p>
                </div>
              </div>
            </>
          )}

          {/* Instructions */}
          <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
            <p className="text-sm text-blue-600 dark:text-blue-400">
              Allow location access to see your current position! The hook will
              continuously update your location data in real-time. Try moving
              around to see the values change! 📍
            </p>
          </div>
        </div>
      </div>
    );
  },
};
