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
- JWT (JSON Web Tokens) for authentication
- bcrypt for password hashing
- dotenv for environment variables

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v14 or higher)
- PostgreSQL

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/satyansh-mittal/CourseManagement-Backend-NodeJS.git
   cd CourseManagement-Backend-NodeJS

2. Install dependencies:
   ```bash
   npm install

3. Set up environment variables:

   Create a `.env` file in the root directory and add the following variables:
   ```plaintext
   PORT=3000
   TOKEN_HEADER_KEY='Authorization'
   JWT_SECRET=your_jwt_secret_key
   
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
