# React-TS

This repository is a template for [React](https://react.dev) app projects
written in [TypeScript](https://www.typescriptlang.org).

The purpose of this repo is:

* to function as a template to easily start new projects without re-writing
  common "boilerplate" code and configurations,
* to act as a reference to recall how to write certain patterns of code, and
* to demonstrate this particular approach and organization of code for any such
  React TypeScript project, using a generic folder structure, typescript and
  css/scss [code linting](./docs/Development.md) (geared for usage with
  [VSCode](https://code.visualstudio.com/)), and optional features such as redux
  state management, helper hooks for cyclic state refreshing, services with
  external API calls, and so on.

See the [development notes](./docs/Development.md) for tips on setting up the
repo properly with VSCode and usage of `eslint`.  See notes on the creation of
this repo [here](./docs/Creation.md).

## Demo

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

## TODO

A to-do list for continuing development of this template:

* Investigate possibility of putting all config files into a `.config` folder.
