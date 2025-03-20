import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { capitalize } from "../../lib/capitalize";
import { ThemeProvider } from "../../themes/shadcn";

const meta = {
  title: "Lib/capitalize",
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

/**
 * A utility function that capitalizes the first letter of a string.
 *
 * ### Module Federation Import
 * ```tsx
 * import { capitalize } from "@core/lib";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { capitalize } from "@bernz322/core/lib";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * capitalize("hello world"); // "Hello world"
 * capitalize("HELLO WORLD"); // "Hello world"
 * capitalize("hello"); // "Hello"
 * ```
 *
 * ### Parameters
 * ```tsx
 * capitalize(
 *   text: string // The text to capitalize
 * ): string
 * ```
 *
 * ### Use Cases
 * - Formatting user input
 * - Displaying proper names
 * - Standardizing text display
 * - Formatting menu items or navigation labels
 */
export const Example: Story = {
  render: () => {
    const examples = [
      "hello world",
      "HELLO WORLD",
      "hello",
      "the quick brown fox",
      "1st example",
      "camelCase",
    ];

    return (
      <div className="space-y-6 max-w-lg">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">
            Capitalization Examples
          </h3>
          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg space-y-3">
            {examples.map((text, index) => (
              <div key={index} className="space-y-1">
                <p className="text-slate-700 dark:text-slate-300">
                  Original: <span className="font-mono">{text}</span>
                </p>
                <p className="text-slate-700 dark:text-slate-300">
                  Capitalized:{" "}
                  <span className="font-mono">{capitalize(text)}</span>
                </p>
                {index < examples.length - 1 && (
                  <hr className="border-slate-200 dark:border-slate-700" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  },
};
