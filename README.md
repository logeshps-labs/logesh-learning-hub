# Logesh Learning Hub

**Learn AI, Automation, and Agentic Systems — Simply and Practically.**

A free, static learning website built with HTML, CSS, and vanilla JavaScript. It has no backend, database, build step, or paid dependency and is designed to publish as a GitHub Pages project site at `https://USERNAME.github.io/logesh-learning-hub/`.

## Run the site locally

The site can be opened directly by double-clicking `index.html`. For a local web server (recommended for realistic link and path behavior), open PowerShell in this folder and run:

```powershell
py -m http.server 8000
```

Then visit `http://localhost:8000/`. Stop the server with `Ctrl+C`.

## Add a lesson

1. Copy the structure of an existing page in `lessons/` and save it with a lowercase, hyphenated filename, for example `lessons/your-new-topic.html`.
2. Keep the shared stylesheet and script references relative to the lesson folder: `../css/styles.css` and `../js/main.js`; use `../assets/icons/favicon.svg` for the favicon.
3. Give the page a unique title and description. Keep the standard lesson sections: difficulty and reading time, 2-minute summary, explanation, real-world example, diagram, key takeaways, common mistakes, practical exercise, related lessons, and previous/next navigation.
4. Use paths relative to that HTML file (for example `your-new-topic.html` for a sibling lesson or `../learning-paths/ai-fundamentals.html` for a path). Do not start local paths with `/`; that would break under the project subpath.
5. Add the page to the relevant learning path, the Start Here sequence if appropriate, and `sitemap.xml`. Check links on the local server.

## Update navigation

The shared navigation is currently written in each HTML page so every page works without a build system. When adding a top-level page or changing the menu, update the `<nav class="primary-nav">` in `index.html`, `start-here.html`, `about.html`, `contact.html`, `404.html`, all lesson pages, and all learning-path pages. Use paths relative to each page's folder. Keep `aria-label`, `aria-current="page"` where appropriate, the menu button's `aria-controls`, and the theme toggle.

## Initialize Git

If this folder is not already a Git repository, open PowerShell here and run:

```powershell
git init
git add .
git commit -m "Create Logesh Learning Hub"
```

These commands are instructions only; Git was not initialized as part of creating this site.

## Connect this folder to a GitHub repository

Create an empty GitHub repository named `logesh-learning-hub` (do not add a README or license there if this local project already has its own files). Replace `USERNAME` below with your actual GitHub username, then run in PowerShell from this folder:

```powershell
git remote add origin https://github.com/USERNAME/logesh-learning-hub.git
git branch -M main
```

If `origin` is already configured, inspect it with `git remote -v` and update it only if needed:

```powershell
git remote set-url origin https://github.com/USERNAME/logesh-learning-hub.git
```

## Push the project to GitHub

Replace `USERNAME` with your GitHub username if using the HTTPS URL directly. Authenticate with GitHub when prompted (or use your configured Git Credential Manager).

```powershell
git add .
git commit -m "Update learning hub"
git push -u origin main
```

For later updates, use `git add .`, commit with a useful message, then `git push`.

## Enable GitHub Pages

1. Open the `logesh-learning-hub` repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Select branch `main` and folder `/(root)`, then save.
5. Wait for the Pages deployment to finish. The site should be available at `https://USERNAME.github.io/logesh-learning-hub/`.
6. Replace every `USERNAME` placeholder in `sitemap.xml` and `robots.txt` with your actual GitHub username. Update the LinkedIn links in `index.html`, `about.html`, and `contact.html` to the correct profile URL.

All site-internal links use relative paths so pages and assets work under `/logesh-learning-hub/`. If you change the repository name, review the canonical public URL in the sitemap and robots file.

## Update the site later

Edit the relevant HTML, CSS, or JavaScript files locally. Add new lessons to `lessons/`, link them from paths and navigation as described above, and update the sitemap. Test with `py -m http.server 8000`, review keyboard navigation and a narrow mobile viewport, then run:

```powershell
git add .
git commit -m "Describe your learning hub update"
git push
```

GitHub Pages publishes the update from the configured branch. The site uses no build step or external runtime dependencies.
