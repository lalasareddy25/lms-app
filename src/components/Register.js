// src/components/Register.js

import React, { useState } from 'react';
import './Register.css';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle the registration logic, like sending data to an API
        console.log('User Registered:', { username, email, password });
    };

    return (
        <div className="register-box">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div className="user-box">
                    <input 
                        type="text" 
                        required 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <label>Username</label>
                </div>
                <div className="user-box">
                    <input 
                        type="email" 
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>Email</label>
                </div>
                <div className="user-box">
                    <input 
                        type="password" 
                        required 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label>Password</label>
                </div>
                <button type="submit">Register</button>
                <p>
                    Already have an account? <a href="/login">Login here</a>
                </p>
            </form>
        </div>
    );
};

export default Register;
