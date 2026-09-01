# AGENTS.md — Portfolio

## 1. Project

A personal portfolio for Ly Ho, a UI/UX Designer & Developer.

The repository is being rebuilt from a fresh Next.js scaffold. The current repository may contain infrastructure but does not yet contain the final portfolio content.

Target architecture:

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Drizzle ORM
- TiDB/MySQL
- Vercel

The repository is expected to remain maintainable by both humans and coding agents.

---

## 2. Source of Truth

Before making changes, identify the authoritative source for the decision:

- `PROJECT_RULES.md` → product, branding, visual identity, approved content
- `DEVELOPMENT-GUIDELINE.md` → architecture, technical conventions, data flow, deployment
- Existing code → current implementation patterns
- Tests → executable behavioral expectations
- `legacy-static/` → historical reference only, when present

Do not duplicate large sections of these documents here.

If two sources conflict, stop and surface the conflict instead of silently choosing one.

---

## 3. Current Stack

The repository currently uses:

- Next.js 16.3.3
- React 19.2.8
- TypeScript 5.9.3
- Tailwind CSS 4.3.3
- ESLint 9
- pnpm 11.24.0

Do not assume patterns from older Next.js versions.

When working on Next.js behavior, prefer the documentation available for the installed version and verify version-sensitive APIs before implementing them.

---

## 4. Repository Architecture

Use these boundaries:

- `app/` → routes and route-specific UI
- `components/` → reusable UI components
- `lib/` → server/data/infrastructure logic
- `drizzle/` → database schema and migrations
- `public/` → small static assets
- `tests/` or existing test directories → tests
- `.github/` → CI configuration

Server-side data access must remain on the server.

Do not put database queries directly inside JSX.

Prefer Server Components by default.

Use Client Components only when browser APIs, local state, event handlers, or other client-only behavior actually requires them.

---

## 5. Working Mode

Coding agents must work as bounded implementation collaborators, not autonomous decision makers.

For every task:

1. Understand the request.
2. Inspect the relevant repository context.
3. Identify constraints and affected files.
4. Decide whether clarification is required.
5. Create a short implementation plan for non-trivial work.
6. Implement the smallest appropriate change.
7. Run deterministic validation.
8. Review the resulting diff.
9. Report what changed, what was verified, and any remaining uncertainty.

Do not expand the scope simply because an improvement is visible.

Avoid unrelated refactors, dependency upgrades, formatting changes, or architectural changes unless they are required by the task.

---

## 6. When Planning Is Required

A plan is required when a task:

- changes multiple files;
- changes architecture;
- changes database schema;
- changes authentication or authorization;
- changes deployment or infrastructure;
- changes public API behavior;
- changes protected product/content rules;
- introduces a new dependency;
- has meaningful security or data-loss risk;
- is ambiguous enough that implementation choices could materially differ.

For trivial, isolated changes, a full written plan is optional.

The plan should state:

- objective;
- affected files or areas;
- implementation approach;
- data/schema impact;
- security implications;
- validation strategy;
- rollback considerations when relevant.

Do not begin implementation while a required plan is still unresolved.

---

## 7. Protected Areas

Read `PROJECT_RULES.md` before modifying protected product areas.

The following require explicit confirmation when the requested change is not already covered by an approved plan:

- branding;
- colors;
- typography;
- visual identity;
- approved copy;
- personal information;
- case-study content;
- historical/reference content;
- major information architecture changes.

Do not rewrite content merely to make the UI easier to implement.

Do not invent personal information, project metrics, testimonials, clients, results, or portfolio claims.

When information is missing, ask or leave it explicitly unresolved.

---

## 8. Security Boundaries

Never expose secrets.

Never commit:

- `.env` files containing secrets;
- API keys;
- database credentials;
- session secrets;
- private tokens;
- production connection strings.

Do not read or print secret values unless explicitly required and safe.

Production databases are outside the agent's normal write authority.

Never automatically:

- run destructive production migrations;
- drop or reset production data;
- force-push;
- rewrite shared history;
- remove production infrastructure;
- disable security controls.

When a command could destroy or irreversibly modify data, stop and request explicit confirmation.

---

## 9. Database Rules

Database schema changes require deliberate review.

Preferred workflow:

1. Modify schema.
2. Generate migration.
3. Inspect generated SQL.
4. Validate against development data.
5. Run typecheck/build/tests.
6. Review the migration diff.
7. Apply to production only through the release process.

Never modify an already-applied production migration in place.

Never assume that a migration is safe simply because the ORM generated it.

---

## 10. Dependencies

Do not add dependencies casually.

Before adding a dependency:

- verify that the existing stack cannot reasonably solve the problem;
- explain why the dependency is needed;
- verify that the package exists;
- consider maintenance, security, bundle size, and licensing;
- use the project's existing package manager.

Do not replace existing infrastructure with a new library without a clear reason.

---

## 11. Validation

A task is not complete because the agent believes it is complete.

Use the strongest deterministic validation available for the change.

Typical checks include:

```bash
pnpm lint
pnpm typecheck
pnpm build
```

When tests exist:
```bash
pnpm test
```

For database changes, also validate the migration and affected data paths.

For UI changes, verify relevant routes and responsive behavior.

Do not claim a check passed unless it was actually run.

If a check cannot be run, explicitly state why.

## 12. Testing

When behavior has a clear input/output contract, prefer tests.

For test-driven work:

Define the expected behavior.
Write the test.
Confirm the test fails for the expected reason.
Implement the smallest change that satisfies the test.
Run the test again.
Run broader validation when appropriate.

Do not modify tests merely to make an incorrect implementation pass.

Tests may be changed when the specification itself changes, but the reason must be explicit.

## 13. Git and Scope

Keep changes small and reviewable.

Prefer:

one feature/fix per branch;
focused commits;
descriptive commit messages;
no unrelated cleanup;
easy rollback.

Do not use destructive Git commands unless explicitly requested.

Before completing a task, inspect the diff and confirm that every changed file is relevant.

## 14. Evidence-Based Completion

When reporting completion, include:

Changed

What was implemented.

Verified

Commands actually executed and their results.

Not verified

Anything that could not be tested or confirmed.

Risks / Decisions

Any remaining uncertainty, migration risk, dependency decision, or human decision required.

Do not use vague statements such as "everything looks good" without evidence.

## 15. Learning From Repeated Failures

If the agent repeatedly makes the same project-specific mistake:

identify the exact failure;
determine whether the missing instruction belongs in AGENTS.md or a more specific rule;
add the smallest useful rule;
avoid adding generic warnings.

Rules should evolve from observed problems rather than hypothetical edge cases.

## 16. Default Principle

Prefer:

inspect → understand → plan when necessary → implement minimally → validate → review → report

over:

prompt → generate everything → assume it works

The agent is responsible for implementation quality within the agreed constraints.

The human remains responsible for product decisions, approval of ambiguous changes, security-sensitive actions, and final acceptance.