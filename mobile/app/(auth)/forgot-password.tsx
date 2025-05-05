import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { router } from 'expo-router';
import AuthInput from '../components/AuthInput';
import { useAuthStore } from '../store/authStore';

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState('');
  const { forgotPassword, isLoading, error } = useAuthStore();
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async () => {
    try {
      await forgotPassword(email);
      setIsSuccess(true);
    } catch (error) {
      console.error(error);
    }
  };

  if (isSuccess) {
    return (
      <View className="flex-1 bg-white p-6">
        <View className="flex-1 justify-center">
          <Text className="text-3xl font-bold text-center mb-8 text-blue-600">
            Check Your Email
          </Text>

          <Text className="text-gray-600 text-center mb-8">
            We've sent a password reset link to your email address. Please check your inbox and follow the instructions to reset your password.
          </Text>

          <TouchableOpacity onPress={() => router.back()}>
            <Text className="text-blue-500 text-center">Back to Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white p-6">
      <View className="flex-1 justify-center">
        <Text className="text-3xl font-bold text-center mb-8 text-blue-600">
          Forgot Password
        </Text>

        <Text className="text-gray-600 text-center mb-8">
          Enter your email address and we'll send you a password reset link.
        </Text>

        <AuthInput
          header="Email"
          placeholder="Email Address"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {error && (
          <Text className="text-red-500 text-sm mb-4">{error}</Text>
        )}

        <TouchableOpacity
          onPress={handleSubmit}
          disabled={isLoading}
          className="bg-blue-500 py-3 rounded-lg mb-4"
        >
          {isLoading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text className="text-white text-center font-semibold">
              Send Reset Link
            </Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.back()}>
          <Text className="text-blue-500 text-center">Back to Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
} 