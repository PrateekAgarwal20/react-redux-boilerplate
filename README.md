# React Redux Boilerplate
This is a boilerplate for basic static websites. Other boilerplates I have published build off of this model.

## Table of Contents
* Installation
  * Running
* Usage
  * Making a new page
  * Adding CSS
  * Adding MongoDB Integration
  * Adding an state changing action
* Stack Used



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

### Adding CSS

### Adding MongoDB Integration
It's imperative to add an `env.sh` file. These files are already screened from git in the `.gitignore` file. In the `env.sh` file, add
```
export MONGODB_URI="your mongo db uri";
```
Then, in `server.js`, uncomment lines 3, 28, 31, and 39. `source env.sh` in your console and you're good to go.

## Stack Used
* Frontend Frameworks
  * React, Redux, React Router
* Backend Frameworks
  * Express
* Database Access
  * MongoDB, Mongoose
* Other
  * webpack, babel
