"use client";
import { IoGridSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiHeart } from "react-icons/ci";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RealPage() {
  const pathname = usePathname();
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (index) => {
    setFavorites((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const section4 = [
    {
      image: "section4 (1).png",
      price: "$199",
      title: "Wireless Headphones",
      type: "Free Shipping",
      ordersDelivered: "200 orders",
      description: "Noise-cancelling over-ear Bluetooth headphones with 20hr battery life",
    },
    {
      image: "section4 (2).png",
      price: "$49",
      title: "Smart Watch",
      type: "Sold out",
      ordersDelivered: "150 orders",
      description: "Fitness tracker with heart rate monitor and waterproof design",
    },
    {
      image: "section4 (3).png",
      price: "$299",
      title: "Portable Speaker",
      type: "Free Shipping",
      ordersDelivered: "310 orders",
      description: "High-fidelity audio with deep bass and 12-hour playtime",
    },
    {
    image: "section4 (4).png",
    price: "$89",
    title: "Gaming Mouse",
    titleColor: "text-purple-600",
    type: "Sold out",
    ordersDelivered: "95 orders",
    rating: 3.9,
    description: "Ergonomic design with RGB lighting and adjustable DPI"
  },
  {
    image: "section4 (5).png",
    price: "$159",
    title: "4K Action Camera",
    titleColor: "text-orange-600",
    type: "Free Shipping",
    ordersDelivered: "500 orders",
    rating: 4.8,
    description: "Waterproof sports camera with 4K resolution and Wi-Fi support"
  },
  {
    image: "section4 (6).png",
    price: "$159",
    title: "4K Action Camera",
    titleColor: "text-orange-600",
    type: "Sold out",
    ordersDelivered: "310 orders",
    rating: 4.4,
    description: "Waterproof sports camera with 4K resolution and Wi-Fi support"
  },
  {
    image: "section4 (8).png",
    price: "$159",
    title: "4K Action Camera",
    titleColor: "text-orange-600",
    type: "Free Shipping",
    ordersDelivered: "410 orders",
    rating: 4.6,
    description: "Waterproof sports camera with 4K resolution and Wi-Fi support"
  },
  {
    image: "section4 (1).jpg",
    price: "$159",
    title: "4K Action Camera",
    titleColor: "text-orange-600",
    type: "Sold out",
    ordersDelivered: "130 orders",
    rating: 4.2,
    description: "Waterproof sports camera with 4K resolution and Wi-Fi support"
  },
  {
    image: "section4 (9).png",
    price: "$159",
    title: "4K Action Camera",
    titleColor: "text-orange-600",
    type: "Free Shipping",
    ordersDelivered: "280 orders",
    rating: 4.3,
    description: "Waterproof sports camera with 4K resolution and Wi-Fi support"
  },
  {
     image: "section4 (3).png",
    price: "$299",
    title: "Portable Speaker",
    titleColor: "text-red-600",
    type: "Free Shipping",
    ordersDelivered: "310 orders",
    rating: 4.7,
    description: "High-fidelity audio with deep bass and 12-hour playtime"
  }
  ];

  
let array2 = [
  { image: "section2 (6).png", name: "Smart Watch", price: "$120" },
  { image: "section2 (2).png", name: "Bluetooth Speaker", price: "$45" },
  { image: "section2 (3).png", name: "Wireless Mouse", price: "$25" },
  { image: "section2 (4).png", name: "Gaming Keyboard", price: "$80" },
  { image: "section2 (5).png", name: "Portable Charger", price: "$30" },
   { image: "section2 (1).png", name: "chair", price: "$40" },
    { image: "section2 (7).png", name: "Portable Charger", price: "$30" },
     { image: "section2 (8).jpg", name: "sofa", price: "$90" }, 
];


  return (
    <div>
      {/* Header */}
      <div className="w-full flex elements items-center md:justify-between px-4 py-3 shadow-sm rounded">
        <p className="text-sm text-gray-700 md:flex hidden whitespace-nowrap">
          12,911 items in <strong>&nbsp;Mobile accessory</strong>
        </p>

        <div className="flex items-center md:gap-4 gap-10 flex-wrap justify-end">
          <label className="flex items-center gap-1 cursor-pointer text-sm">
            <input type="checkbox" className="accent-blue-600" />
            <span>Verified Only</span>
          </label>

          <select className="border border-gray-300 rounded px-2 py-1 text-sm outline-none">
            <option>Featured</option>
            <option>Not Featured</option>
            <option>Premium</option>
          </select>

          <div className="flex gap-2">
            <Link href="/listview">
              <button
                className={`border p-2 rounded border-gray-300 hover:bg-gray-200 ${
                  pathname === "/listview" ? "bg-gray-300" : ""
                }`}
              >
                <GiHamburgerMenu />
              </button>
            </Link>
            <Link href="/gridview">
              <button
                className={`border p-2 rounded border-gray-300 hover:bg-gray-200 ${
                  pathname === "/gridview" ? "bg-gray-300" : ""
                }`}
              >
                <IoGridSharp />
              </button>
            </Link>
          </div>
        </div>
      </div>

     
      <div className="mt-6 px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {section4.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-between p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition"
            >
           
              <button
                onClick={() => toggleFavorite(index)}
                className="absolute top-3 right-3 text-2xl text-blue-600 border border-gray-300 rounded-full p-1 bg-white"
              >
                <CiHeart
                  className={`transition ${
                    favorites[index] ? "text-red-500 scale-110" : ""
                  }`}
                />
              </button>

              {/* Image */}
              <div className="flex justify-center mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-32 w-32 object-contain"
                />
              </div>

              {/* Details */}
              <div className="flex flex-col text-center md:text-left items-center md:items-start gap-1">
                <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
                <p className="text-blue-600 text-base font-medium">{item.price}</p>
                <p
                  className={`text-xs font-medium uppercase ${
                    item.type === "Sold out" ? "text-red-500" : "text-green-500"
                  }`}
                >
                  {item.type}
                </p>
                <p className="text-xs text-gray-400">{item.ordersDelivered}</p>
                <p className="text-xs text-gray-500 hidden md:block">{item.description}</p>
                <button className="mt-2 px-3 py-1 text-xs border border-blue-500 text-blue-500 rounded hover:bg-blue-50 transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

 

  
       
      </div>
    </div>
  );
}
