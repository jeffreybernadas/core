import React, { useEffect } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useCookie } from "../../hooks";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useCookie` is a hook that provides a simple interface for managing browser cookies.
 * It wraps the js-cookie library to provide a React-friendly way to get, set, and delete cookies.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useCookie } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useCookie } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = () => {
 *   const [theme, setTheme, removeTheme] = useCookie("theme");
 *
 *   return (
 *     <div>
 *       <div>Current theme: {theme || "default"}</div>
 *       <button onClick={() => setTheme("dark")}>Set Dark</button>
 *       <button onClick={() => setTheme("light")}>Set Light</button>
 *       <button onClick={removeTheme}>Reset</button>
 *     </div>
 *   );
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * useCookie(
 *   cookieName: string // Name of the cookie to manage
 * ): [
 *   value: string | null, // Current cookie value
 *   updateCookie: (
 *     newValue: string,
 *     options?: {
 *       expires?: number | Date,
 *       path?: string,
 *       domain?: string,
 *       secure?: boolean,
 *       sameSite?: "strict" | "lax" | "none"
 *     }
 *   ) => void,
 *   deleteCookie: () => void // Function to remove the cookie
 * ]
 * ```
 *
 * ### Browser Compatibility
 * - Uses js-cookie library, which supports all modern browsers
 * - Cookie functionality is standard web technology
 * - Some options may have different behavior across browsers
 *
 * ### Related Resources
 * - [MDN: Using HTTP cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)
 * - [js-cookie Documentation](https://github.com/js-cookie/js-cookie#readme)
 */

const meta = {
  title: "Hooks/Browser API/useCookie",
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
    // Theme preference example
    const [theme, setTheme, removeTheme] = useCookie("preferred-theme");

    // Language preference example
    const [lang, setLang, removeLang] = useCookie("preferred-language");

    // Session example with expiry
    const [sessionId, setSessionId, removeSessionId] = useCookie("session-id");

    // Set initial values if not set
    useEffect(() => {
      if (!theme) setTheme("system");
      if (!lang) setLang("en");
      if (!sessionId)
        setSessionId(Math.random().toString(36).slice(2), { expires: 1 / 24 }); // 1 hour
    }, []);

    return (
      <div className="space-y-6 max-w-lg">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">
            Cookie Management Examples
          </h3>
          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <div className="space-y-6">
              {/* Theme Preference */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Theme Preference
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    Current: {theme || "Not set"}
                  </span>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setTheme("light")}
                    className="px-3 py-1 bg-yellow-500 hover:bg-yellow-600 text-white text-sm rounded-md transition-colors"
                  >
                    Light
                  </button>
                  <button
                    onClick={() => setTheme("dark")}
                    className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded-md transition-colors"
                  >
                    Dark
                  </button>
                  <button
                    onClick={() => setTheme("system")}
                    className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white text-sm rounded-md transition-colors"
                  >
                    System
                  </button>
                  <button
                    onClick={removeTheme}
                    className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-sm rounded-md transition-colors"
                  >
                    Reset
                  </button>
                </div>
              </div>

              {/* Language Preference */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Language Preference
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    Current: {lang || "Not set"}
                  </span>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setLang("en")}
                    className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded-md transition-colors"
                  >
                    English
                  </button>
                  <button
                    onClick={() => setLang("es")}
                    className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded-md transition-colors"
                  >
                    Spanish
                  </button>
                  <button
                    onClick={() => setLang("fr")}
                    className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded-md transition-colors"
                  >
                    French
                  </button>
                  <button
                    onClick={removeLang}
                    className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-sm rounded-md transition-colors"
                  >
                    Reset
                  </button>
                </div>
              </div>

              {/* Session Management */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Session Management
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    ID: {sessionId ? sessionId.slice(0, 8) : "Not set"}
                  </span>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() =>
                      setSessionId(Math.random().toString(36).slice(2), {
                        expires: 1 / 24, // 1 hour
                        sameSite: "strict",
                      })
                    }
                    className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white text-sm rounded-md transition-colors"
                  >
                    New Session
                  </button>
                  <button
                    onClick={removeSessionId}
                    className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-sm rounded-md transition-colors"
                  >
                    End Session
                  </button>
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Note: Session cookie expires in 1 hour
                </div>
              </div>

              {/* Cookie Info */}
              <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
                <p className="text-sm text-blue-600 dark:text-blue-400">
                  Open your browser's developer tools to see the cookies being
                  set and removed! 🍪
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
};
