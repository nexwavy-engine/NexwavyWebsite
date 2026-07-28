---
description: How to commit changes and deploy the Nexwavy website (Root)
---

# Deployment Workflow

Follow these steps to commit your changes to GitHub and deploy to production.

## 1. Run Final Tests
// turbo
1. Execute the test suite to ensure everything is stable:
   `npm test`

## 2. Commit to GitHub
2. Check which files have changed:
   `git status`

3. Stage all changes:
   `git add .`

4. Create a commit message:
   `git commit -m "feat: premium aesthetic upgrade and production readiness"`

5. Push to GitHub:
   `git push origin main`

## 3. Deploy to Production
6. Log in to your [Vercel Dashboard](https://vercel.com).
7. Select your **Nexwavy** project.
8. Vercel will automatically detect the new commit and start a "Production Build".
9. Once the build finishes, your site is live!

---
> [!TIP]
> Always verify the build locally using `npm run build` before pushing to ensure there are no production build errors.
