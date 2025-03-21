import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useCustomCompareEffect } from "../../hooks";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useCustomCompareEffect` is a hook that works like useEffect but allows custom comparison of dependencies.
 * It's useful when dealing with complex objects or arrays where reference equality isn't sufficient.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useCustomCompareEffect } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useCustomCompareEffect } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = ({ user }) => {
 *   useCustomCompareEffect(
 *     () => {
 *       console.log('User data changed');
 *     },
 *     [user],
 *     (prevDeps, nextDeps) => prevDeps[0].id === nextDeps[0].id
 *   );
 *
 *   return <div>{user.name}</div>;
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * useCustomCompareEffect<TDeps extends DependencyList>(
 *   effect: EffectCallback, // Effect to run
 *   deps: TDeps, // Dependencies array
 *   depsEqual: (prevDeps: TDeps, nextDeps: TDeps) => boolean // Custom comparison
 * ): void
 * ```
 *
 * ### Important Notes
 * - Don't use with empty dependency array (use useEffect instead)
 * - Don't use with only primitive values (use useEffect instead)
 * - Always provide a depsEqual function for comparison
 *
 * ### Browser Compatibility
 * Uses standard React hooks, supported in all modern browsers.
 */

const meta = {
  title: "Hooks/Lifecycle/useCustomCompareEffect",
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

// Helper types for our examples
interface User {
  id: number;
  name: string;
  role: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
  tags: string[];
}

export const Example: Story = {
  render: () => {
    // User example state
    const [user, setUser] = useState<User>({
      id: 1,
      name: "John Doe",
      role: "Admin",
    });

    // Product example state
    const [product, setProduct] = useState<Product>({
      id: 1,
      name: "Widget",
      price: 9.99,
      tags: ["new", "featured"],
    });

    // Effect logs for display
    const [effectLogs, setEffectLogs] = useState<string[]>([]);
    const addLog = (message: string) => {
      setEffectLogs((prev) => [message, ...prev].slice(0, 5));
    };

    // User comparison effect
    useCustomCompareEffect(
      () => {
        addLog(`User effect ran - ID: ${user.id}`);
      },
      [user],
      (prevDeps, nextDeps) => {
        // Only trigger if user ID changes
        return prevDeps[0].id === nextDeps[0].id;
      },
    );

    // Product comparison effect
    useCustomCompareEffect(
      () => {
        addLog(`Product effect ran - ID: ${product.id}`);
      },
      [product],
      (prevDeps, nextDeps) => {
        // Compare specific product properties
        const prev = prevDeps[0] as Product;
        const next = nextDeps[0] as Product;
        return (
          prev.id === next.id &&
          prev.price === next.price &&
          prev.tags.length === next.tags.length &&
          prev.tags.every((tag, i) => next.tags[i] === tag)
        );
      },
    );

    return (
      <div className="space-y-6 max-w-lg">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">
            Custom Compare Effect Examples
          </h3>
          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <div className="space-y-6">
              {/* User Example */}
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  User Updates (Compare by ID)
                </h4>
                <div className="bg-white dark:bg-slate-700 p-3 rounded-md">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Current User:
                    </span>
                    <span className="text-sm font-medium text-slate-900 dark:text-slate-100">
                      ID: {user.id}, {user.name}, {user.role}
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setUser({ ...user, name: "Jane Doe" })}
                      className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded transition-colors"
                    >
                      Change Name
                    </button>
                    <button
                      onClick={() => setUser({ ...user, role: "User" })}
                      className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white text-sm rounded transition-colors"
                    >
                      Change Role
                    </button>
                    <button
                      onClick={() => setUser({ ...user, id: user.id + 1 })}
                      className="px-3 py-1 bg-purple-500 hover:bg-purple-600 text-white text-sm rounded transition-colors"
                    >
                      Change ID
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Example */}
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Product Updates (Compare Multiple Properties)
                </h4>
                <div className="bg-white dark:bg-slate-700 p-3 rounded-md">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Current Product:
                    </span>
                    <span className="text-sm font-medium text-slate-900 dark:text-slate-100">
                      {product.name} - ${product.price} [
                      {product.tags.join(", ")}]
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() =>
                        setProduct({ ...product, name: "Super Widget" })
                      }
                      className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded transition-colors"
                    >
                      Change Name
                    </button>
                    <button
                      onClick={() =>
                        setProduct({ ...product, price: product.price + 1 })
                      }
                      className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white text-sm rounded transition-colors"
                    >
                      Change Price
                    </button>
                    <button
                      onClick={() =>
                        setProduct({
                          ...product,
                          tags: [...product.tags, "sale"],
                        })
                      }
                      className="px-3 py-1 bg-yellow-500 hover:bg-yellow-600 text-white text-sm rounded transition-colors"
                    >
                      Add Tag
                    </button>
                  </div>
                </div>
              </div>

              {/* Effect Logs */}
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Effect Logs
                </h4>
                <div className="bg-slate-700 dark:bg-slate-900 p-3 rounded-md space-y-1">
                  {effectLogs.map((log, index) => (
                    <div
                      key={index}
                      className="text-sm font-mono text-slate-300 dark:text-slate-400"
                    >
                      {log}
                    </div>
                  ))}
                  {effectLogs.length === 0 && (
                    <div className="text-sm text-slate-400 dark:text-slate-500 italic">
                      No effects triggered yet
                    </div>
                  )}
                </div>
              </div>

              {/* Instructions */}
              <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
                <p className="text-sm text-blue-600 dark:text-blue-400">
                  Try updating different properties and observe when the effects
                  are triggered! 🔍
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
};
