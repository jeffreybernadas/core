import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { truncate } from "../../lib/truncate";
import { ThemeProvider } from "../../themes/shadcn";

const meta = {
  title: "Lib/truncate",
  parameters: {
    layout: "centered",
    docs: {
      canvas: {
        sourceState: "none",
      },
    },
  },
  tags: ["autodocs"],
  decorators: [(Story) => <ThemeProvider>{Story()}</ThemeProvider>],
} satisfies Meta;

export default meta;
type Story = StoryObj;

/**
 * A utility function that truncates text to a specified length and adds an ellipsis.
 *
 * ### Module Federation Import
 * ```tsx
 * import { truncate } from "@core/lib";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { truncate } from "@bernz322/core/lib";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const text = "This is a very long text that needs to be truncated";
 * const truncatedText = truncate(text, 20); // "This is a very long..."
 * ```
 *
 * ### Parameters
 * ```tsx
 * truncate(
 *   text: string,           // The text to truncate
 *   length: number = 100,   // Maximum length before truncation (default: 100)
 *   ending: string = "..."  // String to append after truncation (default: "...")
 * ): string
 * ```
 *
 * ### Examples with Different Lengths
 * ```tsx
 * truncate("Hello World!", 5);        // "Hello..."
 * truncate("Hello World!", 20);       // "Hello World!"
 * truncate("Hello World!", 8, "...!") // "Hello..."
 * ```
 *
 * ### Use Cases
 * - Truncating long article previews
 * - Limiting comment lengths
 * - Displaying file names in a constrained space
 * - Showing preview text in cards or lists
 */
export const Example: Story = {
  render: () => {
    const longText =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    return (
      <div className="space-y-6 max-w-lg">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">
            Text Truncation Examples
          </h3>
          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg space-y-4">
            <div className="space-y-2">
              <h4 className="font-medium text-slate-800 dark:text-slate-200">
                Original Text
              </h4>
              <p className="text-slate-700 dark:text-slate-300">{longText}</p>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-slate-800 dark:text-slate-200">
                Different Truncation Styles
              </h4>
              <div className="space-y-3">
                <div>
                  <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">
                    Short (50 characters)
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">
                    {truncate(longText, 50)}
                  </p>
                </div>
                <div>
                  <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">
                    Medium (100 characters)
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">
                    {truncate(longText, 100)}
                  </p>
                </div>
                <div>
                  <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">
                    Custom Ending
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">
                    {truncate(longText, 75, " [Read More]")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
};
