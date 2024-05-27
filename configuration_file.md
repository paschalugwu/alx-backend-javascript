# Complete Setup

Given the requirements and setup instructions provided in the project, here are the ways to perform all the necessary configurations and creation of virtual environment for the project:

1. **NodeJS Installation**:
   Follow the instructions on the project page to install NodeJS 12.11.x using the provided commands.

2. **Project Setup**:
   Use the provided `package.json`, `babel.config.js`, and `.eslintrc.js` files as specified in the project instructions.

Here's the guide based on the project's instructions:

### NodeJS Installation

1. **Install NodeJS 12.11.x**:
   Run the following commands in your home directory to install the required NodeJS version:
   ```sh
   curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
   sudo bash nodesource_setup.sh
   sudo apt install nodejs -y
   ```

2. **Verify the installation**:
   Ensure the correct versions of NodeJS and npm are installed:
   ```sh
   nodejs -v
   # Should output v12.11.1
   npm -v
   # Should output 6.11.3
   ```

### Project Setup

1. **Create a project directory**:
   ```sh
   mkdir alx-backend-javascript
   cd alx-backend-javascript
   ```

2. **Add configuration files**:
   Create and add the following files to your project directory with the provided contents:

   - **`package.json`**:
     ```json
     {
       "scripts": {
         "lint": "./node_modules/.bin/eslint",
         "check-lint": "lint [0-9]*.js",
         "dev": "npx babel-node",
         "test": "jest",
         "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
       },
       "devDependencies": {
         "@babel/core": "^7.6.0",
         "@babel/node": "^7.8.0",
         "@babel/preset-env": "^7.6.0",
         "eslint": "^6.4.0",
         "eslint-config-airbnb-base": "^14.0.0",
         "eslint-plugin-import": "^2.18.2",
         "eslint-plugin-jest": "^22.17.0",
         "jest": "^24.9.0"
       }
     }
     ```

   - **`babel.config.js`**:
     ```js
     module.exports = {
       presets: [
         [
           '@babel/preset-env',
           {
             targets: {
               node: 'current',
             },
           },
         ],
       ],
     };
     ```

   - **`.eslintrc.js`**:
     ```js
     module.exports = {
       env: {
         browser: false,
         es6: true,
         jest: true,
       },
       extends: [
         'airbnb-base',
         'plugin:jest/all',
       ],
       globals: {
         Atomics: 'readonly',
         SharedArrayBuffer: 'readonly',
       },
       parserOptions: {
         ecmaVersion: 2018,
         sourceType: 'module',
       },
       plugins: ['jest'],
       rules: {
         'no-console': 'off',
         'no-shadow': 'off',
         'no-restricted-syntax': [
           'error',
           'LabeledStatement',
           'WithStatement',
         ],
       },
       overrides:[
         {
           files: ['*.js'],
           excludedFiles: 'babel.config.js',
         }
       ]
     };
     ```

3. **Install dependencies**:
   Run `npm install` in your project directory to install Jest, Babel, and ESLint along with their dependencies:
   ```sh
   npm install
   ```

### Working in the Virtual Environment

With the correct NodeJS version installed and the project dependencies set up, you can work in your virtual environment. Here are some common commands:

- **Run scripts**:
  ```sh
  npm run dev <filename.js>
  ```

- **Run tests**:
  ```sh
  npm test
  ```

- **Lint the code**:
  ```sh
  npm run lint
  ```

By following these steps, you ensure that your project setup aligns with the given instructions and utilizes a virtual environment for managing dependencies and configurations.
