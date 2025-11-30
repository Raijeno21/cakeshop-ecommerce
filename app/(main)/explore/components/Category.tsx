const Category = () => {
  const categories = [
    {
      name: "Chocolate",
      image: "./category/chocolate.jpg",
      bg: "bg-darkbrown/90",
    },
    {
      name: "Red Velvet",
      image: "./category/redvelvet.jpeg",
      bg: "bg-destructive/70",
    },
    { name: "Mango", image: "./category/mango.jpeg", bg: "bg-yellow-500" },
    { name: "Ube", image: "./category/ubecake.jpeg", bg: "bg-purple-800/50" },
    { name: "Mocha", image: "./category/mocha.jpg", bg: " bg-yellow-900" },
    {
      name: "Caramel",
      image: "./category/caramel.jpeg",
      bg: "  bg-amber-700/90",
    },
  ];
  return (
    <section className="grid grid-cols-2 gap-2">
      {categories.map((cat) => (
        <div
          key={cat.name}
          className={`aspect-4/5 w-full flex flex-col gap-2 p-3 hover:border-pink-400 cursor-pointer border group ${cat.bg} rounded-md`}
        >
          <img
            src={cat.image}
            className=" object-cover h-3/4 rounded-lg group-hover:scale-102"
          />
          <h1 className=" flex-1 justify-center items-center flex text-white">
            {cat.name}
          </h1>
        </div>
      ))}
    </section>
  );
};

export default Category;
