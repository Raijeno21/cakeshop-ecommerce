"use client";
import { icon } from "@/src/svgIcons";
import { useRouter } from "next/navigation";
const OrderPage = () => {
  const router = useRouter();
  const orders = [
    {
      id: 1,
      productName: "Chocolate Cake",
      price: 20,
      quantity: 100,
      status: "Delivered",
      img: "https://res.cloudinary.com/dhbvjqpi8/image/upload/v1765089840/images_1_ffkqei.jpg",
    },
    {
      id: 2,
      productName: "Vanilla Cake",
      price: 15,
      quantity: 1,
      status: "In Transit",
      img: "https://res.cloudinary.com/dhbvjqpi8/image/upload/v1765089840/images_1_ffkqei.jpg",
    },
    {
      id: 3,
      productName: "Strawberry Cake",
      price: 18,
      quantity: 1,
      status: "Processing",
      img: "https://res.cloudinary.com/dhbvjqpi8/image/upload/v1765089840/images_1_ffkqei.jpg",
    },
  ];
  return (
    <section>
      <div className="flex flex-col gap-3">
        <button
          className=" p-2 rotate-180 w-10 aspect-square"
          onClick={() => router.back()}
        >
          {icon.arrow}
        </button>
        <h1 className="text-xl font-semibold">My Orders</h1>
      </div>
      <div className="flex flex-col gap-2 mt-2">
        {orders.map((order) => (
          <div
            key={order.id}
            className="border rounded-sm flex justify-between p-2 shadow-sm"
          >
            <div className="w-3/4">
              <h2 className="font-semibold text-gray-400 text-xs">
                {order.status}
              </h2>
              <div className="pl-5 text-gray-500 ">
                <p>{order.productName}</p>
                <div className=" flex justify-between ">
                  <p className=" flex-1 flex justify-end pr-3">
                    Qty:
                    {order.quantity}
                  </p>
                  <div className="w-px border border-black"></div>
                  <p className=" flex-1 flex justify-start pl-3">
                    Price: $ {order.price}
                  </p>
                </div>
              </div>
            </div>
            <img
              src={order.img}
              className="h-20 aspect-square object-cover rounded-sm "
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OrderPage;
