/**
 * Formats a number with commas and optional decimal places.
 * @param num - The number to format
 * @param decimals - Number of decimal places (optional)
 * @returns The formatted string
 */
const number = (num: number, decimals?: number): string => {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(num);
};

/**
 * Formats a number as currency with optional currency code and locale.
 * @param num - The number to format
 * @param currency - Currency code (default: "USD")
 * @param locale - Locale string (default: "en-US")
 * @returns The formatted currency string
 */
const currency = (
  num: number,
  currency: string = "USD",
  locale: string = "en-US",
): string => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(num);
};

/**
 * Formats a date with optional pattern.
 * @param date - The date to format
 * @param pattern - Date pattern (optional)
 * @returns The formatted date string
 */
const date = (date: Date, pattern?: string): string => {
  if (pattern) {
    // Simple pattern implementation
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return pattern
      .replace("yyyy", String(year))
      .replace("MM", month)
      .replace("dd", day);
  }
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
};

/**
 * Formats a time with optional pattern.
 * @param date - The date to format
 * @param pattern - Time pattern (optional)
 * @returns The formatted time string
 */
const time = (date: Date, pattern?: string): string => {
  if (pattern) {
    // Simple pattern implementation
    const hours24 = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return pattern.replace("HH", hours24).replace("mm", minutes);
  }
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }).format(date);
};

export const format = {
  number,
  currency,
  date,
  time,
};
