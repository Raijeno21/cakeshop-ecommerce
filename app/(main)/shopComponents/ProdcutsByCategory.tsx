import { Button } from "@/components/ui/button";
import { ProductDetailType } from "@/src/dataTypes/interfaces";
import { icon } from "@/src/svgIcons";

const ProductsByCategory = ({
  setIsSeeAll,
  flavor,
}: {
  setIsSeeAll: (bol: boolean) => void;
  flavor: ProductDetailType[];
}) => {
  return (
    <section className="fixed z-99 inset-0 bg-white p-5 overflow-auto min-h-screen">
      <div className="flex justify-between items-center fixed top-0 left-0 right-0 bg-white ">
        <Button
          size={"icon-sm"}
          variant={"transparent"}
          className="rotate-90"
          onClick={() => setIsSeeAll(false)}
        >
          {icon.miniarrow2}
        </Button>
        <h3 className="text-xl font-semibold">Chocolate</h3>
        <Button size={"icon-sm"} variant={"transparent"}>
          {icon.Filter}
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-5">
        {flavor.map((prod) => (
          <div
            className="aspect-4/5 border flex flex-col rounded-md p-2 gap-2"
            key={prod.id}
          >
            <img src={prod.image} className="h-3/4 object-cover rounded-md " />
            <div className="flex items-center flex-col">
              <p className="text-sm font-semibold">{prod.productName}</p>
              <div className="flex justify-between items-center w-full">
                <span className="text-sm font-semibold">₱ {prod.price}</span>
                <Button size={"xs"} variant={"primary"}>
                  {icon.plus}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsByCategory;
