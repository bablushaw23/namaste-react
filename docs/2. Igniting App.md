(code ref: https://github.com/bablushaw23/namaste-react/commit/d2a24006a166dd867a7649b87d32f4edad6ea9fe)
Here I will learn:
1. How to create-react-app from basics
## Initialize with npm:
```shell
npm init
```
this will create `package.json` which simply is a configuration file for the project
- it have all the details you filled while in `npm init`.
- it records all the dependencies you need in your app

Bundlers: Bundle our app and make it ready to deploy. Some examples are vite, webpack, parcel etc. We will use `parcel` as our bundler.
	* Install `parcel` by:
```shell
npm install -D parcel
```
	 -D to indicate its a dev dependency and  no need to bundle for deployment
### npm install

 This command (when runs 1st time) will add 
* a dir `node_modules` in which all dependencies are kept
* package-lock.json: maintains detailed record of exact version of dependencies. 
 Like, what are the dependencies for `parcel` and what are their dependencies etc.
 * a section in package.json:
```json
  "devDependencies": {
    "parcel": "^2.12.0"
  }
```
* run `npm install` when want to create node_modules again using package.json (and package-lock.json if available)
#### Transitive dependency: 
dependencies having its own dependencies ( and so on).

### NPX
the command `npx` use to execute some executable package like
```js
npx parcel index.html
```
will run the app in a server, in my case, localhost:1234

### Parcel- What it is doing?
- dev build: building the deployment file in dev env
- Local server: hosting the deployed file in localhost
- HMR: Hot module reload/replacement, as soon as module code changes, it instantly re-deploy the new code and refresh in he browser to show new changes
	- For this to do fast, it caches state and uses file-watcher to keep scan of any file change.
- compression: creates the bundle in compressed way to reduce size
- code-minification:
- Differential-bundling: to support different/older browser
- code-splitting
- consistent-hashing
- Error suggestions by diagnostic
- support for host on https
- tree shaking- remove unnecessary codes
###### How to build for prod :
Run `npx parcel build index.html` (you may need to remove `"main": "App.js",` line from package.json as parcel does not need this).
As a result of the command only 3 files, 1 .css + 1 .js + 1 .html file will be created (maybe 5 files including .map for css and js to reduce file size and re-usability). and these 3 files will be enough to deploy to prod. **1 js file will contain all required code including all dependencies.** 