"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const InputForm = () => {
  const router = useRouter();

  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isCheckingRole, setIsCheckingRole] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    stock: "",
    discount: "",
    section: "",
    image: null,
  });
  const [content, setContent] = useState([]);

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role !== "admin") {
      router.push("/dash");
    } else {
      setIsAuthorized(true);
    }
    setIsCheckingRole(false);
  }, [router]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://ecommerce-fullstack-backend-six.vercel.app/posts");
      const data = await response.json();
      setContent(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isCheckingRole || !isAuthorized) return null;

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      const file = files[0];
      if (file && !file.type.startsWith("image/")) {
        alert("Please upload a valid image file.");
        return;
      }
      setFormData((prev) => ({ ...prev, image: file }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isNaN(formData.price) || formData.price <= 0) {
      alert("Price must be a positive number.");
      return;
    }

    if (isNaN(formData.stock) || formData.stock < 0) {
      alert("Stock must be a valid non-negative number.");
      return;
    }

    const data = new FormData();
    for (let key in formData) {
      data.append(key, formData[key]);
    }

    try {
      const response = await fetch("https://ecommerce-fullstack-backend-six.vercel.app/post", {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      if (!response.ok) {
        alert(result.error || "Something went wrong.");
        return;
      }

      fetchData();
      document.querySelector('input[name="image"]').value = "";
    } catch (error) {
      console.error("Error sending data:", error);
      alert("Network error. Please try again.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`https://ecommerce-fullstack-backend-six.vercel.app/post/${id}`, {
        method: "DELETE",
      });
      fetchData();
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div className="p-6">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 max-w-md mx-auto"
        encType="multipart/form-data"
      >
        <input name="name" type="text" placeholder="Name" onChange={handleChange} className="border p-2" required />
        <input name="price" type="number" placeholder="Price" onChange={handleChange} className="border p-2" required />
        <input name="image" type="file" accept="image/*" onChange={handleChange} className="border p-2" required />
        <input name="description" type="text" placeholder="Description" onChange={handleChange} className="border p-2" required />
        <select name="category" onChange={handleChange} className="border p-2" required>
          <option value="">Select</option>
          <option value="electronics">Electronics</option>
          <option value="comfort">Comfort</option>
          <option value="sports">Sports</option>
          <option value="Home appliances">Home Appliances</option>
          <option value="Clothes">Clothes</option>
        </select>
        <input name="stock" type="number" placeholder="Stock" onChange={handleChange} className="border p-2" required />
        <input name="discount" type="number" placeholder="Discount" onChange={handleChange} className="border p-2" required />
        <select name="section" onChange={handleChange} className="border p-2" required>
          <option value="">Select Section</option>
          <option value="Deals">Deals and offers</option>
          <option value="home1">Home Section 1</option>
          <option value="home2">Home Section 2</option>
          <option value="Recommended">Recommended</option>
          <option value="countries">Countries</option>
        </select>
        <button type="submit" className="bg-blue-500 text-white py-2 mt-2 rounded">
          Submit Product
        </button>
      </form>

      <h2 className="text-xl font-semibold mt-8 mb-4 text-center">📦 Products Collection:</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        {content.map((item) => (
          <div key={item.id} className="border p-4 rounded shadow-sm bg-white">
            <img src={item.imageUrl} alt={item.name} className="w-full h-90 object-cover rounded mb-2" />
            <p><strong>Name:</strong> {item.name}</p>
            <p><strong>Price:</strong> ${item.price}</p>
            <p><strong>Description:</strong> {item.description}</p>
            <p><strong>Category:</strong> {item.category}</p>
            <p><strong>Stock:</strong> {item.stock}</p>
            <p><strong>Section:</strong> {item.section}</p>
            <button
              className="mt-2 bg-red-500 text-white px-3 py-1 rounded"
              onClick={() => handleDelete(item.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InputForm;
