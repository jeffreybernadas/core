/**
 * Truncates a string to a specified length and adds ellipsis.
 * @param str - The string to truncate
 * @param length - The maximum length before truncation
 * @returns The truncated string with ellipsis if needed
 */
export const truncate = (str: string, length: number): string => {
  return str.length > length ? str.slice(0, length) + "..." : str;
};
