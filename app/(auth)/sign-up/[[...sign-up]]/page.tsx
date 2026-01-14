/**
 * Sign Up Page
 * ============
 *
 * This page displays the Clerk sign-up component.
 * It's wrapped in a centered layout with the app's styling.
 *
 * WORKSHOP TIP: The styling of the Clerk component can be customized
 * in the ClerkProvider or through the Clerk dashboard.
 *
 * NOTE: If Clerk is not configured, this page shows a setup message.
 */

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

// Check if Clerk is configured at build time
const isClerkConfigured = !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

// Only import SignUp if Clerk is configured
let SignUp: React.ComponentType<{ appearance?: Record<string, unknown> }> | null = null;
if (isClerkConfigured) {
  SignUp = require("@clerk/nextjs").SignUp;
}

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      {/* Decorative gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50" />

      {/* Sign up form or setup message */}
      <div className="relative">
        {isClerkConfigured && SignUp ? (
          <SignUp
            appearance={{
              elements: {
                formButtonPrimary:
                  "bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700",
                card: "shadow-xl",
              },
            }}
          />
        ) : (
          <Card className="max-w-md">
            <CardHeader>
              <CardTitle>Authentication Not Configured</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                To enable sign-up, add your Clerk keys to <code className="bg-gray-100 px-1 rounded">.env.local</code>:
              </p>
              <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
{`NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...`}
              </pre>
              <p className="text-sm text-gray-500">
                Get your keys from{" "}
                <a href="https://dashboard.clerk.com" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  dashboard.clerk.com
                </a>
              </p>
              <Link href="/">
                <Button variant="outline" className="w-full">
                  Back to Home
                </Button>
              </Link>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
