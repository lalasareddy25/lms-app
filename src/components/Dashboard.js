// src/components/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import { FaSignInAlt, FaUserPlus, FaInfoCircle, FaBook } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-box">
        <h2>Welcome to the Learning Management System</h2>
        <div className="navigation-buttons">
          <Link to="/login" className="nav-button">
            <FaSignInAlt className="nav-icon" />
            Login
          </Link>
          <Link to="/register" className="nav-button">
            <FaUserPlus className="nav-icon" />
            Sign Up
          </Link>
          <Link to="/about" className="nav-button">
            <FaInfoCircle className="nav-icon" />
            About Us
          </Link>
          <Link to="/courses" className="nav-button">
            <FaBook className="nav-icon" />
            Course List
          </Link>
        </div>
      </div>
      <div className="dashboard-images">
        <img src="/images/dashboard1.jpg" alt="Dashboard Illustration 1" className="dashboard-image" />
        <img src="/images/dashboard2.jpg" alt="Dashboard Illustration 2" className="dashboard-image" />
      </div>
    </div>
  );
};

export default Dashboard;
