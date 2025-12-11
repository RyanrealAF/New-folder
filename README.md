<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1Yp_jxMP-xOnKNjdxGeFG6o_QC9THyV0m

## Run Locally

**Prerequisites:** Node.js

```bash
npm install
npm run dev
```

## Deploy to GitHub Pages

Automatically deploy to `https://yourusername.github.io/your-repo/` by pushing to the `main` branch.

**Setup (one time):**
1. Enable GitHub Pages in your repo settings (Settings → Pages → Deploy from a branch → `gh-pages`).
2. Push your code to `main` — the workflow auto-builds and deploys.
3. Your app is live at `https://yourusername.github.io/your-repo/`.

**Note:** URLs use hash routing (`/#/page` instead of `/page`). This is required for static hosting without server-side rewrites.

## One-click Docker (GHCR)

- The repository builds and publishes a Docker image to GitHub Container Registry (GHCR) via GitHub Actions.
- Image name: `ghcr.io/<owner>/<repo>:latest` (replace `<owner>/<repo>` with your GitHub owner and repository name).

Badge (replace owner/repo):

[![GHCR Image](https://img.shields.io/badge/ghcr-available-brightgreen)](https://ghcr.io/<owner>/<repo>)

Pull and run:

```bash
# pull the image
docker pull ghcr.io/<owner>/<repo>:latest

# run locally (maps container 80 -> host 8080)
docker run --rm -p 8080:80 ghcr.io/<owner>/<repo>:latest
```

Notes:
- Add `GEMINI_API_KEY` as a repository secret (Settings → Secrets) so the GitHub Actions workflow can pass it as a build-arg.
- After pushing to `main`, the workflow builds and pushes the image to GHCR.
