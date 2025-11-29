"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { icon } from "../src/svgIcons";
const PhoneNav = () => {
  const navigation = [
    { name: "Shop", icon: icon.shop, link: "/" },
    { name: "Explore", icon: icon.searchIcon, link: "/explore" },
    { name: "Cart", icon: icon.cart, link: "/carts" },
    { name: "Favorite", icon: icon.heart, link: "/favorite" },
    { name: "Account", icon: icon.user, link: "/account" },
  ];
  const location = usePathname();
  console.log(location);

  return (
    <nav className="w-full h-16 text-sm fixed bottom-0 flex justify-between px-5 rounded-t-xl bg-gray-200 shadow">
      {navigation.map((nav, i) => (
        <div
          className={`${
            location === nav.link
              ? "bg-pink-500  text-white rounded-sm transition duration-300 ease-in-out "
              : ""
          }flex flex-1 items-center justify-center`}
          key={i}
        >
          <Link className=" flex-1" href={nav.link}>
            <div className="w-10  aspect-square mx-auto p-1"> {nav.icon}</div>
            <div className="flex justify-center">{nav.name}</div>
          </Link>
        </div>
      ))}
    </nav>
  );
};

export default PhoneNav;
