# Project - Student Registration System

## Project Overview

This is a simple Node.js-based student registration system that allows students to register via an HTML form, which is processed on the server. The server uses `http`, `fs`, and `querystring` modules to handle client requests and store user data in a JSON file.

The following functionalities are included:
1. **Student Registration**: Students can register using a form, and their data is stored in a JSON file.
2. **Student List**: Registered students' data can be viewed in JSON format.
3. **Error Handling**: Proper error handling for GET and POST requests.

---

## Modules Used

- **http**: Used to create the server and handle HTTP requests and responses.
- **fs**: Used to read from and write to files.
- **querystring**: Used to parse URL-encoded data from the registration form.

---

## Endpoints

### 1. GET Requests

- **`/`**:  
  - **Method**: `GET`
  - Displays all the registered users as a JSON response.
  - **Response**: List of all users in JSON format.
  - **Example**: `http://localhost:3000/`
  - **Error Handling**: If the file does not exist, it returns `Server Error`.

- **`/allstudent`**:  
  - **Method**: `GET`
  - Displays the HTML file `allstudent.html`.
  - **Response**: Returns `allstudent.html`.
  - **Error Handling**: If the file is not found, it returns `Server Error`.

- **`/register`**:  
  - **Method**: `GET`
  - Displays the registration form (`register.html`).
  - **Response**: Returns `register.html`.
  - **Error Handling**: If the file is not found, it returns `Server Error`.

- **404 Not Found**:  
  - For any unrecognized route, the server will respond with a `404 Not Found` error.

### 2. POST Requests

- **`/register`**:  
  - **Method**: `POST`
  - This route handles the student registration form data and stores the information in a JSON file.
  - **Body**: Data submitted via the registration form in URL-encoded format.
  - **Response**: On success, it returns "Registration successful!".
  - **Error Handling**: If any error occurs during data processing, it returns `Not Found in POST request`.

---

## Code Walkthrough

1. **Server Creation**  
   The server listens for requests on port `3000` using the `http` module.

2. **GET Request Handling**  
   - **Home Route (`/`)**: Displays the data from `User.json` file.
   - **`/allstudent`**: Returns the HTML file `allstudent.html` to show the list of students.
   - **`/register`**: Returns the `register.html` form to allow users to register.

3. **POST Request Handling**  
   - **`/register`**: Processes the form data when a user submits the registration form. The data is parsed using the `querystring` module and stored in the `User.json` file. If the file already contains data, the new data is appended to it. If the file doesn't exist, it creates a new JSON file and stores the data.

---

## Folder Structure
-**project-folder** </br>

├── allstudent.html       # HTML file to display all students.

├── register.html         # HTML registration form.

├── User.json             # JSON file to store user data.

├── server.js             # Node.js server script (this file).



## Running the Application
Clone or download the repository to your local machine.
Navigate to the project folder in your terminal.


-**Run the following command to install dependencies (if any):**
bash
`npm install`

-**Start the server by running:**
bash
`node server.js`

The server will be accessible at http://localhost:3000/.</br>
To view the registration form: http://localhost:3000/register</br>
To see all registered students: http://localhost:3000/allstudent</br>


- **Error Handling**

500 Server Error: Occurs when there is an issue reading or writing files.
404 Not Found: Returned when an invalid route or method is accessed.

## Conclusion
This simple registration system provides basic functionalities for adding, storing, and viewing student information via an HTTP server in Node.js. It demonstrates how to handle file-based data and how to serve HTML forms and JSON data using Node.js built-in modules.

Feel free to modify and extend this project based on your needs, such as adding more routes, validation, or connecting to a database.

