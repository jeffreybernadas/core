/**
 * Checks if a string is a valid URL.
 * @param url - The string to check
 * @returns True if the string is a valid URL, false otherwise
 */
export const isValidURL = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};
