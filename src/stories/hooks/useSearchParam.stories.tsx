import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import useSearchParam from "../../hooks/useSearchParam";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useSearchParam` is a hook that tracks URL search parameters and updates when they change.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useSearchParam } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useSearchParam } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = () => {
 *   const searchValue = useSearchParam('query');
 *   return <div>Search param 'query' value: {searchValue}</div>;
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * useSearchParam(
 *   param: string // The URL parameter name to track
 * ): string | null
 * ```
 *
 * ### Returns
 * - Returns the current value of the URL parameter as a string, or null if not present
 *
 * ### Browser Compatibility
 * - Uses URLSearchParams API (supported in all modern browsers)
 * - Uses Window History API for state changes
 *
 * ### Related Resources
 * - [URLSearchParams API](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)
 * - [History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API)
 */

const meta = {
  title: "Hooks/Utility/useSearchParam",
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

const SearchParamExample = () => {
  const nameParam = useSearchParam("name");
  const ageParam = useSearchParam("age");

  const updateSearchParams = (params: Record<string, string>) => {
    const searchParams = new URLSearchParams(window.location.search);
    Object.entries(params).forEach(([key, value]) => {
      if (value) {
        searchParams.set(key, value);
      } else {
        searchParams.delete(key);
      }
    });
    const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
    window.history.pushState({}, "", newUrl);
    // Dispatch events to trigger hook update
    window.dispatchEvent(new Event("pushstate"));
  };

  return (
    <div className="space-y-6 w-[500px]">
      <h3 className="text-lg font-semibold">URL Search Parameter Tracker</h3>

      <div className="space-y-4">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Name Parameter</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={nameParam || ""}
              onChange={(e) => updateSearchParams({ name: e.target.value })}
              placeholder="Enter name..."
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            />
            <button
              onClick={() => updateSearchParams({ name: "" })}
              className="px-3 py-1 text-sm font-semibold rounded-md bg-destructive text-white shadow hover:bg-destructive/90"
            >
              Clear
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Age Parameter</label>
          <div className="flex gap-2">
            <input
              type="number"
              value={ageParam || ""}
              onChange={(e) => updateSearchParams({ age: e.target.value })}
              placeholder="Enter age..."
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            />
            <button
              onClick={() => updateSearchParams({ age: "" })}
              className="px-3 py-1 text-sm font-semibold rounded-md bg-destructive text-white shadow hover:bg-destructive/90"
            >
              Clear
            </button>
          </div>
        </div>

        <div className="p-4 bg-muted rounded-md">
          <p className="text-sm font-medium">Current URL Parameters:</p>
          <pre className="mt-2 text-sm">
            {JSON.stringify(
              {
                name: nameParam,
                age: ageParam,
              },
              null,
              2,
            )}
          </pre>
        </div>
      </div>

      <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
        <p className="text-sm text-blue-600 dark:text-blue-400">
          Try entering values in the inputs above to see the URL parameters
          update in real-time! 🔍
        </p>
      </div>
    </div>
  );
};

export const Example: Story = {
  render: () => <SearchParamExample />,
};
