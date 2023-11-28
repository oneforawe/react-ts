# React-TS

A boilerplate/template repository for a React-App project in TypeScript. The
commands below were not necessarily executed in the order shown.

## Initializing Repo

Used the following commands to initialize the repository.

* `npx create-react-app react-ts --template typescript`
* `cd react-ts`
* `rm tsconfig.json && npx tsc --init`  (get more-commented file, meld with original)
* `git init`
* `vim .gitconfig`  (add `.gitconfig` file with appropriate user/author)
* `git config --local include.path ../.gitconfig`  (apply `.gitconfig` to repo)

## Linting

If trying to set-up a repo like this again, you might want to try the below
commands without the flag `--legacy-peer-deps` first to see if it works without
that.

* `npm install --save-dev eslint`
* `npm install --save-dev eslint-plugin-react`
* `npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin --legacy-peer-deps`
* `npm install --save-dev stylelint --legacy-peer-deps`
* `npm install --save-dev stylelint-config-standard --legacy-peer-deps`

See an [error](./docs/Error.md) I had to fix initially.
