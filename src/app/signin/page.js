'use client';

import { jwtDecode } from 'jwt-decode';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const res = await fetch('http://localhost:4000/sign-in', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role || "user");

        const decoded = jwtDecode(data.token);
        const emailData = {
          value: decoded.email,
          expiry: Date.now() + 60 * 60 * 1000, // 1 hour
        };
        localStorage.setItem("email", JSON.stringify(emailData));

        alert(data.message);
        router.push('/dash');
      } else {
        setError(data.message || 'Something went wrong');
      }
    } catch (error) {
      console.error(error);
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">
      <div className="max-w-2xl w-full">
        {/* Card */}
        <div className="bg-white shadow-md rounded-lg p-8">
          <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">Create Your Account</h2>
          {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              className="w-full border p-3 rounded focus:outline-blue-500"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              className="w-full border p-3 rounded focus:outline-blue-500"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="w-full border p-3 rounded focus:outline-blue-500"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              className="w-full border p-3 rounded focus:outline-blue-500"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-semibold transition duration-300"
            >
              Register
            </button>
          </form>
        </div>

        {/* Info Box */}
        <div className="mt-8 p-6 bg-white shadow-sm rounded-lg">
          <h3 className="text-xl text-center font-semibold mb-3 text-gray-800">Available Routes in This App </h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>
              <strong>/</strong> – Login Page
            </li>
            <li>
              <strong>/signin</strong> – Sign In Page
            </li>
            <li>
              <strong>/product/(:product-id)</strong> – a dynamic page page that shows detail of each product
            </li>
            <li>
              <strong>/listview</strong> – List View of Products
            </li>
            <li>
              <strong>/gridview</strong> – Grid View of Products
              <span className="text-sm text-gray-500"> (toggle using grid/list icons)</span>
            </li>
            <li>
              <strong>/cart</strong> – View Your Cart
              <span className="text-sm text-gray-500"> (click the 🛒 cart icon)</span>
            </li>
            <li>
              <strong>/dash</strong> – Your Dashboard
            </li>
            <li>
              <strong>/admin</strong> – For adding or deleting products (Acess only to Admin acc's)
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
}
