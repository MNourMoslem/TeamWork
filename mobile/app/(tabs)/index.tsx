import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useAuthStore } from '../store/authStore';
import { router } from 'expo-router';

export default function DashboardScreen() {
  const { user, logout, isLoading } = useAuthStore();

  const handleLogout = async () => {
    try {
      await logout();
      router.replace('/(auth)/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  if (!user) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color="#3b82f6" />
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white p-6">
      <View className="flex-1">
        <Text className="text-3xl font-bold text-blue-600 mb-8">Dashboard</Text>
        
        <View className="bg-gray-50 p-6 rounded-xl mb-6">
          <Text className="text-lg font-semibold mb-4">User Information</Text>
          
          <View className="space-y-3">
            <View>
              <Text className="text-gray-500 text-sm">Name</Text>
              <Text className="text-gray-900 text-lg">{user.name}</Text>
            </View>
            
            <View>
              <Text className="text-gray-500 text-sm">Email</Text>
              <Text className="text-gray-900 text-lg">{user.email}</Text>
            </View>
            
            <View>
              <Text className="text-gray-500 text-sm">Account Status</Text>
              <Text className="text-gray-900 text-lg">
                {user.isVerified ? 'Verified' : 'Not Verified'}
              </Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          onPress={handleLogout}
          disabled={isLoading}
          className="bg-red-500 py-3 rounded-lg"
        >
          {isLoading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text className="text-white text-center font-semibold">Logout</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
} 