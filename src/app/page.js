'use client';

import { jwtDecode } from 'jwt-decode';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    try {
      const response = await fetch('http://localhost:4000/log-in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrorMsg(data.message || 'Something went wrong');
        return;
      }

      localStorage.setItem('token', data.token);
      localStorage.setItem('role', data.role || 'user');

      const decoded = jwtDecode(data.token);
      const emailData = {
        value: decoded.email,
        expiry: Date.now() + 60 * 60 * 1000,
      };
      localStorage.setItem('email', JSON.stringify(emailData));

      alert('Login successful!');
      router.push('/dash');
    } catch (error) {
      console.error(error);
      setErrorMsg('Failed to log in. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">
      <div className="max-w-2xl w-full">
        {/* Login Card */}
        <div className="bg-white shadow-md rounded-lg p-8">
          <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">Welcome Back</h2>
          {errorMsg && <p className="text-red-500 mb-4 text-center">{errorMsg}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border p-3 rounded focus:outline-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border p-3 rounded focus:outline-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-semibold transition duration-300"
            >
              Log In
            </button>
          </form>

          <p className="mt-4 text-sm text-center text-gray-700">
            Don't have an account?{' '}
            <a href="/signin" className="text-blue-600 hover:underline">
              Sign Up
            </a>
          </p>

          {/* Admin Info */}
          <div className="mt-6 p-4 bg-yellow-100 border-l-4 border-yellow-500 rounded text-sm text-gray-800">
            <strong>Admin Access:</strong> Use the following credentials to log in as admin:
            <ul className="mt-2 list-disc list-inside">
              <li>Email: <code>mason@gmail.com</code></li>
              <li>Password: <code>mason</code></li>
            </ul>
          </div>
        </div>

        {/* Routes Info */}
        <div className="mt-8 p-6 bg-white shadow-sm rounded-lg">
          <h3 className="text-xl text-center font-semibold mb-3 text-gray-800">Available Routes in This App</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li><strong>/</strong> – Login Page</li>
            <li><strong>/signin</strong> – Sign In Page</li>
            <li><strong>/product/(:product-id)</strong> – Dynamic product detail page</li>
            <li><strong>/listview</strong> – List View of Products</li>
            <li><strong>/gridview</strong> – Grid View of Products <span className="text-sm text-gray-500">(toggle using grid/list icons)</span></li>
            <li><strong>/cart</strong> – View Your Cart <span className="text-sm text-gray-500">(click the 🛒 icon)</span></li>
            <li><strong>/dash</strong> – Your Dashboard</li>
            <li><strong>/admin</strong> – Admin-only: Add/Delete products</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
