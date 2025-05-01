import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, TextInput } from 'react-native';
import { router } from 'expo-router';
import { useAuthStore } from '../store/authStore';

export default function VerifyEmailScreen() {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef<Array<TextInput | null>>([]);
  const { verifyEmail, isLoading, error } = useAuthStore();

  const handleChange = (index: number, value: string) => {
    const newCode = [...code];
    
    if (value.length > 1) {
      const pastedCode = value.slice(0, 6).split('');
      for (let i = 0; i < 6; i++) {
        newCode[i] = pastedCode[i] || '';
      }
      setCode(newCode);

      let lastFilledIndex = 0;
      for (let i = 0; i < newCode.length; i++) {
        if (newCode[i] !== '') lastFilledIndex = i;
      }
      const focusIndex = lastFilledIndex < 5 ? lastFilledIndex + 1 : 5;
      inputRefs.current[focusIndex]?.focus();
    } else {
      newCode[index] = value;
      setCode(newCode);

      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: any) => {
    if (e.nativeEvent.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async () => {
    const verificationCode = code.join('');
    try {
      await verifyEmail(verificationCode);
      router.replace('/(tabs)' as any);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (code.every((digit) => digit !== '')) {
      handleSubmit();
    }
  }, [code]);

  return (
    <View className="flex-1 bg-white p-6">
      <View className="flex-1 justify-center">
        <Text className="text-3xl font-bold text-center mb-8 text-blue-600">
          Verify Email
        </Text>

        <Text className="text-gray-600 text-center mb-8">
          Enter the 6-digit code sent to your email
        </Text>

        <View className="flex-row justify-between mb-8">
          {code.map((digit, index) => (
            <TextInput
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              className="w-12 h-12 text-center text-xl font-bold bg-gray-50 border border-gray-300 rounded-lg"
              maxLength={1}
              value={digit}
              onChangeText={(value) => handleChange(index, value)}
              onKeyPress={(e) => handleKeyDown(index, e)}
              keyboardType="number-pad"
            />
          ))}
        </View>

        {error && (
          <Text className="text-red-500 text-sm mb-4 text-center">{error}</Text>
        )}

        <TouchableOpacity
          onPress={handleSubmit}
          disabled={isLoading || code.some((digit) => !digit)}
          className="bg-blue-500 py-3 rounded-lg mb-4"
        >
          {isLoading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text className="text-white text-center font-semibold">
              Verify Email
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
} 