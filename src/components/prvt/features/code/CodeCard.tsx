import React, { MouseEventHandler, useState } from "react";
import { SiGithub } from "react-icons/si";

import { Markup } from "./Markup";
import { Card } from "../../utils/Card";
import { PulseLine } from "../../utils/PulseLine";
import { BubbleButton } from "../../buttons/BubbleButton";

export const CodeCard = () => {
  const [selected, setSelected] = useState<"mfe" | "npm">("mfe");

  return (
    <Card className="mx-auto max-w-3xl pt-3">
      <div className="-mx-9 mb-6 flex items-center justify-between border-b border-zinc-700 px-6 pb-3">
        <div className="flex items-center gap-3">
          <ToggleChip
            onClick={() => setSelected("mfe")}
            selected={selected === "mfe"}
          >
            Module Federation
          </ToggleChip>
          <ToggleChip
            onClick={() => setSelected("npm")}
            selected={selected === "npm"}
          >
            NPM Package
          </ToggleChip>
        </div>
        <BubbleButton
          className="text-xs"
          onClick={() =>
            window.open("https://github.com/Bernz322/mfe-host-example")
          }
        >
          <SiGithub />
          <span className="hidden sm:inline">Example project</span>
        </BubbleButton>
      </div>
      <div className="no-scrollbar -mx-6 px-6">
        <Markup code={selected === "mfe" ? mfeCode : npmCode} lang="ts" />
      </div>
      <PulseLine />
    </Card>
  );
};

const ToggleChip = ({
  children,
  selected,
  onClick,
}: {
  children: string;
  selected: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      onClick={onClick}
      className={`rounded px-1.5 py-0.5 text-sm font-medium transition-colors ${selected ? "bg-blue-600 text-zinc-50" : "bg-zinc-900 text-zinc-50 hover:bg-zinc-700"}`}
    >
      {children}
    </button>
  );
};

const mfeCode = `/* --- Inside your webpack.config.js --- */

module.exports = (_, argv) => ({
  plugins: [
    new ModuleFederationPlugin({
      remotes: {
        "@core":
          "core@https://core.thecodebit.digital/remoteEntry.js",
      },
    }),
  ]
});

/* --- Inside your App.tsx --- */

import { Button, Header, CoreButton } from "@core/components";
import "@core/styles";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header />
    <CoreButton primary onClick={() => alert("Alert!")} label="Button" />
    <Button variant="default">shadcn/ui button</Button>
  </div>
);

export default App;`;

const npmCode = `/* --- Inside your index.css --- */

@import "tailwindcss";
@import '@bernz322/core/dist/styles.css';

/* --- Inside your App.tsx --- */

import { Button, Header, CoreButton } from "@bernz322/core";
import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header />
    <CoreButton primary onClick={() => alert("Alert!")} label="Button" />
    <Button variant="default">shadcn/ui button</Button>
  </div>
);

export default App;`;
