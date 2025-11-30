import PhoneNav from "@/components/PhoneNav";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <PhoneNav />
    </>
  );
};

export default MainLayout;
