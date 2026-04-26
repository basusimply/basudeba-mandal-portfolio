# Basudeba Mandal — portfolio

Lead DevOps and SRE portfolio built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Markdown** blog posts. Deploy on **Vercel**.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` to `.env.local`:

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for Open Graph and sitemap. |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | GA4 Measurement ID (`G-…`). Omit to disable analytics. |
| `RESEND_API_KEY` | [Resend](https://resend.com) API key for the `/contact` form. |
| `CONTACT_TO_EMAIL` | Inbox that receives form submissions. |
| `RESEND_FROM` | Optional sender, e.g. `Portfolio <hello@yourdomain.com>`. Defaults to Resend’s test sender. |

In Vercel, add the same keys under **Project → Settings → Environment Variables**. Redeploy after changing env vars.

### Contact form (Resend)

1. Create a Resend account and an API key.
2. For production, **verify your domain** in Resend and set `RESEND_FROM` to an address on that domain.
3. Until then, you can test with Resend’s onboarding sender (see their docs).

If `RESEND_API_KEY` or `CONTACT_TO_EMAIL` is missing, the API returns 503 and the UI shows an error after submit.

## Content

| Area | Location |
|------|----------|
| Site copy & links | `lib/site.ts` |
| Hero stats | `lib/stats.ts` |
| Impact metrics | `lib/impact-metrics.ts` |
| Proven impact row | `lib/proven-impact.ts` |
| Hero chips | `lib/chips.ts` |
| Case studies | `lib/case-studies.ts` |
| Experience | `lib/experience.ts` |
| Blog posts | `content/blog/*.md` (frontmatter: `slug`, `title`, `date`, `description`, `draft`) |

## Headshot

1. Add your photo as `public/headshot.jpg`.
2. In `lib/site.ts`, set `headshotSrc` to `"/headshot.jpg"`.

Until then, the site uses `public/headshot-placeholder.svg`.

## Deploy on Vercel

1. Push this repo to GitHub.
2. Import the project in [Vercel](https://vercel.com) (default Next.js settings).
3. Set environment variables (including Resend for contact).
4. Your site will be available at `https://<project>.vercel.app`; add a custom domain when ready.
