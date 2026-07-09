# Copilot instructions — ts-package-template

This is a **Bun**-based TypeScript library published to GitHub Packages (tsup build, Biome, Vitest, release-please; TypeScript 6.0). Follow these conventions.

## Package manager — Bun only
- Use **Bun** exclusively (`engines.bun >= 1.3.0`). The lockfile is `bun.lock`.
- **Never** run npm, pnpm, or yarn, and **never** create `package-lock.json`, `pnpm-lock.yaml`, or `yarn.lock`. Adding an npm/pnpm/yarn lockfile to this repo is a defect.
- Install/update dependencies with `bun install` / `bun add`.

## Commands
- `bun install` — install dependencies
- `bun run build` — build with tsup (emits `dist/`)
- `bun run test` — Vitest with coverage
- `bun run lint` — Biome check
- `bun run format` — Biome format (`biome format --write`)
- `bun run typecheck` — `tsc --noEmit`

## Scope discipline
- Change **only** what the issue explicitly asks for. Keep the diff minimal — no unrelated files, dependencies, or refactors.

## Versioning & release
- Releases are automated by **release-please**. Do **not** hand-edit the `version` in `package.json` or `CHANGELOG.md`; let release-please manage them.

## Template placeholders
- `TEMPLATE_PACKAGE_NAME` and `TEMPLATE_DESCRIPTION` are intentional placeholders. Do **not** replace them unless the task explicitly asks.
