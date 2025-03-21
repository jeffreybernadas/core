import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import useFavicon from "../../hooks/useFavicon";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useFavicon` is a hook that dynamically updates the website's favicon.
 * It's useful for changing the favicon based on application state or user preferences.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useFavicon } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useFavicon } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = () => {
 *   useFavicon("https://example.com/favicon.ico");
 *   return <div>Check your browser tab!</div>;
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * useFavicon(
 *   href: string // URL of the favicon image
 * ): void
 * ```
 *
 * ### Returns
 * ```tsx
 * void
 * ```
 *
 * ### Browser Compatibility
 * Uses standard DOM APIs:
 * - document.querySelector
 * - document.createElement
 * Supported in all modern browsers.
 *
 * ### Related Resources
 * - [MDN: Link types: icon](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/icon)
 * - [MDN: Favicons](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#adding_custom_icons_to_your_site)
 */

const meta = {
  title: "Hooks/Browser API/useFavicon",
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

export const Example: Story = {
  render: () => {
    const [currentFavicon, setCurrentFavicon] = useState<string>(
      "https://jeffreybernadas.github.io/core/favicon.ico",
    );

    const faviconOptions = [
      {
        name: "Default",
        url: "https://jeffreybernadas.github.io/core/favicon.ico",
      },
      {
        name: "GitHub",
        url: "https://github.com/favicon.ico",
      },
      {
        name: "NPM",
        url: "https://static-production.npmjs.com/f1786e9b7cba9753ca7b9c40e8b98f67.png",
      },
      {
        name: "React",
        url: "https://reactjs.org/favicon.ico",
      },
    ];

    // Use the hook to update favicon
    useFavicon(currentFavicon);

    return (
      <div className="w-[400px]">
        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg space-y-6">
          {/* Current Favicon Display */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Current Favicon
            </h3>
            <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded text-center">
              <img
                src={currentFavicon}
                alt="Current Favicon"
                className="w-8 h-8 mx-auto mb-2"
              />
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Check your browser tab!
              </p>
            </div>
          </div>

          {/* Favicon Options */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Choose a Favicon
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {faviconOptions.map((favicon) => (
                <button
                  key={favicon.name}
                  onClick={() => setCurrentFavicon(favicon.url)}
                  className={`p-3 rounded flex flex-col items-center gap-2 transition-colors ${
                    currentFavicon === favicon.url
                      ? "bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300"
                      : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600"
                  }`}
                >
                  <img
                    src={favicon.url}
                    alt={favicon.name}
                    className="w-6 h-6"
                  />
                  <span className="text-sm">{favicon.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
            <p className="text-sm text-blue-600 dark:text-blue-400">
              Click on different favicon options and watch your browser tab icon
              change! The hook dynamically updates the favicon without page
              reload. 🎨
            </p>
          </div>
        </div>
      </div>
    );
  },
};
