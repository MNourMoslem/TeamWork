import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { useAuthStore } from '../store/authStore';
import { router } from 'expo-router';

export default function AuthLayout() {
  const { isAuthenticated, user, isCheckingAuth, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (!isCheckingAuth) {
      if (isAuthenticated && user?.isVerified) {
        router.replace('/(tabs)/' as any);
      } else if (isAuthenticated && !user?.isVerified) {
        router.replace('/(auth)/verify-email' as any);
      }
    }
  }, [isCheckingAuth, isAuthenticated, user]);

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: 'white' },
      }}
    >
      <Stack.Screen name="login" />
      <Stack.Screen name="register" />
      <Stack.Screen name="verify-email" />
      <Stack.Screen name="forgot-password" />
      <Stack.Screen name="reset-password" />
    </Stack>
  );
} 