import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useHash } from "../../hooks";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useHash` is a hook that manages and syncs with the URL hash (fragment identifier).
 * It's useful for handling client-side routing, deep linking, and maintaining UI state in the URL.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useHash } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useHash } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = () => {
 *   const [hash, setHash] = useHash();
 *
 *   return (
 *     <div>
 *       <button onClick={() => setHash('#tab1')}>Tab 1</button>
 *       <button onClick={() => setHash('#tab2')}>Tab 2</button>
 *       <div>Current tab: {hash || '#tab1'}</div>
 *     </div>
 *   );
 * };
 * ```
 *
 * ### Advanced Usage
 * ```tsx
 * const ContentViewer = () => {
 *   const [hash, setHash] = useHash();
 *   const sections = ['intro', 'features', 'pricing', 'contact'];
 *
 *   useEffect(() => {
 *     if (!hash) {
 *       setHash('#intro');
 *     }
 *   }, [hash, setHash]);
 *
 *   return (
 *     <div>
 *       <nav>
 *         {sections.map(section => (
 *           <button
 *             key={section}
 *             onClick={() => setHash(`#${section}`)}
 *             className={hash === `#${section}` ? 'active' : ''}
 *           >
 *             {section}
 *           </button>
 *         ))}
 *       </nav>
 *       <div>Current section: {hash.slice(1)}</div>
 *     </div>
 *   );
 * };
 * ```
 *
 * ### Parameters
 * None
 *
 * ### Returns
 * ```tsx
 * [string, (newHash: string) => void]  // [current hash, hash setter]
 * ```
 *
 * ### Browser Compatibility
 * Uses standard Web APIs:
 * - window.location.hash
 * - hashchange event
 * Supported in all modern browsers.
 *
 * ### Related Resources
 * - [MDN: Location.hash](https://developer.mozilla.org/en-US/docs/Web/API/Location/hash)
 * - [MDN: HashChangeEvent](https://developer.mozilla.org/en-US/docs/Web/API/HashChangeEvent)
 */

const meta = {
  title: "Hooks/Browser API/useHash",
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
    const [hash, setHash] = useHash();
    const [history, setHistory] = useState<string[]>([]);

    // Add hash change to history
    React.useEffect(() => {
      setHistory((prev) => [
        `${new Date().toLocaleTimeString()}: Hash changed to ${hash || "(empty)"}`,
        ...prev.slice(0, 4),
      ]);
    }, [hash]);

    // Predefined sections
    const sections = [
      { id: "home", icon: "🏠" },
      { id: "products", icon: "🛍️" },
      { id: "about", icon: "ℹ️" },
      { id: "contact", icon: "📧" },
    ];

    // Custom hash input
    const [customHash, setCustomHash] = useState("");
    const handleCustomHash = (e: React.FormEvent) => {
      e.preventDefault();
      setHash(customHash.startsWith("#") ? customHash : `#${customHash}`);
      setCustomHash("");
    };

    return (
      <div className="space-y-6 max-w-lg">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">
            URL Hash Navigation
          </h3>
          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg space-y-4">
            {/* Current Hash Display */}
            <div className="text-center p-3 bg-white dark:bg-slate-700 rounded">
              <div className="text-sm text-slate-500 dark:text-slate-400">
                Current Hash:
              </div>
              <div className="text-lg font-mono text-slate-900 dark:text-slate-100">
                {hash || "(empty)"}
              </div>
            </div>

            {/* Section Navigation */}
            <div className="grid grid-cols-4 gap-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setHash(`#${section.id}`)}
                  className={`p-2 rounded transition-colors ${
                    hash === `#${section.id}`
                      ? "bg-blue-500 text-white"
                      : "bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-600"
                  }`}
                >
                  <div className="text-lg mb-1">{section.icon}</div>
                  <div className="text-xs">{section.id}</div>
                </button>
              ))}
            </div>

            {/* Custom Hash Input */}
            <form onSubmit={handleCustomHash} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={customHash}
                  onChange={(e) => setCustomHash(e.target.value)}
                  placeholder="Enter custom hash"
                  className="flex-1 px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded text-slate-900 dark:text-slate-100"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Set Hash
                </button>
              </div>
            </form>

            {/* Hash History */}
            <div className="space-y-2">
              <div className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Hash History:
              </div>
              <div className="bg-white dark:bg-slate-700 p-3 rounded space-y-1">
                {history.map((entry, index) => (
                  <div
                    key={index}
                    className="text-xs text-slate-600 dark:text-slate-400"
                  >
                    {entry}
                  </div>
                ))}
                {history.length === 0 && (
                  <div className="text-xs text-slate-400 dark:text-slate-500 italic">
                    No changes yet
                  </div>
                )}
              </div>
            </div>

            {/* Instructions */}
            <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
              <p className="text-sm text-blue-600 dark:text-blue-400">
                Click the navigation buttons or enter a custom hash to update
                the URL! Watch the hash history and check your browser's address
                bar! 🔗
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  },
};
