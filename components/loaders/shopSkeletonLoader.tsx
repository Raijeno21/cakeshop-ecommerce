import { icon } from "@/src/svgIcons";
const ShopSkeletonLoader = () => {
  return (
    <section className="">
      <div className="border h-10 w-full pt-5 rounded-md bg-gray-300"></div>
      <div className=" h-25 w-full mt-5 rounded-md bg-gray-300 flex justify-center items-center">
        <div className="h-40 w-full flex items-center justify-center">
          {" "}
          {icon.img}
        </div>
      </div>

      <div>
        <div className="border h-5 w-3/4 mt-5 rounded-sm bg-gray-300"></div>
        <div className="grid grid-cols-2 gap-4 w-full h-40 mt-5">
          <div className="bg-gray-300 rounded-md flex items-center justify-center">
            {icon.img}
          </div>
          <div className="bg-gray-300 rounded-md flex items-center justify-center">
            {icon.img}
          </div>
        </div>
      </div>
      <div>
        <div className="border h-5 w-3/4 mt-5 rounded-sm bg-gray-300"></div>
        <div className="grid grid-cols-2 gap-4 w-full h-40 mt-5">
          <div className="bg-gray-300 rounded-md flex items-center justify-center">
            {icon.img}
          </div>
          <div className="bg-gray-300 rounded-md flex items-center justify-center">
            {icon.img}
          </div>
        </div>
      </div>
      <div>
        <div className="border h-5 w-3/4 mt-5 rounded-sm bg-gray-300"></div>
        <div className="grid grid-cols-2 gap-4 w-full h-40 mt-5">
          <div className="bg-gray-300 rounded-md flex items-center justify-center">
            {icon.img}
          </div>
          <div className="bg-gray-300 rounded-md flex items-center justify-center">
            {icon.img}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopSkeletonLoader;
