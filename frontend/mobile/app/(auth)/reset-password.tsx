import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Link, useLocalSearchParams, router } from 'expo-router';
import AuthInput from '../components/AuthInput';
import { useAuthStore } from '../store/authStore';

export default function ResetPasswordScreen() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { resetPassword, isLoading, error } = useAuthStore();
  const { token } = useLocalSearchParams();

  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      // You might want to show an error message here
      return;
    }

    try {
      await resetPassword(token as string, password);
      router.replace('/login' as any);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View className="flex-1 bg-white p-6">
      <View className="flex-1 justify-center">
        <Text className="text-3xl font-bold text-center mb-8 text-blue-600">
          Reset Password
        </Text>

        <Text className="text-gray-600 text-center mb-8">
          Enter your new password below
        </Text>

        <AuthInput
          header="New Password"
          placeholder="Enter new password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <AuthInput
          header="Confirm Password"
          placeholder="Confirm new password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />

        {error && (
          <Text className="text-red-500 text-sm mb-4">{error}</Text>
        )}

        <TouchableOpacity
          onPress={handleSubmit}
          disabled={isLoading || !password || !confirmPassword}
          className="bg-blue-500 py-3 rounded-lg mb-4"
        >
          {isLoading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text className="text-white text-center font-semibold">
              Reset Password
            </Text>
          )}
        </TouchableOpacity>

        <Link href="/login" asChild>
          <TouchableOpacity>
            <Text className="text-blue-500 text-center">Back to Login</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
} 