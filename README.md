# Mentor-Student Management With Database

This application helps you manage mentors and students efficiently. You can create mentors and students, assign students to mentors, view mentor details, and change mentor assignments.

## Features:

- Create Mentors and Students
- Assign Students to Mentors
- View Mentor Details and Assigned Students
- Change Mentor Assignments

## Technologies:

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

---

## Render URL:

- **Render URL**:`https://mentor-student-mgmnt-cwg1.onrender.com`

### Endpoints:

- **POST** - `/api/mentors`

- **POST** - `/api/student`
- **POST** - `/api/mentors/:mentorId/student`
- **PUT** - `/api/students/:studentId/mentor`
- **GET** - `/api/mentors`
- **GET** - `/api/students`
- **GET** - `/api/mentors/:mentorId`

## Demo

Check out the live project [here](https://getciya7-mentor-student-mgmnt.netlify.app/).

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/getciya7/mentor-student-mgmnt.git
```

2. Navigate to the project directory:

```bash
cd mentor-student-mgmnt
```

3. Install the dependencies for frontend:

```bash
npm install
```

4. Install the dependencies for backend:

```bash
cd backend
npm install
```

---

## Usage

1. Start the development server:

- frontend:

```bash
npm run dev
```

- backend:

```bash
cd backend
npm run dev
```

2. Open your browser and go to `http://localhost:5173` to see the application.

---

## Acknowledgements

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev)
- [Bootstrap](https://getbootstrap.com/)
- [Node](https://nodejs.org/en)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/products/platform/atlas-database)

---
