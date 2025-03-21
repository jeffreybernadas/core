import React, { useRef } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import useObservable from "../../hooks/useObservable";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useObservable` is a hook that subscribes to an Observable stream and returns its latest value.
 * It's useful for integrating RxJS or similar reactive libraries with React components.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useObservable } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useObservable } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = () => {
 *   const observable$ = {
 *     subscribe: (listener) => {
 *       const interval = setInterval(() => {
 *         listener(new Date());
 *       }, 1000);
 *       return {
 *         unsubscribe: () => clearInterval(interval)
 *       };
 *     }
 *   };
 *
 *   const currentTime = useObservable(observable$, new Date());
 *
 *   return (
 *     <div>Current Time: {currentTime.toLocaleTimeString()}</div>
 *   );
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * useObservable<T>(
 *   observable$: Observable<T>, // Observable stream
 *   initialValue?: T // Optional initial value
 * ): T | undefined
 * ```
 *
 * ### Returns
 * ```tsx
 * T | undefined // Latest value from the observable stream
 * ```
 *
 * ### Browser Compatibility
 * Uses standard JavaScript features.
 * Compatible with all modern browsers.
 *
 * ### Related Resources
 * - [RxJS](https://rxjs.dev/)
 * - [Observable Pattern](https://en.wikipedia.org/wiki/Observer_pattern)
 */

const meta = {
  title: "Hooks/Utility/useObservable",
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

interface SensorData {
  temperature: number;
  humidity: number;
  timestamp: Date;
}

const ObservableExample = () => {
  // Create refs to store unsubscribe functions
  const temperatureRef = useRef<number>(20);
  const humidityRef = useRef<number>(50);
  const noiseRef = useRef<number>(0);

  // Create an observable that simulates sensor data
  const sensorData$ = {
    subscribe: (listener: (value: SensorData) => void) => {
      // Simulate random fluctuations in temperature and humidity
      const interval = setInterval(() => {
        // Add some noise to the values
        noiseRef.current = (Math.random() - 0.5) * 2;
        temperatureRef.current = Math.max(
          15,
          Math.min(25, temperatureRef.current + noiseRef.current),
        );
        humidityRef.current = Math.max(
          30,
          Math.min(70, humidityRef.current + noiseRef.current),
        );

        listener({
          temperature: temperatureRef.current,
          humidity: humidityRef.current,
          timestamp: new Date(),
        });
      }, 1000);

      return {
        unsubscribe: () => clearInterval(interval),
      };
    },
  };

  // Subscribe to the sensor data stream
  const data = useObservable(sensorData$, {
    temperature: 20,
    humidity: 50,
    timestamp: new Date(),
  });

  // Calculate temperature and humidity indicators
  const tempPercentage = ((data.temperature - 15) / 10) * 100; // 15-25°C range
  const humidityPercentage = ((data.humidity - 30) / 40) * 100; // 30-70% range

  return (
    <div className="w-[400px] space-y-6">
      <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Live Sensor Data</h3>

        {/* Temperature Gauge */}
        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm">
            <span>Temperature</span>
            <span className="font-mono">{data.temperature.toFixed(1)}°C</span>
          </div>
          <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-red-500 transition-all duration-300"
              style={{ width: `${tempPercentage}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-slate-500">
            <span>15°C</span>
            <span>25°C</span>
          </div>
        </div>

        {/* Humidity Gauge */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Humidity</span>
            <span className="font-mono">{data.humidity.toFixed(1)}%</span>
          </div>
          <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 transition-all duration-300"
              style={{ width: `${humidityPercentage}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-slate-500">
            <span>30%</span>
            <span>70%</span>
          </div>
        </div>
      </div>

      {/* Last Update */}
      <div className="text-center text-sm text-slate-500">
        Last updated: {data.timestamp.toLocaleTimeString()}
      </div>

      {/* Instructions */}
      <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
        <p className="text-sm text-blue-600 dark:text-blue-400">
          Watch the live sensor data! The values are updated every second with
          random fluctuations 📊
        </p>
      </div>
    </div>
  );
};

export const Example: Story = {
  render: () => <ObservableExample />,
};
