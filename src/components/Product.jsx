const Product = (props) => {
  console.log(props)
  return (
    <div className="flex flex-col items-center pt-4 pb-6 w-full sm:w-[300px] md:w-[322px] border-gray-200 border-[1.9px] bg-white rounded-[20px] sm:rounded-[25px] md:rounded-[30px] transition-all duration-500 ease hover:shadow-custom">
      <div className="w-[160px] sm:w-[180px] md:w-[198px] h-[160px] sm:h-[180px] md:h-[198px]">
        <img className="w-full h-full object-cover" src={props.rock.image} alt="Product Image" />
      </div>
      <div className="w-full my-3 sm:my-4">
        <div className="flex text-gray-950 text-[16px] sm:text-[18px] md:text-[20px] leading-[20px] sm:leading-[22px] md:leading-[24px] font-normal w-full justify-center uppercase">
          Crystal Agate Phone Grip
        </div>
        <span className="flex text-[#317189] text-[18px] sm:text-[20px] font-bold w-full justify-center">
          18.99$
        </span>
      </div>
      <div className="flex justify-center w-full">
        <button className="uppercase w-[140px] sm:w-[160px] md:w-[180px] h-[40px] sm:h-[48px] md:h-[56px] text-[#75CCEB] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[22px] md:leading-[24px] font-bold rounded-[18px] border-[#75CCEB] border-[2px] transition-all duration-400 ease-in-out hover:bg-gradient-to-r hover:from-[#75CCEB] hover:to-blue-300 hover:shadow-xl hover:shadow-blue-300/50 hover:text-white">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Product;
