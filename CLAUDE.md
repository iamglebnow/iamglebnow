# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build
npm run lint     # ESLint check
npm run start    # Start production server
```

## Architecture

Single-page Next.js 14 portfolio site (App Router) for Gleb Galyamov, a product designer. Content is in Russian.

**Key files:**
- `app/layout.tsx` — Root layout; sets Manrope font (latin + cyrillic) and Russian metadata
- `app/page.tsx` — Entire site as a single client component (`"use client"`)
- `app/globals.css` — Tailwind directives + global resets
- `tailwind.config.ts` — Custom design tokens (see below)

**Custom Tailwind tokens:**
- `text-h1` — 31px/700 weight headings
- `text-ui` — 20px UI text
- `h-btn` — 44px button height
- `text-muted` — `#888888`
- `bg-card` — `#f0f0f0`
- `bg-btn-primary` — blue gradient button background

**Page structure (`app/page.tsx`):**
1. Hero section — avatar (`public/avatar.jpg`, 140×140px, rounded), name, description, contact buttons (Telegram, Email, CV)
2. Cases section — 5 portfolio cases (IDs 01–05) with screenshot grids
3. Sticky footer — appears via IntersectionObserver when hero scrolls out of view; mirrors avatar (44×44px) + contact buttons

**Contact constants** (top of `app/page.tsx`):
- `TELEGRAM_URL` — `https://t.me/iamglebnow`
- `EMAIL` — `iamglebnow@internet.ru`
- `CV_URL` — Google Drive link

No routing, no API routes, no database — purely static content with client-side scroll behavior.
