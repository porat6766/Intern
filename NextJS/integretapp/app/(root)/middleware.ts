import { NextResponse } from 'next/server';

export function middleware(request: Request) {
  // Log the request URL to see which route is being accessed
  console.log('Middleware triggered for:', request.url);

  // Example: Check if the user is authenticated by checking the token in headers
  const isAuthenticated = checkAuthentication(request);

  if (!isAuthenticated) {
    console.log('User not authenticated, redirecting...');
    return NextResponse.redirect(new URL('/login', request.url));
  }

  console.log('User authenticated, proceeding to page...');
  return NextResponse.next();
}

// Example helper function for authentication check
function checkAuthentication(request: Request) {
  const token = request.headers.get('Authorization');
  return token && token.startsWith('Bearer ');
}

