// File: app/Authentication/page.js
"use client"; // Ensure this file is treated as a Client Component

import { useGoogleLogin } from "@react-oauth/google";
import { useRouter } from "next/navigation"; // Updated import

const AuthenticationPage = () => {
  const router = useRouter();

  const handleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      // Handle successful login, e.g., send token to backend, redirect, etc.
      console.log("Google Login Successful:", tokenResponse);
      router.push("/"); // Redirect to home or another page
    },
    onError: (error) => {
      // Handle login errors
      console.error("Google Login Error:", error);
    },
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-sm w-full">
        <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">
          Sign In
        </h1>
        <p className="text-gray-600 mb-8 text-center">
          Please sign in with your Google account to continue.
        </p>
        <button
          onClick={() => handleLogin()}
          className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default AuthenticationPage;
