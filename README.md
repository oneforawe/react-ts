# React-TS

A boilerplate/template repository for a React-App project in TypeScript. The
commands below were not necessarily executed in the order shown.

## Usage of the Repo

Using a shell such as GNU Bash with git and node/npm installed, execute the
following commands to get a copy of the repository, set it up, and run it (in
development mode).

* `git clone https://github.com/oneforawe/react-ts.git`
* `cd react-ts`
* `npm install`
* `npm start`

## Creation of the Repo

### Initializing

The following commands were used to initialize the repository.

* `npx create-react-app react-ts --template typescript`
* `cd react-ts`
* `rm tsconfig.json && npx tsc --init`  (get more-commented file, meld with original)
* `git init`
* `vim .gitconfig`  (add `.gitconfig` file with appropriate user/author)
* `git config --local include.path ../.gitconfig`  (apply `.gitconfig` to repo)

### Linting

If trying to set-up a repo like this again, you might want to try the below
commands without the flag `--legacy-peer-deps` first to see if it works without
that.

* `npm install --save-dev eslint`
* `npm install --save-dev eslint-plugin-react`
* `npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin --legacy-peer-deps`
* `npm install --save-dev stylelint --legacy-peer-deps`
* `npm install --save-dev stylelint-config-standard --legacy-peer-deps`

See an [error](./docs/Error.md) I had to fix initially.
