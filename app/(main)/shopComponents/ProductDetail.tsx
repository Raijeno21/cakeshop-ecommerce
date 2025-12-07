"use client";
import { createPortal } from "react-dom";
import { useLayoutEffect, useState } from "react";
import { useProductDetailStore } from "@/src/zustand/useProductDetailStore";
import { icon } from "@/src/svgIcons";
import { Button } from "@/components/ui/button";

const ProductDetail = ({ isShow }: { isShow: (show: boolean) => void }) => {
  const [container, setContainer] = useState<HTMLElement | null>(null);
  const productDetail = useProductDetailStore((state) => state.productDetails);
  useLayoutEffect(() => {
    setContainer(document.body);
  }, []);

  if (!container) return null;

  return createPortal(
    <article className="fixed inset-0 z-9999  bg-white">
      <div className="w-full  pl-5 pt-5 " onClick={() => isShow(false)}>
        <span className="rotate-90 block h-5 aspect-square ">
          {icon.miniarrow2}
        </span>
      </div>
      <div className=" flex flex-col gap-5 ">
        <div className="h-1/4 w-full relative flex items-center justify-center  mt-2 bg-gray-200 rounded-md p-2 ">
          <img
            src={productDetail?.image}
            className="h-full aspect-auto rounded-md "
          />
        </div>
        <div className=" px-5 py-5 border-y border-black/20 ">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-lg">
              {productDetail?.productName}
            </h3>
            <div className="h-6 aspect-square">{icon.heart}</div>
          </div>
          <div>
            <div className=" w-full flex justify-between items-center mt-2 ">
              <div className="flex gap-3 items-center justify-between ">
                <Button
                  size="icon-sm"
                  variant="subtract"
                  className="text-2xl rounded-full bg-gray-200 text-destructive "
                >
                  -
                </Button>
                <div className="bg-gray-200 h-8 aspect-square text-sm flex items-center justify-center m-1 rounded-full ">
                  1
                </div>
                <Button
                  variant="default"
                  className="text-2xl rounded-full bg-gray-200 text-chart-2"
                  size="icon-sm"
                >
                  +
                </Button>
              </div>
              <div className="flex items-center">{productDetail?.price}</div>
            </div>
          </div>
        </div>
        <div className=" justify-between pl-5 pr-3  items-center  text-gray-500 ">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-black ">Product Detail</h3>
            <Button size={"icon-sm"} variant={"ghost"} className="">
              {icon.miniarrow2}
            </Button>
          </div>
          <p>
            Indulgently moist and packed with intense chocolate flavor—our
            chocolate moist cake is the perfect treat for any celebration.
          </p>
        </div>
        <div className="flex justify-between px-5 border-y border-black/20 py-5  items-center">
          <p>Review</p>
          <div className="flex items-center">
            <img
              src={`./ratings/rating-${productDetail!.rating * 10}.png`}
              className="h-5"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <Button className="py-5 px-8 text-lg" variant={"primary"}>
            Add to Basket
          </Button>
        </div>
      </div>
    </article>,
    container
  );
};

export default ProductDetail;
