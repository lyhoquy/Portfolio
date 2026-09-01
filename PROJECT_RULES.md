# PROJECT_RULES.md — Kiandas Portfolio

## 1. Purpose

This document is the source of truth for the portfolio's product direction, brand identity, visual language, UX principles, information architecture, and approved content.

Technical implementation details belong in `DEVELOPMENT-GUIDELINE.md`.

Coding agents must read this document before modifying any protected product or design decision.

---

## 2. Product Identity

### Brand

**Kiandas**

### Owner

**Ly Ho**

### Professional Positioning

**Frontend Developer**

The portfolio should communicate Ly's ability to:

* build modern, responsive web interfaces;
* use HTML, CSS, JavaScript, and relevant frontend frameworks when actually used;
* develop reusable, component-based interfaces;
* turn designs or requirements into working products;
* use Git and deployment workflows where demonstrated.

UI/UX is a supporting direction: Ly is actively learning UI/UX and product design to improve how interfaces feel and work. The portfolio must not present Ly as a professional UI/UX Designer or Product Designer without corresponding proof.

The portfolio should not claim Full-stack Developer, AI Engineer, or other stronger positioning without sufficient evidence.

---

## 3. Portfolio Goal

The portfolio should help visitors quickly understand:

1. Who Ly is.
2. What Ly does.
3. How Ly thinks and works.
4. What Ly has built.
5. What level of design and development capability Ly demonstrates.
6. How to contact or work with Ly.

The website should prioritize clarity, credibility, and evidence over decorative complexity.

---

## 4. Primary Audience

The primary audience is:

* Recruiters and hiring managers hiring Frontend Developer Interns or Juniors;
* Recruiters and hiring managers hiring Web Developer Interns or Software Engineer Interns with a frontend focus.

Secondary audiences include frontend developers and technical interviewers who want to evaluate code structure, component architecture, responsive implementation, data handling, API integration, performance, Git, deployment, and technical decisions. Designers and product people may evaluate visual awareness and user-flow understanding, but the portfolio does not need to prove that Ly is a designer.

The interface should remain understandable to someone who does not already know Ly or Kiandas.

---

## 5. Homepage Goal and Conversion Flow

Within approximately ten seconds, the homepage should make clear:

1. **Who:** Ly Ho is a Frontend Developer.
2. **What:** Ly builds modern, responsive, functional web interfaces.
3. **With what:** only technologies Ly has actually used, such as React, Next.js, TypeScript, or JavaScript.
4. **Proof:** projects are visible immediately.

The intended visitor flow is:

**Understand → Verify → Explore → Contact**

The primary call to action is **View Projects**. The secondary call to action is **View Resume**. GitHub, LinkedIn, and Contact are supporting links and should not all be presented as equally prominent primary buttons.

## 6. Design Principles

The portfolio should prioritize:

### Clarity

Information hierarchy should be immediately understandable.

### Evidence

Whenever possible, demonstrate skills through actual work rather than unsupported claims.

### Restraint

Avoid unnecessary visual effects, excessive animation, decorative components, or trends that do not improve communication.

### Personality

The portfolio should feel personal and recognizable without sacrificing professionalism.

### Accessibility

Design decisions should consider:

* readable typography;
* sufficient contrast;
* keyboard accessibility;
* meaningful semantic structure;
* responsive layouts;
* reduced-motion preferences where applicable.

### Performance

Visual quality must not come at the cost of unnecessary page weight or poor interaction performance.

---

## 7. Visual Identity

The final visual system has not yet been fully locked unless explicitly documented elsewhere.

Therefore agents must not arbitrarily establish:

* brand colors;
* typography;
* logo treatment;
* visual motifs;
* gradients;
* illustration styles;
* animation language.

When a visual decision has not yet been approved, treat it as unresolved rather than inventing a permanent design system.

Temporary implementation values must be clearly identifiable as provisional.

---

## 8. Content Rules

Content must be based on information explicitly provided by the owner or approved project material.

Never fabricate:

* work experience;
* job titles;
* clients;
* project metrics;
* business results;
* user research findings;
* testimonials;
* awards;
* certifications;
* education claims;
* technology experience;
* project outcomes.

If a case study does not contain enough information, use an explicit placeholder or mark the content as incomplete.

Do not turn assumptions into facts.

---

## 9. Case Study Rules

Case studies should emphasize the process and reasoning behind the work.

When sufficient information exists, case studies may include:

* Context
* Problem
* Role
* Responsibilities
* Constraints
* Research
* Insights
* Design process
* Iterations
* Final solution
* Development
* Outcome
* Reflection

Do not invent missing sections.

A visually impressive case study with fabricated evidence is worse than an incomplete but honest case study.

---

## 10. Information Architecture

The exact final information architecture should be treated as a product decision.

The expected portfolio structure may include:

* Home
* Work / Projects
* Individual case studies
* About
* Contact

Additional sections should only be introduced when they provide clear value.

Avoid creating routes merely because the framework makes them easy to create.

---

## 11. UX Interaction Rules

Interactions should have a clear purpose.

Avoid:

* animation for decoration alone;
* excessive hover effects;
* interactions that hide essential information;
* inaccessible custom controls;
* unnecessary loading states;
* interaction patterns that imitate another product without a reason.

Motion should communicate:

* hierarchy;
* continuity;
* feedback;
* state changes;
* spatial relationships.

Respect user preferences such as reduced motion.

---

## 12. Responsive Design

The portfolio must work across:

* mobile;
* tablet;
* desktop;
* large desktop displays.

Do not design desktop first and treat mobile as an afterthought.

Responsive behavior should be intentional.

Components should adapt their:

* layout;
* spacing;
* typography;
* navigation;
* media treatment;
* interaction patterns

according to available space.

---

## 13. Content Status

Content should be treated as one of three states:

### Approved

Content is confirmed and may be presented as final.

### Draft

Content is provisional and may change.

### Missing

The required information has not been provided.

Agents must not silently convert Draft or Missing content into Approved content.

---

## 14. Reference Material

Historical portfolio material may be stored in:

`legacy-static/`

This material is reference-only unless explicitly approved for reuse.

Do not overwrite or delete historical source material without explicit approval.

When migrating old content, preserve factual accuracy and distinguish historical content from newly created content.

---

## 15. Decision Authority

The human owner has final authority over:

* personal branding;
* visual identity;
* personal information;
* portfolio claims;
* case-study narratives;
* project outcomes;
* major information architecture changes.

Agents may recommend alternatives, but recommendations must be presented as recommendations rather than silently implemented decisions.

---

## 16. Change Rule

If a requested change conflicts with this document:

1. Identify the conflict.
2. Explain the affected rule.
3. Ask for clarification or approval.
4. Do not silently override the rule.
