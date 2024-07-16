# Course Management Backend

This repository contains the backend implementation for a Course Management system built using Node.js, Express, and Sequelize. This backend provides APIs for managing courses, instructors, students, and enrollments.

## Features

- User authentication and authorization
- Password encryption
- Course creation and management
- Student enrollment and management
- Instructor management
- RESTful API endpoints
- Data validation and error handling

## Technologies Used

- Node.js
- Express.js
- Sequelize
- MySQL
- JWT (JSON Web Tokens) for authentication
- bcrypt for password hashing
- node-input-validator
- dotenv for environment variables

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v14 or higher)
- Sequelize
- MySQL

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/satyansh-mittal/CourseManagement-Backend-NodeJS.git
   cd CourseManagement-Backend-NodeJS

2. Install dependencies:
   ```bash
   cd CourseManagement-Backend-NodeJS
   npm install
   ```


3. Set up environment variables:

   Create a `.env` file in the root directory and add the following variables:
   ```plaintext
   PORT=3000
   TOKEN_HEADER_KEY='Authorization'
   JWT_SECRET=your_jwt_secret_key
   ```
4. Run database migrations:
   ```bash
   npx sequelize-cli db:migrate

### Running the Application

1. Start the application:
   ```bash
   npm start
  The server should now be running at `http://localhost:3000`.

2. To run the application in development mode with automatic restarts on file changes, use:
   ```bash
   npm run dev

  This requires `nodemon` to be installed globally. You can install it using:
  ```bash
    npm install -g nodemon
  ```

  Once nodemon is installed, exit the bash shell by typing:
  ```bash
     exit
  ```

3. Ensure that the MySQL server is running and that the database specified in your /utils/index file is accessible or create a new database in MySQL.


## API Endpoints

1. **POST /api/auth/register:** Register a new user.
2. **POST /api/auth/login:** User login to obtain JWT token.
3. **GET /api/courses:** Retrieve all courses.
4. **POST /api/courses:** Create a new course.
5. **GET /api/courses/:id:** Retrieve a specific course by ID.
6. **PUT /api/courses/:id:** Update a specific course by ID.
7. **DELETE /api/courses/:id:** Delete a specific course by ID.
8. **GET /api/users:** Retrieve all users.
9. **POST /api/users:** Create a new user.
10. **GET /api/users/:id:** Retrieve a specific user by ID.
11. **PUT /api/users/:id:** Update a specific user by ID.
12. **DELETE /api/users/:id:** Delete a specific user by ID.

## Contributing
  Contributions are welcome! Fork the repository and submit a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
```vbnet
Feel free to customize it further based on specific functionalities or additional information you want to highlight about your project.
```

