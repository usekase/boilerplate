/**
 * Providers Component
 * ===================
 *
 * This component wraps the app with necessary providers.
 * ClerkProvider is only included when the publishable key is available.
 *
 * WORKSHOP TIP: This allows the app to work both with and without
 * Clerk authentication configured.
 */

"use client";

import { ClerkProvider } from "@clerk/nextjs";

// Check if Clerk is configured
const clerkPubKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

export function Providers({ children }: { children: React.ReactNode }) {
  // If Clerk is configured, wrap with ClerkProvider
  if (clerkPubKey) {
    return <ClerkProvider>{children}</ClerkProvider>;
  }

  // Otherwise, just render children without Clerk
  return <>{children}</>;
}
