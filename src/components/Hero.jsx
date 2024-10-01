import React, { useState } from "react";
import rock1 from "../assets/rock1.png";
import rock2 from "../assets/rock2.webp";
import rock3 from "../assets/rock3.webp";
import rock4 from "../assets/rock4.webp";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Hero = () => {
  const slides = [rock1, rock2, rock3, rock4, rock2, rock1, rock4];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col items-center justify-start w-full px-4">
      <div className="flex flex-col md:flex-row justify-between items-center w-full lg:w-[90%]">
        <div className="w-full flex justify-center items-center xl:items-start flex-col text-center xl:text-left text-white">
          <div className="font-normal text-[32px] md:text-[40px] leading-[40px] md:leading-[65px] text-white">
            Welcome to
          </div>
          <div className="font-bold text-[48px] md:text-[64px] leading-[48px] md:leading-[65px] text-white">
            Pop Rock Crystal Shop!
          </div>
          <div className="font-normal w-full md:w-[400px] my-6 md:my-10 text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#31546D]">
            Here you will find unique phone accessories, crystals, jewelry and
            more. Free shipping inside the U.S. and our phone grips come with a
            limited warranty. Enjoy!
          </div>

          <div className="flex justify-center md:justify-between w-full md:w-[283px] gap-4 md:gap-0">
            <button className="w-[140px] md:w-[180px] h-[40px] md:h-[56px] bg-white rounded-[18px] font-bold text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#317189]">
              SHOP NOW
            </button>
            <button className="font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#317189]">
              about us
            </button>
          </div>
        </div>
        {/* ------------------------------------------------------------------------------ */}
        <div className="hidden xl:flex flex-col justify-center items-end w-full">
          <div className="w-[569px] h-[554px] flex justify-center items-center bg-white rounded-[50px] shadow-custom overflow-hidden relative">
            <div className="absolute w-[97px] h-[40px] top-20 rounded-tr-lg flex justify-center items-center font-medium rounded-br-lg left-0 bg-[#8A93E5] text-white text-[16px] leading-[24px] z-10">
              New lot
            </div>
            <div
              className="flex transition-transform duration-500 h-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="min-w-full min-h-full flex flex-col justify-center items-center"
                >
                  <img src={slide} alt={`Slide ${index + 1}`} className="w-[362px]" />
                  <hr className="w-[120px] h-[2px] bg-gray-200 mb-4 mt-12" />
                  <div className="w-full flex justify-center items-center text-[#818181] text-[20px] leading-[24px] font-normal">
                    Crystal Agate Phone Grip{" "}
                    <span className="pl-2 text-[#317189] font-bold">- 18.99$</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-[569px] h-[3rem] mt-7 flex justify-center gap-6 items-center">
            <button
              onClick={goToPreviousSlide}
              className="flex justify-center items-center w-[24px] h-[24px] bg-[#8A93E5] text-white text-[14px]"
            >
              <FaArrowLeft />
            </button>
            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-[14px] h-[14px] rounded-full ${
                    currentIndex === index ? "bg-[#8A93E5]" : "bg-[#D7DBFF]"
                  }`}
                ></button>
              ))}
            </div>
            <button
              onClick={goToNextSlide}
              className="flex justify-center items-center w-[24px] h-[24px] bg-[#8A93E5] text-white text-[14px]"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
        {/* ------------------------------------------------------------------------------ */}
      </div>
    </div>
  );
};

export default Hero;
