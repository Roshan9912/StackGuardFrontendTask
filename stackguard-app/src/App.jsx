import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignInSignUp from './pages/SignInSignUp';
import Configuration from './pages/Configuration';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import { hasConfigKey } from './utils/configGuard';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInSignUp />} />
        <Route path="/configuration" element={
          <ProtectedRoute>
            <Configuration />
          </ProtectedRoute>
        } />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            {hasConfigKey()
              ? <Dashboard />
              : <Navigate to="/configuration" />
            }
          </ProtectedRoute>
        } />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}
