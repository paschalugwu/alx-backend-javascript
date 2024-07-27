# NodeJS Basics Project

## Overview
This project explores the foundational concepts of Node.js, focusing on practical tasks that demonstrate the use of core Node.js features, Express.js, and related tools. The project covers executing JavaScript in Node.js, handling HTTP requests, reading files, and setting up a small HTTP server, both with Node's HTTP module and Express.

## Learning Objectives
By the end of this project, you should be able to:
- Run JavaScript using Node.js.
- Utilize Node.js modules effectively.
- Read files using specific Node.js modules.
- Access command line arguments and environment variables using the `process` object.
- Create HTTP servers using both Node.js and Express.
- Implement advanced routing with Express.
- Use ES6 features in Node.js with Babel.
- Develop more efficiently using Nodemon.

## Project Structure
The project is organized into multiple tasks, each focusing on a specific aspect of Node.js and Express.js:

### 0. Executing Basic JavaScript with Node.js
**File:** `0-console.js`  
A simple function `displayMessage` is implemented to print a message to the console using Node.js.

### 1. Using Process stdin
**File:** `1-stdin.js`  
A command-line application prompts the user for their name and displays it. The application demonstrates how to handle user input and graceful termination messages.

### 2. Reading a File Synchronously
**File:** `2-read_file.js`  
A function `countStudents` reads a CSV file synchronously and logs the total number of students and students per field.

### 3. Reading a File Asynchronously
**File:** `3-read_file_async.js`  
This task is similar to the previous one but uses asynchronous file reading to avoid blocking the event loop.

### 4. Creating a Basic HTTP Server with Node's HTTP Module
**File:** `4-http.js`  
A basic HTTP server is set up to respond with "Hello Holberton School!" for any request.

### 5. Creating a More Complex HTTP Server
**File:** `5-http.js`  
The server is extended to handle different routes, including a `/students` route that displays student information from a CSV file.

### 6. Creating a Basic HTTP Server with Express
**File:** `6-http_express.js`  
An Express.js server is set up, responding with "Hello Holberton School!" at the root endpoint.

### 7. Creating a More Complex HTTP Server with Express
**File:** `7-http_express.js`  
The Express server handles multiple routes, including a dynamic route for displaying students by major.

### 8. Organizing a Complex HTTP Server
**Directory:** `full_server/`  
A full-fledged server setup using Express, with organized directories for controllers and routes. It includes:
- **Controllers:** Handles logic for different endpoints.
  - `AppController.js`: Handles the root route.
  - `StudentsController.js`: Manages routes related to student data.
- **Routes:** Defines routing logic.
  - `index.js`: Connects endpoints to their respective controllers.
- **Utilities:**
  - `utils.js`: Contains helper functions like `readDatabase` for reading student data.

## Setup and Usage
1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Running the Server:**
   ```bash
   npm run dev
   ```
   This command uses `nodemon` and `babel-node` to run the server with ES6 support.

3. **Testing and Linting:**
   - Run tests: `npm run test`
   - Lint code: `npm run lint`

## Contributing
Please follow the project's coding standards, ensuring that all contributions pass linting and tests.
