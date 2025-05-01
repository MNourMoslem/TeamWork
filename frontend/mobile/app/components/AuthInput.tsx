import React from 'react';
import { View, Text, TextInput, TextInputProps } from 'react-native';

interface AuthInputProps extends TextInputProps {
  header?: string;
  helperText?: string;
}

export default function AuthInput({ header = "", helperText = "", ...props }: AuthInputProps) {
  return (
    <View className="mb-4">
      {header && (
        <Text className="text-sm text-gray-600 mb-1">{header}</Text>
      )}
      <TextInput
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5"
        placeholderTextColor="#9CA3AF"
        autoCapitalize="none"
        {...props}
      />
      {helperText && (
        <Text className="text-xs text-gray-500 mt-1">{helperText}</Text>
      )}
    </View>
  );
} 