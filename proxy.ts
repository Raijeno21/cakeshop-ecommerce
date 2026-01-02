import { NextRequest, NextResponse } from "next/server";

export const proxy = (req: NextRequest) => {
  // const token = req.cookies.get("token")?.value;

  // if (!token) {
  //   return NextResponse.redirect(new URL("/sign-in", req.url));
  // }

  return NextResponse.next();
};

export const config = {
  matcher: ["/carts/:path*", "/favorite/:path*", "/account/:path*"],
};
