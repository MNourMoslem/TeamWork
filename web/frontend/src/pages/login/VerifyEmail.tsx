import React, { useState, useRef, useEffect } from 'react';
import AuthButton from '../../components/AuthButton';
import { useAuthStore } from '../../store/authStore';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'; // make sure you have react-toastify installed
import { motion } from 'motion/react'

function VerifyEmail() {
    const [code, setCode] = useState<string[]>(["", "", "", "", "", ""]);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
    const navigate = useNavigate();
    const { error, isLoading, verifyEmail } = useAuthStore();

    const handleChange = (index: number, value: string) => {
        const newCode = [...code];
    
        if (value.length > 1) {
            const pastedCode = value.slice(0, 6).split("");
            for (let i = 0; i < 6; i++) {
                newCode[i] = pastedCode[i] || "";
            }
            setCode(newCode);
    
            // Find last non-empty manually
            let lastFilledIndex = 0;
            for (let i = 0; i < newCode.length; i++) {
                if (newCode[i] !== "") lastFilledIndex = i;
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
    

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" && !code[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleSubmit = async (e?: React.FormEvent<HTMLFormElement> | Event) => {
        if (e) e.preventDefault();
        const verificationCode = code.join("");

        try {
            await verifyEmail(verificationCode);
            navigate("/");
            toast.success("Email verified successfully");
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (code.every((digit) => digit !== "")) {
            handleSubmit();
        }
    }, [code]);

    return (
        <div className="w-full bg-white rounded-lg shadow">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="flex justify-center items-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                    Verify
                </h1>
				<form onSubmit={handleSubmit} className='space-y-6'>
					<div className='flex justify-between'>
						{code.map((digit, index) => (
                            <input
                            key={index}
                            ref={(el) => { inputRefs.current[index] = el; }}
                            type="text"
                            maxLength={1}  // Updated to maxLength of 1 to fit each input field
                            value={digit}
                            onChange={(e) => handleChange(index, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            className="w-10 h-10 mx-1 text-center text-xl font-bold bg-white text-gray-800 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
						))}
					</div>
					{error && <p className='text-red-500 font-semibold mt-2'>{error}</p>}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        disabled={isLoading || code.some((digit) => !digit)}
                        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50"
                        >
                        {isLoading ? "Verifying..." : "Verify Email"}
                    </motion.button>
				</form>
            </div>
        </div>
    );
}

export default VerifyEmail;
