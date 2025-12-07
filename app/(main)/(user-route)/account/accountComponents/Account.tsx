"use client";
import { Button } from "@/components/ui/button";
import { icon } from "@/src/svgIcons";
import { useRouter } from "next/navigation";
const Account = () => {
  const menu = [
    { name: "Orders", icon: icon.bag },
    { name: "My Details", icon: icon.settings },
    { name: "Delivery Address", icon: icon.location },
    { name: "Payment Methods", icon: icon.payIcon },
    { name: "Promo Card", icon: icon.tag },
    { name: "Notifications", icon: icon.bell },
    { name: "Help", icon: icon.helpIcon },
    { name: "About", icon: icon.aboutIcon },
  ];
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const router = useRouter();
  const logOut = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/logout`, {
        method: "POST",
      });
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <main className="max-h-dvh h-dvh">
      <div className=" flex gap-3">
        <img src="./defaultProfile.avif" className=" h-20 aspect-square" />
        <div className="flex flex-col justify-center">
          <p className="font-semibold  text-xl">Jeno M. Carisma</p>
          <p className="text-gray-500">jenopogi@gmail.com</p>
        </div>
      </div>
      <div className="flex flex-col ">
        {menu.map((nav, i) => (
          <div
            key={i}
            className="border-y flex justify-between items-center py-3"
          >
            <div className="flex gap-4">
              <span className="block h-6 aspect-square">{nav.icon}</span>
              <p>{nav.name}</p>
            </div>
            <span className="block h-4 aspect-square -rotate-90">
              {icon.miniarrow2}
            </span>
          </div>
        ))}
      </div>
      <div className=" mt-5 flex items-center justify-center ">
        <Button
          className="px-10 py-3 flex gap-3 rounded-sm text-base"
          onClick={logOut}
        >
          <span className="text-destructive">{icon.logout}</span>Log-out
        </Button>
      </div>
    </main>
  );
};

export default Account;
