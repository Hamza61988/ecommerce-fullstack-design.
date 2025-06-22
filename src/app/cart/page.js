"use client";
import { IoMdPerson } from "react-icons/io";
import { MdMessage } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { CiHeart } from "react-icons/ci";
import Link from "next/link";

export default function Cart() {
  const navItems = [
    { icon: IoMdPerson, label: "Person", link: "Personal" },
    { icon: MdMessage, label: "Message", link: "Messages" },
    { icon: FaHeart, label: "Orders", link: "Orders" },
  ];

  const pathname = usePathname();
  const [products, setProducts] = useState([]);
  const [cartProductIds, setCartProductIds] = useState(new Set()); // set of IDs from localStorage
  const [favorites, setFavorites] = useState({});

  // Fetch products from backend
  async function fetchProducts() {
    try {
      const response = await fetch("https://ecommerce-fullstack-backend-six.vercel.app/posts/");
      let data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Failed to fetch:", error);
    }
  }

  // Read localStorage on mount to find cart items
  useEffect(() => {
    fetchProducts();

    // Extract all keys with value 'true' in localStorage
    const cartIds = new Set();
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (localStorage.getItem(key) === "true") {
        cartIds.add(key);
      }
    }
    setCartProductIds(cartIds);
  }, []);

  // Function to add to cart (localStorage + state)
  const addToCart = (id) => {
    localStorage.setItem(id, "true");
    setCartProductIds((prev) => new Set(prev).add(id));
  };

  // Function to remove from cart
  const removeFromCart = (id) => {
    localStorage.removeItem(id);
    setCartProductIds((prev) => {
      const newSet = new Set(prev);
      newSet.delete(id);
      return newSet;
    });
  };

  // Toggle favorites (for UI only)
  const toggleFavorite = (index) => {
    setFavorites((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Filter products into cart items and saved for later
  const cartProducts = products.filter((p) => cartProductIds.has(String(p.id)));
  const notInCartProducts = products.filter((p) => !cartProductIds.has(String(p.id)));

  // Pick 4 random products from notInCartProducts for "Saved for Later"
  function getRandomItems(arr, count) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }
  const savedForLaterProducts = getRandomItems(notInCartProducts, 4);

  // Calculate subtotal based on cartProducts prices
  const subtotal = cartProducts.reduce((acc, item) => acc + item.price, 0);
  const discount = 60.0;
  const tax = 14.0;
  const total = (subtotal - discount + tax).toFixed(2);

  return (
    <div className="w-full">
      {/* Navbar */}
      <div
        className="flex flex-row px-4 md:px-[80px] shadow-md justify-between py-3 items-center gap-6 text-sm text-gray-500 w-full"
        style={{ color: "var(--navbar-color)" }}
      >
        <div className="flex items-center justify-center">
          <Link href={"/dash"}>
            <img src="liver.png" alt="logo" width={60} />
          </Link>
        </div>
        <div className="flex gap-3">
          {navItems.map((e, i) => {
            const Icon = e.icon;
            return (
              <div
                key={i}
                className="flex flex-col items-center hover:text-blue-600 gap-1 text-sm"
              >
                <button className="flex flex-col items-center transition">
                  <Icon size={20} />
                </button>
                <span>{e.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mx-4 md:mx-[80px]">
        {/* Cart Header */}
        <div className="py-5">
          <h4 className="text-2xl font-semibold">My cart ({cartProducts.length})</h4>
        </div>

        {/* Mobile Cart Items */}
        <div className="md:hidden elements rounded shadow-sm p-3 flex flex-col gap-4 px-1">
          {cartProducts.length === 0 && (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          )}
          {cartProducts.map((e, i) => (
            <div key={i} className="flex gap-4 items-start border-b pb-4">
              <span className="flex justify-center items-center">
                <img
                  src={e.imageUrl}
                  width={95}
                  alt={`Product ${i + 1}`}
                  className="rounded-md object-fill"
                />
              </span>

              <div className="flex flex-col flex-1 gap-2">
                <h4 className="font-semibold">{e.title}</h4>
                <div className="text-sm text-gray-600 flex flex-col sm:flex-row sm:gap-4">
                  <p>Size: {e.size}</p>
                  <p>Color: {e.color}</p>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <select className="border rounded px-2 py-1 text-sm">
                    {[1, 2, 3, 4].map((num) => (
                      <option key={num}>{num}</option>
                    ))}
                  </select>
                  <h4 className="font-semibold text-green-500 text-right">
                    ${e.price.toFixed(2)}
                  </h4>
                </div>
              </div>
              <button
                className="text-red-500 border border-gray-300 rounded px-4 py-2 hover:bg-gray-100 text-sm"
                onClick={() => removeFromCart(e.id)}
              >
                Remove
              </button>
            </div>
          ))}

          {/* Summary on mobile */}
          {cartProducts.length > 0 && (
            <div className="p-3 grid grid-cols-2 gap-4 mt-6">
              <div>
                <p className="text-gray-400">Items:</p>
                <p className="text-gray-400">Shipping:</p>
                <p className="text-gray-400">Tax:</p>
                <h4 className="font-bold text-xl mt-2">Total</h4>
              </div>
              <div>
                <p className="font-bold">${subtotal.toFixed(2)}</p>
                <p className="font-bold">$10.00</p>
                <p className="font-bold">${tax.toFixed(2)}</p>
                <h4 className="font-bold text-2xl mt-2">${total}</h4>
              </div>
            </div>
          )}
        </div>

        {/* Saved for Later Section */}
        <div className="md:hidden mt-8">
          <h4 className="text-2xl my-6 font-bold">Saved for Later</h4>
          <div className="flex flex-col gap-6">
            {savedForLaterProducts.map((e, i) => (
              <div
                key={i}
                className="relative flex items-center gap-5 p-4 rounded-2xl shadow hover:shadow-lg transition duration-300 bg-white"
              >
                <img
                  src={e.imageUrl}
                  alt={e.title}
                  className="h-20 w-20 object-fill rounded-lg"
                />

                <div className="flex flex-col gap-2">
                  <h4 className="text-sm md:text-2xl font-semibold text-gray-800">
                    {e.title}
                  </h4>
                  <h4 className="text-xl text-blue-600 font-medium">${e.price}</h4>
                  <button
                    onClick={() => addToCart(e.id)}
                    className="px-4 py-2 rounded text-sm text-blue-600 border border-gray-300 hover:bg-gray-300"
                  >
                    Move to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:flex flex-col lg:flex-row gap-6 pb-10">
         
          <div className="w-full lg:w-2/3 flex flex-col gap-3 rounded ">
            {cartProducts.map((e, i) => (
              <div
                key={i}
                className="p-4 bg-white rounded-lg shadow hover:shadow-md transition"
              >
                <div className="flex gap-4">
                  <img
                    className="object-contain h-[100px] w-[100px] border border-gray-200 rounded-md"
                    src={e.imageUrl}
                    alt={e.title}
                  />
                  <div className="flex flex-col flex-grow justify-between">
                    <div className="flex justify-between items-start">
                      <h4 className="text-md font-semibold text-gray-800">{e.description}</h4>
                      <h4 className="text-green-600 font-bold text-lg">
                        ${e.price}
                      </h4>
                    </div>

                  

                    <div className="flex justify-between items-center text-sm ">
                      <span className="text-gray-500">
                        Seller: <span className="font-medium text-gray-700">Artel Market</span>
                      </span>
                      <select className="border border-gray-300 rounded px-2 py-1 text-xs">
                        {[1, 2, 3, 4].map((num) => (
                          <option key={num}>{num}</option>
                        ))}
                      </select>
                    </div>

                    <div className="flex gap-2 mt-3">
                      <button
                        className="text-red-500 border border-gray-300 rounded px-3 py-1 hover:bg-gray-100"
                        onClick={() => removeFromCart(e.id)}
                      >
                        Remove
                      </button>
                      <button className="text-green-500 border border-gray-300 rounded px-3 py-1 hover:bg-gray-100">
                        Save for Later
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            
            <div className="flex shadow-sm elements rounded justify-between p-3 w-full">
            <Link href={'/dash'}><button className="bg-gray-200 px-4 py-2 rounded text-sm hover:bg-gray-300">
                Back to Shop
              </button></Link>  
              <button
                className="text-red-500 border border-gray-300 rounded px-4 py-2 hover:bg-gray-100 text-sm"
                onClick={() => {
                  cartProductIds.forEach((id) => localStorage.removeItem(id));
                  setCartProductIds(new Set());
                }}
              >
                Remove all
              </button>
            </div>

            {/* Saved for Later grid */}
            <div className="elements p-6 rounded-md shadow-md">
              <h2 className="text-xl font-semibold mb-4">Saved for later</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {savedForLaterProducts.map((item, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 hover:shadow-sm rounded-md"
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full bg-gray-100 py-4 h-40 object-contain mb-3 mx-auto"
                    />
                    <div className="p-2">
                      <p className="text-lg font-medium mb-1">${item.price}</p>
                      <p className="text-sm text-gray-700 truncate">{item.description}</p>
                      <button
                        onClick={() => addToCart(item.id)}
                        className="mt-3 px-4 py-2 text-sm text-blue-600 border border-gray-300 rounded hover:bg-gray-300"
                      >
                        Move to cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Discount banner */}
            <div className="w-[1180px] h-[120px] bg-blue-600 text-white flex justify-between items-center px-10 rounded-md shadow-md mx-auto">
              <div>
                <h3 className="text-lg font-semibold">
                  Super discount on more than 100 USD
                </h3>
                <p className="text-sm text-white/80">
                  Have you ever finally just write dummy info
                </p>
              </div>
              <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-md">
                Shop now
              </button>
            </div>
          </div>

          {/* Summary & Coupon */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            <div className="p-4 elements rounded shadow-sm">
              <h4 className="mb-2 font-medium">Have a coupon?</h4>
              <div className="flex border border-gray-300 rounded overflow-hidden">
                <input
                  className="px-4 py-2 flex-1 outline-none"
                  placeholder="Add Coupon"
                />
                <button className="px-4 text-blue-500 border-l border-l-gray-300 hover:bg-gray-200">
                  Apply
                </button>
              </div>
            </div>

            <div className="elements rounded shadow-sm p-4">
              <div className="grid grid-cols-2 mb-2">
                <h4>Subtotal</h4>
                <h4 className="text-right">${subtotal.toFixed(2)}</h4>
              </div>
              <div className="grid grid-cols-2 mb-2">
                <h4>Discount</h4>
                <h4 className="text-right text-red-500">- ${discount.toFixed(2)}</h4>
              </div>
              <div className="grid grid-cols-2 mb-2">
                <h4>Tax</h4>
                <h4 className="text-right">${tax.toFixed(2)}</h4>
              </div>

              <hr className="my-3 border-gray-300" />

              <div className="grid grid-cols-2 font-semibold text-lg">
                <h4>Total:</h4>
                <h4 className="text-right">${total}</h4>
              </div>

              <div className="mt-4">
                <button className="bg-green-500 w-full py-2 text-white rounded hover:bg-green-600">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
