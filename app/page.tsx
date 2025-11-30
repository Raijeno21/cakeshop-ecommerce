import { icon } from "@/src/svgIcons";
import Carousel from "./(main)/shopComponents/Carousel";
import Chocolate from "./(main)/shopComponents/ChocolateCakes";
import PhoneNav from "@/components/PhoneNav";

const Shop = () => {
  return (
    <main className="px-5 text-xs pb-20">
      <div className="border rounded-md p-1 flex gap-2 justify-center">
        <span className="h-8 aspect-square block">{icon.magnifyGlass}</span>
        <input
          type="search"
          className=" focus:outline-none w-full "
          placeholder="Search"
        />
      </div>
      <div>
        <Carousel />
        <Chocolate />
        <Chocolate />
        <Chocolate />
        <Chocolate />
      </div>
      <PhoneNav />
    </main>
  );
};

export default Shop;
