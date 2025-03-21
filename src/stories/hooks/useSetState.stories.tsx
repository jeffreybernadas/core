import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import useSetState from "../../hooks/useSetState";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useSetState` is a hook that mimics class component's setState behavior for managing object state with partial updates.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useSetState } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useSetState } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = () => {
 *   const [state, setState] = useSetState({ count: 0, text: 'hello' });
 *
 *   // Update single property
 *   setState({ count: state.count + 1 });
 *
 *   // Update using function
 *   setState(prev => ({ count: prev.count + 1 }));
 *
 *   return <div>Count: {state.count}</div>;
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * useSetState<T extends object>(
 *   initialState: T = {} as T
 * ): [
 *   T,
 *   (patch: Partial<T> | ((prevState: T) => Partial<T>)) => void
 * ]
 * ```
 *
 * ### Returns
 * - Returns a tuple containing the current state and a setState function that accepts partial updates
 */

const meta = {
  title: "Hooks/State Management/useSetState",
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

interface FormState {
  username: string;
  email: string;
  settings: {
    notifications: boolean;
    theme: string;
    fontSize: number;
  };
  lastUpdated: Date | null;
}

const SetStateExample = () => {
  const [formState, setFormState] = useSetState<FormState>({
    username: "",
    email: "",
    settings: {
      notifications: true,
      theme: "light",
      fontSize: 14,
    },
    lastUpdated: null,
  });

  const updateField = (
    field: keyof FormState,
    value: FormState[keyof FormState],
  ) => {
    setFormState({
      [field]: value,
      lastUpdated: new Date(),
    });
  };

  const updateSettings = (
    field: keyof FormState["settings"],
    value: FormState["settings"][keyof FormState["settings"]],
  ) => {
    setFormState((prev) => ({
      settings: {
        ...prev.settings,
        [field]: value,
      },
      lastUpdated: new Date(),
    }));
  };

  const resetForm = () => {
    setFormState({
      username: "",
      email: "",
      settings: {
        notifications: true,
        theme: "light",
        fontSize: 14,
      },
      lastUpdated: new Date(),
    });
  };

  return (
    <div className="space-y-6 w-[500px]">
      <h3 className="text-lg font-semibold">Form State Manager</h3>

      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Username</label>
          <input
            type="text"
            value={formState.username}
            onChange={(e) => updateField("username", e.target.value)}
            placeholder="Enter username..."
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Email</label>
          <input
            type="email"
            value={formState.email}
            onChange={(e) => updateField("email", e.target.value)}
            placeholder="Enter email..."
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>

        <div className="space-y-3">
          <p className="text-sm font-medium">Settings</p>

          <div className="flex items-center gap-4">
            <label className="text-sm">Notifications</label>
            <input
              type="checkbox"
              checked={formState.settings.notifications}
              onChange={(e) =>
                updateSettings("notifications", e.target.checked)
              }
              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
            />
          </div>

          <div className="flex items-center gap-4">
            <label className="text-sm">Theme</label>
            <select
              value={formState.settings.theme}
              onChange={(e) => updateSettings("theme", e.target.value)}
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="system">System</option>
            </select>
          </div>

          <div className="flex items-center gap-4">
            <label className="text-sm">Font Size</label>
            <input
              type="range"
              min="12"
              max="24"
              value={formState.settings.fontSize}
              onChange={(e) =>
                updateSettings("fontSize", Number(e.target.value))
              }
              className="w-full"
            />
            <span className="text-sm">{formState.settings.fontSize}px</span>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={resetForm}
            className="px-4 py-2 text-sm font-semibold rounded-md bg-destructive text-white shadow hover:bg-destructive/90"
          >
            Reset Form
          </button>
        </div>

        <div className="p-4 bg-muted rounded-md">
          <p className="text-sm font-medium">Current State:</p>
          <pre className="mt-2 text-sm overflow-auto">
            {JSON.stringify(
              {
                ...formState,
                lastUpdated: formState.lastUpdated?.toLocaleString(),
              },
              null,
              2,
            )}
          </pre>
        </div>
      </div>

      <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
        <p className="text-sm text-blue-600 dark:text-blue-400">
          Try updating form fields to see how useSetState manages partial
          updates! 🔄
        </p>
      </div>
    </div>
  );
};

export const Example: Story = {
  render: () => <SetStateExample />,
};
