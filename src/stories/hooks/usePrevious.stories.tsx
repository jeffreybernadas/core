import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { usePrevious } from "../../hooks";
import { ThemeProvider } from "../../themes/shadcn";
/**
 * `usePrevious` is a hook that stores and returns the previous value of a state variable.
 * It's useful for comparing current and previous values or implementing undo functionality.
 *
 * ### Module Federation Import
 * ```tsx
 * import { usePrevious } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { usePrevious } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const UndoComponent = () => {
 *   const [text, setText] = useState('');
 *   const previousText = usePrevious(text);
 *
 *   const handleUndo = () => {
 *     if (previousText !== undefined) {
 *       setText(previousText);
 *     }
 *   };
 *
 *   return (
 *     <div>
 *       <div>
 *         <input
 *           type="text"
 *           value={text}
 *           onChange={(e) => setText(e.target.value)}
 *         />
 *         <button
 *           onClick={handleUndo}
 *           disabled={previousText === undefined}
 *         >
 *           Undo
 *         </button>
 *       </div>
 *       <div>Previous text: {previousText || '(none)'}</div>
 *     </div>
 *   );
 * };
 * ```
 *
 * ### Advanced Usage
 * ```tsx
 * const ComparisonComponent = () => {
 *   const [count, setCount] = useState(0);
 *   const prevCount = usePrevious(count);
 *
 *   const trend = React.useMemo(() => {
 *     if (prevCount === undefined) return 'neutral';
 *     return count > prevCount ? 'increasing' : count < prevCount ? 'decreasing' : 'stable';
 *   }, [count, prevCount]);
 *
 *   return (
 *     <div>
 *       <div>
 *         <button onClick={() => setCount(c => c - 1)}>-</button>
 *         <span>{count}</span>
 *         <button onClick={() => setCount(c => c + 1)}>+</button>
 *       </div>
 *       <div>Trend: {trend}</div>
 *     </div>
 *   );
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * usePrevious<T>(
 *   state: T // The state value to track
 * ): T | undefined
 * ```
 *
 * ### Returns
 * - T | undefined: The previous value of the state (undefined on first render)
 *
 * ### Browser Compatibility
 * Uses React's useRef and useEffect hooks, supported in all modern browsers.
 *
 * ### Related Resources
 * - [React useRef Hook](https://react.dev/reference/react/useRef)
 * - [React useEffect Hook](https://react.dev/reference/react/useEffect)
 */
const meta = {
  title: "Hooks/usePrevious",
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

export const CounterExample: Story = {
  render: () => {
    const [count, setCount] = useState(0);
    const prevCount = usePrevious(count);

    return (
      <div className="space-y-6 max-w-lg">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">
            Counter with History
          </h3>
          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg space-y-4">
            <div className="space-y-2">
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Current count: {count}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Previous count: {prevCount ?? "None"}
              </div>
            </div>
            <button
              onClick={() => setCount((c) => c + 1)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Increment (+1)
            </button>
          </div>
        </div>
      </div>
    );
  },
};
