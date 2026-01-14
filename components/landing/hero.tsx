/**
 * Hero Section Component
 * ======================
 *
 * The main banner section at the top of your landing page.
 * This is typically the first thing visitors see.
 *
 * CUSTOMIZE:
 * - headline: Your main value proposition
 * - description: Brief explanation of what your app does
 * - buttons: Actions you want users to take
 *
 * WORKSHOP TIP: Use Claude to help you write compelling copy!
 * Try: "Help me write a hero section for an app that [your idea]"
 */

import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10" />

      {/* Animated gradient orbs for visual interest */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-secondary-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow animation-delay-2000" />
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-accent-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow animation-delay-4000" />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge/tag */}
          <div className="mb-8 inline-flex items-center rounded-full bg-primary-100 px-4 py-2 text-sm font-medium text-primary-700">
            <span className="mr-2">🚀</span>
            Welcome to the future of web apps
          </div>

          {/* Main headline with gradient text */}
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Build Something{" "}
            <span className="text-gradient">Amazing</span>{" "}
            Today
          </h1>

          {/* Description */}
          <p className="mb-10 text-lg text-gray-600 sm:text-xl">
            Create beautiful, modern web applications with ease.
            Powered by Next.js, styled with Tailwind CSS, and
            supercharged with AI assistance from Claude.
          </p>

          {/* Call-to-action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* <Link href="/sign-up">
              <Button variant="gradient" size="lg">
                Get Started Free
              </Button>
            </Link> */}
            <Link href="#features">
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </Link>
          </div>

          {/* Social proof or stats */}
          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✨</span>
              <span>Easy to use</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              <span>Lightning fast</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎨</span>
              <span>Fully customizable</span>
            </div>
          </div>

          {/* Claude prompts examples */}
          <div className="mt-16">
            <p className="mb-6 text-sm font-semibold text-gray-500 uppercase tracking-wider">
              Try asking Claude:
            </p>
            <div className="grid gap-3 sm:grid-cols-2 max-w-2xl mx-auto">
              <div className="group relative bg-white/50 backdrop-blur-sm border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 hover:border-primary-300 hover:shadow-md transition-all cursor-pointer">
                <span className="block">
                  "Change the hero section to be about <span className="text-primary-600 font-medium">[my app idea]</span>"
                </span>
              </div>
              <div className="group relative bg-white/50 backdrop-blur-sm border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 hover:border-primary-300 hover:shadow-md transition-all cursor-pointer">
                <span className="block">
                  "Add a contact form to collect emails"
                </span>
              </div>
              <div className="group relative bg-white/50 backdrop-blur-sm border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 hover:border-primary-300 hover:shadow-md transition-all cursor-pointer">
                <span className="block">
                  "Create a new page called /pricing"
                </span>
              </div>
              <div className="group relative bg-white/50 backdrop-blur-sm border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 hover:border-primary-300 hover:shadow-md transition-all cursor-pointer">
                <span className="block">
                  "Make the app use <span className="text-primary-600 font-medium">[my brand colors]</span>"
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
