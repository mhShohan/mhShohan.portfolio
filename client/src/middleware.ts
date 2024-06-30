import { cookies } from 'next/headers';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const authRoutes = ['/login'];
const commonPrivateRoutes = [
  '/dashboard',
  '/dashboard/technologies',
  '/dashboard/educations',
  '/dashboard/experiences',
  '/dashboard/projects',
  '/dashboard/profile',
  '/dashboard/blogs',
];


export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = cookies().get('token')?.value;

  if (token && authRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (
    token &&
    (commonPrivateRoutes.includes(pathname) ||
      commonPrivateRoutes.some((route) => pathname.startsWith(route)))
  ) {
    return NextResponse.next();
  }

  if (!token) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.redirect(new URL('/login', request.url));
}

export const config = {
  matcher: [
    '/login',
    '/dashboard/:page*',
  ],
};