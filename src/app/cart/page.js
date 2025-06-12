"use client"
import { IoMdPerson } from "react-icons/io";
import { MdMessage } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { usePathname } from 'next/navigation';
import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import Link from 'next/link';

const products = [
  {
    title: "Modern Office Chair",
    size: "Medium",
    color: "Black",
    material: "Leather",
    price: 129.99,
    image: "section4 (1).png",
  },
  {
    title: "Wooden Coffee Table",
    size: "Large",
    color: "Walnut Brown",
    material: "Solid Wood",
    price: 249.0,
    image: "section4 (2).png",
  },
  {
    title: "LED Desk Lamp",
    size: "Small",
    color: "White",
    material: "Aluminum",
    price: 45.5,
    image: "section4 (3).png",
  },
];

export default function Cart() {
  let array3 = [
    { image: "section4 (9).png", name: "Wireless Mouse", price: "$25" },
    { image: "section4img.png", name: "Smart Watch", price: "$120" },
    { image: "liver.png", name: "Bluetooth Speaker", price: "$45" },
    { image: "section4 (1).png", name: "Wireless Mouse", price: "$25" },
   
  ];

  const navItems = [
    { icon: IoMdPerson, label: "Person" , link: "Personal" },
    { icon: MdMessage, label: "Message" , link: "Messages" },
    { icon: FaHeart, label: "Orders" , link: "Orders" },
  ];

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
  },]

     const pathname = usePathname();
    const [favorites, setFavorites] = useState({});
  
    const toggleFavorite = (index) => {
      setFavorites((prev) => ({
        ...prev,
        [index]: !prev[index],
      }));
    };

  const subtotal = products.reduce((acc, item) => acc + item.price, 0);
  const discount = 60.0;
  const tax = 14.0;
  const total = (subtotal - discount + tax).toFixed(2);

  return (
    <div className="w-full">
     
      <div className="flex flex-row px-4 md:px-[80px] shadow-md justify-between py-3 items-center gap-6 text-sm text-gray-500 w-full" style={{ color: "var(--navbar-color)" }}>
        <div className="flex items-center justify-center">
          <Link href={'/'}>
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
     
        <div className="py-5">
          <h4 className="text-2xl font-semibold">My cart ({products.length})</h4>
        </div>

       
        <div className="md:hidden elements rounded shadow-sm p-3 flex flex-col gap-4 px-1">
          {products.map((e, i) => (
            <div key={i} className="flex gap-4 items-start border-b pb-4">
              <span className="flex justify-center items-center">
                <img src={e.image} width={95} alt={`Product ${i + 1}`} className="rounded-md object-fill" />
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
                  <h4 className="font-semibold text-green-500 text-right">${e.price.toFixed(2)}</h4>
                </div>
              </div>
               <hr className="text-gray-200"></hr>
            </div>
           
          ))}

          <div className="    p-3 grid grid-cols-4 gap-70">

           <span className="">
            <p className="text-gray-400">Items3:</p>
             <p className="text-gray-400">Shipping:</p>
              <p className="text-gray-400">Tax:</p>
              <h4 className="font-bold text-xl mt-2">Total</h4>
           </span>

          <span className="">
             <p className="font-bold">$32.00</p>
             <p className="font-bold">$10.00</p>
              <p className="font-bold">$7.00</p>
               <h4 className="font-bold text-2xl mt-2"> $220.00</h4>
          </span>
          </div>

          
        </div>

           <div className=" md:hidden">
            <h4 className="text-2xl my-6 font-bold">Saved for Later</h4>
            <div className="flex flex-col  flex justify-center gap-6">
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
                    <span className="flex gap-2">
                       <button className=" px-4 py-2 rounded text-sm text-blue-600 border border-gray-300  hover:bg-gray-300">
                 Move to Cart
              </button>
              <button className="text-red-500 border border-gray-300 rounded px-4 py-2 hover:bg-gray-100 text-sm">
                Remove all
              </button>
                    </span>
                 
                  </div>
                </div>
              ))}
            </div>
          </div>

       
        <div className="hidden md:flex flex-col lg:flex-row gap-6 pb-10">
         
          <div className="w-full lg:w-2/3 flex flex-col gap-3 rounded p-4">
            {products.map((e, i) => (
              <div className="gap-3 p-3 elements rounded shadow-sm flex flex-col" key={i}>
                <div className="flex gap-3">
                  <img
                    className="object-cover p-2 border border-gray-300 h-[100px] w-[100px] rounded"
                    src={e.image}
                    alt={e.title}
                  />
                  <div className="w-full flex flex-col gap-2">
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium">{e.title}</h4>
                      <h4 className="text-green-500 font-semibold">${e.price}</h4>
                    </div>

                    <div className="flex justify-between text-gray-500 text-sm">
                      <h4>
                        Size: {e.size}, Color: {e.color}, Material: {e.material}
                      </h4>
                      <select className="border border-gray-300 w-14 rounded px-2 py-1 text-sm">
                        {[1, 2, 3, 4].map((num) => (
                          <option key={num}>{num}</option>
                        ))}
                      </select>
                    </div>

                    <div className="flex gap-2 text-gray-500 text-sm">
                      <h4>Seller:</h4>
                      <h4 className="font-medium text-gray-700">Artel Market</h4>
                    </div>

                    <div className="flex gap-3 mt-1 text-sm">
                      <button className="text-red-500 border border-gray-300 rounded px-3 py-1 hover:bg-gray-100">
                        Remove
                      </button>
                      <button className="text-green-500 border border-gray-300 rounded px-3 py-1 hover:bg-gray-100">
                        Save for Later
                      </button>
                    </div>
                  </div>
                </div>

                <hr className="border-t border-gray-300 mt-3" />
              </div>
            ))}

            <div className="flex shadow-sm elements rounded justify-between p-3 w-full">
              <button className="bg-gray-200 px-4 py-2 rounded text-sm hover:bg-gray-300">
                Back to Shop
              </button>
              <button className="text-red-500 border border-gray-300 rounded px-4 py-2 hover:bg-gray-100 text-sm">
                Remove all
              </button>
            </div>
    
               <div className="elements  p-6 rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-4">Saved for later</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {array3.map((item, index) => (
            <div key={index} className="border border-gray-200 hover:shadow-sm  rounded-md ">
              <span className="">
                  <img
                src={item.image}
                alt={item.name}
                className="w-full  bg-gray-100 py-4   h-40 object-contain mb-3 mx-auto"
              />
              </span>
            <div className="p-2 ">
              <p className="text-lg font-medium mb-1">{item.price}</p>
              <p className="text-sm text-gray-700">{item.name}</p>
              <button className="mt-3 px-4 py-2 text-sm text-blue-600 border border-gray-300 rounded hover:bg-gray-300">
                Move to cart
              </button>
              </div>
            </div>
          ))}
        </div>
        
      </div>

        <div className="w-[1180px] h-[120px] bg-blue-600 text-white flex justify-between items-center px-10 rounded-md shadow-md mx-auto">
        <div>
          <h3 className="text-lg font-semibold">Super discount on more than 100 USD</h3>
          <p className="text-sm text-white/80">Have you ever finally just write dummy info</p>
        </div>
        <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-md">
          Shop now
        </button>
      </div>
      
          </div>


          
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
