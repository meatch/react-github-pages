# CRA and Github Pages

## Overview

The ability to leverage Github to serve up a create react app. Driver for this is teaching students and leveraging a free resource.

This supports

- Create React App
- React Router Dom (using HashRouter)
- Tested with Open Source API call

## What makes this work? ...gh-pages package

<https://www.npmjs.com/package/gh-pages>

This package will build and deploy your app to a separate branch on your github repo called gh-pages. This appears to be a standard/default for Git Hub Pages. See your Github repo Settings > Pages section.

### package.json changes

The following to NPM commands are added to you package json

```json
{
    "scripts": {
        "predeploy": "npm run build",
        "deploy": "git push origin master && gh-pages -d build"
        // + the rest of your commands
    }
}
```

Add homepage matching your github pages repo replacing {{USERNAME}} with your github user, and {{REPO-NAME}} witih the github repo you created

```json
{
    "homepage": "https://{{USERNAME}}.github.io/{{REPO-NAME}}"
    // the rest of your package.json config
}
```

### Deployment

Your repo commits do not actually need to be pushed for the deployment to work. However, to keep things in sync I recc the following

1. `git add .`
2. `git commit -m "Your commit message"`
3. `git push origin master`
4. `npm run deploy` (this is what build and deploys your chaanges to gh-pages)

## React Router Dom

In order for CRA to work with a subfolder structure you have a couple of options.

1. Simplest = use `HashRouter` instead of `BrowserRouter`
2. You can change the `basename` of your `BrowserRouter` to match your `/{{REPO-NAME}}`. This makes it more challenging for local development, as it will be inconsistent. There may be some convoluted ways to make both work, but `HashRouter` works out of the box no changes.
    - React Router Dom < 6 `<BrowserRouter basename="who/users">` [docs](https://v5.reactrouter.com/web/api/BrowserRouter/basename-string)
    - React Router Dom >= 6 `<Routes basename="who/users">` [undocumented](https://github.com/remix-run/react-router/issues/7128#issuecomment-582591472)

## Vite Images

Images cannot be root relative strings, they must be React direct imports.

```js
import imgSrc from './images/somefile.jpg';
```

### Add to Vite config

```js
const viteConfig = {
   build: {
       outDir: './build',
   },
   base: '/{{REPO-NAME}}/',
}
```
