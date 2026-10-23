# Mirski Japanese — Agent Rules

## User Guidance

The user is a coding beginner. Keep all explanations beginner-friendly.

- Use simple, natural language. Explain technical terms briefly when first introduced.
- Never assume the user knows terminal commands, project structure, environment variables, dependencies, or deployment.
- For setup, installation, configuration, running, debugging, and deployment tasks, provide numbered, step-by-step instructions.
- For every command, explain **where to run it**, **what it does**, and **what success looks like**.
- Clearly distinguish commands to copy and paste from explanations. Never leave required steps implied.
- Specify which folder to open and which file to create or edit, using exact paths.
- If an action requires the user to use an application or website, explain where to click and what to look for.
- Prefer the simplest safe workflow. Avoid overwhelming the user with unnecessary technical details.
- If a task requires user action, give one clear next step at a time when appropriate.
- Never blame the user for errors. Explain the cause in plain language and guide them through the fix.
- Do not ask the user to perform work the agent can safely do itself.
- Do not claim an action was completed if it was not actually performed or verified.

Keep the code and engineering standards professional. Simplify the explanation, not the implementation quality.

When finishing a task, summarize:
1. What was done.
2. Whether it was tested successfully.
3. What the user needs to do next, if anything.

If no action is required from the user, say so explicitly.

## Core

Build a production-quality landing page for **Mirski Japanese**.

Priorities:

1. Security
2. Correctness
3. Maintainability
4. Accessibility
5. Performance
6. Scalability

Always prefer the simplest solution that correctly solves the task.

## Before Changes

Before modifying code:

1. Inspect the relevant existing code.
2. Reuse existing patterns/components.
3. Understand dependencies and side effects.
4. Make the smallest appropriate change.

Do not rewrite unrelated code or refactor without a clear reason.

## Code Quality

- Follow Clean Code and SOLID pragmatically.
- Keep components focused.
- Avoid duplicated logic.
- Avoid premature abstraction.
- Avoid unnecessary dependencies.
- Prefer composition over complex abstractions.
- Keep business/content logic separate from UI where practical.

## Security

Treat external and user-provided data as untrusted.

Never:

- expose secrets
- commit credentials or `.env*`
- trust client-side validation alone
- render unsanitized HTML
- expose internal errors or stack traces
- log sensitive data
- move privileged logic to the client

Use established security patterns.

## Performance

Prefer:

- Server Components
- static rendering
- minimal client JavaScript
- optimized assets
- minimal third-party scripts

Avoid unnecessary hydration, dependencies, requests, and heavy client-side libraries.

## Content Integrity

Never invent business facts, testimonials, reviews, statistics, credentials, partnerships, pricing, guarantees, or outcomes.

If required information is missing, use a clear placeholder/TODO and report it.

## Scope

Follow the relevant documentation in `docs/` when a task touches that area.

Do not load or apply unrelated documentation unnecessarily.

Relevant docs may include:

- `docs/product.md`
- `docs/architecture.md`
- `docs/design.md`
- `docs/security.md`
- `docs/performance.md`
- `docs/accessibility.md`
- `docs/seo.md`
- `docs/content.md`
- `docs/reference.md`

## Verification

Before declaring a task complete, run the applicable checks.

At minimum when relevant:

- lint
- typecheck
- tests
- production build

Never claim verification that was not actually performed.

## Assets

`/assets` is the project's source-material folder.

Files placed there may include:
- logos
- images
- design references
- brand materials
- copy
- fonts
- documents
- other project assets

When a task may benefit from an asset:

1. Inspect the relevant files in `/assets`.
2. Determine their likely purpose from the file itself, filename, format, and context.
3. Prefer using existing assets over recreating them.
4. Do not modify or overwrite source assets.
5. If the intended usage is ambiguous and materially affects the result, ask the user before proceeding.
6. If the intended usage is obvious, make the appropriate implementation decision without asking.
7. Do not force unrelated assets into the design.

Treat `/assets` as source material, not as production code.

## OpenCode Shell Compatibility

On Windows, use the available built-in `shell` tool for terminal commands.

Never call `shell_client`; it is not a registered tool.

Do not invent tool names. If shell execution fails, report the exact error and do not claim commands were executed.

## Git

Use conventional commit prefixes:

`feat:` `fix:` `refactor:` `perf:` `style:` `docs:` `test:` `chore:` `security:`

Never commit secrets, build output, or cache files.

## Final Rule

**Make the smallest secure, correct, maintainable change that solves the actual task.**