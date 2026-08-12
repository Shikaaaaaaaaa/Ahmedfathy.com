# Decision and Session Log

## 2026-08-11 — WhatsApp added as a direct channel

- Removed the redundant direct-email resource box from the primary Contact panel.
- Added Ahmed's verified Egyptian mobile number as a `wa.me` link using the international format `201142492301`.
- Added a short prefilled introduction so portfolio visitors can start a relevant conversation immediately.
- Added WhatsApp to the Contact page, the home-page Connect group, and supporting-page contact footers.

## 2026-08-11 — Contact page expanded

- Reframed Contact around a useful project brief rather than a minimal generic form.
- Added verified positioning context: Cairo location, AI product/operational-system focus, good-fit problems, useful discovery inputs, and what the first conversation covers.
- Added direct Email, GitHub, and LinkedIn choices inside the primary contact panel.
- Added sender name to the generated email draft and clarified that form data is not stored.
- Kept WhatsApp unpublished until Ahmed supplies a verified number with country code.

## 2026-08-11 — Fieldwork temporarily removed

- Removed Fieldwork Estates from the public Work archive because its deployed experience becomes unresponsive at runtime.
- Removed the same project entry from the legacy portfolio datasets/pages to prevent alternate public paths to the broken experience.
- Kept the Fieldwork source and deployment repositories untouched so the project can return after its smooth-scroll runtime issue is repaired and verified.

## 2026-08-11 — Footer conversion path

- Added Contact to the home-page footer's Navigate group.
- Reserved WhatsApp for the Connect group as a direct professional channel once the verified number is supplied; no placeholder or guessed phone link is published.

## 2026-08-11 — Automation Library expanded beyond WeIN

- Expanded the Automation Systems page from three WeIN flows to five workflows across two product collections.
- Kept WeIN labeled as a production/active system.
- Added two public-safe Medical SaaS workflows covering structured intake coordination and follow-up control.
- Labeled all Medical SaaS automation as in development and explicitly excluded diagnosis or automated clinical decision-making claims.

## 2026-08-11 — Automation showcase and live Fieldwork destination

- Replaced the Workflow Library card's general GitHub-profile destination with a dedicated public-safe Automation Systems page inside the portfolio.
- The showcase explains three real patterns: menu intelligence, hybrid offer generation, and production file/operations handoff.
- Changed Fieldwork Estates to open its verified live GitHub Pages experience instead of the source repository.
- Recorded a separate automation repository audit; source remains unlinked until security and presentation cleanup are complete.

## 2026-08-11 — Shore Thing external link moved inside

- Removed the `Visit live website` action from the Shore Thing record on the Work page.
- The full project record now has one clear destination: its case study.
- The official external website action remains available inside the Shore Thing case study only.

## 2026-08-11 — Premium project evidence treatment

- Reworked the four case-study hero visuals as a single premium evidence system with layered surfaces, controlled depth, edge lighting, and project-specific accent behavior.
- Replaced the long captions beneath the workflow diagrams with concise metadata rails integrated inside each visual frame.
- Preserved the real workflows and Shore Thing campaign artwork; the refinement changes presentation, not project claims.
- Added responsive caption behavior and maintained dark/light theme support.

## 2026-08-12 — Mobile QA pass: tap targets and link hardening

- Audited all ten active pages at 375/390/430px, dark and light mode, via direct DOM/CSS inspection (`getBoundingClientRect` + computed styles) rather than visual screenshots — the in-session browser preview pane had a stale-frame compositing bug unrelated to the site (confirmed by cross-checking every flagged "clipped" screenshot against live computed layout, which was correct in every case). Horizontal-overflow sweep across every page found **zero real overflow bugs**; the site was not actually broken on mobile.
- Found and fixed two real, systemic issues instead:
  1. **Sub-24px tap targets.** `.brand` (topbar logo link, 17px), every `.footer a` link (14px), and the two `.automation-collection > a` case-study CTAs (13px) had no padding, only margin, so their clickable hit area was just the text line box. Fixed in `assets/css/clone.css` and `assets/css/automation.css` by converting surrounding margin to padding of equal total size (preserves existing visual spacing exactly; verified via before/after `getBoundingClientRect` — brand 17px→41px, footer links 14px→30px, automation CTAs 13px→29px). Bumped `clone.css` to `?v=20260812-ux2` and `automation.css` to `?v=20260812-1` across all ten active pages so the fix reaches cached visitors.
  2. **Inconsistent `rel` on `target="_blank"` links**, violating the project's own stated rule. Several links (contact.html footer GitHub/LinkedIn, four work.html archive-card links, index.html footer GitHub) had no `rel` at all; most others had `rel="noopener"` without `noreferrer`. The live DOM looked correct only because `site-system.js` runtime-patches missing `rel` attributes — meaning the source HTML was wrong and the fix depended on JS executing. Hardened `rel="noopener noreferrer"` directly in source across index.html, work.html, case-shore.html, experience.html, stack.html, contact.html, automation.html. Verified via grep: every `target="_blank"` instance in every active page now has the complete attribute in source, independent of JS.
- Did not touch `v1-dashboard.html` through `v5/`, `legacy-index.html`, `elements.html`, `generic.html`, or `scene-offer-*.html` — confirmed via `docs/PROJECT_CONTEXT.md` these are retained experiments, not active/linked production pages.
- Contact form inputs use implicit `<label>` wrapping (`<label>TEXT<input/></label>`), which is valid accessible markup — an initial automated check flagged them as unlabeled because it only checked explicit `for`/`id` association; confirmed a false positive against source before doing anything.

## 2026-08-12 — Mobile image cropping: flagship visuals were showing ~77% cropped fragments

- Root cause: `.work-records .case-media { position: absolute; inset: 0 }` makes each flagship image a full-bleed background spanning the *entire* project record, including all the text content below it. On desktop the record is a wide, short grid (~2.7:1), so `object-fit: cover` only trims ~16% off the image. On mobile the record collapses to a single tall column (~787px tall, ~330px wide, ~0.42:1) — against a ~16:9 source image, `cover` was cropping away ~77% of the image width, leaving only a zoomed-in center fragment visible (confirmed via `getBoundingClientRect`: image box was 332×796px against a 1344×752 / 1672×941 source). This affected all four flagship cards on `work.html` identically, not just Shore Thing.
- Fix: inside the existing `@media (max-width: 600px)` block in `assets/css/work-visuals.css`, capped `.work-records .case-media img` to `height: auto; aspect-ratio: 16/9` so the image renders as a header band close to its native ratio instead of stretching to the full card height. Adjusted the accompanying gradient overlay to keep the fade-to-background transition working with the new, shorter image band. Verified all four cards (`offer`, `portal`, `saas`, `shore`) now render at 1.78 aspect (native) with <1% crop, vs. 76.6% before. Desktop unaffected (still 1.51 aspect, same as before the change) since the fix is scoped to the mobile breakpoint only.
- Found and fixed a related, independent bug on `case-shore.html`: `.evidence-frame--shore .evidence-frame__media` set `aspect-ratio: 16/9` but never explicitly set `height: auto`, so on mobile the rendered height fell back to the raw `height="864"` HTML attribute value (864px) instead of the aspect-ratio-derived ~195px, producing the same style of extreme crop. Fixed by adding `height: auto` alongside the existing `aspect-ratio` declaration — same pattern already verified working on `work.html`. Confirmed correct at both 375px (348×195, 1.78 aspect) and 1440px (1195×672, 1.78 aspect).
- Confirmed `case-offer.html`, `case-portal.html`, `case-saas.html` are unaffected: their evidence visuals are hand-built CSS/HTML diagrams (`.offer-pipeline`, etc.), not photos, so this crop mechanism doesn't apply to them.
- Bumped cache-busting versions: `work-visuals.css` → `?v=20260812-1`, `evidence.css` → `?v=20260812-1` (on all four case pages).

## 2026-08-12 — Mobile nav: bottom tab bar replaces the hamburger dropdown

- On request: mobile's collapsed hamburger menu hid all 5 destinations behind a tap, while desktop shows them inline. Replaced with a fixed bottom tab bar (same pattern as native app navigation) inside the existing `@media(max-width:560px)` block in `hero-section.css` — all 5 links (Home/Work/Stack/Experience/Contact) are now always visible, pinned to the bottom of the viewport. Top bar simplifies to logo + theme toggle only on mobile.
- Reused the existing shared `<nav class="nav">` markup already identical across all 10 pages — no HTML duplication, CSS-only change.
- Added `env(safe-area-inset-bottom)` padding so it clears the home-indicator on notched iPhones, and matching `body{padding-bottom}` so the fixed bar never covers the footer or last section of any page.
- `.mobile-nav-toggle` (hamburger button, injected by `site-system.js`) is now `display:none` on mobile — still created by JS (harmless, inert, correctly removed from the accessibility tree by `display:none`) rather than removing the injection code, to keep this change CSS-only and lower-risk.
- Desktop unaffected — change is scoped entirely inside the mobile breakpoint.

## 2026-08-12 — Second copy of the fragile CSS-injection bug, found in `site-system.js`

- While investigating a "still not appears" report, found that `site-system.js` (loaded on every page) had the *same* anti-pattern already fixed in `clone.js` earlier today: it unconditionally rewrote `hero-section.css`'s `<link>` href back to a hardcoded old version string (`?v=20260811-ux1`) on every page load — silently undoing any cache-bust version bump made earlier that same session, including several made earlier today. This was missed during the first pass because `clone.js` and `site-system.js` are separate files and only `clone.js` was audited at the time.
- Also removed the same dead-code `.page-scene` fallback-creation check present in this file (the earlier, unconditional creation logic elsewhere in the same script already guarantees `.page-scene` exists by the time this check runs, so the condition could never be true).
- Bumped `site-system.js` to `?v=20260812-1` across all ten active pages.
- **Follow-up for any future JS edit in this repo:** grep for `hero-section.css` across `assets/js/*.js` before assuming a stylesheet fix is complete — confirmed via this bug that more than one file was silently overriding it.

## 2026-08-12 — Contact page: no visible/fallback way to get the email address if mailto fails

- Audited `contact.html`, `clone.js`, and `site-system.js` for anything blocking the `mailto:` links or the "Prepare Email" form handler — found no interception (no global click handlers, the `a[target="_blank"]` rel-hardening loop only touches external links, the form's `preventDefault` is correctly scoped). The mailto links and form handler are correctly formed.
- The real gap: the email address was never rendered as visible text anywhere on the page — only hidden inside the `mailto:` href. `mailto:` links only work if the visitor's browser/OS has a mail client registered as the default handler, which is common to not have (especially on desktop, or inside sandboxed preview/embed frames, which frequently block `mailto:` navigation outright) — and when it silently does nothing, there was previously no way to recover the address.
- Fix: added the address as always-visible plain text (`Email → af8847492@gmail.com`) to the existing `.contact-facts` list, and added a "Copy email" button next to the Email link using `navigator.clipboard.writeText`, with a 1.8s "Copied" confirmation state. This works regardless of whether a mail client is registered.
- Verified the click handler logic directly (captured the argument passed to a stubbed `clipboard.writeText`, confirmed the label/class toggle on click and correctly reverts after the timeout) since this session's browser preview pane cannot reliably composite a real click for a visual screenshot confirmation.
- Bumped `contact.css` → `?v=20260812-1`, `clone.js` → `?v=20260812-ux4`.

## 2026-08-12 — hero-section.css was only ever loaded via a fragile JS injection

- Root cause: `assets/css/hero-section.css` — which carries the topbar background, `.hero-upgraded` layout, and the flagship `.case-record` grid used on `work.html` — was never linked in any page's `<head>`. It was injected at runtime by `assets/js/clone.js`: `document.head.append()` with an *unversioned* URL, then a `queueMicrotask` immediately rewrote the same `<link>`'s `href` to the versioned URL — aborting the first fetch and restarting a second one. This meant a page's core layout CSS depended on `clone.js` (a blocking, non-`defer` script placed near the end of `<body>`) executing successfully, added an unnecessary network round trip, and risked a flash of incorrectly-laid-out content on any slow or interrupted connection. The `queueMicrotask` block also contained a `.page-scene` fallback-creation check that was already dead code — the same IIFE unconditionally creates `.page-scene` earlier if missing, so the later condition could never be true.
- Fix: added a normal `<link rel="stylesheet" href="assets/css/hero-section.css?v=20260812-1">` directly after the `clone.css` link in all ten active pages' `<head>`, and removed the injection + the dead fallback block from `clone.js` entirely. Bumped `clone.js` to `?v=20260812-ux3` (it was never version-bumped despite earlier same-day edits, so it was serving stale cached JS until this fix — worth double-checking cache-bust versions any time a `.js`/`.css` file's *content* changes, not just when its own bug is being fixed).
- Verified via `curl` directly against the local static server (bypassing the browser, since this session's preview pane has a persistent HTML/asset caching artifact unrelated to the site itself — confirmed separately by comparing served content to disk content, which always matched): every active page now serves exactly one `hero-section.css` link at the correct version, `clone.js` serves the correct trimmed version, and the old injection code returns zero matches anywhere in the served JS.

This log is deliberately short. Add an entry whenever a change affects positioning, content truth, visual direction, navigation, or implementation structure.

## 2026-08-11 — Flagship records become full-card links

- Removed the repeated `Open complete case study` text actions from all four flagship records.
- Added one semantic, accessible full-surface link to each record so clicking anywhere opens that project's complete case study.
- Preserved Shore Thing's `Visit live website` action above the full-card link as the only project-specific secondary destination.
- Added visible keyboard focus treatment and confirmed pointer navigation for the full-card links.

## 2026-08-11 — Shore Thing live experience linked

- Corrected the production experience URL to the official domain: `https://shorething-eg.com/`.
- The Shore Thing artwork and a primary `Visit live website` CTA on the Work page now open the live experience in a new tab.
- The complete case-study link remains available as a separate secondary action.
- Added the same live-site CTA to the Shore Thing case-study header.

## 2026-08-11 — Flagship visuals merged into project records

- Changed the four flagship records from a separate image-plus-content layout into one immersive project canvas.
- Each evidence image now fills its complete project record; a theme-aware vertical fade protects the detailed case-study text without turning it into a detached card.
- Dark mode fades into the navy project surface, while light mode fades into a frosted white reading surface.
- Verified the merged layout at desktop and 390px mobile widths with no overflow or browser errors.

## 2026-08-11 — Work page visual evidence pass

- Added a dedicated visual to every flagship record on `work.html`; Shore Thing keeps its real campaign artwork, while Offer Pipeline, Operations Portal, and Medical SaaS use project-specific editorial evidence scenes built from their real workflow artifacts.
- Added six distinct supporting-project thumbnails using one optimized sprite sheet: retail profitability, e-commerce regression, California housing, Parkinson's detection, workflow automation, and property preview.
- Kept all generated visuals free of invented metrics, private records, branded UI, or unsupported product claims.
- Added responsive, light-mode, reduced-motion, and accessible text alternatives for the new visual system.
- Converted generated PNG sources to optimized WebP assets, reducing the four page assets from roughly 9 MB to about 0.5 MB total.

## 2026-08-11 — Production readiness phase started

- Corrected homepage and Work-page claims so the portfolio does not imply that unfinished work is live or attach unverified workflow counts.
- Operations Portal now leads Featured Work as the strongest evidence case; Offer Pipeline remains the positioning anchor.
- Medical SaaS is labeled `In Development` everywhere and its case metadata describes the current private implementation stage.
- Added shared, progressively enhanced evidence primitives with reduced-motion and light-mode support.
- Shore Thing is the first flagship to use the new evidence treatment, using approved campaign artwork rather than invented product UI.
- Added search metadata and clearer contact-form behavior across the live site.

## 2026-08-11 — Four flagship evidence system completed

- Offer Pipeline now opens with a brief-to-decision architecture showing its four agent stages and three explicit quality gates.
- Operations Portal now opens with a lead-to-launch operating map and the real connected system layers behind it.
- Medical SaaS now shows a privacy-safe clinic workflow and repeats its in-development state inside the evidence itself.
- All four evidence scenes use one shared toolkit but retain project-specific content and behavior; mobile layouts were checked at 390px with no horizontal overflow.

## 2026-08-11 — Claude debate prepared

- Added `docs/CLAUDE_DEBATE_BRIEF.md` with the repository context, references, factual constraints, and a three-round Claude/Codex review protocol.
- Claude Code is installed locally, but its OAuth session is expired. No Claude review has been completed yet.
- Next action: authenticate Claude Code, run the read-only first round, challenge its proposal, and synthesize the result into `docs/PORTFOLIO_ROADMAP.md`.

## 2026-08-11 — Claude/Codex debate completed

- Claude Opus completed an independent repository audit and a second revised round after Codex challenged seven parts of the first recommendation.
- Added `docs/CLAUDE_DEBATE_SUMMARY.md` and `docs/PORTFOLIO_ROADMAP.md`.
- Final baseline: evolve the current production shell; do not rebuild from `scene-offer-v2.html`.
- Final hierarchy: Offer Pipeline is the homepage positioning anchor; Operations Portal is the evidence anchor and first Featured Work case.
- Final implementation approach: one shared evidence/motion toolkit with four project-specific behaviors and a review gate after every flagship.
- Immediate next step: Phase 0 truth pass, followed by Phase 1 primitives. Portal and Offer implementation remain blocked on public-safe assets.

## 2026-08-11 — Collaboration baseline created

- Confirmed the project is already a local Git repository with remote `AhmeedFathy/Ahmedfathy.com`.
- Added `README.md` and `docs/PROJECT_CONTEXT.md` as the shared source of truth for multi-agent work.
- Preserved all existing uncommitted site work and experiments; this documentation commit must not be treated as a code baseline or a replacement for those files.
- Agreed current direction: retain the portfolio’s restrained professional shell, but take the reference’s stronger project storytelling model — **Before → System in motion → Outcome**.

## 2026-08-11 — Reference review: narrative structure

- Reviewed `C:\Users\af200\Downloads\1786404906142-no82iw763gj.html` at source level.
- Insight adopted: identify the operator, name concrete before-state artifacts, show the system stages, and state the human/product outcome.
- Insight rejected: copy its generic dark-glass cards, repeated phase-card template, excessive pills, or visual placeholders.
- Action: future flagship project scenes must combine real project evidence with project-specific motion rather than share one card template.

## 2026-08-10 — Shore Thing project visual

- Replaced a small generic screenshot treatment on `work.html` with the real Shore Thing campaign artwork.
- Asset: `assets/images/shore-thing-home-board.png`.
- Decision: project art must function as evidence of the project’s actual identity, not generic decoration.

## 2026-08-10 — Flagship scope and content truth

- Main projects are: WeIN Agentic Offer Pipeline, WeIN Operations Portal, Medical SaaS / Clinic OS, and Shore Thing.
- Medical SaaS is explicitly in development. Its public case study may describe the clinic problem and current build direction but must not imply launch, traction, or unverified results.
- Archive projects remain supporting work and should not compete with the four flagship projects.

## 2026-08-10 — Navigation and case-study behavior

- Featured Work calls-to-action lead directly to their individual case-study pages.
- AI Profile was removed from live navigation; the file remains retained but unlinked.

## 2026-08-11 — Production UX audit fixes completed

- Replaced the broken mobile navigation state with an accessible menu that exposes every primary destination, reports its open state, closes after selection, and supports Escape.
- Added skip links and consistent keyboard focus treatment across every active page.
- Upgraded Capability Stack accordions with stable relationships, `aria-expanded`, region labels, and synchronized hidden state.
- Corrected the Work-page heading hierarchy without changing its visual presentation.
- Hardened all new-tab links with `noopener` and `noreferrer` at runtime.
- Added canonical URLs, Open Graph previews, and Twitter large-image cards to every active page.
- Removed the retired `ai-profile.html` page rather than leaving stale public content discoverable.
- Added `robots.txt` and `sitemap.xml` for the ten active production pages.
- Added cache-busting versions to the shared UX scripts and styles so the deployed corrections reach returning visitors immediately.

## Open questions

- Which public-safe real artifacts can be used for Offer Pipeline, Operations Portal, and Medical SaaS?
- Should the homepage be rebuilt around a single signature scene, or should the Work page become the first primary project narrative?
- Which experiment, if any, should become the next implementation baseline: `scene-offer-operator.html`, `scene-offer-v2.html`, or the current `work.html` system?
