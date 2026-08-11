# Public Automation Repository Audit

Date: 2026-08-11

## Portfolio decision

The portfolio should not send hiring reviewers to the general GitHub profile or to the current `wein-offer-service` repository yet. The Work card now opens a curated internal Automation Systems page. GitHub can become a secondary proof link after the repository is deliberately prepared for public review.

## Current public state

### `Wein-AI-System`

- Contains only a README.
- The README describes the intended offer-generation architecture but provides no executable workflow export, sample data, tests, screenshots, or safe example output.
- It reads as a concept document rather than repository proof.

### `wein-offer-service`

- Contains the deployed Flask service, portal source/build output, templates, tests, documentation, and a very large `_archive_debug_scripts` directory.
- The archive contains many one-off check, patch, polling, and debugging scripts, which makes the repository difficult for an external reviewer to understand.
- The README is out of date: it states there are no automated tests even though a substantial `tests/` tree exists.
- The README describes production deployment details and states that an n8n service-role credential is hardcoded. Do not promote the repository while that remains true. Rotate any exposed credential, move secrets to environment-managed configuration, and verify the complete Git history before treating the repository as public portfolio proof.

## Recommended cleanup sequence

1. Security first: rotate the referenced service-role credential and move all runtime secrets to environment-managed configuration.
2. Audit current files and Git history for credentials, private provider data, internal URLs, generated offer files, and deployment-only details.
3. Decide whether the public artifact should be a sanitized showcase repository or a production-service repository. A sanitized showcase is safer and clearer.
4. Remove the debug archive from the public presentation branch; keep it privately if it still has operational value.
5. Separate generated build output from authored source where possible.
6. Rewrite the README around one reproducible workflow: problem, architecture, safe sample input, workflow diagram, sample output, local setup, tests, and limitations.
7. Add sanitized n8n workflow exports or representative workflow fragments only after credentials and provider information are removed.
8. Add a license, repository topics, description, social preview, and a small architecture image.
9. Verify setup from a clean clone and make automated tests accurate in the README.
10. Only then add a `View source` link from the Automation Systems portfolio page.

## Public-safe automation stories already suitable for the portfolio

- Menu intelligence: provider menu/source → vision and text extraction → structured fields → human review.
- Offer generation: provider context → segmentation and pricing rules + LLM creation → deterministic quality gates → approval.
- Production delivery: approved offer JSON → spreadsheet and PDF files → operational record → next owner/action.

These stories are supported by the public service README and routes, but the portfolio intentionally avoids exposing credentials, private provider data, internal endpoints, or unfinished implementation details.
