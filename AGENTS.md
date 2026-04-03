# Project Guidelines

## Code Style
- Next.js App Router in `src/app`: home page in `src/app/page.tsx`, route groups in `src/app/(pages)`.
- Reusable components in `src/app/(components)` with co-located CSS modules (`tabs/tabs.tsx` + `tabs/tabs.module.css`, `navbar.tsx` + `navbar.module.css`).
- Use `@/` absolute imports for local modules (example: `@/app/(components)/theme-toggle`).
- TypeScript React: 4-space indentation, PascalCase components, camelCase hooks/vars, kebab-case folder names, CSS module class names camelCase.

## Architecture
- Single-page portfolio style app: sections for About, Projects, Contact in `src/app/(components)/sections`.
- Global layout in `src/app/layout.tsx`, root styling in `src/app/rootLayout.module.css`, global styles in `src/app/globals.css`.
- Static assets under `public/`, referenced with root paths (e.g., `/image.png`).

## Build and Test
- `npm install`
- `npm run dev` (local dev server, hot reload)
- `npm run build` (production build)
- `npm run start` (serve built bundle)
- `npm run lint` (ESLint checks)
- No tests currently in repo; for new tests prefer `__tests__/Component.test.tsx` naming.

## Project Conventions
- Vibe: minimal modern portfolio with animated sections, clearly segmented component modules.
- Component props are small and explicit; prefer simple presentational logic in components, no heavy global state.
- Keep styling in CSS modules and avoid global side effects; update existing patterns in `src/app/(components)/sections/*`.

## Integration Points
- No external backend API in codebase; likely pure static content. If adding data fetch, use Next.js server components and `fetch` or client-side hooks in a minimal way.
- Animation and theme toggling are in `src/app/(components)/theme-toggle.tsx` and `src/app/(components)/eyes.tsx`.

## Security
- Store env secrets in `.env.local` only; do not commit secrets.
- Audit dependencies occasionally with `npm audit`.

---

### Agent workflow notes
- Plan edits from top-down: layout -> sections -> components.
- Preserve existing file structure and style patterns.
- Validate with `npm run lint` and `npm run build` before finalizing.

> If any section is missing context or you would like a specific pattern documented (e.g., theming, animation timing, component naming), say so and I’ll update this doc.