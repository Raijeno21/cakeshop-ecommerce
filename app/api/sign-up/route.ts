import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { userSchema } from "@/src/dataTypes/schemas/zodSign-up";
import prisma from "@/lib/prisma";
import * as jwt from "jsonwebtoken";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const { email, password } = body;

    const validation = userSchema.safeParse({ email, password });

    if (!validation.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: validation.error.issues,
        },
        { status: 400 }
      );
    }
    const isExist = await prisma.user.findUnique({ where: { email } });
    if (isExist) {
      return NextResponse.json(
        {
          error: "email already exist",
        },
        { status: 400 }
      );
    }

    const hashedPword = await bcrypt.hash(password, 10);
    const result = await prisma.user.create({
      data: {
        email,
        password: hashedPword,
      },
    });
    const token = jwt.sign(
      { id: result.id, email: result.email },
      process.env.JWT_SECRET!,
      { expiresIn: "1h" }
    );

    const res = NextResponse.json({ message: result });
    res.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: true,
      path: "/",
      maxAge: 60 * 60,
    });
    return res;
  } catch (err) {
    return NextResponse.json({ message: err });
  }
};
