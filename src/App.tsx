import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import DashboardLayout from './components/Layout/DashboardLayout';

// Pages
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Properties from './pages/Properties';
import Units from './pages/Units';
import Tenants from './pages/Tenants';
import Billing from './pages/Billing';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} /> {/* Reusing Login for demo */}

          {/* Protected Dashboard Routes */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <Dashboard />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/properties"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <Properties />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/units"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <Units />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/tenants"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <Tenants />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/billing"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <Billing />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
