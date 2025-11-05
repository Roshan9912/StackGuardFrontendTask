import React from 'react';
import { Button, message } from 'antd';
import { signOut } from '../utils/auth';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();
  const handleLogout = () => {
    signOut();
    message.info('Logged out');
    navigate('/');
  };

  return (
    <div style={{
      maxWidth: 600,
      margin: 'auto',
      padding: 32,
      background: 'white',
      borderRadius: 8
    }}>
      <h2>Dashboard Page</h2>
      <p>Welcome to your dashboard! Only authenticated users who entered a configuration key can access this page.</p>
      <Button danger onClick={handleLogout} style={{ marginTop: 24 }}>Logout</Button>
    </div>
  );
}
