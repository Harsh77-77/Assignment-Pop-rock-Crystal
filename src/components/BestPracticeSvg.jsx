const BestPracticeSvg = () => {
  return (<>
      <div className="absolute top-0 left-0 w-full h-full z-0 blur-3xl ">
        <svg
          width="100%" // Updated to make the SVG take the full width
          height="100%" // Updated to make the SVG take the full height
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none" // Optional: preserves the aspect ratio while scaling
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
              <rect width="1440" height="900" fill="white" fillOpacity="0.4" />
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
      <div className=" w-full absolute top-0 bottom-0 left-0 hidden xl:flex">
        <svg
          width="100%"
          // height="900"
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M780.5 719.289C996.132 691.392 1205.06 380.14 1440 254.604V-6.10352e-05H0V900C0 900 124.358 896.153 250 817.997C395.056 727.764 564.868 747.186 780.5 719.289Z"
            fill="white"
          />
        </svg>
      </div>
      </>
  );
};

export default BestPracticeSvg;
