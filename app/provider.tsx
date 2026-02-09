"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { use, useState } from "react";
import { useValidateUserQuery } from "@/services/useValidateUserQuery";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  const InitUserData = () => {
    useValidateUserQuery();
    return null;
  };
  return (
    <QueryClientProvider client={queryClient}>
      <InitUserData />
      {children}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}
