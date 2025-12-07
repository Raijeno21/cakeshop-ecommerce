"use client";
import { useQuery } from "@tanstack/react-query";
import { icon } from "@/src/svgIcons";
import Carousel from "./(main)/shopComponents/Carousel";
import PhoneNav from "@/components/PhoneNav";
import Cakes from "./(main)/shopComponents/Cakes";

const Shop = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const getItems = async () => {
    const response = await fetch(`${apiUrl}/api/items`, { method: "GET" });
    const res = await response.json();
    if (!response.ok) {
      throw new Error(res.error);
    }
    return res;
  };
  const { data, isPending } = useQuery({
    queryKey: ["items"],
    queryFn: getItems,
  });
  if (isPending) {
    return <main>Loading</main>;
  }
  console.log(data.redvelvet);
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
        <Cakes Flavor={data.redvelvet} />
        <Cakes Flavor={data.chocolate} />
        <Cakes Flavor={data.mango} />
        <Cakes Flavor={data.ube} />
        <Cakes Flavor={data.mocha} />
        <Cakes Flavor={data.caramel} />
      </div>
      <PhoneNav />
    </main>
  );
};

export default Shop;
