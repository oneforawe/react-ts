# Creation of the Repo

Note: The commands below were not necessarily executed in the order shown.

## Initialize

The following commands were used to initialize the repository.

* `npx create-react-app react-ts --template typescript`
* `cd react-ts`
* `rm tsconfig.json && npx tsc --init`  (get more-commented file, meld with original)
* `git init`
* `vim .gitconfig`  (add file `.gitconfig` with appropriate user/author)
* `git config --local include.path ../.gitconfig`  (apply `.gitconfig` to repo)

## Remove Warning

The command below was used to remove a [warning](./Warnings.md) related to
Create-React-App and Babel.

* `npm install --save-dev @babel/plugin-proposal-private-property-in-object`

## Reorganize and Fix

Move some packages from `dependencies` to `devDependencies`.

* `npm install --save-dev @types/node @types/react @types/react-dom @types/jest`
* `npm install --save-dev @testing-library/react @testing-library/user-event @testing-library/jest-dom`
* `npm install --save-dev react-scripts`  
  (`--save-dev` so can use `npm audit --omit=dev` to see cleaner audit; [reference](https://github.com/facebook/create-react-app/issues/11174))
* `npm install --save-dev typescript@^4`  
   (`@^4` to fix dependency issue found with `react-scripts` and, later, `craco`)

## Import Aliases

The packages [craco](https://craco.js.org) and
[react-app-alias](https://github.com/oklas/react-app-alias) enable import
aliases and abbreviations and generally enable more concise import statements.
These packages need additional `json5` support so the `tsconfig.json` (a JSON5
file with comments) does not have syntax errors due to the comments and other
differences from the normal JSON syntax.

* `npm install --save-dev @craco/craco`
* `npm install --save-dev @craco/types`
* `npm install --save-dev react-app-alias`
* `npm install --save-dev json5`
* new file: `craco.config.js`
* new file: `tsconfig.paths.json`
* modified: `tsconfig.json`

## Linting

Automatic code-linting can be implemented using [ESLint](https://eslint.org)
with [Stylistic](https://eslint.style/) and [Stylelint](https://stylelint.io),
along with the `.vscode/settings.json`, so fixes are applied automatically each
time a file is saved.

* new file: `settings.json`

I didn't use the auto-configuration and setup with `npm init @eslint/config`,
since it had errors when it attempts to install all of the following:  
`eslint@latest`  
`eslint-plugin-react@latest`  
`@typescript-eslint/eslint-plugin@latest`  
`@typescript-eslint/parser@latest`

Some of these packages already come with `react-scripts`. Instead, I avoided
[warnings](./Warnings.md) by installing the following:

* `npm install --save-dev eslint`
* `npm install --save-dev @stylistic/eslint-plugin`
* `npm install --save-dev stylelint`
* `npm install --save-dev stylelint-config-standard`
* `npm install --save-dev stylelint-config-standard-scss`

## State Management

In case Redux state management is desired (and isn't overkill) the
[reactjs/toolkit](https://redux-toolkit.js.org/introduction/getting-started)
and [react-redux](https://react-redux.js.org) packages are used and the
infrastructure is (re)organized so import statements are concise and usage is
nicely object-based with auto-complete / tab-completion capabilities.

* `npm install @reduxjs/toolkit`
* `npm install react-redux`
* `npm install --save-dev @types/react-redux`

With the code (re)organization, simple custom import statements such as the
following can be used:  
`import { use, dispatch, actions } from 'store';`

See more code in the repo for demonstration of usage.

## Config Folder

* modified: `.gitconfig`  
  Added core properties

  ```(text)
  [core]
    excludesfile = ./.config/.gitignore
    attributesfile = ./.config/.gitattributes
  ```

  to move git excludes/ignore and git attributes files into config folder.
  (Note that the git attributes file seems to work from within the config folder
  except when applying an automatic fix to incorrect file line endings. See the
  usage steps in the repo README for more information on that, as well as the
  `.gitconfig_temp` file noted below.)
* modified: `package.json`  
  Added `"cracoConfig": ".config/craco.config.js",` to move the craco config
  into the config folder.
* modified: `tsconfig.json`  
  Changed "extends" property to `"extends": "./.config/tsconfig.paths.json",`
  to move the paths aliases into the config folder.
* new file: `.gitconfig_sample`  
  Added default git config file for easy copying since the active git config
  file at the project root cannot be included in the repo, since for the
  repo author it contains credentials information. (Maybe the git config could
  refer to a separate credentials file; that would simplify files and steps.)
* new file: `.gitconfig_temp`  
  Added temporary git config file for usage when fixing incorrect file line
  endings.

## Add-ons

* `npm install --save-dev sass` (for extended CSS - Syntactically Awesome Style Sheets)
* `npm install sanitize.css` (for a preferred starting point with CSS)
* `npm install luxon` (for date-time utilities)
* `npm install lodash` (for computational utilities)
* `npm install axios` (for HTTP requests)
* `npm install runtypes` (for data validation when fetching from external API)

## App Src

The code in the `src` folder was developed from the starting point provided by
create-react-app (the first initializing command) to its current state as the
above steps were taken to hone the project.

## Docs

Continually wrote and revised the documentation.

## Hosting

Add a `homepage` location in `package.json` to allow hosting on a demo site with
the app in its own folder.

* `"homepage": "./"`
