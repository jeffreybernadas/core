import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useError } from "../../hooks";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useError` is a hook that provides a way to throw errors in React components.
 * It's useful for error boundaries and handling component-level errors programmatically.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useError } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useError } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = () => {
 *   const dispatchError = useError();
 *
 *   return (
 *     <button onClick={() => dispatchError(new Error('Test error'))}>
 *       Throw Error
 *     </button>
 *   );
 * };
 * ```
 *
 * ### Advanced Usage
 * ```tsx
 * class ErrorBoundary extends React.Component {
 *   state = { hasError: false, error: null };
 *
 *   static getDerivedStateFromError(error) {
 *     return { hasError: true, error };
 *   }
 *
 *   render() {
 *     if (this.state.hasError) {
 *       return <div>Error: {this.state.error.message}</div>;
 *     }
 *     return this.props.children;
 *   }
 * }
 *
 * const App = () => (
 *   <ErrorBoundary>
 *     <ErrorComponent />
 *   </ErrorBoundary>
 * );
 * ```
 *
 * ### Parameters
 * None
 *
 * ### Returns
 * ```tsx
 * (error: Error) => void  // Function to throw an error
 * ```
 *
 * ### Browser Compatibility
 * Uses standard React features, supported in all modern browsers.
 *
 * ### Related Resources
 * - [React Error Boundaries](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary)
 * - [Error Handling in React](https://react.dev/reference/react/Component#handling-errors)
 */

const meta = {
  title: "Hooks/Utility/useError",
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

// Error Boundary Component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
          <h4 className="text-red-600 dark:text-red-400 font-medium mb-2">
            Something went wrong
          </h4>
          <div className="text-sm text-red-500 dark:text-red-300">
            {this.state.error?.message}
          </div>
          <button
            className="mt-3 px-3 py-1 bg-red-100 dark:bg-red-800 text-red-600 dark:text-red-300 rounded hover:bg-red-200 dark:hover:bg-red-700"
            onClick={() => this.setState({ hasError: false, error: null })}
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Error-throwing component
const ErrorThrower = () => {
  const dispatchError = useError();
  const [errorType, setErrorType] = useState<string>("validation");

  const throwError = () => {
    switch (errorType) {
      case "validation":
        dispatchError(new Error("Invalid input: Field cannot be empty"));
        break;
      case "network":
        dispatchError(new Error("Network Error: Failed to fetch data"));
        break;
      case "permission":
        dispatchError(new Error("Permission Denied: Insufficient privileges"));
        break;
      default:
        dispatchError(new Error("Unknown error occurred"));
    }
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
          Error Type
        </label>
        <select
          value={errorType}
          onChange={(e) => setErrorType(e.target.value)}
          className="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md text-slate-900 dark:text-slate-100"
        >
          <option value="validation">Validation Error</option>
          <option value="network">Network Error</option>
          <option value="permission">Permission Error</option>
        </select>
      </div>
      <button
        onClick={throwError}
        className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Throw Error
      </button>
    </div>
  );
};

export const Example: Story = {
  render: () => {
    return (
      <div className="space-y-6 max-w-lg">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">
            Error Handling Demo
          </h3>
          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg space-y-4">
            <ErrorBoundary>
              <ErrorThrower />
            </ErrorBoundary>

            {/* Instructions */}
            <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
              <p className="text-sm text-blue-600 dark:text-blue-400">
                Select an error type and click the button to throw it! The error
                boundary will catch and display it. Click 'Try again' to reset!
                🚨
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  },
};
