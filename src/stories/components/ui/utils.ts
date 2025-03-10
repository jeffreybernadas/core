/**
 * Utility functions for UI components
 */

// Track if a theme change is in progress to prevent multiple rapid changes
let themeChangeInProgress = false;

/**
 * Checks if dark mode is active based on localStorage
 *
 * @returns boolean indicating if dark mode is active
 */
export const isDarkMode = (): boolean => {
  try {
    // Check if we're in a browser environment
    if (typeof window === "undefined" || typeof localStorage === "undefined") {
      return false;
    }

    // Get theme from localStorage
    const theme = localStorage.getItem("theme");
    return theme === "dark";
  } catch (e) {
    console.error("Error checking theme:", e);
    return false;
  }
};

/**
 * Applies dark mode class to document if needed with a smooth transition
 */
export const applyThemeClass = (): void => {
  try {
    // Check if we're in a browser environment
    if (typeof window === "undefined" || typeof document === "undefined") {
      return;
    }

    // If a theme change is already in progress, don't start another one
    if (themeChangeInProgress) {
      return;
    }

    themeChangeInProgress = true;

    // Get current theme state
    const isDark = isDarkMode();

    // Add transition class for smooth theme change
    document.documentElement.classList.add("theme-transition");

    // Small delay before applying theme to allow for transition setup
    setTimeout(() => {
      // Apply dark mode class if needed
      if (isDark) {
        document.documentElement.classList.add("dark");
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        document.documentElement.removeAttribute("data-theme");
      }

      // Small delay to remove transition class after theme change
      setTimeout(() => {
        document.documentElement.classList.remove("theme-transition");
        themeChangeInProgress = false;
      }, 300); // Match this with CSS transition duration
    }, 50);
  } catch (e) {
    console.error("Error applying theme class:", e);
    themeChangeInProgress = false;
  }
};

// Apply theme class immediately when this module is imported
if (typeof window !== "undefined") {
  // Run on next tick to ensure DOM is ready
  setTimeout(applyThemeClass, 0);

  // Listen for storage changes
  window.addEventListener("storage", (event) => {
    if (event.key === "theme") {
      applyThemeClass();
    }
  });
}
