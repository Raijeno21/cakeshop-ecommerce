import { useMutation, useQuery } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { CartDataType, UpdateCartType } from "@/src/dataTypes/interfaces";

import { updateQuantity } from "@/src/customhooks/useUpdateQuantity";
const api = process.env.NEXT_PUBLIC_API_URL;
const apiUrl = `${api}/api/carts`;

export const useCartsMutations = () => {
  const queryClient = useQueryClient();

  const addToCart = useMutation({
    mutationFn: async (cartData: any) => {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartData),
      });
      if (!response.ok) {
        throw new Error("Error adding to cart");
      }
      return response.json();
    },
    onSuccess: () => {
      console.log("Item added to cart successfully");
      queryClient.invalidateQueries({ queryKey: ["cartItems"] });
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
    },
  });

  return { addToCart, updateCartItem, removeFromCart };
};

export const useCartsQuery = (id: string) => {
  return useQuery<CartDataType[], Error>({
    queryKey: ["cartItems", id],
    queryFn: async (): Promise<CartDataType[]> => {
      const response = await fetch(`${apiUrl}/?userID=${id}`);
      if (!response.ok) throw new Error("Error fetching cart items");
      return response.json();
    },
  });
};
