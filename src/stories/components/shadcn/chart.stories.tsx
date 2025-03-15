import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
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
  ResponsiveContainer,
  ComposedChart,
  LineChart,
  BarChart,
  AreaChart,
  ScatterChart,
} from "recharts";

type ChartContainerProps = React.ComponentProps<typeof ChartContainer>;

const meta = {
  title: "Components/Shadcn/Chart",
  component: ChartContainer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "stable", "version:2.3.0"],
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

// Sample data for line chart
const lineData = [
  { date: "Jan", value: 100 },
  { date: "Feb", value: 120 },
  { date: "Mar", value: 170 },
  { date: "Apr", value: 140 },
  { date: "May", value: 200 },
  { date: "Jun", value: 220 },
  { date: "Jul", value: 280 },
  { date: "Aug", value: 250 },
  { date: "Sep", value: 300 },
  { date: "Oct", value: 280 },
  { date: "Nov", value: 320 },
  { date: "Dec", value: 380 },
];

// Sample data for multi-line chart
const multiLineData = [
  { date: "Jan", sales: 100, revenue: 200, profit: 50 },
  { date: "Feb", sales: 120, revenue: 220, profit: 60 },
  { date: "Mar", sales: 170, revenue: 300, profit: 90 },
  { date: "Apr", sales: 140, revenue: 250, profit: 70 },
  { date: "May", sales: 200, revenue: 350, profit: 100 },
  { date: "Jun", sales: 220, revenue: 380, profit: 110 },
  { date: "Jul", sales: 280, revenue: 450, profit: 140 },
  { date: "Aug", sales: 250, revenue: 400, profit: 120 },
  { date: "Sep", sales: 300, revenue: 500, profit: 150 },
  { date: "Oct", value: 280, revenue: 480, profit: 130 },
  { date: "Nov", sales: 320, revenue: 550, profit: 170 },
  { date: "Dec", sales: 380, revenue: 600, profit: 200 },
];

// Sample data for bar chart
const barData = [
  { category: "Category A", value: 40 },
  { category: "Category B", value: 60 },
  { category: "Category C", value: 30 },
  { category: "Category D", value: 80 },
  { category: "Category E", value: 50 },
];

// Sample data for scatter chart
const scatterData = Array.from({ length: 50 }, (_, i) => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 10 + 5,
}));

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
