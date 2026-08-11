# Joint Portfolio Roadmap

**Status:** approved Claude/Codex direction, awaiting project assets for the flagship implementation phases.

## Strategic decision

Keep the current professional shell and replace the missing evidence layer.

- Baseline: `index.html`, `work.html`, the four `case-*.html` pages, `assets/css/clone.css`, and the existing shared navigation system.
- Technique reference only: `scene-offer-operator.html` for scroll control, operator narrative, and reduced-motion fallback.
- Rejected baseline: `scene-offer-v2.html`; it may not drive the production visual language.

## Two-anchor hierarchy

### Positioning anchor — WeIN Agentic Offer Pipeline

This proves Ahmed's positioning as an AI Product Engineer. It owns the homepage hero and demonstrates agent orchestration, deterministic validation gates, and a human decision point.

### Evidence anchor — WeIN Operations Portal

This proves Ahmed built real operational software. It appears first in Featured Work and receives the densest case-study evidence: real redacted Portal states, workflow movement, and decision annotations.

## Final information architecture

### Homepage

1. Topbar: brand, Work, Stack, Experience, Contact, theme toggle.
2. Hero: one real Offer Pipeline artifact resolving from grounded inputs.
3. Featured Work: Portal, Offer Pipeline, Medical SaaS, Shore Thing.
4. Operating model: Discover → Orchestrate → Build → Verify.
5. Footer and contact path.

### Work page

The evidence hub:

- Four flagship records with real composited evidence.
- Condensed role, problem, workflow, decisions, and current product state.
- Direct links to the individual case studies.
- Restrained archive after the flagship work.

### Case studies

Every case study contains the same evidence fields in the same narrative order, but does not share the same visual template:

1. Role and context.
2. Real operator and problem.
3. Actual workflow stages.
4. Architecture and system connections.
5. Key product or engineering decisions and their rationale.
6. Verification method.
7. Outcome or honest current state.

### Supporting pages

Keep Stack, Experience, and Contact focused and secondary. Do not invest in new spectacle before the four flagship cases are complete.

## Exact homepage hero

### Concept: One grounded offer, assembled

The first viewport is a calm split composition:

- Left: “AI Product Engineer · Cairo,” Ahmed Fathy, one positioning sentence, and two clear actions.
- Right: one real redacted offer artifact inside a restrained evidence frame.
- Above the artifact: three factual input labels — Menu, Competitor Set, Location.
- Below the artifact: Grounded, No Duplicate, Location Verified.
- Final marker: Specialist Approves.

Motion occurs once and rests: sources settle, gates resolve, and the human decision point becomes visible. It is one transaction, not a dashboard simulation.

If the real public-safe offer artifact is unavailable, the hero remains static until one is approved. A fabricated product screen is not an acceptable placeholder.

## Honest composition rule

Allowed:

- Crop, redact, mask, reframe, and sequence real captured product pixels.
- Add annotations, arrows, captions, and stage labels that visibly belong to the portfolio presentation layer.
- Transition between two real captured product states.

Forbidden:

- Invent product values, metrics, charts, confidence scores, cards, notifications, or states.
- Draw portfolio-authored HTML/CSS that could be mistaken for existing product UI.
- Present an in-development system as launched or deployed.

## Flagship scenarios

| Project | Evidence | Visual composition | Motion behavior | Static / reduced-motion state | CTA |
| --- | --- | --- | --- | --- | --- |
| Offer Pipeline | Redacted n8n canvas, real offer output, approved source artifacts | Inputs converge into five named stages and a gated real output | **Convergence:** inputs settle into the workflow, checks resolve once | Complete vertical flow with all checks resolved | Open Offer case |
| Operations Portal | Redacted deal card, stage board, Today queue, launch checklist | Calm annotated gallery with one real deal card as the through-line | **State movement:** real captured states advance through the operating stages | Annotated screenshot grid | Open Portal case |
| Medical SaaS | Approved wireframe or module map only | Blueprint showing modules and connections with a persistent In Development marker | **Assembly:** modules and connectors resolve once | Fully drawn blueprint marked In Development | Read product direction |
| Shore Thing | Campaign artwork, live site, approved screen capture | Full-bleed campaign world with live experience as the proof | **Atmospheric progression:** pacing and tone follow arrival to DJ set | Campaign artwork and live link | Visit live site |

## Shared implementation primitives

Create one small toolkit rather than four animation systems:

- `evidence-frame`: consistent container for real screenshots and artifacts.
- `annotation`: portfolio-authored label, arrow, caption, or marker visibly distinct from product UI.
- `reveal`: one-shot IntersectionObserver reveal.
- `scroll-progress`: rAF-throttled 0–1 scene progress driver.
- `sticky-stage`: optional scaffold for Offer and Shore only.
- Shared motion tokens: duration, easing, distance, and opacity rules.
- Global reduced-motion behavior: render every scene complete and static.

Recommended implementation:

- Add `assets/js/scene.js` for the reusable motion functions.
- Add the shared visual primitives to `assets/css/clone.css` or a narrowly scoped `assets/css/evidence.css` if isolation becomes necessary.
- Harvest math and accessibility techniques from `scene-offer-operator.html`; do not import its character styling wholesale.

## Implementation phases

### Phase 0 — Truth pass

**Files:** `index.html`, `work.html`, `case-saas.html`, and shared labels.

Actions:

- Replace “04 / 04 systems online” with wording that does not imply all four are deployed.
- Keep Medical SaaS explicitly In Development everywhere.
- Remove or qualify “15 workflows” unless Ahmed confirms it is verified and public.
- Search the full live site for unverified hard numbers or launch implications.

Acceptance:

- No page implies Medical SaaS is launched.
- No unverified metric renders.
- Status language is consistent across Home, Work, and case pages.

### Phase 1 — Evidence and motion primitives

**Files:** `assets/css/clone.css`, new `assets/js/scene.js`, affected page script includes.

Actions:

- Build evidence-frame, annotation, reveal, scroll-progress, and reduced-motion primitives.
- Validate the system using a non-sensitive placeholder image clearly marked as presentation-only.

Acceptance:

- Primitives work independently.
- Reduced-motion state is complete and readable.
- Existing navigation, theme, cursor scene, and links do not regress.

### Phase 2 — Operations Portal

**Files:** `work.html`, `case-portal.html`, approved Portal assets.

Prerequisite:

- Ahmed provides or approves public-safe screenshots and required redactions.

Acceptance:

- At least three real annotated Portal frames.
- The product is identifiable within ten seconds without reading long copy.
- State movement uses real captured states.
- Keyboard, mobile, light mode, dark mode, and reduced motion pass.

**Review gate:** Ahmed approves the Portal case before Offer implementation begins.

### Phase 3 — Offer Pipeline

**Files:** `index.html`, `case-offer.html`, `assets/js/scene.js`, shared evidence styles, approved Offer assets.

Prerequisite:

- Public-safe n8n canvas capture and a real redacted offer output.

Acceptance:

- Hero is understandable within ten seconds.
- The hero is one artifact transaction, not a dashboard mockup.
- Inputs, stages, verification gates, and human decision point are clear.
- No fabricated metrics or product pixels.
- Reduced-motion and no-JavaScript views remain complete.

**Review gate:** Ahmed approves the hero and Offer case before Medical begins.

### Phase 4 — Medical SaaS

**Files:** `work.html`, `case-saas.html`, approved Medical visual.

Prerequisite:

- Ahmed approves a public-safe wireframe/module map or explicitly chooses text-only presentation.

Acceptance:

- In Development remains persistent and unmistakable.
- No patient data, customer claims, production claims, or metrics.
- Assembly visual explains the clinic operating flow.

**Review gate:** Ahmed approves before Shore implementation.

### Phase 5 — Shore Thing

**Files:** `work.html`, `case-shore.html`, campaign assets, live/capture assets.

Prerequisite:

- Live URL, embed permission decision, and approved capture.

Acceptance:

- Real campaign artwork leads the composition.
- Live experience is accessible through a clear CTA.
- Atmospheric motion supports the event rhythm without obscuring the case evidence.
- Static fallback keeps the artwork and CTA.

**Review gate:** Ahmed approves before final QA.

### Phase 6 — Full QA

Test all live pages at 360–1440px in dark and light modes.

Acceptance:

- Keyboard focus and navigation are clear.
- Reduced-motion mode is complete.
- No layout overlaps or clipped controls.
- Images remain correctly framed.
- Lighthouse accessibility target: 95 or higher.
- Performance remains usable on a mid-tier mobile device.

## Decisions executable now

- Phase 0 truth pass.
- Phase 1 primitive architecture.
- Case-study evidence-schema markup planning.
- Static-safe homepage hero layout without fabricated product media.

## Inputs required from Ahmed

1. Which Portal screens are public-safe, and what must be redacted?
2. Can a redacted n8n canvas and real offer deliverable be used publicly?
3. Is any Medical SaaS wireframe or module map public-safe?
4. What is the Shore Thing live URL, and may it be embedded or only linked?
5. Is “15 workflows,” or any other metric, verified and approved for public use?

## Definition of success

A hiring manager can understand Ahmed's positioning, recognize real product evidence, and distinguish all four flagship projects within thirty seconds. The site feels professional before motion begins, remains complete when motion is disabled, and never relies on invented product UI or claims.
