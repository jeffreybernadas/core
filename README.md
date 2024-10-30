# React Library Boilerplate

This is my own and go to boilerplate for creating my own React Component Libraries built with modern practices and tools I am comfortable to use with.

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
git clone https://github.com/Bernz322/react-library-boilerplate.git my-project-name
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

NPM Link:

- https://www.npmjs.com/package/@bernz322/react-library-boilerplate

Storybook Link:

- https://bernz322.github.io/react-library-boilerplate/
