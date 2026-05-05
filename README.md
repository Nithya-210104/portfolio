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
