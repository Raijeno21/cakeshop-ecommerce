import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";
import * as jwt from "jsonwebtoken";

interface ReqType {
  email: string;
  password: string;
}

export const POST = async (req: Request) => {
  const body: ReqType = await req.json();
  const { email, password } = body;
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return NextResponse.json(
        { error: "email does'nt exist" },
        { status: 401 }
      );
    }
    const compare = await bcrypt.compare(password, user.password);
    if (!compare) {
      return NextResponse.json(
        { error: "Password is incorrect" },
        { status: 401 }
      );
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET!,
      { expiresIn: "1h" }
    );
    const res = NextResponse.json({ success: true });
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
