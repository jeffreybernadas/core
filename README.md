<div align="center">
  <img alt="Logo" src="https://raw.githubusercontent.com/Bernz322/my-portfolio/main/src/assets/logo/logo.png" width="100" />
</div>
<h1 align="center">Core</h1>
<p align="center">
 Contains all of my personal customized components using Tailwind CSS and favorite UI library, custom hooks and utilities for rapid frontend development.
</p>

<div align="center">
    <a href="https://core.thecodebit.digital/" target="_blank" rel='noreferrer'>Core Landing Page</a><br>
    <a href="https://core.thecodebit.digital/remoteEntry.js" target="_blank" rel='noreferrer'>Remote Entry</a><br>
    <a href="https://www.npmjs.com/package/@bernz322/core" target="_blank" rel='noreferrer'>NPM Package</a><br>
    <a href="https://jeffreybernadas.github.io/core/" target="_blank" rel='noreferrer'>Storybook</a>
</div>

###### If you are interested on using this, please read the following:

- This is a personal project of mine and **I do not recommend** using it for your **production** projects.
- Whatever you see in the [Storybook](https://jeffreybernadas.github.io/core/) are all **available** for use. Just follow the instructions properly on how to use them.

<hr />

## Major Requirements

Your app should have the following:

- React **v19**.
- Tailwind CSS **v4**.

<hr />

## ❓ How to use

You can import components, hooks, and utilities right away using the following methods:

#### 🚀 As Microfrontend (Recommended)

1. Create your own microfrontend app.

- You can use Jack Herrington's [Create MF App](https://github.com/jherr/create-mf-app) CLI to start fast.

2. Setup remotes in your Microfrontend project.

- If you used Jack Herrington's CLI, check if you started your App with Webpack (webpack.config.js) or Rspack (rspack.config.js).
- Find the plugin `ModuleFederationPlugin` and add the `remoteEntry` of this project.

```
  plugins: [
    new ModuleFederationPlugin({
      ..... other codes
      ...
      remotes: {
        "@core":
          "core@https://core.thecodebit.digital/remoteEntry.js",
      },
      ...
      ..... other codes
    })
  ],
```

3. Hooray! 🎉 You can now use all the components, hooks, and utilities present here. See example consumption below.

```
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import {
  NeuFollowButton,
  DrawOutlineButton,
  NeuBrutalism,
  AIButton,
} from "@core/components"; // Core Components
import {
  Button,
  Badge,
} from "@core/components/shadcn"; // Shadcn Components
import { ThemeProvider, useTheme } from "@core/themes/shadcn"; // Shadcn Theme Provider
import { cn } from "@core/lib"; // Core Utilities
import { useIsMobile } from "@core/hooks"; // Core Hooks

import "@core/styles";
import "./index.css";

const App = () => {
  const isMobile = useIsMobile();
  return (
    <Suspense fallback="Loading..."> // Suspense is required.
      <h1 className={cn("text-4xl font-bold", isMobile && "text-2xl")}>
        Core Components
      </h1>
      <NeuFollowButton>Button</NeuFollowButton>
      <DrawOutlineButton>Button</DrawOutlineButton>
      <NeuBrutalism>Button</NeuBrutalism>
      <AIButton>Button</AIButton>
      <h1 className="text-4xl font-bold">Shadcn Components</h1>
      <ThemeProvider>
        <Badge>Hello</Badge>
        <Button onClick={() => setTheme("light")}>Light Mode</Button>
        <Button onClick={() => setTheme("dark")}>Dark Mode</Button>
      </ThemeProvider>
    </Suspense>
  );
};
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
```

4. For Core components, they are all client-side components. For shadcn/ui components, please refer to the [shadcn/ui](https://ui.shadcn.com/) documentation.
5. Find all components, hooks, and utils in the [Storybook](https://jeffreybernadas.github.io/core/).
6. If you're still unsure what to do, refer to this example repo: https://github.com/jeffreybernadas/microfrontend-cart

#### 📦 As NPM Package

_**Note: React v19 and Tailwind CSS v4 are required.**_

1. Install package.

```
npm install @bernz322/core
```

2. Inside your index.css file, copy and paste the import code below at the top of the file.

```
@import "tailwindcss";
@import "@bernz322/core/styles/index.css";
```

3. Hooray! 🎉 You are now set! See example consumption below.

```
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import {
  NeuFollowButton,
  DrawOutlineButton,
  NeuBrutalism,
  AIButton,
} from "@bernz322/core/components"; // Core Components
import {
  Button,
  Badge,
} from "@bernz322/core/components/shadcn"; // Shadcn Components
import { ThemeProvider, useTheme } from "@bernz322/core/themes/shadcn"; // Shadcn Theme Provider
import { cn } from "@bernz322/core/lib"; // Core Utilities
import { useIsMobile } from "@bernz322/core/hooks"; // Core Hooks

import "./index.css";

const App = () => {
  const isMobile = useIsMobile();
  return (
    <Suspense fallback="Loading..."> // Suspense is required.
      <h1 className={cn("text-4xl font-bold", isMobile && "text-2xl")}>
        Core Components
      </h1>
      <NeuFollowButton>Button</NeuFollowButton>
      <DrawOutlineButton>Button</DrawOutlineButton>
      <NeuBrutalism>Button</NeuBrutalism>
      <AIButton>Button</AIButton>
      <h1 className="text-4xl font-bold">Shadcn Components</h1>
      <ThemeProvider>
        <Badge>Hello</Badge>
        <Button onClick={() => setTheme("light")}>Light Mode</Button>
        <Button onClick={() => setTheme("dark")}>Dark Mode</Button>
      </ThemeProvider>
    </Suspense>
  );
};
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
```

4. You can also use both as microfrontend and NPM package. Just make sure to import the the stuffs you need correctly. However, I don't recommend using both at the same time.

<hr />

## Requirements

- Node.js 20+ and npm

#### Getting started

Run the following command on your local environment:

```
git clone https://github.com/jeffreybernadas/core my-project-name
cd my-project-name
npm install
```

_Note: I always update all dependencies whenever I have the time._
Then run the storybook in development mode to see components by running:

```
npm run storybook
```

Open http://localhost:6006 with your favorite browser to see the storybook.

#### Adding components

Create a new component file inside _"src/components"_ directory and export it in _"src/index.ts"_.
_Note: This is not limited to components only, you can add React Hooks, Utility Functions, and more to it._

To check your created component, create a story of it and run storybook.

#### Tests

You can execute testing by running:

```
npm run test
```

#### Linting

For linting and checking code quality and problems, execute:

```
npm run lint
```

To fix errors, execute:

```
npm run lint:fix
```

#### Formatting

For formatting codes, execute:

```
npm run format
```

#### Build

For building your library, execute:

```
npm run build
```

This will create a build folder containing index.esm.js, index.cjs.js and typings folder for declarations.

#### Deployment of storybook

Deployment of Storybook is automated via Github Actions. You can check storybook.yml on how it's done.

#### Publishing to NPM

Same with Storybook deployment, publishing to NPM is also automated. Just make sure to add NPM_TOKEN in your repositories "Secrets and variables" > "Actions".
