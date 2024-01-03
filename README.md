# React-TS

This is a template repository for [React](https://react.dev) app projects
written in [TypeScript](https://www.typescriptlang.org).

The purpose of this repo is to demonstrate a particular approach and
organization of code for any such React TypeScript project, using a generic
folder structure, typescript and css/scss [code linting](./docs/Development.md)
(geared for usage with [VSCode](https://code.visualstudio.com/)), and optional
features such as redux state management, helper hooks for cyclic state
refreshing, services with external API calls, and so on.  See the
[development notes](./docs/Development.md) for tips on setting up the repo
properly with VSCode and usage of `eslint`.

The code design is the focus whereas the app design is not; the app is merely
constructed to demonstrate usage of these code patterns and technologies.

A demo of the app can be found
[here](https://www.andrew-forrester.com/demos/react-ts/).

## Usage of the Repo

To run the app in this repo, use a shell such as GNU Bash with
[git](https://git-scm.com) and [node/npm/npx](https://nodejs.org) (and probably
[nvm](https://github.com/nvm-sh/nvm)) installed and execute the following
instructions and commands.

* Get a local copy/clone of the repo.  
  `git clone https://github.com/oneforawe/react-ts.git`
* Enter the repo.  
  `cd react-ts`
* Install the packages.  
  `npm install --force` (currently need to force due to linting dependency issues)
* Create a secrets file.  
  `cp ./src/config/secrets_template.ts ./src/config/secrets.ts`
* Optional:  
  Set up an account with [WeatherAPI.com](https://www.weatherapi.com/), get an
  API key, and edit the secrets file to include the API key as a string,
  otherwise the weather component will not show weather reports.
* Optional:  
  Read the [development notes](./docs/Development.md) and install the
  recommended VSCode extensions.
* Run the app (in development mode).  
  `npm start`

## Creation of the Repo

Note: The commands below were not necessarily executed in the order shown.

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

### Remove Warning

See the [warning](./docs/Warning.md) I decided to fix.  (I had to add `--force`
to the command above due to some seemingly unrelated dependency issues for
linting.)

* `npm install --save-dev @babel/plugin-proposal-private-property-in-object` (to remove a warning)

### Add-ons

* `npm install sanitize.css` (for a preferred starting point with CSS)
* `npm install --save-dev sass` (for extended CSS - Syntactically Awesome Style Sheets)
* `npm install luxon` (for date-time utilities)
* `npm install lodash` (for computational utilities)
* `npm install axios` (for HTTP requests)
* `npm install runtypes` (for data validation when fetching from external API)  
  (had to use `--force` due to some seemingly unrelated dependency issues for linting)

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
* `npm install --save-dev stylelint-config-standard-scss --legacy-peer-deps`

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

### Hosting

Add a `homepage` location in `package.json` to allow hosting on a demo site with
the app in its own folder.

* `"homepage": "./"`
