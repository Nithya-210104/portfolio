# Nithya Portfolio

Modern responsive personal portfolio built with Next.js App Router, Tailwind CSS, reusable shadcn-style UI components, and Framer Motion.

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- lucide-react icons

## Install

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## SMTP Configuration (Contact Form)

1. Copy env template:

```bash
cp .env.example .env.local
```

2. Configure these values in `.env.local`:

- `SMTP_HOST` (example: `smtp.gmail.com`)
- `SMTP_PORT` (`587` for TLS or `465` for SSL)
- `SMTP_USER` (your SMTP username/email)
- `SMTP_PASS` (app password or SMTP password)
- `CONTACT_RECEIVER_EMAIL` (where form submissions should arrive)

3. Restart dev server after updating env values.

### Gmail Note

For Gmail, use an **App Password** (not your normal account password) with 2FA enabled.

## Build for Production

```bash
npm run build
npm run start
```

## Folder Structure

```text
app/
  layout.tsx
  page.tsx
  loading.tsx
  globals.css
components/
  site/
    about.tsx
    contact.tsx
    education-certifications.tsx
    experience.tsx
    footer.tsx
    hero.tsx
    loading-screen.tsx
    navbar.tsx
    portfolio.tsx
    projects.tsx
    section-heading.tsx
    skills.tsx
  ui/
    badge.tsx
    button.tsx
    card.tsx
    input.tsx
    textarea.tsx
lib/
  constants.ts
  utils.ts
styles/
  utilities.css
```

## Included Features

- Dark theme with glassmorphism cards
- Smooth scrolling and scroll-spy navbar
- Animated hero and project cards
- Responsive mobile-first layout
- SEO metadata in App Router layout
- Frontend-only contact form
