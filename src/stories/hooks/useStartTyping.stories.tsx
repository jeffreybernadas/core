import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import useStartTyping from "../../hooks/useStartTyping";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useStartTyping` is a hook that detects when a user starts typing on non-editable elements.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useStartTyping } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useStartTyping } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = () => {
 *   useStartTyping((event) => {
 *     console.log('User started typing:', event.key);
 *   });
 *
 *   return <div>Start typing anywhere...</div>;
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * useStartTyping(
 *   onStartTyping: (event: KeyboardEvent) => void
 * ): void
 * ```
 *
 * ### Returns
 * - void
 *
 * ### Browser Compatibility
 * - Uses standard DOM KeyboardEvent
 * - Works in all modern browsers
 *
 * ### Related Resources
 * - [KeyboardEvent](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent)
 */

const meta = {
  title: "Hooks/Event & Interaction/useStartTyping",
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

interface TypedKey {
  key: string;
  timestamp: number;
}

const StartTypingExample = () => {
  const [typedKeys, setTypedKeys] = useState<TypedKey[]>([]);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useStartTyping((event) => {
    // Add the typed key to history
    setTypedKeys((prev) => [
      { key: event.key, timestamp: Date.now() },
      ...prev.slice(0, 9), // Keep only last 10 keys
    ]);

    // Open search on typing
    if (!searchOpen) {
      setSearchOpen(true);
    }
  });

  return (
    <div className="space-y-6 w-[500px]">
      <h3 className="text-lg font-semibold">Typing Detection Demo</h3>

      <div className="space-y-4">
        {/* Search Modal */}
        {searchOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-start justify-center pt-20">
            <div className="bg-background p-6 rounded-lg shadow-lg w-96">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-medium">Quick Search</h4>
                  <button
                    onClick={() => {
                      setSearchOpen(false);
                      setSearchQuery("");
                    }}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    ✕
                  </button>
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  autoFocus
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
            </div>
          </div>
        )}

        {/* Typing History */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Recent Typing History</h4>
          <div className="grid grid-cols-5 gap-2">
            {typedKeys.map((item, index) => (
              <div
                key={item.timestamp}
                className="p-2 text-center rounded bg-muted"
              >
                <div className="text-lg font-mono">{item.key}</div>
                <div className="text-xs text-muted-foreground">
                  {new Date(item.timestamp).toLocaleTimeString()}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Test Area */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Test Area</h4>
          <div className="p-4 bg-muted rounded-md">
            <p className="text-sm">This is a non-editable area.</p>
            <p className="text-sm mt-2">
              Start typing to see the hook in action!
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium">Try an editable field:</p>
            <input
              type="text"
              placeholder="Type here..."
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            />
            <p className="text-xs text-muted-foreground">
              Note: The hook won't trigger while typing in this input field.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
        <p className="text-sm text-blue-600 dark:text-blue-400">
          Start typing anywhere (except in input fields) to see the hook detect
          your keystrokes! ⌨️
        </p>
      </div>
    </div>
  );
};

export const Example: Story = {
  render: () => <StartTypingExample />,
};
