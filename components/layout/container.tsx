/**
 * Container Component
 * ===================
 *
 * A wrapper component that centers content and adds consistent padding.
 * Use this to wrap page content for proper alignment.
 *
 * USAGE:
 *   <Container>
 *     <h1>My Page Content</h1>
 *   </Container>
 *
 * WORKSHOP TIP: Always wrap your page content in a Container
 * to maintain consistent spacing across your app.
 */

import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

const sizes = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  full: "max-w-full",
};

export function Container({
  className,
  size = "xl",
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        sizes[size],
        className
      )}
      {...props}
    />
  );
}
