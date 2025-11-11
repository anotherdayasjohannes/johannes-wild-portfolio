# GitHub Codespaces Configuration

This project is configured to work seamlessly with GitHub Codespaces.

## What's Pre-configured:

- **Node.js 20** environment
- **Port forwarding**:
  - Port 3100: Next.js Frontend
  - Port 3444: Sanity Studio
- **Auto-install dependencies** on startup
- **VS Code extensions**:
  - ESLint
  - Prettier
  - Tailwind CSS IntelliSense
  - Sanity.io

## Getting Started:

1. Push this repo to GitHub
2. Click "Code" → "Codespaces" → "Create codespace"
3. Wait for environment to build (2-3 minutes)
4. Run the development servers:

```bash
# Terminal 1 - Frontend
cd frontend
npm run dev

# Terminal 2 - Sanity Studio
cd studio
npm run dev
```

## Accessing Your Apps:

Codespaces will automatically forward ports. Click the "Ports" tab at the bottom and click the globe icon next to:
- Port 3100 - Your Next.js frontend
- Port 3444 - Sanity Studio CMS



