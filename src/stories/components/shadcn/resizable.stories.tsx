import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../../../components/shadcn/resizable";
import { ThemeProvider } from "../../../themes/shadcn";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/shadcn/card";
import { ScrollArea } from "../../../components/shadcn/scroll-area";

/**
 * Accessible resizable panel groups and layouts with keyboard support.
 *
 * See the [Shadcn docs](https://ui.shadcn.com/docs/components/resizable) for more information.
 */
const meta = {
  title: "Components/Shadcn/Resizable",
  component: ResizablePanelGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "stable", "version:2.3.0"],
  argTypes: {
    direction: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    children: {
      control: false,
      description: "The content of the resizable panel group",
      table: { type: { summary: "React.ReactNode" } },
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
      table: { type: { summary: "string" } },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div className="w-full max-w-4xl">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof ResizablePanelGroup>;

export default meta;
type Story = StoryObj<typeof ResizablePanelGroup>;

/**
 * Default horizontal resizable panel group with two panels.
 */
export const Default: Story = {
  render: () => (
    <ResizablePanelGroup
      direction="horizontal"
      className="h-full max-h-[800px] rounded-lg border"
    >
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">One</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Two</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};

/**
 * Vertical resizable panel group with three panels.
 */
export const VerticalLayout: Story = {
  render: () => (
    <ResizablePanelGroup
      direction="vertical"
      className="h-full max-h-[800px] rounded-lg border"
    >
      <ResizablePanel defaultSize={25}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Top Panel</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Middle Panel</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={25}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Bottom Panel</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};

/**
 * Nested resizable panels with both horizontal and vertical layouts.
 */
export const NestedPanels: Story = {
  render: () => (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[400px] max-w-full rounded-lg border"
    >
      <ResizablePanel defaultSize={25}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Sidebar</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={75}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={70}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Main Content</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={30}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Console</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};

/**
 * Resizable panels with minimum and maximum sizes.
 */
export const MinMaxSizes: Story = {
  render: () => (
    <ResizablePanelGroup
      direction="horizontal"
      className="h-full max-h-[800px] rounded-lg border"
    >
      <ResizablePanel defaultSize={25} minSize={15} maxSize={40}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Min: 15%, Max: 40%</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Default: 50%</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={25} minSize={20}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Min: 20%</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};

/**
 * Resizable panels with collapsible functionality.
 */
export const CollapsiblePanels: Story = {
  render: function CollapsiblePanelsExample() {
    const [isCollapsed, setIsCollapsed] = React.useState(false);

    return (
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-[400px] max-w-full rounded-lg border"
      >
        <ResizablePanel
          defaultSize={25}
          collapsible={true}
          collapsedSize={5}
          minSize={5}
          maxSize={40}
          onCollapse={() => setIsCollapsed(true)}
          onExpand={() => setIsCollapsed(false)}
          className="transition-all duration-300"
        >
          <div className="flex h-full flex-col">
            <div className="flex h-14 items-center border-b px-6">
              <span className="font-semibold">
                {isCollapsed ? "S" : "Sidebar"}
              </span>
            </div>
            <ScrollArea className="flex-1">
              <div className={`${isCollapsed ? "hidden" : "block"} p-6`}>
                <p>This panel can be collapsed using the handle.</p>
                <p className="mt-4">
                  Try dragging the handle all the way to the left.
                </p>
              </div>
            </ScrollArea>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={75}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Main Content</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    );
  },
};

/**
 * Application layout example with resizable panels.
 */
export const ApplicationLayout: Story = {
  render: () => (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[600px] max-w-full rounded-lg border"
    >
      <ResizablePanel defaultSize={20} minSize={15} maxSize={30}>
        <div className="flex h-full flex-col">
          <div className="flex h-14 items-center border-b px-6">
            <span className="font-semibold">Explorer</span>
          </div>
          <ScrollArea className="flex-1">
            <div className="p-4">
              <div className="font-medium">Files</div>
              <div className="mt-2 space-y-1">
                <div className="text-sm text-muted-foreground">index.html</div>
                <div className="text-sm text-muted-foreground">styles.css</div>
                <div className="text-sm text-muted-foreground">app.js</div>
                <div className="text-sm text-muted-foreground">utils.js</div>
                <div className="text-sm text-muted-foreground">README.md</div>
              </div>
            </div>
          </ScrollArea>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={60}>
        <div className="flex h-full flex-col">
          <div className="flex h-14 items-center border-b px-6">
            <span className="font-semibold">Editor</span>
          </div>
          <div className="flex-1 p-4">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>app.js</CardTitle>
                <CardDescription>Main application file</CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="text-sm text-muted-foreground">
                  {`function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My App</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;`}
                </pre>
              </CardContent>
              <CardFooter className="text-sm text-muted-foreground">
                Last modified: 2 hours ago
              </CardFooter>
            </Card>
          </div>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={20} minSize={15} maxSize={30}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full flex-col">
              <div className="flex h-14 items-center border-b px-6">
                <span className="font-semibold">Preview</span>
              </div>
              <div className="flex-1 p-4">
                <div className="rounded-lg border p-4 h-full flex flex-col items-center justify-center">
                  <h1 className="text-xl font-bold">Welcome to My App</h1>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Edit <code className="text-sm">src/App.js</code> and save to
                    reload.
                  </p>
                </div>
              </div>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full flex-col">
              <div className="flex h-14 items-center border-b px-6">
                <span className="font-semibold">Console</span>
              </div>
              <ScrollArea className="flex-1">
                <div className="p-4 font-mono text-sm text-muted-foreground">
                  <div>Starting development server...</div>
                  <div>Compiled successfully!</div>
                  <div className="text-green-500">
                    You can now view my-app in the browser.
                  </div>
                  <div>Local: http://localhost:3000</div>
                </div>
              </ScrollArea>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};
