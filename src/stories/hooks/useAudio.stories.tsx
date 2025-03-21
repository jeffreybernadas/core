import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useAudio } from "../../hooks";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useAudio` is a hook that provides a declarative way to control HTML5 audio elements.
 * It offers a rich API for controlling audio playback, volume, seeking, and monitoring state.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useAudio } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useAudio } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = () => {
 *   const [audio, state, controls] = useAudio({
 *     src: "https://example.com/audio.mp3",
 *     autoPlay: false,
 *   });
 *
 *   return (
 *     <div>
 *       {audio}
 *       <button onClick={controls.play}>Play</button>
 *       <button onClick={controls.pause}>Pause</button>
 *       <div>Current time: {state.time}</div>
 *     </div>
 *   );
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * useAudio(
 *   props: HTMLMediaProps | ReactElement<HTMLMediaProps>
 * ): [ReactElement<HTMLMediaProps>, HTMLMediaState, HTMLMediaControls]
 * ```
 *
 * ### Returns
 * - [audio, state, controls]: A tuple containing:
 *   - audio: ReactElement - The audio element to render
 *   - state: HTMLMediaState
 *     - buffered: Array of time ranges that have been buffered
 *     - duration: Total duration of the audio
 *     - paused: Whether the audio is paused
 *     - muted: Whether the audio is muted
 *     - time: Current playback time
 *     - volume: Current volume (0 to 1)
 *     - playing: Whether the audio is currently playing
 *   - controls: HTMLMediaControls
 *     - play(): Start playback
 *     - pause(): Pause playback
 *     - mute(): Mute audio
 *     - unmute(): Unmute audio
 *     - volume(value): Set volume (0 to 1)
 *     - seek(time): Seek to specific time
 *
 * ### Browser Compatibility
 * Uses HTML5 Audio API, supported in all modern browsers.
 *
 * ### Related Resources
 * - [MDN: HTMLAudioElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement)
 * - [MDN: Using HTML5 audio](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio)
 */

const meta = {
  title: "Hooks/Browser API/useAudio",
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

export const Example: Story = {
  render: () => {
    const [audio, state, controls] = useAudio({
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      autoPlay: false,
    });

    return (
      <div className="space-y-6 max-w-lg">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">
            Audio Player Example
          </h3>
          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <div className="space-y-4">
              {/* Hidden audio element */}
              {audio}

              {/* Playback controls */}
              <div className="flex items-center justify-center space-x-2">
                <button
                  onClick={state.paused ? controls.play : controls.pause}
                  className="p-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white transition-colors"
                >
                  {state.paused ? (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  )}
                </button>
                <button
                  onClick={state.muted ? controls.unmute : controls.mute}
                  className="p-3 rounded-full bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 transition-colors"
                >
                  {state.muted ? (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                      />
                    </svg>
                  )}
                </button>
              </div>

              {/* Progress bar */}
              <div className="space-y-2">
                <div className="h-1 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 transition-all duration-100"
                    style={{
                      width: `${(state.time / state.duration) * 100 || 0}%`,
                    }}
                  />
                </div>
                <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span>{formatTime(state.time)}</span>
                  <span>{formatTime(state.duration)}</span>
                </div>
              </div>

              {/* Volume control */}
              <div className="flex items-center space-x-2">
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  Volume
                </span>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={state.volume}
                  onChange={(e) => controls.volume(Number(e.target.value))}
                  className="flex-grow h-1 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer"
                />
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  {Math.round(state.volume * 100)}%
                </span>
              </div>

              {/* Status */}
              <div className="text-sm text-center text-slate-500 dark:text-slate-400">
                {state.playing ? (
                  <span className="flex items-center justify-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                    Playing
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <span className="w-2 h-2 bg-slate-400 rounded-full mr-2" />
                    {state.paused ? "Paused" : "Loading..."}
                  </span>
                )}
              </div>
            </div>

            {/* Instructions */}
            <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
              <p className="text-sm text-blue-600 dark:text-blue-400">
                Play with the audio controls - try playing/pausing, adjusting
                volume, and seeking through the track! 🎵
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  },
};

// Helper function to format time in MM:SS
const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};
