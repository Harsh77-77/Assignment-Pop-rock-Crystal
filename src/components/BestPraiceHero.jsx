import rock2 from "../assets/rock2.webp";

const BestPriceHero = () => {
  return (
    <div className="w-[90%] h-full flex flex-col md:flex-row justify-center items-center gap-0 relative mx-auto">
      <div className="text-center md:text-right h-full flex items-center xl:items-end justify-center flex-col w-full z-10">
        <div className="text-[32px] md:text-[40px] font-normal leading-[40px] md:leading-[65px] text-[#242627]">
          BEST PRICE
        </div>
        <div className="text-[48px] md:text-[64px] font-bold leading-[48px] md:leading-[65px] text-[#31546D] mb-4 md:mb-6">
          Agate Phone Grip
        </div>
        <div className="text-[48px] md:text-[70px] font-bold leading-[48px] md:leading-[89.04px] text-[#E35B3E]">
          <span className="text-[20px] md:text-[24px] font-normal leading-[24px] md:leading-[30px] text-[#41A0B7] line-through">
            44.50$
          </span>
          19.50$
        </div>
        <div className="text-[14px] md:text-[16px] font-normal leading-[20px] md:leading-[24px] text-[#31546D] w-full md:w-[400px] mb-6 md:mb-12">
          These Pop Rock Crystal grip tops can be swapped with other tops
          depending on your mood, outfit, nails, phone case, holiday, etc.! Just
          gently squeeze the sides to remove and swap out with another color or
          design!
        </div>
        <button className="uppercase w-[140px] md:w-[180px] h-[40px] md:h-[56px] text-white xl:text-[#75CCEB] text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] font-bold rounded-[18px] border-white xl:border-[#75CCEB] border-[2px] transition-all duration-400 ease-in-out hover:bg-gradient-to-r hover:from-[#75CCEB] hover:to-blue-300 hover:shadow-xl hover:shadow-blue-300/50 hover:text-white">
          Buy Now
        </button>
      </div>
      <div className="w-full h-full xl:flex justify-center md:justify-end items-center relative z-0 mt-8 md:mt-0 hidden">
        <div className="flex justify-center items-center w-[300px] h-[300px] md:w-[744px] md:h-[744px] bg-[rgba(255,255,255,0.2)] rounded-full absolute">
          <div className="flex justify-center items-center w-[230px] h-[230px] md:w-[570px] md:h-[570px] bg-white rounded-full shadow-custom">
            <div className="flex justify-center items-center w-[150px] h-[150px] md:w-[364px] md:h-[364px] bg-white rounded-full shadow-custom">
              <div className="w-[100px] h-[100px] md:w-[248px] md:h-[248px] flex justify-center items-center">
                <img src={rock2} alt="Agate Phone Grip" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestPriceHero;
