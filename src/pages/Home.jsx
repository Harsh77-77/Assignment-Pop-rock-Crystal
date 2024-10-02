// Home.js
import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home = () => {
  const scrollDown = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="items-center w-full h-screen relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full z-0 blur-3xl">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1440 900"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <g clipPath="url(#clip0_1_8)">
              <rect
                x="1440"
                y="900"
                width="1440"
                height="900"
                transform="rotate(180 1440 900)"
                fill="url(#paint0_linear_1_8)"
              />
              <path
                d="M605.854 750.982C450.116 753.592 205.648 475.999 0 520.814V0H1440V219.725C1386.24 203.191 1262.63 176.389 1198.31 201.451C1117.89 232.778 1067.52 392.46 1020.39 400.292C973.248 408.123 961.695 353.301 936.739 313.707C911.784 274.113 828.601 253.663 792.555 353.301C756.508 452.939 957.39 646.28 845.238 635.68C605.854 613.055 761.592 748.371 605.854 750.982Z"
                fill="url(#paint1_linear_1_8)"
              />
              <path
                d="M403.955 211.341C480.163 7.01157 766.218 16.3122 634.098 -176.205C666.326 -230.476 661.846 -309.932 386.098 -193.59C41.4132 -48.1613 221.031 289.374 207.713 355.8C194.396 422.225 219.59 450.801 275.898 426.981C332.206 403.162 380.275 423.216 441.095 486.8C501.914 550.383 622.789 551.837 679.648 366.091C736.506 180.345 327.747 415.67 403.955 211.341Z"
                fill="url(#paint2_linear_1_8)"
              />
              <g filter="url(#filter0_b_1_8)">
                <rect
                  width="1440"
                  height="900"
                  fill="white"
                  fillOpacity="0.4"
                />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_b_1_8"
                x="-250"
                y="-250"
                width="1940"
                height="1400"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="125" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_1_8"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_1_8"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_1_8"
                x1="1440"
                y1="900"
                x2="2856"
                y2="1836.29"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#8481FF" />
                <stop offset="0.484953" stopColor="#2EF1FD" />
                <stop offset="1" stopColor="#0430A1" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_1_8"
                x1="-1.76404e-05"
                y1="520"
                x2="1429.95"
                y2="-26.3001"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#01F0FF" />
                <stop offset="0.966936" stopColor="#0066FF" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_1_8"
                x1="748.223"
                y1="272.58"
                x2="209.644"
                y2="-47.2533"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FA7FFD" />
                <stop offset="1" stopColor="#E33131" />
              </linearGradient>
              <clipPath id="clip0_1_8">
                <rect width="1440" height="900" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="w-full absolute bottom-0 left-0 top-[300px] hidden xl:flex z-0">
          <svg
            width="100%"
            viewBox="0 0 1440 603"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M760 435.452C544.368 463.007 234.943 374.829 0 498.829V604H1440V0.5C1440 0.5 1296.64 13.2995 1171 90.5C1025.94 179.629 975.632 407.896 760 435.452Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="w-full h-screen flex justify-center relative items-center z-10">
          <Header></Header>
          <Hero />
        </div>
        <div
          className="w-full hidden  absolute bottom-[2rem] xl:bottom-[3.4375rem] lg:flex justify-center items-center z-10"
          onClick={scrollDown}
        >
          <div className="flex justify-center items-center cursor-pointer">
            <svg
              width="1.75rem"
              height="2.375rem"
              viewBox="0 0 28 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 7C13.6906 7 13.3938 7.12291 13.175 7.3417C12.9562 7.5605 12.8333 7.85724 12.8333 8.16666V10.5C12.8333 10.8094 12.9562 11.1062 13.175 11.325C13.3938 11.5437 13.6906 11.6667 14 11.6667C14.3094 11.6667 14.6061 11.5437 14.8249 11.325C15.0437 11.1062 15.1666 10.8094 15.1666 10.5V8.16666C15.1666 7.85724 15.0437 7.5605 14.8249 7.3417C14.6061 7.12291 14.3094 7 14 7ZM14 2.33333C11.834 2.33333 9.75682 3.19374 8.22527 4.72529C6.69373 6.25684 5.83331 8.33406 5.83331 10.5V17.5C5.83331 19.6659 6.69373 21.7432 8.22527 23.2747C9.75682 24.8062 11.834 25.6667 14 25.6667C16.1659 25.6667 18.2431 24.8062 19.7747 23.2747C21.3062 21.7432 22.1666 19.6659 22.1666 17.5V10.5C22.1666 8.33406 21.3062 6.25684 19.7747 4.72529C18.2431 3.19374 16.1659 2.33333 14 2.33333ZM19.8333 17.5C19.8333 19.0471 19.2187 20.5308 18.1248 21.6248C17.0308 22.7187 15.5471 23.3333 14 23.3333C12.4529 23.3333 10.9692 22.7187 9.87519 21.6248C8.78123 20.5308 8.16665 19.0471 8.16665 17.5V10.5C8.16665 8.9529 8.78123 7.46917 9.87519 6.37521C10.9692 5.28124 12.4529 4.66666 14 4.66666C15.5471 4.66666 17.0308 5.28124 18.1248 6.37521C19.2187 7.46917 19.8333 8.9529 19.8333 10.5V17.5Z"
                fill="#307189"
              />
              <path
                d="M14.866 36.5C14.4811 37.1667 13.5189 37.1667 13.134 36.5L12.2679 35C11.883 34.3333 12.3642 33.5 13.134 33.5L14.866 33.5C15.6358 33.5 16.117 34.3333 15.7321 35L14.866 36.5Z"
                fill="#307189"
              />
            </svg>
            <div className="pl-4 font-bold text-[1rem] leading-[1.5rem] text-[#317189]">
              scroll down
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
