/**
 * Data for the changelog page
 */

export interface ChangelogEntry {
  version: string;
  date: string;
  changes: string[];
  type: "Major" | "Minor" | "Patch";
}

export interface VersionGroup {
  label: string; // e.g. "v0.0.*"
  value: string; // e.g. "0.0"
  hidden?: boolean;
  entries: ChangelogEntry[];
}

/**
 * Version type descriptions
 */
export const versionTypes = [
  {
    type: "Major",
    description: "Breaking changes that require major version bump",
  },
  {
    type: "Minor",
    description: "New features and enhancements with backward compatibility",
  },
  { type: "Patch", description: "Bug fixes and minor improvements" },
];

/**
 * Changelog data grouped by major.minor versions
 */
export const changelogGroups: VersionGroup[] = [
  {
    label: "v0.1.*",
    value: "0.1",
    hidden: true,
    entries: [
      {
        version: "0.1.0",
        date: "2025-04-01",
        changes: [
          "First minor release",
          "Complete rewrite of core components",
          "New animation system",
          "Performance improvements",
          "Better TypeScript support",
        ],
        type: "Minor",
      },
    ],
  },
  {
    label: "v0.0.*",
    value: "0.0",
    entries: [
      {
        version: "0.0.7",
        date: "2025-03-21",
        changes: [
          "Added several hooks and their own comprehensive stories:",

          "State Management Hooks:",
          "- useAsync, useAsyncFn, useAsyncRetry: Async state management suite",
          "- useBoolean: Boolean state management",
          "- useCounter: Numeric counter management",
          "- useDefault: Default value fallback",
          "- useGetSet, useGetSetState: Getter/setter state patterns",
          "- useLatest: Latest value reference",
          "- useMap: Map data structure state",
          "- useMediatedState: Mediated state updates",
          "- useMethods: Methods state pattern",
          "- useNumber: Numeric input management",
          "- useQueue: Queue data structure",
          "- useRafState: RequestAnimationFrame state updates",
          "- useSet: Set data structure state",
          "- useSetState: setState with merge behavior",
          "- useToggle: Boolean toggle state",

          "Lifecycle Hooks:",
          "- useEffectOnce: One-time effect execution",
          "- useFirstMountState: First mount detection",
          "- useIsomorphicLayoutEffect: Safe layoutEffect usage",
          "- useLifecycles: Component lifecycle events",
          "- useMount, useMountedState: Mount lifecycle management",
          "- useUnmount: Cleanup on unmount",
          "- useUpdate: Force re-render utility",
          "- useUpdateEffect: Skip first effect run",

          "Browser API Hooks:",
          "- useAudio: Audio element control",
          "- useBattery: Battery status monitoring",
          "- useBeforeUnload: Page unload handling",
          "- useCookie: Cookie management",
          "- useCopyToClipboard: Clipboard operations",
          "- useFavicon: Favicon manipulation",
          "- useFullscreen: Fullscreen mode control",
          "- useGeolocation: Location tracking",
          "- useHash: URL hash management",
          "- useIdle: User idle detection",
          "- useIntersection: Intersection observer",
          "- useLocalStorage, useSessionStorage: Storage management",
          "- useLocation: Browser location utilities",
          "- useNetworkState: Network status monitoring",
          "- usePageLeave: Page leave detection",
          "- useSpeech: Text-to-speech functionality",
          "- useTitle: Document title management",
          "- useVibrate: Device vibration control",
          "- useVideo: Video element control",
          "- useWindowEvent: Window event handling",
          "- useWindowSize: Window dimensions tracking",

          "Event & Interaction Hooks:",
          "- useClickAway: Outside click detection",
          "- useEvent: Event listener management",
          "- useHover, useHoverDirty: Hover state tracking",
          "- useKey, useKeyPress, useKeyPressEvent: Keyboard interaction",
          "- useMouse, useMouseHovered, useMouseWheel: Mouse interaction",
          "- usePinchZoom: Touch pinch zoom gestures",
          "- useStartTyping: Typing detection",

          "Utility Hooks:",
          "- useCustomCompareEffect, useDeepCompareEffect: Custom effect comparisons",
          "- useDebounce, useThrottle: Rate limiting",
          "- useError: Error boundary hook",
          "- useInterval, useTimeoutFn: Timing utilities",
          "- useLogger: Development logging",
          "- useMeasure: Element measurements",
          "- useMultiStateValidator, useStateValidator: State validation",
          "- useObservable: RxJS integration",
          "- useOrientation: Device orientation",
          "- usePrevious, usePreviousDistinct: Previous value tracking",
          "- useRendersCount: Component render counting",
          "- useSearchParam: URL search params",
          "- useToast: Toast notifications",

          "Documentation & Navigation:",
          "Added About Me section in Storybook documentation",
          "Added navigation link to Core landing page (core.thecodebit.digital)",
          "Improved documentation structure and navigation",
          "Added comprehensive examples and use cases for each hook",
          "Added dark mode support for all story examples",
          "Added proper TypeScript documentation for all hooks",
        ],
        type: "Patch",
      },
      {
        version: "0.0.6",
        date: "2025-03-17",
        changes: ["Hotfix for build issues", "Updated README.md"],
        type: "Patch",
      },
      {
        version: "0.0.5",
        date: "2025-03-17",
        changes: [
          "Bumped project dependencies",
          "Support React 19",
          "Support Tailwind CSS 4",
          "Added all shadcn/ui components available",
          "Added ThemeProvider for shadcn/ui components",
          "Added dark mode support for shadcn/ui components",
          "Added stories for each shadcn/ui components",
          "Improve Storybook documentation",
          "Added Introduction page in Storybook",
          "Added FAQ page in Storybook",
          "Added Changelog page in Storybook",
          "Added Light/Dark mode in Storybook",
          "Added version release tags for each component (stable, v1, etc.)",
          "Better importing of components (Barrel, Index, etc.)",
          "Deployed to own server",
          "Created sample custom components and add stories for them",
          "Added version tagging to components in Storybook",
          "Added sample hooks and utilities stories in Storybook",
        ],
        type: "Patch",
      },
      {
        version: "0.0.4",
        date: "2024-11-16",
        changes: [
          "Exposed remoteEntry for Module Federation consumption",
          "Fixed stylesheets and tailwindcss issues in Module Federation consumption",
          "Created a landing page and storybook for documentation",
          "Added basic component implementation",
          "Responsive design",
        ],
        type: "Patch",
      },
      {
        version: "0.0.3",
        date: "2024-10-31",
        changes: [
          "Fixed stylesheets and tailwindcss issues in NPM package",
          "Added shadcn/ui components support",
        ],
        type: "Patch",
      },
      {
        version: "0.0.2",
        date: "2024-10-30",
        changes: [
          "Initial stable release",
          "NPM package and Module Federation setup",
          "Linting, formatting, and testing setup",
          "TypeScript support",
        ],
        type: "Patch",
      },
    ],
  },
];
