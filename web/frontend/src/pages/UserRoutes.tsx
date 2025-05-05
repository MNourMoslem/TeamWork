import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import DashboardPage from './Dashboard';
import { JSX } from 'react';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
	const { isAuthenticated, user } = useAuthStore();

	if (!isAuthenticated) {
		return <Navigate to='auth/login' replace />;
	}

	// Check if user exists before accessing user.isVerified
	if (user && !user.isVerified) {
		return <Navigate to='auth/verify-email' replace />;
	}

	return children;
};

function AuthRoutes() {
  return (
    <Routes>
        <Route
            path='/'
            element={
                <ProtectedRoute>
                    <DashboardPage />
                </ProtectedRoute>
            }
        />
    </Routes>
  );
}

export default AuthRoutes;
