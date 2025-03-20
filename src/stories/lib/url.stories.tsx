import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { isValidURL } from "../../lib/url";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * A utility function that validates URLs using a combination of URL constructor and pattern matching.
 * Useful for form validation, link checking, and ensuring URL integrity.
 *
 * ### Module Federation Import
 * ```tsx
 * import { isValidURL } from "@core/lib";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { isValidURL } from "@bernz322/core/lib";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * // Simple URL validation
 * const isValid = isValidURL("https://example.com"); // true
 *
 * // Form input validation
 * const validateForm = (url: string) => {
 *   if (!isValidURL(url)) {
 *     return "Please enter a valid URL";
 *   }
 *   return null;
 * };
 * ```
 *
 * ### Function Signature
 * ```tsx
 * isValidURL(url: string): boolean
 * ```
 *
 * ### Parameters
 * - url (string): The URL string to validate
 *
 * ### Returns
 * - boolean: true if the URL is valid, false otherwise
 *
 * ### Browser Compatibility
 * Uses the URL Web API, supported in all modern browsers.
 *
 * ### Related Resources
 * - [MDN: URL API](https://developer.mozilla.org/en-US/docs/Web/API/URL)
 * - [MDN: Valid URLs](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL)
 */

const meta = {
  title: "Lib/URL",
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
    const urlExamples = [
      { url: "https://google.com", description: "Standard HTTPS URL" },
      { url: "http://localhost:3000", description: "Local development URL" },
      { url: "ftp://files.example.com", description: "FTP URL" },
      { url: "not-a-url", description: "Invalid URL" },
      {
        url: "https://sub.domain.com/path?query=123",
        description: "Complex URL with query",
      },
    ];

    return (
      <div className="space-y-6 max-w-lg">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">
            URL Validation Examples
          </h3>
          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <div className="space-y-3">
              {urlExamples.map(({ url, description }) => (
                <div key={url} className="flex items-start space-x-3">
                  <div
                    className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full ${isValidURL(url) ? "bg-green-500" : "bg-red-500"} flex items-center justify-center`}
                  >
                    <span className="text-white text-xs">
                      {isValidURL(url) ? "✓" : "✗"}
                    </span>
                  </div>
                  <div className="flex-grow space-y-1">
                    <div className="font-mono text-sm text-slate-700 dark:text-slate-300">
                      {url}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      {description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  },
};
