// src/components/Login.js
import React, { useState } from 'react';
import './Login.css'; // Import the CSS for Login
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate(); // For programmatic navigation
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your login logic here (e.g., API call)
    console.log('Login Submitted:', credentials);
    // After successful login, navigate to Dashboard or another page
    navigate('/dashboard');
  };

  return (
    <div className="login-box">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="user-box">
          <input
            type="text"
            name="username"
            id="username"
            required
            value={credentials.username}
            onChange={handleChange}
            aria-label="Username"
          />
          <label htmlFor="username">Username</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            name="password"
            id="password"
            required
            value={credentials.password}
            onChange={handleChange}
            aria-label="Password"
          />
          <label htmlFor="password">Password</label>
        </div>
        <button type="submit">
          Login
        </button>
      </form>
      <p>
        Don't have an account? <Link to="/register" style={{ color: '#03e9f4', textDecoration: 'none' }}>Register</Link>
      </p>
    </div>
  );
};

export default Login;
