# react-setup

This repo is for learning how to setup a react project from zero
For starting a react project we can use some commands for creating a template for instance we can use `vite` to create a react app quickly:
`yarn create vite my-react-app --template react`
this command will create a template for starting and you can choose typescript and other things.
But we don't want to use it.

## Init Project

For starting we init project with `npm init`, it create a package.json file that is a place for setting libraries we must to use and some config exist here too and a place for define versions and scripts and etc. It's a main file of a JS application.

### Pnpm , Yarn , Npm

These are a package manager we can install packages with these.
In this project we use pnpm because it reduce time of installing and it had a storage that make it easier for installing other packages [Difference](https://github.com/tmohammad78/learning/tree/main/frontend/node-module)
`For Installing react app you can use this: yarn create react-app my-app`

### Init Git

To init git, we run `git init` and we can set remote and push them, also we must add another file as name .gitignore for ignoring some files and folders for pushing. for should add these to .gitignore file in root :
`node_module, .env , .vscode `

## Install Important packages

- Attention:
  There are two kinds of packages, One type of packages are just for development and we don't need them in production mode, like test library or prettier and eslint,but other packages are need and require for a project to deploy on server and production like react and react-dom. so for install that packages that are first type we use `pnpm install --dev` or `pnpm install -D` or `npm i -D` and for second and main one `pnpm install --save` or `pnpm install`

For Starting a react project we should install these items:

1. <b>React</b>:<br /> It's package that have code for react and react native, it's core of it
2. <b>React Dom</b>:<br /> All things related to the DOM like Virtual DOM and etc.
3. <b>Prettier</b>:<br />
   In Large team, we have some convention and some formats to obey, so we install this for checking format and also fix them for us. Also we should add a script in package.json for someone how doesn't have prettier extension and do that on it's own system
   In vscode we should do this `set prettier.requireConfig to true and editor. <br />
formatOnSave to true.` <br />
   for installing we run this: `pnpm i -D prettier` <br />
   the script is : `"format": "prettier --write \"src/**/*.{js,jsx}\""` <br />
   Now we should add `.prettierrc` file in project to add our config for project
   we can check prettier site to see configs
4. <b>Eslint</b><br />
   We should check each line code and detect some simple bugs that we cause, eslint make this easier for us to find easier them. <br />
   For installing we run `pnpm i -D eslint` if you install prettier for ignoring some rules and don't get some conflicts we must install `pnpm i -D eslint-config-prettier``. <br />
then for config our rules we create `.eslintrc.json`<br />
And Add this script in package.json`"lint": "eslint \"src/\*_/_.{js,jsx}\" --quiet",`Now because we want to use react, we should install`pnpm i -D eslint-plugin-react eslint-plugin-import```, eslint plugin import is for checking errors in import and export. <br />
   then we can add settings for detecting version of react to add rules base feature of react version, <br />
   Like git, you can add .eslintignore for it.
5. <b>Vite</b><br />
   Vite is like webpack to bundle your application is faster than webpack. <br />
   For installing vite we run `pnpm i -D vite @vitejs/plugin-react` the second one is for using in react. <br />
   then we add a config file as `vite.config.js` then we should add a single line for supporting react. <br />
   then we should add script: <br />
   6.1: `dev: vite` <br />
   6.2: `preview: vite preview` <br />
   6.3: `build: vite build` <br />
6. <b>Vitest</b> <br />
   Vitest is a good tool for testing and it has jest, for setting up test you should install: `pnpm i -D vitest @testing-library/react happy-dom`.
   happy-dom is minimal js dom. You should add some config in vite.config, add happy-dom in setting object and enviroment property
7. <b>Tailwind</b><br />
   Tailwind is a css library. `pnpm i -D tailwindcss postcss autoprefixer` <br />
   postcss is like a babel of css, get a css and transform to different css and autoprefixer is a transpiler for moder css to older css for old browser. <br />
   Then you must run this `pnpm tailwindcss init -p` after you see two file as name postcss and tailwind.config after you should add these in main style file:
   `@tailwind base; @tailwind components; @tailwind utilities;` <br />
   if you see error in vscode, you should add `css.lint.unknownAtRulesL ignore` in setting.json of vscode <br />
   You can add `"editor.quickSuggestions": { "strings": true }` for active suggestion class in vscode
8. <b>Typescript</b>
9. <b>Docker</b>
10. <b>Enviroment variable</b>
11. <b>Husky</b>
12. <b>Github Action</b>
13. <b>Gitlab CI/CD</b>
14. <b>Nginx</b>

## Do Optional things

1. Add `.npmrc`, when you want to add your npm registry and other configuration
2. Add `.versionrc`
3. <b>StyleLintrc</b>
4. <b>Sentry</b>
5. <b>.Vscode</b>

## Setup Project

After installing we should create a `src` folder then add `App.jsx` and after
create a `index.html` file, in html file we should add script to load app.jsx and in app file we should create root from `react-dom/client` and bind the id of root tag in body html.
