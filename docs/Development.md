# Development

This repo is designed for usage with the following IDE, configurations, and
extensions.

An editor or IDE (integrated development environment) such as VSCode (aka
"Code", Visual Studio Code from Microsoft) can perform automatic linting (syntax
and style flagging and enforcement / correction) and type-checking, as well as
many other useful tasks and functionalities, some provided by extensions that
can be installed into the editor.

Included in this repo is the workspace settings (at `.vscode/settings.json`)
that controls the configuration of VSCode while working in this repo/project.

Note: A separate user settings file can control the configuration globally for a
user on a particular machine, and those user settings can be partly or wholy
overridden by the workspace settings file.

With [VSCode](https://code.visualstudio.com/) installed, you can install these
VSCode extensions to enable linting and gain other useful features:

* Linting
  * `davidanson.vscode-markdownlint`
  * `dbaeumer.vscode-eslint`
  * `stylelint.vscode-stylelint`
  * `timonwong.shellcheck` (not used but referenced in `settings.json`)
  * `ms-python.pylint` (not used but referenced in `settings.json`)
* General
  * `eamodio.gitlens`
  * `ybaumes.highlight-trailing-white-spaces`
* Recommended Miscellaneous/Utility
  * `pucelle.vscode-css-navigation`
  * `compulim.indent4to2`

## ESLint and Stylelint

Besides running ESLint and Stylelint automatically when viewing and editing
files in VSCode, you can also run each of them in the shell/terminal.

In the terminal, to run linting on many files and view issues with the files,
change directory into the root project folder (`react-ts`) and run the following
commands:

* `npx eslint src --ext .ts,.js,.tsx`
* `npx stylelint "**/*.{css,scss}" --ignore-pattern "build/*"`

If there are no errors or warnings, there will be no output.

To actually fix, use the option `--fix` with a command.  (With ESLint you can
also use `--fix-dry-run` for a simulation).

For more help:

* ESLint: use `npx eslint --help` or look
  [here](https://eslint.org/docs/latest/use/command-line-interface).
* Stylelint: see more options [here](https://stylelint.io/user-guide/options/).
