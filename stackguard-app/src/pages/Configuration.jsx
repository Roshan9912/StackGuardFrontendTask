import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Button, message } from 'antd';

export default function Configuration() {
  const [key, setKey] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log("Submit clicked", key.length);
    if (key.length < 100 || key.length > 1000) {
      message.error('Key must be between 100 and 1000 characters');
      return;
    }
    localStorage.setItem('configKey', key);
    message.success('Configuration saved successfully!');
    navigate('/dashboard');
  };

  return (
    <div style={{ maxWidth: 500, margin: 'auto', padding: 32, background: 'white' }}>
      <h2>Configuration</h2>
      <Input.TextArea
        value={key}
        onChange={e => setKey(e.target.value)}
        rows={6}
        placeholder="Enter your configuration key here"
      />
      <Button type="primary" onClick={handleSubmit} style={{ marginTop: 20 }} block>
        Proceed to Dashboard
      </Button>
    </div>
  );
}
