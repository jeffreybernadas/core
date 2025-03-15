/**
 * Formats numbers to K/M notation.
 * @param num - The number to format
 * @returns The formatted string with K/M suffix
 */
export const formatNumber = (num: number): string => {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
  if (num >= 1000) return (num / 1000).toFixed(1) + "K";
  return num.toString();
};
