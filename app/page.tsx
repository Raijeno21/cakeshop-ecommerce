import { icon } from "@/src/svgIcons";
import Link from "next/link";
import Carousel from "./homeComponents/Carousel";

const Shop = () => {
  return (
    <main className="px-5 text-xs">
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
      </div>
    </main>
  );
};

export default Shop;
