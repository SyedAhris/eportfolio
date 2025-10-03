# Repository Guidelines

## Project Structure & Module Organization
- Next.js App Router lives under `src/app`; the landing page is `src/app/page.tsx` with shared styles in `home.module.css`.
- Reusable UI sits in `src/app/(components)`; pair each component (e.g., `navbar.tsx`) with its CSS module.
- Route groups reside in `src/app/(pages)` for `about`, `contact`, and `projects`; reuse scaffolding via `layout.tsx` and `rootLayout.module.css`.
- Global tokens live in `src/app/globals.css`; static assets belong in `public` and should be referenced with `/asset-name` paths.
- Add new media or config files near their peers and prefer `@/` imports for anything under `src`.

## Build, Test, and Development Commands
- `npm run dev` — start the Next.js dev server at http://localhost:3000 with hot reload.
- `npm run build` — generate the production bundle; run before deploying or sharing PRs.
- `npm run start` — serve the built bundle locally to validate production behavior.
- `npm run lint` — execute ESLint using the Next.js ruleset; resolve or document all warnings.

## Coding Style & Naming Conventions
- Author TypeScript React function components using 4-space indentation and match existing import ordering.
- Components use PascalCase, hooks and variables use camelCase, and directories stay kebab-case unless driven by route names.
- Scope styles with `*.module.css`; keep class selectors camelCase such as `.heroWrapper`.
- Favor absolute imports via `@/` instead of deeply nested relatives.

## Testing Guidelines
- Automated tests are not yet configured; rely on `npm run lint` and manual page verification in dev mode.
- When introducing tests, follow the `__tests__/component.test.tsx` pattern and document coverage expectations within the PR.

## Commit & Pull Request Guidelines
- Write concise, imperative commit subjects (e.g., `fix(nav): align active state`).
- Group related changes together; avoid bundling lint-only fixes with feature work.
- PRs should note user-facing impact, list validation (`npm run lint`, `npm run build`), and include UI screenshots or GIFs when relevant.
- Link related issues and call out follow-up tasks directly in the description.

## Security & Configuration Tips
- Keep secrets out of source control; use environment variables in `.env.local` (gitignored) for sensitive values.
- Vet new dependencies before adding them and run `npm audit` after upgrades.
