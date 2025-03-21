import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useBeforeUnload } from "../../hooks";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useBeforeUnload` is a hook that prompts users with a confirmation dialog when they attempt to leave the page.
 * It's useful for preventing accidental navigation away from forms or unsaved changes.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useBeforeUnload } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useBeforeUnload } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = () => {
 *   const [isDirty, setIsDirty] = useState(false);
 *
 *   useBeforeUnload(isDirty, "You have unsaved changes. Are you sure you want to leave?");
 *
 *   return (
 *     <form>
 *       <input onChange={() => setIsDirty(true)} />
 *     </form>
 *   );
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * useBeforeUnload(
 *   enabled: boolean | (() => boolean), // Whether to show the prompt
 *   message?: string // Optional custom message (may not work in some browsers)
 * ): void
 * ```
 *
 * ### Browser Compatibility
 * - The beforeunload event is supported in all modern browsers
 * - Custom messages may not be shown in some browsers for security reasons
 * - Chrome 60+ shows a generic message instead of custom messages
 * - Firefox 44+ shows a generic message instead of custom messages
 *
 * ### Related Resources
 * - [MDN: beforeunload event](https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event)
 */

const meta = {
  title: "Hooks/Browser API/useBeforeUnload",
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
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });
    const [isDirty, setIsDirty] = useState(false);
    const [isEnabled, setIsEnabled] = useState(true);

    // Enable the beforeunload prompt when form is dirty
    useBeforeUnload(
      isEnabled && isDirty,
      "You have unsaved changes. Are you sure you want to leave?",
    );

    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
      setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
      setIsDirty(true);
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setIsDirty(false);
      alert("Form submitted! You can now leave without warning.");
    };

    const handleReset = () => {
      setFormData({ name: "", email: "", message: "" });
      setIsDirty(false);
    };

    return (
      <div className="space-y-6 max-w-lg">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">
            Form with Navigation Warning
          </h3>
          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <div className="space-y-6">
              {/* Controls */}
              <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
                <span className="text-sm text-blue-600 dark:text-blue-400">
                  Try to close this tab or navigate away after making changes{" "}
                  {isDirty ? "✏️" : "✨"}
                </span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Warning {isEnabled ? "On" : "Off"}
                  </span>
                  <button
                    onClick={() => setIsEnabled(!isEnabled)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      isEnabled
                        ? "bg-green-500"
                        : "bg-slate-300 dark:bg-slate-600"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        isEnabled ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
                    placeholder="Your message here..."
                  />
                </div>

                <div className="flex space-x-2">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-4 py-2 bg-slate-500 hover:bg-slate-600 text-white rounded-md transition-colors"
                  >
                    Reset
                  </button>
                </div>
              </form>

              {/* Status */}
              <div
                className={`text-sm rounded p-2 ${
                  isDirty
                    ? "bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400"
                    : "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400"
                }`}
              >
                Form is {isDirty ? "dirty" : "pristine"}
              </div>

              {/* Instructions */}
              <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
                <p className="text-sm text-blue-600 dark:text-blue-400">
                  Make changes to the form and try to close the tab or navigate
                  away - you'll see a warning! 🚫
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
};
