/**
 * Landing Page (Home)
 * ===================
 *
 * This is the main entry point of your application.
 * It demonstrates how to compose a page from reusable components.
 *
 * WORKSHOP TIP: Customize the Hero, Features, and CTA components
 * in the /components/landing/ folder to match your project idea.
 * Ask Claude to help you rewrite the content!
 */

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { CTA } from "@/components/landing/cta";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Site header with navigation */}
      <Header />

      {/* Main content */}
      <main className="flex-1">
        {/* Hero section - the big banner at the top */}
        <Hero />

        {/* Features section - showcase what your app does */}
        <Features />

        {/* Call-to-action section - encourage users to sign up */}
        <CTA />
      </main>

      {/* Site footer */}
      <Footer />
    </div>
  );
}
