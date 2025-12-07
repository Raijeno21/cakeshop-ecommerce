import prisma from "@/lib/prisma";
import { ProductDetailType } from "@/src/dataTypes/interfaces";

const generateItems = async () => {
  const newArr: ProductDetailType[] = [];
  const category = [
    "Red Velvet",
    "Chocolate",
    "Mango",
    "Ube",
    "Mocha",
    "Caramel",
  ];
  for (let i = 0; i < 100; i++) {
    const obj = {} as ProductDetailType;
    obj.productName = `Product${i}`;
    obj.price = Math.floor(Math.random() * 10 + 1);
    obj.rating = Math.floor(Math.random() * 5 + 1);
    obj.image =
      "https://res.cloudinary.com/dhbvjqpi8/image/upload/v1765089840/images_1_ffkqei.jpg";
    obj.inventoryStatus = Math.floor(Math.random() * 80 + 20);
    obj.category = category[Math.floor(Math.random() * category.length)];
    newArr.push(obj);
  }
  console.log(newArr);
  await prisma.items.createMany({
    data: newArr,
  });
  console.log("Items inserted:", newArr.length);
};
generateItems();
