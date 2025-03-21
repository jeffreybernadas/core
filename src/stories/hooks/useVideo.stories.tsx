import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import useVideo from "../../hooks/useVideo";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useVideo` is a hook that provides a way to control HTML5 video playback and monitor its state.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useVideo } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useVideo } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = () => {
 *   const [video, state, controls, ref] = useVideo({
 *     src: 'https://example.com/video.mp4',
 *     autoPlay: false,
 *   });
 *
 *   return (
 *     <div>
 *       {video}
 *       <div>Time: {state.time}</div>
 *       <button onClick={controls.play}>Play</button>
 *       <button onClick={controls.pause}>Pause</button>
 *     </div>
 *   );
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * useVideo(
 *   props: HTMLMediaProps // Video element props including src, autoPlay, controls, etc.
 * ): [JSX.Element, HTMLMediaState, HTMLMediaControls, React.RefObject<HTMLVideoElement>]
 * ```
 *
 * ### Returns
 * ```tsx
 * [
 *   JSX.Element,                              // Video element
 *   HTMLMediaState,                           // Current video state
 *   HTMLMediaControls,                        // Video control functions
 *   React.RefObject<HTMLVideoElement>         // Reference to video element
 * ]
 * ```
 *
 * ### Features
 * - Full video playback control
 * - State monitoring (time, duration, buffering)
 * - Volume and mute control
 * - Seeking functionality
 * - Custom controls support
 * - SSR compatible
 * - Type-safe
 *
 * ### Browser Compatibility
 * Compatible with all modern browsers that support:
 * - HTML5 Video
 * - Media Source Extensions
 *
 * ### Related Resources
 * - [HTMLVideoElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement)
 * - [Media Source Extensions](https://developer.mozilla.org/en-US/docs/Web/API/Media_Source_Extensions_API)
 */

const meta = {
  title: "Hooks/Browser API/useVideo",
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

const VideoExample = () => {
  const [video, state, controls, ref] = useVideo({
    src: "https://dn720407.ca.archive.org/0/items/rick-roll/Rick%20Roll.ia.mp4",
    autoPlay: false,
    controls: false,
  });

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="w-[500px]">
      <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            Video Player Demo
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            A custom video player with full playback control
          </p>
        </div>

        <div className="space-y-6">
          {/* Video Container */}
          <div className="relative rounded-lg overflow-hidden bg-black">
            {video}

            {/* Custom Controls */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              {/* Progress Bar */}
              <div className="mb-2">
                <div
                  className="h-1 bg-slate-600 dark:bg-slate-700 rounded-full cursor-pointer"
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const pos = (e.clientX - rect.left) / rect.width;
                    controls.seek(state.duration * pos);
                  }}
                >
                  <div
                    className="h-full bg-blue-500 rounded-full relative group"
                    style={{ width: `${(state.time / state.duration) * 100}%` }}
                  >
                    <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>

              {/* Controls Row */}
              <div className="flex items-center gap-4">
                {/* Play/Pause */}
                <button
                  onClick={state.paused ? controls.play : controls.pause}
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  {state.paused ? (
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75A.75.75 0 007.25 3h-1.5zM12.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75a.75.75 0 00-.75-.75h-1.5z" />
                    </svg>
                  )}
                </button>

                {/* Time */}
                <div className="text-white text-sm font-mono">
                  {formatTime(state.time)} / {formatTime(state.duration)}
                </div>

                {/* Volume */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={state.muted ? controls.unmute : controls.mute}
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    {state.muted ? (
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" />
                      </svg>
                    ) : (
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" />
                      </svg>
                    )}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={state.muted ? 0 : state.volume}
                    onChange={(e) => controls.volume(Number(e.target.value))}
                    className="w-20 accent-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* State Display */}
          <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg">
            <h4 className="font-medium text-slate-900 dark:text-slate-100 mb-2">
              Video State
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="text-slate-600 dark:text-slate-300">
                <span className="font-medium">Playing:</span>{" "}
                {state.playing ? "Yes" : "No"}
              </div>
              <div className="text-slate-600 dark:text-slate-300">
                <span className="font-medium">Paused:</span>{" "}
                {state.paused ? "Yes" : "No"}
              </div>
              <div className="text-slate-600 dark:text-slate-300">
                <span className="font-medium">Muted:</span>{" "}
                {state.muted ? "Yes" : "No"}
              </div>
              <div className="text-slate-600 dark:text-slate-300">
                <span className="font-medium">Volume:</span>{" "}
                {Math.round(state.volume * 100)}%
              </div>
              <div className="text-slate-600 dark:text-slate-300">
                <span className="font-medium">Duration:</span>{" "}
                {formatTime(state.duration)}
              </div>
              <div className="text-slate-600 dark:text-slate-300">
                <span className="font-medium">Current Time:</span>{" "}
                {formatTime(state.time)}
              </div>
              <div className="col-span-2 text-slate-600 dark:text-slate-300">
                <span className="font-medium">Buffered Ranges:</span>
                <div className="flex gap-2 flex-wrap mt-1">
                  {state.buffered.map((range, index) => (
                    <span
                      key={index}
                      className="bg-slate-200 dark:bg-slate-600 px-2 py-1 rounded text-xs"
                    >
                      {formatTime(range.start)} - {formatTime(range.end)}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-2">
            <h4 className="font-medium text-slate-900 dark:text-slate-100">
              Quick Actions
            </h4>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => controls.seek(0)}
                className="px-3 py-1 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 rounded text-sm text-slate-700 dark:text-slate-300 transition-colors"
              >
                Seek to Start
              </button>
              <button
                onClick={() => controls.seek(state.duration / 2)}
                className="px-3 py-1 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 rounded text-sm text-slate-700 dark:text-slate-300 transition-colors"
              >
                Seek to Middle
              </button>
              <button
                onClick={() => controls.seek(state.duration)}
                className="px-3 py-1 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 rounded text-sm text-slate-700 dark:text-slate-300 transition-colors"
              >
                Seek to End
              </button>
            </div>
          </div>

          {/* Instructions */}
          <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
            <p className="text-sm text-blue-600 dark:text-blue-400">
              Try out the video controls! Click on the progress bar to seek,
              adjust volume, and use quick actions! 🎬
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Example: Story = {
  render: () => <VideoExample />,
};
