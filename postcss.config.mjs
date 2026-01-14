/**
 * PostCSS Configuration
 * =====================
 *
 * This file configures PostCSS plugins for processing CSS.
 * Tailwind CSS and Autoprefixer are included by default.
 *
 * WORKSHOP TIP: You don't need to modify this file.
 */

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;
