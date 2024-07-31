import React from "react";

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Welcome to Mentor-Student Management</h2>
          <p className="card-text">
            This application helps you manage mentors and students efficiently.
            You can create mentors and students, assign students to mentors,
            view mentor details, and change mentor assignments.
          </p>
          <hr />
          <h4>Features:</h4>
          <ul>
            <li>Create Mentors and Students</li>
            <li>Assign Students to Mentors</li>
            <li>View Mentor Details and Assigned Students</li>
            <li>Change Mentor Assignments</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
