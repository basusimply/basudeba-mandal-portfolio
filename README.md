# Basudeba Mandal — portfolio

Lead DevOps Engineer portfolio built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**, ready to deploy on **Vercel**.

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
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for Open Graph metadata (use your Vercel deployment URL or custom domain). |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | GA4 Measurement ID (`G-…`). Omit to disable analytics. |

In Vercel: **Project → Settings → Environment Variables**, add the same keys for Production (and Preview if you want GA on preview deploys).

## Headshot

1. Add your photo as `public/headshot.jpg`.
2. In `lib/site.ts`, set `headshotSrc` to `"/headshot.jpg"`.

Until then, the site uses `public/headshot-placeholder.svg` (BM initials).

## Deploy on Vercel

1. Push this repo to GitHub.
2. Import the project in [Vercel](https://vercel.com) and use the default Next.js settings.
3. Set environment variables as above.
4. Your site will be available at `https://<project>.vercel.app`; you can add a custom domain later.

## Future enhancements

The stack supports **Route Handlers** (`app/api/...`), server actions, and new routes (e.g. booking) without a full rewrite—add features as needed.
