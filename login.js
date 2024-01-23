import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginSuccessful, setIsLoginSuccessful] = useState(false);

  const handleLogin = () => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = storedUsers.find((u) => u.username === username && u.password === password);

    if (user) {
      alert('Login successful!');
      setIsLoginSuccessful(true);
    } else {
      alert('Wrong username or password. Please try again.');
    }
  };

  return (
    <div>
      <div className="login-container">
        <h2>Login</h2>
        <form className="form-container">
          <label>
            Username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <br />
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
      <p>
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
      {/* Conditional rendering of Link */}
      {isLoginSuccessful && (
        <p>
          Login successful! Redirecting to <Link to="/">home</Link>...
        </p>
      )}
    </div>
  );
};

export default LoginPage;
