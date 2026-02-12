import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async (
  req: Request,
  { params }: { params: { id: string } },
) => {
  const id = params.id;
  console.log("id:", id);
  console.log("typeof id:", typeof id);

  try {
    const result = await prisma.cartItems.findMany({
      where: { userID: id },
      orderBy: { createdAt: "desc" },
    });
    if (!result || result.length === 0) {
      return NextResponse.json(
        { message: "No items in cart" },
        { status: 404 },
      );
    }
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { message: "Error retrieving cart items", error },
      { status: 500 },
    );
  }
};

export const POST = async (req: Request) => {
  const data = await req.json();
  console.log(data);

  try {
    const result = await prisma.cartItems.create({
      data: {
        userID: data.userID,
        productId: data.id,
        productName: data.productName,
        image: data.image,
        price: data.price,
        inventoryStatus: data.inventoryStatus,
        category: data.category,
        quantity: data.quantity,
      },
    });
    if (!result) {
      return NextResponse.json(
        { message: "Error adding to cart" },
        { status: 500 },
      );
    }
    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};

export const DELETE = async (req: Request) => {
  const body = await req.json();
  const id = body.id;
  try {
    const result = await prisma.cartItems.delete({
      where: { id: id as string },
    });
    if (!result) {
      return NextResponse.json(
        { message: "Error deleting cart item" },
        { status: 500 },
      );
    }
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { message: "Error deleting cart item" },
      { status: 500 },
    );
  }
};
export const PATCH = async (req: Request) => {
  const data = await req.json();
  const id = data.id;
  const quantity = data.quantity;
  try {
    const result = await prisma.cartItems.update({
      where: { id: id as string },
      data: { quantity: quantity as number },
    });
    if (!result) {
      return NextResponse.json(
        { message: "Error updating cart item" },
        { status: 500 },
      );
    }
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { message: "Error updating cart item" },
      { status: 500 },
    );
  }
};
