import Link from "next/link";

const Home = () => {
  return (
    <main className="flex gap-10 bg-red-400">
      <Link href="/checkout">Checkout</Link>
      <Link href="/shop">shop</Link>
      <Link href="/carts">carts</Link>
      <Link href="/wishlist">wishlist</Link>
    </main>
  );
};

export default Home;
