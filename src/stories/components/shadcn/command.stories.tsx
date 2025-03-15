import React, { KeyboardEvent } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "../../../components/shadcn/command";
import { ThemeProvider } from "../../../themes/shadcn";
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
  LayoutGrid,
  Search,
  FileText,
  Code,
  ChevronRight,
  ChevronsLeft,
} from "lucide-react";

type CommandProps = React.ComponentProps<typeof Command>;

const meta = {
  title: "Components/Shadcn/Command",
  component: Command,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "stable", "version:2.3.0"],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div className="w-full max-w-md">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Command>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default command menu with search and suggestions.
 */
export const Default: Story = {
  render: () => (
    <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <Calendar className="mr-2 h-4 w-4" />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <Smile className="mr-2 h-4 w-4" />
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem>
            <Calculator className="mr-2 h-4 w-4" />
            <span>Calculator</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};

/**
 * Command menu with a dialog.
 */
export const CommandDialogExample: StoryObj<CommandProps> = {
  render: () => {
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
      const down = (e: KeyboardEvent) => {
        if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
          e.preventDefault();
          setOpen((open) => !open);
        }
      };

      document.addEventListener("keydown", down as unknown as EventListener);
      return () =>
        document.removeEventListener(
          "keydown",
          down as unknown as EventListener,
        );
    }, []);

    return (
      <div>
        <p className="text-sm text-muted-foreground mb-4">
          Press{" "}
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>K
          </kbd>{" "}
          to open the command menu
        </p>
        <button
          className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          onClick={() => setOpen(true)}
        >
          <Search className="mr-2 h-4 w-4" />
          <span>Search...</span>
        </button>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <Calendar className="mr-2 h-4 w-4" />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                <Smile className="mr-2 h-4 w-4" />
                <span>Search Emoji</span>
              </CommandItem>
              <CommandItem>
                <Calculator className="mr-2 h-4 w-4" />
                <span>Calculator</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Billing</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </div>
    );
  },
};

/**
 * Command menu with nested navigation.
 */
export const NestedNavigation: StoryObj<CommandProps> = {
  render: () => {
    const [pages, setPages] = React.useState<string[]>(["home"]);
    const activePage = pages[pages.length - 1];
    const isHome = activePage === "home";

    const popPage = React.useCallback(() => {
      setPages((pages) => {
        const x = [...pages];
        x.pop();
        return x;
      });
    }, []);

    const onKeyDown = React.useCallback(
      (e: React.KeyboardEvent) => {
        if (e.key === "Escape") {
          e.preventDefault();
          if (pages.length > 1) {
            popPage();
          }
        }
      },
      [pages.length, popPage],
    );

    return (
      <Command className="rounded-lg border shadow-md" onKeyDown={onKeyDown}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {isHome ? (
            <>
              <CommandGroup heading="Suggestions">
                <CommandItem
                  onSelect={() => {
                    setPages([...pages, "projects"]);
                  }}
                >
                  <LayoutGrid className="mr-2 h-4 w-4" />
                  <span>Projects</span>
                  <ChevronRight className="ml-auto h-4 w-4" />
                </CommandItem>
                <CommandItem
                  onSelect={() => {
                    setPages([...pages, "documents"]);
                  }}
                >
                  <FileText className="mr-2 h-4 w-4" />
                  <span>Documents</span>
                  <ChevronRight className="ml-auto h-4 w-4" />
                </CommandItem>
                <CommandItem
                  onSelect={() => {
                    setPages([...pages, "settings"]);
                  }}
                >
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                  <ChevronRight className="ml-auto h-4 w-4" />
                </CommandItem>
              </CommandGroup>
            </>
          ) : activePage === "projects" ? (
            <>
              <CommandGroup heading="Projects">
                <CommandItem onSelect={() => popPage()}>
                  <ChevronsLeft className="mr-2 h-4 w-4" />
                  <span>Back</span>
                </CommandItem>
                <CommandItem>
                  <Code className="mr-2 h-4 w-4" />
                  <span>Frontend Project</span>
                </CommandItem>
                <CommandItem>
                  <Code className="mr-2 h-4 w-4" />
                  <span>Backend Project</span>
                </CommandItem>
                <CommandItem>
                  <Code className="mr-2 h-4 w-4" />
                  <span>Mobile App</span>
                </CommandItem>
              </CommandGroup>
            </>
          ) : activePage === "documents" ? (
            <>
              <CommandGroup heading="Documents">
                <CommandItem onSelect={() => popPage()}>
                  <ChevronsLeft className="mr-2 h-4 w-4" />
                  <span>Back</span>
                </CommandItem>
                <CommandItem>
                  <FileText className="mr-2 h-4 w-4" />
                  <span>Documentation</span>
                </CommandItem>
                <CommandItem>
                  <FileText className="mr-2 h-4 w-4" />
                  <span>API Reference</span>
                </CommandItem>
                <CommandItem>
                  <FileText className="mr-2 h-4 w-4" />
                  <span>User Guide</span>
                </CommandItem>
              </CommandGroup>
            </>
          ) : activePage === "settings" ? (
            <>
              <CommandGroup heading="Settings">
                <CommandItem onSelect={() => popPage()}>
                  <ChevronsLeft className="mr-2 h-4 w-4" />
                  <span>Back</span>
                </CommandItem>
                <CommandItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </CommandItem>
                <CommandItem>
                  <CreditCard className="mr-2 h-4 w-4" />
                  <span>Billing</span>
                </CommandItem>
                <CommandItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>General</span>
                </CommandItem>
              </CommandGroup>
            </>
          ) : null}
        </CommandList>
      </Command>
    );
  },
};

/**
 * Command menu with custom styling.
 */
export const CustomStyling: StoryObj<CommandProps> = {
  render: () => (
    <Command className="rounded-lg border shadow-md bg-slate-950 text-white">
      <CommandInput
        placeholder="Type a command or search..."
        className="border-slate-800"
      />
      <CommandList className="text-slate-300">
        <CommandEmpty className="text-slate-400">
          No results found.
        </CommandEmpty>
        <CommandGroup heading="Suggestions" className="text-slate-400">
          <CommandItem className="hover:bg-slate-800 aria-selected:bg-slate-800">
            <Calendar className="mr-2 h-4 w-4 text-slate-500" />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem className="hover:bg-slate-800 aria-selected:bg-slate-800">
            <Smile className="mr-2 h-4 w-4 text-slate-500" />
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem className="hover:bg-slate-800 aria-selected:bg-slate-800">
            <Calculator className="mr-2 h-4 w-4 text-slate-500" />
            <span>Calculator</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator className="bg-slate-800" />
        <CommandGroup heading="Settings" className="text-slate-400">
          <CommandItem className="hover:bg-slate-800 aria-selected:bg-slate-800">
            <User className="mr-2 h-4 w-4 text-slate-500" />
            <span>Profile</span>
            <CommandShortcut className="text-slate-500">⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem className="hover:bg-slate-800 aria-selected:bg-slate-800">
            <CreditCard className="mr-2 h-4 w-4 text-slate-500" />
            <span>Billing</span>
            <CommandShortcut className="text-slate-500">⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem className="hover:bg-slate-800 aria-selected:bg-slate-800">
            <Settings className="mr-2 h-4 w-4 text-slate-500" />
            <span>Settings</span>
            <CommandShortcut className="text-slate-500">⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};
