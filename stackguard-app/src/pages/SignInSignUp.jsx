import React from 'react';
import AuthForm from '../components/AuthForm';
import { useNavigate } from 'react-router-dom';
import { setAuth } from '../utils/auth';
import { message } from 'antd';

export default function SignInSignUp() {
  const navigate = useNavigate();
  const handleAuth = (user) => {
    setAuth(user); // saves token or flag in localStorage
    message.success(user.isSignup ? 'Sign Up successful!' : 'Sign In successful!');
    navigate('/configuration');
  };
  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: 32 }}>
      <h2>Sign In / Sign Up</h2>
      <AuthForm onAuth={handleAuth} />
    </div>
  );
}
