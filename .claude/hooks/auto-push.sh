#!/usr/bin/env bash
# Stop hook: commit and push whatever changed during the turn.
#
# Runs on every turn, so it exits immediately when the tree is clean and the
# branch is level with its upstream. Pushes are what trigger Vercel deployments,
# so nothing is published that fails typecheck or lint.
#
# ponytail: typecheck + lint is the gate here; add `pnpm build` if a broken
# build ever reaches the remote.
set -uo pipefail

cd "${CLAUDE_PROJECT_DIR:-.}" 2>/dev/null || exit 0

emit() { printf '{"systemMessage":"%s"}\n' "$1"; }

dirty=$(git status --porcelain)
ahead=$(git rev-list --count '@{u}..HEAD' 2>/dev/null || echo 1)

if [ -z "$dirty" ] && [ "$ahead" = "0" ]; then
  exit 0
fi

if [ -n "$dirty" ]; then
  if ! pnpm typecheck >/dev/null 2>&1; then
    emit "Auto-push dilewati: typecheck gagal, perubahan tetap lokal."
    exit 0
  fi

  if ! pnpm lint >/dev/null 2>&1; then
    emit "Auto-push dilewati: lint gagal, perubahan tetap lokal."
    exit 0
  fi

  if ! git add -A || ! git commit -q \
    -m "chore: auto-commit session changes" \
    -m "Co-Authored-By: Claude Code <noreply@anthropic.com>"; then
    emit "Auto-push dilewati: commit gagal, perubahan tetap lokal."
    exit 0
  fi
fi

if git push -q 2>/dev/null; then
  emit "Auto-commit + push selesai. Vercel akan deploy dari push ini."
else
  emit "Commit lokal dibuat, tapi push gagal. Cek remote atau kredensial."
fi
