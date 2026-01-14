/**
 * Root Layout Component
 * =====================
 *
 * This is the main layout wrapper for the entire application.
 * It includes:
 * - Providers wrapper (includes ClerkProvider when configured)
 * - Global font configuration
 * - HTML metadata
 *
 * WORKSHOP TIP: The app works with or without Clerk keys.
 * When you add your Clerk keys to .env.local, auth features become available.
 */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

// Load Inter font with Latin subset
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Default metadata for the application
// WORKSHOP TIP: Update these values to match your project!
export const metadata: Metadata = {
  title: "My Awesome App",
  description: "Built with Next.js, Tailwind CSS, and Claude Code",
  keywords: ["nextjs", "react", "tailwind", "workshop"],
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-gray-50 font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
