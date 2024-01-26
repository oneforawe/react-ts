# React-TS

This repository is a template for [React](https://react.dev) app projects
written in [TypeScript](https://www.typescriptlang.org).

The purpose of this repo is:

* to act as a template to easily start new projects without re-writing common
  "boilerplate" code and configurations,
* to act as a reference to recall how to write certain patterns of code and
  accomplish certain tasks (such as achieving robust file-line-ending control
  with the repo code and steps below, to avoid issues later in development), and
* to demonstrate this particular approach and organization of code for any such
  React TypeScript project, using a generic folder structure, typescript and
  css/scss [code linting](./doc/Development.md) (geared for usage with
  [VSCode](https://code.visualstudio.com/)), and optional features such as redux
  state management, helper hooks for cyclic state refreshing, services with
  external API calls, and so on.

See the [development notes](./doc/Development.md) for tips on setting up the
repo properly with VSCode and usage of `eslint` and `stylelint`.  See the
[creation notes](./doc/Creation.md) for details on how this repo was created
and how to re-create it.  And see the [web development](./doc/WebDev.md) notes
for more general notes and elaboration on setup with node.

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
needed. The scripts referenced below include steps on re-initializing the repo
as part of setting up; open the scripts to get further explanation.

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

3. Enter the repo and execute one of the set-up scripts.  
   `cd react-ts`
   * For PowerShell: `.\tools\set-up.ps1`
   * For Bash: `bash ./tools/set-up.bash`

   Note that the scripts have explanations of each step. Doing each step
   yourself by hand and reading the explanations could be an educational
   exercise.

4. Fix any incorrect file line-endings for an ignored file.
   1. Open the repo root folder `react-ts` in VSCode by executing  
      `code .`
   2. Select a file to view in the (primary)
      [side bar](https://code.visualstudio.com/docs/getstarted/userinterface) /
      Explorer.
   3. Note that for any viewed file, you should see a line-ending indicator,
      showing either "LF" or "CRLF", in the lower right corner of the window in
      the [status bar](https://code.visualstudio.com/docs/getstarted/userinterface).
      If you ever need to change the line-endings type of a file, you can click
      on that indicator to initiate that change.
   4. Specifically, select the (ignored) file `src/config/secrets.ts` and change
      it, if necessary, from "CRLF" to "LF" line endings, and save the file.

5. Optional:  
  Set up an account with [WeatherAPI.com](https://www.weatherapi.com/), get an
  API key, and edit the secrets file to include the API key as a string,
  otherwise the weather component will not show weather reports.

6. Semi-Optional:  
  Read the [development notes](./doc/Development.md) and install the
  recommended VSCode extensions.  (Automatic linting while editing with VSCode
  and its extensions is part of the point of this repo, though the code will run
  without installing the extensions.)

7. Run the app (in development mode).  
  `npm start`

From here, you can play with the app in the browser, experiment with editing and
saving your edits, and seeing your edits have immediate effect on the app, since
it's running in development mode.  You should also see your edits immediately be
linted/auto-fixed by the linting infrastructure on each save of a file in
VSCode.  If not, trouble-shoot.  Once it all works as expected, you can either
continue-on editing as desired and adding/commiting your code to your repo as
is, or initialize the repo again from a new starting point if needed, or just
delete the `.git` folder and copy-paste your code into an existing git repo.

## To Do

A to-do list for continuing development of this template:

* Investigate adding style/format linting for css/scss, since stylelint no
  longer provides that kind of linting.
* Investigate possibility of putting the remaining config files into the config
  folder.
* Investigate having the git config file refer to a separate credentials file;
  that would simplify files and steps.
* Investigate simplifying the process to automatically fix file-line-endings,
  especially forcing git to use the attributes file in the config folder and
  seeing if `git add --renormalize .` can work; that would simplify files and
  steps.  See the creation notes section on the
  [config folder](./doc/Creation.md#config-folder) for more detail on this
  issue.
