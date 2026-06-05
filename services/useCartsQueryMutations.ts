"use client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { CartDataType, UpdateCartType } from "@/src/dataTypes/interfaces";
import { useValidateUserQuery } from "./useValidateUserQuery";
import { updateQuantity } from "@/src/customhooks/useUpdateQuantity";

export const useCartsMutations = () => {
  const queryClient = useQueryClient();
  const api = process.env.NEXT_PUBLIC_API_URL;
  const apiUrl = `${api}/api/carts/`;
  const addToCart = useMutation({
    mutationFn: async (cartData: any) => {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartData),
        credentials: "include",
      });
      if (!response.ok) {
        throw new Error("Error adding to cart");
      }
      const data = await response.json();
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cartItems"] });
    },
    onError: (error: any) => {
      console.error("Error adding to cart:", error);
    },
  });

  const updateCartItem = useMutation({
    mutationFn: async ({ id, quantity, newQty }: UpdateCartType) => {
      const newQuantity = updateQuantity(quantity, newQty);
      const response = await fetch(apiUrl, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, quantity: newQuantity }),
      });
      if (!response.ok) {
        throw new Error("Error updating cart item");
      }
      return response.json();
    },
    onSuccess: () => {
      console.log("Cart item updated successfully");
      queryClient.invalidateQueries({ queryKey: ["cartItems"] });
    },
  });

  const removeFromCart = useMutation({
    mutationFn: async (cartData: any) => {
      const response = await fetch(apiUrl, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartData),
      });
      if (!response.ok) {
        throw new Error("Error removing from cart");
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cartItems"] });
      const currentCart =
        queryClient.getQueryData<CartDataType[]>(["cartItems"]) || [];
      if (currentCart.length === 1) {
        queryClient.setQueryData(["cartItems"], []);
      }
    },
  });

  return { addToCart, updateCartItem, removeFromCart };
};

export const useCartsQuery = () => {
  const { data: user } = useValidateUserQuery();

  return useQuery<CartDataType[], Error>({
    queryKey: ["cartItems"],
    queryFn: async (): Promise<CartDataType[]> => {
      const api = process.env.NEXT_PUBLIC_API_URL;
      const apiUrl = `${api}/api/carts`;
      const response = await fetch(apiUrl, { credentials: "include" });
      if (!response.ok) throw new Error("Error fetching cart items");
      return response.json();
    },
    staleTime: 1000 * 60 * 2,
    enabled: !!user,
    retry: 1,
  });
};
