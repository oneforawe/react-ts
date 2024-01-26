#!/usr/bin/env bash
# Language:  bash
# Purpose:   Set up react-ts template to be ready for new-project development.
# Execution: In the shell, from the root of the repo, execute the following:
#            bash ./tools/set-up.bash


# 1. Install the packages.
#    `npm install`
npm install
# As of 2024-01-24 there are about 14 deprecation warnings and 9
# vulnerabilities (3 moderate, 6 high) expected and the `package-lock.json`
# file is not altered by the installation. The warnings and vulnerabilities are
# [not concerning](https://github.com/facebook/create-react-app/issues/11174).
# After installation, you can check to see if the package-lock file was
# altered, and note that an untracked `node_modules` folder is present, since
# the `.config/.gitignore` file hasn't yet been enabled with the `.gitconfig`
# file; see the next step.


# 2. Reset the repo with a new custom git config file.
#    1. Delete the git folder.
#       For example, execute `rm -rf .git` (a Bash command) or
#       `Remove-Item -Recurse -Force .git` (a PowerShell command).
rm -rf .git
#    2. Copy the custom git config file to the root of the repo.
#       `cp .config/.gitconfig_sample .gitconfig`
cp .config/.gitconfig_sample .gitconfig
#    3. Initialize as a new git repo.
#       `git init`
git init
#    4. Enable the root config file.
#        `git config --local include.path ../.gitconfig`
git config --local include.path ../.gitconfig
#        After this command, the `node_modules` folder and `.gitconfig` file
#        itself should be ignored by git.


# 3. Create a secrets file.
#    `cp src/config/secrets_template.ts src/config/secrets.ts`
cp src/config/secrets_template.ts src/config/secrets.ts
#    This new secrets file will also be ignored, since it's included in the ignore
#    file.


# 4. Fix any incorrect file line-endings.
#    1. Use the temporary git config file with a copy of the git attributes file
#        at the root of the repo to allow the following steps to work properly.
#        `rm .gitconfig`
#        `cp .config/.gitconfig_temp .gitconfig`
#        `cp .config/.gitattributes .gitattributes`
rm .gitconfig
cp .config/.gitconfig_temp .gitconfig
cp .config/.gitattributes .gitattributes
#    2. Stage all of the (non-ignored) files.
#        `git add .`
git add .
#        Note whether there are any warnings based on line endings, including
#        explanations such as
#        "CRLF will be replaced by LF the next time Git touches it"
#        You can confirm this more explicitly with the command
#        `git ls-files --stage --abbrev --eol`
#        which will show whether there is disagreement between "i"/index,
#        "w"/workspace, and "attr"/gitattributes. Such a disagreement, between
#        "w/crlf" and "attr/text eol=lf" line endings can show up like this:
#        `i/lf    w/crlf  attr/text eol=lf        .eslintrc.json`
#    3. If there are no warnings, you can skip the next step.
#    4. If there are warnings, you can automatically correct the files by
#        deleting all of the (non-ignored) files in the working tree and then
#        check them out from the index:
#        `git ls-files -z | xargs -0 rm -f`   (WARNING: UNTESTED, for Bash)
#        `git ls-files | % {Remove-Item $_}`  (for PowerShell)
git ls-files -z | xargs -0 rm -f
#        `git checkout .`  (for both shells)
git checkout .
#        You can confirm the fix of the line endings with
#        `git ls-files --stage --abbrev --eol`
#        or by following the next step.
#    5. You can unstage if desired: `git rm --cached -r .`
git rm --cached -r .
#    6. Clean up the temp files and restore the git config.
#        `rm .gitattributes`
#        `rm .gitconfig`
#        `cp .config/.gitconfig_sample .gitconfig`
rm .gitattributes
rm .gitconfig
cp .config/.gitconfig_sample .gitconfig
