import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

    export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  if (!token) return NextResponse.redirect(new URL("/login", request.url));
  const decoded = jwt.verify(token, "secret");
  if (!decoded) return NextResponse.redirect(new URL("/login", request.url));
  const user = JSON.parse(decoded.toString());
  //   request.user = user;
  return NextResponse.redirect(new URL("/home", request.url));
}

export const config = {
  matcher: "/about/:path*",
};
