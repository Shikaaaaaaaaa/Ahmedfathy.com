# Shared Project Context

**Last updated:** 2026-08-11
**Owner:** Ahmed Fathy
**Use this as:** the source of truth for Codex, Claude, and any other collaborator before modifying the portfolio.

## Goal

Create a portfolio that convinces a hiring manager, founder, or client that Ahmed can build professional operational products end-to-end. It must feel intentional and specific to the work — not like an AI-generated portfolio template.

## Positioning

> Ahmed Fathy is an AI Product Engineer in Cairo who turns messy operating work into reliable software, agentic workflows, and production systems.

The site is not an art gallery of screenshots. It is evidence of how Ahmed thinks about a business problem, the operating workflow, the implementation, verification, and the resulting product state.

## Audience

- Hiring managers and product/engineering leaders assessing seniority and judgment.
- Founders and operators assessing whether Ahmed can own a system from problem discovery to working software.
- Potential collaborators evaluating design, implementation, and systems thinking.

## Flagship projects

| Project | Operator / audience | Before | System | Proof artifact / visual direction | Status |
| --- | --- | --- | --- | --- | --- |
| **WeIN Agentic Offer Pipeline** | Offer specialist | Provider PDFs, WhatsApp, maps, spreadsheets, repeated drafts, manual verification | Intel → Concepts → Score → Create → Review, with grounding, duplicate, and location checks | Real workflow / review-ready offer state; agents and gates should visibly resolve the manual mess | Active project |
| **WeIN Operations Portal** | Sales / operations lead | Deals, follow-ups, contracts, and launch steps scattered across memory, messages, and sheets | Shared operating board: Lead → Provider → Offer → Deal → Launch | Real portal UI fragments: deal card, stage column, notification, launch checklist | Active project |
| **Medical SaaS / Clinic OS** | Clinic receptionist / front desk | Calls, paper intake, reminders, double-booked rooms, fragmented patient coordination | Structured intake, scheduling, patient follow-up, team visibility, internal workflow logic | Approved clinic workflow / module composition; use only public-safe material | **In development** — do not imply production launch or invent outcomes |
| **Shore Thing** | Event visitor | A normal event page cannot make visitors feel the event atmosphere | Six-section React brand experience paced through arrival, beach games, golden hour, and DJ set | Real Shore Thing campaign artwork: `assets/images/shore-thing-home-board.png` | Built brand experience |

## Visual direction

### What is approved

- Restrained, editorial shell: calm hierarchy, confident typography, generous spacing, usable navigation.
- Dark-first with a real light mode that is visually coherent, not only a color-variable switch.
- Each flagship project gets a distinct scenario and motion grammar.
- Motion must demonstrate a workflow, state change, or consequence; it is never decoration alone.
- Direct case-study links from each project preview.
- Real project evidence is prominent: screenshots, approved design fragments, branded campaign art, or workflow-specific artifacts.
- Shore Thing’s campaign artwork is a full project visual, not a tiny thumbnail.

### What to avoid

- Generic floating particles, neural networks, robot imagery, glowing orbs, fake dashboards, or decorative “AI” graphics.
- Uniform card templates that make four different products feel like the same project.
- Generic glassmorphism, pill overload, or animation that fails to explain a real process.
- Long preloaders, difficult navigation, or spectacle that delays understanding.
- Claims, metrics, customers, or outcomes that are not verified for public use.

## Reference synthesis

The current work should take **principles**, not copy layouts.

- **Stefan Vojnovic:** clean, confident editorial framing and real engineering evidence.
- **TRIONN / reference project scenes:** project-specific compositions made from real UI fragments rather than flat screenshots.
- **New reference HTML (2026-08-11):** strongest for its story model — named operator, specific “before” artifacts, system running, and outcome. Weaknesses to avoid: generic glass cards, pill-heavy Tailwind feel, a plain hero, and visual placeholders instead of real project media.
- **Shore Thing campaign asset:** demonstrates the correct standard for a project visual: unmistakably tied to the actual project.

## Story model for each flagship case study

Use this sequence, but let the visual composition differ by project:

1. **Before** — name the real operator and the concrete manual mess.
2. **System in motion** — show the actual stages, modules, or board states that Ahmed built.
3. **Outcome** — show the human’s upgraded role or the resulting product artifact, not vague success language.

For the Offer Pipeline, the result is a review-ready offer and a visible human decision point.
For Operations Portal, the result is an operator working actual blockers rather than chasing status.
For Clinic OS, the result is a front desk moving from transcription to triage; it remains explicitly in development.
For Shore Thing, the result is an event atmosphere people can feel before arriving.

## Current implementation map

| Area | Main files |
| --- | --- |
| Homepage | `index.html`, `assets/css/clone.css`, `assets/css/hero-section.css`, `assets/js/clone.js`, `assets/js/hero-motion.js` |
| Work / flagship overview | `work.html`, `assets/css/hero-section.css` |
| Individual case studies | `case-offer.html`, `case-portal.html`, `case-saas.html`, `case-shore.html` |
| Shared site behavior / navigation | `assets/js/site-system.js` |
| Supporting pages | `stack.html`, `experience.html`, `contact.html` |
| Real Shore asset | `assets/images/shore-thing-home-board.png` |
| Experiments / references | `scene-offer-operator.html`, `scene-offer-v2.html`, `v1-dashboard.html` through `v5/`, `MIORA_*.md` |

## Current state and known decisions

- The four flagship projects are the homepage and work-page priority.
- Archive work is intentionally secondary. Eldorado, Training Plan Generator, and Mono Pedestrian were removed from the visible main work focus.
- The live navigation no longer links to AI Profile; `ai-profile.html` is retained on disk only.
- Featured Work links go directly to each relevant case-study page.
- Medical SaaS has been renamed from “SaaS in Development” and its public description now explains the clinic workflow and its in-development status.
- Work-page cursor light / scene glow was extended beyond the homepage. Verify visually after any future CSS or JS system change.
- Shore Thing now uses the actual campaign artwork on the Work page. This is the reference standard for the other flagship visuals.
- The visual direction is currently incomplete: Offer Pipeline, Operations Portal, and Medical SaaS still need real visual evidence equivalent in specificity to Shore Thing.

## Next build sequence

1. Create a real **Offer Pipeline** scene: messy inputs → five stations → verification gates → review-ready offer.
2. Create a real **Operations Portal** scene using approved portal fragments / screenshots.
3. Create a public-safe **Clinic OS** scene built from actual modules and workflow, prominently marked In Development.
4. Bring every individual case-study page into the same visual system while preserving project-specific composition.
5. QA desktop, mobile, dark mode, light mode, keyboard focus, and reduced motion.

## Collaboration protocol

Before suggesting a change, each agent should answer:

1. Which flagship project and which user-facing problem does this change improve?
2. Is the visual real evidence, a workflow-specific construction, or generic decoration?
3. Does it make the project more understandable in a 30-second review?
4. Does it preserve the project’s actual public status and facts?
5. Which file(s) will change and what needs regression testing?

After a material change, add a dated entry to `docs/DECISION_LOG.md`.
