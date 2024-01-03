# Creation of the Repo

Note: The commands below were not necessarily executed in the order shown.

## Initializing

The following commands were used to initialize the repository.

* `npx create-react-app react-ts --template typescript`
* `cd react-ts`
* `rm tsconfig.json && npx tsc --init`  (get more-commented file, meld with original)
* `git init`
* `vim .gitconfig`  (add `.gitconfig` file with appropriate user/author)
* `git config --local include.path ../.gitconfig`  (apply `.gitconfig` to repo)

## Reorganizing

Move some packages from `dependencies` to `devDependencies`.

* `npm install --save-dev @types/node @types/react @types/react-dom @types/jest`
* `npm install --save-dev @testing-library/react @testing-library/user-event @testing-library/jest-dom`

## Remove Warning

See the [warning](./Warning.md) I decided to fix.  (I had to add `--force` to
the command above due to some seemingly unrelated dependency issues for
linting.)

* `npm install --save-dev @babel/plugin-proposal-private-property-in-object` (to remove a warning)

## Add-ons

* `npm install sanitize.css` (for a preferred starting point with CSS)
* `npm install --save-dev sass` (for extended CSS - Syntactically Awesome Style Sheets)
* `npm install luxon` (for date-time utilities)
* `npm install lodash` (for computational utilities)
* `npm install axios` (for HTTP requests)
* `npm install runtypes` (for data validation when fetching from external API)  
  (had to use `--force` due to some seemingly unrelated dependency issues for linting)

## Linting

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

See an [error](./Error.md) I had to fix initially.

Hm, looks like
[things are changing](https://typescript-eslint.io/blog/deprecating-formatting-rules/)
with ESLint: deprecation of formatting rules and moving to the Stylistic
project.  Need to investigate and change code appropriately.

## Import Aliases

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

## State Management

In case Redux state management is desired (and isn't overkill) the
[reactjs/toolkit](https://redux-toolkit.js.org/introduction/getting-started)
and [react-redux](https://react-redux.js.org) packages are used and the
infrastructure is (re)organized so import statements are concise and usage is
nicely object-based with auto-complete / tab-completion capabilities.

* `npm install @reduxjs/toolkit`
* `npm install react-redux`
* `npm install --save-dev @types/react-redux`

## Hosting

Add a `homepage` location in `package.json` to allow hosting on a demo site with
the app in its own folder.

* `"homepage": "./"`