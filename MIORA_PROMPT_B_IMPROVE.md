# PROMPT B — Improve the existing Codex-built site

Paste everything inside the code block into Miora. This one keeps the structure that already works
and asks for the production layer that is missing.

```
You are improving an EXISTING portfolio site, not replacing it. The current structure and information
architecture are good and must be preserved. What is missing is the production finish — depth,
material, signature visual identity, and real product evidence. Elevate it; do not restructure it.

=== WHOSE SITE ===
Ahmed Fathy — AI Product Engineer, Cairo. He owns operational products end-to-end: from an ambiguous
business problem through workflow discovery, agentic AI architecture, full-stack implementation,
verification, and release.

=== WHAT ALREADY EXISTS (keep all of this) ===
A hand-built multi-page static site — HTML/CSS/JS, no framework:
- index.html — floating glass top nav; hero with a large background image and animated role line;
  a four-card "Featured Work" teaser grid inside one glass panel; an "operating model" section with
  four steps (Discover / Orchestrate / Build / Verify)
- work.html — detailed case records for the four flagship projects, each laid out as
  Problem / System / Workflow / Output columns, plus a filterable "Built Projects" archive
- case-offer.html, case-portal.html, case-saas.html, case-shore.html — individual case-study pages
- stack.html, experience.html, contact.html, ai-profile.html
- Working light/dark theme toggle
- Palette: deep navy (#090d14) with a blue accent; Manrope for text, DM Mono for labels
- Reference direction already chosen: Stefan Vojnovic — calm layout, generous whitespace,
  engineering evidence visible inside the polish

Keep: the page structure, the navigation model, the four-project hierarchy, the typeface pairing,
the dark-navy + blue identity, and the light/dark toggle.

=== THE DIAGNOSED GAPS — fix exactly these ===

1. THE HERO IS FLAT.
   It has a background photo and type, but no depth and no signature object. It reads as a stock
   header. Give it real dimensionality: layered planes at different Z, cursor-driven parallax,
   atmospheric lighting, and one signature visual object representing "product systems engineering"
   that is unmistakably this site's own.

2. THERE IS NO SIGNATURE VISUAL SYSTEM.
   This is the core problem. The site borrows Vojnovic's cleanliness without developing an identity
   of its own, so "professional" became "safe" and safe became plain. Invent one custom visual system
   — a recurring object/motif with fragments echoed faintly across sections — that makes the site
   memorable and belongs to nobody else.

3. THREE OF FOUR PROJECT CARDS HAVE NO REAL EVIDENCE.
   Only Shore Thing has real artwork; the Offer Pipeline, Operations Portal and Medical SaaS cards use
   flat CSS gradient/dot patterns. This makes the AI/product work — the work that actually matters for
   hiring — look weaker than the brand-experience project. Give all four real product evidence,
   composited into designed scenes: actual interface fragments (a negotiation card, a validation
   checkmark, an intake row, a scoring bar) staged with depth and lighting. Not flat screenshots in a
   frame. Not illustrated icons standing in for UI.

4. THE CASE-STUDY PAGES ARE TEXT-ONLY.
   Clicking into a case study is a letdown after the richer card. Each needs interface states,
   workflow diagrams, architecture evidence, and visual artifacts — not four paragraphs.

5. THE LIGHT THEME IS A VARIABLE SWAP.
   It currently just re-colours the dark theme and feels especially plain. Art-direct it as a genuine
   alternative appearance with its own lighting logic.

6. THE FOOTER IS SPARSE and looks unfinished. Build it into a real sitemap with recent work and
   visual continuity from the page above.

7. MOTION IS ONLY FADE-AND-TYPE.
   Add intentional transitions, hover states with real material response, and cursor-driven lighting.
   Every motion must explain a workflow, a state change, or an outcome — never decorate.

8. ai-profile.html IS AN ORPHAN — it is not linked from any navigation, and its "MCP endpoint" is
   placeholder text rather than a real endpoint. Either wire it into the nav and make it honest about
   being a structured public profile, or remove it entirely. Do not leave a fake technical claim live.

=== CRAFT BAR ===
- Display type at 100px+ desktop, tracking -5% to -6%, mixed weights (200 against 800)
- Glass surfaces with heavy backdrop blur, layered inset highlights, dual-layer shadows
- Film grain overlay so surfaces don't read as flat vector
- Easing in the cubic-bezier(.16,1,.3,1) family — nothing linear, nothing bouncy
- Density: sparse outlined boxes read as wireframe, not design

=== HARD BANS ===
No floating particles, glowing orbs, neural-network graphics, abstract holograms, or robot imagery.
These have already been rejected. Every visual must trace back to something real about a shipped
product.

=== THE FOUR FLAGSHIP PROJECTS (real details — use them, don't invent) ===
1. WeIN Agentic Offer Pipeline — n8n · LLMs · Python · RAG.
   Real stages: Intel → Concepts → Score → Create → Review.
   Real validation gates: merchant grounded, no duplicate, location verified.
   Ends at a human review gate — the pipeline never publishes on its own.
2. WeIN Operations Portal — Flask · Supabase · JavaScript · n8n.
   Real stages: Intake → Negotiation → Signed → Launched. Includes portal chat, notifications,
   role-based access, and launch tracking.
3. Medical SaaS / Clinic OS — Product · AI · Full-stack. Modules: Intake, Scheduling, Patient Record,
   Cashier/Billing, Team, Reports. MUST stay visibly marked IN DEVELOPMENT — never shown as launched.
4. Shore Thing — React 19 · Tailwind · Motion. A six-section beach-sport and DJ brand experience
   following the real event rhythm: arrival → beach games → golden hour → DJ set.
   Real poster artwork already exists and should anchor this project's art direction.

ARCHIVE (keep, keep calm, must not compete with the four): Retail Profitability Investigation,
California Housing, E-commerce Spending Predictor, Parkinson's Detection + Severity, Business
Automation Library, Eldorado Operations Platform, Fieldwork Estates, AI Training Plan Generator,
Mono Pedestrian Gallery. Filters: Products / AI + Automation / Data + ML.

=== NON-NEGOTIABLE CONSTRAINTS ===
- Legibility beats spectacle — a hiring manager with 30 seconds must grasp the value immediately.
  No decorative preloaders, no gatekeeping intros.
- prefers-reduced-motion renders a complete, static, legible version of everything.
- Mobile conceptually equivalent, not stripped.
- NO fabricated metrics. Any number is either real or absent — use clearly marked placeholders.
- Never imply an unfinished product is launched.

CONTACT: af8847492@gmail.com · github.com/AhmeedFathy · linkedin.com/in/ahmed-fathy-5778ba269

=== OUTPUT ===
Return improved, inspectable, exportable code that preserves the existing page structure and file
organisation, so changes can be merged into the current hand-built site section by section rather
than adopted wholesale.
```
