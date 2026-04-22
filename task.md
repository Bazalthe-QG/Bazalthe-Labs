# Task Roadmap — Bazalthe Labs Reorganization

## Phase 1 — Cleanup & Reorganization

- [x] Delete `dist/` from git tracking
- [x] Update `.gitignore` to block `dist/`
- [x] Delete root `config/concepts/` (.ts files, replaced by `src/config/concepts/*.json`)
- [x] Move `server/` → `src/server/`
- [x] Update `package.json` scripts for new server path
- [x] Update `tsconfig.server.json` include path
- [x] Move `prisma/` → `src/prisma/` (clean up nested `prisma/prisma/` bug too)
- [x] Update `package.json` prisma scripts with `--schema` flag
- [x] Update `DATABASE_URL` in `.env` for new db location
- [x] Update `.gitignore` for new prisma db path
- [x] Add `logo.jpg` as site favicon in `index.html`
- [x] Show logo in app header/login page

## Phase 2 — Experiments Restoration

- [x] Restore `src/experiments/` from `origin/main`
- [x] Commit experiments by category (11 commits: animations, badges, buttons, cards, colors, emojis, forms, layouts, loaders, shadows, typography)
- [x] Commit experiments/index.ts separately

## Phase 3 — Code Fixes

- [x] Fix all import paths after server/ and prisma/ moves
- [x] Verify DB pushes correctly with new schema path
- [x] Run `get_errors` — fix all TypeScript errors
- [x] Remove `prisma/prisma/` nested directory bug

## Phase 4 — Centralization & Hardcode Reduction

- [x] Ensure all experiments use `Page`, `Section`, `Grid` from `src/system`
- [x] Ensure all experiments use CSS variable tokens (no hardcoded hex)
- [x] Review `src/system/tokens.ts` — ensure all tokens are exported
- [x] Remove inline layout that duplicates system components

## Phase 5 — Config System

- [x] `src/config/concepts/*.json` → validate all 12 files
- [x] `src/config/index.ts` → exports `subPageConceptMap`
- [x] Root `config/` → fully deleted after merge

## Phase 6 — Git Cleanup & Push

- [x] Force push to rewrite history
- [x] Commit in small batches per category
- [x] Final push

## Notes

- `src/config/concepts/*.json` = source of truth for concept tags
- `server/` must stay compatible with `tsx` runner
- Prisma schema path: `src/prisma/schema.prisma`
- DB path: `file:./src/prisma/dev.db`
- Logo path: `public/logo.jpg`
