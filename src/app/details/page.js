import { AiFillStar } from "react-icons/ai";
import { BsPatchCheckFill } from "react-icons/bs";
import { FaTruck, FaBoxOpen, FaUserTie, FaMapMarkerAlt, FaTools, FaInfoCircle } from "react-icons/fa";
import TabComponent from "../components/TabComponent";

export default function Details() {
  let array2 = [
    { image: "section4 (9).png", name: "Wireless Mouse", price: "$25" },
    { image: "section4img.png", name: "Smart Watch", price: "$120" },
    { image: "liver.png", name: "Bluetooth Speaker", price: "$45" },
    { image: "section4 (1).png", name: "Wireless Mouse", price: "$25" },
    { image: "section2 (1).png", name: "Bluetooth Speaker", price: "$45" },
    { image: "section4 (9).png", name: "Wireless Mouse", price: "$25" },
  ];

   let array3 = [
    { image: "section4 (9).png", name: "Wireless Mouse", price: "$25" },
    { image: "section4img.png", name: "Smart Watch", price: "$120" },
    { image: "liver.png", name: "Bluetooth Speaker", price: "$45" },
    { image: "section4 (1).png", name: "Wireless Mouse", price: "$25" },
   
  ];
  return (
    <div>
      {/* Mobile version */}
      <div className="md:hidden">
        <div className="flex bg-gray-300 mt-5 rounded h-[200px] w-full justify-center items-center">
          <img src="section2 (1).png" className="h-[170px] w-[170px]" />
        </div>

        <span className="gap-2 flex justify-center mt-2">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <img
                key={i}
                className="h-[30px] w-[30px] border border-gray-300 rounded p-1"
                src="/section2 (1).png"
              />
            ))}
        </span>

        <div className="elements rounded shadow-sm mt-5 p-2">
          <div className="justify-between text-gray-400 flex items-center">
            <span className="flex items-center gap-1 text-yellow-500">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <AiFillStar key={i} />
                ))}
            </span>
            <span>32 Reviews</span>
            <span>154 sold</span>
          </div>

          <div className="flex flex-col gap-3 mt-2">
            <h4>Product name</h4>
            <span className="flex items-center gap-2">
              <h4 className="text-red-700 text-xl font-bold">$129.30</h4>
              <p className="text-gray-400 text-sm">(400-300 pcs)</p>
            </span>
            <button className="buttons text-white w-full p-2 rounded">
               Send Inquiry
            </button>
          </div>

          <div className="grid my-5 grid-cols-2">
            <span className="grid gap-3">
              <h3> Condition</h3>
              <h3> Material</h3>
              <h3> Category</h3>
              <h3> Item num</h3>
            </span>
            <span className="grid gap-3">
              <p className="text-gray-400">Brand new</p>
              <p className="text-gray-400">Plastic</p>
              <p className="text-gray-400">Electronics, gadgets</p>
              <p className="text-gray-400">23421</p>
            </span>
          </div>

          <span className="my-3">
            <p>
              <FaInfoCircle className="inline mr-1" />
              Info about edu item is an ideal companion for anyone engaged in
              learning. The drone provides precise and www...
            </p>
            <button className="text-blue-600">Read more</button>
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

      {/* Desktop version */}
      <div className="md:flex flex-col hidden">
        <div>
          <p className="my-4 text-gray-400">
            Home {'>'} Clothing {'>'} Men's Wear {'>'} Summer Clothing
          </p>

          <div className="elements gap-8 shadow-sm flex p-4">
            <div className="w-[280px]">
              <div className="flex justify-center border rounded border-gray-300 h-[340px] flex-col">
                <span className="flex justify-center">
                  <img
                    className="h-[200px] w-[200px]"
                    src="section2 (1).png"
                  />
                </span>
              </div>
              <span className="flex justify-center gap-2 mt-2">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <img
                      key={i}
                      className="h-[30px] w-[30px] border border-gray-300 rounded p-1"
                      src="/section2 (1).png"
                    />
                  ))}
              </span>
            </div>

            <div className="w-[700px] flex flex-col">
              <p className="text-green-400">In stock</p>
              <h4 className="text-2xl font-semibold">
                Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
              </h4>

              <span className="flex gap-3 text-gray-400 items-center">
                <span className="flex text-yellow-500">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <AiFillStar key={i} />
                    ))}
                </span>
                <p>32 reviews</p>
                <p>154 sold</p>
              </span>

              <div className="flex mt-2 rounded w-[500px] detailsbox gap-4">
                <span className="text-red-600 p-2">
                  <h4 className="font-semibold text-xl">$98.00</h4>
                  <p className="text-gray-400">50-100 pcs</p>
                </span>
                <span className="flex p-2 border-l border-l-gray-300">
                  <span className="flex flex-col">
                    <h4 className="font-semibold text-xl text-black">$108.00</h4>
                    <p className="text-gray-400">100-200 pcs</p>
                  </span>
                </span>
                <span className="flex p-2 border-l border-l-gray-300">
                  <span>
                    <h4 className="font-semibold text-xl text-black">$298.00</h4>
                    <p className="text-gray-400">250-400 pcs</p>
                  </span>
                </span>
              </div>

              <div className="w-[430px] mt-5">
                <div className="grid grid-cols-2 gap-y-2 mb-2">
                  <h4 className="text-gray-400 font-medium"> Price</h4>
                  <h4 className="text-gray-700">Negotiable</h4>
                </div>
                <hr className="mb-2" />
                <div className="grid grid-cols-2 gap-y-2 mb-4">
                  <h4 className="font-medium text-gray-400"> Type:</h4>
                  <p className="text-gray-700">Classic Shoes</p>
                  <h4 className="font-medium text-gray-400"> Material</h4>
                  <p className="text-gray-700">Plastic Material</p>
                  <h4 className="font-medium text-gray-400"> Design</h4>
                  <p className="text-gray-700">Modern nice</p>
                </div>
                <hr className="mb-2" />
                <div className="grid grid-cols-2 gap-y-2">
                  <h4 className="font-medium text-gray-400"> Customization:</h4>
                  <p className="text-gray-700">
                    Customized logo and design custom packages
                  </p>
                  <h4 className="font-medium text-gray-400"> Protection</h4>
                  <p className="text-gray-700">Refund Policy</p>
                  <h4 className="font-medium text-gray-400"> Warranty</h4>
                  <p className="text-gray-700">2 years full warranty</p>
                </div>
              </div>
            </div>

            <div className="flex p-4 rounded h-[350px] gap-5 w-[300px] flex-col shadow-sm element">
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
                <button className="p-2 rounded buttons text-white cursor-pointer">
                  Send Inquiry
                </button>
                <button className="p-2 bg-white text-blue-500 border border-gray-400 cursor-pointer rounded">
                   Seller's Profile
                </button>
              </span>
            </div>
          </div>
        </div>

        <div className="mt-5 flex gap-5">
          <span>
            <TabComponent />
                <div className=" my-3  space-y-10">

     
      <div className="bg-white p-6 rounded-md shadow-md">
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
      
          </span>

          <span className="shadow-sm flex flex-col gap-5 p-4 elements h-fit bg-white rounded-md">
            <h4 className="font-semibold text-xl border-b border-gray-200 pb-2 mb-4">
              🛍️ You may like
            </h4>
            {array2.map((e, i) => (
              <div
                key={i}
                className="flex gap-3 items-center cursor-pointer hover:bg-gray-50 rounded-md p-2 transition-colors"
              >
                <span className="block h-[90px] w-[90px] overflow-hidden rounded border border-gray-300 p-1">
                  <img
                    className="h-full w-full object-cover"
                    src={e.image}
                    alt={e.name}
                  />
                </span>
                <span className="flex flex-col justify-center">
                  <h4 className="font-medium">{e.name}</h4>
                  <p className="text-gray-600">{e.price}</p>
                </span>
              </div>
            ))}
          </span>
        </div>

      
      </div>
    </div>
  );
}
