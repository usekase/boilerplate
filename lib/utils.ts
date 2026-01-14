/**
 * Utility Functions
 * =================
 *
 * This file contains helper functions used throughout the application.
 *
 * WORKSHOP TIP: The cn() function is super useful for combining
 * Tailwind classes conditionally. You'll see it used in all components.
 */

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names using clsx and merges Tailwind classes properly.
 *
 * USAGE:
 *   cn("px-4 py-2", isActive && "bg-blue-500", className)
 *
 * This handles:
 * - Conditional classes (falsy values are ignored)
 * - Tailwind class conflicts (later classes override earlier ones)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
