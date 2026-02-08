import { useQuery } from "@tanstack/react-query";

export const useValidateUserQuery = (email: string) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  return useQuery({
    queryKey: ["validateUser", email],
    queryFn: async () => {
      const response = await fetch(
        `${apiUrl}/api/validate-user?email=${email}`,
      );
      if (!response.ok) {
        throw new Error("Error validating user");
      }
      return response.json();
    },
    enabled: !!email,
  });
};
