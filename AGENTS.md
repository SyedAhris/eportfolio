# Repository Guidelines

## Project Structure & Module Organization
- `src/app` hosts the Next.js App Router; `page.tsx` renders the landing page and pulls shared styles from `home.module.css`.
- `src/app/(components)` stores reusable UI such as `navbar.tsx` and `tabs/tabs.tsx`, each paired with a CSS module for scoped styling.
- `src/app/(pages)` holds route groups (`about`, `contact`, `projects`) with per-page modules; share layout scaffolding via `layout.tsx` and `rootLayout.module.css`.
- `public` contains static assets like `profilepic.png`; add new media here and reference with `/asset-name` paths.
- `src/app/globals.css` sets design tokens; prefer module-level styles for component-specific rules.

## Build, Test, and Development Commands
- `npm run dev` launches the Next.js dev server with hot reload on http://localhost:3000.
- `npm run build` creates an optimized production bundle; run before deployment.
- `npm run start` serves the built app locally to validate production output.
- `npm run lint` runs ESLint with the Next.js config; fix or document any warnings before committing.

## Coding Style & Naming Conventions
- Write TypeScript React function components with 4-space indentation and import ordering matching existing files.
- Use PascalCase for components (`Tabs`), camelCase for hooks and variables, and kebab-case for directories unless Next.js enforces route naming.
- Keep CSS modules named `*.module.css` and class selectors camelCase; co-locate module files with their components.
- Favor absolute imports via the `@/` alias for paths under `src`.

## Testing Guidelines
- Automated tests are not yet configured; until added, verify changes with `npm run lint` and manual page checks in dev mode.
- When introducing tests, follow the `__tests__` + `.test.tsx` pattern and target critical UI flows; document coverage expectations in your PR.

## Commit & Pull Request Guidelines
- Follow the existing convention of concise, imperative subjects (e.g., `fix(nav): align active state` or `Fix: adjust hero spacing`).
- Group related changes per commit; avoid bundling lint fixes with feature work.
- Pull requests should summarize the user-facing impact, list testing evidence, and link relevant issues; include screenshots or GIFs for visual changes.
- Request review once CI (`npm run lint`/`npm run build`) passes and note any follow-up tasks in the description.
