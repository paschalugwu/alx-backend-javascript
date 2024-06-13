# 0x03. ES6 Data Manipulation

## Overview

This project covers various aspects of ES6 data manipulation, focusing on array methods, typed arrays, sets, maps, and weak maps. By the end of this project, you will be able to use `map`, `filter`, and `reduce` on arrays, understand typed arrays, and work with different data structures like sets, maps, and weak maps.

## Learning Objectives

- Use `map`, `filter`, and `reduce` on arrays.
- Understand and use typed arrays.
- Work with Set, Map, and WeakMap data structures.

## Requirements

- Files executed on Ubuntu 18.04 LTS using NodeJS 12.11.x.
- Allowed editors: vi, vim, emacs, Visual Studio Code.
- All files should end with a new line.
- A README.md file at the root of the project is mandatory.
- Code should use the `.js` extension.
- Code tested using Jest and the command `npm run test`.
- Code verified against lint using ESLint.
- All functions must be exported.

## Setup

### Install NodeJS 12.11.x

```sh
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

Verify installation:

```sh
nodejs -v
# v12.11.1
npm -v
# 6.11.3
```

### Install Jest, Babel, and ESLint

In your project directory, install the required packages:

```sh
npm install
```

## Configuration Files

Add the following configuration files to your project directory:

- `package.json`
- `babel.config.js`
- `.eslintrc.js`

## Tasks

### 0. Basic List of Objects

Create a function `getListStudents` that returns an array of objects, each containing `id`, `firstName`, and `location`. 

### 1. More Mapping

Create a function `getListStudentIds` that returns an array of ids from an array of objects. If the argument is not an array, return an empty array. Use the `map` function.

### 2. Filter

Create a function `getStudentsByLocation` that returns an array of objects located in a specific city. Use the `filter` function.

### 3. Reduce

Create a function `getStudentIdsSum` that returns the sum of all student ids. Use the `reduce` function.

### 4. Combine

Create a function `updateStudentGradeByCity` that returns an array of students for a specific city with their new grade. Use `filter` and `map` combined.

### 5. Typed Arrays

Create a function `createInt8TypedArray` that returns a new `ArrayBuffer` with an Int8 value at a specific position. If the position is outside range, throw an error.

### 6. Set Data Structure

Create a function `setFromArray` that returns a Set from an array.

### 7. More Set Data Structure

Create a function `hasValuesFromArray` that returns `true` if all elements in the array exist in the set, otherwise `false`.

### 8. Clean Set

Create a function `cleanSet` that returns a string of all set values starting with a specific string, separated by `-`.

### 9. Map Data Structure

Create a function `groceriesList` that returns a map of groceries with their quantities.

### 10. More Map Data Structure

Create a function `updateUniqueItems` that updates the quantity to 100 for all items initially set to 1. If the argument is not a map, throw an error.

### 11. Weak Link Data Structure (Advanced)

Export a `WeakMap` instance and a function `queryAPI`. Track the number of times `queryAPI` is called for each endpoint and throw an error if the number of queries is >= 5.

## Repository

- GitHub repository: `alx-backend-javascript`
- Directory: `0x03-ES6_data_manipulation`

---

**Note:** This project involves implementing and testing functions that manipulate data structures in JavaScript using ES6 features. Ensure your implementations pass all tests and adhere to best practices.
