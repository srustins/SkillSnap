import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login({ setIsLoggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const backgroundStyle = {
    backgroundColor: '#0f3052',
    backgroundImage: 'linear-gradient(rgba(15, 48, 82, 0.8), rgba(15, 48, 82, 0.8)), url("/diamond-upholstery.png")',
    backgroundSize: 'auto',
    backgroundRepeat: 'repeat',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const cleanUsername = username.trim().toLowerCase();
    const cleanPassword = password.trim();

    if (cleanUsername === 'admin' && cleanPassword === 'skillsnap_25') {
      setIsLoggedIn(true);
      navigate('/');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container" style={backgroundStyle}>
      <div className="login-page">
        <form className="login-form" onSubmit={handleLogin}>
          <img src="/logo512.png" alt="SkillSnap Logo" className="logo" />
  
          {/* Welcome Message INSIDE the card */}
          <h2 className="welcome-message">Hello, Welcome to Login Page</h2>
           <h2>Login</h2>
           <label htmlFor="username">Name</label>
<input
  type="text"
  id="username"
  placeholder="Enter your username"
  value={username}
  onChange={(e) => setUsername(e.target.value)}
/>

<label htmlFor="password">Password</label>
<input
  type="password"
  id="password"
  placeholder="Enter your password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;












