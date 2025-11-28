"use client";
import { useEffect, useState } from "react";

const Carousel = () => {
  const carouselImages = [
    { image: "./meat.jpg" },
    { image: "./vegetable.jpg" },
    { image: "./beverage.jpg" },
  ];
  const [carouselPage, setCarouselPage] = useState<number>(2);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselPage < carouselImages.length - 1) {
        setCarouselPage(carouselPage + 1);
      } else {
        setCarouselPage(0);
      }
    }, 5000);

    return () => clearInterval(interval);
  });

  return (
    <section className="flex mt-5 w-full overflow-hidden flex-col">
      <div
        className="flex transition ease-in-out duration-300 h-30 rounded-sm"
        style={{ transform: `translateX(-${carouselPage * 100}%)` }}
      >
        {carouselImages.map((img, i) => (
          <img
            src={img.image}
            className="min-w-full object-cover rounded-sm"
            key={i}
          />
        ))}
      </div>
      <div className="flex justify-center p-1 gap-2">
        {Array.from({ length: carouselImages.length }).map((_, i) => (
          <div
            className={`h-2 rounded-full bg-gray-300 aspect-square  ${
              carouselPage === i ? "bg-green-500 px-1.5" : ""
            }`}
            key={i}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Carousel;
