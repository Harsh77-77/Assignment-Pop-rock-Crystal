import Product from "../components/Product";
import rock1 from "../assets/rock1.png";

const Second = () => {
  const productArray = [
    { image: rock1, name: 'Rock 1', price: 18 },
    { image: rock1, name: 'Rock 1', price: 18 },
    { image: rock1, name: 'Rock 1', price: 18 },
    { image: rock1, name: 'Rock 1', price: 18 },
    { image: rock1, name: 'Rock 1', price: 18 },
    { image: rock1, name: 'Rock 1', price: 18 },
    { image: rock1, name: 'Rock 1', price: 18 },
    { image: rock1, name: 'Rock 1', price: 18 },
  ];

  return (
    <div className="w-full flex flex-col justify-start items-center min-h-screen">
      <div className="flex justify-center items-center w-[90%] m-8 md:m-16">
        <h1 className="text-[32px] md:text-[46px] leading-[36px] md:leading-[50px] font-bold text-[#31546D]">
          All Products
        </h1>
      </div>
      <div className="w-[90%] justify-center flex flex-wrap gap-6 my-10">
        {productArray.map((product, index) => (
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

export default Second;


