import { Button } from "@/components/ui/button";
import { product } from "@/src/fakeData/fakeData";
import { icon } from "@/src/svgIcons";
const Wishlist = () => {
  return (
    <section className="mt-10 flex flex-col gap-2 text-gray-500">
      {product.map((prod) => (
        <div key={prod.id} className="border-y border-black/20 w-full flex ">
          <div className="w-1/4 p-1">
            <img src={prod.img} className="rounded-sm" />
          </div>
          <div className="w-full flex flex-col justify-between p-2">
            <div className="flex-1 flex justify-between items-center">
              <p className="font-semibold text-lg">{prod.productName}</p>
              <p>₱ {prod.price}</p>
            </div>
            <div className="flex justify-between">
              <Button variant={"primary"} className="px-5 py-1 rounded-sm">
                Add to Cart
              </Button>
              <Button variant={"destructive"} className="p-2 rounded-full">
                {icon.deleteIcon}
              </Button>
            </div>
          </div>
        </div>
      ))}
      <Button className="mx-auto mt-3" variant={"primary"}>
        Add to Cart all
      </Button>
    </section>
  );
};

export default Wishlist;
