"use client";
import { IoGridSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiHeart } from "react-icons/ci";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from 'next/navigation';


export default function RealPage() {
  
  const router = useRouter();

   


  const pathname = usePathname();
  const [favorites, setFavorites] = useState({});
 const [product , changeProducts] = useState([])

  const toggleFavorite = (index) => {
    setFavorites((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

 async function fetchproducts() {
    try {
      const response = await fetch("https://ecommerce-fullstack-backend-six.vercel.app/posts/");
      let data = await response.json();
   
     changeProducts(data)
    } catch (error) {
      console.error("Failed to fetch:", error);
    }
  }

  useEffect(()=>{
fetchproducts()
  },[])

 
  


  return (
    <div>
     
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

     
      <div className="mt-6 ">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
       
  {product.slice(0, 9).map((item, index) => (
    
    <div
      key={index}
      className="relative flex flex-col justify-between p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300"
    >
   
      <button
        onClick={() => toggleFavorite(index)}
        className="absolute top-3 right-3 text-xl text-blue-600 border border-gray-300 rounded-full p-1 bg-white hover:text-red-500"
      >
        <CiHeart
          className={`transition-transform ${
            favorites[index] ? "text-red-500 scale-110" : "scale-100"
          }`}
        />
      </button>

      <div className="flex justify-center mb-4">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="h-32 w-32 object-contain"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
        <h4 className="text-lg font-semibold text-gray-800">{item.name}</h4>
        <p className="text-blue-600 text-base font-medium">${item.price}</p>

        <p
          className={`text-xs font-bold uppercase ${
            item.discount <= -4 ? "text-green-500" : "text-yellow-500"
          }`}
        >
          {item.discount <= -4 ? "Free Shipping" : "Fast Shipping"}
        </p>

        <p className="text-xs text-gray-400">Orders Delivered: {item.stock}</p>
        <p className="text-xs text-gray-500 hidden md:block">{item.description}</p>

         <Link href={`/product/${item.id}`} key={item.id}>  <button className="mt-2 cursor-pointer px-4 py-2 text-sm border border-blue-500 text-blue-600 rounded hover:bg-blue-50 transition">
          View Details
        </button> </Link>
      </div>
    </div>
   
  ))}


        </div>

 

  
       
      </div>
    </div>
  );
}
