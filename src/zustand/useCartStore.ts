import { create } from "zustand";
import { CartDataType } from "../dataTypes/interfaces";
interface CartStoreType {
  cartItems: CartDataType[];
  setCartItems: (items: CartDataType) => void;
}

export const useCartStore = () =>
  create<CartStoreType>((set) => ({
    cartItems: [],
    setCartItems: (item) => {},
  }));
