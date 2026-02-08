import { useQuery } from "@tanstack/react-query";

export const useValidateUserQuery = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await fetch(`${apiUrl}/api/sign-in`, {
        method: "GET",
        credentials: "include",
      });
      if (!response.ok) {
        throw new Error("Error validating user");
      }
      const data = await response.json();
      console.log(data);
      return data.user;
    },
  });
};
