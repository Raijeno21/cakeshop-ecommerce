import prisma from "@/lib/prisma";
import { error } from "console";
import { Caramel } from "next/font/google";
import { NextResponse } from "next/server";

export const GET = async () => {
  const category = [
    "Red Velvet",
    "Chocolate",
    "Mango",
    "Ube",
    "Mocha",
    "Caramel",
  ];
  try {
    const items = await Promise.all(
      category.map((cat) =>
        prisma.items.findMany({
          where: { category: cat },
          take: 15,
          orderBy: { productName: "desc" },
        })
      )
    );
    return NextResponse.json({
      redvelvet: items[0],
      chocolate: items[1],
      mango: items[2],
      ube: items[3],
      mocha: items[4],
      caramel: items[5],
    });
  } catch (err) {
    return NextResponse.json({ error: err });
  }
};
