import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isVisible, toggleSidebar }) => {
  return (
    <div
      className={`sidebar-wrapper ${
        isVisible ? "sidebar-visible" : "sidebar-hidden"
      }`}
    >
      <div className="list-group list-group-flush navbar">
        <ul className="navbar-nav d-flex justify-content-start">
          <li className="nav-item">
            <Link className="nav-link" to="/create-mentor">
              Create Mentor
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/create-student">
              Create Student
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/assign-student">
              Assign Student
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/view-mentor">
              View Mentor
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/change-mentor">
              Change Mentor
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
