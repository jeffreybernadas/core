import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "../../../components/shadcn/input-otp";
import { ThemeProvider } from "../../../themes/shadcn";
import { Button } from "../../../components/shadcn/button";
import { Label } from "../../../components/shadcn/label";
import { Check, Copy } from "lucide-react";

type InputOTPProps = React.ComponentProps<typeof InputOTP>;

const meta = {
  title: "Components/Shadcn/InputOTP",
  component: InputOTP,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div className="w-full max-w-md">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof InputOTP>;

export default meta;
type Story = StoryObj<typeof InputOTP>;

/**
 * Default OTP input with 6 digits.
 */
export const Default: Story = {
  render: function DefaultOTP() {
    const [value, setValue] = useState("");

    return (
      <div className="space-y-2">
        <Label htmlFor="otp">Enter verification code</Label>
        <InputOTP
          id="otp"
          maxLength={6}
          value={value}
          onChange={(value) => setValue(value)}
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <p className="text-sm text-muted-foreground">
          Please enter the 6-digit code sent to your device.
        </p>
      </div>
    );
  },
};

/**
 * OTP input with different lengths.
 */
export const DifferentLengths: Story = {
  render: function DifferentLengthsOTP() {
    const [value4, setValue4] = useState("");
    const [value6, setValue6] = useState("");
    const [value8, setValue8] = useState("");

    return (
      <div className="space-y-8">
        <div className="space-y-2">
          <Label htmlFor="otp-4">4-digit code</Label>
          <InputOTP
            id="otp-4"
            maxLength={4}
            value={value4}
            onChange={(value) => setValue4(value)}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
            </InputOTPGroup>
          </InputOTP>
        </div>

        <div className="space-y-2">
          <Label htmlFor="otp-6">6-digit code</Label>
          <InputOTP
            id="otp-6"
            maxLength={6}
            value={value6}
            onChange={(value) => setValue6(value)}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>

        <div className="space-y-2">
          <Label htmlFor="otp-8">8-digit code</Label>
          <InputOTP
            id="otp-8"
            maxLength={8}
            value={value8}
            onChange={(value) => setValue8(value)}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
              <InputOTPSlot index={6} />
              <InputOTPSlot index={7} />
            </InputOTPGroup>
          </InputOTP>
        </div>
      </div>
    );
  },
};

/**
 * OTP input with separators.
 */
export const Separators: Story = {
  render: function SeparatorsOTP() {
    const [value, setValue] = useState("");

    return (
      <div className="space-y-4">
        <h3 className="text-sm font-medium">With Separators</h3>
        <InputOTP
          maxLength={4}
          value={value}
          onChange={(value) => setValue(value)}
        >
          <InputOTPGroup className="gap-2">
            <InputOTPSlot index={0} />
            <span className="text-muted-foreground">-</span>
            <InputOTPSlot index={1} />
            <span className="text-muted-foreground">-</span>
            <InputOTPSlot index={2} />
            <span className="text-muted-foreground">-</span>
            <InputOTPSlot index={3} />
          </InputOTPGroup>
        </InputOTP>
      </div>
    );
  },
};

/**
 * OTP input with pattern.
 */
export const Pattern: Story = {
  render: function PatternOTP() {
    const [value, setValue] = useState("");

    return (
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Credit Card Pattern</h3>
        <InputOTP
          maxLength={16}
          pattern="[0-9]*"
          value={value}
          onChange={(value) => setValue(value)}
        >
          <InputOTPGroup className="gap-2">
            <div className="flex gap-1">
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
            </div>
            <div className="flex gap-1">
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
              <InputOTPSlot index={6} />
              <InputOTPSlot index={7} />
            </div>
            <div className="flex gap-1">
              <InputOTPSlot index={8} />
              <InputOTPSlot index={9} />
              <InputOTPSlot index={10} />
              <InputOTPSlot index={11} />
            </div>
            <div className="flex gap-1">
              <InputOTPSlot index={12} />
              <InputOTPSlot index={13} />
              <InputOTPSlot index={14} />
              <InputOTPSlot index={15} />
            </div>
          </InputOTPGroup>
        </InputOTP>
      </div>
    );
  },
};

/**
 * OTP input with validation.
 */
export const WithValidation: Story = {
  render: function ValidationOTP() {
    const [value, setValue] = useState("");
    const [isValid, setIsValid] = useState<boolean | null>(null);
    const correctCode = "123456";

    const validateCode = () => {
      setIsValid(value === correctCode);
    };

    const resetCode = () => {
      setValue("");
      setIsValid(null);
    };

    return (
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="otp-validation">Enter verification code</Label>
          <InputOTP
            id="otp-validation"
            maxLength={6}
            value={value}
            onChange={(value) => {
              setValue(value);
              setIsValid(null);
            }}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          {isValid === true && (
            <p className="text-sm text-green-500 flex items-center">
              <Check className="mr-1 h-4 w-4" /> Code is correct
            </p>
          )}
          {isValid === false && (
            <p className="text-sm text-destructive">Invalid code. Try again.</p>
          )}
          <p className="text-sm text-muted-foreground">
            Hint: The correct code is {correctCode}
          </p>
        </div>
        <div className="flex gap-2">
          <Button onClick={validateCode} disabled={value.length !== 6}>
            Verify
          </Button>
          <Button variant="outline" onClick={resetCode}>
            Reset
          </Button>
        </div>
      </div>
    );
  },
};

/**
 * OTP input with paste functionality.
 */
export const WithPaste: Story = {
  render: function PasteOTP() {
    const [value, setValue] = useState("");
    const [copied, setCopied] = useState(false);
    const sampleCode = "987654";

    const copyToClipboard = async () => {
      try {
        await navigator.clipboard.writeText(sampleCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Failed to copy text: ", err);
      }
    };

    return (
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label htmlFor="otp-paste">Enter verification code</Label>
            <Button
              variant="outline"
              size="sm"
              className="h-8 gap-1"
              onClick={copyToClipboard}
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  Copy sample
                </>
              )}
            </Button>
          </div>
          <InputOTP
            id="otp-paste"
            maxLength={6}
            value={value}
            onChange={(value) => setValue(value)}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <p className="text-sm text-muted-foreground">
            Click "Copy sample" and then paste (Ctrl+V/Cmd+V) into the input.
          </p>
        </div>
      </div>
    );
  },
};

/**
 * OTP input with custom styling.
 */
export const CustomStyling: Story = {
  render: function CustomStylingOTP() {
    const [value, setValue] = useState("");

    return (
      <div className="space-y-2">
        <Label htmlFor="otp-custom">Enter verification code</Label>
        <InputOTP
          id="otp-custom"
          maxLength={6}
          value={value}
          onChange={(value) => setValue(value)}
          containerClassName="gap-4"
          className="[&_input]:rounded-full [&_input]:border-primary [&_input]:text-center [&_input:focus]:border-primary [&_input:focus]:ring-primary"
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <p className="text-sm text-muted-foreground">
          Custom styled OTP input with rounded slots and primary color.
        </p>
      </div>
    );
  },
};
