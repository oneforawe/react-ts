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
  css/scss [code linting](./docs/Development.md) (geared for usage with
  [VSCode](https://code.visualstudio.com/)), and optional features such as redux
  state management, helper hooks for cyclic state refreshing, services with
  external API calls, and so on.

See the [development notes](./docs/Development.md) for tips on setting up the
repo properly with VSCode and usage of `eslint` and `stylelint`.  See the
[creation notes](./docs/Creation.md) for details on how this repo was created
and how to re-create it.  And see the [web development](./docs/WebDev.md) notes
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
needed. The numbered steps below include steps on resetting and initializing the
repo as part of setting up.

To run the app in this repo, use a (virtual) terminal such as iTerm2 or Windows
Terminal or the embedded terminal in VSCode, running a shell such as GNU Bash or
PowerShell, and make sure that
[git](https://git-scm.com) and [node/npm/npx](https://nodejs.org)
(and [probably](./docs/WebDev.md) [nvm](https://github.com/nvm-sh/nvm))
are installed and execute the following instructions and commands.

1. Ensure installation and usage of Node version 20.  
    For example, `nvm list`, `nvm install 20`, and `nvm use 20`.  
    The precise version used could be something like `20.11.0` or a different
    sub-version.
2. Get a local copy/clone of the repo.  
    `git clone https://github.com/oneforawe/react-ts.git`
3. Enter the repo.  
    `cd react-ts`
4. Install the packages.  
    `npm install`  
    As of 2024-01-24 there are about 14 deprecation warnings and 9
    vulnerabilities (3 moderate, 6 high) expected and the `package-lock.json`
    file is not altered by the installation. The warnings and vulnerabilities are
    [not concerning](https://github.com/facebook/create-react-app/issues/11174).
    After installation, you can check to see if the package-lock file was
    altered, and note that an untracked `node_modules` folder is present, since
    the `.config/.gitignore` file hasn't yet been enabled with the `.gitconfig`
    file; see the next step.
5. Reset the repo with a new custom git config file.
    1. Delete the git folder.  
        For example, execute `rm -rf .git` (a bash command) or
        `Remove-Item -Recurse -Force .git` (a PowerShell command).
    2. Copy the custom git config file to the root of the repo.  
        `cp .config/.gitconfig_sample .gitconfig`
    3. Initialize as a new git repo.  
        `git init`
    4. Enable the root config file.  
        `git config --local include.path ../.gitconfig`  
        After this command, the `node_modules` folder and `.gitconfig` file itself
        should be ignored by git.
6. Create a secrets file.  
    `cp src/config/secrets_template.ts src/config/secrets.ts`  
    This new secrets file will also be ignored, since it's included in the ignore
    file.
7. Fix any incorrect file line-endings.
    1. Use the temporary git config file with a copy of the git attributes file
        at the root of the repo to allow the following steps to work properly.  
        `rm .gitconfig`  
        `cp .config/.gitconfig_temp .gitconfig`  
        `cp .config/.gitattributes .gitattributes`
    2. Stage all of the (non-ignored) files.  
        `git add .`  
        Note whether there are any warnings based on line endings, including
        explanations such as  
        "CRLF will be replaced by LF the next time Git touches it"  
        You can confirm this more explicitly with the command  
        `git ls-files --stage --abbrev --eol`
        which will show whether there is disagreement between "i"/index,
        "w"/workspace, and "attr"/gitattributes. Such a disagreement, between
        "w/crlf" and "attr/text eol=lf" line endings can show up like this:
        `i/lf    w/crlf  attr/text eol=lf        .eslintrc.json`
    3. If there are no warnings, you can skip the next step.
    4. If there are warnings, you can automatically correct the files by
        deleting all of the (non-ignored) files in the working tree and then
        check them out from the index:  
        `git ls-files -z | xargs -0 rm -f`   (WARNING: UNTESTED, for Bash)  
        `git ls-files | % {Remove-Item $_}`  (for PowerShell)  
        `git checkout .`  (for both shells)  
        You can confirm the fix of the line endings with  
        `git ls-files --stage --abbrev --eol`  
        or by following the next step.
    5. Open the repo root folder `react-ts` in VSCode by executing `code .` and
        select a file to view (especially if you suspect it has incorrect line
        endings) and examine the line-ending indicator in the lower right corner
        of the window (which you can click-on to initiate a change in a file's
        line endings, if you need to).  
        Specifically, select the (ignored) file `src/config/secrets.ts` and
        change it, if necessary, from "CRLF" to "LF", and save the file.
    6. You can unstage if desired: `git rm --cached -r .`
    7. Clean up the temp files and restore the git config.  
        `rm .gitattributes`  
        `rm .gitconfig`  
        `cp .config/.gitconfig_sample .gitconfig`  
8. Optional:  
    Set up an account with [WeatherAPI.com](https://www.weatherapi.com/), get an
    API key, and edit the secrets file to include the API key as a string,
    otherwise the weather component will not show weather reports.
9. Semi-Optional:  
    Read the [development notes](./docs/Development.md) and install the
    recommended VSCode extensions.  (Automatic linting while editing with VSCode
    and its extensions is part of the point of this repo, though the code will
    run without installing the extensions.)
10. Run the app (in development mode).  
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
  [config folder](./docs/Creation.md#config-folder) for more detail on this
  issue.
