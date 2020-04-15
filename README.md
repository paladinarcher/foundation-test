# foundation-test

This project is a testing ground for VA's foundation-react compoents.  It was built using create-react-app which provided
the project's scaffolding. The rest were customizations needed to bring the components in and drop them all down on a
single page.

## Steps taken to set this project up

You won't need to do this in order to run foundation-test.  I just wanted to record the steps I took to set this project up
for reference on new projects.

1. Install node.js
2. Install yarn
3. Create a React.js application.
```
mkdir app
cd app
npx create-react-app .
```
4. Add foundation and foundation-react dependencies to the app.
```
npm install --save @department-of-veterans-affairs/formation
npm install --save @department-of-veterans-affairs/formation-react
```
5. Start the web server.
```
npm start
```
6. In App.js, replace the JSX inside the parens () of the return statement in the App function with:
```html
    <div className="usa-width-one-whole">
    </div>
```
7. In App.css, clear out the file and paste the following:
```css
@import '../node_modules/@department-of-veterans-affairs/formation/dist/formation.min.css';
```
8. Create new componets in src/components and use them in App.js.

## Handy VS Code Extensions

* [Node.js Extension Pack](https://marketplace.visualstudio.com/items?itemName=waderyan.nodejs-extension-pack)
* [Simple React Snippets](https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets)

## Chrome Plug-ins

* [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) - NOTE: Also available for Microsft Edge (Chromium version).

**EVERYTHING PAST THIS POINT WAS PART OF THE ORIGINAL README.MD THAT CREATE-REACT-APP CREATED**

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
