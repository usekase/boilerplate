# CLAUDE.md - Workshop Project Guide

## Project Overview

This is a Next.js workshop boilerplate for building and deploying web applications.
Participants are learning to build web apps with AI assistance from Claude Code.

**Target Audience**: Non-technical participants in a 6-hour hands-on workshop.

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS (bold, colorful theme)
- **Authentication**: Clerk (optional - works without env vars)
- **Deployment**: Vercel

## Key Commands

```bash
npm run dev      # Start development server at http://localhost:3000
npm run build    # Build for production (run before deploying)
npm run lint     # Check for code issues
npm run start    # Run production build locally
```

## Project Structure

```
app/                    # Pages and API routes (file-based routing)
├── page.tsx           # Landing page (home)
├── dashboard/         # Protected user dashboard
├── (auth)/            # Authentication pages
└── api/               # API routes

components/            # Reusable UI components
├── ui/               # Basic components (Button, Card, Input)
├── layout/           # Layout components (Header, Footer, Container)
└── landing/          # Landing page sections (Hero, Features, CTA)

lib/                   # Utility functions
public/               # Static assets (images, icons)
.claude/              # Claude Code configuration
```

## Coding Standards

- Use TypeScript for all new files
- Components go in `/components` with PascalCase names
- Use Tailwind CSS for styling (no separate CSS files)
- Add file header comments explaining purpose
- Keep components small and focused

## Working with This Project

### Creating New Pages

Pages live in `/app`. Create a folder with `page.tsx` inside.

```
/app/about/page.tsx    → /about route
/app/contact/page.tsx  → /contact route
/app/blog/[id]/page.tsx → /blog/123 dynamic route
```

**Use the slash command**: `/new-page about`

### Creating Components

Put reusable components in `/components/ui/`.
Put page-specific sections in `/components/[feature]/`.

**Use the slash command**: `/new-component MyComponent`

### Using Authentication (Clerk)

Clerk is pre-configured but optional. To enable:

1. Get keys from https://dashboard.clerk.com
2. Add to `.env.local`:
   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxx
   CLERK_SECRET_KEY=sk_test_xxxxx
   ```
3. Use Clerk components:
   ```tsx
   import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

   <SignedIn>Only visible when logged in</SignedIn>
   <SignedOut>Only visible when logged out</SignedOut>
   ```

4. Protect server components:
   ```tsx
   import { auth } from "@clerk/nextjs/server";

   const { userId } = await auth();
   if (!userId) redirect("/sign-in");
   ```

## Slash Commands

- `/push` - Commit and push to GitHub
- `/deploy` - Deploy to Vercel
- `/new-page [name]` - Create a new page
- `/new-component [name]` - Create a new component

## Common Tasks for Participants

Try asking Claude to help with these:

- "Change the hero section text to be about my app idea"
- "Add a new page called /about with information about my project"
- "Create a contact form that collects name and email"
- "Make the features section show my own features"
- "Add a button that does [something]"
- "Change the colors to [my brand colors]"

## File Header Comments

Every file includes a comment block at the top with:
- What the file does
- How to use it
- Workshop tips for customization

Look for `WORKSHOP TIP:` comments throughout the code!

## What NOT to Change (Unless Asked)

- `next.config.ts` - Framework configuration
- `tailwind.config.ts` - Already set up correctly
- `middleware.ts` - Auth configuration (remove entirely if not using auth)
- `.env.local` - Secrets (never commit this file)

## Deployment Checklist

1. ✅ Run `npm run build` - fix any errors
2. ✅ Commit all changes: `/push "My changes"`
3. ✅ Deploy: `/deploy`
4. ✅ Add environment variables in Vercel dashboard (for Clerk)
5. ✅ Share your deployed URL!

## Need Help?

- Ask Claude! Describe what you want to build
- Look at existing components for patterns
- Check the WORKSHOP TIP comments in files
- The `/new-page` and `/new-component` commands scaffold properly structured code
