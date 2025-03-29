import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Calendar } from "../../../components/shadcn/calendar";
import { ThemeProvider } from "../../../themes/shadcn";
import { Button } from "../../../components/shadcn/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../components/shadcn/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "../../../lib/utils";
import type { DateRange as DayPickerDateRange } from "react-day-picker";

type CalendarProps = React.ComponentProps<typeof Calendar>;

/**
 * A date field component that allows users to enter and edit date.
 *
 * See the [Shadcn docs](https://ui.shadcn.com/docs/components/calendar) for more information.
 */
const meta = {
  title: "Components/Shadcn/Calendar",
  component: Calendar,
  parameters: {
    layout: "centered",
    docs: {
      controls: {
        exclude: [
          "monthsClassName",
          "monthCaptionClassName",
          "weekdaysClassName",
          "weekdayClassName",
          "monthClassName",
          "captionClassName",
          "captionLabelClassName",
          "buttonNextClassName",
          "buttonPreviousClassName",
          "navClassName",
          "monthGridClassName",
          "weekClassName",
          "dayClassName",
          "dayButtonClassName",
          "rangeStartClassName",
          "rangeEndClassName",
          "selectedClassName",
          "todayClassName",
          "outsideClassName",
          "disabledClassName",
          "rangeMiddleClassName",
          "hiddenClassName",
          "showYearSwitcher",
          "showOutsideDays",
          "yearRange",
        ],
      },
    },
  },
  tags: ["autodocs", "stable", "version:2.3.0"],
  argTypes: {
    className: {
      control: "text",
      description: "Additional CSS classes to apply",
      table: {
        type: { summary: "string" },
      },
    },
    mode: {
      control: false,
      options: ["single", "multiple", "range"],
      description: "The mode of the calendar.",
      table: {
        type: { summary: "'single' | 'multiple' | 'range'" },
        defaultValue: { summary: "single" },
      },
    },
    selected: {
      control: "object",
      description: "The selected date or dates.",
      table: {
        type: { summary: "Date | Date[]" },
      },
    },
    onSelect: {
      control: false,
      description: "The function to call when a date is selected.",
      table: {
        type: { summary: "function" },
      },
    },
    numberOfMonths: {
      control: "number",
      description: "The number of months to display.",
      table: {
        type: { summary: "number" },
      },
    },
    disabled: {
      control: "object",
      description: "The dates to disable.",
      table: {
        type: { summary: "Date[]" },
      },
    },
    defaultMonth: {
      control: "object",
      description: "The default month to display.",
      table: {
        type: { summary: "Date" },
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof Calendar>;

/**
 * Default calendar with a single date selection.
 */
export const Default: Story = {
  args: {
    mode: "single",
    selected: new Date(),
    className: "rounded-md border",
  },
};

/**
 * Calendar with date range selection.
 */
export const DateRangeSelection: Story = {
  render: () => {
    const [date, setDate] = React.useState<DayPickerDateRange | undefined>({
      from: new Date(),
      to: new Date(new Date().setDate(new Date().getDate() + 7)),
    });

    return (
      <Calendar
        mode="range"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
        numberOfMonths={2}
      />
    );
  },
};

/**
 * Calendar with multiple date selection.
 */
export const MultipleSelection: Story = {
  render: () => {
    const [dates, setDates] = React.useState<Date[] | undefined>([
      new Date(),
      new Date(new Date().setDate(new Date().getDate() + 3)),
      new Date(new Date().setDate(new Date().getDate() + 7)),
    ]);

    return (
      <Calendar
        mode="multiple"
        selected={dates}
        onSelect={setDates}
        className="rounded-md border"
      />
    );
  },
};

/**
 * Calendar with disabled dates.
 */
export const DisabledDates: StoryObj<CalendarProps> = {
  args: {
    mode: "single",
    selected: new Date(),
    className: "rounded-md border",
    disabled: [
      { before: new Date(2023, 0, 10) },
      { after: new Date(2023, 0, 20) },
      { dayOfWeek: [0, 6] }, // Disable weekends
      new Date(2023, 0, 15), // Disable specific date
    ],
    defaultMonth: new Date(2023, 0),
  },
};

/**
 * Calendar in a date picker with a popover.
 */
export const DatePicker: StoryObj<CalendarProps> = {
  render: () => {
    const [date, setDate] = React.useState<Date>();

    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-[240px] justify-start text-left font-normal",
              !date && "text-muted-foreground",
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar mode="single" selected={date} onSelect={setDate} />
        </PopoverContent>
      </Popover>
    );
  },
};
