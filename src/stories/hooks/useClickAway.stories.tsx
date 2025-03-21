import React, { useRef, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useClickAway } from "../../hooks";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useClickAway` is a hook that detects clicks outside a specified element.
 * It's useful for implementing dropdowns, modals, and other interactive components that need to close when clicking outside.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useClickAway } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useClickAway } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = () => {
 *   const [isOpen, setIsOpen] = useState(false);
 *   const ref = useRef(null);
 *
 *   useClickAway(ref, () => {
 *     setIsOpen(false);
 *   });
 *
 *   return (
 *     <div ref={ref}>
 *       <button onClick={() => setIsOpen(true)}>Open Menu</button>
 *       {isOpen && <div>Menu Content</div>}
 *     </div>
 *   );
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * useClickAway<E extends Event = Event>(
 *   ref: RefObject<HTMLElement | null>, // Reference to the element to monitor
 *   onClickAway: (event: E) => void, // Callback when click occurs outside
 *   events?: string[] // Optional array of event names to listen for
 * ): void
 * ```
 *
 * ### Browser Compatibility
 * - Uses standard DOM events, supported in all modern browsers
 * - Default events: mousedown, touchstart
 * - Custom events can be specified for advanced use cases
 *
 * ### Related Resources
 * - [MDN: Event reference](https://developer.mozilla.org/en-US/docs/Web/Events)
 * - [MDN: Element.contains()](https://developer.mozilla.org/en-US/docs/Web/API/Node/contains)
 */

const meta = {
  title: "Hooks/Event & Interaction/useClickAway",
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
    const [activeComponent, setActiveComponent] = useState<string | null>(null);

    // Dropdown example
    const dropdownRef = useRef(null);
    useClickAway(dropdownRef, () => {
      if (activeComponent === "dropdown") setActiveComponent(null);
    });

    // Modal example
    const modalRef = useRef(null);
    useClickAway(modalRef, () => {
      if (activeComponent === "modal") setActiveComponent(null);
    });

    // Custom events example
    const customRef = useRef(null);
    useClickAway(
      customRef,
      () => {
        if (activeComponent === "custom") setActiveComponent(null);
      },
      ["mousedown", "touchstart", "contextmenu"], // Additional contextmenu event
    );

    return (
      <div className="space-y-6 max-w-lg">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">
            Click Away Examples
          </h3>
          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <div className="grid grid-cols-3 gap-4">
              {/* Dropdown Example */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setActiveComponent("dropdown")}
                  className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors"
                >
                  Dropdown
                </button>
                {activeComponent === "dropdown" && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white dark:bg-slate-700 rounded-md shadow-lg border border-slate-200 dark:border-slate-600 py-1">
                    <div className="px-4 py-2 text-sm text-slate-700 dark:text-slate-300">
                      Click outside to close
                    </div>
                    <hr className="my-1 border-slate-200 dark:border-slate-600" />
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-600"
                      onClick={(e) => e.preventDefault()}
                    >
                      Option 1
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-600"
                      onClick={(e) => e.preventDefault()}
                    >
                      Option 2
                    </a>
                  </div>
                )}
              </div>

              {/* Modal Example */}
              <div className="relative" ref={modalRef}>
                <button
                  onClick={() => setActiveComponent("modal")}
                  className="w-full px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md transition-colors"
                >
                  Modal
                </button>
                {activeComponent === "modal" && (
                  <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 bg-black bg-opacity-50" />
                    <div className="relative bg-white dark:bg-slate-700 rounded-lg shadow-xl p-6 max-w-sm mx-auto">
                      <h4 className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">
                        Modal Content
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Click outside the modal to close it. This is a common
                        pattern in web applications.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Custom Events Example */}
              <div className="relative" ref={customRef}>
                <button
                  onClick={() => setActiveComponent("custom")}
                  className="w-full px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-md transition-colors"
                >
                  Custom Events
                </button>
                {activeComponent === "custom" && (
                  <div className="absolute top-full right-0 mt-1 w-64 bg-white dark:bg-slate-700 rounded-md shadow-lg border border-slate-200 dark:border-slate-600 p-4">
                    <div className="text-sm text-slate-700 dark:text-slate-300">
                      This menu closes on:
                      <ul className="list-disc list-inside mt-2 space-y-1 text-xs">
                        <li>Left click outside</li>
                        <li>Touch outside</li>
                        <li>Right click outside</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Instructions */}
            <div className="mt-6 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
              <p className="text-sm text-blue-600 dark:text-blue-400">
                Try clicking outside each component to see the click-away
                behavior in action! 🎯
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  },
};
