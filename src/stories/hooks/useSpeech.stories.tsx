import React, { useEffect, useState, useCallback } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import useSpeech, { ISpeechOptions } from "../../hooks/useSpeech";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useSpeech` is a hook that provides text-to-speech functionality using the Web Speech API.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useSpeech } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useSpeech } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = () => {
 *   const speech = useSpeech('Hello, World!', {
 *     lang: 'en-US',
 *     rate: 1,
 *     pitch: 1,
 *     volume: 1
 *   });
 *
 *   return <div>Status: {speech.status}</div>;
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * useSpeech(
 *   text: string,
 *   options: {
 *     lang?: string,
 *     voice?: SpeechSynthesisVoice,
 *     rate?: number,
 *     pitch?: number,
 *     volume?: number
 *   }
 * ): {
 *   isPlaying: boolean,
 *   status: string,
 *   lang: string,
 *   voiceInfo: { lang: string, name: string },
 *   rate: number,
 *   pitch: number,
 *   volume: number
 * }
 * ```
 *
 * ### Returns
 * - Returns an object containing the current speech state and settings
 *
 * ### Browser Compatibility
 * - Uses Web Speech API
 * - Check browser support with `window.speechSynthesis`
 *
 * ### Related Resources
 * - [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
 * - [SpeechSynthesis](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis)
 */

const meta = {
  title: "Hooks/Browser API/useSpeech",
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

const SpeechExample = () => {
  const [text, setText] = useState(
    "Hello! This is a text-to-speech demo using the Web Speech API.",
  );
  const [options, setOptions] = useState<ISpeechOptions>({
    lang: "en-US",
    rate: 1,
    pitch: 1,
    volume: 1,
  });
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<
    SpeechSynthesisVoice | undefined
  >();
  const [isSupported, setIsSupported] = useState(true);
  const [shouldSpeak, setShouldSpeak] = useState(false);

  // Load available voices
  useEffect(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) {
      setIsSupported(false);
      return;
    }

    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
      setSelectedVoice(availableVoices[0]);
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;

    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  const speech = useSpeech(text, {
    ...options,
    voice: selectedVoice,
  });

  // Effect to handle speech start/stop
  useEffect(() => {
    if (shouldSpeak) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.voice = selectedVoice || null;
      utterance.rate = options.rate || 1;
      utterance.pitch = options.pitch || 1;
      utterance.volume = options.volume || 1;
      utterance.lang = options.lang || "en-US";
      utterance.onend = () => setShouldSpeak(false);

      window.speechSynthesis.cancel(); // Cancel any ongoing speech
      window.speechSynthesis.speak(utterance);
    } else {
      window.speechSynthesis.cancel();
    }
  }, [shouldSpeak, text, options, selectedVoice]);

  if (!isSupported) {
    return (
      <div className="p-4 bg-destructive/10 text-destructive rounded-md">
        <p>Speech synthesis is not supported in your browser.</p>
      </div>
    );
  }

  return (
    <div className="w-[500px]">
      <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            Text-to-Speech Demo
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Convert text to speech with customizable voice settings
          </p>
        </div>

        <div className="space-y-4">
          {/* Text Input */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-900 dark:text-slate-100">
              Text to Speak
            </label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="flex min-h-[80px] w-full rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 shadow-sm placeholder:text-slate-400 dark:placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500"
              placeholder="Enter text to speak..."
            />
          </div>

          {/* Voice Selection */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-900 dark:text-slate-100">
              Voice
            </label>
            <select
              value={selectedVoice?.name}
              onChange={(e) => {
                const voice = voices.find((v) => v.name === e.target.value);
                setSelectedVoice(voice);
                setOptions((prev) => ({
                  ...prev,
                  lang: voice?.lang || "en-US",
                }));
              }}
              className="flex h-9 w-full rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-1 text-sm text-slate-900 dark:text-slate-100 shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500"
            >
              {voices.map((voice) => (
                <option key={voice.name} value={voice.name}>
                  {voice.name} ({voice.lang})
                </option>
              ))}
            </select>
          </div>

          {/* Speech Controls */}
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-900 dark:text-slate-100">
                Rate
              </label>
              <input
                type="range"
                min="0.5"
                max="2"
                step="0.1"
                value={options.rate}
                onChange={(e) =>
                  setOptions((prev) => ({
                    ...prev,
                    rate: Number(e.target.value),
                  }))
                }
                className="w-full accent-blue-500"
              />
              <div className="text-xs text-center text-slate-600 dark:text-slate-400">
                {options.rate}x
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-900 dark:text-slate-100">
                Pitch
              </label>
              <input
                type="range"
                min="0"
                max="2"
                step="0.1"
                value={options.pitch}
                onChange={(e) =>
                  setOptions((prev) => ({
                    ...prev,
                    pitch: Number(e.target.value),
                  }))
                }
                className="w-full accent-blue-500"
              />
              <div className="text-xs text-center text-slate-600 dark:text-slate-400">
                {options.pitch}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-900 dark:text-slate-100">
                Volume
              </label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={options.volume}
                onChange={(e) =>
                  setOptions((prev) => ({
                    ...prev,
                    volume: Number(e.target.value),
                  }))
                }
                className="w-full accent-blue-500"
              />
              <div className="text-xs text-center text-slate-600 dark:text-slate-400">
                {(options.volume ?? 1) * 100}%
              </div>
            </div>
          </div>

          {/* Play/Stop Button */}
          <div className="flex justify-center">
            <button
              onClick={() => setShouldSpeak(!shouldSpeak)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                shouldSpeak
                  ? "bg-red-500 hover:bg-red-600 text-white"
                  : "bg-blue-500 hover:bg-blue-600 text-white"
              }`}
            >
              <div className="flex items-center gap-2">
                {shouldSpeak ? (
                  <>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75A.75.75 0 007.25 3h-1.5zM12.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75a.75.75 0 00-.75-.75h-1.5z" />
                    </svg>
                    Stop
                  </>
                ) : (
                  <>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                    Speak
                  </>
                )}
              </div>
            </button>
          </div>

          {/* Status Display */}
          <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-md">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-slate-900 dark:text-slate-100">
                  Status:
                </span>
                <span className="text-sm text-slate-700 dark:text-slate-300">
                  {speech.status}
                </span>
                {shouldSpeak && (
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                )}
              </div>
              <div className="text-sm text-slate-700 dark:text-slate-300">
                <span className="font-medium text-slate-900 dark:text-slate-100">
                  Voice:
                </span>{" "}
                {speech.voiceInfo.name || "Default"} ({speech.voiceInfo.lang})
              </div>
            </div>
          </div>
        </div>

        <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
          <p className="text-sm text-blue-600 dark:text-blue-400">
            Enter text, adjust settings, and click the Speak button to hear it!
            🗣️
          </p>
        </div>
      </div>
    </div>
  );
};

export const Example: Story = {
  render: () => <SpeechExample />,
};
