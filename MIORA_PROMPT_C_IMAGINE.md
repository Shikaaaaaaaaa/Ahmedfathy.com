# PROMPT C — Context pack + references, imagine freely

Different from A and B on purpose. A prescribes a direction. B fixes the existing site.
**C gives Miora the raw material and asks it to invent its own direction.**

**Before pasting:** scroll to the `REFERENCES` block and add your own links in the marked slots.
The more references you add, the less it drifts.

**Privacy note:** this goes to a third-party service. Everything below is written at public-portfolio
level — no client data, no credentials, no internal business logic. Keep it that way when you edit.

---

```
You are art-directing and building a portfolio site. Below is everything about the person and the work.
Do NOT follow a template and do NOT copy the references literally. Study the material, form your own
point of view, and propose an original direction that fits THIS person specifically.

Before you build, state in 3–4 sentences what direction you chose and why it fits him. Then build it.

════════════════════════════════════════════════════════════
PART 1 — WHO HE IS
════════════════════════════════════════════════════════════

Ahmed Fathy. AI Product Engineer. Cairo, Egypt.
BSc Computer Science (software + AI). Currently building at WeIN, a marketplace company.

What he actually does — and this is the positioning the whole site must carry:
He takes an ambiguous, messy business operation and turns it into working production software. He owns
the entire path: discovery with the people doing the work, mapping the real workflow, designing the
system, building it full-stack, adding AI where it genuinely helps, verifying it, and shipping it.

What makes him different from the two obvious comparisons:
- Not a "prompt engineer" — he ships full-stack production systems with auth, data models, and roles.
- Not a generic full-stack dev — he does the product discovery and workflow architecture himself,
  working directly alongside the operators whose jobs the software changes.
- He builds systems where AI does the grinding and a human keeps the judgement. His pipelines end at
  human review gates by design, not by omission.

Tone he should project: senior, calm, evidence-led. Confident without hype. He has shipped real
operational software that real teams use daily — the site must feel like that, not like a student
showcase or an agency pitch.

Contact: af8847492@gmail.com · github.com/AhmeedFathy · linkedin.com/in/ahmed-fathy-5778ba269

════════════════════════════════════════════════════════════
PART 2 — WHAT HE HAS BUILT
════════════════════════════════════════════════════════════

── FLAGSHIP 01 · WeIN Agentic Offer Pipeline ──
Stack: n8n · LLMs · Python · RAG · pgvector
The problem: creating a commercial offer for a merchant was fully manual — reading menu PDFs, opening
competitor tabs, checking past offers for duplicates by hand, verifying locations on maps, rewriting
draft copy repeatedly. Every offer was reassembled from scratch.
What he built: one orchestrated agentic pipeline with explicit stages and data contracts between them:
  Intel → Concepts → Score → Create → Review
Concepts are scored and ranked before anything is written. Validation gates must pass before output:
  merchant grounded · no duplicate offer · location verified
A retrieval layer feeds past providers and competitor research back in as in-context examples, so the
system gets better as it runs.
Critically: the pipeline never publishes on its own. It produces a review-ready offer and stops. The
specialist approves. The grinding is automated; the judgement stayed human.

── FLAGSHIP 02 · WeIN Operations Portal ──
Stack: Flask · Supabase · PostgreSQL · JavaScript · n8n
The problem: provider deals lived across scattered WhatsApp threads, a shared spreadsheet, and memory.
No single source of truth, follow-ups falling through, nobody sure what stage anything was at.
What he built: the team's operating platform. Deals move through explicit stages —
  Intake → Negotiation → Signed → Launched
with role-based access control, in-portal chat and notifications, task and team collaboration,
deal-value tracking, and launch tracking. It started as a negotiation tracker and grew into the
command centre the operations team runs on.

── FLAGSHIP 03 · Clinic Operations SaaS ("Clinic OS") — IN DEVELOPMENT ──
Stack: Product · AI · Full-stack
The problem: small-to-mid clinics run critical work across fragmented phone calls, paper intake forms,
spreadsheets and memory. Intake details get lost, follow-ups slip, rooms get double-booked, and staff
spend their day coordinating instead of moving patients through a clear process.
What he is building: the clinic operating flow itself — structured intake, scheduling, patient records,
billing/cashier, waitlist, team visibility, and reporting, with the internal logic to keep each case
moving reliably.
MANDATORY: this is an active private build. It must be visibly and explicitly marked IN DEVELOPMENT.
Never present it as launched. No customer counts, no uptime claims, no outcome metrics.

── FLAGSHIP 04 · Shore Thing ──
Stack: React 19 · Tailwind · Motion
A six-section brand experience for a beach-sport and DJ event. A conventional event brochure would
communicate logistics but miss the atmosphere, so the site is structured around the event's real
rhythm — arrival → beach games → golden hour → DJ set — using composition, lighting and motion to make
visitors feel the event before they arrive. Bold poster art direction: collage, heavy display type,
saturated colour. This is the one purely expressive project in the set.

── SUPPORTING WORK (archive — must not compete with the four above) ──
· Eldorado Operations Platform — operational tooling
· Retail Profitability Investigation — data analysis
· E-commerce Spending Predictor — regression modelling
· California Housing — ML modelling
· Parkinson's Detection + Severity — health ML
· Business Automation Library — reusable n8n automation workflows
· Fieldwork Estates — agency/property web build
· AI Training Plan Generator — applied LLM tool
· Mono Pedestrian Gallery — visual/web experiment

════════════════════════════════════════════════════════════
PART 3 — WHO THE SITE MUST CONVINCE
════════════════════════════════════════════════════════════
1. Startup founders looking for someone who can own a product technically, end to end
2. AI / product engineering hiring managers
3. Teams building internal tools, operational software, or applied AI systems

All three are busy and skeptical. They have seen a hundred portfolios this month. Assume 30 seconds
of attention before they decide whether to keep reading.

════════════════════════════════════════════════════════════
PART 4 — REFERENCES
════════════════════════════════════════════════════════════

Study these for CRAFT LEVEL and specific techniques. Do not clone any of them.

POSITIVE — what to learn from:

1. https://trionn.com
   Awwwards Site of the Day. Next.js + GSAP + Lenis + Three.js.
   Learn: project cards where REAL product UI is composited into environment photography — a listing
   card, a booking widget, a profile panel layered into the scene. It reads as the product living in
   the world, not a screenshot in a frame. Also: restrained dark palette, 3D wireframe monogram hero
   that never tips into decoration.

2. https://www.awwwards.com/sites/hubtown  (Hubtown, by Unseen Studio)
   Awwwards SOTD + Developer Award. Three.js + WebGL + GSAP.
   Learn: ONE signature cinematic hero scene carrying an entire brand's first impression. A glowing 3D
   form over a dark reflective landscape, with a mouse-reveal interaction where the cursor uncovers
   detail in the geometry and lighting. Proof that one great scene beats decoration everywhere.

3. https://www.voynovich.com/work  (Stefan Vojnovic)
   Learn: calm structure, generous whitespace, large confident typography, clear separation between
   flagship case studies and supporting work, dedicated routes instead of one endless homepage.
   Its weakness is instructive too: the case studies are visually clean but shallow — mostly
   Problem/Process/Outcome paragraphs with few real artifacts. Ahmed's must show far more evidence.

4. https://cynx.io  (Tim Koree)
   Awwwards-recognised personal portfolio. Learn: WebGL motion craft, infinite scroll pacing,
   interaction design at a personal-site scale.

5. https://pacomepertant.com
   Awwwards SOTD portfolio. Learn: confident art direction and pacing for an individual's site.

6. Bruno Simon's portfolio (brunosimon.com)
   Learn: navigation that feels like entering and exploring a place rather than scrolling a document.
   Use the PRINCIPLE, not the driving-game execution.

NEGATIVE — explicit anti-references, do NOT do these:

7. https://www.russellnumo.nl
   Award-recognised, but opens with a 15+ second decorative loading screen whose own caption admits it
   "serves no purpose, it's for the aesthetics." A hiring manager is gone before it loads.
   Never gate content behind spectacle.

8. https://www.vertex3d.asia
   WebGL studio using webcam head- and hand-tracking as navigation. Technically impressive, but it
   makes the visitor fight the interface to reach the work. Novelty must never tax the reader.

>>> ADD YOUR OWN REFERENCES BELOW — replace these lines <<<
9.  [PASTE URL] — what specifically to learn from it: [ONE LINE]
10. [PASTE URL] — what specifically to learn from it: [ONE LINE]
11. [PASTE URL] — what specifically to learn from it: [ONE LINE]
12. [PASTE URL] — ANTI-reference, what to avoid: [ONE LINE]

════════════════════════════════════════════════════════════
PART 5 — YOUR BRIEF
════════════════════════════════════════════════════════════

Invent an original direction for this site. It should be memorable enough that someone who saw it once
could describe it a week later — and legible enough that a skeptical hiring manager gets the point in
30 seconds. Both, not one.

You choose: the structure, the metaphor, the motion language, the palette, the navigation model, and
how the four flagship projects are presented and differentiated from each other.

The one thing you may not do is make it generic.

HARD BANS — every one of these has already been rejected on this project:
· floating particles · glowing orbs · neural-network graphics · abstract holograms · robot imagery
· any visual that could sit on any AI startup's landing page unchanged
Every element must trace back to something real about a product that was actually shipped.

CRAFT BAR — sparse outlined boxes on a flat background read as wireframe, not design:
· Display typography large and confident, tight tracking, real weight contrast
· Genuine depth — layered planes, perspective, lighting that models form
· Material quality — surfaces that look lit rather than filled
· Motion with weight and intentional easing; nothing linear, nothing bouncy
· Density and detail; high-end work is rich, not empty

NON-NEGOTIABLE:
· Legibility beats spectacle. No decorative preloaders. No navigation the visitor must decode.
· prefers-reduced-motion must render a complete, static, fully legible version of everything.
· Mobile conceptually equivalent, not stripped — reflow, don't delete.
· Lazy-load heavy assets; nothing blocks first paint.
· NO FABRICATED METRICS. Any number is either real or absent. Use clearly marked placeholders like
  [METRIC] instead of inventing plausible-looking figures.
· Never imply the Clinic OS SaaS is launched.
· Genuine light mode, art-directed — not a variable swap of the dark theme.
· Include: résumé download, contact, theme toggle, capabilities section, filterable archive.

OUTPUT:
Real, inspectable, exportable code. Structure it so individual sections and scenes can be evaluated
and merged selectively rather than adopted all-or-nothing.

Start by stating your chosen direction and why it fits Ahmed specifically. Then build.
```
