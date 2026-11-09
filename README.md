# ANWAR.DEV Portfolio

A frontend only React portfolio built with Vite. The site focuses on my web development journey, projects, skills, and live public GitHub activity. Portfolio content is stored locally in `src/data/constants.js`; there is no app server or database.

## Run locally

```sh
npm install
npm run dev
```

## Contact form with n8n

The contact form sends the visitor's name, email, message, and a spam-trap field to an n8n Webhook node using a URL-encoded `POST` request. This avoids the JSON `OPTIONS` preflight for the browser request.

### Configure n8n

1. Create a **Webhook** node with method `POST`.
2. Add **Allowed Origins (CORS)** and set it to the exact portfolio origin (for example, `https://yourdomain.com`). Add `http://localhost:5173` as well while testing locally.
3. Add **Only Run If** with `{{ !$json.body.website }}` to discard submissions that fill the honeypot.
4. Connect an email node and configure its email credential inside n8n. Use `{{$json.body.name}}`, `{{$json.body.email}}`, and `{{$json.body.message}}` in the subject/body; set the visitor's address as Reply-To if the email node supports it.
5. Set the Webhook response mode to **When Last Node Finishes** so the portfolio only reports success after the email step completes. Publish the workflow and copy its **Production URL**. The test URL only works while n8n is listening for a test event.

### Connect the portfolio

Set `VITE_N8N_WEBHOOK_URL` in a local `.env.local` file before starting Vite. In production, add the same variable in the hosting provider's environment settings and rebuild/redeploy. Until the variable is set, the site shows a direct email option instead of a form that cannot deliver messages. The webhook URL is public in the built frontend, so do not put credentials or private API keys in it.

## Images

- The profile portrait is `public/assets/avatar.png` and appears only in the hero section.
- Project preview images are stored in `public/assets/` and referenced by the project data in `src/data/constants.js`.

## GitHub activity

The GitHub Activity section loads the public contribution calendar and repository data for the account configured in `src/data/constants.js`. It shows live contribution, public repository, and star counts; when GitHub is unavailable, the panel shows `Unavailable` instead of a made-up number. No GitHub token is exposed in the frontend.
