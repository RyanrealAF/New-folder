# Deploy to Railway

Railway makes deploying your Docker app global in 2 minutes.

## Step-by-step

1. **Sign up** at https://railway.app (free tier includes $5/month credits).

2. **Create a new project**:
   - Click **New Project**.
   - Select **Deploy from GitHub repo**.
   - Authorize Railway to access your GitHub.
   - Select this repo.

3. **Railway auto-detects**:
   - Finds `Dockerfile` and `railway.json`.
   - Builds the image.
   - Deploys with nginx.

4. **Set environment variables**:
   - In the Railway dashboard, go to **Variables**.
   - Add: `GEMINI_API_KEY` = `your_gemini_api_key_here`.

5. **Deploy**:
   - Click **Deploy** (or auto-deploy is triggered on `git push main`).
   - Wait ~2 min for the build and deploy.
   - Your app is live at a public URL (e.g., `https://myapp-prod.railway.app`).

## Auto-redeploy on push

After the first deploy, Railway watches your `main` branch. Every push triggers a rebuild and redeploy automatically.

## View logs

In the Railway dashboard:
- **Build Logs**: watch the Docker image build.
- **Deploy Logs**: watch the app startup.
- **Runtime Logs**: monitor the running app.

## Troubleshoot

If you see a blank screen after deploy:
1. Open the Railway dashboard.
2. Click **Logs** → check for errors.
3. Verify `GEMINI_API_KEY` is set in **Variables**.
4. Check the app URL is correct (copy from the Railway dashboard).

## Scale up

Need more resources?
- In Railway, increase the **Resource Limits** (CPU, RAM).
- Railway charges per second of usage; free tier covers most small apps.

