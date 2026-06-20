# PeopleGraph

PeopleGraph is a design-first MVP prototype for a private, graph-based personal contacts and relationship intelligence app.

Traditional contacts apps store people as a flat list. PeopleGraph explores a more useful model: each person is a node, each relationship is an edge, and the user can search, filter, and understand how people are connected across family, legal, work, real-estate, college, and local networks.

## MVP Prototype

This repository currently contains a clickable frontend prototype, not a production application.

The prototype is meant to validate product direction, user journeys, interaction design, and the core information model before investing in backend, mobile permissions, sync, authentication, or production graph infrastructure.

Current prototype path:

```text
peoplegraph-prototype/
```

## What The Prototype Demonstrates

- Privacy-first onboarding
- Simulated contacts permission flow
- Simulated contact import using sample data
- Contact selection and duplicate cleanup
- Home dashboard with graph preview
- People list with search and filters
- Person profile with relationship context
- Add relationship flow
- Smart natural-language relationship entry
- Relationship graph view
- Relationship path finder
- Search examples for graph queries
- Empty states
- Settings and privacy controls
- MVP design summary and design QA evidence

## Product Principle

PeopleGraph is not a social network. It is a private relationship memory and intelligence layer.

Core principles:

- The user owns the contact graph.
- Import is opt-in.
- The user chooses which contacts become graph nodes.
- The user confirms relationships before edges are saved.
- Relationship confidence is explicit.
- No automatic or creepy inference happens without review.
- The graph should be useful even with a small network of 20-30 contacts.

## Sample Data

The MVP uses sample contacts across categories such as:

- Family
- Legal contacts
- Software colleagues
- Real-estate contacts
- College friends
- Local Banda contacts
- Delhi contacts

Example people include Vinay Gupta, Rajesh Gupta, Amit Sharma, Rohit Verma, Advocate S. K. Sharma, Priya Singh, Manoj Yadav, Senior Advocate Mehra, Pooja Srivastava, and others.

Example relationships include:

- Vinay Gupta -> Rajesh Gupta: father
- Vinay Gupta -> Amit Sharma: college friend
- Amit Sharma -> Rohit Verma: friend
- Rohit Verma -> Advocate S. K. Sharma: junior of
- Advocate S. K. Sharma -> Senior Advocate Mehra: works with
- Vinay Gupta -> Priya Singh: colleague
- Vinay Gupta -> Manoj Yadav: real estate contact

## Tech Stack

The prototype is built as a lightweight React/Vite frontend.

- React
- Vite
- Phosphor Icons
- CSS-only responsive layout
- Static sample data in the frontend

## Running Locally

From the prototype folder:

```bash
cd peoplegraph-prototype
pnpm install
pnpm run dev
```

Then open:

```text
http://127.0.0.1:5173/
```

If using another package manager, install dependencies first and run the Vite dev script from `peoplegraph-prototype/package.json`.

## MVP Limitations

This is intentionally not a full production app yet.

The MVP does not include:

- Real iOS or Android contact permissions
- Real Google Contacts or phone contact import
- Authentication
- Backend database
- Persistent user accounts
- Encrypted sync
- Production graph database
- Real natural-language parsing
- Real deduplication engine
- Real notifications or reminders
- Production privacy/security implementation

These are represented as prototype screens and simulated interactions so the product experience can be reviewed early.

## Future Full-Fledged Application Work

Next-stage development should focus on turning the prototype into a real local-first relationship graph application.

Recommended roadmap:

1. Product and UX validation
   - Test the prototype with professionals, lawyers, founders, real-estate operators, and consultants.
   - Validate whether users understand relationship types, confidence, strength, and path finding.
   - Refine graph density, filters, and onboarding copy.

2. Data model and architecture
   - Formalize `Person`, `Relationship`, `Tag`, `Interaction`, and `ImportSource` models.
   - Decide between local-first storage, cloud sync, or hybrid encrypted sync.
   - Define relationship direction, confidence, and provenance rules.

3. Real contact import
   - Add mobile contact permission handling.
   - Add Google Contacts import.
   - Build contact selection, exclusion, and deduplication flows.
   - Preserve user control before any contact becomes a node.

4. Graph engine
   - Add a production graph visualization library.
   - Support zoom, pan, cluster grouping, edge labels, node filtering, and mini profiles.
   - Build path finding across relationship types, confidence levels, and trust strength.

5. Relationship intelligence
   - Add natural-language relationship parsing with mandatory confirmation.
   - Add suggested relationship types without auto-saving.
   - Add interaction history and reminders.
   - Add dormant contact detection.

6. Privacy and security
   - Implement local-only mode.
   - Add encrypted backup and export.
   - Add delete-all-data controls.
   - Add clear data ownership and consent boundaries.

7. Production app development
   - Build mobile apps or a responsive PWA.
   - Add authentication only if sync or multi-device usage is required.
   - Add tests, accessibility checks, analytics for product learning, and deployment pipeline.

## Design QA

The prototype includes a design QA report and evidence screenshots:

```text
peoplegraph-prototype/design-qa.md
peoplegraph-prototype/qa-evidence/
```

The current QA result is marked as passed for the MVP prototype.

## Repository Status

This repository currently represents the product design MVP stage of PeopleGraph. The next major milestone is to convert the validated prototype into a production architecture and implementation plan.
