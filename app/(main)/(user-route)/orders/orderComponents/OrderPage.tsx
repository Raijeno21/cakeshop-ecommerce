import { icon } from "@/src/svgIcons";
const OrderPage = () => {
  const orders = [
    { id: 1, productName: "Chocolate Cake", price: 20, status: "Delivered" },
    { id: 2, productName: "Vanilla Cake", price: 15, status: "In Transit" },
    { id: 3, productName: "Strawberry Cake", price: 18, status: "Processing" },
  ];
  return (
    <section>
      <div className="border flex flex-col gap-3">
        <button className=" p-2 rotate-180 w-10 aspect-square">
          {icon.arrow}
        </button>
        <h1 className="text-xl font-semibold">My Orders</h1>
      </div>
      {orders.map((order) => (
        <div key={order.id} className="border p-4">
          <h2 className="font-semibold">{order.productName}</h2>
          <p>Price: ${order.price}</p>
          <p>Status: {order.status}</p>
        </div>
      ))}
    </section>
  );
};

export default OrderPage;
