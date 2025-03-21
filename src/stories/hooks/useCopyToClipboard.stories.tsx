import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useCopyToClipboard } from "../../hooks";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useCopyToClipboard` is a hook that provides a simple way to copy text to the clipboard.
 * It handles various edge cases and provides feedback about the copy operation's success or failure.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useCopyToClipboard } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useCopyToClipboard } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = () => {
 *   const [state, copyToClipboard] = useCopyToClipboard();
 *
 *   return (
 *     <div>
 *       <button onClick={() => copyToClipboard("Hello, World!")}>
 *         Copy Text
 *       </button>
 *       {state.value && <span>Copied!</span>}
 *       {state.error && <span>Failed to copy</span>}
 *     </div>
 *   );
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * useCopyToClipboard(): [
 *   state: {
 *     value?: string, // Last copied value
 *     error?: Error, // Error if copy failed
 *     noUserInteraction: boolean // Whether copy was programmatic
 *   },
 *   copyToClipboard: (text: string) => void // Function to copy text
 * ]
 * ```
 *
 * ### Browser Compatibility
 * - Uses the Clipboard API when available
 * - Falls back to document.execCommand('copy') in older browsers
 * - Some browsers may require user interaction or HTTPS
 *
 * ### Related Resources
 * - [MDN: Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API)
 * - [MDN: Document.execCommand()](https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand)
 */

const meta = {
  title: "Hooks/Browser API/useCopyToClipboard",
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
    const [state, copyToClipboard] = useCopyToClipboard();
    const [customText, setCustomText] = useState("");

    // Sample text snippets
    const snippets = [
      { label: "Greeting", text: "Hello, World!" },
      { label: "Quote", text: "To be or not to be, that is the question." },
      { label: "Code", text: 'console.log("Hello, World!");' },
      { label: "URL", text: "https://example.com" },
    ];

    return (
      <div className="space-y-6 max-w-lg">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">
            Copy to Clipboard Examples
          </h3>
          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <div className="space-y-6">
              {/* Quick Copy Examples */}
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Quick Copy
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {snippets.map(({ label, text }) => (
                    <div
                      key={label}
                      className="flex items-center justify-between p-2 bg-white dark:bg-slate-700 rounded border border-slate-200 dark:border-slate-600"
                    >
                      <span className="text-sm text-slate-600 dark:text-slate-400">
                        {label}
                      </span>
                      <button
                        onClick={() => copyToClipboard(text)}
                        className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded transition-colors"
                      >
                        Copy
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Custom Text Input */}
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Custom Text
                </h4>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={customText}
                    onChange={(e) => setCustomText(e.target.value)}
                    placeholder="Enter text to copy..."
                    className="flex-1 px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500"
                  />
                  <button
                    onClick={() => copyToClipboard(customText)}
                    disabled={!customText}
                    className="px-4 py-2 bg-green-500 hover:bg-green-600 disabled:bg-slate-300 dark:disabled:bg-slate-600 text-white rounded-md transition-colors"
                  >
                    Copy
                  </button>
                </div>
              </div>

              {/* Error Examples */}
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Error Handling
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => copyToClipboard("")}
                    className="px-3 py-2 bg-yellow-500 hover:bg-yellow-600 text-white text-sm rounded transition-colors"
                  >
                    Try Empty String
                  </button>
                  <button
                    onClick={() =>
                      copyToClipboard(undefined as unknown as string)
                    }
                    className="px-3 py-2 bg-red-500 hover:bg-red-600 text-white text-sm rounded transition-colors"
                  >
                    Try Invalid Input
                  </button>
                </div>
              </div>

              {/* Status Display */}
              {(state.value || state.error) && (
                <div
                  className={`p-3 rounded ${
                    state.error
                      ? "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400"
                      : "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400"
                  }`}
                >
                  {state.error ? (
                    <div className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {state.error.message}
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Copied: {state.value}
                    </div>
                  )}
                </div>
              )}

              {/* Instructions */}
              <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
                <p className="text-sm text-blue-600 dark:text-blue-400">
                  Try copying different types of content and check your
                  clipboard! 📋
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
};
