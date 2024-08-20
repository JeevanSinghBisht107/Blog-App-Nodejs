#Todo application (Backend)

## Description
This project is the backend API for a Blog Application. It provides a RESTful interface for managing Blogs. The backend handles Blog creation, fetching updating and deletion. It uses `Node.js` with `Express.js` for handling the server and `MongoDB` with `Mongoose` for the database. This repository only includes the backend; the frontend is not part of this project.

## Technologies Used
- **JavaScript**
- **Node.js**
- **Express.js**
- **MongoDB**

## npm Packages Used
- express
- express-async-handler
- mongoose
- bcryptjs
- dotenv
- jsonwebtoken
- cookie-parser
- morgan

## Prerequisites
To run the application:
- Node.js must be installed on your system.
- MongoDB database is required.
- Code editor (preferred: VS Code).
- Postman for API testing

## Installation and Setup
1. Download the source code to your desired location.
2. Open the code in your preferred code editor.
3. Install dependencies listed in the `package.json` file using the terminal:
	npm install or npm i

4. Create a `.env` file and enter PORT, MongoDB URI and JWT_SECRET:
    eg:-
	    PORT = 9000,
        MONGO_URI = your-mongo-uri,
        JWT_SECRET = "mySecret123"

5. In the terminal, run:
	node server.js or npm start

## Features
- users can register, Login and Logout.

**Password Hashing**
   - **Secure Password Storage**:
     - User passwords are securely hashed using the `bcrypt` module before being stored in the database. 
     - This ensures that even if the database is compromised, the actual passwords are not exposed.

**User Authentication with Cookies**
   - **Login/Logout**: 
     - The application uses cookie-based authentication with the help of the `cookie-parser` module. 
     - Users can log in by providing their credentials, and upon successful login, a JWT token is stored in an HTTP-only cookie. 
     - The user can then perform actions while authenticated, and the token is verified on each request.
     - The user can log out, which clears the authentication cookie.

**User Authorization**
   - **Role-Based Access Control**:
     - The application implements role-based authorization to restrict certain actions to admin users.
     - Regular users can create and update their own Blogs, but only admins have the rights to delete Blogs created by others.