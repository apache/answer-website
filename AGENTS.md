# Repository Guidelines

## Project Structure & Module Organization

This repository contains the Apache Answer website, built with Docusaurus 3
and React. Documentation lives in `docs/`, community content in `community/`,
and posts in `blog/`. Chinese translations live under `i18n/zh-CN/`.

Use `src/pages/` for routes, `src/components/` for reusable UI,
`src/theme/` for Docusaurus theme overrides, and `src/css/` for shared styles.
Static images and data belong in `static/`. Site configuration and navigation
live in `docusaurus.config.js`, `sidebars.js`, and `sidebarsCommunity.js`.
The `plugins/` directory contains custom plugins; `scripts/` contains data
refresh utilities. Generated site output goes to `build/`.

## Build, Test, and Development Commands

Use pnpm; the preinstall hook enforces it. Package requirements are Node.js
18+ and pnpm 8+; CI uses Node.js 20 and pnpm 9.

- `pnpm install`: install dependencies.
- `pnpm start`: run the English development server with live updates.
- `pnpm start:zh`: run the Chinese development server.
- `pnpm build`: generate the production site for configured locales.
- `pnpm serve`: preview the generated site locally.
- `pnpm typecheck`: run TypeScript checks.
- `pnpm clear`: clear Docusaurus caches when generated state becomes stale.

## Coding Style & Naming Conventions

Follow `.editorconfig`: two-space indentation, UTF-8, LF endings, a final
newline, and an 80-character line-length target. Preserve Markdown trailing
spaces when they represent line breaks. Match nearby TypeScript/React style.
Use PascalCase component directories with `index.tsx`, colocated CSS modules,
and descriptive kebab-case documentation filenames.

ESLint configuration extends `plugin:@docusaurus/recommended` and warns about
untranslated text. Use Docusaurus translation helpers for user-facing UI text.
Edit `.drawio.svg` diagrams with Draw.io to preserve their layer information.

## Testing Guidelines

No automated test framework, test script, or coverage threshold is configured.
Run `pnpm typecheck` and `pnpm build` for changes. Broken site links fail the
build; Markdown link warnings also need review. Preview affected routes in
both locales and check navigation, images, and responsive layouts.

## Commit & Pull Request Guidelines

Follow recent commit prefixes: `docs:`, `blog:`, `fix:`, `feat:`, and `chore:`.
Write a concise, action-oriented subject, such as `docs: clarify installation
requirements`. Keep changes focused.

Pull requests should describe the change, link relevant issues, report
validation performed, and include screenshots for visible UI changes.
Flag translation impacts and ensure the CI production build passes.
