import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";
import * as jwt from "jsonwebtoken";
import { cookies } from "next/headers";
interface ReqType {
  email: string;
  password: string;
}

export const POST = async (req: Request) => {
  const body: ReqType = await req.json();
  const { email, password } = body;
  try {
    const user = await prisma.userDetails.findUnique({ where: { email } });
    if (!user) {
      return NextResponse.json(
        { error: "* Email does'nt exist" },
        { status: 401 },
      );
    }
    const compare = await bcrypt.compare(password, user.password);
    if (!compare) {
      return NextResponse.json(
        { error: "* Password is incorrect" },
        { status: 401 },
      );
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET!,
      { expiresIn: "1h" },
    );
    const res = NextResponse.json({ user });
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

export const GET = async (req: Request) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) {
    return NextResponse.json({ user: null });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
      id: string;
      email: string;
    };

    const user = await prisma.userDetails.findUnique({
      where: { id: decoded.id },
      select: { id: true, email: true },
    });
    return NextResponse.json({ user });
  } catch (err) {
    return NextResponse.json({ user: null });
  }
};
