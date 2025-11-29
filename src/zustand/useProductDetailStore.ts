import { create } from "zustand";
import { ProductDetailType } from "@/src/dataTypes/interfaces";

interface ProductStoreType {
  productDetails: ProductDetailType | undefined;
  setProductDetails: (prod: ProductDetailType) => void;
}

export const useProductDetailStore = create<ProductStoreType>((set) => ({
  productDetails: undefined,
  setProductDetails: (prod) => {
    set({ productDetails: prod });
  },
}));
