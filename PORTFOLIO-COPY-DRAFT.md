# Portfolio Copy Draft — Cinematic Frontend Portfolio

> **Status:** Draft for copy approval. This document defines the proposed English copy and content hierarchy for the five-act portfolio experience. It does not change the application code or lock the visual theme.

## 1. Copy direction

The portfolio should feel atmospheric and personal without becoming an anime fan site or sacrificing recruiter clarity. The narrative uses the movement from sky to contact as a structural metaphor: the visitor first meets Ly, then sees the work, understands the way Ly builds, learns more about the person, and finally receives a direct invitation to connect.

The copy should remain literal where credibility matters. Cinematic language is appropriate for section names, transitions, and short framing lines. Project descriptions, role statements, technology labels, experience details, and calls to action should remain concrete.

The content hierarchy is:

| Layer | Purpose | Copy style |
|---|---|---|
| Act label | Establish narrative position | Short and atmospheric |
| Section headline | State the subject clearly | Direct and memorable |
| Supporting copy | Explain meaning and value | Concrete and concise |
| Metadata | Help recruiters scan | Factual and compact |
| CTA | Move the visitor forward | Explicit and action-oriented |

The intended visitor flow is:

```text
Meet Ly → See the work → Understand the process → Learn about Ly → Start a conversation
```

---

## 2. Global navigation copy

### Brand

```text
Kiandas
```

### Desktop navigation

```text
Projects
How I build
About
Contact
Resume
```

`How I build` is preferred over `Experience` as a narrative navigation label because it points to the process section. The actual employment experience can still appear inside Act 03 or Act 04 with factual labels.

### Mobile navigation

```text
Menu
Projects
How I build
About
Contact
Resume
Close
```

### Resume behavior

The navigation label should remain:

```text
Resume ↗
```

The final link should point to a reviewed public PDF. Until that file is approved for publication, the implementation must not expose a broken download link or claim that the backend is required.

---

# Act 01 — The Sky

## 3. Act purpose

Act 01 introduces Ly within the first viewport. It must answer three questions immediately: who Ly is, what Ly does, and what kind of technical work makes the profile distinctive.

The atmosphere can be expressive, but the role must remain visible before any visual effect. The visitor should never need to wait for an animation to understand the page.

## 4. Recommended copy

### Act label

```text
ACT 01 / THE SKY
```

### Eyebrow

```text
LY HO · FRONTEND DEVELOPER
```

### Primary headline

```text
I build interfaces
that connect ideas to real use.
```

This headline is preferred because it describes frontend work while leaving room for realtime data, computer vision, and product-oriented implementation.

### Supporting paragraph

```text
I build responsive web interfaces and connect them to the systems that make products useful — from realtime traffic information to computer-vision features.
```

This sentence is more specific than a generic responsive-web statement. It does not claim that every project is an AI product. It identifies the type of integration demonstrated by the project set.

### Primary CTA

```text
See my work ↓
```

Destination:

```text
#projects
```

### Secondary CTA

```text
View resume ↗
```

Destination:

```text
/resume.pdf
```

The destination remains subject to public-CV approval.

### Small technical signal

```text
React · TypeScript · realtime interfaces
```

### Optional atmosphere line

```text
Clear structure. Moving systems. Useful interfaces.
```

This line should be used only if the visual composition needs a short editorial statement. It should not compete with the main headline.

## 5. Hero copy hierarchy

The visible order should be:

```text
ACT 01 / THE SKY
LY HO · FRONTEND DEVELOPER
I build interfaces that connect ideas to real use.
Supporting paragraph
See my work
View resume
Technical signal
```

The visual layer may contain sky, cloud, rain, or light references, but those elements are supporting material. They must not replace the name, role, headline, or CTA.

## 6. Hero copy states

| Element | Status | Note |
|---|---|---|
| Name | Approved | Already present in profile data |
| Frontend Developer role | Approved | Protected positioning |
| Realtime/computer-vision signal | Draft | Based on documented projects; final wording needs owner approval |
| Resume destination | Missing | Requires reviewed public PDF |
| Atmospheric tagline | Draft | Optional and should not be overused |

---

# Act 02 — The Work

## 7. Act purpose

Act 02 is the primary proof section. The visitor should understand that the portfolio is not only an introduction but also a collection of working projects.

The section should prioritize the graduation project, then the Vietnamese food recognition project, and finally the portfolio website as a supporting personal project. The three items should not be presented as equal in weight.

## 8. Section copy

### Act label

```text
ACT 02 / THE WORK
```

### Eyebrow

```text
SELECTED PROJECTS
```

### Main headline

```text
Things I built to make ideas work.
```

This headline is more personal than `Selected projects I've built`, while remaining understandable.

### Supporting paragraph

```text
A focused selection of frontend, realtime, and computer-vision work. Each project shows a different way I turn requirements into a working experience.
```

### Featured project label

```text
FEATURED PROJECT / 01
```

### Featured project title

```text
Real-Time Traffic Navigation Dashboard
```

### Featured project description

```text
A driver-facing navigation experience that combines route guidance with realtime traffic and incident awareness from camera and computer-vision signals.
```

### Featured project role

```text
My role
Designed and developed the website from scratch, built responsive interface sections, and connected camera and computer-vision features.
```

The exact role statement should be updated if the project documentation confirms more precise responsibilities.

### Featured project proof labels

```text
Graduation Project · 2026
React · TypeScript · Mapbox · WebSocket · YOLO/OpenCV
Case study draft
```

### Featured project actions

```text
Read case study ↗
View source code ↗
```

A live demo should only be added after its URL and availability are verified.

## 9. Secondary project copy

### Project 02

Metadata:

```text
PROJECT · 2025
```

Title:

```text
Vietnamese Food Recognition & Travel Guide
```

Description:

```text
A web and edge-device experience for recognizing Vietnamese food, looking up recipes, and exploring related travel destinations.
```

Role:

```text
Worked across the web experience and the computer-vision and edge-device implementation documented in the project.
```

Tags:

```text
Python · Flask · TensorFlow · Leaflet · Raspberry Pi
```

Status:

```text
Case study draft
```

Actions:

```text
Read case study ↗
View source code ↗
```

### Project 03

Metadata:

```text
SUPPORTING PERSONAL PROJECT · 2026
```

Title:

```text
Personal Portfolio Website
```

Description:

```text
The portfolio platform I am building to present frontend work, technical decisions, and a growing interest in UI/UX.
```

Role:

```text
Designed and developed the portfolio structure and responsive interface with a backend-ready content boundary.
```

Tags:

```text
Next.js · React · TypeScript · Tailwind CSS
```

Status:

```text
Supporting / work in progress
```

Actions:

```text
Read project notes ↗
View source code ↗
```

`Read project notes` is recommended instead of `Read case study` for this project. It communicates that the portfolio itself is not yet a finished case study at the same level as the two project examples.

## 10. Project section closing line

```text
More work will follow as the projects become clearer, stronger, and better documented.
```

This line is optional. It reinforces that the collection is growing without inventing a project count or business outcome.

---

# Act 03 — How I Build

## 11. Act purpose

Act 03 explains the working method behind the projects. It should convert the portfolio from a gallery into evidence of process and engineering thinking.

The process must not imply a formal design methodology that has not been documented. It is a simple working model based on the work already described.

## 12. Section copy

### Act label

```text
ACT 03 / HOW I BUILD
```

### Main headline

```text
From a rough idea to a working interface.
```

### Supporting paragraph

```text
I break a problem into a clear user flow, shape the interface around that flow, then build and refine the experience through code.
```

### Process labels

```text
01 / Understand
Start with the requirement, the user, and the information the interface must make clear.

02 / Shape
Turn the flow into a responsive structure with readable hierarchy and reusable interface sections.

03 / Connect
Bring the interface together with APIs, realtime data, maps, or computer-vision features when the project requires them.

04 / Refine
Test the experience across screen sizes, fix rough edges, and improve the details that affect usability.

05 / Ship
Keep the code organized, document what remains, and move the project toward a usable release.
```

The labels `Understand`, `Shape`, `Connect`, `Refine`, and `Ship` are preferred over `Idea → Design → Code → Interaction → Ship` because they better reflect frontend development and avoid overstating formal UX expertise.

## 13. Experience insert

The factual work experience can appear after the process steps.

### Eyebrow

```text
RECENT EXPERIENCE
```

### Heading

```text
Learning by shipping.
```

### Experience entry

```text
Frontend Development Intern
NCC · Nov 2025 — Mar 2026
```

### Summary

```text
Built responsive React interfaces, translated designs into reusable components, integrated APIs, and collaborated with designers and developers through code reviews, debugging, and iterative improvements.
```

This copy is based on the current portfolio data and should remain unchanged unless the CV or owner-approved source provides a correction.

## 14. Process section closing line

```text
The goal is not to add motion for its own sake. The goal is to make the interface easier to understand and use.
```

This line directly protects the product principle that motion must serve hierarchy, continuity, feedback, or spatial relationships.

---

# Act 04 — About

## 15. Act purpose

Act 04 gives context after the visitor has already seen the work and the process. It should make the portfolio personal without turning into an unsupported personal brand statement.

## 16. Section copy

### Act label

```text
ACT 04 / ABOUT
```

### Eyebrow

```text
A LITTLE ABOUT ME
```

### Main headline

```text
I care about how things work — and how they feel to use.
```

### Body paragraph one

```text
I am Ly Ho, a Frontend Developer with a background in Information Technology. I enjoy turning requirements into responsive interfaces that are clear, practical, and connected to real product behavior.
```

### Body paragraph two

```text
I am also exploring UI/UX to understand how structure, interaction, and visual decisions can make a product easier to use. Frontend development is my current direction; design learning is how I keep improving the way I build.
```

This wording intentionally says `exploring UI/UX` rather than presenting Ly as a professional UI/UX or Product Designer.

### Optional personal line

```text
I am still learning, but I take the details seriously.
```

This line is suitable for a restrained editorial treatment. It should be removed if the final visual direction becomes too poetic or if the section needs to stay more recruiter-focused.

### About supporting link

```text
More about my journey ↗
```

The destination may be LinkedIn or a future About route. It should not be shown as a link until the destination is intentionally defined.

## 17. Toolkit copy

### Eyebrow

```text
TOOLS I USE
```

### Heading

```text
A practical toolkit for building on the web.
```

### Intro

```text
The tools change with the problem. The focus stays on clear structure, responsive behavior, and working interfaces.
```

### Skill list

```text
JavaScript
TypeScript
HTML5
CSS3
React
React Native
Zustand
Git / GitHub
Figma
```

The skill list should remain limited to technologies already documented in the portfolio source of truth.

---

# Act 05 — Contact

## 18. Act purpose

Act 05 is the conversion point. After the visitor understands the work and the person behind it, the copy should provide a direct, low-friction way to start a conversation.

## 19. Section copy

### Act label

```text
ACT 05 / CONTACT
```

### Eyebrow

```text
HAVE SOMETHING WORTH BUILDING?
```

### Main headline

```text
Let’s make it useful.
```

This is shorter and more distinctive than `Let's build something useful`, while preserving the same intent.

### Supporting paragraph

```text
I am open to frontend opportunities, collaborations, and thoughtful conversations about building for the web.
```

### Primary CTA

```text
Start a conversation ↗
```

Destination:

```text
mailto:hoquyly.dev@gmail.com
```

### Supporting links

```text
Email
GitHub
LinkedIn
Resume ↗
```

### Closing line

```text
Thanks for making it this far.
```

This line is optional. It adds a human ending but should only remain if it fits the final visual tone.

## 20. Footer copy

Primary footer line:

```text
© 2026 Kiandas / Ly Ho
```

Secondary footer line:

```text
Built with care, not claims.
```

The second line is aligned with the evidence-first product principle and can remain as a small signature.

---

# 21. Full page copy in reading order

The recommended final reading sequence is:

```text
KIANDAS
Projects · How I build · About · Contact · Resume

ACT 01 / THE SKY
LY HO · FRONTEND DEVELOPER
I build interfaces that connect ideas to real use.
I build responsive web interfaces and connect them to the systems that make products useful — from realtime traffic information to computer-vision features.
See my work ↓
View resume ↗
React · TypeScript · realtime interfaces

ACT 02 / THE WORK
SELECTED PROJECTS
Things I built to make ideas work.
A focused selection of frontend, realtime, and computer-vision work. Each project shows a different way I turn requirements into a working experience.

FEATURED PROJECT / 01
Real-Time Traffic Navigation Dashboard
A driver-facing navigation experience that combines route guidance with realtime traffic and incident awareness from camera and computer-vision signals.
Read case study ↗ · View source code ↗

PROJECT / 02
Vietnamese Food Recognition & Travel Guide
Read case study ↗ · View source code ↗

SUPPORTING PERSONAL PROJECT / 03
Personal Portfolio Website
Read project notes ↗ · View source code ↗

ACT 03 / HOW I BUILD
From a rough idea to a working interface.
Understand → Shape → Connect → Refine → Ship
Learning by shipping.

ACT 04 / ABOUT
I care about how things work — and how they feel to use.
I am Ly Ho, a Frontend Developer with a background in Information Technology.
Frontend development is my current direction; design learning is how I keep improving the way I build.
A practical toolkit for building on the web.

ACT 05 / CONTACT
HAVE SOMETHING WORTH BUILDING?
Let’s make it useful.
I am open to frontend opportunities, collaborations, and thoughtful conversations about building for the web.
Start a conversation ↗
Email · GitHub · LinkedIn · Resume

© 2026 Kiandas / Ly Ho
Built with care, not claims.
```

---

# 22. Copy decisions requiring approval

The following decisions should be confirmed before implementation because they affect the product voice or approved content:

| Decision | Recommendation | Status |
|---|---|---|
| Hero headline | `I build interfaces that connect ideas to real use.` | Draft |
| Hero technical signal | Mention realtime systems and computer vision | Draft |
| Navigation label | `How I build` instead of `Experience` | Recommendation |
| Project section headline | `Things I built to make ideas work.` | Draft |
| Process model | `Understand → Shape → Connect → Refine → Ship` | Recommendation |
| About positioning | `Frontend Developer exploring UI/UX` | Aligned with rules |
| Contact headline | `Let’s make it useful.` | Draft |
| Resume link | Static `/resume.pdf` after redaction review | Missing |
| Project live demos | Add only after URL verification | Missing |
| Theme and visual tokens | Leave unresolved until visual reference is selected | Explicitly deferred |

## 23. Recommended approval order

First approve the Hero headline and supporting paragraph because they define the visitor's first impression. Next approve the project hierarchy and the process labels because they determine the information architecture. Then approve the About and Contact copy. The theme, typography, image treatment, and animation should be selected after the copy hierarchy is stable.

## References

[1]: https://github.com/lyhoquy/DATN "Ly Ho DATN repository"
[2]: https://github.com/lyhoquy/PBL5 "Ly Ho PBL5 repository"
[3]: https://github.com/lyhoquy/Portfolio "Ly Ho Portfolio repository"
[4]: https://github.com/DavidHDev/react-bits "React Bits repository"
[5]: https://ui.aceternity.com/components "Aceternity UI components"
