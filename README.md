# Logesh Learning Hub

**Learn AI, Automation, and Agentic Systems — Simply and Practically.**

A free, static learning website built with HTML, CSS, and vanilla JavaScript. It has no backend, database, build step, or paid dependency and is published as a GitHub Pages project site at `https://logeshps-labs.github.io/logesh-learning-hub/`.

## What this project is

Logesh Learning Hub is a free learning platform for practical AI, agentic systems, and enterprise automation concepts. It is designed for professionals, students, developers, architects, and curious technology practitioners. The examples are original starter content and are intended to make complex ideas easier to discuss and apply.

## Folder structure

```text
index.html                  Homepage
start-here.html             Beginner learning sequence
about.html, contact.html    Author and contact information
search.html                 Local client-side search
404.html                    GitHub Pages not-found page
css/styles.css              Shared responsive design and themes
js/main.js                  Theme, menu, and hero interactions
js/search.js                Local search data and behavior
assets/icons/               Site favicon and icon notes
assets/images/              Place for optimized original images
learning-paths/             Four structured learning paths
lessons/                    Ten original lessons
labs/                       Hands-on lab cards and future content
cheat-sheets/               Reference cards and future content
robots.txt, sitemap.xml     Search engine discovery
.gitignore                  Local/editor/secret exclusions
```

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

## Create a learning path

1. Copy an existing page from `learning-paths/` and give it a descriptive lowercase, hyphenated filename.
2. Keep the three difficulty sections and their `beginner`, `intermediate`, and `advanced` anchor IDs so the jump links work.
3. Link the lessons in a sensible order using `../lessons/your-lesson.html`.
4. Add the path card to `index.html`, include it in `js/search.js`, and add its canonical URL to `sitemap.xml`.

## Update navigation

The shared navigation is written in each HTML page so every page remains usable without a build system. When adding a top-level page or changing the menu, update the `<nav class="primary-nav">` in the homepage, Start Here, About, Contact, 404, Search, Labs, Cheat Sheets, all lesson pages, and all learning-path pages. Use paths relative to each page's folder. Keep `aria-label`, `aria-current="page"` where appropriate, the menu button's `aria-controls`, and the theme toggle.

## Initialize Git

This published project folder is already a Git repository on branch `main`, connected to `https://github.com/logeshps-labs/logesh-learning-hub`. If you are starting from a fresh copy that has no `.git` directory, open PowerShell in its root and run:

```powershell
git init
git add .
git commit -m "Create Logesh Learning Hub"
```

Do not run `git init` again in an existing clone. Check its state first with `git status --short --branch`.

## Connect this folder to a GitHub repository

Create an empty GitHub repository named `logesh-learning-hub` in the `logeshps-labs` organization (do not add a README or license there if this local project already has its own files). If publishing under a different owner, replace `logeshps-labs` in the commands below with that GitHub username or organization slug. Run in PowerShell from this folder:

```powershell
git remote add origin https://github.com/logeshps-labs/logesh-learning-hub.git
git branch -M main
```

If `origin` is already configured, inspect it with `git remote -v` and update it only if needed:

```powershell
git remote set-url origin https://github.com/logeshps-labs/logesh-learning-hub.git
```

## Push the project to GitHub

Authenticate with GitHub when prompted (or use your configured Git Credential Manager). For a different account or organization, use its owner slug in the remote URL.

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
5. Wait for the Pages deployment to finish. The site should be available at `https://logeshps-labs.github.io/logesh-learning-hub/`.
6. The sitemap and robots file use the current organization URL. If you publish under a different owner, update those URLs to match. Update the LinkedIn links in `index.html`, `about.html`, and `contact.html` to the correct profile URL.

All site-internal links use relative paths so pages and assets work under `/logesh-learning-hub/`. If you change the repository name, review the canonical public URL in the sitemap and robots file.

## Update the site later

Edit the relevant HTML, CSS, or JavaScript files locally. Add new lessons to `lessons/`, link them from paths and navigation as described above, and update the sitemap. Test with `py -m http.server 8000`, review keyboard navigation and a narrow mobile viewport, then run:

```powershell
git add .
git commit -m "Describe your learning hub update"
git push
```

GitHub Pages publishes the update from the configured branch. The site uses no build step or external runtime dependencies.

## Add a custom domain later

1. Choose and register a domain name with a domain registrar.
2. In the repository, open **Settings → Pages**, enter the custom domain, and save it.
3. At your DNS provider, add the DNS records GitHub Pages currently recommends for the chosen domain type (apex or subdomain). For a `www` subdomain, the target is normally the Pages host `logeshps-labs.github.io`; verify the exact values in GitHub's Pages documentation before saving DNS changes.
4. Allow DNS time to propagate. Return to **Settings → Pages**, wait for the domain check to pass, then enable **Enforce HTTPS**.
5. Keep the generated `CNAME` file in the repository root. Do not remove it while the custom domain is in use.

Custom-domain registration and DNS hosting may have separate costs; the learning site itself remains static and has no paid runtime dependency.
