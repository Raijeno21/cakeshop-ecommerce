import { useQuery } from "@tanstack/react-query";
interface UserDataType {
  id: string;
  email: string;
  details: {
    name: string;
  } | null;
}

export const useValidateUserQuery = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  return useQuery({
    queryKey: ["user"],
    queryFn: async (): Promise<UserDataType> => {
      const response = await fetch(`${apiUrl}/api/sign-in`, {
        method: "GET",
        credentials: "include",
      });
      if (!response.ok) {
        throw new Error("Error validating user");
      }
      const data = await response.json();

      return data.user;
    },
  });
};
