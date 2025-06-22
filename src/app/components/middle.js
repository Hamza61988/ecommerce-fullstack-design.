"use client"
import Link from "next/link";
import { useState, useEffect } from "react";


export default function Middle() {
const [deals, setdeals] = useState([]);
const [Home1 , setHome1]  = useState([]);
const [Home2 , setHome2]  = useState([]);
const [endTime, setEndTime] = useState(null);
 const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  

 
  useEffect(() => {
    const targetTime = new Date().getTime() + 4 * 24 * 60 * 60 * 1000;
    setEndTime(targetTime);
  }, []);

  useEffect(() => {
    if (!endTime) return;

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = endTime - now;

      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

 

  async function fetchDeals() {
    try {
      const response = await fetch("http://localhost:4000/posts/Deals");
      let data = await response.json();
     console.log(data)
     setdeals(data)
    } catch (error) {
      console.error("Failed to fetch:", error);
    }
  }

  
  async function fetchHome1() {
    try {
      const response = await fetch("http://localhost:4000/posts/home1");
      let data = await response.json();
   
     setHome1(data)
    } catch (error) {
      console.error("Failed to fetch:", error);
    }
  }

  
  async function fetchHome2() {
    try {
      const response = await fetch("http://localhost:4000/posts/home2");
      let data = await response.json();
    
     setHome2(data)
    } catch (error) {
      console.error("Failed to fetch:", error);
    }
  }
  
  


useEffect(() => {
  fetchDeals();
  fetchHome1();
  fetchHome2();
}, []);



  return (
    <div className=" mx-4 md:mx-[80px] ">


        <div className="elements rounded   md:h-[240px] md:flex  md:flex-row flex-col  p-4 mt-4 h-fill shadow-sm">
            
                              
                  <span className="flex md:justify-center justify-between md:gap-0 gap-4  items-center  md:flex-col">
                  <span >
                  <h4 className="md:text-xl font-bold text-sm ">Deals and offers</h4>
                  <p className="md:hidden flex text-sm">Electronic equipments</p>
                  <p className="hidden md:flex ">Hygiene equipments</p>
                  </span>
                <div className=" flex text-lg gap-2 mt-4 font-semibold">
                  <span className="flex flex-col bg-gray-800 rounded text-white px-3 py-1 text-center">
                  <h2>0{timeLeft.days}</h2>
                  <p>days</p>
                  </span>

                  <span className="flex flex-col bg-gray-800 rounded text-white px-3 py-1 text-center">
                  <h2>{timeLeft.hours}</h2>
                  <p>hour</p>
                  </span>

                  <span className="flex flex-col bg-gray-800 rounded text-white px-3 py-1 text-center">
                    <h2> {timeLeft.minutes}</h2>
                  <p>min</p>
                  </span>

                  <span className="fle3x hidden md:flex  flex-col bg-gray-800 rounded text-white px-3 py-1 text-center">
                  <h2>{timeLeft.seconds}</h2>
                  <p>sec</p>

                  </span>
                </div>
                  </span>  



<div className="flex md:justify-between md:flex-row md:overflow-visible mt-10 md:items-center md:mt-0 gap-4 md:gap-5 pl-0 md:pl-4 overflow-x-auto whitespace-nowrap md:whitespace-normal w-auto md:w-full scrollbar-hide">
  {deals.map((e, i) => (
    <div
      key={i}
      className="flex-none flex flex-col items-center border w-[150px] min-w-[150px] h-auto transition bg-white hover:z-10 duration-200 hover:scale-105 border-gray-200 rounded-md p-3 text-center md:flex-1 md:min-w-0 md:w-auto md:border-0 md:p-0 md:rounded-none md:border-l md:border-gray-300"
    >
      <Link href={`/product/${e.id}`} className="flex flex-col items-center">
        <img
          src={e.imageUrl}
          alt={`section-${i + 1}`}
          className="h-[80px] w-[80px] object-contain mb-2"
        />
        <span className="text-sm font-medium">{e.name}</span>
        <span className="text-sm text-red-600 bg-red-100 px-4 py-1 rounded-3xl mt-1">
          {e.discount}%
        </span>
      </Link>
    </div>
  ))}
</div>











       
     </div>

     {/* 2nd */}
     

  {/* only on mobile */}
<div className="flex md:hidden elements flex-col mt-5 rounded shadow-sm   p-4">
  <div>
    <h4 className="text-xl font-bold">Home and Outdoor</h4>
  </div>


   <div className="flex overflow-x-auto border-gray-300 whitespace-nowrap gap-4 mt-4 scrollbar-hide">
      {Home1.map((e, i) => (
        <Link key={i} href={`/product/${e.id}`} className="flex-none">
          <div className="flex flex-col items-center border w-[150px] min-w-[150px] h-auto transition bg-white hover:z-10 duration-200 hover:scale-105 border-gray-200 rounded-md p-3 text-center cursor-pointer">
            <img
              className="h-[80px] w-[80px] object-contain mb-2"
              src={e.imageUrl}
              alt={e.name}
            />
            <span className="text-sm font-medium">{e.name}</span>
            <span className="text-sm text-gray-600">${e.price}</span>
          </div>
        </Link>
      ))}
    </div>

  
 <span className="mt-4">
    <button className="bg-blue-400 text-white px-4 py-2 rounded">
      Source now
    </button>
  </span>
</div>




<div className="hidden md:flex h-[240px] mt-4 shadow-sm relative">
  <div className="relative hidden md:flex ">
    <img
      src="main2.jpg"
      alt="Flipped image"
      className="top-0 left-10 w-[298px] h-[240px] scale-x-[-1] opacity-80"
    />
  </div>

  <span className="absolute top-4 left-6 text-white">
    <h4 className="text-lg text-black">Home and <br /> Outdoor</h4>
    <button className="mt-2 cursor-pointer bg-white text-black px-2 py-1 rounded">
      Source now
    </button>
  </span>

  <div className=" grid grid-cols-4">
    {Home1.map((e, i) => (
         <Link key={i} href={`/product/${e.id}`} className="flex-none">
      <div
        key={i}
        className="flex flex-col border w-[268px] h-[120px] transition bg-white hover:z-10 duration-200 hover:scale-110 border-gray-200 text-left px-3 py-2 relative"
      >
        <span className="text-sm font-medium">{e.name}</span>
        <span className="text-sm text-gray-600">${e.price}</span>

        <div className="ml-auto mt-auto cursor-pointer">
          <img
            className="h-[62px] w-[62px]"
            src={e.imageUrl}
            alt={e.name}
          />
        </div>
        
      </div>
      </Link>
    ))}
  </div>
 
</div>


{/* Mobile only section: Consumer Electronics */}
<div className="flex md:hidden elements flex-col mt-5 p-4 rounded shadow-sm">
  {/* Title */}
  <h4 className="text-lg font-semibold text-black">Consumer Electronics</h4>

  
  <div className="flex overflow-x-auto whitespace-nowrap gap-4 mt-4 scrollbar-hide">
    {Home2.map((e, i) => (
        <Link key={i} href={`/product/${e.id}`} className="flex-none">
      <div
        key={i}
        className="flex-none flex flex-col items-center border w-[150px] min-w-[150px] bg-white hover:scale-105 transition duration-200 border-gray-200 rounded-md p-3 text-center"
      >
        <img
          className="h-[80px] w-[80px] object-contain mb-2"
          src={e.imageUrl}
          alt={e.name}
        />
        <span className="text-sm font-medium text-black">{e.name}</span>
        <span className="text-sm text-gray-600">${e.price}</span>
      </div>
      </Link>
    ))}
    
  </div>

  {/* Button */}
  <div className="mt-4">
    <button className="bg-blue-400 text-white px-4 py-2 rounded">
      Source now
    </button>
  </div>
</div>



{/* 3 section */}
  <div className="elements hidden md:flex flex-col md:flex-row md:flex h-full mt-4 shadow-sm relative">
  
  <div className="relative hidden md:flex  ">
    <img
      src="section3.png"
      alt="Flipped image"
      className=" top-0 object-cover w-[298px] h-[240px]  opacity-80"
    />
  </div>


  <span className="relative md:absolute  md:top-4 md:left-6 text-white">
    <h4 className="text-lg md:flex hidden text-black ">Consumer electronics <br></br>and gadgets</h4>
     <h4 className="text-lg text-xl flex md:hidden p-4 font-semibold text-black ">Consumer electronics </h4>
    <button className="mt-2 md:flex hidden bg-white text-black  px-4 py-1 cursor-pointer  rounded">
      Source now
    </button>
  </span>


 <div className="grid  grid-cols-4 ">
  {Home2.map((e, i) => (
     <Link key={i} href={`/product/${e.id}`} className="flex-none">
    <div
      key={i}
      className="flex md:flex flex-col   border w-[268px] h-[120px] transition bg-white hover:z-10 duration-200 hover:scale-110 border-gray-200 text-left px-3 py-2 "
    >
      <span className="text-sm  font-medium">{e.name}</span>
      <span className="text-sm text-gray-600">${e.price}</span>

      <div className="ml-auto  mt-auto cursor-pointer ">
        <img
          className=" h-[62px] w-[62px]"
          src={e.imageUrl}
          alt={e.name}
        />
      </div>
    </div>
    </Link>
  ))}
</div>

 </div>

    </div>
  )
    
  
}