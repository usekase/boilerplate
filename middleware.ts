/**
 * Next.js Middleware
 * ==================
 *
 * This middleware handles authentication using Clerk.
 * By default, ALL routes are PUBLIC (no authentication required).
 *
 * HOW TO PROTECT ROUTES:
 * To require authentication for specific routes, update the
 * clerkMiddleware configuration below.
 *
 * WORKSHOP TIP: If you're not using authentication, you can delete
 * this entire file. The app will work fine without it!
 *
 * NOTE: This middleware only runs when Clerk is configured.
 */

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Check if Clerk is configured
const isClerkConfigured = !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

export default async function middleware(req: NextRequest) {
  // If Clerk is not configured, allow all requests through
  if (!isClerkConfigured) {
    return NextResponse.next();
  }

  // Dynamically import Clerk middleware only when configured
  const { clerkMiddleware, createRouteMatcher } = await import(
    "@clerk/nextjs/server"
  );

  // Define which routes should be protected (require sign-in)
  // WORKSHOP TIP: Add routes here that should require authentication
  const isProtectedRoute = createRouteMatcher([
    "/dashboard(.*)", // Dashboard requires sign-in
    // Add more protected routes here:
    // "/settings(.*)",
    // "/profile(.*)",
  ]);

  // Create the Clerk middleware handler
  const clerkHandler = clerkMiddleware(async (auth, request) => {
    // If the route is protected and user is not signed in, redirect to sign-in
    if (isProtectedRoute(request)) {
      await auth.protect();
    }
  });

  // Run the Clerk middleware
  return clerkHandler(req, {} as never);
}

export const config = {
  // Matcher tells Next.js which routes to run middleware on
  // This configuration skips static files and internal Next.js routes
  matcher: [
    // Skip Next.js internals and static files
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
