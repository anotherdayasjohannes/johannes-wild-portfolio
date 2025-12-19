# 🚀 GitHub Codespaces Setup Guide

Your project is ready to be pushed to GitHub and opened in Codespaces!

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. **Repository name**: `johannes-wild-portfolio` (or your preferred name)
3. **Visibility**: Choose Private or Public
4. **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click **Create repository**

## Step 2: Push Your Code

GitHub will show you commands after creating the repo. Run these in your terminal:

```bash
cd /Users/j.wild/Projects/jw/johannes-wild-portfolio

# Add your GitHub repo as remote (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/johannes-wild-portfolio.git

# Push your code
git branch -M main
git push -u origin main
```

## Step 3: Open in Codespaces

1. Go to your GitHub repository page
2. Click the green **Code** button
3. Click the **Codespaces** tab
4. Click **Create codespace on main**

### What Happens Next:

⏱️ **First time setup** (2-3 minutes):
- Codespaces creates a cloud environment
- Installs Node.js 20
- Automatically runs `npm install` in both `frontend` and `studio` folders
- Sets up VS Code with helpful extensions

✅ **Once ready**:
- You'll have a full VS Code editor in your browser
- All your files are there
- Terminal is ready to use

## Step 4: Start Development Servers

In the Codespaces terminal:

```bash
# Terminal 1 - Start Frontend
cd frontend
npm run dev
```

Open a new terminal (click the + icon):

```bash
# Terminal 2 - Start Sanity Studio
cd studio
npm run dev
```

## Step 5: Access Your Applications

Codespaces automatically detects ports. Look at the bottom of VS Code:

- **PORTS** tab will show:
  - 🌐 **Port 3100** - Frontend (Next.js)
  - 🌐 **Port 3444** - Sanity Studio

Click the **globe icon** 🌐 next to each port to open them in your browser!

## 🎯 What's Pre-Configured:

✅ **Environment**:
- Node.js 20
- All dependencies auto-installed
- Environment variables template ready

✅ **VS Code Extensions**:
- ESLint (code quality)
- Prettier (formatting)
- Tailwind CSS IntelliSense (autocomplete)
- Sanity.io extension

✅ **Port Forwarding**:
- Port 3100 → Frontend
- Port 3444 → Sanity Studio

## 📝 Next Steps After Codespaces is Running:

1. **Configure Sanity** in Codespaces:
   ```bash
   cd frontend
   cp .env.local.example .env.local
   # Edit .env.local and add your Sanity Project ID: 6bj2fvps
   ```

2. **Start adding content** to Sanity Studio (port 3444)

3. **Build components** for your frontend

## 💡 Benefits of This Setup:

- ✅ **No local setup** - Everything in the cloud
- ✅ **Consistent environment** - Same setup every time
- ✅ **Work from anywhere** - Any device with a browser
- ✅ **Easy collaboration** - Share your Codespace or repo
- ✅ **Auto-save** - Work is continuously backed up

## 🆘 Troubleshooting:

**Codespace is slow?**
- Try a different region when creating
- Or upgrade to a more powerful machine type

**Ports not forwarding?**
- Check the PORTS tab
- Make sure both servers are running
- Click "Forward a Port" if needed

**Need to rebuild?**
- Codespaces → ... (menu) → Rebuild Container

---

## 🎉 You're All Set!

Once you push to GitHub and open in Codespaces, you'll have a fully functional development environment with zero local setup!








