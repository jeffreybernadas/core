import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { truncate } from "../../lib/truncate";

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
            Original Text
          </h3>
          <p className="text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            {longText}
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">
            Truncated (50 characters)
          </h3>
          <p className="text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            {truncate(longText, 50)}
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">
            Truncated (100 characters)
          </h3>
          <p className="text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            {truncate(longText, 100)}
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">
            Custom Ending
          </h3>
          <p className="text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            {truncate(longText, 75, " [Read More]")}
          </p>
        </div>
      </div>
    );
  },
};
