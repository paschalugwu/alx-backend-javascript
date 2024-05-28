# 0x00. ES6 Basics

## Overview
This repository contains a series of projects focusing on ES6 basics and advanced concepts in JavaScript programming. Each project is designed to enhance your understanding of ES6 features and improve your skills in software linting.

## Projects
1. **0x00. ES6 Basics**
   - Weight: 1
   - Project Duration: May 27, 2024, 6:00 AM - May 28, 2024, 6:00 AM
   - Concepts Covered:
     - JavaScript programming
     - Software Linter
   - Learning Objectives:
     - Understand what ES6 is and its new features
     - Differentiate between constants and variables
     - Implement block-scoped variables
     - Utilize arrow functions and default parameters
     - Apply rest and spread function parameters
     - Implement string templating in ES6
     - Create objects and manipulate their properties in ES6
     - Understand iterators and for-of loops

## General Requirements
- All files executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All files should end with a new line
- A `README.md` file at the root of the project folder
- Code files should use the `.js` extension
- Testing with Jest Testing Framework
- Code analysis with ESLint using specific rules provided
- All functions must be exported

## Setup
1. Install NodeJS 12.11.x:
    ```bash
    curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
    sudo bash nodesource_setup.sh
    sudo apt install nodejs -y
    ```
2. Verify NodeJS and npm versions:
    ```bash
    nodejs -v
    npm -v
    ```
3. Install Jest, Babel, and ESLint:
    ```bash
    npm install
    ```

## Configuration Files
- `package.json`
  - Contains scripts for linting, testing, and development environment setup.
- `babel.config.js`
  - Babel configuration for preset environment targeting the current Node.js version.
- `.eslintrc.js`
  - ESLint configuration for linting rules, environment setup, and plugin configuration.

## Tasks
1. **Const or let?**
   - Modify functions to use `const` or `let` variables as appropriate.

2. **Block Scope**
   - Update variables to avoid overwriting inside conditional blocks.

3. **Arrow functions**
   - Rewrite functions using ES6 arrow function syntax.

4. **Parameter defaults**
   - Condense function internals using default parameter values.

5. **Rest parameter syntax for functions**
   - Modify a function to return the number of arguments passed using the rest parameter syntax.

6. **The wonders of spread syntax**
   - Concatenate arrays and a string using spread syntax.

7. **Take advantage of template literals**
   - Rewrite function return statements to use template literals.

8. **Object property value shorthand syntax**
   - Update an object's property assignment to use shorthand syntax.

9. **No need to create empty objects before adding in properties**
   - Rewrite a function to use ES6 computed property names.

10. **ES6 method properties**
    - Rewrite a function to use ES6 method properties.

11. **For...of Loops**
    - Rewrite a function to use ES6's `for...of` loop.

12. **Iterator**
    - Write a function to create an iterator for every employee in every department.

13. **Iterating through report objects**
    - Write a function to iterate through report objects and return every employee name in a string.

14. **Iterate through object**
    - Write a function to iterate through an object and return employee names.

## Repository Information
- **GitHub Repository:** [alx-backend-javascript](https://github.com/paschalugwu/alx-backend-javascript)
- **Directory:** 0x00-ES6_basic
- **Contact:** [Paschal Ugwu](mailto:ugwupaschal@gmail.com)

## License
Copyright © 2024 ALX, All rights reserved.
