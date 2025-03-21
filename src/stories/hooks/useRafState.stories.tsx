import React, { useEffect } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import useRafState from "../../hooks/useRafState";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useRafState` is a hook that provides a state that updates using requestAnimationFrame.
 * It's useful for smooth animations and performance-critical state updates.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useRafState } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useRafState } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = () => {
 *   const [position, setPosition] = useRafState({ x: 0, y: 0 });
 *
 *   useEffect(() => {
 *     const onMouseMove = (e: MouseEvent) => {
 *       setPosition({ x: e.clientX, y: e.clientY });
 *     };
 *
 *     window.addEventListener("mousemove", onMouseMove);
 *     return () => window.removeEventListener("mousemove", onMouseMove);
 *   }, []);
 *
 *   return (
 *     <div style={{ transform: `translate(${position.x}px, ${position.y}px)` }}>
 *       🎯
 *     </div>
 *   );
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * useRafState<S>(
 *   initialState: S | (() => S) // Initial state or state initializer function
 * ): [S, Dispatch<SetStateAction<S>>] // Returns [state, setState]
 * ```
 *
 * ### Returns
 * ```tsx
 * [
 *   state: S, // Current state
 *   setState: Dispatch<SetStateAction<S>> // State setter that uses requestAnimationFrame
 * ]
 * ```
 *
 * ### Browser Compatibility
 * Uses requestAnimationFrame API.
 * Compatible with all modern browsers.
 *
 * ### Related Resources
 * - [MDN: requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)
 * - [React useState Hook](https://react.dev/reference/react/useState)
 */

const meta = {
  title: "Hooks/State Management/useRafState",
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

interface AnimationState {
  rotation: number;
  scale: number;
  hue: number;
}

const RafStateExample = () => {
  const [state, setState] = useRafState<AnimationState>({
    rotation: 0,
    scale: 1,
    hue: 0,
  });

  // Animate continuously
  useEffect(() => {
    const startTime = performance.now();
    let animationFrame: number;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;

      setState({
        rotation: (elapsed / 20) % 360,
        scale: 1 + Math.sin(elapsed / 1000) * 0.2,
        hue: (elapsed / 50) % 360,
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="w-[400px] space-y-6">
      {/* Animation Container */}
      <div className="relative h-80 bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden">
        {/* Animated Element */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            transform: `rotate(${state.rotation}deg) scale(${state.scale})`,
          }}
        >
          <div
            className="w-32 h-32 rounded-xl shadow-lg flex items-center justify-center text-white text-2xl font-bold"
            style={{
              background: `hsl(${state.hue}deg 70% 60%)`,
              transition: "background-color 0.1s linear",
            }}
          >
            RAF
          </div>
        </div>

        {/* Stats Overlay */}
        <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-3 text-white">
          <div className="grid grid-cols-3 gap-4 text-center text-sm">
            <div>
              <div className="text-xs opacity-70">Rotation</div>
              <div className="font-mono">{state.rotation.toFixed(1)}°</div>
            </div>
            <div>
              <div className="text-xs opacity-70">Scale</div>
              <div className="font-mono">{state.scale.toFixed(2)}x</div>
            </div>
            <div>
              <div className="text-xs opacity-70">Hue</div>
              <div className="font-mono">{state.hue.toFixed(1)}°</div>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Note */}
      <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-2">Performance Benefits</h3>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          useRafState batches state updates using requestAnimationFrame,
          ensuring smooth 60fps animations by synchronizing with the browser's
          render cycle.
        </p>
      </div>

      {/* Instructions */}
      <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
        <p className="text-sm text-blue-600 dark:text-blue-400">
          Watch the smooth animation powered by requestAnimationFrame! The
          element rotates, scales, and changes color continuously 🎨
        </p>
      </div>
    </div>
  );
};

export const Example: Story = {
  render: () => <RafStateExample />,
};
