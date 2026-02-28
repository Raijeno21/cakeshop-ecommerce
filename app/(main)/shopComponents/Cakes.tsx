"use client";
import { useProductDetailStore } from "@/src/zustand/useProductDetailStore";
import { useState } from "react";
import { ProductDetailType, CartDataType } from "@/src/dataTypes/interfaces";
import ProductDetail from "./ProductDetail";
import ProductsByCategory from "./ProdcutsByCategory";
import { Button } from "@/components/ui/button";
import { icon } from "@/src/svgIcons";
import { useCartsMutations } from "@/services/useCartsQueryMutations";
import { useQueryClient } from "@tanstack/react-query";
import { UserDetailsType } from "@/src/dataTypes/interfaces";
const Cakes = ({ Flavor }: { Flavor: ProductDetailType[] }) => {
  const setProductDetail = useProductDetailStore(
    (state) => state.setProductDetails,
  );
  const { addToCart } = useCartsMutations();
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData<UserDetailsType>(["user"]);
  const handleAddToCart = (formData: ProductDetailType) => {
    const newData = {
      id: formData.id,
      userID: user?.id as string,
      productName: formData.productName,
      image: formData.image,
      price: formData.price,
      inventoryStatus: formData.inventoryStatus,
      category: formData.category,
      quantity: 1,
    };
    if (user) {
      addToCart.mutate(newData);
    } else {
      alert("Please log in to add items to cart");
    }
  };

  const [isShowProductDetail, setIsShowProductDetail] =
    useState<boolean>(false);
  const [isSeeAll, setIsSeeAll] = useState<boolean>(false);
  const handleShowProduct = (prod: ProductDetailType) => {
    setProductDetail(prod);
    setIsShowProductDetail(true);
  };
  if (isShowProductDetail) {
    return <ProductDetail isShow={setIsShowProductDetail} />;
  }
  if (isSeeAll) {
    return <ProductsByCategory setIsSeeAll={setIsSeeAll} flavor={Flavor} />;
  }
  return (
    <section className=" mt-5">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">{Flavor[0].category}</h1>
        <p className="text-pink-500 text-sm" onClick={() => setIsSeeAll(true)}>
          See all
        </p>
      </div>
      <div className="flex overflow-x-auto gap-2 ">
        {Flavor &&
          Flavor.map((prod) => (
            <div
              key={prod.id}
              className="min-w-40 aspect-4/5 border border-gray-300 rounded-md p-2 flex flex-col justify-between"
            >
              <img
                src={prod.image}
                className="w-full rounded-md object-cover cursor-pointer"
                onClick={() => handleShowProduct(prod)}
              />
              <div className="text-gray-500 flex justify-between">
                <div>
                  <h3 className="font-semibold text-md">{prod.productName}</h3>
                  <p>₱ {prod.price}</p>
                </div>
                <Button
                  variant={"primary"}
                  size={"xs"}
                  onClick={() => handleAddToCart(prod)}
                >
                  {icon.plus}
                </Button>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Cakes;
