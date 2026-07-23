// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth-token')?.value;
  const pathname = request.nextUrl.pathname;

  const isLandingPage = pathname === '/';
  const isLoginPage = pathname.startsWith('/login');

  // Rota pública: landing page (/)
  // Se já está autenticado, redireciona para o dashboard de câmeras
  if (isLandingPage && token) {
    return NextResponse.redirect(new URL('/cameras', request.url));
  }

  // Se está na página de login já autenticado → redireciona para câmeras
  if (isLoginPage && token) {
    return NextResponse.redirect(new URL('/cameras', request.url));
  }

  // Rotas protegidas: qualquer rota que não seja / ou /login exige autenticação
  if (!isLandingPage && !isLoginPage && !token) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};