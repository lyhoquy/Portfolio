# DEVELOPMENT-GUIDELINE.md — Ly Ho Portfolio

## 1. Purpose

This document defines the technical architecture and implementation conventions for the Ly Ho portfolio.

It is the source of truth for engineering decisions.

Product, branding, UX, visual identity, and approved content belong in `PROJECT_RULES.md`.

---

## 2. Technology Stack

The project currently uses:

* Next.js 16.3.3
* React 19.2.8
* TypeScript 5.9.3
* Tailwind CSS 4.3.3
* ESLint 9
* pnpm 11.24.0

Target infrastructure:

* Next.js App Router
* Drizzle ORM
* TiDB / MySQL
* Vercel

Do not assume versions other than those installed in the repository.

For framework-specific behavior, prefer documentation corresponding to the installed version.

---

## 3. Package Management

Use `pnpm`.

Standard commands:

```bash
pnpm dev
pnpm lint
pnpm build
```

The project should also provide:

```bash
pnpm typecheck
pnpm db:generate
pnpm db:migrate
```

when the corresponding functionality has been implemented.

Do not switch package managers.

Do not modify the lockfile manually.

---

## 4. Next.js Architecture

Use the Next.js App Router.

Current route structure:

```text
app/
```

`app/` should contain:

* routes;
* layouts;
* loading states;
* error boundaries;
* route-specific UI;
* route-specific server logic when appropriate.

Do not turn `app/` into a general-purpose component or utility directory.

---

## 5. Server and Client Components

Server Components are the default.

Use Client Components only when the component genuinely requires:

* browser APIs;
* React state;
* event handlers;
* effects;
* client-side subscriptions;
* other browser-only behavior.

Do not add `"use client"` automatically.

Keep client boundaries as small as practical.

Prefer passing serializable data from Server Components into Client Components.

---

## 6. Repository Structure

Preferred structure:

```text
app/
  routes and route-specific UI

components/
  reusable UI components

lib/
  server-side logic
  data access
  utilities
  infrastructure

drizzle/
  schema
  migrations

public/
  static assets

tests/
  tests when applicable

.github/
  CI/CD workflows
```

Create directories only when they are needed.

Do not create a large abstraction hierarchy before the project requires it.

---

## 7. Component Boundaries

A component belongs in `components/` when it is:

* reused by multiple routes;
* conceptually shared;
* independent enough to have a reusable interface.

Route-specific components should remain close to their route.

Avoid extracting every JSX fragment into a component.

Prefer meaningful boundaries over maximum componentization.

---

## 8. Data Access

Database and server-side data access belongs in `lib/` or an appropriate server-only module.

Do not place database queries directly inside JSX.

Do not expose database credentials or server-only modules to client bundles.

Where appropriate, use:

```ts
import "server-only";
```

to protect server-only modules.

Keep data retrieval separate from presentation.

---

## 9. Database

The target database is TiDB/MySQL.

The ORM is Drizzle.

Expected structure:

```text
drizzle/
  schema.ts
  migrations/
```

Database configuration should remain separate from UI code.

Environment variables must be used for database credentials.

Never hardcode connection strings.

---

## 10. Database Migration Workflow

Schema changes must follow this workflow:

1. Modify the schema.
2. Generate the migration.
3. Inspect the generated SQL.
4. Validate against development data.
5. Run typecheck/build/tests.
6. Review the migration diff.
7. Apply to production only through the release process.

Never modify an already-applied production migration in place.

Never assume generated migration SQL is automatically safe.

Never run destructive production migrations autonomously.

---

## 11. Validation

TypeScript should remain strict.

The standard validation sequence is:

```bash
pnpm lint
pnpm typecheck
pnpm build
```

When tests exist:

```bash
pnpm test
```

Run the narrowest relevant check during development, then run broader validation before completion.

Do not suppress errors simply to obtain a passing build.

---

## 12. Input Validation

Use Zod for untrusted structured input where validation is required.

Validate data before:

* database writes;
* mutations;
* server actions;
* API processing;
* external service calls.

Do not assume TypeScript types validate runtime input.

---

## 13. Environment Variables

Environment-specific values must be stored in environment configuration.

Never commit secrets.

Provide `.env.example` containing variable names and safe placeholder values.

Example:

```env
DATABASE_URL=
```

Do not put real credentials in `.env.example`.

---

## 14. Dependency Policy

Before adding a dependency:

1. Check whether the existing platform or codebase already solves the problem.
2. Confirm the dependency is necessary.
3. Confirm compatibility with the installed stack.
4. Consider security, maintenance, bundle size, and licensing.
5. Install using `pnpm`.

Avoid dependencies that duplicate existing framework capabilities.

---

## 15. Styling

Use Tailwind CSS 4 according to the project's installed configuration.

Do not introduce another styling system without an explicit architectural reason.

Keep design tokens centralized where practical.

Do not hardcode large collections of repeated visual values throughout components.

However, do not prematurely build a complete design system before the visual direction is established.

Visual decisions remain governed by `PROJECT_RULES.md`.

---

## 16. Accessibility

Accessibility is part of implementation quality.

Use:

* semantic HTML;
* accessible names;
* keyboard-accessible controls;
* visible focus states;
* appropriate heading hierarchy;
* meaningful alt text;
* sufficient color contrast;
* reduced-motion support where relevant.

Do not use ARIA to compensate for incorrect semantic HTML when native elements are sufficient.

---

## 17. Performance

Prefer simple, efficient implementations.

Avoid unnecessary:

* client-side JavaScript;
* client components;
* large dependencies;
* duplicated data fetching;
* unoptimized media;
* blocking scripts.

Use Next.js capabilities appropriately for:

* image optimization;
* font loading;
* caching;
* server rendering;
* static generation.

Do not optimize prematurely without evidence.

---

## 18. SEO and Metadata

Public portfolio pages should provide meaningful metadata.

At minimum, the site should eventually define:

* title;
* description;
* Open Graph metadata;
* canonical URLs where appropriate;
* appropriate robots behavior;
* sitemap where appropriate.

Metadata must accurately represent the actual content.

Do not invent claims for SEO purposes.

---

## 19. Error and Loading States

User-facing routes should handle meaningful loading and error conditions where applicable.

Use Next.js route conventions such as:

```text
loading.tsx
error.tsx
not-found.tsx
```

only where they provide actual value.

Do not add empty placeholder files solely for architectural completeness.

---

## 20. Deployment

The target deployment platform is Vercel.

Production deployment must use environment variables managed by the deployment platform.

Do not commit deployment secrets.

Deployment configuration should remain minimal unless the application requires explicit configuration.

---

## 21. CI

The repository should eventually provide GitHub Actions validation for:

1. dependency installation;
2. lint;
3. typecheck;
4. production build.

CI should validate the repository without requiring production secrets unless a specific test genuinely requires them.

---

## 22. Testing Strategy

Tests should be introduced where behavior has meaningful regression risk.

Priorities:

1. Data validation and transformation
2. Server-side business logic
3. Important interactive behavior
4. Critical user flows

Do not create tests that merely mirror implementation details.

Prefer tests that verify observable behavior.

---

## 23. Security Principles

Treat all external input as untrusted.

Do not expose:

* secrets;
* database credentials;
* private server data;
* internal implementation details that should remain server-side.

Avoid unnecessary public API surface.

Prefer framework-provided security mechanisms over custom implementations.

---

## 24. Git Workflow

Keep commits focused.

Recommended commit structure:

```text
feat: add project listing
fix: correct mobile navigation
refactor: extract project card
docs: update development guidelines
chore: configure CI
```

Do not combine unrelated changes into a single commit.

Never use:

```bash
git reset --hard
git push --force
```

on shared branches unless explicitly authorized.

---

## 25. Implementation Principle

Prefer:

**simple → explicit → maintainable → evidence-based**

over:

**abstract → clever → over-engineered**

The architecture should evolve with the portfolio.

Do not build infrastructure merely because it might be useful in the future.

Every abstraction should have a current reason to exist.
