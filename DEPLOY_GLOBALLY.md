# Deploy Globally

Your app is ready for global deployment. Choose one of these options:

## Option 1: Railway (Easiest)

Railway pulls Docker images from GHCR automatically.

1. Go to https://railway.app and sign up.
2. Click **New Project** → **Deploy from GitHub repo**.
3. Connect your GitHub repo.
4. Railway auto-detects `Dockerfile` and deploys.
5. Add environment variable `GEMINI_API_KEY` in Railway UI (Variables tab).
6. Click **Deploy** — your app will be live at a Railway-assigned URL (e.g., `https://myapp-prod.railway.app`).

No config files needed; the `Dockerfile` and `nginx.conf` are sufficient.

---

## Option 2: Render

Render also supports Docker deployments.

1. Go to https://render.com and sign up.
2. Click **New** → **Web Service**.
3. Select **Docker** as the runtime.
4. Connect your GitHub repo.
5. Set the environment variable `GEMINI_API_KEY` in the Render UI.
6. Click **Create Web Service** — Render builds and deploys.

---

## Option 3: Fly.io

Fly.io deploys containers globally with multiple regions.

1. Go to https://fly.io and sign up.
2. Install the `flyctl` CLI: https://fly.io/docs/getting-started/installing-flyctl/
3. In your project directory, run:
   ```bash
   flyctl launch
   ```
4. Follow prompts to create a new Fly app (auto-detects `Dockerfile`).
5. Set the secret:
   ```bash
   flyctl secrets set GEMINI_API_KEY="your_api_key_here"
   ```
6. Deploy:
   ```bash
   flyctl deploy
   ```
7. Your app is live at `https://<app-name>.fly.dev`.

---

## Option 4: Docker Hub + Any Container Host

Push to Docker Hub instead of GHCR:

1. Update `.github/workflows/docker-publish.yml` to log in to Docker Hub and push to `docker.io/<username>/<repo>`.
2. Use any container host that supports Docker images (AWS ECS, Google Cloud Run, Azure Container Instances, etc.).

---

## Quick Comparison

| Platform | Setup Time | Cost | Global | Auto-rebuild |
|----------|-----------|------|--------|--------------|
| Railway  | 2 min     | Free tier | Yes  | Yes          |
| Render   | 2 min     | Free tier | Yes  | Yes          |
| Fly.io   | 5 min     | Free tier | Yes  | Yes          |

**Recommendation:** Start with **Railway** — it's the fastest and integrates with GHCR seamlessly.

---

## Testing Locally Before Deploying

```bash
# build the image
docker build -t myapp:latest --build-arg GEMINI_API_KEY="your_key" .

# run locally
docker run --rm -p 8080:80 myapp:latest

# open http://localhost:8080
```

