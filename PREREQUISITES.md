# Workshop Prerequisites

Welcome! Before the workshop, please complete these setup steps.
**Allow 30-45 minutes** for the full setup.

---

## Required Software

### 1. Node.js (Required)

Node.js runs JavaScript on your computer.

**Installation:**
1. Go to https://nodejs.org
2. Download the **LTS** version (the one that says "Recommended")
3. Run the installer and follow the prompts
4. **Restart your terminal** after installation

**Verify installation:**
```bash
node --version    # Should show v20.x.x or higher
npm --version     # Should show 10.x.x or higher
```

### 2. Git (Required)

Git tracks changes to your code and enables collaboration.

**Installation:**
- **Mac**: Open Terminal and run `git --version`. If not installed, follow the prompts to install.
- **Windows**: Download from https://git-scm.com/download/windows and run the installer.

**Verify installation:**
```bash
git --version     # Should show git version 2.x.x or higher
```

**First-time Git setup:**
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### 3. Visual Studio Code (Recommended)

A code editor for viewing and editing files.

**Installation:**
1. Go to https://code.visualstudio.com
2. Download for your operating system
3. Run the installer

### 4. Claude Code CLI (Required)

The AI assistant we'll use throughout the workshop.

**Installation:**
```bash
npm install -g @anthropic-ai/claude-code
```

**Verify installation:**
```bash
claude --version
```

**First-time setup:**
```bash
claude
# Follow the prompts to authenticate with your Anthropic account
```

---

## Required Accounts

### 1. GitHub Account (Required) ⭐

For storing and sharing your code.

1. Go to https://github.com
2. Click "Sign up" and create a free account
3. Verify your email address
4. **Remember your username and password!**

### 2. Anthropic Account (Required) ⭐

For using Claude Code.

1. Go to https://console.anthropic.com
2. Create an account
3. Add a payment method (Claude Code has usage costs, but minimal for workshop)
4. Generate an API key (you'll need this for Claude Code)

### 3. Vercel Account (Required) ⭐

For deploying your application to the internet.

1. Go to https://vercel.com
2. Click "Sign Up"
3. **Sign up with GitHub** (click "Continue with GitHub")
   - This makes deployment much easier!
4. Authorize Vercel to access your GitHub

### 4. Clerk Account (Optional)

For adding user authentication to your app.

1. Go to https://clerk.com
2. Sign up for a free account
3. Create a new application
4. Copy your API keys:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - `CLERK_SECRET_KEY`

*We'll walk through this during the workshop if you want to add login features.*

---

## Pre-Workshop Checklist

Before the workshop, verify you can run these commands:

```bash
# Check Node.js
node --version
# Expected: v20.x.x or higher

# Check npm
npm --version
# Expected: 10.x.x or higher

# Check Git
git --version
# Expected: git version 2.x.x

# Check Claude Code
claude --version
# Expected: Shows version number
```

**Account Checklist:**
- [ ] I can log in to GitHub.com
- [ ] I can log in to Vercel.com
- [ ] I have an Anthropic account with API access
- [ ] I have authenticated Claude Code (`claude` command works)
- [ ] (Optional) I have a Clerk account

---

## Troubleshooting

### "command not found" errors
- **Restart your terminal** after installing software
- On Windows, you may need to restart your computer
- Make sure you're using the correct terminal (Terminal on Mac, Command Prompt or PowerShell on Windows)

### Permission errors on Mac
- Prefix commands with `sudo` (e.g., `sudo npm install -g @anthropic-ai/claude-code`)
- Enter your computer password when prompted

### Git authentication issues
- When pushing to GitHub, use a Personal Access Token instead of password
- Go to GitHub → Settings → Developer settings → Personal access tokens → Generate new token
- Use the token as your password when prompted

### Claude Code not working
- Make sure you've authenticated: run `claude` and follow the prompts
- Check that you have a valid Anthropic API key
- Try reinstalling: `npm install -g @anthropic-ai/claude-code`

### Need more help?
- Arrive 15 minutes early to the workshop for last-minute setup help
- Contact the workshop organizers before the session

---

## What We'll Build

During this workshop, you'll:

1. 📋 **Clone** a starter project with everything pre-configured
2. 🎨 **Customize** a landing page with your own idea
3. 📄 **Add new pages** and features using Claude Code
4. 🔐 (Optional) **Add authentication** so users can log in
5. 🚀 **Deploy** your app to the internet on Vercel
6. 🎉 **Share** your live app URL with the world!

**No coding experience required!** Claude Code will help you write the code.

---

## Quick Reference

| Software | Download Link | Verify Command |
|----------|--------------|----------------|
| Node.js | https://nodejs.org | `node --version` |
| Git | https://git-scm.com | `git --version` |
| VS Code | https://code.visualstudio.com | Open the app |
| Claude Code | `npm install -g @anthropic-ai/claude-code` | `claude --version` |

| Account | Sign Up Link |
|---------|-------------|
| GitHub | https://github.com |
| Anthropic | https://console.anthropic.com |
| Vercel | https://vercel.com |
| Clerk (Optional) | https://clerk.com |

---

**See you at the workshop! 🚀**
