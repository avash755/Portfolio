# ANWAR.DEV Portfolio

A frontend only React portfolio built with Vite. Portfolio content is stored locally in `src/data/constants.js`; there is no app server or database.

## Run locally

```sh
npm install
npm run dev
```

## Contact form with n8n

The contact form sends the visitor's name, email, and message as JSON to an n8n Webhook node. Set `VITE_N8N_WEBHOOK_URL` before starting Vite or building the site. In production, set it in the hosting provider's environment settings and rebuild the site. Configure the n8n webhook to accept `POST` requests and allow the portfolio domain through CORS. The webhook URL is public in the built frontend, so do not put credentials or private API keys in it.

## Images

- The hero avatar is `public/assets/avatar.png`.
- The circular GitHub image is `public/assets/github-avatar.png`.
- The About section is text-only.

## GitHub contribution data

The GitHub Activity section reads the public contribution calendar for the account in `src/data/constants.js`. The count and heatmap update from GitHub profile data through the public GitHub Contributions API; the provider caches results for up to one hour. No GitHub token is exposed in the frontend.

The repository count uses GitHub's public user profile endpoint. The star count sums `stargazers_count` across all public repositories owned by the profile. Both stats are fetched on page load; when GitHub is unavailable, the panel shows `Unavailable` instead of a made-up number.
