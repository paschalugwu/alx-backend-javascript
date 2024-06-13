# 0x02. ES6 Classes

## Overview
This project focuses on object-oriented programming (OOP) in JavaScript using ES6 classes. You will learn how to define and manipulate classes, including adding methods, using static methods, extending classes, and using metaprogramming.

## Learning Objectives
By the end of this project, you should be able to explain the following without the help of Google:
- How to define a Class
- How to add methods to a class
- Why and how to add a static method to a class
- How to extend a class from another
- Metaprogramming and symbols

## Resources
Read or watch:
- [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [Metaprogramming](https://developer.mozilla.org/en-US/docs/Glossary/Metaprogramming)

## Requirements
- All files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All files should end with a new line
- A `README.md` file at the root of the project folder is mandatory
- Your code should use the `.js` extension
- Your code will be tested using Jest and the command `npm run test`
- Your code will be verified against lint using ESLint
- Your code needs to pass all the tests and lint checks (`npm run full-test`)

## Setup

### Install NodeJS 12.11.x
```sh
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
nodejs -v  # Should output v12.11.1
npm -v  # Should output 6.11.3
```

### Install Jest, Babel, and ESLint
In your project directory, use the provided `package.json` and run:
```sh
npm install
```

### Configuration files

#### package.json
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
    "@babel/preset-env": "^7.6.0",
    "@babel/node": "^7.8.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  }
}
```

#### babel.config.js
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

#### .eslintrc.js
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
    'max-classes-per-file': 'off',
    'no-underscore-dangle': 'off',
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

### Running the Project
Ensure all dependencies are installed:
```sh
npm install
```

To run lint checks and tests:
```sh
npm run full-test
```

## Tasks

### Task 0: You used to attend a place like this at some point
**File:** `0-classroom.js`

**Description:**
Define a `ClassRoom` class. The class should have one attribute named `maxStudentsSize` (number) and a constructor that accepts a number as an argument and initializes `maxStudentsSize` with this value.

### Task 1: Let's make some classrooms
**File:** `1-make_classrooms.js`

**Description:**
Create a function named `initializeRooms` that returns an array of `ClassRoom` objects. The function should create three instances of the `ClassRoom` class with the following sizes: 19, 20, and 34.

### Task 2: A Course, Getters, and Setters
**File:** `2-hbtn_course.js`

**Description:**
Define a `HolbertonCourse` class with the following attributes:
- `name` (String)
- `length` (Number)
- `students` (Array of Strings)

Implement getters and setters for each attribute. Ensure that:
- `name` is always a string.
- `length` is always a number.
- `students` is always an array of strings.

### Task 3: Methods, static methods, computed methods names..... MONEY
**File:** `3-currency.js`

**Description:**
Define a `Currency` class with the following attributes:
- `code` (String)
- `name` (String)

The class should have a constructor that initializes `code` and `name`, and the following methods:
- `displayFullCurrency()`: Returns a string in the format: `name (code)`.

### Task 4: Pricing
**File:** `4-pricing.js`

**Description:**
Define a `Pricing` class with the following attributes:
- `amount` (Number)
- `currency` (Currency)

The class should have a constructor that initializes `amount` and `currency`, and the following methods:
- `displayFullPrice()`: Returns a string in the format: `amount currency_name (currency_code)`.
- `convertPrice(amount, conversionRate)`: A static method that converts the price to another currency using the conversion rate.

### Task 5: A Building
**File:** `5-building.js`

**Description:**
Define an abstract `Building` class with the following attributes:
- `sqft` (Number)

The class should have a constructor that initializes `sqft`, and a method:
- `evacuationWarningMessage()`: This method should be defined in a subclass (it's an abstract method).

### Task 6: Inheritance
**File:** `6-sky_high.js`

**Description:**
Define a `SkyHighBuilding` class that extends `Building`. The class should have the following attributes:
- `sqft` (Number, inherited)
- `floors` (Number)

The class should have a constructor that initializes `sqft` and `floors`, and override the `evacuationWarningMessage()` method to return: `"Evacuate slowly the NUMBER_OF_FLOORS floors"`, where `NUMBER_OF_FLOORS` is the value of the `floors` attribute.

### Task 7: Airport
**File:** `7-airport.js`

**Description:**
Define an `Airport` class with the following attributes:
- `name` (String)
- `code` (String)

The class should have a constructor that initializes `name` and `code`, and a method:
- `toString()`: Returns a string representation of the airport in the format: `[object code]`, where `code` is the value of the `code` attribute.

### Task 8: Primitive - Holberton Class
**File:** `8-hbtn_class.js`

**Description:**
Define a `HolbertonClass` class with the following attributes:
- `size` (Number)
- `location` (String)

The class should have a constructor that initializes `size` and `location`, and methods:
- `valueOf()`: Returns the value of the `size` attribute.
- `toString()`: Returns the value of the `location` attribute.

### Task 9: Hoisting
**File:** `9-hoisting.js`

**Description:**
In this task, you will fix the provided code so that it works correctly despite issues with hoisting. This involves ensuring that the class definition is correct and follows best practices.

### Task 10: Vroom
**File:** `10-car.js`

**Description:**
Define a `Car` class with the following attributes:
- `brand` (String)
- `motor` (String)
- `color` (String)

The class should have a constructor that initializes `brand`, `motor`, and `color`, and methods:
- `cloneCar()`: Returns a new object of the class with the same attribute values.

### Task 11: EVcar
**File:** `100-evcar.js`

**Description:**
Define an `EVCar` class that extends `Car`. The class should have the following attributes:
- `brand` (String, inherited)
- `motor` (String, inherited)
- `color` (String, inherited)
- `range` (String)

The class should have a constructor that initializes `brand`, `motor`, `color`, and `range`, and override the `cloneCar()` method to return a new object of the `Car` class (not `EVCar`) with the same attribute values.
