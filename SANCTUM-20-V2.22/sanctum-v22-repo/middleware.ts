import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const isProtected = request.nextUrl.pathname.startsWith('/dashboard') || request.nextUrl.pathname.startsWith('/documents')
  if (!isProtected) return NextResponse.next()
  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/documents/:path*']
}
