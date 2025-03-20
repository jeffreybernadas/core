/**
 * Truncates a string to a specified length and adds a custom ending.
 * @param str - The string to truncate
 * @param length - The maximum length before truncation
 * @param ending - The string to append after truncation (default: "...")
 * @returns The truncated string with ending if needed
 */
export const truncate = (
  str: string,
  length: number,
  ending: string = "...",
): string => {
  return str.length > length ? str.slice(0, length) + ending : str;
};
