"use client"
import { IoGridSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiHeart } from "react-icons/ci";
import { useState , useEffect} from "react";
import Link from 'next/link';
import { usePathname , useRouter } from 'next/navigation';

export default function RealPage() {

  const router = useRouter();
  
 const [isFavorited, setIsFavorited] = useState(false);
 const [product , changeProducts] = useState([])

       const pathname = usePathname();
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (index) => {
    setFavorites((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

   async function fetchproducts() {
      try {
        const response = await fetch("http://localhost:4000/posts/");
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
   {product.slice(0, 8).map((e, i) => (
  
  <div
    key={i}
    className="relative flex flex-col md:flex-row items-center gap-6 p-5 rounded-2xl shadow-md hover:shadow-xl bg-white transition-all duration-300"
  >
    {/* Favorite Icon */}
    <button
      onClick={() => toggleFavorite(i)}
      className="absolute top-4 right-4 text-xl text-gray-500 hover:text-red-500 transition-all duration-150"
    >
      <CiHeart
        className={`transition-transform ${
          favorites[i] ? "text-red-500 scale-110" : "scale-100"
        }`}
      />
    </button>

    {/* Product Image */}
    <div className="w-28 h-28 md:w-36 md:h-36 flex-shrink-0 rounded-lg overflow-hidden border border-gray-200 bg-gray-50 flex items-center justify-center">
      <img
        src={e.imageUrl}
        alt={e.title}
        className="object-contain w-full h-full"
        loading="lazy"
      />
    </div>

    {/* Product Info */}
    <div className="flex flex-col gap-2 text-center md:text-left w-full">
      <h3 className="text-lg md:text-xl font-semibold text-gray-800">{e.name}</h3>
      <p className="text-blue-600 text-base md:text-lg font-medium">${e.price}</p>

      <p
        className={`text-xs font-semibold uppercase tracking-wide ${
          e.discount <= -4 ? "text-green-500" : "text-yellow-500"
        }`}
      >
        {e.discount <= -4 ? "Free Shipping" : "Fast Shipping"}
      </p>

      <p className="text-sm text-gray-500">Orders Delivered: <strong>{e.stock}</strong></p>
      <p className="text-sm text-gray-600 hidden md:block">{e.description}</p>

       <Link href={`/product/${e.id}`} key={e.id}><button className="mt-3 cursor-pointer self-center md:self-start px-4 py-2 text-sm font-medium text-blue-600 border border-blue-500 rounded-md hover:bg-blue-50 transition">
        View Details
      </button></Link> 
    </div>
  </div>

))}

  </div>
</div>

    </div>
  );
}
