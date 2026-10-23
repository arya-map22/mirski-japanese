# Security

## Principles

Security is the first project priority. Treat all external and user-controlled data as
untrusted, validate at trust boundaries, and keep privileged logic on the server.

## Current attack surface

The initial site is deliberately small:

- No authentication, accounts, payments, or learner data.
- No database or API routes.
- No public forms.
- No user-generated content.
- No `dangerouslySetInnerHTML`.
- No client-side data fetching.
- No third-party scripts, pixels, or chat widgets.
- No secrets are required to render the page.

The main risks are therefore configuration, dependency, and future-form risks rather
than a large runtime attack surface. Keep it that way unless a feature genuinely
requires more.

## Secrets and environment

- `.env*` is ignored by Git, with `.env.example` explicitly unignored.
- `.env.example` contains placeholders only.
- `SITE_URL` is public configuration used for metadata, canonical URLs, robots, and the
  sitemap. It is not a secret.
- Never commit `.env.local`, API keys, tokens, private credentials, or service-account
  files.
- Never expose server-only environment variables through `NEXT_PUBLIC_` unless the value
  is intentionally public.
- Do not log environment values or request headers.

Before deploying, set `SITE_URL` to the real production origin. The fallback
`https://mirskijapanese.example` is a reserved placeholder and must not ship as the
canonical domain.

## Response headers

`next.config.ts` sets:

- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Cross-Origin-Opener-Policy: same-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=(), browsing-topics=()`
- `poweredByHeader: false`

A production-only Content Security Policy adds:

- `default-src 'self'`
- `base-uri 'self'`
- `form-action 'self'`
- `frame-ancestors 'none'`
- `object-src 'none'`
- `img-src 'self' data: blob:`
- `font-src 'self' data:`
- `style-src 'self' 'unsafe-inline'`
- `script-src 'self' 'unsafe-inline'`
- `connect-src 'self'`

### CSP trade-off

The site is statically rendered and does not use a per-request nonce. Next.js requires
inline bootstrap scripts/styles, so the policy allows `'unsafe-inline'`. This still
restricts external origins and blocks objects and framing, but it is weaker than a
nonce-based policy.

If the security model requires a strict CSP:

1. Introduce a nonce through middleware/proxy and dynamic rendering, or
2. Adopt a framework-supported static CSP hash strategy, and
3. Remove `'unsafe-inline'` from `script-src` and `style-src` where possible.

Do not weaken other headers to compensate. Re-test the production build after any CSP
change.

### HSTS

HSTS is not set in the app because TLS/domain ownership is deployment-specific. Set
`Strict-Transport-Security` at the hosting/CDN layer once HTTPS is confirmed for the
canonical domain and subdomains.

## Rendering and HTML

- Do not render unsanitized HTML.
- Avoid `dangerouslySetInnerHTML`. If it is ever required, document the source, sanitize
  with a maintained library, and add a test.
- Keep content in typed data/JSX rather than raw HTML strings.
- Metadata and JSON-LD must be generated from trusted, server-side values.
- Do not expose stack traces, internal paths, or raw error objects to users.

## Future forms

An enquiry form is not implemented because there is no secure endpoint or verified
contact channel. If one is added:

- Validate on the server with a schema library; client validation is only a UX aid.
- Constrain field length, allowed values, and encoding.
- Rate-limit by IP and another signal; add spam/abuse protection appropriate to the
  expected volume.
- Use CSRF protection for cookie-authenticated submissions; use POST, not GET, for
  personal data.
- Send email through a server-side provider. Never place provider keys in client code.
- Do not log names, email addresses, phone numbers, or message bodies.
- Return safe, generic errors. Log correlation IDs rather than personal data.
- Add a privacy notice and retention policy before collecting personal information.
- Consider accessibility and autocomplete attributes from the start.

## Dependencies

- Add a dependency only when it provides meaningful value.
- Prefer maintained packages with a clear security record.
- Run `pnpm audit` when dependencies change and review the output.
- Keep the lockfile committed; use `pnpm install --frozen-lockfile` in CI.
- Do not add client-side libraries for functionality the platform provides.

## Deployment checklist

- [ ] `SITE_URL` set to the real HTTPS origin.
- [ ] No `.env*` files containing secrets are committed.
- [ ] Security headers present in production responses.
- [ ] CSP verified in the browser console with no unexpected violations.
- [ ] `pnpm audit` reviewed.
- [ ] Hosting platform TLS/HSTS configured.
- [ ] No source maps or debug output exposed publicly beyond framework defaults.
- [ ] Enrolment contact is real and intentionally published.
- [ ] Privacy/legal pages added if required by the operating jurisdiction.

## Reporting

TODO: add a security contact once a real business channel exists. Never publish a
placeholder email address as if it were monitored.
