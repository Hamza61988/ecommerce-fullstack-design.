'use client';
import { useState, useEffect } from 'react';
import { IoMdPerson } from 'react-icons/io';
import { MdMessage } from 'react-icons/md';
import { FaHeart } from 'react-icons/fa';
import { IoCart } from 'react-icons/io5';
import { GiHamburgerMenu } from 'react-icons/gi';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function Navbar({ onToggleSidebar }) {
  const pathname = usePathname();
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState('');
  const [allPosts, setAllPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [showUserInfo, setShowUserInfo] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      try {
        const parsed = JSON.parse(storedEmail);
        const namePart = parsed?.value?.split('@')[0];
        if (namePart) {
          setUserName(namePart.charAt(0).toUpperCase() + namePart.slice(1));
        }
      } catch (err) {
        console.error('Error parsing email from localStorage:', err);
      }
    }
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('http://localhost:4000/posts');
        const data = await res.json();
        setAllPosts(data);
      } catch (err) {
        console.error('Error fetching posts:', err);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const results = allPosts.filter((post) =>
      (post.name?.toLowerCase() || '').includes(lowerCaseQuery) ||
      (post.description?.toLowerCase() || '').includes(lowerCaseQuery) ||
      (post.category?.toLowerCase() || '').includes(lowerCaseQuery) ||
      (post.design?.toLowerCase() || '').includes(lowerCaseQuery)
    );
    setFilteredPosts(results);
  }, [searchQuery, allPosts]);

  function logout() {
    localStorage.removeItem('token');
     localStorage.removeItem('email');
    router.push('/');
  }

  return (
    <div className="relative elements">
      {/* Mobile Header */}
      <header className="flex flex-col p-3 gap-4 md:hidden">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-4">
            {pathname === '/dash' && (
              <button
                onClick={onToggleSidebar}
                className="p-2 text-gray-600 hover:text-black transition-all duration-200"
                aria-label="Toggle Sidebar"
              >
                <GiHamburgerMenu className="text-xl" />
              </button>
            )}
            <img
              src="/liver.png"
              alt="liver"
              width={50}
              className="block cursor-pointer"
              onClick={() => router.push('/dash')}
            />
          </div>

          <div className="flex items-center gap-4">
            <Link href="/cart">
              <IoCart size={24} />
            </Link>

            {/* Mobile User Dropdown */}
            <div className="relative">
              <button onClick={() => setShowUserInfo((prev) => !prev)} className="focus:outline-none">
                <IoMdPerson size={24} />
              </button>
              {showUserInfo && (
                <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg p-4 w-48 z-50 text-sm">
                  <p className="text-gray-800">
                    Hello, <strong>{userName || 'Guest'}</strong>
                  </p>
                  <button onClick={logout} className="mt-2 text-red-500 hover:underline">
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="w-full">
          <div className="relative w-full">
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-4 border rounded py-2 w-full outline-none"
              placeholder="Search for products..."
              type="search"
            />
            {searchQuery && (
              <div className="absolute z-50 left-0 right-0 bg-white shadow-md rounded mt-2 max-h-64 overflow-y-auto">
                {filteredPosts.length > 0 ? (
                  filteredPosts.map((post) => (
                    <Link
                      key={post.id}
                      href={`/product/${post.id}`}
                      className="p-3 border-b hover:bg-gray-100 transition-all block"
                    >
                      <p className="font-medium text-gray-800">{post.name}</p>
                      <p className="text-sm text-gray-500">{post.description}</p>
                    </Link>
                  ))
                ) : (
                  <div className="p-3 text-sm text-gray-500">No results found</div>
                )}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Desktop Header */}
      <header className="jody hidden md:flex items-center justify-between py-4">
        <div className="flex items-center">
          <img
            src="/liver.png"
            alt="liver"
            width={60}
            className="block cursor-pointer"
            onClick={() => router.push('/dash')}
          />
        </div>

        {/* Desktop Search */}
        <div className="relative w-full max-w-xl mx-6">
          <div className="flex items-center border rounded-lg overflow-hidden" style={{ border: '1px solid var(--button-color)' }}>
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-4 py-2 w-full outline-none"
              placeholder="Search"
              type="search"
            />
            <select className="px-4 py-2 border-l outline-none" style={{ borderLeft: '1px solid var(--button-color)' }}>
              <option value="">All Categories</option>
              <option value="tv">TV</option>
              <option value="sofa">Sofa</option>
            </select>
            <button className="px-6 py-2 text-white" style={{ backgroundColor: 'var(--button-color)' }}>
              Search
            </button>
          </div>
          {searchQuery && (
            <div className="absolute z-50 left-0 right-0 bg-white shadow-md rounded mt-2 max-h-64 overflow-y-auto">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/product/${post.id}`}
                    className="p-3 border-b hover:bg-gray-100 transition-all block"
                  >
                    <p className="font-medium text-gray-800">{post.name}</p>
                    <p className="text-sm text-gray-500">{post.description}</p>
                  </Link>
                ))
              ) : (
                <div className="p-3 text-sm text-gray-500">No results found</div>
              )}
            </div>
          )}
        </div>

        {/* Desktop Icons with Dropdown for User */}
        <div className="flex items-center space-x-6 text-sm" style={{ color: 'var(--navbar-color)' }}>
          {/* Person icon with dropdown instead of link */}
          <div className="relative flex flex-col items-center cursor-pointer gap-1 transition hover:text-blue-600">
            <button onClick={() => setShowUserInfo((prev) => !prev)} className="flex flex-col items-center">
              <IoMdPerson size={20} />
              <span>Person</span>
            </button>
            {showUserInfo && (
              <div className="absolute right-0 top-10 bg-white shadow-lg rounded-lg p-4 w-48 z-50 text-sm">
                <p className="text-gray-800">
                  Hello, <strong>{userName || 'Guest'}</strong>
                </p>
                <button onClick={logout} className="mt-2 text-red-500 hover:underline">
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Other icons (Messages, Orders, Cart) */}
          <Link href="/Messages">
            <div className="flex flex-col items-center hover:text-blue-600">
              <MdMessage size={20} />
              <span>Message</span>
            </div>
          </Link>
          <Link href="/Orders">
            <div className="flex flex-col items-center hover:text-blue-600">
              <FaHeart size={20} />
              <span>Orders</span>
            </div>
          </Link>
          <Link href="/cart">
            <div className="flex flex-col items-center hover:text-blue-600">
              <IoCart size={20} />
              <span>My Cart</span>
            </div>
          </Link>
        </div>
      </header>

      {/* Desktop Bottom Bar */}
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
