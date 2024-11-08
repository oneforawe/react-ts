# React-TS

This repository is a template for [React](https://react.dev) app projects
written in [TypeScript](https://www.typescriptlang.org).

See the [tech stack notes](./doc/Stack.md) for a fuller list of technologies
used.  You can see a (Dockerized)
[contained version](https://github.com/oneforawe/react-ts-dock) of this repo and
[another version](https://github.com/oneforawe/react-next-ts) of this repo
that uses a more modern stack, but that version is still in development.

The purpose of this repo is:

* to act as a template to easily start new projects without re-writing common
  "boilerplate" code and configurations,
* to act as a reference to recall how to write certain patterns of code and
  accomplish certain tasks (such as achieving robust file-line-ending control
  with the repo code and steps below, to avoid issues later in development), and
* to demonstrate this particular approach and organization of code for any such
  React TypeScript project, using a generic folder structure,
  [code linting](./doc/Development.md) (geared for usage with
  [VSCode](https://code.visualstudio.com/)), and optional features such as redux
  state management, helper hooks for cyclic state refreshing, services with
  external API calls, and so on.

See the [development notes](./doc/Development.md) for tips on setting up the
repo properly with VSCode and some linting details.  See the
[web dev notes](./doc/WebDev.md) for more general notes and elaboration on setup
with node.  And see the [creation notes](./doc/Creation.md) for details on how
this repo was created and how to re-create it.

## Demo

The code design is the focus whereas the app design is not; the app is merely
constructed to demonstrate usage of these code patterns and technologies.

A demo of the app can be found
[here](https://www.andrew-forrester.com/demos/react-ts/).

## Usage

To use this repo as a template starting point for your own project, first you
will get this repo set up properly to run the app.  And once the app can run and
you can verify that automatic linting is enabled in VSCode, you can delete the
`.git` folder (again) and initialize a new git repo from this template if
needed. The scripts referenced below include steps on resetting and initializing
the repo as part of setting up; open the scripts to get further explanation.

To run the app in this repo, use a (virtual) terminal such as iTerm2 or Windows
Terminal or the embedded terminal in VSCode, running a shell such as GNU Bash or
PowerShell, and make sure that
[git](https://git-scm.com) and [node/npm/npx](https://nodejs.org)
(and [probably](./doc/WebDev.md) [nvm](https://github.com/nvm-sh/nvm))
are installed and execute the following instructions and commands.

1. Ensure installation and usage of Node version 20.  
  For example, `nvm list`, `nvm install 20`, and `nvm use 20`.  
  The precise version used could be something like `20.11.0` or a different
  sub-version.

2. Get a local copy/clone of the repo.  
  `git clone https://github.com/oneforawe/react-ts.git`

3. Enter the repo and execute the appropriate set-up script.  
  `cd react-ts`  
  For Bash: `bash ./tools/set-up.bash`  
  For PowerShell: `.\tools\set-up.ps1`  
  Note that the scripts have explanations of each step. Doing each step yourself
  by hand and reading the explanations could be an educational exercise.

4. Optional:  
  Set up an account with [WeatherAPI.com](https://www.weatherapi.com/), get an
  API key, and edit the secrets file to include the API key as a string,
  otherwise the weather component will not show weather reports.

5. Semi-Optional:  
  Read the [development notes](./doc/Development.md) and install the latest
  version of VSCode and the recommended VSCode extensions.  (Automatic linting
  while editing with VSCode and its extensions is part of the point of this
  repo, though the code should still run without installing the extensions.)

6. Run the app (in development mode).  
  `npm start`  
  Wait and the app should automatically open in a browser.

From here, you can play with the app in the browser, experiment with editing the
code in VSCode and saving your edits, and see your edits have immediate effect
on the app, since it's running live in development/watch mode.  You should also
see your edits be linted/auto-fixed by the linting infrastructure immediately on
each save of a file in VSCode.  If not, trouble-shoot.  (Some errors in SCSS are
not auto-fixed -- see to-do items below -- but something like bad indentation
should be auto-fixed.) Once it all works as expected, you can either continue-on
editing as desired and adding/commiting your code to your repo as is, or
initialize the repo again from a new starting point if needed, or just delete
the `.git` folder and copy-paste your code into an existing git repo.

## To Do

A to-do list for continuing development of this template:

* Investigate possibility of putting the remaining config files into the config
  folder.
* Investigate simplifying the process to automatically fix file-line-endings,
  especially forcing git to use the attributes file in the config folder and
  seeing if `git add --renormalize .` can work; that would simplify files and
  steps.  See the creation notes section on the
  [config folder](./doc/Creation.md#config-folder) for more detail on this
  issue.
