import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useDebounce } from "../../hooks";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useDebounce` is a hook that delays the execution of a function until after a specified time has elapsed since its last call.
 * It's useful for handling frequent updates like search inputs, window resizing, or any rapid-fire events.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useDebounce } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useDebounce } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = () => {
 *   const [query, setQuery] = useState("");
 *
 *   const [isReady, cancel] = useDebounce(
 *     () => {
 *       // This will run 500ms after the last change
 *       console.log("Searching for:", query);
 *     },
 *     500,
 *     [query]
 *   );
 *
 *   return (
 *     <input
 *       type="text"
 *       value={query}
 *       onChange={(e) => setQuery(e.target.value)}
 *     />
 *   );
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * useDebounce(
 *   fn: Function, // Function to debounce
 *   ms?: number = 0, // Delay in milliseconds
 *   deps?: DependencyList = [] // Dependencies that trigger the debounce
 * ): [
 *   isReady: () => boolean | null, // Function to check if debounce is ready
 *   cancel: () => void // Function to cancel the debounce
 * ]
 * ```
 *
 * ### Browser Compatibility
 * Uses standard setTimeout, supported in all modern browsers.
 *
 * ### Related Resources
 * - [MDN: setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)
 * - [Debouncing Explained](https://css-tricks.com/debouncing-throttling-explained-examples/)
 */

const meta = {
  title: "Hooks/Utility/useDebounce",
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
    // Search example
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState<string[]>([]);
    const [isSearching, setIsSearching] = useState(false);

    const [isSearchReady] = useDebounce(
      () => {
        setIsSearching(true);
        // Simulate API call
        setTimeout(() => {
          const results = ["apple", "banana", "cherry", "date", "elderberry"]
            .filter((fruit) => fruit.includes(searchQuery.toLowerCase()))
            .map((fruit) => fruit.charAt(0).toUpperCase() + fruit.slice(1));
          setSearchResults(results);
          setIsSearching(false);
        }, 500);
      },
      500,
      [searchQuery],
    );

    // Save draft example
    const [draftText, setDraftText] = useState("");
    const [saveStatus, setSaveStatus] = useState("");

    const [isSaveReady] = useDebounce(
      () => {
        setSaveStatus("Saving...");
        // Simulate API call
        setTimeout(() => {
          setSaveStatus("Draft saved!");
          setTimeout(() => setSaveStatus(""), 2000);
        }, 500);
      },
      1000,
      [draftText],
    );

    return (
      <div className="space-y-6 max-w-lg">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">
            Debounce Examples
          </h3>
          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <div className="space-y-6">
              {/* Search Example */}
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Search with Debounce (500ms)
                </h4>
                <div className="space-y-2">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search fruits..."
                    className="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md text-slate-900 dark:text-slate-100"
                  />
                  <div className="min-h-[100px] bg-white dark:bg-slate-700 p-3 rounded-md">
                    {isSearching ? (
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        Searching...
                      </div>
                    ) : searchQuery ? (
                      searchResults.length > 0 ? (
                        <ul className="space-y-1">
                          {searchResults.map((result) => (
                            <li
                              key={result}
                              className="text-sm text-slate-700 dark:text-slate-300"
                            >
                              {result}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <div className="text-sm text-slate-500 dark:text-slate-400">
                          No results found
                        </div>
                      )
                    ) : (
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        Type to search...
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Auto Save Example */}
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Auto-Save Draft (1000ms)
                </h4>
                <div className="space-y-2">
                  <textarea
                    value={draftText}
                    onChange={(e) => setDraftText(e.target.value)}
                    placeholder="Start typing to auto-save..."
                    rows={3}
                    className="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md text-slate-900 dark:text-slate-100"
                  />
                  {saveStatus && (
                    <div
                      className={`text-sm ${
                        saveStatus === "Saving..."
                          ? "text-yellow-600 dark:text-yellow-400"
                          : "text-green-600 dark:text-green-400"
                      }`}
                    >
                      {saveStatus}
                    </div>
                  )}
                </div>
              </div>

              {/* Instructions */}
              <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
                <p className="text-sm text-blue-600 dark:text-blue-400">
                  Try these examples to see debouncing in action! Type quickly
                  in the search or draft, or resize your window to see how
                  debouncing reduces the number of updates. ⏱️
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
};
