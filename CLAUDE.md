# Mirski Japanese — Claude Code Instructions

## Always apply

- Reply to the user in Indonesian. Write repository documentation, code comments, docstrings, and commit messages in English. Keep identifiers in English.
- Build a production-quality Mirski Japanese landing page. Prioritize: security, correctness, maintainability, accessibility, performance, then scalability. Prefer the simplest solution that meets the task.
- Before editing, inspect relevant code and dependencies, follow existing patterns, consider side effects, and make the smallest appropriate change. Do not touch unrelated code or refactor without a clear reason.
- Keep code focused and maintainable: pragmatic Clean Code/SOLID, composition over complex abstractions, no duplicated logic, premature abstraction, or unnecessary dependencies. Separate content/business logic from UI where practical.
- Treat user/external input as untrusted. Never expose secrets, commit credentials or `.env*`, rely only on client-side validation, render unsanitized HTML, expose stack traces, log sensitive data, or move privileged logic to the client. Use established security patterns.
- Do not invent business facts, testimonials, reviews, statistics, credentials, partnerships, prices, guarantees, or outcomes. If required information is missing, use a clear `TODO`/placeholder and report it.
- Before creating assets or replacing existing ones, inspect relevant `/assets` files. Prefer existing assets; treat `/assets` as source material and never modify/overwrite originals. Ask only when ambiguous intended use materially affects the result; otherwise make a reasonable choice. Do not force unrelated assets into the design.
- Before declaring completion, run applicable checks supported by the repository (lint, typecheck, tests, production build). State what actually ran and report failures; never claim unperformed verification.
- Use conventional commit prefixes when preparing commit messages: `feat:`, `fix:`, `refactor:`, `perf:`, `style:`, `docs:`, `test:`, `chore:`, `security:`. Never commit secrets, build output, or cache files.
- Final decision rule: make the smallest secure, correct, maintainable change that solves the actual task.

## Load references only when relevant

Read only the `docs/` references needed for the current task; do not load the whole directory by default.

| Task area                                      | Reference               |
| ---------------------------------------------- | ----------------------- |
| Product scope, requirements, behavior          | `docs/product.md`       |
| System structure, components, data flow        | `docs/architecture.md`  |
| Visual system, layout, brand styling           | `docs/design.md`        |
| Security-sensitive implementation              | `docs/security.md`      |
| Rendering, assets, runtime, loading            | `docs/performance.md`   |
| Keyboard, semantics, assistive technology      | `docs/accessibility.md` |
| Metadata, indexing, discoverability            | `docs/seo.md`           |
| Copy, tone, factual claims                     | `docs/content.md`       |
| External references and project-specific facts | `docs/reference.md`     |

If a listed file does not exist, do not assume its contents; inspect the repository and proceed using verified information.

## Implementation defaults

- Prefer Server Components and static rendering where compatible with the existing architecture.
- Minimize client-side JavaScript, hydration, third-party scripts, network requests, and heavy libraries.
- Follow the repository's existing framework, conventions, and dependency choices unless the task gives a clear reason to change them.

## Tooling note

On Windows, use the terminal/shell tool actually available in the current environment. Never invent tool names or assume a command ran; if execution fails, report the exact error.

## Auto-push

`.claude/hooks/auto-push.sh` runs on the `Stop` hook: after a turn that changed files, it
gates on `pnpm typecheck` and `pnpm lint`, commits, and pushes to `origin/main`. Pushes to
`main` deploy through the Vercel Git integration, so no Vercel CLI login is needed.

- A failing check aborts the push and leaves the changes local. Fix the failure instead of
  bypassing the hook.
- The commit message is fixed (`chore: auto-commit session changes`). Write meaningful
  commits yourself before the turn ends when the change deserves a better message.
