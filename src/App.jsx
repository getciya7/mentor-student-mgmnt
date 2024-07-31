import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import MentorForm from "./components/MentorForm";
import StudentForm from "./components/StudentForm";
import AssignStudent from "./components/AssignStudent";
import ViewMentor from "./components/ViewMentor";
import ChangeMentor from "./components/ChangeMentor";
import Home from "./components/Home";

const App = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };
  return (
    <Router>
      <nav className="navbar navbar-dark">
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleSidebar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link to="/" className="navbar-brand">
          Mentor-Student Management
        </Link>
      </nav>
      <div className="d-flex">
        <Sidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
        <div
          className={`page-content-wrapper ${
            isSidebarVisible ? "overlay" : ""
          }`}
        >
          <div className="container-fluid">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create-mentor" element={<MentorForm />} />
              <Route path="/create-student" element={<StudentForm />} />
              <Route path="/assign-student" element={<AssignStudent />} />
              <Route path="/view-mentor" element={<ViewMentor />} />
              <Route path="/change-mentor" element={<ChangeMentor />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
