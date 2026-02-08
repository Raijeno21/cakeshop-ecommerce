import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  const params = new URL(req.url).searchParams;
  const id = params.get("userID");
  console.log("Fetching favorites for user ID:", id);
  try {
    const result = await prisma.wishlist.findMany({
      where: { userID: id as string },
    });
    if (!result || result.length === 0) {
      return NextResponse.json(
        { message: "No favorite items found" },
        { status: 404 },
      );
    }
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { message: "Error retrieving favorite items" },
      { status: 500 },
    );
  }
};
export const POST = async (req: Request) => {
  const data = await req.json();
  console.log(data);

  try {
    const result = await prisma.wishlist.create({
      data: {
        userID: data.userID,
        productId: data.id,
        productName: data.productName,
        image: data.image,
        price: data.price,
        inventoryStatus: data.inventoryStatus,
        category: data.category,
      },
    });
    if (!result) {
      return NextResponse.json(
        { message: "Error adding to favorites" },
        { status: 500 },
      );
    }
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { message: "Error adding to favorites" },
      { status: 500 },
    );
  }
};

export const DELETE = async (req: Request) => {
  const body = await req.json();
  const id = body.id;
  try {
    const result = await prisma.wishlist.delete({
      where: { id: id },
    });
    if (!result) {
      return NextResponse.json(
        { message: "Error removing from favorites" },
        { status: 500 },
      );
    }
    return NextResponse.json({ message: "Removed from favorites" });
  } catch (error) {
    return NextResponse.json(
      { message: "Error removing from favorites" },
      { status: 500 },
    );
  }
};
export const PATCH = async (req: Request) => {
  const data = await req.json();
  const id = data.id;

  try {
    const result = await prisma.wishlist.update({
      where: { id: id },
      data: { ...data },
    });
    if (!result) {
      return NextResponse.json(
        { message: "Error updating favorite item" },
        { status: 500 },
      );
    }
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { message: "Error updating favorite item" },
      { status: 500 },
    );
  }
};
