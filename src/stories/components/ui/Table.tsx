import React, { ReactNode } from "react";

interface TableColumn<T> {
  key: keyof T | string;
  header: ReactNode;
  render?: (value: unknown, row: T, index: number) => ReactNode;
}

interface TableProps<T extends Record<string, unknown>> {
  columns: TableColumn<T>[];
  data: T[];
  className?: string;
}

/**
 * A reusable table component with dark mode support
 *
 * @param columns - Array of column definitions
 * @param data - Array of data objects to display
 * @param className - Additional CSS classes to apply
 * @returns A styled table component
 * @example
 * <Table
 *   columns={[
 *     { key: 'name', header: 'Name' },
 *     { key: 'age', header: 'Age' },
 *     {
 *       key: 'status',
 *       header: 'Status',
 *       render: (value) => <Badge>{value}</Badge>
 *     }
 *   ]}
 *   data={[
 *     { name: 'John', age: 30, status: 'Active' },
 *     { name: 'Jane', age: 25, status: 'Inactive' }
 *   ]}
 * />
 */
export const Table = <T extends Record<string, unknown>>({
  columns,
  data,
  className = "",
}: TableProps<T>) => {
  const mode = localStorage.getItem("theme") ?? "light";
  return (
    <div className="overflow-hidden rounded-lg">
      <table
        className={`
          w-full 
          border-collapse 
          text-sm
          bg-[#FFFFFF] dark:bg-[#011627]
          border border-solid border-[#E6E6E6] dark:border-[#1E4976]
          transition-colors
          ${className}
        `}
      >
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={String(column.key)}
                className="
                  bg-[#F8F8F8] dark:bg-[#07203C]
                  text-[#2E3438] dark:text-white
                  font-semibold
                  p-3
                  text-left
                  border-b border-solid border-[#E6E6E6] dark:border-[#1E4976]
                "
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="dark:text-white"
              style={{
                backgroundColor: mode === "dark" ? "#011627" : "#f5f5f5",
              }}
            >
              {columns.map((column) => {
                const key = String(column.key);
                const value = row[key as keyof T];

                return (
                  <td
                    key={`${rowIndex}-${key}`}
                    className="
                      p-3
                      border-b border-solid border-[#E6E6E6] dark:border-[#1E4976]
                      first:font-mono first:font-semibold first:text-inherit dark:first:text-[#4D9FFF]
                    "
                  >
                    {column.render
                      ? column.render(value, row, rowIndex)
                      : (value as ReactNode)}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
