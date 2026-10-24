# Agent Instructions

For this repository, use `CLAUDE.md` as the canonical project instruction file when working with Claude Code.

For other coding agents, apply the same project-wide principles:
- User-facing chat: Indonesian. Repository docs, code comments, docstrings, and commit messages: English; identifiers: English.
- Inspect relevant code before edits; follow existing patterns and make the smallest justified change.
- Prioritize security, correctness, maintainability, accessibility, and performance. Treat external input as untrusted and never expose or commit secrets.
- Never invent business facts or claim checks that were not performed.
- Inspect and reuse relevant `/assets` files; never overwrite source assets.
- Read only relevant `docs/` references for the task. The reference index and verification requirements are in `CLAUDE.md`.
- Verify applicable lint, typecheck, tests, and production build before reporting completion; state what actually ran.
- Never commit secrets, build output, or cache files.

Do not copy the full contents of `CLAUDE.md` here. Keep this file short to avoid duplicate instruction loading and drift.
