"use client";

import React, { useState } from 'react';

export default function TabComponent() {
  const [activeTab, setActiveTab] = useState('description');

  const tabs = [
    { key: 'description', label: 'Description' },
    { key: 'reviews', label: 'Reviews' },
    { key: 'shipping', label: 'Shipping' },
    { key: 'aboutSeller', label: 'About Seller' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'description':
        return <div className="text-gray-700  space-y-6">
  <p className="leading-relaxed">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet,
    consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
    ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
    dolore eu fugiat nulla pariatur.
  </p>

 <div className="grid border w-[567px] border-gray-300 rounded overflow-hidden text-sm">

  <div className="grid grid-cols-2 even:bg-white odd:bg-gray-50">
    <div className="p-2 font-medium text-gray-700 bg-gray-100 border-r border-gray-300">Model</div>
    <div className="p-2 text-gray-800">#878787</div>
  </div>

  <div className="grid grid-cols-2 even:bg-white odd:bg-gray-50">
    <div className="p-2 font-medium text-gray-700 bg-gray-100 border-r border-gray-300">Style</div>
    <div className="p-2 text-gray-800">Classic Style</div>
  </div>

 
  <div className="grid grid-cols-2 even:bg-white odd:bg-gray-50">
    <div className="p-2 font-medium text-gray-700 bg-gray-100 border-r border-gray-300">Certificate</div>
    <div className="p-2 text-gray-800">ISO-898921212</div>
  </div>


  <div className="grid grid-cols-2 even:bg-white odd:bg-gray-50">
    <div className="p-2 font-medium text-gray-700 bg-gray-100 border-r border-gray-300">Size</div>
    <div className="p-2 text-gray-800">34mm x 450mm x 19mm</div>
  </div>



</div>
 <ul className="space-y-2 text-gray-700 text-sm">
  <li className="flex items-start gap-2">
    <span className="text-green-600 mt-0.5"></span>
    <span>Dolore eu fugiat nulla pariatur.</span>
  </li>
  <li className="flex items-start gap-2">
    <span className="text-green-600 mt-0.5"></span>
    <span>Customer reviews go here.</span>
  </li>
  <li className="flex items-start gap-2">
    <span className="text-green-600 mt-0.5"></span>
    <span>Shipping info: Usually ships in 2 days.</span>
  </li>
  <li className="flex items-start gap-2">
    <span className="text-green-600 mt-0.5"></span>
    <span>Lorem eu fugiat nulla pariatur.</span>
  </li>
</ul>

</div>

      case 'reviews':
        return <div className="space-y-6 shadow-sm text-gray-700">
      <div className="border  border-gray-200 p-4 cursor-pointer hover:shadow-md  rounded-md shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <div className="flex flex-col">
            <span className="font-semibold text-lg text-gray-800">Zeus</span>
            <span className="text-xs text-gray-400">Reviewed on May 12, 2025</span>
          </div>
          <div className="flex text-yellow-400 text-sm">
            {'★★★★★'.split('').map((star, i) => (
              <span key={i}>{star}</span>
            ))}
          </div>
        </div>

        <h4 className="text-md font-semibold mb-1">Great product, just as described!</h4>

        <p className="text-sm leading-relaxed text-gray-600">
          I ordered this product two weeks ago and it arrived in perfect condition. The quality is 
          exactly as shown in the pictures, and the size fits well. I also appreciated the careful 
          packaging and prompt shipping. Would definitely recommend this seller to others and will 
          buy again!
        </p>
      </div>

      <div className="space-y-6 text-gray-700">
      <div className="border border-gray-200 p-4 rounded-md cursor-pointer hover:shadow-md shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <div className="flex flex-col">
            <span className="font-semibold text-lg text-gray-800">Jason </span>
            <span className="text-xs text-gray-400">Reviewed on May 12, 2025</span>
          </div>
          <div className="flex text-yellow-400 text-sm">
            {'★★★★★'.split('').map((star, i) => (
              <span key={i}>{star}</span>
            ))}
          </div>
        </div>

        <h4 className="text-md font-semibold mb-1">Great product, just as described!</h4>

        <p className="text-sm leading-relaxed text-gray-600">
          I ordered this product two weeks ago and it arrived in perfect condition. The quality is 
          exactly as shown in the pictures, and the size fits well. I also appreciated the careful 
          packaging and prompt shipping. Would definitely recommend this seller to others and will 
          buy again!
        </p>
      </div>

     
    </div>
     <div className="space-y-6 text-gray-700">
      <div className="border border-gray-200 p-4 rounded-md cursor-pointer hover:shadow-md shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <div className="flex flex-col">
            <span className="font-semibold text-lg text-gray-800">Tom Haaland</span>
            <span className="text-xs text-gray-400">Reviewed on May 12, 2025</span>
          </div>
          <div className="flex text-yellow-400 text-sm">
            {'★★★★★'.split('').map((star, i) => (
              <span key={i}>{star}</span>
            ))}
          </div>
        </div>

        <h4 className="text-md font-semibold mb-1">Great product, just as described!</h4>

        <p className="text-sm leading-relaxed text-gray-600">
          I ordered this product two weeks ago and it arrived in perfect condition. The quality is 
          exactly as shown in the pictures, and the size fits well. I also appreciated the careful 
          packaging and prompt shipping. Would definitely recommend this seller to others and will 
          buy again!
        </p>
      </div>

    </div>
        <div className="space-y-6 text-gray-700">
      <div className="border border-gray-200 p-4 cursor-pointer hover:shadow-md rounded-md shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <div className="flex flex-col">
            <span className="font-semibold text-lg text-gray-800">J Cena</span>
            <span className="text-xs text-gray-400">Reviewed on May 12, 2025</span>
          </div>
          <div className="flex text-yellow-400 text-sm">
            {'★★★★★'.split('').map((star, i) => (
              <span key={i}>{star}</span>
            ))}
          </div>
        </div>

        <h4 className="text-md font-semibold mb-1">Great product, just as described!</h4>

        <p className="text-sm leading-relaxed text-gray-600">
          I ordered this product two weeks ago and it arrived in perfect condition. The quality is 
          exactly as shown in the pictures, and the size fits well. I also appreciated the careful 
          packaging and prompt shipping. Would definitely recommend this seller to others and will 
          buy again!
        </p>
      </div>

      {/* You can repeat or map over multiple reviews here */}
    </div>

    </div>
      case 'shipping':
        return  <div className="max-w-[600px] h-[600px] p-6 text-gray-700 flex flex-col justify-between">
    <div>
      <h3 className="text-xl font-semibold text-gray-800 mb-6">Shipping & Delivery</h3>

      <p className="mb-6">
        Orders are processed within <span className="font-semibold">2–3 business days</span> after payment confirmation. Shipping times depend on location and chosen delivery method.
      </p>

      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="space-y-4">
          <div className="flex items-start gap-2">
            <span className="text-green-600 mt-0.5">✔</span>
            <span><strong>Ships from:</strong> Berlin, Germany</span>
          </div>

          <div className="flex items-start gap-2">
            <span className="text-green-600 mt-0.5">✔</span>
            <span>Free standard shipping on orders over <strong>$50</strong></span>
          </div>

          <div className="flex items-start gap-2">
            <span className="text-green-600 mt-0.5">✔</span>
            <span>Tracking number provided within 24 hours</span>
          </div>

          <div className="flex items-start gap-2">
            <span className="text-green-600 mt-0.5">✔</span>
            <span>Estimated delivery: <strong>5–8 business days</strong></span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-2">
            <span className="text-green-600 mt-0.5">✔</span>
            <span>Expedited shipping available at checkout</span>
          </div>

          <div className="flex items-start gap-2">
            <span className="text-green-600 mt-0.5">✔</span>
            <span>Delivery partners: DHL, UPS, FedEx</span>
          </div>

          <div className="flex items-start gap-2">
            <span className="text-green-600 mt-0.5">✔</span>
            <span>Secure packaging ensures safe arrival</span>
          </div>

          <div className="flex items-start gap-2">
            <span className="text-green-600 mt-0.5">✔</span>
            <span>Global delivery to over 100 countries</span>
          </div>
        </div>
      </div>
    </div>

  
    <div className="bg-gray-100 p-4 rounded-md text-sm text-gray-600">
      <h4 className="font-semibold mb-3">Shipping FAQs</h4>
      <ul className="list-disc list-inside space-y-2">
        <li>How long does shipping take? Usually 5-8 business days depending on your location.</li>
        <li>Can I track my order? Yes, tracking info is emailed once your order ships.</li>
        <li>Do you ship internationally? Yes, we ship worldwide with some restrictions.</li>
        <li>What if my package is lost? Contact support for assistance and claims.</li>
      </ul>
    </div>
  </div>
      case 'aboutSeller':
        return  <div className="max-w-[600px] h-[600px] p-6 text-gray-700 flex flex-col justify-between">
    <div>
      <h3 className="text-xl font-semibold text-gray-800 mb-6">About the Seller</h3>

      <p className="mb-6">
        <strong>Guanjoi Trading LLC</strong> is a trusted supplier based in Berlin, Germany, with over 10 years of experience in providing quality products worldwide. They pride themselves on maintaining a high standard of customer satisfaction and product reliability.
      </p>

      <div className="space-y-4 mb-8">
        <div className="flex items-start gap-2">
          <span className="text-blue-600 mt-0.5">🏆</span>
          <span><strong>Feedback Score:</strong> 98% Positive</span>
        </div>

        <div className="flex items-start gap-2">
          <span className="text-blue-600 mt-0.5">📦</span>
          <span>Over 10,000 orders fulfilled with consistent quality and timely delivery</span>
        </div>

        <div className="flex items-start gap-2">
          <span className="text-blue-600 mt-0.5">🌐</span>
          <span>Ships globally with verified and secure packaging</span>
        </div>

        <div className="flex items-start gap-2">
          <span className="text-blue-600 mt-0.5">💬</span>
          <span>Responsive customer support available 24/7 to handle inquiries and issues</span>
        </div>
      </div>
    </div>

    <div className="bg-gray-100 p-4 rounded-md text-sm text-gray-600">
      <h4 className="font-semibold mb-3">Seller Highlights</h4>
      <ul className="list-disc list-inside space-y-2">
        <li>Verified Seller with Business License</li>
        <li>Fast response to inquiries and complaints</li>
        <li>Flexible customization and bulk order options</li>
        <li>Positive reviews from thousands of buyers worldwide</li>
        <li>Commitment to sustainability and ethical sourcing</li>
      </ul>
    </div>
  </div>
      default:
        return <div>No info Avaliable</div>;
    }
  };

  return (
    <div className="elements shadow-sm font-sans p-5">
 
      <div className="flex gap-6 border-b border-gray-200 mb-4">
        {tabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`relative pb-2 text-sm font-medium transition-colors duration-200 
              ${activeTab === tab.key ? 'text-blue-600' : 'text-gray-500 hover:text-blue-600'}
              after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full 
              after:transition-all after:duration-300
              ${activeTab === tab.key ? 'after:bg-blue-600' : 'after:bg-transparent'}
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

   
      <div className="text-gray-700 h-fit w-[1067px] text-base">
        {renderContent()}
      </div>
    </div>
  );
}
