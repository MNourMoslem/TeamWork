import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import MainLayout from './MainLayout';
import SignUp from './SignUp';
import VerifyEmail from './VerifyEmail';
import SecondLayout from './SecondLayout';
import ResetPassword from './ResetPassword';
import { useAuthStore } from '../../store/authStore';
import { JSX } from 'react';
import ForgotPasswordPage from './ForgotPassword';

const RedirectAuthenticatedUser = ({ children }: { children: JSX.Element }) => {
	const { isAuthenticated, user } = useAuthStore();

	if (isAuthenticated && user?.isVerified) {
		return <Navigate to='/' replace />;
	}

	return children;
};

function AuthRoutes() {
  return (
    <Routes>
      {/* Main Auth Layout */}
      <Route path='auth' element={<MainLayout />}>
        <Route
          path='login'
          element={
            <RedirectAuthenticatedUser>
              <Login />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path='signup'
          element={
            <RedirectAuthenticatedUser>
              <SignUp />
            </RedirectAuthenticatedUser>
          }
        />
      </Route>

      {/* Second Layout for verification/reset password */}
      <Route path='auth' element={<SecondLayout />}>
        <Route path='verify-email' element={<VerifyEmail />} />
        <Route path='forgot-password' element={<ForgotPasswordPage />} />
      </Route>
    </Routes>
  );
}

export default AuthRoutes;
