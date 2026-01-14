/**
 * Features Section Component
 * ==========================
 *
 * Showcase what your app does with a grid of feature cards.
 *
 * WORKSHOP TIP: Update the features array with your own features!
 * Each feature has an icon, title, and description.
 * Try asking Claude: "Help me write 3 features for my [app idea]"
 */

import { Container } from "@/components/layout/container";
import { Card, CardContent } from "@/components/ui/card";

// Define your features here
// WORKSHOP TIP: Change these to match your app!
const features = [
  {
    icon: "🚀",
    title: "Lightning Fast",
    description:
      "Built on Next.js 15 with React 19 for blazing fast performance and instant page loads.",
    color: "from-primary-500 to-primary-600",
  },
  {
    icon: "🎨",
    title: "Beautiful Design",
    description:
      "Stunning UI components with Tailwind CSS. Bold gradients and modern aesthetics out of the box.",
    color: "from-secondary-500 to-secondary-600",
  },
  {
    icon: "🔐",
    title: "Secure Auth",
    description:
      "Clerk authentication built-in. Sign up, sign in, and user management made simple.",
    color: "from-accent-500 to-accent-600",
  },
  {
    icon: "🤖",
    title: "AI-Powered",
    description:
      "Built with Claude Code for rapid development. Ask AI to help you build new features!",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: "📱",
    title: "Fully Responsive",
    description:
      "Looks great on any device. Mobile-first design that adapts to any screen size.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: "🌐",
    title: "Deploy Anywhere",
    description:
      "One-click deployment to Vercel. Get your app live in minutes, not hours.",
    color: "from-green-500 to-teal-500",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <Container>
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Everything You Need to{" "}
            <span className="text-gradient">Succeed</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            All the tools and features you need to build, launch, and grow
            your web application. No experience required!
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:scale-105 transition-transform duration-300"
            >
              <CardContent className="pt-6">
                {/* Icon with gradient background */}
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} text-white text-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>

                {/* Feature title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>

                {/* Feature description */}
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
