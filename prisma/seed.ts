// import prisma from "@/lib/prisma";
// import {
//   CartDataType,
//   OrderType,
//   ProductDetailType,
//   WishlistType,
// } from "@/src/dataTypes/interfaces";
import { OrderStatus } from "@/src/generated/prisma/enums";
// const generateItems = async () => {
//     const newArr: ProductDetailType[] = [];
//     const category = ["Red Velvet", "Chocolate", "Mango","Ube","Mocha","Caramel"];
//     for (let i = 0; i < 100; i++) {
//       const obj = {} as ProductDetailType;
//       obj.productName = `Product${i}`;
//       obj.price = Math.floor(Math.random() * 10 + 1);
//       obj.rating = Math.floor(Math.random() * 5 + 1);
//       obj.image =
//         "https://res.cloudinary.com/dhbvjqpi8/image/upload/v1765089840/images_1_ffkqei.jpg";
//       obj.inventoryStatus = Math.floor(Math.random() * 80 + 20);
//       obj.category = category[Math.floor(Math.random() * category.length)];
//       newArr.push(obj);
//     }
//     console.log(newArr);
//     await prisma.items.createMany({
//       data: newArr,
//     });
//     console.log("Items inserted:", newArr.length);
// };
// generateItems();

// const generateCarts = async () => {
//   const user = await prisma.user.findMany({ select: { id: true } });
//   const items = await prisma.items.findMany({ take: 20 });
//   // 16
//   console.log(user);

//   const newArr: CartDataType[] = [];
//   const isCheckout = [true, false];

//   for (let i = 0; i < 90; i++) {
//     const newUser = user[Math.floor(Math.random() * 16)];
//     const newItem = items[Math.floor(Math.random() * 20)];
//     const obj = {} as CartDataType;

//     obj.userID = newUser.id;
//     obj.productName = newItem.productName;
//     obj.productId = newItem.id;
//     obj.image = newItem.image;
//     obj.quantity = Math.floor(Math.random() * 10 + 1);
//     obj.price = Math.floor(Math.random() * 96 + 5);
//     obj.isCheckout = isCheckout[Math.floor(Math.random() * 2)];
//     obj.inventoryStatus = newItem.inventoryStatus;
//     obj.category = newItem.category;
//     newArr.push(obj);
//   }
//   console.log(newArr);
//   await prisma.cartItems.createMany({ data: newArr });
// };

// generateCarts();
// const generateUserDetails = async () => {
//   const userDetailsData = [
//     {
//       userId: "126d0ef8-dafc-4331-8abc-6e015023effc",
//       firstName: "Liam",
//       lastName: "Santos",
//       mobileNumber: "09171234501",
//       address: "Quezon City, Manila",
//       profileImage:
//         "https://res.cloudinary.com/dhbvjqpi8/image/upload/v1765117938/defaultProfilePic_h1v9rh.webp",
//     },
//     {
//       userId: "86cd6a5c-4ea0-446b-854d-d3c15fc47915",
//       firstName: "Mia",
//       lastName: "Reyes",
//       mobileNumber: "09171234502",
//       address: "Cebu City, Cebu",
//       profileImage:
//         "https://res.cloudinary.com/dhbvjqpi8/image/upload/v1765117938/defaultProfilePic_h1v9rh.webp",
//     },
//     {
//       userId: "d36593bc-64b1-4079-9623-a5588bc28556",
//       firstName: "Noah",
//       lastName: "Garcia",
//       mobileNumber: "09171234503",
//       address: "Davao City, Davao del Sur",
//       profileImage:
//         "https://res.cloudinary.com/dhbvjqpi8/image/upload/v1765117938/defaultProfilePic_h1v9rh.webp",
//     },
//     {
//       userId: "db5b06d9-65de-4c8d-bc99-ed1639c0791c",
//       firstName: "Ella",
//       lastName: "Torres",
//       mobileNumber: "09171234504",
//       address: "Makati City, Manila",
//       profileImage:
//         "https://res.cloudinary.com/dhbvjqpi8/image/upload/v1765117938/defaultProfilePic_h1v9rh.webp",
//     },
//     {
//       userId: "38bcc382-c220-4e56-b557-90b63b2b70e1",
//       firstName: "Ethan",
//       lastName: "Rivera",
//       mobileNumber: "09171234505",
//       address: "Taguig City, Manila",
//       profileImage:
//         "https://res.cloudinary.com/dhbvjqpi8/image/upload/v1765117938/defaultProfilePic_h1v9rh.webp",
//     },
//     {
//       userId: "6eda3f31-e423-4233-b35c-a0b2c84c2915",
//       firstName: "Ava",
//       lastName: "Cruz",
//       mobileNumber: "09171234506",
//       address: "Pasig City, Manila",
//       profileImage:
//         "https://res.cloudinary.com/dhbvjqpi8/image/upload/v1765117938/defaultProfilePic_h1v9rh.webp",
//     },
//     {
//       userId: "c83a9dc2-4024-4662-9fac-6ae6e70eba4e",
//       firstName: "Logan",
//       lastName: "Flores",
//       mobileNumber: "09171234507",
//       address: "Antipolo City, Rizal",
//       profileImage:
//         "https://res.cloudinary.com/dhbvjqpi8/image/upload/v1765117938/defaultProfilePic_h1v9rh.webp",
//     },
//     {
//       userId: "cb2fe568-744d-4fbb-a990-b3dc702a5532",
//       firstName: "Sofia",
//       lastName: "Martinez",
//       mobileNumber: "09171234508",
//       address: "Cagayan de Oro City",
//       profileImage:
//         "https://res.cloudinary.com/dhbvjqpi8/image/upload/v1765117938/defaultProfilePic_h1v9rh.webp",
//     },
//     {
//       userId: "923b85da-1220-447e-9174-954979017aee",
//       firstName: "Lucas",
//       lastName: "Domingo",
//       mobileNumber: "09171234509",
//       address: "Iloilo City, Iloilo",
//       profileImage:
//         "https://res.cloudinary.com/dhbvjqpi8/image/upload/v1765117938/defaultProfilePic_h1v9rh.webp",
//     },
//     {
//       userId: "12ca9012-56cb-4c99-91a5-99e37b939ca7",
//       firstName: "Isabella",
//       lastName: "Lagman",
//       mobileNumber: "09171234510",
//       address: "Baguio City, Benguet",
//       profileImage:
//         "https://res.cloudinary.com/dhbvjqpi8/image/upload/v1765117938/defaultProfilePic_h1v9rh.webp",
//     },
//     {
//       userId: "307d1972-8551-4193-85c2-fa16fb243f67",
//       firstName: "James",
//       lastName: "Villanueva",
//       mobileNumber: "09171234511",
//       address: "General Santos City",
//       profileImage:
//         "https://res.cloudinary.com/dhbvjqpi8/image/upload/v1765117938/defaultProfilePic_h1v9rh.webp",
//     },
//     {
//       userId: "7eab892f-a39d-4cef-95be-3efe414333d9",
//       firstName: "Amelia",
//       lastName: "Aquino",
//       mobileNumber: "09171234512",
//       address: "Santa Rosa City, Laguna",
//       profileImage:
//         "https://res.cloudinary.com/dhbvjqpi8/image/upload/v1765117938/defaultProfilePic_h1v9rh.webp",
//     },
//     {
//       userId: "0d94635b-dcd2-4ee8-9459-eea5816e9e22",
//       firstName: "Benjamin",
//       lastName: "Ramos",
//       mobileNumber: "09171234513",
//       address: "Dasmariñas City, Cavite",
//       profileImage:
//         "https://res.cloudinary.com/dhbvjqpi8/image/upload/v1765117938/defaultProfilePic_h1v9rh.webp",
//     },
//     {
//       userId: "beb44967-3707-43df-9303-4987496a71bb",
//       firstName: "Chloe",
//       lastName: "Bautista",
//       mobileNumber: "09171234514",
//       address: "San Juan City, Manila",
//       profileImage:
//         "https://res.cloudinary.com/dhbvjqpi8/image/upload/v1765117938/defaultProfilePic_h1v9rh.webp",
//     },
//     {
//       userId: "c70611bb-31af-4ed6-8ea2-c27297e44fae",
//       firstName: "Henry",
//       lastName: "Jimenez",
//       mobileNumber: "09171234515",
//       address: "Tarlac City, Tarlac",
//       profileImage:
//         "https://res.cloudinary.com/dhbvjqpi8/image/upload/v1765117938/defaultProfilePic_h1v9rh.webp",
//     },
//     {
//       userId: "3f6a5668-c0a2-4b6f-8adf-6eacdef879da",
//       firstName: "Grace",
//       lastName: "Mendez",
//       mobileNumber: "09171234516",
//       address: "Zamboanga City",
//       profileImage:
//         "https://res.cloudinary.com/dhbvjqpi8/image/upload/v1765117938/defaultProfilePic_h1v9rh.webp",
//     },
//   ];

//   const res = await prisma.userDetails.createMany({ data: userDetailsData });
//   console.log(res);
// };
// generateUserDetails();

// const generateWishlist = async () => {
//   const user = await prisma.user.findMany({ select: { id: true } });
//   const items = await prisma.items.findMany({ take: 20 });
//   console.log(user);

//   const newArr: WishlistType[] = [];
//   const isCheckout = [true, false];

//   for (let i = 0; i < 90; i++) {
//     const newUser = user[Math.floor(Math.random() * 16)];
//     const newItem = items[Math.floor(Math.random() * 20)];
//     const obj = {} as WishlistType;

//     obj.userID = newUser.id;
//     obj.productName = newItem.productName;
//     obj.productId = newItem.id;
//     obj.image = newItem.image;
//     obj.price = Math.floor(Math.random() * 96 + 5);
//     obj.inventoryStatus = newItem.inventoryStatus;
//     obj.category = newItem.category;
//     newArr.push(obj);
//   }
//   console.log(newArr);
//   await prisma.wishlist.createMany({ data: newArr });
// };

// generateWishlist();

// id String @id @default(uuid())
//   userID String
//   productName String
//   productId String
//   image String
//   price Int
//   inventoryStatus Int
//   category String
//   createdAt DateTime @default(now())
//   updatedAt DateTime @updatedAt
//   user UserDetails @relation("UserWishlist",fields: [userID], references: [userId])

// const generateOrders = async () => {
//   const user = await prisma.user.findMany({ select: { id: true } });
//   const items = await prisma.items.findMany({ take: 20 });
//   // 16
//   console.log(user);

//   const newArr: OrderType[] = [];
//   const isCheckout = [true, false];
//   const status = ["PENDING", "PROCESSING", "DELIVIRED", "SHIPPED", "CANCELLED"];
//   for (let i = 0; i < 90; i++) {
//     const newUser = user[Math.floor(Math.random() * 16)];
//     const newItem = items[Math.floor(Math.random() * 20)];
//     const obj = {} as OrderType;

//     obj.userID = newUser.id;
//     obj.productName = newItem.productName;
//     obj.productId = newItem.id;
//     obj.image = newItem.image;
//     obj.quantity = Math.floor(Math.random() * 10 + 1);
//     obj.price = Math.floor(Math.random() * 96 + 5);
//     obj.totalPrice = obj.quantity * obj.price;
//     obj.category = newItem.category;

//     newArr.push(obj);
//   }
//   console.log(newArr);
//   await prisma.order.createMany({ data: newArr });
// };
// generateOrders();
