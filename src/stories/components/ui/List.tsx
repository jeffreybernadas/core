import React, { ReactNode } from "react";

interface ListProps {
  items: ReactNode[];
  className?: string;
  bulletType?: "dot" | "arrow";
}

/**
 * A reusable list component with dark mode support
 *
 * @param items - Array of list items to display
 * @param className - Additional CSS classes to apply
 * @param bulletType - Type of bullet to use ('dot' or 'arrow')
 * @returns A styled list component
 * @example
 * <List
 *   items={['Item 1', 'Item 2', 'Item 3']}
 *   bulletType="arrow"
 * />
 */
export const List: React.FC<ListProps> = ({
  items,
  className = "",
  bulletType = "dot",
}) => {
  // Determine the bullet character and color based on the type
  const bulletChar = bulletType === "dot" ? "•" : "→";
  const bulletColorClass =
    bulletType === "dot"
      ? "text-[#666] dark:text-[#4D9FFF]"
      : "text-[#666] dark:text-[#888]";

  return (
    <div className={`${className}`}>
      {items.map((item, index) => (
        <div
          key={index}
          className="flex items-start my-2 text-[#333] dark:text-[#E6F4FF]"
        >
          <span
            className={`inline-block mx-2 ${bulletColorClass}`}
            aria-hidden="true"
            style={{ fontSize: "0.8em", margin: "0 1em 0 0" }}
          >
            {bulletChar}
          </span>
          <span style={{ fontSize: "0.85em" }}>{item}</span>
        </div>
      ))}
    </div>
  );
};
