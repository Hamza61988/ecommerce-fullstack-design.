"use client";
import "../globals.css";
import { useEffect, useRef, useState } from "react";
import { HiOutlineX } from "react-icons/hi";
import {
  FaUserCircle,
  FaHome,
  FaThList,
  FaHeart,
  FaBox,
  FaGlobe,
  FaPhoneAlt,
  FaInfoCircle,
  FaHandshake,
  FaShieldAlt,
  FaFileContract,
} from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Main({ isSidebarOpen, setIsSidebarOpen }) {
  const router = useRouter();
  const array = [
    "Auto mobiles",
    "Clothes and wear",
    "Home Interiors",
    "Computer and tech",
    "Tools, equipments",
    "Sports and outdoor",
    "Animals and pets",
    "Machinery tools",
    "More categories",
  ];

  const [userEmail, setUserEmail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const sidebarRef = useRef();

useEffect(() => {
  const stored = localStorage.getItem("email");

  try {
    const emailObj = JSON.parse(stored);
    if (emailObj.expiry > Date.now()) {
      setUserEmail(emailObj);
    } else {
      localStorage.removeItem("email");
    }
  } catch {
    localStorage.removeItem("email");
  }

  setIsLoading(false);
}, []);


  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    }

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen, setIsSidebarOpen]);

  return (
    <div className="mx-4 md:mx-[80px] relative">
      <div className="elements md:rounded flex flex-row justify-center md:shadow-sm md:p-4 py-2 gap-4 md:my-4">
        <div className="gap-1 flex hidden xl:flex md:hidden lg:hidden flex-col">
          {array.map((e, i) => (
            <div
              className="py-2 px-4 w-55 rounded hover:bg-[#E5F1FF] cursor-pointer"
              key={i}
            >
              <h3>{e}</h3>
            </div>
          ))}
        </div>

        <div className="lg:flex  flex relative">
          <img
            src="main.png"
            alt="Main"
            className="md:w-full md:h-full h-full object-cover rounded"
          />
          <div className="absolute top-4 flex flex-col left-4 text-black px-3 py-2 rounded">
            <p className="md:text-2xl text-lg font-medium">Latest Trending</p>
            <span className="font-bold md:text-4xl text-xl text-black">
              Electronic items
            </span>
            <button className="md:w-33 w-28 cursor-pointer rounded mt-2 p-1 bg-white">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex mx-1 hidden md:flex flex-col">
          {isLoading ? (
            <div className="logindiv bg-gray-100 text-gray-500 rounded-lg p-6 w-[250px] h-[124px] flex items-center justify-center">
              Loading...
            </div>
          ) : !userEmail ? (
            <div className="logindiv bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg text-white p-6 w-[250px] flex flex-col justify-center items-start h-auto">
              <div className="flex items-center gap-2 mb-3">
                <img
                  className="h-[44px] w-[44px] rounded-full bg-blue-200 p-1"
                  alt="user"
                  src="photo.png"
                />
                <h1 className="text-sm">
                  Hi, User <br /> let's get started
                </h1>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <button
                  onClick={() => router.push("/signin")}
                  className="bg-white text-blue-600 rounded py-1 font-medium hover:bg-gray-100 transition"
                >
                  Join now
                </button>
                <button
                  onClick={() => router.push("/")}
                  className="bg-blue-600 text-white border border-white rounded py-1 font-medium hover:bg-blue-700 transition"
                >
                  Login
                </button>
              </div>
            </div>
          )  : (
 <div className="logindiv bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg text-white p-6 w-[250px] h-[177px] flex flex-col justify-center items-start ">

    <h2 className="text-lg font-semibold mb-1">
      Welcome, <strong>{userEmail.value.split("@")[0]}</strong>
    </h2>
    <h3 className="text-sm opacity-90">Let’s explore what’s trending!</h3>
  </div>
)}

          <span className="orange rounded mt-4 p-6 text-white h-[104px] w-[250px]">
            Get US $10 off with a new supplier
          </span>
          <span className="cyanshi rounded mt-4 p-6 text-white h-[104px] w-[250px]">
            Send quotes with supplier preferences
          </span>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-[280px] bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        ref={sidebarRef}
      >
        <div className="p-4 flex flex-col h-full">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <FaUserCircle size={24} />
              <h4 className="text-lg font-semibold">Sign in | Register</h4>
            </div>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-gray-600 hover:text-black"
            >
              <HiOutlineX size={24} />
            </button>
          </div>

          <div className="space-y-4 text-sm font-medium">
            <div className="flex items-center gap-2 hover:text-blue-600 cursor-pointer">
              <FaHome /> Home
            </div>
            <div className="flex items-center gap-2 hover:text-blue-600 cursor-pointer">
              <FaThList /> Categories
            </div>
            <div className="flex items-center gap-2 hover:text-blue-600 cursor-pointer">
              <FaHeart /> Favorites
            </div>
            <div className="flex items-center gap-2 hover:text-blue-600 cursor-pointer">
              <FaBox /> My Orders
            </div>
            <hr className="border-gray-200" />
            <div className="flex items-center gap-2 hover:text-blue-600 cursor-pointer">
              <FaGlobe /> English USD
            </div>
            <div className="flex items-center gap-2 hover:text-blue-600 cursor-pointer">
              <FaPhoneAlt /> Contact Us
            </div>
            <div className="flex items-center gap-2 hover:text-blue-600 cursor-pointer">
              <FaInfoCircle /> About
            </div>
            <hr className="border-gray-200" />
            <div className="flex items-center gap-2 hover:text-blue-600 cursor-pointer">
              <FaFileContract /> User Agreement
            </div>
            <div className="flex items-center gap-2 hover:text-blue-600 cursor-pointer">
              <FaHandshake /> Partnership
            </div>
            <div className="flex items-center gap-2 hover:text-blue-600 cursor-pointer">
              <FaShieldAlt /> Privacy Policy
            </div>
          </div>
        </div>
      </div>

      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-25 z-40 md:hidden"></div>
      )}
    </div>
  );
}
