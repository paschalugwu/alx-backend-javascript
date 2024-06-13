# 0x01. ES6 Promises

## Overview
This project focuses on understanding and implementing ES6 Promises in JavaScript. By the end of this project, you should be able to handle asynchronous operations using Promises, `async`/`await`, and related methods effectively.

## Learning Objectives
- Understand Promises: what they are, why and how to use them.
- Use `.then()`, `.catch()`, and `.finally()` methods.
- Use `async` functions and the `await` operator.
- Handle errors using `try`/`catch`.

## Requirements
- All files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x.
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`.
- All files should end with a new line.
- A `README.md` file at the root of the project folder is mandatory.
- Code must use the `.js` extension.
- Code will be tested using Jest and the command `npm run test`.
- Code will be verified against lint using ESLint.
- All functions must be exported.

## Setup

### Install NodeJS 12.11.x
```bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y

nodejs -v
# v12.11.1

npm -v
# 6.11.3
```

### Install Jest, Babel, and ESLint
In your project directory, install the dependencies by running:
```bash
npm install
```

## Configuration Files

### `package.json`
Ensure you have a `package.json` with the required dependencies:
```json
{
  "name": "0x01-es6_promises",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "jest",
    "lint": "eslint ."
  },
  "dependencies": {
    "babel-jest": "^24.9.0",
    "babel-preset-env": "^1.7.0",
    "eslint": "^6.5.1",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "jest": "^24.9.0"
  },
  "devDependencies": {},
  "author": "",
  "license": "ISC"
}
```

### `babel.config.js`
```js
module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }]
  ]
};
```

### `.eslintrc.js`
```js
module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: 'airbnb-base',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {},
};
```

### `utils.js`
Include functions `uploadPhoto` and `createUser`:
```js
export function uploadPhoto() {
  return Promise.resolve({ status: 200, body: 'photo-profile-1' });
}

export function createUser() {
  return Promise.resolve({ firstName: 'Guillaume', lastName: 'Salva' });
}
```

## Tasks

### 0. Keep every promise you make and only make promises you can keep
Implement a function that returns a promise:
```js
// File: 0-promise.js
export default function getResponseFromAPI() {
  return new Promise((resolve) => resolve());
}
```

### 1. Don't make a promise...if you know you can't keep it
Implement a function that returns a promise based on a boolean parameter:
```js
// File: 1-promise.js
export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
```

### 2. Catch me if you can!
Handle the response of a promise:
```js
// File: 2-then.js
export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({ status: 200, body: 'success' }))
    .catch(() => new Error())
    .finally(() => console.log('Got a response from the API'));
}
```

### 3. Handle multiple successful promises
Handle multiple promises and log the result:
```js
// File: 3-all.js
import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((values) => {
      console.log(`${values[0].body} ${values[1].firstName} ${values[1].lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
```

### 4. Simple promise
Return a resolved promise with user data:
```js
// File: 4-user-promise.js
export default function signUpUser(firstName, lastName) {
  return Promise.resolve({ firstName, lastName });
}
```

### 5. Reject the promises
Return a rejected promise with an error message:
```js
// File: 5-photo-reject.js
export default function uploadPhoto(filename) {
  return Promise.reject(new Error(`${filename} cannot be processed`));
}
```

### 6. Handle multiple promises
Handle multiple promises and return their results:
```js
// File: 6-final-user.js
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUp = signUpUser(firstName, lastName);
  const upload = uploadPhoto(fileName);

  return Promise.allSettled([signUp, upload])
    .then((results) => results.map((result) => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : result.reason,
    })));
}
```

### 7. Load balancer
Return the value from the first resolved promise:
```js
// File: 7-load_balancer.js
export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]);
}
```

### 8. Throw error / try catch
Throw an error if dividing by zero:
```js
// File: 8-try.js
export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('cannot divide by 0');
  }
  return numerator / denominator;
}
```

### 9. Throw an error
Handle errors and always log a message:
```js
// File: 9-try.js
export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    queue.push(`Error: ${error.message}`);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
```

### 10. Await / Async
Use async/await to handle asynchronous operations:
```js
// File: 100-await.js
import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    return { photo, user };
  } catch (error) {
    return { photo: null, user: null };
  }
}
```

## Repository Structure
```
alx-backend-javascript/
├── 0x01-ES6_promise/
│   ├── 0-promise.js
│   ├── 1-promise.js
│   ├── 2-then.js
│   ├── 3-all.js
│   ├── 4-user-promise.js
│   ├── 5-photo-reject.js
│   ├── 6-final-user.js
│   ├── 7-load_balancer.js
│   ├── 8-try.js
│   ├── 9-try.js
│   ├── 100-await.js
│   ├── utils.js
│   ├── package.json
│   ├── babel.config.js
│   └── .eslintrc.js
└── README.md
```

## License
© 2024 ALX, All rights reserved.
