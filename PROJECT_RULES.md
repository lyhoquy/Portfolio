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

## 7. Editorial Hierarchy and Variable Composition
The portfolio uses a consistent design language with variable composition. Every Act must not be forced into the same repeated section-header template.

### Fixed five-Act narrative

The portfolio uses five fixed Acts because they map to the real visitor questions and the actual content of the portfolio:

| Act | Content and role in the visitor flow |
| --- | --- |
| The Sky | Identity: who Ly Ho is and what he does. |
| The Work | Evidence: the graduation project, Vietnamese food recognition project, and portfolio. |
| How I Build | Process: how Ly turns requirements into responsive, connected interfaces. |
| About | Context: Information Technology background, frontend direction, and developing UX interest. |
| Contact | Action: email, GitHub, LinkedIn, and Resume. |

The five Acts support the intended flow: **Understand → Verify → Explore → Contact**. They must not be replaced with arbitrary landing-page sections such as Services, Testimonials, or Pricing.

Act markers are chapter markers, not eyebrows. Display them as `01  The Sky`, `02  The Work`, `03  How I Build`, `04  About`, and `05  Contact`. Act markers must not use ALL-CAPS, mono typography, excessive letter spacing, or a dash. The Act marker remains quieter than the section headline.

### Text hierarchy

The following semantic hierarchy applies whenever these elements are used:

* **ACT label** is narrative metadata and a chapter marker. It must remain visually quiet and must never compete with the main content.
* **Section label or eyebrow** is optional contextual metadata. Use it only when it communicates information that is not already communicated by the ACT label, headline, or content below.
* **Main headline** is the primary visual statement of the section. It should be the dominant typographic element.
* **Supporting copy** is optional. Include it only when it provides information that cannot be understood from the headline or the content below.

### Composition rules

Do not treat the following as a mandatory pattern:

```text
ACT label + section eyebrow + main headline + supporting description
```

Each Act should be composed according to its content. Before adding a text layer, ask:

1. What is the single primary visual message?
2. What information is merely contextual?
3. What information is already communicated by the content below?
4. Does this text compete with the actual work?
5. Can the idea be communicated with fewer hierarchy levels?

The design should be quiet, intentional, typographic, cinematic, and editorial. It must remain a professional frontend developer portfolio rather than becoming a generic SaaS landing page, a generic developer template, or an anime fan website.

Do not delete approved content merely to simplify implementation. Instead, establish a clear visual distinction between primary content, contextual metadata, supporting explanation, and factual project information. Do not invent replacement copy or add decorative text to fill a layout.

The presence or absence of imagery must not determine whether hierarchy is clear. Images may provide visual anchors, but typography, spacing, and content order must communicate the structure on their own.

### Navigation arrows

The `↗` marker means that an action leaves the current portfolio context. Use it only for external destinations or a PDF that opens in a new browser tab, including GitHub, LinkedIn, external live demos, external repositories, and the Resume PDF. Do not use `↗` for internal anchors, internal case-study routes, Previous/Next controls, or `mailto:` contact actions. Internal actions use no arrow unless another symbol communicates a specific behavior, such as `↓` for scrolling to Projects.

### Metadata formatting

Do not join unrelated metadata with a middle dot. Do not use patterns such as `A · B · C`, `Ly Ho · Frontend Developer`, or `Year · status`. Use separate lines, label/value pairs, alignment, spacing, borders, or independent technology tags. Technology stacks must be rendered as independent tags rather than one middle-dot string.

---

## 8. Visual Identity

The approved visual direction is an atmospheric editorial system inspired by the contrast and weather mood associated with *Tenki no Ko*. The internal project name **After the Rain** is a descriptive name created for this direction, not the official name of a reference website, film design system, or external brand.

### Approved color system

| Hex | Role | Use |
| --- | --- | --- |
| `#081827` | Night Ink | Primary text, Contact surface, scrolled navigation, deep contrast areas. |
| `#123B62` | Deep Sky | Hero and identity surface. |
| `#F7FAFB` | Cloud Paper | Main reading surface for Work and About. |
| `#D4E5E9` | Rain Mist | How I Build surface and transition field. |
| `#66818F` | Rain Text | Supporting copy, captions, and metadata. |
| `#F3C969` | Sunlight Accent | Primary CTA, active gallery state, technology tags, and evidence markers. |

Do not use white text on Cloud Paper or Rain Mist. Do not use Sunlight Accent as an undifferentiated large background. Gradients and glows are permitted only when they create atmospheric depth in Hero or Contact and must not replace hierarchy.

### Approved type system

* **DM Serif Display** is the headline typeface. It is used for Hero, major section headlines, project detail titles, and Contact because its editorial contrast distinguishes the portfolio from generic developer templates while supporting the cinematic narrative.
* **Geist Sans** is the body typeface. It is used for descriptions, responsibilities, About copy, process explanations, navigation, and buttons because it remains technical, compact, and easy for recruiters to scan.
* **Geist Mono** is reserved for system-like metadata such as project status, year labels, technology tags, counters, and captions. It must not be used to render Act markers as ALL-CAPS eyebrows.

This color and type system is approved and must not be treated as provisional or replaced without the owner's explicit approval.

---

## 9. Content Rules

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

## 10. Case Study Rules

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

## 11. Information Architecture

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

## 12. UX Interaction Rules

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

## 13. Responsive Design

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

## 14. Content Status

Content should be treated as one of three states:

### Approved

Content is confirmed and may be presented as final.

### Draft

Content is provisional and may change.

### Missing

The required information has not been provided.

Agents must not silently convert Draft or Missing content into Approved content.

---

## 15. Reference Material

Historical portfolio material may be stored in:

`legacy-static/`

This material is reference-only unless explicitly approved for reuse.

Do not overwrite or delete historical source material without explicit approval.

When migrating old content, preserve factual accuracy and distinguish historical content from newly created content.

---

## 16. Decision Authority

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

## 17. Change Rule

If a requested change conflicts with this document:

1. Identify the conflict.
2. Explain the affected rule.
3. Ask for clarification or approval.
4. Do not silently override the rule.

---

## 18. Official AI-Generated Design Tell Reference

The following six points are the official reference for reviewing and avoiding AI-generated design tells. Agents must use this section as the source of truth and must not rely on historical chat context to recover the list.

1. Nền cream ấm + serif tương phản cao + accent cam đất
2. Nền gần đen + 1 accent xanh chanh/đỏ rực
3. Layout broadsheet: viền chỉ mảnh, bo góc = 0, cột dày kiểu báo
4. Bộ "SaaS-card": mọi khối bo góc giống nhau, cùng 1 shadow xám mờ, gradient trang trí
5. Chrome mặc định: eyebrow ALL-CAPS cách chữ, meta nối bằng dấu chấm giữa
   (A · B · C), nhãn kiểu "WORD — fragment", đen tuyền giả (#0B0B0B/#111),
   font mono cho label nhỏ, mũi tên → sau mọi link
6. Đánh số 01/02/03 cho nội dung không thực sự là chuỗi tuần tự
