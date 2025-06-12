"use client";

import React, { useState } from "react";

const FilterSection = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="border-t border-gray-300 pt-4 mb-4">
      <h3
        className="font-bold text-lg cursor-pointer flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span className="text-sm text-gray-500">{isOpen ? "▲" : "▼"}</span>
      </h3>

      {isOpen && (
        <ul className="mt-2 space-y-2">
          {options.map((option, index) => (
            <li key={index}>
              <label className="flex items-center space-x-2">
                <input type="checkbox" />
                <span>{option}</span>
              </label>
            </li>
          ))}
          <li className="text-blue-500 cursor-pointer text-sm mt-1">See all</li>
        </ul>
      )}
    </div>
  );
};


const PriceRange = () => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(999999);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="border-t border-gray-300 pt-4 mb-4">
      <h3
        className="font-bold text-lg cursor-pointer flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        Price range
        <span className="text-sm text-gray-500">{isOpen ? "▲" : "▼"}</span>
      </h3>
      {isOpen && (
        <div className="mt-4">
          <input type="range" min="0" max="1000000" className="w-full" />
          <div className="flex justify-between my-2 space-x-2">
            <input
              type="number"
              value={min}
              onChange={(e) => setMin(e.target.value)}
              className="w-1/2 border p-1 rounded"
              placeholder="Min"
            />
            <input
              type="number"
              value={max}
              onChange={(e) => setMax(e.target.value)}
              className="w-1/2 border p-1 rounded"
              placeholder="Max"
            />
          </div>
          <button className="w-full bg-blue-500 text-white text-sm py-1 rounded">
            Apply
          </button>
        </div>
      )}
    </div>
  );
};


const ConditionFilter = () => {
  const [selected, setSelected] = useState("Any");
  const [isOpen, setIsOpen] = useState(true);
  const options = ["Any", "Refurbished", "Brand new", "Old items"];

  return (
    <div className="border-t border-gray-300 pt-4 mb-4">
      <h3
        className="font-bold text-lg cursor-pointer flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        Condition
        <span className="text-sm text-gray-500">{isOpen ? "▲" : "▼"}</span>
      </h3>
      {isOpen && (
        <ul className="mt-2 space-y-2">
          {options.map((opt) => (
            <li key={opt}>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  checked={selected === opt}
                  onChange={() => setSelected(opt)}
                  name="condition"
                />
                <span>{opt}</span>
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};


const RatingsFilter = () => {
  const [isOpen, setIsOpen] = useState(true);

  const renderStars = (count) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= count ? "text-orange-500" : "text-gray-300"}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="border-t border-gray-300 pt-4 mb-4">
      <h3
        className="font-bold text-lg cursor-pointer flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        Ratings
        <span className="text-sm text-gray-500">{isOpen ? "▲" : "▼"}</span>
      </h3>
      {isOpen && (
        <ul className="mt-2 space-y-2">
          {[5, 4, 3, 2].map((rating) => (
            <li key={rating} className="cursor-pointer">
              <div className="flex items-center">{renderStars(rating)}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const FilterSidebar = () => {
  return (
    <div className="w-65 rounded-lg">
      <FilterSection
        title="Category"
        options={["Mobile accessory", "Electronics", "Smartphones", "Modern tech"]}
      />
      <FilterSection
        title="Brands"
        options={["Samsung", "Apple", "Huawei", "Pocco", "Lenovo"]}
      />
      <FilterSection
        title="Features"
        options={["Metallic", "Plastic cover", "8GB Ram", "Super power"]}
      />
      <PriceRange />
      <ConditionFilter />
      <RatingsFilter />
    </div>
  );
};


export default function AboutPage() {
  return (
    <div className="">
      <p className="my-4 text-gray-400">
        Home {'>'} Clothing {'>'} Men's Wear {'>'} Summer Clothing
      </p>
      <FilterSidebar />
      
    </div>
  );
}
