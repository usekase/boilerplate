/**
 * Header Component
 * ================
 *
 * The main navigation header for the site.
 * Includes the logo, navigation links, and authentication buttons.
 *
 * WORKSHOP TIP: Customize the logo and navigation links to match
 * your project. The auth buttons automatically work with Clerk!
 */

"use client";

import Link from "next/link";
import { Container } from "./container";
import { Button } from "@/components/ui/button";

// Check if Clerk is configured
const isClerkConfigured = !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

// Conditionally import Clerk components
let SignedIn: React.ComponentType<{ children: React.ReactNode }> | null = null;
let SignedOut: React.ComponentType<{ children: React.ReactNode }> | null = null;
let UserButton: React.ComponentType<{ afterSignOutUrl?: string; appearance?: Record<string, unknown> }> | null = null;

if (isClerkConfigured) {
  // Dynamic import would be better, but for simplicity we'll use conditional rendering
  const clerk = require("@clerk/nextjs");
  SignedIn = clerk.SignedIn;
  SignedOut = clerk.SignedOut;
  UserButton = clerk.UserButton;
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-lg">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            {/* WORKSHOP TIP: Replace this with your own logo! */}
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary-600 to-secondary-600">
              <span className="text-lg font-bold text-white">A</span>
            </div>
            <span className="text-xl font-bold text-gray-900">AppName</span>
          </Link>

          {/* Navigation Links - Add more as needed */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#features"
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="#about"
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              About
            </Link>
          </nav>

        
        </div>
      </Container>
    </header>
  );
}
