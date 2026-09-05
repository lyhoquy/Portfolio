# UI UX Pro Max Integration Plan

## Scope

This document evaluates how to apply [UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) to Ly Ho's portfolio on `feat/tenki-no-ko-weather-moments` without replacing the approved **After the Rain** visual system or the evidence-based portfolio content.

## Executive decision

UI UX Pro Max should be used as a **design audit and recommendation engine**, not as a runtime UI dependency and not as an instruction to regenerate the portfolio from scratch.

The repository provides searchable style, color, typography, UX, icon, motion, and stack guidance through a Python search script. It does not need to be imported into the Next.js bundle. The useful output is a design-system report and targeted implementation guidance that can be reviewed against the project's existing rules.

## Branch finding

The remote branch `feat/tenki-no-ko-weather-moments` exists at commit `84a2035` and is based on the older `origin/dev` line. It contains a `WeatherMoments` client component and related CSS, but it is materially behind `feat/cinematic-portfolio`.

Compared with the current cinematic branch, the Tenki branch removes or rewrites substantial work, including the current project evidence assets, the expanded case-study content, the locked visual/editorial rules, and parts of the current homepage architecture. The branch must therefore **not** be merged wholesale into the current portfolio.

Recommended branch strategy:

1. Start a new local working branch from the current `feat/cinematic-portfolio` tip, or rebase the Tenki branch onto that tip only after preserving its existing commit for reference.
2. Port the `WeatherMoments` component as an isolated feature.
3. Port only the relevant weather-moment CSS rules after reviewing color contrast, responsive behavior, and hierarchy.
4. Re-run the current homepage and all three case-study routes.
5. Commit the weather interaction separately from any later visual refinements.

## What UI UX Pro Max confirms

The generated recommendation is useful in the following areas:

| Recommendation | Decision for this portfolio |
| --- | --- |
| Editorial grid / magazine direction | Compatible with the approved After the Rain editorial system. Use as validation, not replacement. |
| Minimalism and Swiss-style clarity | Compatible with recruiter scanning, thin rules, restrained decoration, and clear type hierarchy. |
| Motion intensity 3/10 | Appropriate. Keep the weather interaction subtle and state-based. Do not add a motion library solely because the generator mentions GSAP. |
| Reduced motion and visible focus | Must be implemented and tested. This already matches PROJECT_RULES.md. |
| Responsive checkpoints at 375, 768, 1024, and 1440px | Adopt as a QA matrix. |
| `next/font` and responsive `Image fill` guidance | Already compatible with the existing Next.js architecture. |
| Generated purple palette | Reject. It conflicts with the approved Night Ink, Deep Sky, Cloud Paper, Rain Mist, Rain Text, and Sunlight Accent tokens. |
| Generated JetBrains Mono / IBM Plex Sans pairing | Reject. The approved typography is DM Serif Display, Geist Sans, and Geist Mono. |
| Bento cards, rounded-xl cards, testimonials, and social proof | Reject unless a specific product need appears. They do not match the portfolio's evidence-first narrative. |

## How Weather Moments should be positioned

The existing `WeatherMoments` component is best treated as a **small visual study / atmospheric interaction**, not as a sixth Act and not as a replacement for Projects.

Recommended placement options, in priority order:

1. Place it between Hero and The Work only if it remains visually compact and does not delay project evidence beyond the first meaningful viewport.
2. If recruiter scanning becomes slower, move it after The Work or use it as a restrained transition between The Work and How I Build.
3. Do not add it to primary navigation. It is an atmospheric layer, not a destination.

The interaction should demonstrate frontend capability through:

- explicit state changes between clear, rain, and afterglow;
- accessible buttons with `aria-pressed`;
- `aria-live` only for the changing message, without excessive announcements;
- visible keyboard focus;
- a reduced-motion path that removes nonessential transitions;
- no hidden project evidence or important copy behind the interaction.

## Required changes before implementation

The current component should be revised before porting:

- Replace the `eyebrow` treatment with the approved chapter/section hierarchy; do not introduce a repeated ALL-CAPS chrome pattern.
- Avoid the metadata join in `08:40 / KIANDAS SKY` if the slash is intended as a decorative metadata separator; use separate visual groups if it communicates two unrelated values.
- Check the phrase `A small visual study` against the approved content hierarchy. Keep it only if it provides real context rather than another competing label.
- Use existing theme tokens instead of new unrelated colors.
- Add `:focus-visible` styling for weather controls.
- Add `@media (prefers-reduced-motion: reduce)` behavior for scene transitions.
- Confirm the section does not create a sixth narrative Act or push project proof too far below the fold.
- Keep the weather icons as inline SVG with `aria-hidden`, which is consistent with the project's accessibility direction.

## Recommended implementation sequence

### Phase 1 — Port, do not redesign

Copy only the component concept and its minimal CSS onto a branch based on the current cinematic branch. Preserve all existing project data, assets, case-study routes, and PROJECT_RULES.md.

### Phase 2 — Token and hierarchy alignment

Replace branch-specific visual values with the existing theme tokens. Use the existing display/body/metadata type system. Ensure the component has one main headline and only the minimum supporting copy.

### Phase 3 — Responsive and accessibility QA

Verify the component at 375px, 768px, 1024px, and 1440px. Test keyboard navigation, focus visibility, reduced motion, contrast, and text wrapping. Check that the first viewport still exposes identity, CTA, and a clear path to project evidence.

### Phase 4 — Review against product rules

Reject any generated recommendation that conflicts with:

- Frontend Developer positioning;
- the five-Act narrative;
- evidence over decorative claims;
- no fabricated content;
- no middle-dot metadata joins;
- external-only `↗` semantics;
- approved After the Rain colors and typography.

## Commands used for this evaluation

The UI UX Pro Max repository was inspected without installing it into the portfolio runtime. Its local search engine was run for:

- a portfolio-specific design system;
- editorial and atmospheric style recommendations;
- typography pairings;
- recruiter-oriented UX guidance;
- Next.js responsive and accessibility guidance.

The generated output recommended editorial/minimal clarity, low motion, visible focus, reduced motion, and responsive QA. It also generated colors and fonts that conflict with the approved project rules; those recommendations are intentionally not adopted.

## Resume note

`public/` currently contains no Resume PDF. Therefore the Hero's `View resume` action is currently an internal `#resume` anchor and must not receive `↗` yet. Once a real PDF is added and the action opens it in a new tab, `↗` should be added according to PROJECT_RULES.md.

## Conclusion

Apply UI UX Pro Max selectively as a **review layer** for the Tenki weather interaction and responsive/accessibility QA. Do not install it as a production dependency, do not replace the approved design system, and do not merge the current Tenki branch wholesale into the cinematic branch.
