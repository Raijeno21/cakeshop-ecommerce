"use client";
import { product } from "@/src/fakeData/fakeData";
import { useProductDetailStore } from "@/src/zustand/useProductDetailStore";
import { useState } from "react";
import { ProductDetailType } from "@/src/dataTypes/interfaces";
import ProductDetail from "./ProductDetail";
import ProductsByCategory from "./ProdcutsByCategory";
const Chocolate = () => {
  const setProductDetail = useProductDetailStore(
    (state) => state.setProductDetails
  );
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
    return <ProductsByCategory setIsSeeAll={setIsSeeAll} />;
  }
  return (
    <section className=" mt-5">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Chocolate Moist</h1>
        <p className="text-pink-500 text-sm" onClick={() => setIsSeeAll(true)}>
          See all
        </p>
      </div>
      <div className="flex overflow-x-auto gap-2 ">
        {product.map((prod) => (
          <div
            key={prod.id}
            className="min-w-40 aspect-4/5 border border-gray-300 rounded-md p-2 flex flex-col justify-between"
            onClick={() => handleShowProduct(prod)}
          >
            <img src={prod.img} className="w-full rounded-md object-cover" />
            <div className="text-gray-500">
              <h3 className="font-semibold text-md">{prod.productName}</h3>
              <p>₱ {prod.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Chocolate;
