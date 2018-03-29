# React Redux Boilerplate
This is a boilerplate for basic static websites. Other boilerplates I have published build off of this model.

## Table of Contents
* Installation
  * Running
* Usage
  * Making a new page
  * Adding CSS
  * Adding a state changing action
  * Adding MongoDB Integration
* Stack Used
* Todos



## Installation
With node and npm, installation is simple:
```javascript
git clone https://github.com/PrateekAgarwal20/react-redux-boilerplate.git
cd react-redux-boilerplate
npm install
```
### Running
``` javascript
npm run dev
```
## Usage
The main purpose of this boilerplate is for making static webpages. For more dynamic frameworks, see other boilerplates given in other repos in [my profile](https://github.com/PrateekAgarwal20).

### Making A New Page
Within `./frontend/components/` add a new javascript file that corresponds with the page you want to render. See the existing examples for more detail.

Make sure to add a route within `./frontend/containers/AppContainer.js` to render the component you just created and a means to access it, by a `<Link\>` element or otherwise.

### Adding CSS
Currently, all css files are funneled through the `base.scss` file. All other scss files are imported into this file. For each distinct component with unique styling, create a new scss file. Inside the component, wrap the contents of the render div with the name of your scss file. For example, if you want to apply certain styles to everything in the NavBar:
1. Make a `nav.scss` file and add it as an import in `base.scss`
2. Wrap the entire return div in `NavBar.js` with `<nav><nav \>` tags.

For more general styles, add them to `base.scss` and apply them using the `className` field in html/jsx components.

### Adding A State Changing Action
1. Add the desired action as an exported function in a new file in `./frontend/actions/`.
2. Import and use the action in the relevant component(s). Don't forget to add it to `mapDispatchToProps`.
3. Add the reducer to a new file in `./frontend/reducers/`.
4. Import the new reducer file in `./frontend/reducers/index.js` and add it to the `combineReducers` function. Remember to name the new piece of state as you would like to access it.

### Adding MongoDB Integration
It's imperative to add an `env.sh` file. These files are already screened from git in the `.gitignore` file. In the `env.sh` file, add
```
export MONGODB_URI="your mongo db uri";
```
Then, in `server.js`, uncomment lines 3, 28, 31, and 39. `source env.sh` in your console and you're good to go.

To add more models to work with:
1. Add one schema per file to `./backend/models`. See the `user.js` for an example.
2. Import the schema from the newly created model file in `models.js`.
3. Create a model using the schema.
4. Add the model to the `module.exports` object.
Note: All models are pulled from the `models.js` file, so models must be part of the `models.js` file to be accessible from the rest of the file.

## Stack Used
* Frontend Frameworks
  * React, Redux, React Router, Redux Persist
* Backend Frameworks
  * Express
* Database Access
  * MongoDB, Mongoose
* Other
  * Webpack, Babel

## Todos
* Make sure persist actually works
* make sure chrome logging works as it does in Penn QA
