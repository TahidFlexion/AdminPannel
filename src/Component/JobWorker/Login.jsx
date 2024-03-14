
import React, { useState, useEffect } from 'react';

const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Check if the user is already logged in from previous session
    const loggedInStatus = localStorage.getItem('loggedIn');
    if (loggedInStatus === 'true') {
      setLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    // You would typically send a request to your server here to verify the credentials
    // For demonstration, let's assume the username is 'admin' and password is 'password'
    if (username === 'admin' && password === 'password') {
      setLoggedIn(true);
      // Store login status in localStorage
      localStorage.setItem('loggedIn', true);
    } else {
      alert('Invalid username or password');
    }
  };

  const handleLogout = () => {
    // Clear login status from localStorage
    localStorage.removeItem('loggedIn');
    // Clear login status from component state
    setLoggedIn(false);
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <h1>Welcome to the website!</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Login</h1>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default Login;
