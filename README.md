![uPet Technical Test](https://user-images.githubusercontent.com/17162601/124177746-0f4ebf00-daca-11eb-809b-e2fbf66941f1.png)

##### What's Being Used?

- [react](http://facebook.github.io/react/) for managing the presentation logic of application.
- [typescript](https://www.npmjs.com/package/typescript) to use the typescript features in JS.
- [redux](https://www.npmjs.com/package/redux) for generating and managing state model.
- [reselect](https://www.npmjs.com/package/reselect) memoized selectors for redux state.
- [redux-saga](https://www.npmjs.com/package/redux-saga) for redux middleware.
- [axios](https://www.npmjs.com/package/axios) for making AJAX calls to a server.
- [material-ui](https://www.npmjs.com/package/@material-ui/core) for frontend template.

##### For Devevelopment

- [prettier](https://www.npmjs.com/package/prettier) for code formatting.
- [husky](https://www.npmjs.com/package/husky) for preventing bad git commit and push.
- [lint-staged](https://www.npmjs.com/package/lint-staged) for running lint on stagged files.

## Getting Started

In order to get started developing, you'll need to do a few things first.

1. Install all of the `node_modules` required for the package. Depending on the computer's configuration, you may need to prefix this command with a `sudo`.

```
npm install
```

or

```
sudo npm install
```

`yarn` can be used it is already installed

```
yarn install
```

or

```
sudo yarn install
```

2. Lastly, run the start command to get the project off the ground.

```
npm start
```

or

```
yarn start
```

3. Head over to [http://localhost:3000/upet-frontend-test](http://localhost:3000/upet-frontend-test) to see the app live!

## Live Url

[https://ahmadfaraz629.github.io/upet-frontend-test](https://ahmadfaraz629.github.io/upet-frontend-test)

## Form Submission

Form submission result can be views at [https://beeceptor.com/console/upett](https://beeceptor.com/console/upett)
Keep it open in the browser and then submit something it will receive the payload from the app

## File Structure

### build/

This is where application will be compiled. Assets, like images and fonts, should be placed directly within this folder. Also in this folder is a default `index.html` file for serving up the application.

### src/

The client folder houses the client application for project. This is where client-side Javascript components (and their directly accompanying styles) live.

## App Components

### components/

Components contains all the feature of blocks application page. Components should work like feature based widgets and should be rendered through the pages.

### pages/

Pages contains all the application pages or top level components.

### store/

Store directory has the redux store configuration and root reducer of app.

### store/actions

Actions directory contain action-types, action-creators for each app module.

### store/reducers

Reducers directory contain reducers for each app module.

### store/sagas

Sagas directory contain sagas for each app module.

### types/

Types directory any custom types by any part of application.

### utils/

Utilities that can be used by any part of application.
