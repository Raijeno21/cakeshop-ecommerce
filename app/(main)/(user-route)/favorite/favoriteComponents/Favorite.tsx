"use client";
import { Button } from "@/components/ui/button";
import { icon } from "@/src/svgIcons";
import {
  useFavoritesQuery,
  useFavoritesMutations,
} from "@/services/useFavoritesQueryMutations";
import { useCartsMutations } from "@/services/useCartsQueryMutations";
import { CartDataType } from "@/src/dataTypes/interfaces";
import { useValidateUserQuery } from "@/services/useValidateUserQuery";

const Wishlist = () => {
  const { data: user } = useValidateUserQuery();
  const { data, isLoading, isError } = useFavoritesQuery(user?.id || "");
  const { removeFromFavorites, addToFavorites } = useFavoritesMutations();
  const { addToCart } = useCartsMutations();

  const handleDelete = (id: string) => {
    removeFromFavorites.mutate(id);
  };
  const handleAddToCart = (prod: CartDataType) => {
    const newProd = {
      userID: prod.userID,
      id: prod.productId,
      productName: prod.productName,
      image: prod.image,
      price: prod.price,
      inventoryStatus: prod.inventoryStatus,
      category: prod.category,
      quantity: 1,
    };
    addToCart.mutate(newProd);
    removeFromFavorites.mutate(prod.id!);
  };
  if (isLoading) {
    return <div className="mt-10 flex flex-col gap-2">Loading...</div>;
  }
  if (!data || data.length === 0) {
    return <div className="mt-10 flex flex-col gap-2">Nothing to show</div>;
  }
  if (isError) {
    return <div className="mt-10 flex flex-col gap-2">Nothing to show</div>;
  }
  return (
    <section className="mt-10 flex flex-col gap-2 text-gray-500">
      {data!.map((prod) => (
        <div key={prod.id} className="border-y border-black/20 w-full flex ">
          <div className="w-1/4 p-1">
            <img src={prod.image} className="rounded-sm" />
          </div>
          <div className="w-full flex flex-col justify-between p-2">
            <div className="flex-1 flex justify-between items-center">
              <p className="font-semibold text-lg">{prod.productName}</p>
              <p>₱ {prod.price}</p>
            </div>
            <div className="flex justify-between">
              <Button
                variant={"primary"}
                className="px-5 py-1 rounded-sm"
                onClick={() => handleAddToCart(prod)}
              >
                Add to Cart
              </Button>
              <Button
                variant={"destructive"}
                className="p-2 rounded-full"
                onClick={() => {
                  handleDelete(prod.id!);
                  console.log("Deleted from favorites:", prod.id);
                }}
              >
                {icon.deleteIcon}
              </Button>
            </div>
          </div>
        </div>
      ))}
      <div className="px-10 mt-3">
        <Button className="w-full py-4" variant={"primary"}>
          Add to Cart all
        </Button>
      </div>
    </section>
  );
};

export default Wishlist;
