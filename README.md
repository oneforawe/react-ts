# React-TS

This is a template repository for a [React](https://react.dev) app project
in [TypeScript](https://www.typescriptlang.org). The commands below were not
necessarily executed in the order shown.

## Usage of the Repo

Using a shell such as GNU Bash with [git](https://git-scm.com) and
[node/npm/npx](https://nodejs.org) (and probably
[nvm](https://github.com/nvm-sh/nvm)) installed, execute the following commands
to get a copy of the repository, set it up, and run it (in development mode).

* `git clone https://github.com/oneforawe/react-ts.git`
* `cd react-ts`
* `npm install`
* `npm start`

## Creation of the Repo

### Initializing

The following commands were used to initialize the repository.

* `npx create-react-app react-ts --template typescript`
* `cd react-ts`
* `rm tsconfig.json && npx tsc --init`  (get more-commented file, meld with original)
* `git init`
* `vim .gitconfig`  (add `.gitconfig` file with appropriate user/author)
* `git config --local include.path ../.gitconfig`  (apply `.gitconfig` to repo)

### Reorganizing

Move some packages from `dependencies` to `devDependencies`.

* `npm install --save-dev @types/node @types/react @types/react-dom @types/jest`
* `npm install --save-dev @testing-library/react @testing-library/user-event @testing-library/jest-dom`

### Linting

Code-linting with [ESLint](https://eslint.org) (with
[typescript-eslint](https://typescript-eslint.io)) and
[Stylelint](https://stylelint.io) is great.

If trying to set-up a repo like this again, you might want to try the below
commands without the flag `--legacy-peer-deps` first to see if it works without
that.

* `npm install --save-dev eslint`
* `npm install --save-dev eslint-plugin-react`
* `npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin --legacy-peer-deps`
* `npm install --save-dev stylelint --legacy-peer-deps`
* `npm install --save-dev stylelint-config-standard --legacy-peer-deps`

See an [error](./docs/Error.md) I had to fix initially.

### Import Aliases

The packages [craco](https://craco.js.org) and
[craco-alias](https://github.com/risen228/craco-alias) enable import aliases
and abbreviations and generally enable more concise import statements.

* `npm install @craco/craco`
* `npm install --save-dev craco-alias`
* new file: `craco.config.js`
* new file: `tsconfig.paths.json`
* modified: `tsconfig.json`

Oh, looks like `craco-alias` is deprecated; need to use
[react-app-alias](https://github.com/oklas/react-app-alias) instead.

### State Management

In case Redux state management is desired (and isn't overkill) the
[reactjs/toolkit](https://redux-toolkit.js.org/introduction/getting-started)
and [react-redux](https://react-redux.js.org) packages are used and the
infrastructure is (re)organized so import statements are concise and usage is
nicely object-based with auto-complete / tab-completion capabilities.

* `npm install @reduxjs/toolkit`
* `npm install react-redux`
* `npm install --save-dev @types/react-redux`
