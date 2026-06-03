import { useQuery } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { WishlistType } from "@/src/dataTypes/interfaces";
import { useQueryClient } from "@tanstack/react-query";
export const useFavoritesMutations = () => {
  const queryClient = useQueryClient();

  const addToFavorites = useMutation({
    mutationFn: async (data: WishlistType) => {
      const response = await fetch("/api/favorites", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Error adding to favorites");
      }
      console.log("Added to favorites:", data);
      return response.json();
    },
    onSuccess: async (id) => {
      await fetch("/api/cart", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: id.productId }),
      });
      queryClient.invalidateQueries({ queryKey: ["favorites"] });
    },
  });

  const removeFromFavorites = useMutation({
    mutationFn: async (id: string) => {
      const response = await fetch("/api/favorites", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (!response.ok) {
        throw new Error("Error removing from favorites");
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["favorites"] });
    },
  });

  const updateFavoriteItem = useMutation({
    mutationFn: async (data: WishlistType) => {
      const response = await fetch("/api/favorites", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Error updating favorite item");
      }
      return response.json();
    },
  });

  return { addToFavorites, removeFromFavorites, updateFavoriteItem };
};
export const useFavoritesQuery = (userID: string) => {
  return useQuery({
    queryKey: ["favorites", userID],
    queryFn: async (): Promise<WishlistType[]> => {
      const response = await fetch("/api/favorites", {
        credentials: "include",
      });
      if (!response.ok) {
        throw new Error("Error fetching favorites");
      }
      return response.json();
    },
    enabled: !!userID,
    retry: false,
  });
};
