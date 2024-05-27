# Complete Setup

To ensure all installations and configurations are made only in the virtual environment, you can use `nvm` (Node Version Manager) to manage your NodeJS version and keep your project dependencies isolated. Here's a step-by-step guide tailored to your needs:

### Step 1: Install `nvm`

First, install `nvm` to manage NodeJS versions:

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

Add `nvm` to your shell profile by adding the following lines to your `.bashrc` or `.zshrc` file:

```sh
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```

Reload your shell configuration:

```sh
source ~/.bashrc  # or source ~/.zshrc
```

### Step 2: Install NodeJS Using `nvm`

With `nvm` installed, install and use the required NodeJS version:

```sh
nvm install 12.11.1
nvm use 12.11.1
```

Verify the installation:

```sh
node -v  # Should output v12.11.1
npm -v   # Should output 6.11.3
```

### Step 3: Set Up the Project

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

### Step 4: Install Dependencies

Run `npm install` in your project directory to install Jest, Babel, and ESLint along with their dependencies:

```sh
npm install
```

### Step 5: Working in the Virtual Environment

With `nvm` managing your NodeJS version and dependencies installed in your project directory, you can now work within this virtual environment. Use the following commands for common tasks:

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

By following these steps, all your installations and configurations will be isolated within the virtual environment created by `nvm` and your project directory. This ensures that your setup does not interfere with global packages or other projects.
