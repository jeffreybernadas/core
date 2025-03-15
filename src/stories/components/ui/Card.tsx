import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

/**
 * A reusable card component with dark mode support
 *
 * @param children - The content to display inside the card
 * @param className - Additional CSS classes to apply
 * @returns A styled card component
 * @example
 * <Card>
 *   <h3>Card Title</h3>
 *   <p>Card content</p>
 * </Card>
 */
export const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`
        border border-solid border-[#E6E6E6] 
        dark:border-[#1E4976] 
        rounded-lg 
        p-6 
        bg-[#F8F8F8] 
        dark:bg-[#011627] 
        dark:text-white
        transition-colors
        ${className}
      `}
    >
      {children}
    </div>
  );
};

/**
 * Card title component
 */
export const CardTitle: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <h3 className="text-lg font-semibold mb-4 text-[#2E3438] dark:text-white">
      {children}
    </h3>
  );
};

/**
 * Card content component
 */
export const CardContent: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return <div className="text-[#333] dark:text-[#E6F4FF]">{children}</div>;
};
