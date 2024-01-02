# Warning

When compiling a build (and sometimes when running the app in development mode),
a warning comes up advising to declare and add a package as an explicit
dependency.

* `> npm run build`

    ```(text)
    $ npm run build

    > react-ts@0.1.0 build
    > craco build

    Creating an optimized production build...
    One of your dependencies, babel-preset-react-app, is importing the
    "@babel/plugin-proposal-private-property-in-object" package without
    declaring it in its dependencies. This is currently working because
    "@babel/plugin-proposal-private-property-in-object" is already in your
    node_modules folder for unrelated reasons, but it may break at any time.

    babel-preset-react-app is part of the create-react-app project, which
    is not maintianed anymore. It is thus unlikely that this bug will
    ever be fixed. Add "@babel/plugin-proposal-private-property-in-object" to
    your devDependencies to work around this error. This will make this message
    go away.

    Compiled successfully.
    ```

So this package has been added:

* `> npm install --save-dev @babel/plugin-proposal-private-property-in-object`

(The `--force` option was added to the command above to overcome some seemingly
unrelated dependency issues for linting.)

## More Detail

The installation was forced with this command

* `> npm install --save-dev @babel/plugin-proposal-private-property-in-object --force`

to overcome the warnings and errors below.

```(text)
> npm install --save-dev @babel/plugin-proposal-private-property-in-object

npm WARN ERESOLVE overriding peer dependency
npm WARN While resolving: eslint-plugin-jest@25.7.0
npm WARN Found: @typescript-eslint/eslint-plugin@6.12.0
npm WARN node_modules/@typescript-eslint/eslint-plugin
npm WARN   dev @typescript-eslint/eslint-plugin@"^6.12.0" from the root project
npm WARN
npm WARN Could not resolve dependency:
npm WARN peerOptional @typescript-eslint/eslint-plugin@"^4.0.0 || ^5.0.0" from eslint-plugin-jest@25.7.0
npm WARN node_modules/eslint-plugin-jest
npm WARN   eslint-plugin-jest@"^25.3.0" from eslint-config-react-app@7.0.1
npm WARN   node_modules/eslint-config-react-app
npm WARN
npm WARN Conflicting peer dependency: @typescript-eslint/eslint-plugin@5.62.0
npm WARN node_modules/@typescript-eslint/eslint-plugin
npm WARN   peerOptional @typescript-eslint/eslint-plugin@"^4.0.0 || ^5.0.0" from eslint-plugin-jest@25.7.0
npm WARN   node_modules/eslint-plugin-jest
npm WARN     eslint-plugin-jest@"^25.3.0" from eslint-config-react-app@7.0.1
npm WARN     node_modules/eslint-config-react-app
npm WARN ERESOLVE overriding peer dependency
npm WARN While resolving: stylelint-config-recommended-scss@14.0.0
npm WARN Found: stylelint@15.11.0
npm WARN node_modules/stylelint
npm WARN   peer stylelint@"^15.10.0" from stylelint-config-recommended@13.0.0
npm WARN   node_modules/stylelint-config-recommended
npm WARN     stylelint-config-recommended@"^13.0.0" from stylelint-config-standard@34.0.0
npm WARN     node_modules/stylelint-config-standard
npm WARN   2 more (stylelint-config-standard, the root project)
npm WARN
npm WARN Could not resolve dependency:
npm WARN peer stylelint@"^16.0.2" from stylelint-config-recommended-scss@14.0.0
npm WARN node_modules/stylelint-config-recommended-scss
npm WARN   stylelint-config-recommended-scss@"^14.0.0" from stylelint-config-standard-scss@12.0.0
npm WARN   node_modules/stylelint-config-standard-scss
npm WARN
npm WARN Conflicting peer dependency: stylelint@16.1.0
npm WARN node_modules/stylelint
npm WARN   peer stylelint@"^16.0.2" from stylelint-config-recommended-scss@14.0.0
npm WARN   node_modules/stylelint-config-recommended-scss
npm WARN     stylelint-config-recommended-scss@"^14.0.0" from stylelint-config-standard-scss@12.0.0
npm WARN     node_modules/stylelint-config-standard-scss
npm ERR! code ERESOLVE
npm ERR! ERESOLVE could not resolve
npm ERR!
npm ERR! While resolving: stylelint-config-standard-scss@12.0.0
npm ERR! Found: stylelint@15.11.0
npm ERR! node_modules/stylelint
npm ERR!   peer stylelint@"^15.10.0" from stylelint-config-recommended@13.0.0
npm ERR!   node_modules/stylelint-config-recommended
npm ERR!     stylelint-config-recommended@"^13.0.0" from stylelint-config-standard@34.0.0
npm ERR!     node_modules/stylelint-config-standard
npm ERR!       dev stylelint-config-standard@"^34.0.0" from the root project
npm ERR!   peer stylelint@"^15.10.0" from stylelint-config-standard@34.0.0
npm ERR!   node_modules/stylelint-config-standard
npm ERR!     dev stylelint-config-standard@"^34.0.0" from the root project
npm ERR!   1 more (the root project)
npm ERR!
npm ERR! Could not resolve dependency:
npm ERR! peer stylelint@"^16.0.2" from stylelint-config-standard-scss@12.0.0
npm ERR! node_modules/stylelint-config-standard-scss
npm ERR!   dev stylelint-config-standard-scss@"^12.0.0" from the root project
npm ERR!
npm ERR! Conflicting peer dependency: stylelint@16.1.0
npm ERR! node_modules/stylelint
npm ERR!   peer stylelint@"^16.0.2" from stylelint-config-standard-scss@12.0.0
npm ERR!   node_modules/stylelint-config-standard-scss
npm ERR!     dev stylelint-config-standard-scss@"^12.0.0" from the root project
npm ERR!
npm ERR! Fix the upstream dependency conflict, or retry
npm ERR! this command with --force or --legacy-peer-deps
npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
npm ERR!
npm ERR!
npm ERR! For a full report see:
npm ERR! /Users/<username>/.npm/_logs/2024-01-02T18_43_00_332Z-eresolve-report.txt

npm ERR! A complete log of this run can be found in: /Users/<username>/.npm/_logs/2024-01-02T18_43_00_332Z-debug-0.log
```
