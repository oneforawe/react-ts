# Development

This repo is designed for usage with the following IDE, configurations, and
extensions.

An editor or IDE (integrated development environment) such as VSCode (aka
"Code", Visual Studio Code from Microsoft) can perform automatic linting (syntax
and style flagging and enforcement / correction) and type-checking, as well as
many other things, some provided by extensions that can be installed into the
editor.

Included in this repo is the workspace settings (at `.vscode/settings.json`)
that controls the configuration of VSCode while working in this repo/project.

Note: A separate user settings file can control the configuration globally for a
user on a particular machine, and those user settings can be partly or wholy
overridden by the workspace settings file.

Relevant VSCode extensions:

* For UI
  * `dbaeumer.vscode-eslint-2.2.6`
  * `stylelint.vscode-stylelint-1.2.2`
  * `pucelle.vscode-css-navigation-1.13.3`
* For Markdown and Shell Scripts
  * `davidanson.vscode-markdownlint-0.48.1`
  * `timonwong.shellcheck-0.19.6`
  * `ms-vscode.powershell-2022.8.5`
* General
  * `eamodio.gitlens-12.2.1`
  * `ybaumes.highlight-trailing-white-spaces-0.0.2`
  * `compulim.indent4to2-0.1.2`

## Running ESLint

In the terminal, to run eslint on many files, change directory into the
root project folder (`react-ts`) and run the following command:  
`npx eslint src --ext .ts,.js,.tsx`

If there are no errors or warnings, there will be no output.
