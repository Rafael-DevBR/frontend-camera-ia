// src/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


export function middleware(request: NextRequest) {
  const token = request.cookies.get("auth-token");
  const pathname = request.nextUrl.pathname;

  const isPrivateRoute =
    pathname.startsWith("/alertas") ||
    pathname.startsWith("/cameras")
    pathname.startsWith("/configuracoes");


  if (isPrivateRoute && !token) {
    return NextResponse.redirect(
      new URL("/login", request.url)
    );
  }

  return NextResponse.next();
}


export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};