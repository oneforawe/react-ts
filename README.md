# React-TS

This repository is a template for [React](https://react.dev) app projects
written in [TypeScript](https://www.typescriptlang.org).

The purpose of this repo is:

* to act as a template to easily start new projects without re-writing common
  "boilerplate" code and configurations,
* to act as a reference to recall how to write certain patterns of code, and
* to demonstrate this particular approach and organization of code for any such
  React TypeScript project, using a generic folder structure, typescript and
  css/scss [code linting](./docs/Development.md) (geared for usage with
  [VSCode](https://code.visualstudio.com/)), and optional features such as redux
  state management, helper hooks for cyclic state refreshing, services with
  external API calls, and so on.

See the [development notes](./docs/Development.md) for tips on setting up the
repo properly with VSCode and usage of `eslint` and `stylelint`.  See notes on
the creation of this repo [here](./docs/Creation.md).

## Demo

The code design is the focus whereas the app design is not; the app is merely
constructed to demonstrate usage of these code patterns and technologies.

A demo of the app can be found
[here](https://www.andrew-forrester.com/demos/react-ts/).

## Usage

To use this repo as a template starting point for your own project, first you
will get this repo set up properly to run the app.  And once the app can run and
you can verify that automatic linting is enabled in VSCode, you can delete the
`.git` folder and initialize a new repo/project from this template.

To run the app in this repo, use a shell such as GNU Bash with
[git](https://git-scm.com) and [node/npm/npx](https://nodejs.org) (and probably
[nvm](https://github.com/nvm-sh/nvm)) installed and execute the following
instructions and commands.

1. Get a local copy/clone of the repo.  
   `git clone https://github.com/oneforawe/react-ts.git`
2. Enter the repo.  
   `cd react-ts`
3. Create a `.gitconfig` file at the root of the repo and activate it.  
   `cp ./.config/.gitconfig_sample ./.gitconfig`  
   `git status` (this will refresh git and activate the config)
4. Install the packages.  
   `npm install`
5. Create a secrets file.  
   `cp ./src/config/secrets_template.ts ./src/config/secrets.ts`
6. Optional:  
   Set up an account with [WeatherAPI.com](https://www.weatherapi.com/), get an
   API key, and edit the secrets file to include the API key as a string,
   otherwise the weather component will not show weather reports.
7. Semi-Optional:  
   Read the [development notes](./docs/Development.md) and install the
   recommended VSCode extensions.  (Automatic linting while editing with VSCode
   and its extensions is part of the point of this repo, though the code will
   run without installing the extensions.)
8. Run the app (in development mode).  
   `npm start`

## To Do

A to-do list for continuing development of this template:

* Investigate adding style/format linting for css/scss, since stylelint no
  longer provides that kind of linting.
* Investigate possibility of putting the remaining config files into the
  `.config` folder.
