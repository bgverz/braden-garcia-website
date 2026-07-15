# bradengarcia.com

Personal portfolio site for Braden Garcia — a single-page, terminal-themed
site with a typed boot-sequence hero, custom Aero-style cursor, and
scroll-reveal sections.

Live at [bradengarcia.com](https://bradengarcia.com).

## Stack

- [Next.js](https://nextjs.org) (App Router, fully static)
- Tailwind CSS 4
- Framer Motion (scroll reveals); the hero boot sequence is a small
  hand-rolled `requestAnimationFrame` typewriter
- JetBrains Mono / Inter via `next/font`

## Development

```bash
npm install
npm run dev     # dev server at http://localhost:3000
npm run lint    # ESLint
npm run build   # production build
```

## Editing content

All site copy (about, experience, projects, skills, contact) lives in
[`src/content.ts`](src/content.ts) — components never hardcode copy.
The resume served by the nav's download link is
[`public/resume.pdf`](public/resume.pdf).

Project cards without an `href` render a non-interactive "Private repo"
label — restore the commented-out `href` in `src/content.ts` when a repo
goes public.

## Accessibility notes

- The custom cursor renders nothing on touch devices and never blocks
  keyboard use; focus rings stay visible.
- `prefers-reduced-motion` is respected everywhere: the boot sequence and
  scroll reveals render their finished state, and the cursor swaps its
  spin for a brief scale pulse.
