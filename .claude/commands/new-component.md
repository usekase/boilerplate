---
description: Create a new reusable component
argument-hint: [component-name]
---

## Create New Component

Create a new component named `$ARGUMENTS`.

Before creating, please ask me:
1. What should this component do?
2. Where should it go? (ui/, layout/, or a new folder)
3. What props should it accept?
4. Does it need interactivity? (client component)

Then create the component with:

1. **File Header Comment** explaining:
   - Component purpose
   - Usage examples
   - Workshop tips for customization

2. **TypeScript Interface** for props

3. **The Component** with:
   - Proper imports (cn from utils, etc.)
   - The 'use client' directive if it needs interactivity
   - Tailwind CSS for styling (using the project's color scheme)
   - Sensible defaults for optional props

4. **Export** the component (named export, not default)

Follow the patterns used in existing components like:
- `components/ui/button.tsx` for UI components
- `components/layout/header.tsx` for layout components
- `components/landing/hero.tsx` for section components

Use the project's bold, colorful theme with gradients where appropriate.
