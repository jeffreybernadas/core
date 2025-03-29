import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/shadcn/form";
import { ThemeProvider } from "../../../themes/shadcn";
import { Input } from "../../../components/shadcn/input";
import { Button } from "../../../components/shadcn/button";
import { Checkbox } from "../../../components/shadcn/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/shadcn/select";
import { Textarea } from "../../../components/shadcn/textarea";
import {
  RadioGroup,
  RadioGroupItem,
} from "../../../components/shadcn/radio-group";
import { Switch } from "../../../components/shadcn/switch";

/**
 * Building forms with React Hook Form and Zod.
 *
 * Forms are tricky. They are one of the most common things you'll build in a web application, but also one of the most complex.
 *
 * See the [Shadcn docs](https://ui.shadcn.com/docs/components/form) for the full guide and more information.
 */
const meta = {
  title: "Components/Shadcn/Form",
  component: Form,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "stable", "version:2.3.0"],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div className="w-full max-w-md">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof Form>;

/**
 * Basic login form with email and password fields.
 */
export const LoginForm: Story = {
  args: {},
  render: function LoginFormExample() {
    // Define form schema
    const formSchema = z.object({
      email: z.string().email({ message: "Invalid email address" }),
      password: z
        .string()
        .min(8, { message: "Password must be at least 8 characters" }),
    });

    // Initialize form
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        email: "",
        password: "",
      },
    });

    // Form submission handler
    function onSubmit(values: z.infer<typeof formSchema>) {
      // This would normally send the data to a server
      alert(JSON.stringify(values, null, 2));
    }

    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="example@example.com" {...field} />
                </FormControl>
                <FormDescription>Enter your email address.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormDescription>Enter your password.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </Form>
    );
  },
};

/**
 * Registration form with multiple fields and validation.
 */
export const RegistrationForm: Story = {
  args: {},
  render: function RegistrationFormExample() {
    // Define form schema
    const formSchema = z
      .object({
        username: z
          .string()
          .min(3, { message: "Username must be at least 3 characters" }),
        email: z.string().email({ message: "Invalid email address" }),
        password: z
          .string()
          .min(8, { message: "Password must be at least 8 characters" }),
        confirmPassword: z.string(),
        terms: z.boolean().refine((val) => val === true, {
          message: "You must accept the terms and conditions",
        }),
      })
      .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
      });

    // Initialize form
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        terms: false,
      },
    });

    // Form submission handler
    function onSubmit(values: z.infer<typeof formSchema>) {
      // This would normally send the data to a server
      alert(JSON.stringify(values, null, 2));
    }

    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="johndoe" {...field} />
                </FormControl>
                <FormDescription>
                  This will be your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="example@example.com" {...field} />
                </FormControl>
                <FormDescription>
                  We'll never share your email with anyone else.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormDescription>
                  Your password must be at least 8 characters.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="terms"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Accept terms and conditions</FormLabel>
                  <FormDescription>
                    You agree to our Terms of Service and Privacy Policy.
                  </FormDescription>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Register
          </Button>
        </form>
      </Form>
    );
  },
};

/**
 * Profile form with different input types.
 */
export const ProfileForm: Story = {
  args: {},
  render: function ProfileFormExample() {
    // Define form schema
    const formSchema = z.object({
      name: z
        .string()
        .min(2, { message: "Name must be at least 2 characters" }),
      bio: z
        .string()
        .max(160, { message: "Bio must not exceed 160 characters" })
        .optional(),
      role: z.string({
        required_error: "Please select a role",
      }),
      notifications: z.boolean().default(false),
    });

    // Initialize form
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        name: "",
        bio: "",
        role: "",
        notifications: false,
      },
    });

    // Form submission handler
    function onSubmit(values: z.infer<typeof formSchema>) {
      // This would normally send the data to a server
      alert(JSON.stringify(values, null, 2));
    }

    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bio</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us a little bit about yourself"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  You can <span>@mention</span> other users and organizations.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Role</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="user">User</SelectItem>
                    <SelectItem value="guest">Guest</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  This is the role that will be assigned to your account.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="notifications"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <FormLabel className="text-base">
                    Email Notifications
                  </FormLabel>
                  <FormDescription>
                    Receive emails about your account activity.
                  </FormDescription>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit">Update profile</Button>
        </form>
      </Form>
    );
  },
};

/**
 * Survey form with radio buttons.
 */
export const SurveyForm: Story = {
  args: {},
  render: function SurveyFormExample() {
    // Define form schema
    const formSchema = z.object({
      satisfaction: z.string({
        required_error: "Please select a satisfaction level",
      }),
      feedback: z
        .string()
        .min(10, { message: "Feedback must be at least 10 characters" })
        .optional(),
    });

    // Initialize form
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        satisfaction: "",
        feedback: "",
      },
    });

    // Form submission handler
    function onSubmit(values: z.infer<typeof formSchema>) {
      // This would normally send the data to a server
      alert(JSON.stringify(values, null, 2));
    }

    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="satisfaction"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>How satisfied are you with our service?</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="very-satisfied" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Very Satisfied
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="satisfied" />
                      </FormControl>
                      <FormLabel className="font-normal">Satisfied</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="neutral" />
                      </FormControl>
                      <FormLabel className="font-normal">Neutral</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="dissatisfied" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Dissatisfied
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="very-dissatisfied" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Very Dissatisfied
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="feedback"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Additional Feedback</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Please share any additional feedback you have"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Your feedback helps us improve our service.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit Feedback</Button>
        </form>
      </Form>
    );
  },
};
