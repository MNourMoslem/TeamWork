import React, { useState } from 'react'
import AuthInput from '../../components/AuthInput'

function ResetPassword() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordAgain, setPasswordAgain] = useState('');
    const [linkSent, setLinkSent] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSendResetLink = async () => {
        setLoading(true);
        try {
            // Dummy function simulating backend call
            await new Promise((resolve) => setTimeout(resolve, 1500));
            setLinkSent(true);
        } catch (error) {
            console.error('Failed to send reset link', error);
            // You could set an error message here if you want
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-md">
                <h1 className="text-2xl font-bold text-center mb-6">
                    Reset Password
                </h1>

                <AuthInput
                    header="Email"
                    type="email"
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    helperText="Please enter your account email to receive reset instructions"
                />

                {!linkSent && (
                    <button
                        onClick={handleSendResetLink}
                        className="mt-4 w-full py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition duration-200"
                        disabled={loading || email.trim() === ''}
                    >
                        {loading ? 'Sending...' : 'Send Reset Link'}
                    </button>
                )}

                {linkSent && (
                    <div className="mt-6 space-y-4">
                        <AuthInput
                            header="New Password"
                            type="password"
                            value={password}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                        />

                        <AuthInput
                            header="New Password Again"
                            type="password"
                            value={passwordAgain}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPasswordAgain(e.target.value)}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default ResetPassword
