import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './register.css';

const RegistrationPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the username or email already exists
    const userExists = storedUsers.some((u) => u.username === username || u.email === email);

    if (userExists) {
      alert('Username or email already exists. Please choose a different one.');
    } else {
      // Save the new user to local storage
      const newUser = { username, email, password };
      const updatedUsers = [...storedUsers, newUser];
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      alert('Registration successful!');
    }
  };

  return (
    <div className="registration-container">
      <h2>Register</h2>
      <form className="form-container">
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleRegister}>
          Register
        </button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
};

export default RegistrationPage;
