# Unit Testing in JavaScript Project

## Overview

This project demonstrates the application of unit testing in JavaScript using popular frameworks and libraries such as Mocha, Chai, and Sinon. The tasks involve setting up test environments, writing unit and integration tests, and utilizing various testing techniques like spies and stubs.

## Learning Objectives

By the end of this project, you will be able to:
- Write test suites using Mocha.
- Utilize assertion libraries such as Node's built-in `assert` and Chai.
- Organize and manage tests, including handling edge cases.
- Implement and use spies, stubs, and hooks in tests.
- Conduct unit testing with asynchronous functions.
- Perform basic integration testing for Node.js applications.

## Project Structure

### Task 0: Basic Test with Mocha and Node Assertion Library
- **Objective:** Create a function that rounds two numbers and returns their sum, then write test cases using Mocha and the `assert` library.
- **Files:** `0-calcul.js`, `0-calcul.test.js`

### Task 1: Combining Descriptions
- **Objective:** Extend the function to support different operations (SUM, SUBTRACT, DIVIDE) and write corresponding test cases.
- **Files:** `1-calcul.js`, `1-calcul.test.js`

### Task 2: Basic Test Using Chai Assertion Library
- **Objective:** Rewrite the previous test suite using Chai's `expect` for a behavior-driven development (BDD) approach.
- **Files:** `2-calcul_chai.js`, `2-calcul_chai.test.js`

### Task 3: Spies
- **Objective:** Use Sinon to create a spy for monitoring the function's behavior during tests.
- **Files:** `utils.js`, `3-payment.js`, `3-payment.test.js`

### Task 4: Stubs
- **Objective:** Use Sinon stubs to replace function behavior, making tests more efficient and controlled.
- **Files:** `4-payment.js`, `4-payment.test.js`

### Task 5: Hooks
- **Objective:** Implement `beforeEach` and `afterEach` hooks to manage the setup and teardown of test environments.
- **Files:** `5-payment.js`, `5-payment.test.js`

### Task 6: Async Tests with `done`
- **Objective:** Write tests for asynchronous functions, ensuring proper handling of asynchronous operations.
- **Files:** `6-payment_token.js`, `6-payment_token.test.js`

### Task 7: Skip
- **Objective:** Demonstrate the use of `skip` to temporarily bypass failing tests.
- **Files:** `7-skip.test.js`

### Task 8: Basic Integration Testing
- **Objective:** Set up an Express server and write integration tests for its endpoints.
- **Files:** `8-api/api.js`, `8-api/api.test.js`, `8-api/package.json`

### Task 9: Regex Integration Testing
- **Objective:** Implement and test endpoints with parameterized routes, ensuring proper handling and validation.
- **Files:** `9-api/api.js`, `9-api/api.test.js`, `9-api/package.json`

### Task 10: Deep Equality & Post Integration Testing
- **Objective:** Add more complex endpoints, including POST requests, and test using deep equality assertions.
- **Files:** `10-api/api.js`, `10-api/api.test.js`, `10-api/package.json`

## Setup and Usage

1. **Clone the Repository:** 
   ```sh
   git clone <repository-url>
   cd 0x06-unittests_in_js
   ```

2. **Install Dependencies:** 
   ```sh
   npm install
   ```

3. **Run Tests:**
   Use the following command to run the test suites for the respective tasks:
   ```sh
   npm test <task-file>
   ```

## Conclusion

This project provides a comprehensive overview of unit and integration testing in JavaScript, equipping you with the skills to ensure code quality and reliability in web applications.
