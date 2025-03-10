import React from "react";
import { MantineProvider, type MantineProviderProps } from "@mantine/core";

/**
 * Mantine Theme Provider Component
 *
 * This component wraps the application with Mantine's theme provider for consistent theming.
 * It provides theme configuration for all Mantine components.
 *
 * @param {MantineProviderProps} props - Mantine provider props including theme configuration
 * @returns {JSX.Element} Theme provider component
 *
 * @example
 * ```tsx
 * <ThemeProvider
 *   theme={{
 *     colorScheme: 'dark',
 *     breakpoints: {
 *       xs: '36em',
 *       sm: '48em',
 *       md: '62em',
 *       lg: '75em',
 *       xl: '88em'
 *     }
 *   }}
 * >
 *   <App />
 * </ThemeProvider>
 * ```
 */
const ThemeProvider = ({ children, ...props }: MantineProviderProps) => {
  return (
    <MantineProvider
      theme={{
        // Default breakpoints that match the postcss config
        breakpoints: {
          xs: "36em",
          sm: "48em",
          md: "62em",
          lg: "75em",
          xl: "88em",
        },
        // Merge with any user-provided theme props
        ...props.theme,
      }}
      {...props}
    >
      {children}
    </MantineProvider>
  );
};

export default ThemeProvider;
