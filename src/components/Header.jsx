import React, { useState } from "react";
import { IoMdBasket } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full flex justify-center items-center h-fit mb-[1rem] absolute top-0 left-0 z-20">
      <div className="w-[90%] flex flex-col md:flex-row justify-between items-center py-8">
        <div className="flex justify-between items-center w-full md:w-auto mb-4 md:mb-0">
          <div className="flex justify-start items-center gap-2">
            <div className="flex justify-center items-center">
              <svg
                width="37"
                height="64"
                viewBox="0 0 37 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.5219 0C8.29537 0 0 8.44103 0 18.8472V45.1975C0 55.6036 8.29537 64.0447 18.5219 64.0447C28.7485 64.0447 37.0439 55.6036 37.0439 45.1975V18.8472C37 8.44103 28.7046 0 18.5219 0ZM35.5516 45.1975C35.5516 54.7551 27.9146 62.5262 18.5219 62.5262C9.1293 62.5262 1.49229 54.7551 1.49229 45.1975V18.8472C1.49229 9.2896 9.1293 1.51849 18.5219 1.51849C27.9146 1.51849 35.5516 9.2896 35.5516 18.8472V45.1975Z"
                  fill="white"
                />
                <path
                  d="M12.7725 22.4201L24.7108 36.8904L31.8211 28.2708L26.0275 22.4201H12.7725ZM23.9646 23.8939L19.6195 28.3154L15.9765 23.8939H23.9646ZM24.7108 34.5234L20.5412 29.4766L25.7203 24.2066L29.7582 28.3154L24.7108 34.5234Z"
                  fill="white"
                />
                <path
                  d="M5.22313 28.2707L18.5221 44.4382L23.5695 38.3196L10.7095 22.688L5.22313 28.2707ZM18.5221 42.0712L7.19822 28.3601L10.5778 24.9211L21.5944 38.3196L18.5221 42.0712Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="flex font-google-sans font-normal text-[20px] leading-[26px] text-white">
              Pop Rock Crystal
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white text-2xl p-4" 
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
        <div
          className={`${
            isMenuOpen
              ? "top-[calc(70%+8px)] opacity-100"
              : "-top-full opacity-0"
          } absolute left-0 w-full transition-all duration-500 ease-in-out md:relative md:top-auto md:opacity-100 md:flex flex-col md:flex-row justify-between items-center md:w-[35rem] ${
            isMenuOpen ? "backdrop-filter backdrop-blur-lg bg-white/10" : ""
          } md:bg-none`} 
        >
          <div className="w-full md:w-auto mb-4 md:mb-0 ">
            <ul className="  flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10 text-white text-[16px] leading-[30px] font-medium">
              <a href="">
                <li>Home</li>
              </a>
              <a href="">
                <li>Shop</li>
              </a>
              <a href="">
                <li>About</li>
              </a>
              <a href="">
                <li>Help</li>
              </a>
            </ul>
          </div>
          <div className="flex justify-center items-center gap-2">
            <span className="text-[8px] w-[14px] h-[14px] rounded-full mt-1 bg-[#FF2B77] text-white leading-[8px] font-bold flex justify-center items-center">
              00
            </span>
            <IoMdBasket className="w-[30px] h-[30px] text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
