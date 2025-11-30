import CartItems from "./cartComponents/CartItems";

const Carts = () => {
  return (
    <main className="min-h-screen">
      <div className=" fixed top-0 inset-x-0 bg-white flex justify-center p-2 text-xl font-semibold">
        My Cart
      </div>
      <CartItems />
    </main>
  );
};

export default Carts;
