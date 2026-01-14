/**
 * Dashboard Page
 * ==============
 *
 * This is a protected page that requires authentication.
 * Users are redirected here after signing in.
 *
 * WORKSHOP TIP: This is where you'll build the main functionality
 * of your app! Start by describing what you want to Claude:
 * "Add a form to collect user feedback" or
 * "Create a list of items that users can add and delete"
 *
 * NOTE: If Clerk is not configured, this page shows a demo dashboard.
 */

import Link from "next/link";
import { redirect } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Container } from "@/components/layout/container";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Check if Clerk is configured
const isClerkConfigured = !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

export default async function DashboardPage() {
  let userId: string | null = null;
  let userName: string | null = null;

  // Only check auth if Clerk is configured
  if (isClerkConfigured) {
    const { auth, currentUser } = await import("@clerk/nextjs/server");
    const authResult = await auth();
    userId = authResult.userId;

    if (!userId) {
      redirect("/sign-in");
    }

    const user = await currentUser();
    userName = user?.firstName || null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="py-10">
        <Container>
          {/* Welcome section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Welcome{userName ? ` back, ${userName}` : ""}! 👋
            </h1>
            <p className="mt-2 text-gray-600">
              This is your dashboard. Start building something amazing!
            </p>
          </div>

          {/* Auth not configured notice */}
          {!isClerkConfigured && (
            <Card className="mb-6 border-amber-200 bg-amber-50">
              <CardContent className="py-4">
                <p className="text-amber-800">
                  <strong>Note:</strong> Authentication is not configured.
                  This is a demo dashboard. Add your Clerk keys to enable user authentication.
                </p>
              </CardContent>
            </Card>
          )}

          {/* Dashboard content grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Getting Started Card */}
            <Card className="col-span-full lg:col-span-2">
              <CardHeader>
                <CardTitle>🚀 Getting Started</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  This is your dashboard page. Here are some ideas for what to build:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500">•</span>
                    <span>Add a form to collect user input</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500">•</span>
                    <span>Create a list of items (todos, notes, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500">•</span>
                    <span>Display data in cards or tables</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-500">•</span>
                    <span>Add charts or visualizations</span>
                  </li>
                </ul>
                <p className="mt-4 text-sm text-gray-500">
                  💡 Tip: Ask Claude to help you build these features!
                </p>
              </CardContent>
            </Card>

            {/* Quick Stats Card */}
            <Card>
              <CardHeader>
                <CardTitle>📊 Quick Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Status</span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Active
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Account</span>
                    <span className="text-gray-900 font-medium">Free</span>
                  </div>
                  {userId && (
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">User ID</span>
                      <span className="text-gray-500 text-sm font-mono truncate max-w-[120px]">
                        {userId.slice(0, 8)}...
                      </span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Placeholder for user content */}
          <div className="mt-8 rounded-lg border-2 border-dashed border-gray-300 p-12 text-center">
            <div className="text-gray-400">
              <svg
                className="mx-auto h-12 w-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                Your Content Here
              </h3>
              <p className="mt-2 text-gray-500">
                Use Claude to help you add features to this page!
              </p>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
}
