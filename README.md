# `src` Subordinate module configuration 

```
src/
├── api        API handlers
├── assets     Images, Svg files
├── components React UI components
├── hooks      React custom hooks
├── modules    React useReducer
├── types      Type defination
└── utilities  Function handlers
```

# About #api
 * Api handlers such as HTTP methods working with Axios created and exported here
# Assets SVG + Images handler

* If there is a change in Icon, Logo, etc., add a file under `/ src / assets` and convert it to React component with the following command.
   --In the case of Icon
     `yarn svgr: icon`
   --For Logo
     `yarn svgr: logo`

# Component classification

* atoms
  * Minimum unit component
  * Reusable components
  * Do not use other components
  * In principle, do not have a margin that affects other components
* molecules
  * Components that combines atoms
  * Reusable components
  * atoms can be used
* organismos
  * A component with one meaning created by combining lower layers (atoms, molecules)
* templates
  * Components to be placed in combination with organism os
* pages
  * Units routed by react-router

# About #hooks
  * Create custom hooks here 
  * Add use at the beginning of each custom hook to help React easily defines which is a custom hook function, if not React will understand this is a Javascript function
# About # modules (useReducer and useContext related processing)

* Place useReducer and useContext related files under `src / modules`
* In principle, the directory directly under `src / modules` is a data unit.
* Have the following files for each module
   * index.ts
     --export reducer
   * actions.ts
     --Has Action type definition, Action
   * reducer.ts
     --Has store type definition and reducer processing

# About #types
 * Typescript defination created here
 * Create typescript files with .ts instead of .tsx

# About #utilities
 * Containing defined functions returning value when they called

# About styles containing Sass structure
* sass
|– base/ 
|     |– _all.scss 
|     |– _mixins.scss 
|     |– _reset.scss
|     |– _variables.scss
|     
|– layout/ 
|     |– _all.scss 
|     |– _header.scss 
|     |– _footer.scss  
| 
|– modules/
|     |– _all.scss 
|     |– _button.scss 
|     |– _card.scss  
| 
|– pages/ 
|     |– _all.scss 
|     |– _home.scss 
|     |– _about.scss  
|     |– _contact.scss 
|     |– _admin.scss 
|
|– state/ 
|     |– _all.scss 
|     |– _text.scss 
|     |– _space.scss 
|
 main.scss 


  * Base subdirectory: Contains scss files for the common content of the whole website
        _mixins.scss: contains declarations of common functions in the whole project
        _reset.scss: redeclare common properties
        _variables.scss: declares the variables used in the project. For example: color, size,...
  * Layout subdirectory: Contains scss files for the layout of the website
        _header.scss: contains the style declaration for the header tag
        _footer.scss: contains the style declaration for the footer tag
  * Modules subdirectory: Contains style small, reusable components of the website
        _button.scss: contains the style declaration for the button element thành
        _checkbox.scss: contains the style declaration for the checkbox element
  * State subdirectory: Contains the style of the state of small elements such as text, space, ...
        _text.scss: contains a detailed text style declaration
        _space.scss: contains the style declaration for the spacing between elements 



### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


