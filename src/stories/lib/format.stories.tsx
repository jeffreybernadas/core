import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { format } from "../../lib/format";
import { ThemeProvider } from "../../themes/shadcn";

const meta = {
  title: "Lib/format",
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
 * A collection of utility functions for formatting numbers, dates, and text.
 *
 * ### Module Federation Import
 * ```tsx
 * import { format } from "@core/lib";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { format } from "@bernz322/core/lib";
 * ```
 *
 * ### Available Functions
 *
 * #### formatNumber
 * ```tsx
 * // Format number with commas
 * format.number(1234567); // "1,234,567"
 *
 * // Format with decimal places
 * format.number(1234.5678, 2); // "1,234.57"
 * ```
 *
 * #### formatCurrency
 * ```tsx
 * // Format as USD
 * format.currency(1234.56); // "$1,234.56"
 *
 * // Format as EUR with custom locale
 * format.currency(1234.56, "EUR", "de-DE"); // "1.234,56 €"
 * ```
 *
 * #### formatDate
 * ```tsx
 * // Format date with default pattern
 * format.date(new Date("2024-03-15")); // "Mar 15, 2024"
 *
 * // Format with custom pattern
 * format.date(new Date("2024-03-15"), "yyyy-MM-dd"); // "2024-03-15"
 * ```
 *
 * #### formatTime
 * ```tsx
 * // Format time with default pattern
 * format.time(new Date("2024-03-15T14:30:00")); // "2:30 PM"
 *
 * // Format with 24-hour pattern
 * format.time(new Date("2024-03-15T14:30:00"), "HH:mm"); // "14:30"
 * ```
 *
 * ### Browser Compatibility
 * These functions use the following Web APIs:
 * - [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)
 * - [Intl.DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)
 *
 * Supported in all modern browsers. For older browsers, consider using a polyfill.
 */
export const Example: Story = {
  render: () => {
    const number = 1234567.89;
    const date = new Date("2024-03-15T14:30:00");

    return (
      <div className="space-y-6 max-w-lg">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">
            Format Utility Examples
          </h3>
          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg space-y-6">
            <div className="space-y-2">
              <h4 className="font-medium text-slate-800 dark:text-slate-200">
                Number Formatting
              </h4>
              <p className="text-slate-700 dark:text-slate-300">
                Original: <span className="font-mono">{number}</span>
              </p>
              <p className="text-slate-700 dark:text-slate-300">
                Formatted:{" "}
                <span className="font-mono">{format.number(number)}</span>
              </p>
              <p className="text-slate-700 dark:text-slate-300">
                With 2 decimals:{" "}
                <span className="font-mono">{format.number(number, 2)}</span>
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-slate-800 dark:text-slate-200">
                Currency Formatting
              </h4>
              <p className="text-slate-700 dark:text-slate-300">
                USD:{" "}
                <span className="font-mono">{format.currency(number)}</span>
              </p>
              <p className="text-slate-700 dark:text-slate-300">
                EUR:{" "}
                <span className="font-mono">
                  {format.currency(number, "EUR", "de-DE")}
                </span>
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-slate-800 dark:text-slate-200">
                Date Formatting
              </h4>
              <p className="text-slate-700 dark:text-slate-300">
                Default: <span className="font-mono">{format.date(date)}</span>
              </p>
              <p className="text-slate-700 dark:text-slate-300">
                Custom:{" "}
                <span className="font-mono">
                  {format.date(date, "yyyy-MM-dd")}
                </span>
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-slate-800 dark:text-slate-200">
                Time Formatting
              </h4>
              <p className="text-slate-700 dark:text-slate-300">
                12-hour: <span className="font-mono">{format.time(date)}</span>
              </p>
              <p className="text-slate-700 dark:text-slate-300">
                24-hour:{" "}
                <span className="font-mono">{format.time(date, "HH:mm")}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  },
};
