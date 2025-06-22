'use client';

import { use } from 'react';
import { useState, useEffect } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { FaUserTie, FaMapMarkerAlt, FaInfoCircle, FaTruck } from 'react-icons/fa';
import { BsPatchCheckFill } from 'react-icons/bs';
import Link from 'next/link';
import TabComponent from '../../components/TabComponent';

export default function Details({ params }) {
const { id } = use(params);



  const [product, setProduct] = useState(null);
  const [showFull, setShowFull] = useState(false);
  const [relatedProducts, setRelatedProducts] = useState([]);
const [state , changeState ] = useState(false)

const [cartadded , changeCart ] = useState(false)

  function toggleReadMore() {
    setShowFull(!showFull);
  }

  useEffect(() => {
  const isInCart = localStorage.getItem(product?.id);
  if (isInCart) {
    changeCart(true);
  }
}, [product?.id]);


useEffect(() => {
  const emailCheck = localStorage.getItem('email');
  changeState(!!emailCheck);
}, []);


  useEffect(() => {
    async function fetchRelated() {
      try {
        const res = await fetch('https://ecommerce-fullstack-backend-six.vercel.app/posts');
        const data = await res.json();
        setRelatedProducts(data.slice(5, 9));
      } catch (err) {
        console.error('Failed to load related products', err);
      }
    }
    fetchRelated();
  }, []);

  useEffect(() => {
    if (!id) return;
    async function fetchProduct() {
      try {
        const res = await fetch(`https://ecommerce-fullstack-backend-six.vercel.app/post/${id}`);
        if (!res.ok) throw new Error('Product not found');
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    }
    fetchProduct();
  }, [id]);

  if (!product) return <div className="p-4">Loading...</div>;

  const detail = product.detail || '';
  const truncatedDetail = detail.length > 150 ? detail.slice(0, 150) + '...' : detail;

function Addtocart(id) {
  localStorage.setItem(id, 'true'); 
  changeCart(true); 
}
  
  return (
    <div>
     {/* Mobile View */}
<div className="md:hidden">
  <div className="flex bg-gray-300 mt-5 rounded h-[200px] w-full justify-center items-center">
    <img src={product.imageUrl} className="h-[170px] w-[170px]" />
  </div>
  <span className="gap-2 flex justify-center mt-2">
    {[...Array(5)].map((_, i) => (
      <img
        key={i}
        className="h-[30px] w-[30px] border border-gray-300 rounded p-1"
        src={product.imageUrl}
        alt={`Image ${i + 1}`}
      />
    ))}
  </span>

  <div className="elements rounded shadow-sm mt-5 p-2">
    <div className="justify-between text-gray-400 flex items-center">
      <span className="flex items-center gap-1 text-yellow-500">
        {Array(5).fill(0).map((_, i) => <AiFillStar key={i} />)}
      </span>
      <span>32 Reviews</span>
      <span>154 sold</span>
    </div>

    <div className="flex flex-col gap-3 mt-2">
      <h4>{product.name}</h4>
      <span className="flex items-center gap-2">
        <h4 className="text-red-700 text-xl font-bold">${product.price}.00</h4>
        <p className="text-gray-400 text-sm">(400-300 pcs)</p>
      </span>

     
      {state ? (
        <button
          onClick={() => Addtocart(product.id)}
          className="buttons text-white w-full p-2 rounded"
        >
          {cartadded ? "Added to cart" : "Add to cart"}
        </button>
      ) : (
        <button className="buttons text-white w-full p-2 rounded">Send Inquiry</button>
      )}
    </div>

    <div className="grid my-5 grid-cols-2">
      <span className="grid gap-3">
        <h3>Condition</h3>
        <h3>Material</h3>
        <h3>Category</h3>
        <h3>Item num</h3>
      </span>
      <span className="grid gap-3 text-gray-400">
        <p>{product.Condition || "N/A"}</p>
        <p>{product.material || "N/A"}</p>
        <p>{product.category || "N/A"}</p>
        <p>{product.itemnum || "N/A"}</p>
      </span>
    </div>

    <span className="my-3 text-sm text-gray-700 leading-relaxed">
      <p>
        <FaInfoCircle className="inline mr-1 text-blue-500" />
        {showFull ? detail : truncatedDetail}
      </p>
      {detail.length > 150 && (
        <button onClick={toggleReadMore} className="text-blue-600 mt-1 hover:underline">
          {showFull ? 'Read less' : 'Read more'}
        </button>
      )}
    </span>
  </div>

  <div className="elements rounded shadow-md p-3 mt-5">
    <div className="flex gap-2">
      <span className="flex justify-center items-center bg-[#4CA7A799] px-4 py-2 rounded">
        <h3>R</h3>
      </span>
      <span>
        <h3 className="flex items-center gap-1">
          <FaUserTie /> Supplier
        </h3>
        <h3>Guanjoi Trading LLC</h3>
      </span>
    </div>
    <hr className="mt-3 text-gray-300" />
    <span className="flex mt-4 justify-between items-center">
      <h4 className="flex items-center gap-1">
        <FaMapMarkerAlt /> Germany
      </h4>
      <h4 className="flex items-center gap-1 text-green-600">
        <BsPatchCheckFill /> Verified
      </h4>
      <h4 className="flex items-center gap-1">
        <FaTruck /> Shipping
      </h4>
    </span>
  </div>
</div>


      {/* Desktop View */}
      <div className="md:flex flex-col hidden">
        <div>
          <p className="my-4 text-gray-400">Home {'>'} Clothing {'>'} Men's Wear {'>'} Summer Clothing</p>
          <div className="elements gap-8 rounded shadow-sm flex p-4">
            <div className="w-[280px]">
              <div className="flex justify-center border rounded border-gray-300 h-[340px] flex-col">
                <span className="flex justify-center">
                  <img className="h-[200px] w-[200px] object-cover rounded" src={product.imageUrl} alt={product.name || 'Product Image'} />
                </span>
              </div>
             <span className="gap-2 flex justify-center mt-2">
  {[...Array(5)].map((_, i) => (
    <img
      key={i}
      className="h-[30px] w-[30px] border border-gray-300 rounded p-1"
      src={product.imageUrl}
      alt={`Image ${i + 1}`}
    />
  ))}
</span>

            </div>

            <div className="w-[700px]  flex flex-col">
              <p className="text-green-400">In stock</p>
              <h4 className="text-2xl font-semibold">{product.description}</h4>
              <span className="flex gap-3 text-gray-400 items-center">
                <span className="flex text-yellow-500">
                  {Array(5).fill(0).map((_, i) => <AiFillStar key={i} />)}
                </span>
                <p>{product.reviews} reviews</p>
                <p>{product.stock} sold so far!!</p>
              </span>

                        <div className="w-[430px] mt-5">
  <div className="grid grid-cols-2 gap-y-2 mb-2">
    <h4 className="text-gray-400 font-medium"> Price</h4>
    <h4 className="text-gray-700">{!product.Pricetype ? "Fixed" : product.Pricetype}</h4>
  </div>
  <hr className="mb-2" />
  <div className="grid grid-cols-2 gap-y-2 mb-4">
    <h4 className="font-medium text-gray-400"> Type:</h4>
    <p className="text-gray-700">{product.category || "Casual Wear"}</p>
    <h4 className="font-medium text-gray-400"> Material</h4>
    <p className="text-gray-700">{product.material || "Cotton Blend"}</p>
    <h4 className="font-medium text-gray-400"> Design</h4>
    <p className="text-gray-700">{product.design || "Modern Fit"}</p>
  </div>
  <hr className="mb-2" />
  <div className="grid grid-cols-2 gap-y-2">
    <h4 className="font-medium text-gray-400"> Customization:</h4>
    <p className="text-gray-700">{product.Customization || "Logo Printing"}</p>
    <h4 className="font-medium text-gray-400"> Protection</h4>
    <p className="text-gray-700">{product.Protection || "Water Resistant"}</p>
    <h4 className="font-medium text-gray-400"> Warranty</h4>
    <p className="text-gray-700">{product.Warranty || "6 Months"}</p>
  </div>
</div>
</div>
            <div className="flex p-4 rounded h-[350px] gap-5 w-[300px] flex-col  outline outline-gray-400 element">
              <span className="flex cursor-pointer gap-3">
                <span className="flex justify-center items-center bg-[#4CA7A799] px-4 py-2 rounded">
                  <h4>R</h4>
                </span>
                <span className="flex flex-col">
                  <h4 className="flex items-center gap-1">
                    <FaUserTie /> Supplier
                  </h4>
                  <h4>Guanjoi Trading LLC</h4>
                </span>
              </span>
              <hr className="text-gray-300" />
              <span className="flex gap-2 flex-col">
                <h4 className="flex items-center gap-1">
                  <FaMapMarkerAlt /> Germany, Berlin 🇩🇪
                </h4>
                <h4 className="flex items-center text-green-600 gap-1">
                  <BsPatchCheckFill /> Verified Seller
                </h4>
                <h4 className="flex items-center gap-1">
                  <FaTruck /> World Wide Shipping
                </h4>
              </span>
              <span className="flex gap-2 flex-col">
             {state ? (
  <button onClick={() => Addtocart(product.id)} className="buttons text-white w-full p-2 rounded">
    {cartadded ? "Added to cart" : "Add to cart"}
  </button>
) : (
  <button className="buttons text-white w-full p-2 rounded">Send Inquiry</button>
)}

                <button className="p-2 bg-white text-blue-500 border border-gray-400 cursor-pointer rounded">Seller's Profile</button>
              </span>
            </div>
          </div>

          <div className="mt-5 flex gap-3">
            <span>
              <TabComponent />
              <div className="my-3 space-y-10">
                <div className="bg-white p-6 rounded-md shadow-md">
                  <h2 className="text-xl font-semibold mb-4">Saved for later</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {relatedProducts.map((item, index) => (
                      <div key={index} className="border border-gray-200 hover:shadow-sm rounded-md">
                        <span className="">
                          <img src={item.imageUrl} alt={item.name} className="w-full bg-gray-100 py-4 h-40 object-contain mb-3 mx-auto" />
                        </span>
                        <div className="p-2">
                          <p className="text-lg font-medium mb-1">${item.price}</p>
                          <p className="text-sm text-gray-700">{item.name}</p>
                          <button className="mt-3 px-4 py-2 text-sm text-blue-600 border border-gray-300 rounded hover:bg-gray-300">Move to cart</button>
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
                  <Link href={'/'}>
                    <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-md">Shop now</button>
                  </Link>
                </div>
              </div>
            </span>

            <span className="shadow-sm flex flex-col gap-5 p-2 elements h-fit bg-white rounded-md">
              <h4 className="font-semibold text-xl border-b border-gray-200 pb-2 mb-4">You may like</h4>
              {relatedProducts.map((e, i) => (
                <div key={i} className="flex gap-3 items-center cursor-pointer hover:bg-gray-50 rounded-md p-2 transition-colors">
                  <span className="block h-[90px] w-[110px] overflow-hidden rounded border border-gray-300 p-1">
                    <img className="h-full w-full object-cover" src={e.imageUrl} alt={e.name} />
                  </span>
                  <span className="flex flex-col justify-center">
                    <h4 className="font-medium">{e.name}</h4>
                    <p className="text-gray-600">${e.price}</p>
                  </span>
                </div>
              ))}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}