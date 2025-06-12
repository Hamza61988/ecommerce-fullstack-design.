import { FaSearch, FaBox, FaArrowRight, FaShieldAlt } from "react-icons/fa";

export default function Middledown() {
  

   let countries = [
  {
    name: "United Arab Emirates",
    flag: "flag.png",
    website: "shopuae.ae"
  },
  {
    name: "Pakistan",
    flag: "flag2.png",
    website: "shoppk.pk"
  },
  {
    name: "United Kingdom",
    flag: "flag3.png",
    website: "shopuk.co.uk"
  },
  {
    name: "India",
    flag: "flag4.png",
    website: "shopindia.in"
  },
  {
    name: "France",
    flag: "flag5.png",
    website: "shopfr.fr"
  },
  {
    name: "Germany",
    flag: "flag6.png",
    website: "shopde.de"
  },
  {
    name: "Turkey",
    flag: "flag7.png",
    website: "shopturkey.com.tr"
  },
  {
    name: "China",
    flag: "flag8.png",
    website: "shopchina.cn"
  },{
    name: "Itlay",
    flag: "flag3.jpg",
    website: "shopchina.cn"
  },{
    name: "USA",
    flag: "flag10.jpg",
    website: "shopchina.cn"
  }


  
];


  let section4 = [
  {
    image: "section4 (1).png",
    price: "$199",
    title: "Wireless Headphones",
    description: "Noise-cancelling over-ear Bluetooth headphones with 20hr battery life"
  },
  {
    image: "section4 (2).png",
    price: "$49",
    title: "Smart Watch",
    description: "Fitness tracker with heart rate monitor and waterproof design"
  },
  {
    image: "section4 (3).png",
    price: "$299",
    title: "Portable Speaker",
    description: "High-fidelity audio with deep bass and 12-hour playtime"
  },
  {
    image: "section4 (4).png",
    price: "$89",
    title: "Gaming Mouse",
    description: "Ergonomic design with RGB lighting and adjustable DPI"
  },
  {
    image: "section4 (5).png",
    price: "$159",
    title: "4K Action Camera",
    description: "Waterproof sports camera with 4K resolution and Wi-Fi support"
  }
  ,
  {
    image: "section4 (6).png",
    price: "$159",
    title: "4K Action Camera",
    description: "Waterproof sports camera with 4K resolution and Wi-Fi support"
  }
  
  ,
  {
    image: "section4 (8).png",
    price: "$159",
    title: "4K Action Camera",
    description: "Waterproof sports camera with 4K resolution and Wi-Fi support"
  },
  {
    image: "section4 (1).jpg",
    price: "$159",
    title: "4K Action Camera",
    description: "Waterproof sports camera with 4K resolution and Wi-Fi support"
  },
  {
    image: "section4 (9).png",
    price: "$159",
    title: "4K Action Camera",
    description: "Waterproof sports camera with 4K resolution and Wi-Fi support"
  }
  ,
  {
    image: "section4 (7).png",
    price: "$159",
    title: "4K Action Camera",
    description: "Waterproof sports camera with 4K resolution and Wi-Fi support"
  }
];


const halfarray = [
  {
    image: "half (1).png",
    title: "Source from Industry Hubs",
    icon: FaSearch,
  },
  {
    image: "half (2).png",
    title: "Customize Your Products",
    icon: FaBox,
  },
  {
    image: "half (3).png",
    title: "Fast reliable shipping  ",
    icon: FaArrowRight,
  },
  {
    image: "half (4).png",
    title: "Product monitoring ",
    icon: FaShieldAlt,
  },
];


  return (

    
   <div className="mx-4 mt-5 rounded md:mx-[80px]">
  <div className="relative rounded w-full h-[220px] md:h-[420px] overflow-hidden">
    
    <img
      src="middledown.png"
      className="w-full h-full object-cover scale-x-[-1]"
      alt="Middle Down"
    />

    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(to left, rgba(24, 104, 241, .90) 100%, rgba(0, 209, 255, 0.0) 60%)",
      }}
    ></div>

    <h4 className="absolute top-10 md:top-20 left-4 md:left-12 text-white text-xl md:text-4xl font-bold">
      An easy way to send <br /> requests to all suppliers
    </h4>

    <p className="absolute top-24 md:top-48 left-4 md:left-12 text-white text-sm md:text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing <br className="hidden md:block" />
      elit, sed do eiusmod tempor incididunt.
    </p>

<button className="md:hidden absolute bottom-4 left-4 z-10 bg-[#127FFF] text-white font-medium px-4 py-2 rounded shadow">
  Send inquiry
</button>


    <div className="hidden md:flex flex-col gap-6 rounded w-[491px] h-[360px] absolute p-4 top-10 right-12 bg-white shadow-md">
      <h3 className="font-semibold text-2xl">Send quote to suppliers</h3>

      <div className="border border-gray-400 rounded p-2">
        <h3>What item do you need</h3>
      </div>

      <span className="border border-gray-400 rounded pb-10 p-2">
        <input className="outline-none w-full" placeholder="Type more details" />
      </span>

      <div className="flex gap-2">
        <span className="border border-gray-400 rounded p-2 w-[220px]">
          <h3>Quantity</h3>
        </span>

        <select className="border border-gray-400 rounded p-2 w-[220px] cursor-pointer outline-none">
          <option>Pcs</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
    
             


 <div className=" flex justify-start">
  <button className=" cursor-pointer  buttons rounded text-white p-2">Send inquiry</button>
</div>
            
        </div>
       
      </div>

      <div className="  md:text-2xl text-xl font-semibold my-6">
        Recommended items
      </div>

     <div className="md:grid grid  grid-cols-2 md:grid-cols-5 gap-4 ">
  {section4.map((e, i) => (
    <div
      key={i}
      className="border border-gray-200 rounded-lg p-3 cursor-pointer shadow-sm hover:shadow-md transition"
    >
      <img className="h-[200px] w-[200px] object-contain mx-auto" src={e.image} alt={e.title} />
      <h3 className=" mt-2">{e.price}</h3>
      <h3 className="text-gray-400 font-medium">{e.title}</h3>
      <p className="text-gray-400 text-sm">{e.description}</p>
    </div>
  ))}
</div>

 <div className=" md:flex hidden text-2xl my-6">
        Our Extra Services
      </div>

      <div className="flex  md:flex hidden  justify-between">
        {halfarray.map((e , i)=>{
              const Icon = e.icon;
          return  <div key={i} className="relative shadow-sm   transform transition-transform duration-300 hover:scale-110  hover:z-10">
            <img className="w-[310px]  h-[200px] object-cover" src={e.image}></img>
           <span className="bg-white p-1 duration-100 cursor-pointer transition-transform hover:scale-105 rounded-full inline-block absolute top-27 right-4 z-10">
  <span className="bg-blue-300 p-2 rounded-full inline-block">
    <Icon className="text-2xl text-white" />
  </span>
</span>

            <div className="absolute p-3 bottom-0 h-[70px] w-full elements">
          
                <h4>{e.title}</h4>
            </div>
          </div>
        })}
      </div>
       
        
            <div className="   md:mx-0  md:text-2xl text-xl font-semibold  my-6">
              Supplier by Region
              </div>

        <div className="grid grid-cols-2    md:mx-0  md:grid-cols-5 gap-4">
          {countries.map((country, i) => (
            <div key={i} className="flex items-center space-x-3">
              <img
                src={country.flag}
                alt={country.name}
                className="w-9 h-7 object-cover rounded"
              />
              <div>
                <h3 className="text-sm font-medium">{country.name}</h3>
                <p className="text-xs text-gray-500">{country.website}</p>
              </div>
            </div>
          ))}
        
        </div>
    </div>
  );
}
