import PhoneNav from "@/components/PhoneNav";
import { useQuery } from "@tanstack/react-query";
const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <PhoneNav />
    </>
  );
};

export default MainLayout;
