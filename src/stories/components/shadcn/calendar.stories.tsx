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

const meta = {
  title: "Components/Shadcn/Calendar",
  component: Calendar,
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
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof Calendar>;

/**
 * Default calendar with a single date selection.
 */
export const Default: Story = {
  render: () => <Calendar className="rounded-md border" />,
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
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    );
  },
};

/**
 * Calendar with custom styling.
 */
export const CustomStyling: StoryObj<CalendarProps> = {
  args: {
    mode: "single",
    selected: new Date(),
    className: "rounded-md border border-blue-200 p-3 bg-blue-50",
    classNames: {
      day_selected: "bg-blue-500 text-white hover:bg-blue-600",
      day_today: "bg-orange-100 text-orange-600",
      day_outside: "text-gray-300",
      day_disabled: "text-gray-300 opacity-50",
      day_range_middle: "bg-blue-100",
      day_range_end: "bg-blue-500 text-white",
      day_range_start: "bg-blue-500 text-white",
      day_hidden: "invisible",
    },
  },
};
