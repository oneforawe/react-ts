# Web Dev

For web development in JavaScript / TypeScript, here are some useful tools:

* General Development
  * Version Control  
    For example, [git](https://git-scm.com/downloads) -- the "stupid content
    tracker", for file/project version control and downloading/uploading. It's
    possible you already have this installed by default. If using MacOS with
    Homebrew, you can use brew to install git.
  * Secure Connections  
    For example, using ssh (Secure Shell network protocol) can be used with git
    to have a simple secure means of interacting with a repository with the
    "origin" hosted on a remote machine.
  * Editors / IDEs  
    See [here](./Development.md) for more on VSCode.  Note that vim is an editor
    that most people won't want to use, but if you're already familiar with it
    and want to use it, it can be integrated with git as a default editor, and
    its key-bindings can be used in VSCode, so I mention it here, with notes
    below, for my own interest at least.

* Back-end / Runtime  
  [Node](https://nodejs.org/en/)
  ([nvm](https://github.com/nvm-sh/nvm), node, npm, npx)  
  See the Further Notes below for more details.

* Front-end / Browser  
  [Chrome](https://www.google.com/chrome/), using its
  [DevTools](https://developer.chrome.com/docs/devtools) and
  [Redux DevTools](https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

## Further Notes

### Node

See also [Web Dev on Windows](#web-dev-on-windows) notes below.

Node.js (aka NodeJS, node, etc) is a back-end (non-browser) runtime environment
for JavaScript, with an associated shell command `node`.  Note that with node
installed, you will also have the [npm](https://www.npmjs.com/) (node package
manager) `npm` utility at your command, which connects with an enormous registry
of useful Node/JavaScript packages, and the `npx` utility, which allows you to
run an arbitrary command from an npm package (either one installed locally, or
fetched remotely).

In a command-line interface, also known as a CLI or (virtual) terminal, you can
find out if you already have node installed.  If the shell running your terminal
is bash or zsh, these instructions will work for you.  You can confirm either of
these two shells by executing the command `echo $0` and seeing that bash or zsh
is printed (with a dash in front if it's acting as a login shell).

You can execute `command -V node`, and if the result shows a path location of
"node", such as `usr/bin/node`, then you've already got it installed, otherwise
it will tell you that node is "not found".  The command `node -v` will show you
the version.  You might want to upgrade if your version is, say, below version
20 -- you should prefer to use the "Active LTS" (Long-Term Support) release of
node, or a "Maintenance LTS", which you can find
[here](https://nodejs.org/en/about/releases/).  (You can use `command -V npm`
and `npm -v` too.)

If you don't have node installed, you could just go to the
[node website](https://nodejs.org/en/) and download from there, but you should
probably consider other methods, including using a package manager.  Here are
two good options:

* For development  
  If you intend on using node on an on-going basis during JavaScript/Node
development (or simply want to use a globally-installed npm package), it's best
to follow the instructions from
[nvm (node version manager)](https://github.com/nvm-sh/nvm) to install nvm and
node+npm.  As the
[npm docs](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally)
explain, installing node/npm with nvm "is the best way to avoid permissions
issues".  Also, with nvm you'll be able to quickly switch between versions of
node, if you ever need to -- and if you develop over the span of years, you will
probably need to or want to.

* For one-time use, production use, etc  
  If you intend on just using node for a one-time implementation (and without
using globally-installed npm packages), you can follow instructions from
[NodeSource](https://github.com/nodesource/distributions) to just install one
version of node+npm.  If using GNU/Linux apt and NodeSource, you can follow
step 1 in
[this tutorial](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-20-04).

Confirmation from
[Linuxize](https://linuxize.com/post/how-to-install-node-js-on-ubuntu-18.04/):
"If you need Node.js only as a local runtime for deploying Node.js applications
then the simplest option is to install Node.js from the NodeSource repository.
Developers should prefer installing Node.js using the NVM script."

Note that, since it is not recommended to install nvm using a package manager
(such as [apt](https://en.wikipedia.org/wiki/APT_(software)) for GNU/Linux or
[Homebrew](https://brew.sh/) for MacOS), you will have to take more steps
(beyond your usual package-manager package-update steps) if you want to keep nvm,
node, etc up-to-date.  Follow the [instructions](https://github.com/nvm-sh/nvm)
for updating -- using the same "curl" or "wget" command to update nvm as the one
used to install it (if a newer file is referenced).  And you can install more
versions of node+npm and switch between them; see `nvm --help` for more info.
Note also that your globally-installed packages (seen with `npm ls -g --depth 0`)
will change when switching between versions.

(Also, for your information, if you're using MacOS with Homebrew, and have
installed with Homebrew -- as *not* recommended, `brew doctor` will give a long
warning about node, but that warning can just be ignored.)

### Web Dev on Windows

Again, a caveat that most will not want to use vim (though it can be nice as a
default editor with git). And ssh may not be necessary but is helpful.

* vim (EG [gvim](https://www.vim.org/download.php)
-- `C:\Program Files (x86)\Vim\vim82`)  
  When using the installer, be sure to check the "create .bat files" option so
  vim/gvim will work in the terminal/console, as explained
  [here](https://stackoverflow.com/questions/10049316/how-do-you-run-vim-in-windows).
  (All of these become available: view, vim, vimdiff, vimtutor, evim, gview,
  gvim, gvimdiff.)  
  Settings: either
  * create copies
    * `Copy-Item -Path C:\Users\USERNAME\.config-repo\config\vim\vimrc -Destination C:\Users\USERNAME\vimfiles\ -PassThru`
    * `Copy-Item -Path C:\Users\USERNAME\.config-repo\config\vim\vim.d\colors\zenburn.vim -Destination C:\Users\USERNAME\vimfiles\colors\ -PassThru`
  * or create links
    * `New-Item -ItemType SymbolicLink -Path C:\Users\USERNAME\vimfiles\vimrc -Target C:\Users\USERNAME\.config-repo\config\vim\vimrc`
    * `New-Item -ItemType SymbolicLink -Path C:\Users\USERNAME\vimfiles\colors\zenburn.vim -Target C:\Users\USERNAME\.config-repo\config\vim\vim.d\colors\zenburn.vim`
* git (EG [git-scm](https://git-scm.com/download/win), also promoted
  [here](https://gitforwindows.org/))
* [nvm-windows](https://github.com/coreybutler/nvm-windows)
(node version manager for windows)
  * Installing/Upgrading NVM for Windows  
    Install: `nvm-setup.exe` (via `nvm-setup.zip`)  
    Upgrade: `nvm-update.exe` (via `nvm-update.zip`)
  * Installing versions of Node  
    EG: `nvm install 20` and then `nvm use 20` or `nvm use 20.x.y`
* ssh (see
[instructions](https://learn.microsoft.com/en-us/windows-server/administration/openssh/openssh_keymanagement)
or maybe tutorials such as
[this one](https://learn.microsoft.com/en-us/windows/terminal/tutorials/ssh)
within the context of Windows Terminal
)
