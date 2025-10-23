# Repository Guidelines

## Project Structure & Module Organization
- Next.js App Router pages live in `src/app`; the landing page is `src/app/page.tsx` with shared styles in `src/app/home.module.css`.
- Reusable UI sits under `src/app/(components)` paired with matching CSS modules (e.g., `navbar.tsx` + `navbar.module.css`).
- Route groups for `about`, `contact`, and `projects` live in `src/app/(pages)` and share scaffolding via `layout.tsx` and `rootLayout.module.css`.
- Global tokens belong in `src/app/globals.css`; static assets go in `public` and are referenced with `/asset-name` paths.
- New config or media files should live alongside related modules and leverage `@/` alias imports for anything in `src`.

## Build, Test, and Development Commands
- `npm run dev` — start the Next.js dev server at http://localhost:3000 with hot reload.
- `npm run build` — generate the optimized production bundle; run before sharing changes.
- `npm run start` — serve the built bundle to validate production behavior locally.
- `npm run lint` — run ESLint with the Next.js ruleset; resolve or document any warnings.

## Coding Style & Naming Conventions
- Author TypeScript React components with 4-space indentation and keep import ordering consistent with existing files.
- Use PascalCase for components, camelCase for hooks and variables, and kebab-case for directories unless driven by route names.
- Scope styles with CSS modules using camelCase class names (e.g., `.heroWrapper`), and prefer absolute imports via `@/`.

## Testing Guidelines
- Automated tests are not yet configured; rely on `npm run lint` and manual verification in dev mode.
- When adding tests, follow the `__tests__/Component.test.tsx` pattern and document expected coverage in the PR.

## Commit & Pull Request Guidelines
- Write concise, imperative commit subjects (e.g., `fix(nav): align active state`) and group related changes.
- PRs should summarize user-facing impact, list completed validation (`npm run lint`, `npm run build`), attach screenshots or GIFs for UI shifts, and link related issues.

## Security & Configuration Tips
- Keep secrets out of source control; load sensitive values from `.env.local`.
- Vet new dependencies and run `npm audit` after upgrades or dependency additions.
