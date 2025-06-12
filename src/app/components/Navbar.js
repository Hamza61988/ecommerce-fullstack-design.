"use client"
import { IoMdPerson } from "react-icons/io";
import { MdMessage } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from 'next/link';

import { useRouter } from 'next/navigation';


const array = [
  { icon: IoMdPerson, label: "Person" , link: "Personal" },
  { icon: MdMessage, label: "Message" , link: "Messages" },
  { icon: FaHeart, label: "Orders" , link: "Orders" },
  { icon: IoCart, label: "My Cart"  , link: "cart"},
];

export default function Navbar({ onToggleSidebar }) {
  const router = useRouter();
  return (
    <div className="elements">
   
      <header className="flex flex-col p-3 gap-4 md:hidden">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-4">
            <button onClick={onToggleSidebar}>
              <GiHamburgerMenu />
            </button>
            <img
    src="/liver.png"
    alt="liver"
    width={50}
    className="block cursor-pointer"
    onClick={() => router.push('/')}
  />

          </div>
          <div className="flex items-center gap-4">
            <IoCart size={24} />
            <IoMdPerson size={24} />
          </div>
        </div>
        <input
          className="pl-4 border rounded py-2 w-full outline-none"
          placeholder="Search"
          type="search"
        />
        <div className="w-full overflow-x-auto whitespace-nowrap hide-scrollbar">
          <div className="inline-flex gap-3 px-2 pb-2">
            {["Hot offers", "Gift card", "Projects", "Kewl item", "Basic item", "Special item", "Random item", "Last item"].map((item, idx) => (
              <span key={idx} className="bg-blue-200 text-blue-800 px-3 py-2 rounded whitespace-nowrap">
                <button>{item}</button>
              </span>
            ))}
          </div>
        </div>
      </header>

      <header className="jody hidden md:flex items-center justify-between py-4">
        <div className="flex items-center">
           <img
    src="/liver.png"
    alt="liver"
    width={60}
    className="block cursor-pointer"
    onClick={() => router.push('/')}
  />
        </div>

        <div className="flex items-center border rounded-lg overflow-hidden w-full max-w-xl mx-6" style={{ border: "1px solid var(--button-color)" }}>
          <input className="pl-4 py-2 w-full outline-none" placeholder="Search" type="search" />
          <select className="px-4 py-2 border-l outline-none" style={{ borderLeft: "1px solid var(--button-color)" }}>
            <option value="">All Categories</option>
            <option value="tv">TV</option>
            <option value="sofa">Sofa</option>
          </select>
          <button className="px-6 py-2 text-white" style={{ backgroundColor: "var(--button-color)" }}>
            Search
          </button>
        </div>

        <div className="flex items-center space-x-6 text-sm" style={{ color: "var(--navbar-color)" }}>
          {array.map((e, i) => {
            const Icon = e.icon;
            return (
           <div
  key={i}
  className="flex flex-col items-center justify-center cursor-pointer gap-1 text-sm transition hover:text-blue-600"
>
  <Link href={e.link}>
    <div className="flex flex-col items-center">
      <Icon size={20} />
      <span>{e.label}</span>
    </div>
  </Link>
</div>

            );
          })}
        </div>
      </header>

      {/* Bottom Menu */}
      <div className="jody hidden md:flex items-center py-4 justify-between">
        <div className="flex gap-4 items-center">
          <span className="flex items-center">
            <GiHamburgerMenu />
            <select className="cursor-pointer appearance-none outline-none ml-2">
              <option value="">All Categories</option>
              <option value="tv">TV</option>
              <option value="sofa">Sofa</option>
            </select>
          </span>
          <button className="cursor-pointer">Hot Offers</button>
          <button className="cursor-pointer">Gift Boxes</button>
          <button className="cursor-pointer">Projects</button>
          <button className="cursor-pointer">Menu Items</button>
          <select className="py-2 appearance-none cursor-pointer outline-none">
            <option value="">Help</option>
            <option value="tv">TV</option>
            <option value="sofa">Sofa</option>
          </select>
        </div>
        <div className="flex gap-4">
          <select className="cursor-pointer appearance-none outline-none">
            <option value="">English, USD</option>
            <option value="siraiki">Siraiki</option>
            <option value="chinese">Chinese</option>
          </select>
          <select className="transition cursor-pointer appearance-none outline-none">
            <option value="">Ship to United States</option>
            <option value="uk">UK</option>
            <option value="india">INDIA</option>
          </select>
        </div>
      </div>
      <hr className="cursor-pointer shadow-sm text-gray-300" />
    </div>
  );
}
