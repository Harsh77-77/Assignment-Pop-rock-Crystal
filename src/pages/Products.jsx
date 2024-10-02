import React, { useState, useEffect, useRef } from 'react';
import Product from "../components/Product";
import rock1 from "../assets/rock1.png";
import rock2 from "../assets/rock2.webp";
import rock3 from "../assets/rock3.webp";
import rock4 from "../assets/rock4.webp";

const Products = () => {
  const [sortOption, setSortOption] = useState('Best Selling');
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  const [filterOption, setFilterOption] = useState('All products');
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);

  const sortDropdownRef = useRef(null);
  const filterDropdownRef = useRef(null);

  const productArray = [
    { image: rock1, name: 'Rock 1', price: 10 },
    { image: rock1, name: 'Rock 1', price: 20 },
    { image: rock1, name: 'Rock 1', price: 15 },
    { image: rock1, name: 'Rock 1', price: 25 },
    { image: rock1, name: 'Rock 1', price: 20 },
    { image: rock1, name: 'Rock 1', price: 10 },
    { image: rock1, name: 'Rock 1', price: 25 },
    { image: rock1, name: 'Rock 1', price: 10 },
  ];

  const handleSortChange = (option) => {
    setSortOption(option);
    setIsSortDropdownOpen(false);
  };

  const handleFilterChange = (option) => {
    setFilterOption(option);
    setIsFilterDropdownOpen(false);
  };

  const handleClickOutside = (event) => {
    if (sortDropdownRef.current && !sortDropdownRef.current.contains(event.target)) {
      setIsSortDropdownOpen(false);
    }
    if (filterDropdownRef.current && !filterDropdownRef.current.contains(event.target)) {
      setIsFilterDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const sortedProducts = [...productArray].sort((a, b) => {
    if (sortOption === 'Price: Low to High') {
      return a.price - b.price;
    } else if (sortOption === 'Price: High to Low') {
      return b.price - a.price;
    } else {
      return 0;
    }
  });

  return (
    <div className="w-full flex flex-col justify-start items-center min-h-screen">
      <div className="flex justify-center items-center w-[90%] m-8 md:m-16">
        <h1 className="text-[32px] md:text-[46px] leading-[36px] md:leading-[50px] font-bold text-[#31546D]">
          All Products
        </h1>
      </div>
      <div className="w-[90%] flex md:flex-row gap-4 md:gap-16 justify-between md:justify-normal">
        <div className="relative flex items-center gap-2" ref={filterDropdownRef}>
          <div className="text-[#9AB0C0] font-bold text-[14px] md:text-[16px] leading-[24px] md:leading-[30px]">
            Filter:
          </div>
          <div
            className="text-[#31546D] font-bold text-[14px] md:text-[16px] leading-[24px] md:leading-[30px] cursor-pointer"
            onClick={() => setIsFilterDropdownOpen(!isFilterDropdownOpen)}
          >
            {filterOption}
          </div>
          <div className="align-middle">
            <svg
              width="8"
              height="7"
              viewBox="0 0 8 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.86603 6.5C4.48113 7.16667 3.51887 7.16667 3.13397 6.5L0.535898 2C0.150998 1.33333 0.632122 0.500001 1.40192 0.500001L6.59807 0.5C7.36788 0.5 7.849 1.33333 7.4641 2L4.86603 6.5Z"
                fill="#31546D"
              />
            </svg>
          </div>
          {isFilterDropdownOpen && (
            <div className="absolute top-full mt-2 bg-white border border-gray-300 rounded shadow-lg transition-all duration-300 ease-in-out w-[200px] opacity-100 transform scale-y-100 origin-top">
              <div
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleFilterChange('All products')}
              >
                All products
              </div>
              <div
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleFilterChange('Category 1')}
              >
                Category 1
              </div>
              <div
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleFilterChange('Category 2')}
              >
                Category 2
              </div>
            </div>
          )}
        </div>
        <div className="relative flex items-center gap-2" ref={sortDropdownRef}>
          <div className="text-[#9AB0C0] font-bold text-[14px] md:text-[16px] leading-[24px] md:leading-[30px]">
            Sort:
          </div>
          <div
            className="text-[#31546D] font-bold text-[14px] md:text-[16px] leading-[24px] md:leading-[30px] cursor-pointer"
            onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
          >
            {sortOption}
          </div>
          <div className="align-middle">
            <svg
              width="8"
              height="7"
              viewBox="0 0 8 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.86603 6.5C4.48113 7.16667 3.51887 7.16667 3.13397 6.5L0.535898 2C0.150998 1.33333 0.632122 0.500001 1.40192 0.500001L6.59807 0.5C7.36788 0.5 7.849 1.33333 7.4641 2L4.86603 6.5Z"
                fill="#31546D"
              />
            </svg>
          </div>
          {isSortDropdownOpen && (
            <div className="absolute top-full mt-2 bg-white border border-gray-300 rounded shadow-lg transition-all duration-300 ease-in-out w-[200px] opacity-100 transform scale-y-100 origin-top">
              <div
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleSortChange('Best Selling')}
              >
                Best Selling
              </div>
              <div
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleSortChange('Price: Low to High')}
              >
                Price: Low to High
              </div>
              <div
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleSortChange('Price: High to Low')}
              >
                Price: High to Low
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="w-[90%] justify-center flex flex-wrap gap-6 my-10">
        {sortedProducts.map((product, index) => (
          <Product key={index} rock={product} />
        ))}
      </div>
      <div className="flex justify-center w-full h-[4rem]">
        <button className="uppercase w-[120px] sm:w-[134px] text-[#75CCEB] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] font-bold h-[40px] sm:h-[48px] rounded-[18px] border-[#75CCEB] border-[2px] transition-all duration-400 ease-in-out hover:bg-gradient-to-r hover:from-[#75CCEB] hover:to-blue-300 hover:shadow-lg hover:shadow-blue-300/50 hover:text-white">
          View All
        </button>
      </div>
    </div>
  );
};

export default Products;
