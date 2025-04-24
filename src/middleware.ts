import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const pathname = req.nextUrl.pathname;

  // Check if the request is for an admin route
  if (pathname.startsWith('/admin') && pathname !== '/admin/login' && pathname !== '/admin/unauthorized') {
    const supabase = createMiddlewareClient({ req, res });
    const { data: { session } } = await supabase.auth.getSession();

    // If no session, redirect to login
    if (!session) {
      const url = new URL('/admin/login', req.url);
      url.searchParams.set('redirectTo', pathname);
      return NextResponse.redirect(url);
    }

    // Check if user has admin role
    const { data: userData, error } = await supabase
      .from('users')
      .select('role')
      .eq('id', session.user.id)
      .single();

    if (error || !userData || userData.role !== 'admin') {
      return NextResponse.redirect(new URL('/admin/unauthorized', req.url));
    }
  }

  return res;
}

// Only run middleware on admin routes
export const config = {
  matcher: '/admin/:path*',
};
