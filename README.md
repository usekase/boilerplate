# Workshop Next.js Boilerplate 🚀

A beginner-friendly Next.js starter template for building and deploying web applications with AI assistance.

## Quick Start

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd workshop

# 2. Install dependencies
npm install

# 3. Copy environment variables
cp .env.sample .env.local

# 4. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app!

## Using Claude Code

Start Claude Code in your project:

```bash
claude
```

### Slash Commands

| Command | Description |
|---------|-------------|
| `/push [message]` | Commit and push changes to GitHub |
| `/deploy` | Deploy to Vercel |
| `/new-page [name]` | Create a new page |
| `/new-component [name]` | Create a new component |

### Example Prompts

Try asking Claude:

- "Change the hero section to be about [my app idea]"
- "Add a contact form to collect emails"
- "Create a new page called /pricing"
- "Make the app use [my brand colors]"

## Project Structure

```
app/                    # Pages and routes
├── page.tsx           # Home/landing page
├── dashboard/         # Protected dashboard
├── (auth)/            # Sign in/up pages
└── api/               # API routes

components/            # Reusable components
├── ui/               # Button, Card, Input
├── layout/           # Header, Footer
└── landing/          # Hero, Features, CTA

lib/                   # Utilities
.claude/              # Claude Code config
```

## Features

- ⚡ **Next.js 15** with App Router
- 🎨 **Tailwind CSS** with bold, colorful theme
- 🔐 **Clerk Auth** (optional) - just add your keys
- 🚀 **Vercel Ready** - deploy in minutes
- 🤖 **Claude Code** - AI-powered development

## Adding Authentication

1. Create a Clerk account at https://clerk.com
2. Add your keys to `.env.local`:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxx
CLERK_SECRET_KEY=sk_test_xxxxx
```

3. The auth features will automatically work!

## Deployment

```bash
# Using the slash command
/deploy

# Or manually
npm run build
npx vercel --prod
```

Don't forget to add your environment variables in the Vercel dashboard!

## Documentation

- [CLAUDE.md](./CLAUDE.md) - Guide for working with Claude Code
- [PREREQUISITES.md](./PREREQUISITES.md) - Setup requirements

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Run production build |
| `npm run lint` | Check for issues |

---

Built with ❤️ for the Web Development Workshop
