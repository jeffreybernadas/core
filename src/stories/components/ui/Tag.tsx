import React, { ReactNode } from "react";

type TagVariant = "major" | "minor" | "patch" | "default";

interface TagProps {
  children: ReactNode;
  variant?: TagVariant;
  className?: string;
}

/**
 * A reusable tag component with dark mode support
 *
 * @param children - The content to display inside the tag
 * @param variant - The variant of the tag (major, minor, patch, default)
 * @param className - Additional CSS classes to apply
 * @returns A styled tag component
 * @example
 * <Tag variant="major">Major</Tag>
 */
export const Tag: React.FC<TagProps> = ({
  children,
  variant = "default",
  className = "",
}) => {
  // Define variant-specific styles
  const variantStyles = {
    major: "bg-[#FFEBE6] dark:bg-[#3D1F1A] text-[#FF4400] dark:text-[#FF6B4D]",
    minor: "bg-[#E6F4FF] dark:bg-[#1A2B3D] text-[#0066FF] dark:text-[#4D9FFF]",
    patch: "bg-[#E6FFE6] dark:bg-[#1A3D1A] text-[#00AA00] dark:text-[#4DCC4D]",
    default: "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200",
  };

  return (
    <span
      className={`
        inline-block 
        px-2 
        py-0.5 
        rounded 
        ${variantStyles[variant]}
        ${className}
      `}
      style={{ fontSize: "0.875rem" }}
    >
      {children}
    </span>
  );
};
