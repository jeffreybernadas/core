import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import useStateValidator, {
  StateValidator,
} from "../../hooks/useStateValidator";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useStateValidator` is a hook that validates state changes using a validator function.
 * It's useful for form validation, data integrity checks, and real-time state validation.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useStateValidator } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useStateValidator } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = () => {
 *   const [value, setValue] = useState('');
 *   const validator: StateValidator<[boolean, string], string> = (state) => {
 *     return [state.length > 3, 'Value must be longer than 3 characters'];
 *   };
 *
 *   const [validity, revalidate] = useStateValidator(value, validator);
 *   const [isValid, message] = validity;
 *
 *   return (
 *     <div>
 *       <input value={value} onChange={(e) => setValue(e.target.value)} />
 *       {!isValid && <span>{message}</span>}
 *     </div>
 *   );
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * useStateValidator<V extends ValidityState, S>(
 *   state: S,
 *   validator: StateValidator<V, S>,
 *   initialState?: V
 * ): [V, () => void]
 * ```
 *
 * ### Returns
 * - Returns a tuple containing:
 *   1. The validation state (V)
 *   2. A function to manually trigger revalidation
 *
 * ### Browser Compatibility
 * - No special Web APIs required
 * - Works in all modern browsers
 *
 * ### Related Resources
 * - [React Forms](https://react.dev/reference/react-dom/components/input)
 * - [Form Validation Best Practices](https://www.w3.org/WAI/tutorials/forms/validation/)
 */

const meta = {
  title: "Hooks/Utility/useStateValidator",
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

interface FormData {
  username: string;
  email: string;
  password: string;
}

const StateValidatorExample = () => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password: "",
  });

  // Validator function that checks multiple fields
  const formValidator: StateValidator<
    [boolean, Record<string, string>],
    FormData
  > = (state) => {
    const errors: Record<string, string> = {};
    let isValid = true;

    // Username validation
    if (state.username.length < 3) {
      errors.username = "Username must be at least 3 characters";
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(state.email)) {
      errors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Password validation
    if (state.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
      isValid = false;
    }

    return [isValid, errors];
  };

  const [validity, revalidate] = useStateValidator(
    formData,
    formValidator,
    [false, {}], // Provide initial state
  );
  const [isValid, errors = {}] = validity; // Provide default empty object for errors

  const handleChange =
    (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    revalidate();
    if (isValid) {
      alert("Form submitted successfully! 🎉");
    }
  };

  return (
    <div className="w-[400px]">
      <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            Form Validation Example
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Real-time form validation using useStateValidator
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username Field */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-900 dark:text-slate-100">
              Username
            </label>
            <input
              type="text"
              value={formData.username}
              onChange={handleChange("username")}
              className="flex h-9 w-full rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-1 text-sm text-slate-900 dark:text-slate-100 shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500"
              placeholder="Enter username"
            />
            {errors.username && (
              <p className="text-xs text-red-500">{errors.username}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-900 dark:text-slate-100">
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={handleChange("email")}
              className="flex h-9 w-full rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-1 text-sm text-slate-900 dark:text-slate-100 shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500"
              placeholder="Enter email"
            />
            {errors.email && (
              <p className="text-xs text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-900 dark:text-slate-100">
              Password
            </label>
            <input
              type="password"
              value={formData.password}
              onChange={handleChange("password")}
              className="flex h-9 w-full rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-1 text-sm text-slate-900 dark:text-slate-100 shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500"
              placeholder="Enter password"
            />
            {errors.password && (
              <p className="text-xs text-red-500">{errors.password}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors"
          >
            Submit Form
          </button>
        </form>

        {/* Form Status */}
        <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-md">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-slate-900 dark:text-slate-100">
                Form Status:
              </span>
              <span
                className={`text-sm ${
                  isValid
                    ? "text-green-600 dark:text-green-400"
                    : "text-red-600 dark:text-red-400"
                }`}
              >
                {isValid ? "Valid ✓" : "Invalid ✗"}
              </span>
            </div>
          </div>
        </div>

        <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
          <p className="text-sm text-blue-600 dark:text-blue-400">
            Fill out the form to see real-time validation in action! 📝
          </p>
        </div>
      </div>
    </div>
  );
};

export const Example: Story = {
  render: () => <StateValidatorExample />,
};
