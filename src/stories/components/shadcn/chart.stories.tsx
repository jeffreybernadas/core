import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  ChartContainer,
  ChartTooltip,
  ChartLegend,
} from "../../../components/shadcn/chart";
import { ThemeProvider } from "../../../themes/shadcn";
import {
  Line,
  Bar,
  Area,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  ComposedChart,
  LineChart,
  BarChart,
  AreaChart,
  ScatterChart,
} from "recharts";

type ChartContainerProps = React.ComponentProps<typeof ChartContainer>;

/**
 * Beautiful charts. Built using Recharts.
 *
 * Introducing Charts. A collection of chart components that you can copy and paste into your apps.
 *
 * Charts are designed to look great out of the box. They work well with the other components and are fully customizable to fit your project.
 *
 * Browse the [Charts library](https://ui.shadcn.com/charts).
 * See the [Shadcn docs](https://ui.shadcn.com/docs/components/chart) for more information.
 */
const meta = {
  title: "Components/Shadcn/Chart",
  component: ChartContainer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "stable", "version:2.3.0"],
  argTypes: {
    className: {
      control: "text",
      description: "Additional CSS classes to apply",
    },
    config: {
      control: "object",
      description:
        "The configuration for the chart. _See Recharts docs for more information._",
      table: {
        type: { summary: "ChartConfig" },
      },
    },
    children: {
      control: "object",
      description: "The content to display inside the chart",
      table: {
        type: { summary: "React.ReactNode" },
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div className="w-full max-w-4xl">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof ChartContainer>;

export default meta;
type Story = StoryObj<ChartContainerProps>;

/**
 * Basic line chart with a single dataset.
 */
export const LineChartExample: Story = {
  args: {
    className: "h-80",
    config: {
      sales: {
        label: "Sales",
        color: "rgb(75, 192, 192)",
      },
    },
    children: (
      <LineChart
        data={[
          { month: "Jan", sales: 65 },
          { month: "Feb", sales: 59 },
          { month: "Mar", sales: 80 },
          { month: "Apr", sales: 81 },
          { month: "May", sales: 56 },
          { month: "Jun", sales: 55 },
          { month: "Jul", sales: 40 },
          { month: "Aug", sales: 59 },
          { month: "Sep", sales: 76 },
          { month: "Oct", sales: 85 },
          { month: "Nov", sales: 71 },
          { month: "Dec", sales: 90 },
        ]}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <ChartTooltip />
        <Line type="monotone" dataKey="sales" stroke="var(--color-sales)" />
      </LineChart>
    ),
  },
};

/**
 * Multi-line chart with multiple datasets.
 */
export const MultiLineChartExample: Story = {
  args: {
    className: "h-80",
    config: {
      sales: {
        label: "Sales",
        color: "rgb(75, 192, 192)",
      },
      revenue: {
        label: "Revenue",
        color: "rgb(153, 102, 255)",
      },
      profit: {
        label: "Profit",
        color: "rgb(255, 99, 132)",
      },
    },
    children: (
      <LineChart
        data={[
          { month: "Jan", sales: 65, revenue: 28, profit: 17 },
          { month: "Feb", sales: 59, revenue: 48, profit: 40 },
          { month: "Mar", sales: 80, revenue: 40, profit: 30 },
          { month: "Apr", sales: 81, revenue: 19, profit: 10 },
          { month: "May", sales: 56, revenue: 86, profit: 66 },
          { month: "Jun", sales: 55, revenue: 27, profit: 20 },
        ]}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <ChartTooltip />
        <ChartLegend />
        <Line type="monotone" dataKey="sales" stroke="var(--color-sales)" />
        <Line type="monotone" dataKey="revenue" stroke="var(--color-revenue)" />
        <Line type="monotone" dataKey="profit" stroke="var(--color-profit)" />
      </LineChart>
    ),
  },
};

/**
 * Area chart with filled areas.
 */
export const AreaChartExample: Story = {
  args: {
    className: "h-80",
    config: {
      sales: {
        label: "Sales",
        color: "rgb(75, 192, 192)",
      },
    },
    children: (
      <AreaChart
        data={[
          { month: "Jan", sales: 65 },
          { month: "Feb", sales: 59 },
          { month: "Mar", sales: 80 },
          { month: "Apr", sales: 81 },
          { month: "May", sales: 56 },
          { month: "Jun", sales: 55 },
        ]}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <ChartTooltip />
        <Area
          type="monotone"
          dataKey="sales"
          stroke="var(--color-sales)"
          fill="var(--color-sales)"
          fillOpacity={0.2}
        />
      </AreaChart>
    ),
  },
};

/**
 * Bar chart with vertical bars.
 */
export const BarChartExample: Story = {
  args: {
    className: "h-80",
    config: {
      values: {
        label: "Values",
        color: "rgb(75, 192, 192)",
      },
    },
    children: (
      <BarChart
        data={[
          { category: "Category 1", values: 65 },
          { category: "Category 2", values: 59 },
          { category: "Category 3", values: 80 },
          { category: "Category 4", values: 81 },
          { category: "Category 5", values: 56 },
        ]}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category" />
        <YAxis />
        <ChartTooltip />
        <Bar dataKey="values" fill="var(--color-values)" />
      </BarChart>
    ),
  },
};

/**
 * Scatter chart.
 */
export const ScatterChartExample: Story = {
  args: {
    className: "h-80",
    config: {
      scatter: {
        label: "Data Points",
        color: "rgb(255, 99, 132)",
      },
    },
    children: (
      <ScatterChart
        data={[
          { x: -10, y: 0 },
          { x: 0, y: 10 },
          { x: 10, y: 5 },
          { x: 0.5, y: 5.5 },
          { x: -5, y: -5 },
          { x: 7, y: -10 },
        ]}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" dataKey="x" />
        <YAxis type="number" dataKey="y" />
        <ChartTooltip />
        <Scatter dataKey="y" fill="var(--color-scatter)" />
      </ScatterChart>
    ),
  },
};

/**
 * Combination chart with both line and bar.
 */
export const CombinationChartExample: Story = {
  args: {
    className: "h-80",
    config: {
      sales: {
        label: "Sales",
        color: "rgb(75, 192, 192)",
      },
      revenue: {
        label: "Revenue",
        color: "rgb(255, 99, 132)",
      },
    },
    children: (
      <ComposedChart
        data={[
          { month: "Jan", sales: 65, revenue: 28 },
          { month: "Feb", sales: 59, revenue: 48 },
          { month: "Mar", sales: 80, revenue: 40 },
          { month: "Apr", sales: 81, revenue: 19 },
          { month: "May", sales: 56, revenue: 86 },
          { month: "Jun", sales: 55, revenue: 27 },
        ]}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <ChartTooltip />
        <ChartLegend />
        <Bar dataKey="sales" fill="var(--color-sales)" />
        <Line type="monotone" dataKey="revenue" stroke="var(--color-revenue)" />
      </ComposedChart>
    ),
  },
};
