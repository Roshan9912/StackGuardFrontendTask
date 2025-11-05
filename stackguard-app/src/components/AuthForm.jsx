import React, { useState } from 'react';
import { Form, Input, Button, Tabs } from 'antd';

export default function AuthForm({ onAuth }) {
  const [tab, setTab] = useState('signin');
  const [loading, setLoading] = useState(false);

  const handleFinish = (values) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onAuth({ ...values, isSignup: tab === 'signup' });
    }, 750);
  };

  return (
    <Tabs activeKey={tab} onChange={setTab} centered>
      <Tabs.TabPane tab="Sign In" key="signin">
        <Form name="signin" onFinish={handleFinish} layout="vertical">
          <Form.Item name="email" rules={[{ required: true, type: 'email', message: 'Valid email required' }]}>
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, min: 6, message: 'At least 6 characters' }]}>
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block>
            Sign In
          </Button>
        </Form>
      </Tabs.TabPane>
      <Tabs.TabPane tab="Sign Up" key="signup">
        <Form name="signup" onFinish={handleFinish} layout="vertical">
          <Form.Item name="email" rules={[{ required: true, type: 'email', message: 'Valid email required' }]}>
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, min: 6, message: 'At least 6 characters' }]}>
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block>
            Sign Up
          </Button>
        </Form>
      </Tabs.TabPane>
    </Tabs>
  );
}
