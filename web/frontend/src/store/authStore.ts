import { create } from "zustand";
import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

interface AuthState {
	user: any; // (you can replace `any` with your real user type if you have one)
	isAuthenticated: boolean;
	error: string | null;
	isLoading: boolean;
	isCheckingAuth: boolean;
	message: string | null;
	signup: (email: string, password: string, name: string) => Promise<void>;
	login: (email: string, password: string) => Promise<boolean>;
	logout: () => Promise<void>;
	verifyEmail: (code: string) => Promise<any>; // adjust the type if you know it
	checkAuth: () => Promise<void>;
	forgotPassword: (email: string) => Promise<void>;
	resetPassword: (token: string, password: string) => Promise<void>;
}

axios.defaults.withCredentials = true;

export const useAuthStore = create<AuthState>((set) => ({
	user: null as any,
	isAuthenticated: false,
	error: null as string | null,
	isLoading: false,
	isCheckingAuth: true,
	message: null as string | null,

	signup: async (email: string, password: string, name: string): Promise<void> => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`${API_URL}/signup`, { email, password, name });
			set({ user: response.data.user, isAuthenticated: true, isLoading: false });
		} catch (error: any) {
			set({ error: error.response?.data?.message || "Error signing up", isLoading: false });
			throw error;
		}
	},

	login: async (email: string, password: string): Promise<boolean> => {
		set({ isLoading: true, error: null });
		try {
		  const response = await axios.post(`${API_URL}/login`, { email, password });
		  set({
			isAuthenticated: true,
			user: response.data.user,
			error: null,
			isLoading: false,
		  });
		  return true; // Return true when login is successful
		} catch (error: any) {
		  set({ error: error.response?.data?.message || "Error logging in", isLoading: false });
		  return false; // Return false when login fails
		}
	},

	logout: async (): Promise<void> => {
		set({ isLoading: true, error: null });
		try {
			await axios.post(`${API_URL}/logout`);
			set({ user: null, isAuthenticated: false, error: null, isLoading: false });
		} catch (error: any) {
			set({ error: "Error logging out", isLoading: false });
			throw error;
		}
	},

	verifyEmail: async (code: string): Promise<any> => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`${API_URL}/verify-email`, { code });
			set({ user: response.data.user, isAuthenticated: true, isLoading: false });
			return response.data;
		} catch (error: any) {
			set({ error: error.response?.data?.message || "Error verifying email", isLoading: false });
			throw error;
		}
	},

	checkAuth: async (): Promise<void> => {
		set({ isCheckingAuth: true, error: null });
		try {
			const response = await axios.get(`${API_URL}/check-auth`);
			set({ user: response.data.user, isAuthenticated: true, isCheckingAuth: false });
		} catch (error: any) {
			set({ error: null, isCheckingAuth: false, isAuthenticated: false });
		}
	},

	forgotPassword: async (email: string): Promise<void> => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`${API_URL}/forgot-password`, { email });
			set({ message: response.data.message, isLoading: false });
		} catch (error: any) {
			set({
				isLoading: false,
				error: error.response?.data?.message || "Error sending reset password email",
			});
			throw error;
		}
	},

	resetPassword: async (token: string, password: string): Promise<void> => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`${API_URL}/reset-password/${token}`, { password });
			set({ message: response.data.message, isLoading: false });
		} catch (error: any) {
			set({
				isLoading: false,
				error: error.response?.data?.message || "Error resetting password",
			});
			throw error;
		}
	},
}));
