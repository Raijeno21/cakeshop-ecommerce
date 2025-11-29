import Wishlist from "./favoriteComponents/Favorite";

const Favorite = () => {
  return (
    <main className="min-h-screen overflow-auto pb-20">
      <div className=" fixed top-0 inset-x-0 bg-white flex justify-center p-2 text-xl font-semibold">
        Favorite
      </div>
      <Wishlist />
    </main>
  );
};

export default Favorite;
