import React, { useState } from 'react';

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    // <div className="min-h-screen flex items-center justify-center bg-gray-50">
     <div className="min-h-screen flex items-center justify-center bg-[linear-gradient(to_right,#8F87F1,#C68EFD,#E9A5F1,#FED2E2)]">
      <div className="w-full max-w-sm p-6 bg-white rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-gray-900">Create Account</h2>
        <p className="text-sm text-gray-600 mb-6">Sign up to get started!</p>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="example@example.com"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#8F87F1] focus:border-[#8F87F1]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="*******"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#8F87F1] focus:border-[#8F87F1]"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-400"
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a10.05 10.05 0 011.79-3.043m2.719-2.72A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.542 7a9.977 9.977 0 01-4.146 5.142M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3l18 18" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="*******"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#8F87F1] focus:border-[#8F87F1]"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-400"
              >
                {showConfirmPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a10.05 10.05 0 011.79-3.043m2.719-2.72A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.542 7a9.977 9.977 0 01-4.146 5.142M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3l18 18" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#8F87F1] text-white py-2 rounded-md font-semibold hover:bg-indigo-600 transition"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <a href="/login" className="text-[#8F87F1] font-medium hover:underline">
            Login
          </a>
        </div>
      </div>
    </div>
  );
}

export default Signup;
