# AI Studio Deployment Notes

Quick steps
- Set the `GEMINI_API_KEY` secret in AI Studio (do NOT commit keys).
- Build the app: `npm install` then `npm run build`.
- Serve the production build (AI Studio should provide a static hosting or Node process). If AI Studio runs a command, use `npx serve dist` or `vite preview --port 3000`.

Recommended build/config
- Build command: `npm run build`
- Start command (if needed): `npx serve dist` or `npm run preview` (which runs `vite preview`).
- Output directory: `dist` (Vite default).

Environment variables / secrets
- Add `GEMINI_API_KEY` in the deployment secrets configuration. In code the key is referenced via `process.env.GEMINI_API_KEY` (Vite injects it at build time via `define`).
- Do not upload `.env.local` to the repo. Use AI Studio's secret management UI.

SPA routing note
- The app currently uses `BrowserRouter`. If AI Studio does not automatically rewrite unknown routes to `index.html`, either:
  - Configure a rewrite rule to serve `index.html` for all SPA routes, or
  - Switch to `HashRouter` in `index.tsx` to avoid server-side rewrites (recommended for simple static hosting).

Troubleshooting
- Blank screen after deploy: open browser DevTools → Console and Network. Common causes:
  - Missing environment variable (Gemini key) used at runtime/build.
  - Asset 404s due to incorrect base path — set `base` in `vite.config.ts` if hosting under a subpath.
  - SPA refresh 404s — see SPA routing note above.

Optional: switch to `HashRouter`
Replace the import and usage in `index.tsx`:
```diff
- import { BrowserRouter, Routes, Route } from 'react-router-dom';
-
- <BrowserRouter>
-   ...
- </BrowserRouter>
```
with:
```diff
 - import { HashRouter, Routes, Route } from 'react-router-dom';

 - <HashRouter>
 -   ...
 - </HashRouter>
```

 Notes
 - Vite produces a static `dist` folder; prefer static hosting with SPA rewrite support or use `HashRouter`.
 - Test the built output locally with `npx serve dist` before deploying.
 - The workflow pushes images to GHCR (ghcr.io/<owner>/<repo>:latest). Add `GEMINI_API_KEY` as a secret in your repo (Settings → Secrets) before pushing to `main`.
 - After the workflow runs, the image will be available at `ghcr.io/<owner>/<repo>:latest`. You can pull it with `docker pull ghcr.io/<owner>/<repo>:latest`.

One-click Docker deployment
 - This repo includes a `Dockerfile` and `nginx.conf` for a one-click container deployment.
 - The image builds the app (`npm run build`) and serves `dist` with nginx, including SPA fallback.
 - To deploy in AI Studio (or any container-capable host):
   1. Connect your repository to AI Studio.
   2. Configure the build to use the included `Dockerfile` (AI Studio will build the image automatically).
   3. Add the `GEMINI_API_KEY` to the platform's secret/env UI.
   4. Start the container (it listens on port 80). Map the container port to the platform's public port.

Build & test locally with Docker (optional)
```bash
# build the container image
docker build -t my-app:latest .

# run the container locally (maps container 80 -> host 8080)
docker run --rm -p 8080:80 -e GEMINI_API_KEY="$GEMINI_API_KEY" my-app:latest

# then open http://localhost:8080
```

If your host doesn't support Docker directly, use the `dist` folder produced by `npm run build` and follow the static-hosting instructions above.
