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

1. **Authentication**
   - POST `/api/auth/register`: Registers a new user.
   - POST `/api/auth/login`: Authenticates a user and returns a JWT.

2. **Courses**
   - GET `/api/courses`: Retrieves all courses.
   - POST `/api/courses`: Creates a new course.
   - GET `/api/courses/:id`: Retrieves a specific course by ID.
   - PUT `/api/courses/:id`: Updates a specific course by ID.
   - DELETE `/api/courses/:id`: Deletes a specific course by ID.

3. **Students**
   - GET `/api/students`: Retrieves all students.
   - POST `/api/students`: Adds a new student.
   - GET `/api/students/:id`: Retrieves a specific student by ID.
   - PUT `/api/students/:id`: Updates a specific student by ID.
   - DELETE `/api/students/:id`: Deletes a specific student by ID.

4. **Instructors**
   - GET `/api/instructors`: Retrieves all instructors.
   - POST `/api/instructors`: Adds a new instructor.
   - GET `/api/instructors/:id`: Retrieves a specific instructor by ID.
   - PUT `/api/instructors/:id`: Updates a specific instructor by ID.
   - DELETE `/api/instructors/:id`: Deletes a specific instructor by ID.

5. **Enrollments**
   - POST `/api/enrollments`: Enrolls a student in a course.
   - DELETE `/api/enrollments`: Unenrolls a student from a course.

## Contributing
  Contributions are welcome! Fork the repository and submit a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
```vbnet
Feel free to customize it further based on specific functionalities or additional information you want to highlight about your project.
```

