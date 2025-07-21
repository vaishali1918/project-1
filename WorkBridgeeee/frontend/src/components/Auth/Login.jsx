import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    // simulate API call or login validation
    await new Promise((res) => setTimeout(res, 2000));

    const success = handleLogin(email, password);

    setLoading(false); // hide loader

    if (success) {
      toast.success('✅ Login successful!', {
        position: 'top-right',
        autoClose: 2000,
        theme: 'colored',
      });
    } else {
      toast.error('❌ Invalid credentials!', {
        position: 'top-right',
        autoClose: 2500,
        theme: 'colored',
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-emerald-100 to-blue-100 px-4">
      <ToastContainer />
      <div className="backdrop-blur-md bg-white/60 shadow-2xl border border-white/30 rounded-3xl p-10 sm:p-14 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-black mb-8">Login to WorkBridge</h2>

        <form onSubmit={submitHandler} className="flex flex-col gap-5">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-5 py-3 rounded-full border border-gray-300 text-black bg-white/80 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-5 py-3 rounded-full border border-gray-300 text-black bg-white/80 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-emerald-500 text-black text-lg font-semibold py-3 rounded-full hover:bg-emerald-400 transition duration-200 flex items-center justify-center"
          >
            {loading ? (
              <div className="h-5 w-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
            ) : (
              'Log In'
            )}
          </button>
        </form>

        <p className="text-center text-sm text-black mt-6">
          © {new Date().getFullYear()} WorkBridge. All rights reserved.
        </p>
      </div>
    </div>
  );
};
