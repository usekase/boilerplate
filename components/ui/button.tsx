/**
 * Button Component
 * ================
 *
 * A reusable button with different style variants including gradients.
 *
 * USAGE:
 *   <Button>Click me</Button>
 *   <Button variant="secondary">Secondary</Button>
 *   <Button variant="gradient">Gradient</Button>
 *   <Button variant="outline">Outline</Button>
 *   <Button size="lg">Large Button</Button>
 *
 * WORKSHOP TIP: You can ask Claude to add new variants or sizes!
 * Try: "Add a 'danger' variant to the button with red colors"
 */

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

// Define the available variants and sizes
const variants = {
  primary:
    "bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500",
  secondary:
    "bg-secondary-600 text-white hover:bg-secondary-700 focus:ring-secondary-500",
  gradient:
    "bg-gradient-to-r from-primary-600 to-secondary-600 text-white hover:from-primary-700 hover:to-secondary-700 focus:ring-primary-500",
  outline:
    "border-2 border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-500",
  ghost:
    "text-gray-700 hover:bg-gray-100 focus:ring-gray-500",
};

const sizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

// TypeScript interface for button props
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
}

// Button component with forwardRef for compatibility with form libraries
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Base styles
          "inline-flex items-center justify-center rounded-lg font-semibold",
          "transition-all duration-200 ease-in-out",
          "focus:outline-none focus:ring-2 focus:ring-offset-2",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          "transform hover:scale-105 active:scale-100",
          // Apply variant and size
          variants[variant],
          sizes[size],
          // Allow custom classes to override
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
