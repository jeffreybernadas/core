import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useMediatedState } from "../../hooks/useMediatedState";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useMediatedState` is a hook that provides a way to mediate state updates through a transformation function.
 * It's useful when you need to validate, transform, or process state updates before they are applied.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useMediatedState } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useMediatedState } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = () => {
 *   // Only allow positive numbers
 *   const [count, setCount] = useMediatedState(
 *     (newValue: number) => Math.max(0, newValue),
 *     0
 *   );
 *
 *   return (
 *     <div>
 *       <p>Count: {count}</p>
 *       <button onClick={() => setCount(count - 1)}>-1</button>
 *       <button onClick={() => setCount(count + 1)}>+1</button>
 *     </div>
 *   );
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * useMediatedState<S>(
 *   mediator: (newState: any) => S | ((newState: any, dispatch: Dispatch<S>) => void), // Mediator function
 *   initialState?: S                                                                    // Optional initial state
 * ): [S, Dispatch<SetStateAction<S>>]
 * ```
 *
 * ### Returns
 * ```tsx
 * [
 *   state: S,                    // Current state value
 *   setState: Dispatch<S>        // Function to update state through mediator
 * ]
 * ```
 *
 * ### Browser Compatibility
 * Uses standard React hooks (useState, useCallback, useRef).
 * Supported in all modern browsers.
 *
 * ### Related Resources
 * - [React useState](https://react.dev/reference/react/useState)
 * - [React useCallback](https://react.dev/reference/react/useCallback)
 */

const meta = {
  title: "Hooks/State Management/useMediatedState",
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

interface User {
  name: string;
  age: number;
  email: string;
}

const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const UserFormExample = () => {
  // Mediated state for user data with validation
  const [user, setUser] = useMediatedState<User>(
    (newUser: Partial<User>): User => {
      // Create a new user object with the current state as fallback
      const updatedUser: User = {
        name: user?.name || "",
        age: user?.age || 0,
        email: user?.email || "",
        ...newUser,
      };

      // Validate and transform the data
      if (newUser.age !== undefined) {
        updatedUser.age = Math.max(0, Math.min(150, updatedUser.age)); // Age between 0 and 150
      }
      if (newUser.email !== undefined && !validateEmail(updatedUser.email)) {
        return user as User; // Return current state if email is invalid
      }
      if (newUser.name !== undefined) {
        updatedUser.name = updatedUser.name.trim(); // Trim whitespace
      }

      return updatedUser;
    },
    {
      name: "John Doe",
      age: 25,
      email: "john@example.com",
    },
  );

  // Form error state
  const [emailError, setEmailError] = useState(false);

  const handleEmailChange = (email: string) => {
    setEmailError(!validateEmail(email));
    setUser({ ...user, email }); // Spread current user to maintain other fields
  };

  return (
    <div className="w-[400px]">
      <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg space-y-6">
        {/* Form Fields */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            User Form with Validation
          </h3>

          {/* Name Field */}
          <div className="space-y-2">
            <label className="block text-sm text-slate-600 dark:text-slate-400">
              Name
            </label>
            <input
              type="text"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              className="w-full px-3 py-2 border rounded text-slate-900 dark:text-slate-100 dark:bg-slate-700"
              placeholder="Enter name"
            />
          </div>

          {/* Age Field */}
          <div className="space-y-2">
            <label className="block text-sm text-slate-600 dark:text-slate-400">
              Age
            </label>
            <div className="flex items-center space-x-2">
              <input
                type="number"
                value={user.age}
                onChange={(e) =>
                  setUser({ ...user, age: parseInt(e.target.value) || 0 })
                }
                className="w-full px-3 py-2 border rounded text-slate-900 dark:text-slate-100 dark:bg-slate-700"
                placeholder="Enter age"
              />
              <span className="text-sm text-slate-500 dark:text-slate-400">
                (0-150)
              </span>
            </div>
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label className="block text-sm text-slate-600 dark:text-slate-400">
              Email
            </label>
            <input
              type="email"
              value={user.email}
              onChange={(e) => handleEmailChange(e.target.value)}
              className={`w-full px-3 py-2 border rounded ${
                emailError
                  ? "border-red-500 dark:border-red-400"
                  : "border-slate-300 dark:border-slate-600"
              } text-slate-900 dark:text-slate-100 dark:bg-slate-700`}
              placeholder="Enter email"
            />
            {emailError && (
              <p className="text-sm text-red-500 dark:text-red-400">
                Please enter a valid email address
              </p>
            )}
          </div>
        </div>

        {/* Current State */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
            Current State
          </h4>
          <div className="bg-slate-100 dark:bg-slate-700 p-3 rounded">
            <pre className="text-sm text-slate-700 dark:text-slate-300">
              {JSON.stringify(user, null, 2)}
            </pre>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
          <p className="text-sm text-blue-600 dark:text-blue-400">
            Try updating the form fields! Notice how the mediator function
            validates and transforms the data: names are trimmed, age is clamped
            between 0-150, and invalid emails are rejected! 🛡️
          </p>
        </div>
      </div>
    </div>
  );
};

export const Example: Story = {
  render: () => <UserFormExample />,
};
