# How to judge A vs B

Run both prompts, then score each output on the same 8 questions. Don't judge on first impression —
the flashier one usually wins that and it's the wrong signal.

| # | Question | Why it matters |
|---|---|---|
| 1 | **In 5 seconds, can you tell what Ahmed does?** | Hiring managers don't scroll. If the positioning isn't instant, nothing else counts. |
| 2 | **Does it look like it belongs to nobody else?** | The current site's real failure is that it looks like a good template. A distinct identity is the whole point. |
| 3 | **Do all four projects feel equally strong?** | Today Shore Thing outshines the AI/product work. If the output repeats that imbalance, it failed. |
| 4 | **Is there real product evidence, or just styling?** | Interface fragments, workflow states, artifacts — versus gradients and icons. |
| 5 | **Did it sneak in banned AI clichés?** | Particles, orbs, neural nets, holograms. Check honestly — these creep back in. |
| 6 | **Does it fabricate any metric or claim?** | Any invented number, customer count, or "launched" language for the Medical SaaS is disqualifying. |
| 7 | **How fast does it become useful?** | Long preloaders, gatekeeping intros, decode-the-navigation = fail, regardless of how pretty. |
| 8 | **Could you actually ship and maintain it?** | Exportable code you can merge beats a beautiful black box you can't edit. |

---

## What each prompt is really testing

**Prompt A (fresh build)** — tests whether a from-scratch, narrative-led, cinematic direction can beat
what you already have. Upside: a genuine identity, no inherited compromises. Risk: throws away
working structure, and generative tools drift toward generic spectacle when given freedom.

**Prompt B (improve existing)** — tests whether the current site's bones are good and only the
production finish was missing. Upside: keeps months of structural work, lower risk, mergeable.
Risk: inherits the "safe" ceiling — polishing a template still leaves a template.

---

## My honest prediction

**B will probably produce the more usable output; A will probably produce the more impressive one.**

The best outcome is likely neither wholesale: take A's signature visual system and project scenes,
and graft them onto B's structure. That's why both prompts end with the same instruction — return
mergeable, section-by-section code rather than an all-or-nothing site.

---

## Before you run either

Commit a checkpoint first. Everything past the old Colab notebooks in `D:\Ahmed-Portfolio` is
**uncommitted** — `index.html` is modified and ~25 files are untracked. If you're going to start
pasting generated code around, protect the current state:

```bash
cd /d/Ahmed-Portfolio && git add -A && git status
```

Review what's staged, then commit. (I haven't committed anything — that's your call.)
