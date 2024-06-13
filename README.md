# ES6 Data Manipulation

## Project Overview
This project focuses on using advanced JavaScript ES6 features to manipulate data structures such as arrays, sets, maps, and typed arrays. The aim is to develop skills in applying methods like `map`, `filter`, `reduce`, and more to efficiently handle and process data.

## Resources
- **Array**
- **Typed Array**
- **Set Data Structure**
- **Map Data Structure**
- **WeakMap**

## Learning Objectives
By the end of this project, you should be able to:
- Use `map`, `filter`, and `reduce` on arrays.
- Understand and utilize typed arrays.
- Work with Set, Map, and WeakMap data structures.

## Requirements
- All files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x.
- Allowed editors: vi, vim, emacs, Visual Studio Code.
- All files should end with a new line.
- A `README.md` file at the root of the project folder is mandatory.
- Your code should use the `.js` extension.
- Code will be tested using Jest and the command `npm run test`.
- Code will be verified against lint using ESLint.
- Code needs to pass all tests and lint checks. Use `npm run full-test` to verify.
- All functions must be exported.

## Setup
### Install NodeJS 12.11.x
```sh
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

### Verify Installation
```sh
nodejs -v
# v12.11.1

npm -v
# 6.11.3
```

### Install Jest, Babel, and ESLint
In your project directory, use the supplied `package.json` and run:
```sh
npm install
```

### Configuration Files
Add the following configuration files to your project directory:
- `package.json`
- `babel.config.js`
- `.eslintrc.js`

## Tasks

### 0. Basic List of Objects
Create a function named `getListStudents` that returns an array of objects.
- This function should create and return an array of student objects, each having three attributes: `id`, `firstName`, and `location`.
- The array should include a predefined list of students.

### 1. More Mapping
Create a function `getListStudentIds` that returns an array of ids from a list of objects.
- This function takes an array of student objects and returns a new array containing only the ids of each student.
- If the input is not an array, the function should return an empty array.
- Use the `map` function to extract the ids.

### 2. Filter
Create a function `getStudentsByLocation` that returns an array of objects located in a specific city.
- This function should filter the array of student objects based on a given city.
- It takes a list of students and a city as parameters and returns only those students who are located in the specified city.
- Use the `filter` function to perform the filtering.

### 3. Reduce
Create a function `getStudentIdsSum` that returns the sum of all the student ids.
- This function should compute the sum of all student ids in the provided array of student objects.
- Use the `reduce` function to accumulate the sum of ids.

### 4. Combine
Create a function `updateStudentGradeByCity` that returns an array of students for a specific city with their new grades.
- This function takes a list of students, a city, and an array of new grade objects.
- It returns a new list of students for the specified city with their updated grades.
- If a student does not have a grade in the new grades array, their grade should be set to `N/A`.
- Use `filter` and `map` functions to achieve this.

### 5. Typed Arrays
Create a function `createInt8TypedArray` that returns a new ArrayBuffer with an Int8 value at a specific position.
- This function creates an `ArrayBuffer` of a given length and sets an `Int8` value at a specified position.
- If the position is outside the bounds of the buffer, an error should be thrown.
- Use `ArrayBuffer` and `DataView` to manage the buffer and its contents.

### 6. Set Data Structure
Create a function `setFromArray` that returns a Set from an array.
- This function converts an array to a Set, removing any duplicate elements.
- Use the `Set` constructor to create a Set from the array.

### 7. More Set Data Structure
Create a function `hasValuesFromArray` that returns a boolean if all elements in the array exist within the set.
- This function checks if all elements of a given array are present in a Set.
- It takes a Set and an array as arguments.
- Use the `every` function to verify the presence of each array element in the Set.

### 8. Clean Set
Create a function `cleanSet` that returns a string of all the set values that start with a specific string.
- This function filters set values that start with a given string and returns them as a single string separated by hyphens.
- Use `Array.from`, `filter`, and `map` functions to process the set and construct the resulting string.

### 9. Map Data Structure
Create a function `groceriesList` that returns a map of groceries with specific items and quantities.
- This function returns a `Map` with predefined grocery items as keys and their quantities as values.
- Use the `Map` constructor to create and populate the map.

### 10. More Map Data Structure
Create a function `updateUniqueItems` that returns an updated map for all items with initial quantity of 1.
- This function updates the quantity of items in a map where the initial quantity is 1 to 100.
- If the input is not a map, an error should be thrown.
- Use `forEach` to iterate over the map and update the quantities as needed.

### 11. Weak Link Data Structure
Export a constant instance of `WeakMap` and a function `queryAPI` to track endpoint queries.
- This task involves creating a `WeakMap` to track the number of times an endpoint is queried.
- The `queryAPI` function increments the count of queries for each endpoint and throws an error if the count exceeds a threshold.
- Use `WeakMap` to handle endpoint tracking and query counting.

## Repository
- **GitHub Repository**: `alx-backend-javascript`
- **Directory**: `0x03-ES6_data_manipulation`

