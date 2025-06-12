"use client"
import { IoGridSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiHeart } from "react-icons/ci";
import { useState } from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function RealPage() {


      const [isFavorited, setIsFavorited] = useState(false);

       const pathname = usePathname();
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (index) => {
    setFavorites((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
let section4 = [
  {
    image: "section4 (1).png",
    price: "$199",
    title: "Wireless Headphones",
    titleColor: "text-blue-600",
    type: "Free Shipping",
    ordersDelivered: "200 orders",
    rating: 4.5,
    description: "Noise-cancelling over-ear Bluetooth headphones with 20hr battery life"
  },
  {
    image: "section4 (2).png",
    price: "$49",
    title: "Smart Watch",
    titleColor: "text-green-600",
    type: "",
    ordersDelivered: "150 orders",
    rating: 4.0,
    description: "Fitness tracker with heart rate monitor and waterproof design"
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
  },
  {
    image: "section4 (4).png",
    price: "$89",
    title: "Gaming Mouse",
    titleColor: "text-purple-600",
    type: "",
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
    type: "",
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
    type: "",
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
    image: "section4 (7).png",
    price: "$159",
    title: "4K Action Camera",
    titleColor: "text-orange-600",
    type: "",
    ordersDelivered: "110 orders",
    rating: 4.0,
    description: "Waterproof sports camera with 4K resolution and Wi-Fi support"
  }
];

  return (
    <div>
   <div className="w-full flex elements items-center md:justify-between px-4 py-3 shadow-sm rounded">
        <p className="text-sm text-gray-700 md:flex hidden whitespace-nowrap">
          12,911 items in <strong>&nbsp;Mobile accessory</strong>
        </p>

        <div className="flex items-center md:gap-6 gap-10 flex-wrap justify-end">
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
     

     <div className="mt-6 mx-4 md:mx-[0px]">
  <div className="flex flex-col gap-6">
    {section4.map((e, i) => (
      <div
        key={i}
        className="relative flex flex-row md:flex-col md:flex-row items-center md:items-start gap-5 p-4 rounded-2xl shadow hover:shadow-lg transition duration-300 bg-white"
      >
        
          <button
                onClick={() => toggleFavorite(i)}
                className="absolute top-3 right-3 text-2xl text-blue-600 border border-gray-300 rounded-full p-1 bg-white"
              >
                <CiHeart
                  className={`transition ${
                    favorites[i] ? "text-red-500 scale-110" : ""
                  }`}
                />
              </button>

        <img
          src={e.image}
          alt={e.title}
          className="md:h-44 h-20 w-20 md:w-44 object-fill rounded-lg"
        />

        <div className="flex  flex-col gap-2 md:text-left">
          <h4 className="md:text-2xl text-sm md:font-semibold text-gray-800">{e.title}</h4>
          <h4 className="text-xl text-blue-600 font-medium">{e.price}</h4>
          <h4 className="text-sm text-green-500 uppercase tracking-wide">{e.type}</h4>
          <h4 className="text-sm text-gray-500">Orders Delivered: {e.ordersDelivered}</h4>
          <p className="text-sm md:flex hidden  text-gray-600">{e.description}</p>
          <button className="mt-2 md:flex hidden self-center md:self-start text-sm px-4 py-2 rounded-md border border-blue-500 text-blue-500 hover:bg-blue-50 transition">
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
