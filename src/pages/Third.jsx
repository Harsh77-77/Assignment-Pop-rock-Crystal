import BestPracticeSvg from "../components/BestPracticeSvg";
import BestPriceHero from "../components/BestPraiceHero";

const Third = () => {
  return (
    <div className="flex items-center justify-center flex-col w-[100%] h-screen relative overflow-hidden">
      <BestPracticeSvg></BestPracticeSvg>
      <div className="z-10 w-full h-full">
        <BestPriceHero></BestPriceHero>
      </div>
    </div>
  );
};

export default Third;
