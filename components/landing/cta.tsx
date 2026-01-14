/**
 * Call-to-Action (CTA) Section Component
 * ======================================
 *
 * A bold section encouraging users to take action (sign up, etc.)
 *
 * WORKSHOP TIP: This is your final pitch before users leave!
 * Make it compelling and action-oriented.
 */

import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600" />

      {/* Pattern overlay for texture */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          {/* Headline */}
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl mb-6">
            Ready to Build Your Dream App?
          </h2>

          {/* Description */}
          <p className="text-lg text-white/90 mb-10 max-w-xl mx-auto">
            Join thousands of creators who are building amazing web applications.
            Start for free, no credit card required.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/sign-up">
              <Button
                size="lg"
                className="bg-white text-primary-600 hover:bg-gray-100 hover:text-primary-700 shadow-xl"
              >
                Start Building Now
              </Button>
            </Link>
            <Link href="#features">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                See Features
              </Button>
            </Link>
          </div>

          {/* Trust indicators */}
          <p className="mt-8 text-sm text-white/70">
            No credit card required • Free forever tier • Deploy in minutes
          </p>
        </div>
      </Container>
    </section>
  );
}
