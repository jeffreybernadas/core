<div align="center">
  <img alt="Logo" src="https://raw.githubusercontent.com/Bernz322/my-portfolio/main/src/assets/logo/logo.png" width="100" />
</div>
<h1 align="center">Core</h1>
<p align="center">
 Contains all of my personal customized components and utilities for rapid frontend development.
</p>

<div align="center">
    <a target="_blank" rel='noreferrer'>Core (Playground) - TBD</a><br>
    <a target="_blank" rel='noreferrer'>Remote Entry - TBD</a><br>
    <a href="https://www.npmjs.com/package/@bernz322/core" target="_blank" rel='noreferrer'>NPM Package</a><br>
    <a href="https://bernz322.github.io/core/" target="_blank" rel='noreferrer'>Storybook</a>
</div>

###### Before you proceed, please read the following:

\*This is a **work in progress**. This is a personal project and is **not intended for production use.\***

<hr />

## 💡 How to use and import components as Module Federation

1. Create another microfrontend app using _npx create-mf-app_. Follow cli instructions.
2. Navigate to webpack.config.js and in remotes, add the following:

```
// For local development
"@core": "core@http://localhost:8080/remoteEntry.js"
```

```
// For deployed/ production
"@core": "core@tbd.jeffreybernadas.com/remoteEntry.js"
```

3. After adding the remote, you can now use all the components and utilities from the core in your app. You can use the following import statements:

```
import "@core/styles"; // Place this import in your main/ entry point
import { CoreButton } from "@core/components";
import { CoreAsset } from "@core/assets";
import { useCoreHook } from "@core/hooks";
import { CoreThemeProvider } from "@core/theme";
import { CoreUtils } from "@core/utils";
```

4. Just make sure to import correctly the components, assets, hooks, theme, and utils you want to use (naming is crucial) and you're good to go!
5. If you're using a component, please refer to the storybook for their required props and import the component's types or interface to safely type your project.
6. If you're still unsure what to do, refer to this example repo: https://github.com/Bernz322/mfe-host-example

<hr />

## 💡 How to install and use as NPM package

1. Install package.

```
npm install @bernz322/core
```

2. Inside your index.css file, copy and paste the import code below at the top of the file.

```
@import '@bernz322/core/dist/styles.css';
```

3. Enjoy importing and using the components available on the pacakge.

```
import { Button, Header } from "@bernz322/core";

function App() {
  return (
    <Header />
    <Button
      primary
      onClick={() => alert("Alert!")}
      label="Alert me!"
    />
  )
}
```

Refer to all stuffs the package offers at its [Storybook](https://bernz322.github.io/core/).

<hr />

## ✨ Key Features

- 🔥 Type checking [TypeScript](https://www.typescriptlang.org/)
- 🎉 [Storybook](https://storybook.js.org/) V8 Integration
- 👷 Testing with [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/)
- 📏 Linter with [ESLint](https://eslint.org/)
- 🚫 Lint-staged for running linters on Git staged files
- 💖 Code Formatter with [Prettier](https://prettier.io/)
- 🦊 Git Hooks with [Husky](https://typicode.github.io/husky/)
- :scroll: [Rollup](https://rollupjs.org/) for Bundling
- 🎁 Automatic changelog generation with Semantic Release
- 🤖 CI/CD for NPM Publishing and Storybook Deployment

#### Requirements

- Node.js 20+ and npm

#### Getting started

Run the following command on your local environment:

```
git clone https://github.com/Bernz322/core my-project-name
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
