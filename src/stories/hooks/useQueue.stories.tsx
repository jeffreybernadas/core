import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useQueue } from "../../hooks";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useQueue` is a hook that manages a FIFO (First-In-First-Out) queue data structure.
 * It's useful for managing ordered data, task queues, or message buffers.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useQueue } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useQueue } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = () => {
 *   const { add, remove, first, last, size, items } = useQueue<string>();
 *   const [task, setTask] = useState('');
 *
 *   return (
 *     <div>
 *       <div>
 *         <input
 *           value={task}
 *           onChange={(e) => setTask(e.target.value)}
 *           placeholder="Enter task"
 *         />
 *         <button onClick={() => { add(task); setTask(''); }}>Add Task</button>
 *         <button onClick={remove}>Complete Task</button>
 *       </div>
 *       <div>
 *         <div>Next task: {first || 'No tasks'}</div>
 *         <div>Last added: {last || 'No tasks'}</div>
 *         <div>Tasks in queue: {size}</div>
 *       </div>
 *       <ul>
 *         {items.map((item, index) => (
 *           <li key={index}>{item}</li>
 *         ))}
 *       </ul>
 *     </div>
 *   );
 * };
 * ```
 *
 * ### Advanced Usage
 * ```tsx
 * const MessageBuffer = () => {
 *   const { add, remove, items, clear } = useQueue<{ text: string; time: number }>();
 *
 *   const addMessage = (text: string) => {
 *     add({ text, time: Date.now() });
 *     // Auto-remove after 5 seconds
 *     setTimeout(remove, 5000);
 *   };
 *
 *   return (
 *     <div>
 *       <button onClick={() => addMessage('New message')}>Send Message</button>
 *       <button onClick={clear}>Clear All</button>
 *       <div>
 *         {items.map((msg, i) => (
 *           <div key={i}>
 *             {msg.text} - {new Date(msg.time).toLocaleTimeString()}
 *           </div>
 *         ))}
 *       </div>
 *     </div>
 *   );
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * useQueue<T>(
 *   initialValues?: T[] // Optional initial queue items
 * ): {
 *   add: (item: T) => void;
 *   remove: () => T | undefined;
 *   clear: () => void;
 *   first: T | undefined;
 *   last: T | undefined;
 *   size: number;
 *   items: T[];
 * }
 * ```
 *
 * ### Returns
 * An object containing:
 * - add: Function to add an item to the end of the queue
 * - remove: Function to remove and return the first item
 * - clear: Function to remove all items
 * - first: The first item in the queue
 * - last: The last item in the queue
 * - size: Number of items in the queue
 * - items: Array of all items in the queue
 *
 * ### Browser Compatibility
 * Uses basic JavaScript array operations, supported in all modern browsers.
 */
const meta = {
  title: "Hooks/State Management/useQueue",
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

interface QueueMethods<T> {
  add: (item: T) => void;
  remove: () => T | undefined;
  clear: () => void;
  first: T | undefined;
  last: T | undefined;
  size: number;
  items: T[];
}

export const TaskQueueExample: Story = {
  render: () => {
    const queue = useQueue<string>() as QueueMethods<string>;
    const [task, setTask] = useState("");

    return (
      <div className="space-y-6 max-w-lg">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">
            Task Queue
          </h3>
          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg space-y-4">
            <div className="flex space-x-2">
              <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter task"
                className="px-3 py-2 border rounded-md flex-1"
              />
              <button
                onClick={() => {
                  queue.add(task);
                  setTask("");
                }}
                className="px-4 py-2 bg-blue-500 text-white rounded"
                disabled={!task}
              >
                Add
              </button>
              <button
                onClick={queue.remove}
                className="px-4 py-2 bg-red-500 text-white rounded"
                disabled={queue.size === 0}
              >
                Complete
              </button>
            </div>
            <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <div>Next task: {queue.first || "No tasks"}</div>
              <div>Last added: {queue.last || "No tasks"}</div>
              <div>Tasks in queue: {queue.size}</div>
            </div>
            {queue.items?.length > 0 && (
              <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                {queue.items?.map((item: string, index: number) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            )}

            {/* Instructions */}
            <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
              <p className="text-sm text-blue-600 dark:text-blue-400">
                Try adding tasks to the queue and completing them to see how
                FIFO (First In, First Out) works! 📋
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  },
};
