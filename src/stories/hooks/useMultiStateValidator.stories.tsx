import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useMultiStateValidator } from "../../hooks/useMultiStateValidator";
import { ThemeProvider } from "../../themes/shadcn";

/**
 * `useMultiStateValidator` is a hook that validates multiple states simultaneously using a single validator function.
 * It's particularly useful for complex form validations where multiple fields need to be validated together.
 *
 * ### Module Federation Import
 * ```tsx
 * import { useMultiStateValidator } from "@core/hooks";
 * ```
 *
 * ### NPM Package Import
 * ```tsx
 * import { useMultiStateValidator } from "@bernz322/core/hooks";
 * ```
 *
 * ### Basic Usage
 * ```tsx
 * const Component = () => {
 *   const [username, setUsername] = useState("");
 *   const [password, setPassword] = useState("");
 *
 *   const [validity] = useMultiStateValidator(
 *     { username, password },
 *     (states) => ({
 *       usernameValid: states.username.length >= 3,
 *       passwordValid: states.password.length >= 8,
 *       formValid: states.username.length >= 3 && states.password.length >= 8
 *     })
 *   );
 *
 *   return (
 *     <form>
 *       <input value={username} onChange={(e) => setUsername(e.target.value)} />
 *       <input value={password} onChange={(e) => setPassword(e.target.value)} />
 *       <div>Form is {validity.formValid ? "valid" : "invalid"}</div>
 *     </form>
 *   );
 * };
 * ```
 *
 * ### Parameters
 * ```tsx
 * useMultiStateValidator<V extends ValidityState, S extends MultiStateValidatorStates>(
 *   states: S, // Object or array containing states to validate
 *   validator: (states: S, setValidity?: (validity: V) => void) => V, // Validator function
 *   initialValidity?: V = [undefined] // Initial validity state
 * ): [V, () => void] // Returns [validity state, validate function]
 * ```
 *
 * ### Returns
 * ```tsx
 * [
 *   validity: V, // Current validity state
 *   validate: () => void // Function to manually trigger validation
 * ]
 * ```
 *
 * ### Browser Compatibility
 * Uses standard React hooks and JavaScript features.
 * Compatible with all modern browsers.
 *
 * ### Related Resources
 * - [MDN: Form Validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
 * - [React Forms](https://react.dev/reference/react-dom/components/form)
 */

const meta = {
  title: "Hooks/Utility/useMultiStateValidator",
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
  password: string;
  confirmPassword: string;
}

interface FormValidity {
  username: boolean;
  email: boolean;
  password: {
    length: boolean;
    number: boolean;
    special: boolean;
    match: boolean;
  };
}

const MultiStateValidatorExample = () => {
  const [formState, setFormState] = useState<FormState>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  // @ts-expect-error skip type checking for FormValidity
  const [validity] = useMultiStateValidator<FormValidity, FormState>(
    formState,
    (state: FormState) => ({
      username: state.username.length >= 3,
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email),
      password: {
        length: state.password.length >= 8,
        number: /\d/.test(state.password),
        special: /[!@#$%^&*]/.test(state.password),
        match: state.password === state.confirmPassword,
      },
    }),
  );

  const handleChange =
    (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormState((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };

  return (
    <div className="space-y-6 max-w-md">
      <div>
        <h3 className="text-lg font-semibold mb-4">Registration Form</h3>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Username</label>
            <input
              type="text"
              value={formState.username}
              onChange={handleChange("username")}
              className={`w-full px-3 py-2 border rounded ${
                formState.username && !validity.username
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            {formState.username && !validity.username && (
              <p className="mt-1 text-sm text-red-500">
                Username must be at least 3 characters
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={formState.email}
              onChange={handleChange("email")}
              className={`w-full px-3 py-2 border rounded ${
                formState.email && !validity.email
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            {formState.email && !validity.email && (
              <p className="mt-1 text-sm text-red-500">
                Please enter a valid email address
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              value={formState.password}
              onChange={handleChange("password")}
              className={`w-full px-3 py-2 border rounded ${
                formState.password &&
                (!validity.password.length ||
                  !validity.password.number ||
                  !validity.password.special)
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            {formState.password && (
              <div className="mt-1 text-sm">
                <p
                  className={
                    validity.password.length ? "text-green-500" : "text-red-500"
                  }
                >
                  • At least 8 characters
                </p>
                <p
                  className={
                    validity.password.number ? "text-green-500" : "text-red-500"
                  }
                >
                  • Contains a number
                </p>
                <p
                  className={
                    validity.password.special
                      ? "text-green-500"
                      : "text-red-500"
                  }
                >
                  • Contains a special character (!@#$%^&*)
                </p>
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              value={formState.confirmPassword}
              onChange={handleChange("confirmPassword")}
              className={`w-full px-3 py-2 border rounded ${
                formState.confirmPassword && !validity.password.match
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            {formState.confirmPassword && !validity.password.match && (
              <p className="mt-1 text-sm text-red-500">Passwords must match</p>
            )}
          </div>

          <button
            type="submit"
            disabled={
              !validity.username ||
              !validity.email ||
              !validity.password.length ||
              !validity.password.number ||
              !validity.password.special ||
              !validity.password.match
            }
            className="w-full px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Register
          </button>
        </form>
      </div>

      <div className="text-sm text-gray-600">
        <h4 className="font-semibold mb-1">Validation Rules:</h4>
        <ul className="list-disc list-inside space-y-1">
          <li>Username must be at least 3 characters</li>
          <li>Email must be in a valid format</li>
          <li>Password must be at least 8 characters</li>
          <li>Password must contain a number</li>
          <li>Password must contain a special character</li>
          <li>Passwords must match</li>
          <li>All fields must be valid to enable the Register button</li>
        </ul>
      </div>
    </div>
  );
};

export const Example: Story = {
  render: () => <MultiStateValidatorExample />,
};
